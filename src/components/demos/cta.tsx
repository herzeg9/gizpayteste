"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { DemoFrame, DemoStage } from "./demo-frame";
import { cn } from "@/lib/utils";

type Option = {
  label: string;
  score: number;
  criteria: { specific: boolean; firstPerson: boolean; lowRisk: boolean };
  note: string;
};

const OPTIONS: Option[] = [
  {
    label: "Saiba mais",
    score: 1,
    criteria: { specific: false, firstPerson: false, lowRisk: false },
    note: "Não diz o que acontece depois do clique. Ninguém acorda querendo “saber mais”.",
  },
  {
    label: "Enviar",
    score: 1,
    criteria: { specific: false, firstPerson: false, lowRisk: false },
    note: "Descreve o esforço do usuário, não o benefício que ele recebe.",
  },
  {
    label: "Entre em contato",
    score: 2,
    criteria: { specific: false, firstPerson: false, lowRisk: true },
    note: "Melhor, mas ainda coloca o trabalho do lado do visitante e não promete nada.",
  },
  {
    label: "Agendar demonstração",
    score: 3,
    criteria: { specific: true, firstPerson: false, lowRisk: false },
    note: "Específico: a pessoa sabe exatamente o que vai acontecer. Falta remover o risco.",
  },
  {
    label: "Agendar demonstração gratuita",
    score: 4,
    criteria: { specific: true, firstPerson: false, lowRisk: true },
    note: "Específico e sem risco. É uma boa chamada padrão para o formulário.",
  },
  {
    label: "Quero ver esse número na minha escola",
    score: 5,
    criteria: { specific: true, firstPerson: true, lowRisk: true },
    note: "Completa a frase “eu quero…”, retoma o valor que a pessoa acabou de calcular e não exige compromisso. É o CTA da seção da calculadora.",
  },
];

export function CtaDemo() {
  const [index, setIndex] = useState(0);
  const option = OPTIONS[index];

  const criteria = [
    { key: "specific" as const, label: "Diz o que acontece" },
    { key: "firstPerson" as const, label: "Fala na 1ª pessoa" },
    { key: "lowRisk" as const, label: "Remove o risco" },
  ];

  return (
    <DemoFrame>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,290px)_1fr]">
        <div className="grid content-start gap-1.5">
          {OPTIONS.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setIndex(i)}
              className={cn(
                "flex items-center justify-between gap-3 rounded-lg border px-3 py-2 text-left text-xs transition-colors",
                index === i
                  ? "border-primary/50 bg-primary/15 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              <span>{item.label}</span>
              <span
                className="font-mono text-[10px] tabular-nums"
                aria-label={`Nota ${item.score} de 5`}
              >
                {"●".repeat(item.score)}
                <span className="opacity-25">{"●".repeat(5 - item.score)}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="grid content-start gap-4">
          <DemoStage tone="light" className="p-6">
            <div className="grid gap-3">
              <p className="text-sm text-[#5A6B64]">
                O intermediário leva do seu caixa, por ano
              </p>
              <p className="font-mono text-4xl font-medium tabular-nums text-[#0B1F1A]">
                R$ 179.550
              </p>
              <button className="mt-2 w-fit rounded-[10px] bg-[#0B1F1A] px-5 py-3 text-sm font-medium text-white transition-transform active:scale-[0.98]">
                {option.label}
              </button>
            </div>
          </DemoStage>

          <div className="flex flex-wrap gap-2">
            {criteria.map((criterion) => {
              const pass = option.criteria[criterion.key];
              return (
                <span
                  key={criterion.key}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px]",
                    pass
                      ? "border-primary/30 bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground",
                  )}
                >
                  {pass ? (
                    <Check className="size-3 text-primary" />
                  ) : (
                    <X className="size-3 opacity-50" />
                  )}
                  {criterion.label}
                </span>
              );
            })}
          </div>

          <p className="rounded-lg border border-border bg-secondary/40 px-3 py-2.5 text-xs leading-relaxed text-muted-foreground">
            {option.note}
          </p>
        </div>
      </div>
    </DemoFrame>
  );
}
