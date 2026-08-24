"use client";

import { useRef } from "react";
import { giz } from "@/components/prototipo/tokens";
import { segment, SCROLL_HEIGHT, useScrollSection } from "@/components/gizpay-site/use-scroll-section";

const ESCOLAS = [
  "Colégio Aurora",
  "Instituto Vale Verde",
  "Escola Monte Azul",
  "Colégio São Roque",
];

const METRICAS = [
  { valor: "R$ 12,4 mi", label: "processados em 2026" },
  { valor: "38 escolas", label: "ativas na plataforma" },
  { valor: "4,2%", label: "inadimplência média das escolas ativas" },
];

function ProvaSocialStatic() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-6">
      <p
        className="text-[11px] uppercase tracking-[0.16em]"
        style={{ color: giz.mutedDark }}
      >
        Escolas que já usam
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
        {ESCOLAS.map((nome) => (
          <span
            key={nome}
            className="font-display text-lg font-semibold tracking-tight opacity-45"
            style={{ color: giz.fgDark }}
          >
            {nome}
          </span>
        ))}
      </div>
      <dl className="mt-10 grid gap-6 sm:grid-cols-3">
        {METRICAS.map((m) => (
          <div
            key={m.label}
            className="rounded-[24px] border px-6 py-5"
            style={{ borderColor: giz.borderDark, background: giz.deep }}
          >
            <dt
              className="font-mono text-[28px] font-medium tabular-nums sm:text-[32px]"
              style={{ color: giz.primary }}
            >
              {m.valor}
            </dt>
            <dd className="mt-1 text-sm leading-snug" style={{ color: giz.mutedDark }}>
              {m.label}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-[11px]" style={{ color: giz.mutedDark }}>
        Números ilustrativos para fins de protótipo. Em produção, cada métrica
        publicada precisa da base de cálculo declarada.
      </p>
    </div>
  );
}

/**
 * Prova social com scroll: título → logos → métricas em cards.
 */
export function ProvaSocialScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress, reducedMotion, ready } = useScrollSection(sectionRef);

  if (ready && reducedMotion) {
    return (
      <section
        className="border-b"
        style={{ borderColor: giz.borderDark, background: giz.surface }}
      >
        <ProvaSocialStatic />
      </section>
    );
  }

  const titleOut = segment(progress, 0, 0.35);
  const logosIn = segment(progress, 0.2, 0.55);
  const metricsIn = segment(progress, 0.45, 0.92);

  const titleOpacity = 1 - titleOut;
  const titleY = -titleOut * 48;

  return (
    <section
      ref={sectionRef}
      className="relative border-b"
      style={{
        borderColor: giz.borderDark,
        background: giz.surface,
        height: SCROLL_HEIGHT.prova,
      }}
    >
      <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
        <div className="relative mx-auto min-h-[min(520px,78vh)] w-full max-w-[1200px] px-5 sm:px-6">
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-0 text-center"
            style={{
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
              pointerEvents: titleOpacity < 0.1 ? "none" : "auto",
            }}
            aria-hidden={titleOpacity < 0.05}
          >
            <p
              className="max-w-[18ch] font-display text-[32px] font-semibold leading-tight tracking-tight sm:text-[44px]"
              style={{ color: giz.fgDark }}
            >
              Escolas de todo o Brasil confiam na Giz Pay
            </p>
            <p
              className="mt-4 max-w-[40ch] text-[16px] leading-relaxed"
              style={{ color: giz.mutedDark }}
            >
              Prova social real para reduzir o medo da migração — números que a
              direção compara antes de agendar.
            </p>
          </div>

          <div
            className="absolute inset-0 z-10 flex flex-col justify-center"
            style={{
              opacity: Math.max(logosIn, metricsIn * 0.5),
              pointerEvents: logosIn < 0.15 ? "none" : "auto",
            }}
          >
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.16em]"
                style={{ color: giz.mutedDark }}
              >
                Escolas que já usam
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-4">
                {ESCOLAS.map((nome, i) => {
                  const itemIn = segment(logosIn, i * 0.08, 0.45 + i * 0.08);
                  return (
                    <span
                      key={nome}
                      className="font-display text-lg font-semibold tracking-tight sm:text-xl"
                      style={{
                        color: giz.fgDark,
                        opacity: 0.35 + itemIn * 0.65,
                      }}
                    >
                      {nome}
                    </span>
                  );
                })}
              </div>
            </div>

            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {METRICAS.map((m, i) => {
                const cardIn = segment(metricsIn, 0.15 + i * 0.12, 0.75 + i * 0.12);
                return (
                  <div
                    key={m.label}
                    className="rounded-[24px] border px-6 py-5"
                    style={{
                      borderColor: giz.borderDark,
                      background: giz.deep,
                      opacity: cardIn,
                      transform: `translateY(${(1 - cardIn) * 20}px)`,
                    }}
                  >
                    <dt
                      className="font-mono text-[28px] font-medium tabular-nums sm:text-[32px]"
                      style={{ color: giz.primary }}
                    >
                      {m.valor}
                    </dt>
                    <dd
                      className="mt-1 text-sm leading-snug"
                      style={{ color: giz.mutedDark }}
                    >
                      {m.label}
                    </dd>
                  </div>
                );
              })}
            </dl>

            <p
              className="mt-6 text-[11px]"
              style={{ color: giz.mutedDark, opacity: metricsIn }}
            >
              Números ilustrativos para fins de protótipo. Em produção, cada
              métrica publicada precisa da base de cálculo declarada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
