"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PainelVivo } from "@/components/prototipo/painel-vivo";
import { giz } from "@/components/prototipo/tokens";

const FLOATING_CARDS = [
  {
    label: "Pix confirmado",
    value: "R$ 1.240",
    sub: "Maria Clara · 7º ano",
    className: "left-[-8%] top-[4%] xl:left-[-6%]",
    drift: { x: -24, y: 18 },
    delay: 0,
  },
  {
    label: "Recebido hoje",
    value: "R$ 18.430",
    sub: "Colégio Aurora",
    className: "right-[-8%] top-[10%] xl:right-[-5%]",
    drift: { x: 24, y: 14 },
    delay: 0.08,
  },
  {
    label: "Baixa automática",
    value: "12 seg",
    sub: "João Pedro · Pix",
    className: "bottom-[8%] left-[-10%] xl:left-[-7%]",
    drift: { x: -20, y: 22 },
    delay: 0.16,
  },
  {
    label: "Inadimplência",
    value: "4,2%",
    sub: "↓ 11% este semestre",
    className: "bottom-[6%] right-[-8%] xl:right-[-5%]",
    drift: { x: 22, y: 20 },
    delay: 0.24,
  },
] as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function segment(progress: number, start: number, end: number) {
  return easeOutCubic(clamp((progress - start) / (end - start), 0, 1));
}

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

function FloatingCards({
  progress,
  reducedMotion,
}: {
  progress: number;
  reducedMotion: boolean;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      {FLOATING_CARDS.map((card) => {
        const cardProgress = reducedMotion
          ? 1
          : segment(progress, 0.28 + card.delay, 0.82 + card.delay);
        const opacity = cardProgress;
        const driftX = (1 - cardProgress) * card.drift.x;
        const driftY = (1 - cardProgress) * card.drift.y;
        const scale = 0.9 + cardProgress * 0.1;

        return (
          <div
            key={card.label}
            className={`absolute w-[210px] rounded-[24px] border p-4 backdrop-blur-md xl:w-[230px] ${card.className}`}
            style={{
              opacity,
              transform: `translate(${driftX}px, ${driftY}px) scale(${scale})`,
              background: "rgba(20,59,49,0.78)",
              borderColor: "rgba(242,247,243,0.14)",
              willChange: reducedMotion ? undefined : "transform, opacity",
            }}
          >
            <p
              className="text-[10px] font-medium uppercase tracking-[0.12em]"
              style={{ color: giz.mutedDark }}
            >
              {card.label}
            </p>
            <p
              className="mt-1 font-mono text-[22px] font-medium tabular-nums leading-none"
              style={{ color: giz.primary }}
            >
              {card.value}
            </p>
            <p className="mt-2 text-[12px]" style={{ color: giz.fgDark }}>
              {card.sub}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Hero com transição por scroll: título some, painel + cards flutuantes entram.
 */
export function HeroScroll() {
  const sectionRef = useRef<HTMLElement>(null);
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

    if (media.matches) {
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
  }, []);

  if (ready && reducedMotion) {
    return (
      <section
        className="relative border-b px-5 py-20 sm:px-6 sm:py-28"
        style={{ borderColor: giz.borderDark }}
      >
        <HeroCopy />
        <div className="relative mx-auto mt-14 max-w-[680px]">
          <FloatingCards progress={1} reducedMotion />
          <PainelVivo />
        </div>
      </section>
    );
  }

  const titleOut = segment(progress, 0, 0.42);
  const boardIn = segment(progress, 0.12, 0.72);
  const hintOut = 1 - segment(progress, 0, 0.2);

  const titleOpacity = 1 - titleOut;
  const titleY = -titleOut * 72;
  const boardOpacity = boardIn;
  const boardY = (1 - boardIn) * 88;
  const boardScale = 0.86 + boardIn * 0.14;

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
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-[-10%] size-[420px] rounded-full blur-[120px]"
        style={{ background: "rgba(74,222,128,0.08)" }}
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

          <div
            className="relative z-10 w-full max-w-[980px]"
            style={{
              opacity: boardOpacity,
              transform: `translateY(${boardY}px) scale(${boardScale})`,
              willChange: "transform, opacity",
            }}
          >
            <div className="relative mx-auto w-full max-w-[680px]">
              <FloatingCards progress={progress} reducedMotion={false} />
              <PainelVivo />
            </div>
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
