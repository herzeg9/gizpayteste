"use client";

import { useCallback, useSyncExternalStore } from "react";
import { useHydrated } from "@/lib/client-hooks";

const STORAGE_KEY = "estudio-giz:progresso";
const EVENT = "estudio-giz:progresso-alterado";

const EMPTY: string[] = [];

// Snapshot memoizado: useSyncExternalStore exige que getSnapshot devolva a
// mesma referência enquanto os dados não mudam, senão entra em loop de render.
let cachedRaw: string | null = null;
let cachedValue: string[] = EMPTY;

function read(): string[] {
  if (typeof window === "undefined") return EMPTY;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === cachedRaw) return cachedValue;
  cachedRaw = raw;
  try {
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    cachedValue = Array.isArray(parsed) ? (parsed as string[]) : EMPTY;
  } catch {
    cachedValue = EMPTY;
  }
  return cachedValue;
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * Progresso do aluno guardado no navegador. Nenhum dado sai daqui —
 * é intencional: o curso não pede cadastro.
 */
export function useProgress() {
  const completed = useSyncExternalStore(subscribe, read, () => EMPTY);
  const ready = useHydrated();

  const toggle = useCallback((slug: string) => {
    const current = read();
    const next = current.includes(slug)
      ? current.filter((item) => item !== slug)
      : [...current, slug];
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVENT));
  }, []);

  const reset = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return { completed, ready, toggle, reset };
}
