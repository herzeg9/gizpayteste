"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { DemoFrame, DemoLabel, DemoStage } from "./demo-frame";
import { cn } from "@/lib/utils";

type Mode = "fill" | "fit" | "fixed";

const MODES: { value: Mode; label: string; hint: string }[] = [
  { value: "fill", label: "Fill", hint: "Ocupa o espaço disponível" },
  { value: "fit", label: "Fit", hint: "Encolhe até o conteúdo" },
  { value: "fixed", label: "Fixed", hint: "Tamanho exato em px" },
];

const BLOCKS = [
  { id: "icone", label: "Ícone", content: "◈", fixed: 56 },
  { id: "texto", label: "Texto", content: "Liquidação direto no CNPJ da escola", fixed: 180 },
  { id: "botao", label: "Botão", content: "Agendar", fixed: 140 },
];

export function SizingDemo() {
  const [modes, setModes] = useState<Record<string, Mode>>({
    icone: "fit",
    texto: "fill",
    botao: "fit",
  });
  const [containerWidth, setContainerWidth] = useState(100);

  const overflow =
    modes.texto === "fixed" && containerWidth < 60
      ? "O texto Fixed não encolhe: em telas estreitas ele transborda ou é cortado. É exatamente daqui que vem a maioria dos bugs de layout no Framer."
      : null;

  return (
    <DemoFrame>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,250px)_1fr]">
        <div className="grid gap-5">
          {BLOCKS.map((block) => (
            <div key={block.id} className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {block.label}
              </span>
              <div className="flex gap-1.5">
                {MODES.map((mode) => (
                  <button
                    key={mode.value}
                    onClick={() =>
                      setModes((prev) => ({ ...prev, [block.id]: mode.value }))
                    }
                    className={cn(
                      "flex-1 rounded-md border px-2 py-1.5 text-xs transition-colors",
                      modes[block.id] === mode.value
                        ? "border-primary/50 bg-primary/15 text-foreground"
                        : "border-border text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground">
                {MODES.find((m) => m.value === modes[block.id])?.hint}
              </p>
            </div>
          ))}

          <div className="grid gap-2.5">
            <DemoLabel label="Largura do pai" value={`${containerWidth}%`} />
            <Slider
              value={[containerWidth]}
              min={40}
              max={100}
              step={5}
              onValueChange={([v]) => setContainerWidth(v)}
              aria-label="Largura do container pai"
            />
          </div>
        </div>

        <div className="grid content-start gap-3">
          <DemoStage className="p-4">
            <div
              className="rounded-[10px] border border-dashed border-primary/30 p-3 transition-[width] duration-200"
              style={{ width: `${containerWidth}%` }}
            >
              <div className="flex items-center gap-3">
                {BLOCKS.map((block) => {
                  const mode = modes[block.id];
                  return (
                    <div
                      key={block.id}
                      className={cn(
                        "grid place-items-center rounded-lg px-3 py-3 text-center text-xs font-medium ring-1",
                        block.id === "botao"
                          ? "bg-primary text-primary-foreground ring-primary/40"
                          : "bg-secondary text-foreground ring-border",
                        mode === "fixed" && "overflow-hidden whitespace-nowrap",
                      )}
                      style={{
                        flex: mode === "fill" ? "1 1 0%" : "0 0 auto",
                        width: mode === "fixed" ? block.fixed : undefined,
                        minWidth: mode === "fill" ? 0 : undefined,
                      }}
                    >
                      <span className={cn(mode === "fill" && "truncate")}>
                        {block.content}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </DemoStage>

          <pre className="overflow-x-auto rounded-[10px] border border-border bg-secondary/50 p-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
            {BLOCKS.map((block) => {
              const mode = modes[block.id];
              const css =
                mode === "fill"
                  ? "flex: 1 1 0%"
                  : mode === "fit"
                    ? "width: auto"
                    : `width: ${block.fixed}px`;
              return `${block.label.padEnd(7)} → ${mode.toUpperCase().padEnd(6)} · ${css}`;
            }).join("\n")}
          </pre>

          {overflow ? (
            <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
              {overflow}
            </p>
          ) : (
            <p className="rounded-lg border border-border bg-secondary/40 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
              Receita segura: ícone em Fit, texto em Fill, botão em Fit. Arraste
              a largura do pai e veja que nada quebra.
            </p>
          )}
        </div>
      </div>
    </DemoFrame>
  );
}
