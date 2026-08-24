"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

/** Mapeia progresso global (0–1) para faixa local com easing. */
export function segment(progress: number, start: number, end: number) {
  return easeOutCubic(clamp((progress - start) / (end - start), 0, 1));
}

/** Alturas de scroll — mais vh = mais tempo para ler antes da transição. */
export const SCROLL_HEIGHT = {
  hero: "min(320vh, 3800px)",
  prova: "min(260vh, 3000px)",
  problema: "min(260vh, 3000px)",
  comoFunciona: "min(300vh, 3400px)",
  calculadoraIntro: "min(150vh, 1700px)",
} as const;

/** Progresso de scroll dentro de uma seção alta com conteúdo sticky. */
export function useScrollSection(
  sectionRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyMotion = () => {
      setReducedMotion(media.matches);
      setReady(true);
      if (media.matches) setProgress(1);
    };

    applyMotion();
    media.addEventListener("change", applyMotion);

    if (!enabled || media.matches) {
      return () => media.removeEventListener("change", applyMotion);
    }

    let frame = 0;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollRange = section.offsetHeight - window.innerHeight;
      const scrolled = clamp(-rect.top, 0, scrollRange);
      setProgress(scrollRange > 0 ? scrolled / scrollRange : 0);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      media.removeEventListener("change", applyMotion);
    };
  }, [sectionRef, enabled]);

  return { progress, reducedMotion, ready };
}
