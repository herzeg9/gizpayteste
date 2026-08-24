"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DemoFrame, DemoStage } from "./demo-frame";
import { cn } from "@/lib/utils";

const NOTES = {
  ruim: [
    "Cinco elementos com o mesmo peso visual",
    "Dois botões sólidos disputando o clique",
    "Ícone grande competindo com o texto",
    "Sem agrupamento por espaço — tudo equidistante",
  ],
  bom: [
    "Um único ponto focal: o número",
    "Um botão sólido, um em texto",
    "Hierarquia por tamanho, peso e cor",
    "Espaço agrupa título e subtítulo",
  ],
};

export function HierarquiaDemo() {
  const [good, setGood] = useState(false);
  const [blur, setBlur] = useState(false);

  return (
    <DemoFrame>
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          variant={!good ? "default" : "outline"}
          onClick={() => setGood(false)}
        >
          Tudo grita
        </Button>
        <Button
          size="sm"
          variant={good ? "default" : "outline"}
          onClick={() => setGood(true)}
        >
          Com hierarquia
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setBlur((b) => !b)}
          className="ml-auto"
        >
          {blur ? "Remover desfoque" : "Teste do desfoque"}
        </Button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_minmax(0,230px)]">
        <DemoStage tone="light" className="p-6">
          <div
            className="transition-[filter] duration-300"
            style={{ filter: blur ? "blur(5px)" : undefined }}
          >
            {good ? <GoodVersion /> : <BadVersion />}
          </div>
        </DemoStage>

        <ul className="grid content-start gap-2.5">
          {(good ? NOTES.bom : NOTES.ruim).map((note) => (
            <li
              key={note}
              className={cn(
                "rounded-lg border px-3 py-2 text-xs leading-relaxed",
                good
                  ? "border-primary/25 bg-primary/8 text-foreground"
                  : "border-destructive/25 bg-destructive/8 text-muted-foreground",
              )}
            >
              {note}
            </li>
          ))}
        </ul>
      </div>
    </DemoFrame>
  );
}

function BadVersion() {
  return (
    <div className="grid gap-4 text-center">
      <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#4ADE80] text-2xl">
        💰
      </div>
      <p className="text-2xl font-bold text-[#0B1F1A]">
        CALCULADORA DE ECONOMIA
      </p>
      <p className="text-2xl font-bold text-[#3E8E63]">
        Quanto a intermediação custa à sua escola?
      </p>
      <p className="text-2xl font-bold text-[#0B1F1A]">R$ 179.550 POR ANO</p>
      <p className="text-xl font-bold text-[#3E8E63]">
        Sobre um faturamento de R$ 5.130.000
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button className="rounded-lg bg-[#4ADE80] px-5 py-3 text-base font-bold text-[#0B1F1A]">
          AGENDAR DEMONSTRAÇÃO
        </button>
        <button className="rounded-lg bg-[#0B1F1A] px-5 py-3 text-base font-bold text-white">
          FALAR NO WHATSAPP
        </button>
      </div>
    </div>
  );
}

function GoodVersion() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3E8E63]">
          Calculadora de economia
        </span>
        <h4 className="max-w-md font-display text-[28px] font-semibold leading-tight text-[#0B1F1A]">
          Quanto a intermediação custa à sua escola por ano?
        </h4>
      </div>

      <div className="grid gap-1">
        <p className="text-sm text-[#5A6B64]">
          O intermediário leva do seu caixa, por ano
        </p>
        <p className="font-mono text-5xl font-medium tabular-nums text-[#0B1F1A]">
          R$ 179.550
        </p>
        <p className="text-xs text-[#5A6B64]">
          Sobre um faturamento anual estimado de R$ 5.130.000
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button className="rounded-[10px] bg-[#0B1F1A] px-5 py-3 text-sm font-medium text-white">
          Quero ver esse número na minha escola
        </button>
        <button className="text-sm font-medium text-[#3E8E63] underline underline-offset-4">
          Falar no WhatsApp
        </button>
      </div>
    </div>
  );
}
