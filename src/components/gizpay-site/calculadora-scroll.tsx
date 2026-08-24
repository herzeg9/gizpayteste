"use client";

import { useRef } from "react";
import { Reveal } from "@/components/reveal";
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
 * Intro some com scroll; calculadora fica no fluxo normal da página
 * (não presa no sticky — não sobe ao continuar rolando).
 */
export function CalculadoraScroll() {
  const transitionRef = useRef<HTMLDivElement>(null);
  const { progress, reducedMotion, ready } = useScrollSection(transitionRef);

  if (ready && reducedMotion) {
    return <CalculadoraStatic />;
  }

  const titleOut = segment(progress, 0, 0.88);
  const hintOut = 1 - segment(progress, 0, 0.25);
  const titleOpacity = 1 - titleOut;
  const titleY = -titleOut * 48;

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

      {/* Faixa de scroll só para o título introdutório */}
      <div
        ref={transitionRef}
        style={{ height: SCROLL_HEIGHT.calculadoraIntro }}
      >
        <div className="sticky top-0 flex h-[100dvh] items-center justify-center px-5 sm:px-6">
          <div
            className="relative w-full max-w-[720px] text-center"
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
              style={{ color: giz.mutedDark }}
            >
              Role para usar a calculadora
            </span>
            <span
              className="hero-scroll-hint block h-8 w-px"
              style={{ background: giz.mutedDark }}
            />
          </div>
        </div>
      </div>

      {/* Calculadora no fluxo normal — permanece na tela enquanto o usuário interage */}
      <div className="relative mx-auto w-full max-w-[1200px] scroll-mt-20 px-5 pb-24 pt-4 sm:px-6 sm:pb-28">
        <Reveal>
          <p
            className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: giz.primary }}
          >
            Ajuste os valores da sua escola
          </p>
        </Reveal>
        <Reveal delay={80}>
          <Calculadora />
        </Reveal>
      </div>
    </section>
  );
}
