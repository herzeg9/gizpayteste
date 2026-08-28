"use client";

import { useCallback, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { useHydrated } from "@/lib/client-hooks";

const STORAGE_KEY = "gizpay-audit-checklist";
const EVENT = "audit-checklist-update";

function readMap(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

function readChecked(id: string): boolean {
  return !!readMap()[id];
}

function readDone(): number {
  return Object.values(readMap()).filter(Boolean).length;
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function useAuditStorage(id: string) {
  const loaded = useHydrated();
  const checked = useSyncExternalStore(
    subscribe,
    useCallback(() => readChecked(id), [id]),
    () => false,
  );

  const toggle = useCallback(() => {
    try {
      const map = readMap();
      map[id] = !map[id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
      window.dispatchEvent(new Event(EVENT));
    } catch {
      /* ignore */
    }
  }, [id]);

  return { checked, loaded, toggle };
}

export function AuditItemCheck({ id, label }: { id: string; label: string }) {
  const { checked, loaded, toggle } = useAuditStorage(id);

  if (!loaded) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      className="mt-3 flex w-full items-center gap-2 border-t pt-3 text-left"
    >
      <span
        className={cn(
          "grid size-4 shrink-0 place-items-center rounded border text-[10px]",
          checked ? "border-primary bg-primary text-primary-foreground" : "border-border",
        )}
        aria-hidden="true"
      >
        {checked ? "✓" : ""}
      </span>
      <span className={cn("text-xs", checked ? "text-muted-foreground line-through" : "text-muted-foreground")}>
        {checked ? "Revisado" : label}
      </span>
    </button>
  );
}

export function AuditProgress({ total }: { total: number }) {
  const done = useSyncExternalStore(subscribe, readDone, () => 0);

  return (
    <span className="font-mono text-xs text-muted-foreground">
      {done}/{total} achados lidos
    </span>
  );
}
