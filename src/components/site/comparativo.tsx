"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";
import { Section, SectionHeader } from "./section";

type Mode = "intermediario" | "gizpay";

const flows: Record<
  Mode,
  { steps: { label: string; detail: string }[]; summary: string }
> = {
  intermediario: {
    steps: [
      { label: "Dia 5", detail: "O responsável paga a mensalidade" },
      { label: "Dia 5–35", detail: "O dinheiro fica retido na conta do intermediário" },
      { label: "Dia 35+", detail: "Repasse chega com 2% a 6% descontados" },
    ],
    summary: "A escola financia o intermediário com o próprio caixa — todos os meses.",
  },
  gizpay: {
    steps: [
      { label: "09:41:02", detail: "O responsável paga via Pix" },
      { label: "09:41:04", detail: "Baixa automática e conciliação no painel" },
      { label: "09:41:05", detail: "Valor integral na conta da escola, no CNPJ dela" },
    ],
    summary: "O dinheiro nem passa por terceiros. A Giz Pay cobra assinatura fixa por aluno.",
  },
};

const table = [
  {
    criterio: "Onde o dinheiro cai",
    gizpay: "Conta da própria escola, no CNPJ dela",
    outro: "Conta do intermediário, com repasse posterior",
  },
  {
    criterio: "Prazo de repasse",
    gizpay: "Imediato no Pix · D+1 no boleto",
    outro: "De D+15 a D+60",
  },
  {
    criterio: "Modelo de cobrança",
    gizpay: "Assinatura por aluno ativo, previsível",
    outro: "Percentual sobre todo o faturamento",
  },
  {
    criterio: "Régua de cobrança",
    gizpay: "Automática e configurável pela escola",
    outro: "Padrão do fornecedor, pouco ajustável",
  },
  {
    criterio: "Relação com a família",
    gizpay: "A escola fala com o responsável, na marca dela",
    outro: "Terceiro cobra em nome da escola",
  },
];

export function Comparativo() {
  const [mode, setMode] = useState<Mode>("gizpay");
  const flow = flows[mode];

  return (
    <Section id="comparativo">
      <SectionHeader
        eyebrow="Comparativo"
        title="Siga o caminho do dinheiro."
        description="Alterne entre os dois modelos e veja o que acontece com uma mensalidade paga pela família — do Pix ao caixa da escola."
      />

      <Reveal className="mx-auto max-w-3xl">
        <div
          role="tablist"
          aria-label="Modelo de recebimento"
          className="mx-auto mb-8 flex w-fit rounded-full border bg-card p-1 shadow-sm"
        >
          {(
            [
              { id: "intermediario", label: "Com intermediário" },
              { id: "gizpay", label: "Com a Giz Pay" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={mode === tab.id}
              onClick={() => setMode(tab.id)}
              className={cn(
                "relative rounded-full px-5 py-2 text-sm font-semibold transition-colors",
                mode === tab.id ? "text-primary-foreground" : "text-muted-foreground",
              )}
            >
              {mode === tab.id && (
                <motion.span
                  layoutId="compare-pill"
                  className={cn(
                    "absolute inset-0 rounded-full",
                    tab.id === "gizpay" ? "bg-primary" : "bg-destructive/80",
                  )}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <div
          className={cn(
            "rounded-2xl border p-6 transition-colors duration-500 sm:p-8",
            mode === "gizpay" ? "border-primary/25 bg-secondary/50" : "border-destructive/20 bg-destructive/5",
          )}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ol className="grid gap-6 sm:grid-cols-3">
                {flow.steps.map((step, i) => (
                  <motion.li
                    key={step.detail}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.18 }}
                    className="flex flex-col gap-2"
                  >
                    <span
                      className={cn(
                        "w-fit rounded-md px-2 py-1 font-mono text-xs font-bold",
                        mode === "gizpay"
                          ? "bg-primary/10 text-primary"
                          : "bg-destructive/10 text-destructive",
                      )}
                    >
                      {step.label}
                    </span>
                    <p className="text-sm leading-relaxed">{step.detail}</p>
                  </motion.li>
                ))}
              </ol>
              <p
                className={cn(
                  "mt-6 border-t pt-4 text-sm font-medium",
                  mode === "gizpay"
                    ? "border-primary/15 text-primary"
                    : "border-destructive/15 text-destructive",
                )}
              >
                {flow.summary}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>

      <Reveal className="mx-auto mt-12 max-w-3xl">
        <div className="overflow-hidden rounded-2xl border bg-card">
          <table className="w-full text-sm">
            <caption className="sr-only">
              Comparação entre Giz Pay e intermediários tradicionais de cobrança escolar
            </caption>
            <thead>
              <tr className="border-b bg-muted/60 text-left">
                <th scope="col" className="px-4 py-3 font-semibold sm:px-5">
                  Critério
                </th>
                <th scope="col" className="px-4 py-3 font-semibold text-primary sm:px-5">
                  Giz Pay
                </th>
                <th scope="col" className="hidden px-4 py-3 font-semibold text-muted-foreground sm:table-cell sm:px-5">
                  Intermediário tradicional
                </th>
              </tr>
            </thead>
            <tbody>
              {table.map((row) => (
                <tr key={row.criterio} className="border-b last:border-b-0">
                  <th scope="row" className="px-4 py-3.5 text-left font-medium sm:px-5">
                    {row.criterio}
                  </th>
                  <td className="px-4 py-3.5 sm:px-5">
                    <span className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {row.gizpay}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3.5 text-muted-foreground sm:table-cell sm:px-5">
                    <span className="flex items-start gap-2">
                      <X className="mt-0.5 size-4 shrink-0 text-destructive/70" aria-hidden="true" />
                      {row.outro}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
