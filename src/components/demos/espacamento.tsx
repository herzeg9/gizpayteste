"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { DemoControls, DemoFrame, DemoLabel, DemoStage } from "./demo-frame";

const SCALE = [4, 8, 12, 16, 24, 32, 48, 64, 96];
const ARBITRARY = { padding: 21, gap: 13, titleGap: 19, blockGap: 11 };

export function EspacamentoDemo() {
  const [step, setStep] = useState(4);
  const [scaled, setScaled] = useState(true);

  const base = SCALE[step];
  const padding = scaled ? base : ARBITRARY.padding;
  const titleGap = scaled ? Math.max(4, base / 2) : ARBITRARY.titleGap;
  const blockGap = scaled ? base * 1.5 : ARBITRARY.blockGap;
  const itemGap = scaled ? Math.max(8, base * 0.75) : ARBITRARY.gap;

  return (
    <DemoFrame>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,260px)_1fr]">
        <DemoControls>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={scaled ? "default" : "outline"}
              onClick={() => setScaled(true)}
              className="flex-1"
            >
              Escala 8pt
            </Button>
            <Button
              size="sm"
              variant={!scaled ? "default" : "outline"}
              onClick={() => setScaled(false)}
              className="flex-1"
            >
              Arbitrário
            </Button>
          </div>

          <div className="grid gap-3">
            <DemoLabel
              label="Degrau da escala"
              value={scaled ? `${base}px` : "—"}
            />
            <Slider
              value={[step]}
              min={1}
              max={SCALE.length - 2}
              step={1}
              disabled={!scaled}
              onValueChange={([v]) => setStep(v)}
              aria-label="Degrau da escala de espaçamento"
            />
            <div className="flex justify-between font-mono text-[10px] text-muted-foreground">
              {SCALE.slice(1, -1).map((v) => (
                <span key={v}>{v}</span>
              ))}
            </div>
          </div>

          <dl className="grid gap-1.5 rounded-lg border border-border bg-secondary/50 p-3 font-mono text-[11px]">
            {[
              ["padding", padding],
              ["gap título", titleGap],
              ["gap itens", itemGap],
              ["gap blocos", blockGap],
            ].map(([label, value]) => (
              <div key={label as string} className="flex justify-between">
                <dt className="text-muted-foreground">{label}</dt>
                <dd className="tabular-nums text-foreground">{value}px</dd>
              </div>
            ))}
          </dl>

          <p className="text-xs leading-relaxed text-muted-foreground">
            {scaled
              ? "Todos os valores derivam de um único degrau. O ritmo se mantém em qualquer tamanho."
              : "Valores escolhidos no olho: 21, 13, 19, 11. Ninguém sabe nomear o problema, mas o olho percebe o ruído."}
          </p>
        </DemoControls>

        <DemoStage tone="light" className="p-5">
          <div
            className="rounded-[14px] border border-black/10 bg-white"
            style={{ padding }}
          >
            <div className="grid" style={{ gap: titleGap }}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#3E8E63]">
                Módulos
              </span>
              <h4 className="font-display text-[26px] leading-tight font-semibold">
                Uma plataforma completa
              </h4>
              <p className="text-sm leading-relaxed text-[#5A6B64]">
                Construída ouvindo secretarias, tesourarias e direções.
              </p>
            </div>

            <div style={{ marginTop: blockGap }} className="grid gap-3">
              {["Pix com baixa instantânea", "Régua de cobrança", "Painel de inadimplência"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center rounded-[10px] border border-black/8 bg-[#F6F8F5]"
                    style={{ padding: itemGap, gap: itemGap }}
                  >
                    <span className="grid size-8 shrink-0 place-items-center rounded-md bg-[#0B1F1A] font-mono text-[11px] text-[#4ADE80]">
                      ✓
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ),
              )}
            </div>

            <div style={{ marginTop: blockGap }}>
              <button className="rounded-[10px] bg-[#0B1F1A] px-4 py-2.5 text-sm font-medium text-white">
                Ver todos os módulos
              </button>
            </div>
          </div>
        </DemoStage>
      </div>
    </DemoFrame>
  );
}
