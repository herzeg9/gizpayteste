"use client";

import { useRef } from "react";
import { giz } from "@/components/prototipo/tokens";
import {
  segment,
  SCROLL_HEIGHT,
  useScrollSection,
} from "@/components/gizpay-site/use-scroll-section";

const METRICAS = [
  ["Inadimplência", "11% → 4%"],
  ["Fechamento do mês", "3 dias → 40 min"],
] as const;

function DepoimentoStatic() {
  return (
    <section style={{ background: giz.light, color: giz.fgLight }}>
      <div className="mx-auto w-full max-w-[900px] px-5 py-20 sm:px-6 sm:py-24">
        <DepoimentoConteudo quoteIn={1} metricsIn={1} />
      </div>
    </section>
  );
}

function DepoimentoConteudo({
  quoteIn,
  metricsIn,
}: {
  quoteIn: number;
  metricsIn: number;
}) {
  return (
    <figure className="grid gap-8">
      <blockquote
        className="font-display text-[26px] font-medium leading-[1.4] sm:text-[34px]"
        style={{
          color: giz.fgLight,
          opacity: quoteIn,
          transform: `translateY(${(1 - quoteIn) * 20}px)`,
        }}
      >
        “Parei de antecipar recebível no banco. O dinheiro entra no dia em que
        o responsável paga, e eu enxergo isso no painel.”
      </blockquote>

      <figcaption
        className="flex flex-wrap items-center gap-x-6 gap-y-4 border-t pt-6"
        style={{
          borderColor: giz.borderLight,
          opacity: metricsIn,
          transform: `translateY(${(1 - metricsIn) * 12}px)`,
        }}
      >
        <div className="grid gap-0.5 text-center sm:text-left">
          <p className="text-[15px] font-medium">Renata Albuquerque</p>
          <p className="text-sm" style={{ color: giz.mutedLight }}>
            Diretora
          </p>
          <p className="text-sm" style={{ color: giz.mutedLight }}>
            Colégio Aurora
          </p>
        </div>
        <dl className="flex gap-8 sm:ml-auto">
          {METRICAS.map(([label, valor]) => (
            <div key={label}>
              <dt className="text-xs" style={{ color: giz.mutedLight }}>
                {label}
              </dt>
              <dd className="font-mono text-sm tabular-nums">{valor}</dd>
            </div>
          ))}
        </dl>
      </figcaption>
    </figure>
  );
}

/** Depoimento — intro some; citação e métricas entram em sequência. */
export function DepoimentoScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress, reducedMotion, ready } = useScrollSection(sectionRef);

  if (ready && reducedMotion) {
    return <DepoimentoStatic />;
  }

  const titleOut = segment(progress, 0, 0.32);
  const quoteIn = segment(progress, 0.22, 0.58);
  const metricsIn = segment(progress, 0.48, 0.88);

  const titleOpacity = 1 - titleOut;
  const titleY = -titleOut * 40;

  return (
    <section
      ref={sectionRef}
      style={{
        background: giz.light,
        color: giz.fgLight,
        height: SCROLL_HEIGHT.depoimento,
      }}
    >
      <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
        <div className="relative mx-auto w-full max-w-[900px] px-5 sm:px-6">
          <div
            className="absolute inset-0 z-20 flex items-center justify-center text-center"
            style={{
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
              pointerEvents: titleOpacity < 0.1 ? "none" : "auto",
            }}
            aria-hidden={titleOpacity < 0.05}
          >
            <div className="max-w-[520px]">
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: "#3E8E63" }}
              >
                Depoimento
              </span>
              <p
                className="mt-4 font-display text-[28px] font-semibold leading-tight tracking-tight sm:text-[36px]"
                style={{ color: giz.fgLight }}
              >
                Quem já migrou sente a diferença no caixa e no tempo da equipe.
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <DepoimentoConteudo quoteIn={quoteIn} metricsIn={metricsIn} />
          </div>
        </div>
      </div>
    </section>
  );
}
