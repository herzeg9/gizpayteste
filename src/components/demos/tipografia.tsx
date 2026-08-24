"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { DemoControls, DemoFrame, DemoLabel, DemoStage } from "./demo-frame";

const RATIOS = [
  { value: 1.125, name: "Segunda maior — muito discreta" },
  { value: 1.2, name: "Terça menor — discreta" },
  { value: 1.25, name: "Terça maior — equilibrada" },
  { value: 1.333, name: "Quarta — dramática" },
  { value: 1.414, name: "Trítono — editorial" },
  { value: 1.5, name: "Quinta — muito dramática" },
];

const ROLES = [
  { name: "Display", stepUp: 4, weight: 600, leading: 1.05, family: "display" },
  { name: "H2", stepUp: 3, weight: 600, leading: 1.15, family: "display" },
  { name: "H3", stepUp: 2, weight: 600, leading: 1.3, family: "sans" },
  { name: "Corpo grande", stepUp: 1, weight: 400, leading: 1.6, family: "sans" },
  { name: "Corpo", stepUp: 0, weight: 400, leading: 1.6, family: "sans" },
  { name: "Apoio", stepUp: -1, weight: 400, leading: 1.5, family: "sans" },
];

export function TipografiaDemo() {
  const [base, setBase] = useState(16);
  const [ratioIndex, setRatioIndex] = useState(2);

  const ratio = RATIOS[ratioIndex];

  return (
    <DemoFrame>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,250px)_1fr]">
        <DemoControls>
          <div className="grid gap-3">
            <DemoLabel label="Tamanho base" value={`${base}px`} />
            <Slider
              value={[base]}
              min={14}
              max={20}
              step={1}
              onValueChange={([v]) => setBase(v)}
              aria-label="Tamanho base"
            />
          </div>

          <div className="grid gap-3">
            <DemoLabel label="Razão" value={ratio.value.toFixed(3)} />
            <Slider
              value={[ratioIndex]}
              min={0}
              max={RATIOS.length - 1}
              step={1}
              onValueChange={([v]) => setRatioIndex(v)}
              aria-label="Razão da escala"
            />
            <p className="text-xs text-muted-foreground">{ratio.name}</p>
          </div>

          <div className="rounded-lg border border-border bg-secondary/50 p-3 font-mono text-[11px] leading-relaxed">
            {ROLES.map((role) => (
              <div key={role.name} className="flex justify-between">
                <span className="text-muted-foreground">{role.name}</span>
                <span className="tabular-nums text-foreground">
                  {Math.round(base * Math.pow(ratio.value, role.stepUp))}px
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs leading-relaxed text-muted-foreground">
            Repare que a entrelinha diminui conforme o tamanho aumenta. Títulos
            grandes com entrelinha de corpo parecem desmontados.
          </p>
        </DemoControls>

        <DemoStage className="p-6">
          <div className="grid gap-5">
            {ROLES.map((role) => {
              const size = base * Math.pow(ratio.value, role.stepUp);
              return (
                <div key={role.name}>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {role.name} · {Math.round(size)}px / {role.leading}
                  </span>
                  <p
                    className={
                      role.family === "display" ? "font-display" : "font-sans"
                    }
                    style={{
                      fontSize: `${size}px`,
                      fontWeight: role.weight,
                      lineHeight: role.leading,
                      letterSpacing: size > 32 ? "-0.02em" : undefined,
                      maxWidth: "34ch",
                    }}
                  >
                    {role.stepUp >= 2
                      ? "O dinheiro da sua escola"
                      : "Cobrança automática e liquidação direto na conta da escola, sem intermediário."}
                  </p>
                </div>
              );
            })}
          </div>
        </DemoStage>
      </div>
    </DemoFrame>
  );
}
