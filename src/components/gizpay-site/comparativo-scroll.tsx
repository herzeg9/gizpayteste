"use client";

import { useRef } from "react";
import { Reveal } from "@/components/reveal";
import { ComparativoInterativo } from "@/components/gizpay-site/comparativo-interativo";
import { giz } from "@/components/prototipo/tokens";
import {
  segment,
  SCROLL_HEIGHT,
  useScrollSection,
} from "@/components/gizpay-site/use-scroll-section";

function CabecalhoIntro() {
  return (
    <div className="mx-auto max-w-[720px] text-center">
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.16em]"
        style={{ color: "#3E8E63" }}
      >
        Comparativo
      </span>
      <h2
        className="mt-3 font-display text-[30px] font-semibold leading-[1.12] tracking-tight sm:text-[42px]"
        style={{ color: giz.fgLight }}
      >
        Giz Pay e o intermediário tradicional, critério por critério.
      </h2>
      <p
        className="mx-auto mt-4 max-w-[54ch] text-[16px] leading-[1.68] sm:text-[17px]"
        style={{ color: giz.mutedLight }}
      >
        Os mesmos pontos que a direção usa para decidir — sem escondê-los atrás
        de um clique.
      </p>
    </div>
  );
}

function ComparativoStatic() {
  return (
    <section
      id="comparativo"
      style={{ background: giz.lightAlt, color: giz.fgLight }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-24">
        <CabecalhoIntro />
        <ComparativoInterativo className="mt-12" />
      </div>
    </section>
  );
}

/**
 * Intro some com scroll; toggle + tabela ficam no fluxo normal (interação livre).
 */
export function ComparativoScroll() {
  const transitionRef = useRef<HTMLDivElement>(null);
  const { progress, reducedMotion, ready } = useScrollSection(transitionRef);

  if (ready && reducedMotion) {
    return <ComparativoStatic />;
  }

  const titleOut = segment(progress, 0, 0.88);
  const hintOut = 1 - segment(progress, 0, 0.25);
  const titleOpacity = 1 - titleOut;
  const titleY = -titleOut * 48;

  return (
    <section id="comparativo" style={{ background: giz.lightAlt, color: giz.fgLight }}>
      <div ref={transitionRef} style={{ height: SCROLL_HEIGHT.comparativoIntro }}>
        <div className="sticky top-0 flex h-[100dvh] items-center justify-center px-5 sm:px-6">
          <div
            className="w-full max-w-[720px] text-center"
            style={{
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
              pointerEvents: titleOpacity < 0.1 ? "none" : "auto",
            }}
            aria-hidden={titleOpacity < 0.05}
          >
            <CabecalhoIntro />
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-8 flex flex-col items-center gap-2"
            style={{ opacity: hintOut }}
          >
            <span
              className="text-[11px] uppercase tracking-[0.18em]"
              style={{ color: giz.mutedLight }}
            >
              Role para ver o comparativo
            </span>
            <span
              className="hero-scroll-hint block h-8 w-px"
              style={{ background: giz.mutedLight }}
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] scroll-mt-20 px-5 pb-24 pt-4 sm:px-6 sm:pb-28">
        <Reveal>
          <ComparativoInterativo className="mt-0" />
        </Reveal>
      </div>
    </section>
  );
}
