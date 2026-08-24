"use client";

import { useRef, type CSSProperties } from "react";
import { giz } from "@/components/prototipo/tokens";
import {
  segment,
  SCROLL_HEIGHT,
  useScrollSection,
} from "@/components/gizpay-site/use-scroll-section";

export const DORES = [
  {
    titulo: "Repasse com atraso",
    texto:
      "Os pais pagam hoje. A escola recebe em 15, 30 ou 60 dias — e ainda com a taxa cheia já descontada.",
    metrica: "até 60 dias",
  },
  {
    titulo: "Taxa sobre o faturamento",
    texto:
      "De 2% a 6% de tudo o que a escola fatura, todo mês, independentemente do trabalho que o fornecedor teve.",
    metrica: "2% a 6%",
  },
  {
    titulo: "Cobrança manual",
    texto:
      "A secretaria emitindo boleto no banco, ligando para cobrar e controlando inadimplência em planilha.",
    metrica: "~6h por mês",
  },
  {
    titulo: "Nenhuma visibilidade",
    texto:
      "A direção só descobre o que entrou, o que atrasou e quem deve quando o relatório do mês fecha.",
    metrica: "1x por mês",
  },
] as const;

function ProblemaStatic() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-24">
      <CabecalhoIntro />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DORES.map((dor) => (
          <DorCard key={dor.titulo} dor={dor} />
        ))}
      </div>
    </div>
  );
}

function CabecalhoIntro() {
  return (
    <div className="mx-auto max-w-[720px] text-center">
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.16em]"
        style={{ color: "#3E8E63" }}
      >
        O problema
      </span>
      <h2
        className="mt-3 font-display text-[30px] font-semibold leading-[1.12] tracking-tight sm:text-[42px]"
        style={{ color: giz.fgLight }}
      >
        Sua escola trabalha o mês inteiro. Quem lucra é o intermediário.
      </h2>
      <p
        className="mx-auto mt-4 max-w-[54ch] text-[16px] leading-[1.68] sm:text-[17px]"
        style={{ color: giz.mutedLight }}
      >
        Os intermediários tradicionais retêm o caixa da escola, cobram um
        percentual sobre tudo o que ela fatura e devolvem o dinheiro semanas
        depois.
      </p>
    </div>
  );
}

function DorCard({
  dor,
  style,
}: {
  dor: (typeof DORES)[number];
  style?: CSSProperties;
}) {
  return (
    <article
      className="grid h-full content-start gap-3 rounded-[24px] border bg-white p-6"
      style={{ borderColor: giz.borderLight, ...style }}
    >
      <span
        className="font-mono text-xs tabular-nums"
        style={{ color: giz.mutedLight }}
      >
        {dor.metrica}
      </span>
      <h3
        className="text-[17px] font-semibold leading-snug"
        style={{ color: giz.fgLight }}
      >
        {dor.titulo}
      </h3>
      <p
        className="text-[14.5px] leading-[1.65]"
        style={{ color: giz.mutedLight }}
      >
        {dor.texto}
      </p>
    </article>
  );
}

/**
 * Seção "O problema" — título some, 4 cards entram em grid limpo (sem sobreposição).
 */
export function ProblemaScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress, reducedMotion, ready } = useScrollSection(sectionRef);

  if (ready && reducedMotion) {
    return (
      <section style={{ background: giz.light, color: giz.fgLight }}>
        <ProblemaStatic />
      </section>
    );
  }

  const titleOut = segment(progress, 0, 0.32);
  const cardsIn = segment(progress, 0.22, 0.95);

  const titleOpacity = 1 - titleOut;
  const titleY = -titleOut * 40;

  return (
    <section
      ref={sectionRef}
      style={{
        background: giz.light,
        color: giz.fgLight,
        height: SCROLL_HEIGHT.problema,
      }}
    >
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
            className="relative z-10 flex min-h-[min(480px,75vh)] flex-col justify-center"
            style={{
              opacity: cardsIn,
              pointerEvents: cardsIn < 0.12 ? "none" : "auto",
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {DORES.map((dor, i) => {
                const cardIn = segment(progress, 0.28 + i * 0.14, 0.58 + i * 0.14);
                return (
                  <DorCard
                    key={dor.titulo}
                    dor={dor}
                    style={{
                      opacity: cardIn,
                      transform: `translateY(${(1 - cardIn) * 16}px)`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
