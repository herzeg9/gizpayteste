"use client";

import { useMemo, useState } from "react";
import { Check, X } from "lucide-react";
import { DemoFrame } from "./demo-frame";
import { cn } from "@/lib/utils";

const PRESETS: { label: string; fg: string; bg: string }[] = [
  { label: "Texto no escuro", fg: "#F2F7F3", bg: "#07211B" },
  { label: "Secundário no escuro", fg: "#9CB0A8", bg: "#07211B" },
  { label: "Botão primário", fg: "#0B1F1A", bg: "#4ADE80" },
  { label: "Botão primário com branco", fg: "#FFFFFF", bg: "#4ADE80" },
  { label: "Texto no claro", fg: "#0B1F1A", bg: "#F6F8F5" },
  { label: "Cinza-claro no branco", fg: "#B4BDB9", bg: "#FFFFFF" },
];

function toRgb(hex: string): [number, number, number] | null {
  const clean = hex.replace("#", "").trim();
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  if (!/^[0-9a-fA-F]{6}$/.test(full)) return null;
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

function luminance(rgb: [number, number, number]) {
  const [r, g, b] = rgb.map((channel) => {
    const s = channel / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(fg: string, bg: string) {
  const a = toRgb(fg);
  const b = toRgb(bg);
  if (!a || !b) return null;
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

export function ContrasteDemo() {
  const [fg, setFg] = useState("#9CB0A8");
  const [bg, setBg] = useState("#07211B");

  const ratio = useMemo(() => contrastRatio(fg, bg), [fg, bg]);

  const checks = [
    { label: "AA · texto normal", min: 4.5 },
    { label: "AA · texto grande", min: 3 },
    { label: "AAA · texto normal", min: 7 },
    { label: "AAA · texto grande", min: 4.5 },
  ];

  return (
    <DemoFrame>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,270px)_1fr]">
        <div className="grid gap-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <ColorField label="Texto" value={fg} onChange={setFg} />
            <ColorField label="Fundo" value={bg} onChange={setBg} />
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
              Combinações do projeto
            </p>
            <div className="flex flex-wrap gap-1.5">
              {PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  onClick={() => {
                    setFg(preset.fg);
                    setBg(preset.bg);
                  }}
                  className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div
            className="grid gap-3 rounded-[14px] border border-border p-6"
            style={{ background: bg, color: fg }}
          >
            <p className="font-display text-3xl font-semibold leading-tight">
              O dinheiro da sua escola
            </p>
            <p className="text-sm leading-relaxed">
              Cobrança automática por Pix, boleto e cartão, com liquidação
              direto no CNPJ da escola. Este é um texto de 14px para você julgar
              a legibilidade real.
            </p>
            <p className="text-xs">Microcópia de 12px, o pior caso.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div>
              <p className="font-mono text-4xl font-medium tabular-nums text-foreground">
                {ratio ? ratio.toFixed(2) : "—"}
                <span className="text-lg text-muted-foreground">:1</span>
              </p>
              <p className="text-xs text-muted-foreground">razão de contraste</p>
            </div>
            <div className="grid flex-1 gap-1.5 sm:grid-cols-2">
              {checks.map((check) => {
                const pass = ratio !== null && ratio >= check.min;
                return (
                  <div
                    key={check.label}
                    className={cn(
                      "flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-xs",
                      pass
                        ? "border-primary/30 bg-primary/10 text-foreground"
                        : "border-destructive/30 bg-destructive/10 text-muted-foreground",
                    )}
                  >
                    {pass ? (
                      <Check className="size-3.5 text-primary" />
                    ) : (
                      <X className="size-3.5 text-destructive" />
                    )}
                    {check.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </DemoFrame>
  );
}

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 p-1.5">
        <input
          type="color"
          value={/^#[0-9a-fA-F]{6}$/.test(value) ? value : "#000000"}
          onChange={(event) => onChange(event.target.value.toUpperCase())}
          className="size-8 cursor-pointer rounded-md border-0 bg-transparent p-0"
          aria-label={`Selecionar cor de ${label.toLowerCase()}`}
        />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value.toUpperCase())}
          className="w-full bg-transparent font-mono text-sm outline-none"
          aria-label={`Valor hexadecimal de ${label.toLowerCase()}`}
        />
      </span>
    </label>
  );
}
