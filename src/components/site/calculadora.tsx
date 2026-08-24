"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { AnimatedNumber } from "./animated-number";
import { Reveal } from "./reveal";
import { ChalkMark, Section, SectionHeader } from "./section";

const brl = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

export function Calculadora() {
  const [alunos, setAlunos] = useState(450);
  const [mensalidade, setMensalidade] = useState(950);
  const [taxa, setTaxa] = useState(3.5);

  const faturamentoAnual = alunos * mensalidade * 12;
  const custoIntermediario = faturamentoAnual * (taxa / 100);

  return (
    <Section id="calculadora" className="bg-card">
      <SectionHeader
        eyebrow="Calculadora de economia"
        title={
          <>
            Quanto a intermediação <ChalkMark>custa</ChalkMark> à sua escola por ano?
          </>
        }
        description="Ajuste os números da sua escola e veja quanto uma taxa de intermediário representa sobre o seu faturamento a cada ano."
      />

      <Reveal>
        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-8 rounded-2xl border bg-background p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between">
                <Label htmlFor="alunos" className="text-sm font-medium">
                  Alunos ativos
                </Label>
                <span className="font-display text-xl font-semibold text-primary">
                  {alunos.toLocaleString("pt-BR")}
                </span>
              </div>
              <Slider
                id="alunos"
                min={50}
                max={2000}
                step={10}
                value={[alunos]}
                onValueChange={([v]) => setAlunos(v)}
                aria-label="Quantidade de alunos ativos"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between">
                <Label htmlFor="mensalidade" className="text-sm font-medium">
                  Mensalidade média
                </Label>
                <span className="font-display text-xl font-semibold text-primary">
                  {brl(mensalidade)}
                </span>
              </div>
              <Slider
                id="mensalidade"
                min={300}
                max={3500}
                step={50}
                value={[mensalidade]}
                onValueChange={([v]) => setMensalidade(v)}
                aria-label="Valor médio da mensalidade"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between">
                <Label htmlFor="taxa" className="text-sm font-medium">
                  Taxa atual do intermediário
                </Label>
                <span className="font-display text-xl font-semibold text-primary">
                  {taxa.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}%
                </span>
              </div>
              <Slider
                id="taxa"
                min={1}
                max={6}
                step={0.5}
                value={[taxa]}
                onValueChange={([v]) => setTaxa(v)}
                aria-label="Taxa percentual cobrada pelo intermediário"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-ink p-6 text-ink-foreground sm:p-8">
            <div>
              <p className="mb-2 text-sm text-ink-foreground/70">
                O intermediário leva do seu caixa, por ano
              </p>
              <p
                className="font-display text-4xl font-semibold text-accent sm:text-5xl"
                aria-live="polite"
              >
                <AnimatedNumber value={custoIntermediario} format={brl} duration={0.6} />
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-foreground/70">
                É o que uma taxa de{" "}
                {taxa.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}% retira do
                faturamento anual estimado de <strong>{brl(faturamentoAnual)}</strong>. Com a Giz
                Pay, esse percentual dá lugar a uma assinatura fixa por aluno — previsível e
                muito menor.
              </p>
            </div>

            <div>
              <Button
                size="lg"
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <a href="#demonstracao">
                  Quero ver isso na minha escola
                  <ArrowRight data-slot="icon" />
                </a>
              </Button>
              <p className="mt-3 text-center text-xs text-ink-foreground/50">
                Estimativa ilustrativa, com base nos valores que você informou.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
