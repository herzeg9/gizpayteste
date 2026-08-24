"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { giz } from "@/components/prototipo/tokens";

const LINHAS = [
  {
    criterio: "Onde o dinheiro cai",
    giz: "Na conta da própria escola, no CNPJ dela",
    outro: "Na conta do intermediário, com repasse posterior",
    vitoria: true,
  },
  {
    criterio: "Prazo de repasse",
    giz: "Imediato no Pix · D+1 no boleto",
    outro: "De D+15 a D+60",
    vitoria: true,
  },
  {
    criterio: "Modelo de cobrança",
    giz: "Assinatura por aluno ativo, previsível",
    outro: "Percentual sobre todo o faturamento",
    vitoria: true,
  },
  {
    criterio: "Régua de cobrança",
    giz: "Automática e configurável pela escola",
    outro: "Padrão do fornecedor, pouco ajustável",
    vitoria: true,
  },
  {
    criterio: "Relação com a família",
    giz: "A escola fala com o responsável, na marca dela",
    outro: "Um terceiro cobra em nome da escola",
    vitoria: true,
  },
];

type Modo = "giz" | "intermediario";

export function ComparativoInterativo() {
  const [modo, setModo] = useState<Modo>("giz");

  return (
    <div className="mt-12">
      <div
        className="inline-flex rounded-[12px] border p-1"
        style={{ borderColor: giz.borderLight, background: giz.lightAlt }}
        role="tablist"
        aria-label="Modo de visualização do comparativo"
      >
        {(
          [
            ["giz", "Com Giz Pay"],
            ["intermediario", "Com intermediário"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={modo === id}
            onClick={() => setModo(id)}
            className="rounded-[10px] px-4 py-2.5 text-sm font-medium transition-colors"
            style={{
              background: modo === id ? "white" : "transparent",
              color: modo === id ? giz.fgLight : giz.mutedLight,
              boxShadow: modo === id ? "0 1px 3px rgba(11,31,26,0.08)" : undefined,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        className="mt-6 overflow-hidden rounded-[18px] border bg-white"
        style={{ borderColor: giz.borderLight }}
      >
        {LINHAS.map((linha) => {
          const destaque = modo === "giz";
          const texto = destaque ? linha.giz : linha.outro;
          const positivo = destaque && linha.vitoria;

          return (
            <div
              key={linha.criterio}
              className="grid gap-2 border-b px-5 py-4 last:border-0 sm:grid-cols-[1fr_1.4fr]"
              style={{
                borderColor: giz.borderLight,
                background: positivo ? "rgba(74,222,128,0.06)" : undefined,
              }}
            >
              <span className="text-sm font-medium" style={{ color: giz.fgLight }}>
                {linha.criterio}
              </span>
              <span
                className="flex items-start gap-2 text-sm leading-relaxed"
                style={{ color: destaque ? giz.fgLight : giz.mutedLight }}
              >
                {destaque ? (
                  <Check
                    className="mt-0.5 size-3.5 shrink-0"
                    style={{ color: giz.primary }}
                    aria-hidden="true"
                  />
                ) : null}
                {texto}
              </span>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-sm" style={{ color: giz.mutedLight }}>
        {modo === "giz"
          ? "Liquidação no CNPJ da escola, previsibilidade de custo e comunicação na sua marca."
          : "Repasse atrasado, taxa sobre faturamento e terceiro falando com a família."}
      </p>
    </div>
  );
}

export const COMPARATIVO_LINHAS = LINHAS;
