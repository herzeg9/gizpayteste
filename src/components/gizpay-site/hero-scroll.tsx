"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { PainelVivo } from "@/components/prototipo/painel-vivo";
import { giz } from "@/components/prototipo/tokens";
import { segment, useScrollSection } from "@/components/gizpay-site/use-scroll-section";

/** Cards laterais — fora do painel, sem sobreposição. */
const SIDE_METRICS = [
  {
    label: "Pix confirmado",
    value: "R$ 1.240",
    sub: "Maria Clara · 7º ano",
    side: "left" as const,
  },
  {
    label: "Recebido hoje",
    value: "R$ 18.430",
    sub: "Colégio Aurora",
    side: "right" as const,
  },
];

/** Faixa compacta abaixo do painel — 2 métricas, não flutuam em cima. */
const STRIP_METRICS = [
  { label: "Baixa automática", value: "12 seg" },
  { label: "Inadimplência média", value: "4,2%" },
];

function HeroCopy() {
  return (
    <div className="mx-auto grid max-w-[820px] gap-7 text-center">
      <span
        className="mx-auto w-fit rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]"
        style={{
          borderColor: giz.borderDark,
          color: giz.primary,
          background: "rgba(74,222,128,0.08)",
        }}
      >
        Plataforma financeira para escolas
      </span>
      <h1
        className="mx-auto max-w-[13ch] font-display text-[40px] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-[60px] lg:text-[76px]"
        style={{ color: giz.fgDark }}
      >
        O dinheiro da sua escola, no controle de quem ensina.
      </h1>
      <p
        className="mx-auto max-w-[46ch] text-[17px] leading-[1.68] sm:text-[19px]"
        style={{ color: giz.mutedDark }}
      >
        Cobrança automática por Pix, boleto e cartão, com liquidação direto no
        CNPJ da escola. Sem intermediário segurando o seu caixa por 30 dias.
      </p>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#agendar"
          className="inline-flex min-w-[220px] items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-medium transition-transform active:scale-[0.98]"
          style={{ background: giz.primary, color: giz.fgLight }}
        >
          Agendar demonstração
        </a>
        <a
          href="#calculadora"
          className="inline-flex min-w-[220px] items-center justify-center gap-1.5 rounded-full border px-7 py-3.5 text-[15px] font-medium transition-colors hover:bg-white/5"
          style={{ borderColor: giz.borderDark, color: giz.fgDark }}
        >
          Calcular economia
          <ArrowUpRight className="size-4 opacity-70" />
        </a>
      </div>
      <p className="text-[13px]" style={{ color: giz.mutedDark }}>
        Implantação e migração da base inclusas · suporte humano por WhatsApp
      </p>
    </div>
  );
}

function SideMetricCard({
  label,
  value,
  sub,
  side,
  progress,
}: {
  label: string;
  value: string;
  sub: string;
  side: "left" | "right";
  progress: number;
}) {
  const inProgress = segment(progress, 0.35, 0.78);
  const offset = (1 - inProgress) * (side === "left" ? -28 : 28);

  return (
    <div
      className="hidden w-[168px] shrink-0 rounded-[20px] border px-4 py-3.5 xl:block"
      style={{
        opacity: inProgress,
        transform: `translateX(${offset}px)`,
        background: "rgba(20,59,49,0.65)",
        borderColor: "rgba(242,247,243,0.12)",
        willChange: "transform, opacity",
      }}
    >
      <p
        className="text-[9px] font-medium uppercase tracking-[0.14em]"
        style={{ color: giz.mutedDark }}
      >
        {label}
      </p>
      <p
        className="mt-1 font-mono text-[20px] font-medium tabular-nums leading-none"
        style={{ color: giz.primary }}
      >
        {value}
      </p>
      <p className="mt-1.5 text-[11px] leading-snug" style={{ color: giz.mutedDark }}>
        {sub}
      </p>
    </div>
  );
}

function BoardLayer({ progress }: { progress: number }) {
  const boardIn = segment(progress, 0.12, 0.72);
  const stripIn = segment(progress, 0.48, 0.88);

  return (
    <div
      className="w-full max-w-[920px]"
      style={{
        opacity: boardIn,
        transform: `translateY(${(1 - boardIn) * 88}px) scale(${0.88 + boardIn * 0.12})`,
        willChange: "transform, opacity",
      }}
    >
      <div className="flex items-start justify-center gap-5 xl:gap-8">
        <SideMetricCard {...SIDE_METRICS[0]} side="left" progress={progress} />
        <div className="w-full min-w-0 max-w-[620px]">
          <PainelVivo />
        </div>
        <SideMetricCard {...SIDE_METRICS[1]} side="right" progress={progress} />
      </div>

      <div
        className="mx-auto mt-4 grid max-w-[620px] grid-cols-2 gap-3"
        style={{ opacity: stripIn, transform: `translateY(${(1 - stripIn) * 12}px)` }}
      >
        {STRIP_METRICS.map((item) => (
          <div
            key={item.label}
            className="rounded-full border px-4 py-2.5 text-center"
            style={{
              borderColor: giz.borderDark,
              background: "rgba(20,59,49,0.45)",
            }}
          >
            <p
              className="text-[9px] font-medium uppercase tracking-[0.12em]"
              style={{ color: giz.mutedDark }}
            >
              {item.label}
            </p>
            <p
              className="mt-0.5 font-mono text-[15px] font-medium tabular-nums"
              style={{ color: giz.fgDark }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Hero: título some ao rolar; painel + métricas laterais entram sem sobreposição. */
export function HeroScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress, reducedMotion, ready } = useScrollSection(sectionRef);

  if (ready && reducedMotion) {
    return (
      <section
        className="relative border-b px-5 py-20 sm:px-6 sm:py-28"
        style={{ borderColor: giz.borderDark }}
      >
        <HeroCopy />
        <div className="mx-auto mt-14 max-w-[920px]">
          <BoardLayer progress={1} />
        </div>
      </section>
    );
  }

  const titleOut = segment(progress, 0, 0.42);
  const hintOut = 1 - segment(progress, 0, 0.2);
  const titleOpacity = 1 - titleOut;
  const titleY = -titleOut * 72;

  return (
    <section
      ref={sectionRef}
      className="relative border-b"
      style={{
        borderColor: giz.borderDark,
        height: "min(220vh, 2400px)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[680px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ background: "rgba(74,222,128,0.14)" }}
      />

      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <div className="relative mx-auto flex h-full w-full max-w-[1200px] items-center justify-center px-5 sm:px-6">
          <div
            className="absolute inset-0 z-20 flex items-center justify-center px-5 sm:px-6"
            style={{
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
              pointerEvents: titleOpacity < 0.15 ? "none" : "auto",
            }}
            aria-hidden={titleOpacity < 0.05}
          >
            <HeroCopy />
          </div>

          <div className="relative z-10 flex w-full justify-center">
            <BoardLayer progress={progress} />
          </div>

          <div
            className="absolute inset-x-0 bottom-8 z-30 flex flex-col items-center gap-2"
            style={{ opacity: hintOut, pointerEvents: "none" }}
          >
            <span
              className="text-[11px] uppercase tracking-[0.18em]"
              style={{ color: giz.mutedDark }}
            >
              Role para ver o painel
            </span>
            <span
              className="hero-scroll-hint block h-8 w-px"
              style={{ background: giz.mutedDark }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
