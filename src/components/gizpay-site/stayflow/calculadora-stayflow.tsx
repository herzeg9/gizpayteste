"use client";

import { useState } from "react";
import { brl, giz } from "@/components/prototipo/tokens";

export function CalculadoraStayflow() {
  const [alunos, setAlunos] = useState(450);
  const [mensalidade, setMensalidade] = useState(950);
  const [taxa, setTaxa] = useState(3.5);

  const faturamentoAnual = alunos * mensalidade * 12;
  const custoAnual = faturamentoAnual * (taxa / 100);

  return (
    <div className="glass-card p-8 md:p-12">
      <div className="mb-12 text-center">
        <span className="overline mb-4 block">Calculadora de Economia</span>
        <h2 className="font-display text-[32px] leading-tight text-[#F2F7F3] md:text-[42px]">
          Quanto sua escola deixa na mesa?
        </h2>
      </div>

      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-8">
          {[
            {
              label: "Alunos ativos",
              value: alunos,
              display: String(alunos),
              min: 50,
              max: 2000,
              step: 10,
              onChange: setAlunos,
            },
            {
              label: "Mensalidade Média",
              value: mensalidade,
              display: brl(mensalidade),
              min: 300,
              max: 5000,
              step: 50,
              onChange: setMensalidade,
            },
            {
              label: "Taxa atual do intermediário",
              value: taxa,
              display: `${taxa.toFixed(1)}%`,
              min: 0.5,
              max: 8,
              step: 0.1,
              onChange: setTaxa,
            },
          ].map((ctrl) => (
            <div key={ctrl.label} className="space-y-4">
              <div className="flex justify-between text-sm">
                <label className="uppercase tracking-wider" style={{ color: giz.mutedDark }}>
                  {ctrl.label}
                </label>
                <span className="font-mono" style={{ color: giz.primary }}>
                  {ctrl.display}
                </span>
              </div>
              <input
                type="range"
                min={ctrl.min}
                max={ctrl.max}
                step={ctrl.step}
                value={ctrl.value}
                aria-label={ctrl.label}
                onChange={(e) => ctrl.onChange(Number(e.target.value))}
                className="calc-range-stayflow w-full"
              />
            </div>
          ))}
          <p
            className="text-[11px] leading-relaxed opacity-70"
            style={{ color: giz.mutedDark }}
          >
            Faturamento anual estimado de{" "}
            <span className="font-mono" style={{ color: giz.fgDark }}>
              {brl(faturamentoAnual)}
            </span>{" "}
            (12 mensalidades).
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#07211B] p-8 text-center">
          <p
            className="mb-4 text-[13px] uppercase tracking-widest"
            style={{ color: giz.mutedDark }}
          >
            O intermediário leva do seu caixa, por ano
          </p>
          <div
            className="mb-6 font-mono text-[42px] font-semibold leading-none md:text-[54px]"
            style={{ color: giz.primary }}
          >
            {brl(custoAnual)}
          </div>
          <p
            className="mb-8 text-sm leading-relaxed"
            style={{ color: giz.mutedDark }}
          >
            É o que a sua taxa atual retira do faturamento da sua escola a cada ano. Com
            a Giz Pay, esse valor volta para o seu caixa.
          </p>
          <a
            href="#agendar"
            className="pill-primary inline-block w-full px-8 py-4 text-sm font-semibold"
          >
            Quero ver esse número na minha escola
          </a>
          <p className="mt-4 text-[10px] opacity-50" style={{ color: giz.mutedDark }}>
            Estimativa ilustrativa, com base nos valores que você informou.
          </p>
        </div>
      </div>
    </div>
  );
}
