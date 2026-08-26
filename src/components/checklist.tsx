"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Check, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useHydrated } from "@/lib/client-hooks";

export type ChecklistGroup = {
  title: string;
  items: string[];
};

const EMPTY: string[] = [];
const EVENT = "estudio-giz:checklist-alterado";

// Snapshot memoizado por chave: useSyncExternalStore exige referência estável
// enquanto o valor não muda.
const cache = new Map<string, { raw: string | null; value: string[] }>();

function readChecklist(key: string): string[] {
  if (typeof window === "undefined") return EMPTY;
  const raw = window.localStorage.getItem(key);
  const entry = cache.get(key);
  if (entry && entry.raw === raw) return entry.value;
  let value: string[];
  try {
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    value = Array.isArray(parsed) ? (parsed as string[]) : EMPTY;
  } catch {
    value = EMPTY;
  }
  cache.set(key, { raw, value });
  return value;
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/** Checklist marcável, guardada no navegador por chave. */
export function Checklist({
  storageKey,
  groups,
}: {
  storageKey: string;
  groups: ChecklistGroup[];
}) {
  const key = `estudio-giz:checklist:${storageKey}`;
  const ready = useHydrated();
  const checked = useSyncExternalStore(
    subscribe,
    useCallback(() => readChecklist(key), [key]),
    () => EMPTY,
  );

  const persist = useCallback(
    (next: string[]) => {
      window.localStorage.setItem(key, JSON.stringify(next));
      window.dispatchEvent(new Event(EVENT));
    },
    [key],
  );

  const toggle = (item: string) =>
    persist(
      checked.includes(item)
        ? checked.filter((entry) => entry !== item)
        : [...checked, item],
    );

  const total = groups.reduce((sum, group) => sum + group.items.length, 0);
  const done = checked.length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="grid gap-5">
      <div className="flex flex-wrap items-center gap-4">
        <div className="h-1.5 min-w-[160px] flex-1 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-300"
            style={{ width: `${ready ? percent : 0}%` }}
          />
        </div>
        <span className="font-mono text-sm tabular-nums text-primary">
          {ready ? `${done}/${total}` : `0/${total}`}
        </span>
        {done > 0 ? (
          <Button variant="ghost" size="sm" onClick={() => persist([])}>
            <RotateCcw className="size-3.5" />
            Limpar
          </Button>
        ) : null}
      </div>

      <div className="grid gap-5">
        {groups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {group.title}
            </p>
            <ul className="grid gap-1.5">
              {group.items.map((item) => {
                const isChecked = ready && checked.includes(item);
                return (
                  <li key={item}>
                    <button
                      onClick={() => toggle(item)}
                      className={cn(
                        "flex w-full items-start gap-3 rounded-[10px] border px-4 py-3 text-left text-[15px] leading-[1.55] transition-colors",
                        isChecked
                          ? "border-primary/30 bg-primary/8 text-muted-foreground"
                          : "border-border bg-card text-foreground hover:border-primary/25",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-[5px] border",
                          isChecked
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border",
                        )}
                      >
                        {isChecked ? <Check className="size-3" /> : null}
                      </span>
                      <span className={cn(isChecked && "line-through decoration-1")}>
                        {item}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
