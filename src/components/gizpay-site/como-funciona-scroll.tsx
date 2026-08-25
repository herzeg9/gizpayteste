"use client";

import { useEffect, useRef, useState } from "react";
import { ComoFunciona, PASSOS } from "@/components/prototipo/como-funciona";
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
        Como funciona
      </span>
      <h2
        className="mt-3 font-display text-[30px] font-semibold leading-[1.12] tracking-tight sm:text-[42px]"
        style={{ color: giz.fgLight }}
      >
        Da matrícula ao caixa em quatro passos — e nenhum deles é manual.
      </h2>
      <p
        className="mx-auto mt-4 max-w-[54ch] text-[16px] leading-[1.68] sm:text-[17px]"
        style={{ color: giz.mutedLight }}
      >
        Você cadastra uma vez; o resto acontece sozinho. Role para percorrer
        cada etapa — ou clique nos passos.
      </p>
    </div>
  );
}

function ComoFuncionaStatic() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-[72px]"
      style={{ background: giz.lightAlt, color: giz.fgLight }}
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-24">
        <CabecalhoIntro />
        <div className="mt-12">
          <ComoFunciona />
        </div>
      </div>
    </section>
  );
}

/**
 * Como funciona — título some; passos avançam com o scroll (ou clique).
 */
export function ComoFuncionaScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress, reducedMotion, ready } = useScrollSection(sectionRef);
  const [activeStep, setActiveStep] = useState(0);
  const lastScrollStep = useRef(0);

  const titleOut = segment(progress, 0, 0.28);
  const contentIn = segment(progress, 0.2, 0.42);
  const stepProgress = segment(progress, 0.32, 0.96);
  const scrollStep = Math.min(
    PASSOS.length - 1,
    Math.floor(stepProgress * PASSOS.length),
  );

  useEffect(() => {
    if (scrollStep !== lastScrollStep.current) {
      lastScrollStep.current = scrollStep;
      setActiveStep(scrollStep);
    }
  }, [scrollStep]);

  if (ready && reducedMotion) {
    return <ComoFuncionaStatic />;
  }

  const titleOpacity = 1 - titleOut;
  const titleY = -titleOut * 40;

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="scroll-mt-[72px]"
      style={{
        background: giz.lightAlt,
        color: giz.fgLight,
        height: SCROLL_HEIGHT.comoFunciona,
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
            className="relative z-10 flex min-h-[min(460px,72vh)] flex-col justify-center"
            style={{
              opacity: contentIn,
              pointerEvents: contentIn < 0.12 ? "none" : "auto",
            }}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: "#3E8E63" }}
              >
                Passo {scrollStep + 1} de {PASSOS.length}
              </p>
              <p className="text-xs" style={{ color: giz.mutedLight }}>
                Role ou clique para trocar
              </p>
            </div>
            <ComoFunciona activeStep={activeStep} onStepChange={setActiveStep} />
          </div>
        </div>
      </div>
    </section>
  );
}
