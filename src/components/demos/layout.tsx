"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { DemoFrame, DemoLabel, DemoStage } from "./demo-frame";
import { cn } from "@/lib/utils";

const DIRECTIONS = [
  { value: "row", framer: "Horizontal →" },
  { value: "column", framer: "Vertical ↓" },
] as const;

const JUSTIFY = [
  { value: "flex-start", framer: "Início" },
  { value: "center", framer: "Centro" },
  { value: "flex-end", framer: "Fim" },
  { value: "space-between", framer: "Espaço entre" },
] as const;

const ALIGN = [
  { value: "flex-start", framer: "Topo" },
  { value: "center", framer: "Centro" },
  { value: "stretch", framer: "Esticar" },
] as const;

export function LayoutDemo() {
  const [direction, setDirection] = useState<"row" | "column">("row");
  const [justify, setJustify] = useState<(typeof JUSTIFY)[number]["value"]>(
    "flex-start",
  );
  const [align, setAlign] = useState<(typeof ALIGN)[number]["value"]>("center");
  const [gap, setGap] = useState(16);
  const [wrap, setWrap] = useState(true);

  return (
    <DemoFrame>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,250px)_1fr]">
        <div className="grid gap-5">
          <Choice
            label="Direction"
            options={DIRECTIONS.map((d) => ({ value: d.value, label: d.framer }))}
            value={direction}
            onChange={(v) => setDirection(v as "row" | "column")}
          />
          <Choice
            label="Distribute"
            options={JUSTIFY.map((j) => ({ value: j.value, label: j.framer }))}
            value={justify}
            onChange={(v) => setJustify(v as typeof justify)}
          />
          <Choice
            label="Align"
            options={ALIGN.map((a) => ({ value: a.value, label: a.framer }))}
            value={align}
            onChange={(v) => setAlign(v as typeof align)}
          />
          <div className="grid gap-2.5">
            <DemoLabel label="Gap" value={`${gap}px`} />
            <Slider
              value={[gap]}
              min={0}
              max={48}
              step={4}
              onValueChange={([v]) => setGap(v)}
              aria-label="Gap"
            />
          </div>
          <Choice
            label="Wrap"
            options={[
              { value: "wrap", label: "Ligado" },
              { value: "nowrap", label: "Desligado" },
            ]}
            value={wrap ? "wrap" : "nowrap"}
            onChange={(v) => setWrap(v === "wrap")}
          />
        </div>

        <div className="grid gap-3">
          <DemoStage className="min-h-[260px] p-4">
            <div
              className="h-full min-h-[228px] rounded-[10px] border border-dashed border-primary/30 p-3"
              style={{
                display: "flex",
                flexDirection: direction,
                justifyContent: justify,
                alignItems: align,
                gap,
                flexWrap: wrap ? "wrap" : "nowrap",
              }}
            >
              {[
                { label: "Pix", height: 64 },
                { label: "Boleto", height: 92 },
                { label: "Cartão", height: 48 },
                { label: "Recorrência", height: 76 },
              ].map((item) => (
                <div
                  key={item.label}
                  className="grid min-w-[92px] place-items-center rounded-lg bg-primary/15 px-4 text-xs font-medium text-primary ring-1 ring-primary/25"
                  style={{
                    height: align === "stretch" ? undefined : item.height,
                    minHeight: align === "stretch" ? item.height : undefined,
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </DemoStage>

          <pre className="overflow-x-auto rounded-[10px] border border-border bg-secondary/50 p-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
            {`display: flex;
flex-direction: ${direction};
justify-content: ${justify};
align-items: ${align};
gap: ${gap}px;
flex-wrap: ${wrap ? "wrap" : "nowrap"};`}
          </pre>
        </div>
      </div>
    </DemoFrame>
  );
}

function Choice({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2">
      <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-md border px-2.5 py-1.5 text-xs transition-colors",
              value === option.value
                ? "border-primary/50 bg-primary/15 text-foreground"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
