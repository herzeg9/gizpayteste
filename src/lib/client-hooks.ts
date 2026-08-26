"use client";

import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const media = window.matchMedia(REDUCED_MOTION_QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

/**
 * Preferência de "movimento reduzido" do sistema. Usa useSyncExternalStore
 * para ler a media query sem disparar setState dentro de um efeito.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

const noopSubscribe = () => () => {};

/** `true` só depois da hidratação no cliente; `false` no SSR e no primeiro render. */
export function useHydrated() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}
