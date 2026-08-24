"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "gizpay-audit-checklist";

function useAuditStorage(id: string) {
  const [checked, setChecked] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const map = JSON.parse(raw) as Record<string, boolean>;
        setChecked(!!map[id]);
      }
    } catch {
      /* ignore */
    }
    setLoaded(true);

    const onUpdate = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const map = JSON.parse(raw) as Record<string, boolean>;
          setChecked(!!map[id]);
        }
      } catch {
        /* ignore */
      }
    };
    window.addEventListener("audit-checklist-update", onUpdate);
    return () => window.removeEventListener("audit-checklist-update", onUpdate);
  }, [id]);

  const toggle = () => {
    const next = !checked;
    setChecked(next);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const map = raw ? (JSON.parse(raw) as Record<string, boolean>) : {};
      map[id] = next;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
      window.dispatchEvent(new Event("audit-checklist-update"));
    } catch {
      /* ignore */
    }
  };

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
  const [done, setDone] = useState(0);

  useEffect(() => {
    const refresh = () => {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return setDone(0);
        const map = JSON.parse(raw) as Record<string, boolean>;
        setDone(Object.values(map).filter(Boolean).length);
      } catch {
        setDone(0);
      }
    };
    refresh();
    window.addEventListener("audit-checklist-update", refresh);
    return () => window.removeEventListener("audit-checklist-update", refresh);
  }, []);

  return (
    <span className="font-mono text-xs text-muted-foreground">
      {done}/{total} achados lidos
    </span>
  );
}
