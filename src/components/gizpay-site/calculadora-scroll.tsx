"use client";

import { useRef } from "react";
import { Calculadora } from "@/components/prototipo/calculadora";
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
        style={{ color: giz.primary }}
      >
        Calculadora de economia
      </span>
      <h2
        className="mt-3 font-display text-[30px] font-semibold leading-[1.12] tracking-tight sm:text-[42px]"
        style={{ color: giz.fgDark }}
      >
        Quanto a intermediação custa à sua escola por ano?
      </h2>
      <p
        className="mx-auto mt-4 max-w-[54ch] text-[16px] leading-[1.68] sm:text-[17px]"
        style={{ color: giz.mutedDark }}
      >
        Ajuste os três números da sua escola. O resultado é o que uma taxa
        percentual retira do seu faturamento a cada ano.
      </p>
    </div>
  );
}

function CalculadoraStatic() {
  return (
    <section
      id="calculadora"
      className="relative overflow-hidden"
      style={{ background: giz.deep }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ background: "rgba(74,222,128,0.12)" }}
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-28">
        <CabecalhoIntro />
        <div className="mt-12">
          <Calculadora />
        </div>
      </div>
    </section>
  );
}

/**
 * Calculadora — título some; sliders + resultado entram em grid limpo.
 * Interação livre após aparecer (sem sobrepor elementos).
 */
export function CalculadoraScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress, reducedMotion, ready } = useScrollSection(sectionRef);

  const titleOut = segment(progress, 0, 0.28);
  const contentIn = segment(progress, 0.2, 0.48);
  const resultHighlight = segment(progress, 0.42, 0.75);

  if (ready && reducedMotion) {
    return <CalculadoraStatic />;
  }

  const titleOpacity = 1 - titleOut;
  const titleY = -titleOut * 40;

  return (
    <section
      id="calculadora"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: giz.deep,
        height: SCROLL_HEIGHT.calculadora,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ background: "rgba(74,222,128,0.12)" }}
      />

      <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
        <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-6">
          <div
            className="absolute inset-0 z-20 flex items-center justify-center"
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
            className="relative z-10 flex min-h-[min(480px,78vh)] flex-col justify-center"
            style={{
              opacity: contentIn,
              transform: `translateY(${(1 - contentIn) * 32}px)`,
              pointerEvents: contentIn < 0.15 ? "none" : "auto",
            }}
          >
            <p
              className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: giz.primary, opacity: segment(progress, 0.25, 0.4) }}
            >
              Ajuste os valores da sua escola
            </p>
            <Calculadora resultHighlight={resultHighlight} />
          </div>
        </div>
      </div>
    </section>
  );
}
