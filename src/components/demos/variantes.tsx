"use client";

import { useState } from "react";
import { DemoFrame, DemoStage } from "./demo-frame";
import { cn } from "@/lib/utils";

type Variant = "primario" | "secundario" | "fantasma";
type Size = "sm" | "md";

const VARIANTS: { value: Variant; label: string }[] = [
  { value: "primario", label: "Primário" },
  { value: "secundario", label: "Secundário" },
  { value: "fantasma", label: "Fantasma" },
];

const STATES = [
  { id: "default", label: "Repouso" },
  { id: "hover", label: "Hover" },
  { id: "pressed", label: "Pressionado" },
  { id: "focus", label: "Foco" },
  { id: "disabled", label: "Desabilitado" },
] as const;

export function VariantesDemo() {
  const [variant, setVariant] = useState<Variant>("primario");
  const [size, setSize] = useState<Size>("md");

  return (
    <DemoFrame>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,220px)_1fr]">
        <div className="grid gap-5">
          <div className="grid gap-2">
            <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
              Variant
            </span>
            <div className="grid gap-1.5">
              {VARIANTS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setVariant(option.value)}
                  className={cn(
                    "rounded-md border px-3 py-1.5 text-left text-xs transition-colors",
                    variant === option.value
                      ? "border-primary/50 bg-primary/15 text-foreground"
                      : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-2">
            <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
              Size
            </span>
            <div className="flex gap-1.5">
              {(["sm", "md"] as Size[]).map((option) => (
                <button
                  key={option}
                  onClick={() => setSize(option)}
                  className={cn(
                    "flex-1 rounded-md border px-3 py-1.5 text-xs transition-colors",
                    size === option
                      ? "border-primary/50 bg-primary/15 text-foreground"
                      : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {option === "sm" ? "Pequeno" : "Médio"}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs leading-relaxed text-muted-foreground">
            Três variantes × dois tamanhos × cinco estados são trinta
            combinações — e um único componente. Sem propriedades, seriam trinta
            elementos para manter.
          </p>
        </div>

        <div className="grid gap-4">
          <DemoStage className="p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.12em] text-muted-foreground">
              Interativo — passe o mouse e clique
            </p>
            <DemoButton variant={variant} size={size} />
          </DemoStage>

          <DemoStage className="p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.12em] text-muted-foreground">
              Todos os estados lado a lado
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {STATES.map((state) => (
                <div key={state.id} className="grid gap-2 text-center">
                  <DemoButton variant={variant} size={size} forceState={state.id} />
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {state.label}
                  </span>
                </div>
              ))}
            </div>
          </DemoStage>
        </div>
      </div>
    </DemoFrame>
  );
}

function DemoButton({
  variant,
  size,
  forceState,
}: {
  variant: Variant;
  size: Size;
  forceState?: (typeof STATES)[number]["id"];
}) {
  const base = cn(
    "inline-flex items-center justify-center rounded-[10px] font-medium transition-all duration-150 outline-none",
    size === "sm" ? "px-3.5 py-2 text-xs" : "px-5 py-2.5 text-sm",
  );

  const styles: Record<Variant, string> = {
    primario: "bg-primary text-primary-foreground",
    secundario: "border border-border bg-transparent text-foreground",
    fantasma: "bg-transparent text-primary",
  };

  const forced: Record<string, string> = {
    hover:
      variant === "primario"
        ? "brightness-110"
        : variant === "secundario"
          ? "bg-secondary"
          : "underline underline-offset-4",
    pressed:
      variant === "primario"
        ? "brightness-95 scale-[0.98]"
        : "bg-secondary scale-[0.98]",
    focus: "ring-2 ring-primary/60 ring-offset-2 ring-offset-background",
    disabled: "opacity-45 cursor-not-allowed",
  };

  const interactive = !forceState
    ? cn(
        "hover:brightness-110 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer",
        variant === "secundario" && "hover:bg-secondary hover:brightness-100",
        variant === "fantasma" &&
          "hover:underline hover:underline-offset-4 hover:brightness-100",
      )
    : forced[forceState] ?? "";

  return (
    <button
      className={cn(base, styles[variant], interactive)}
      disabled={forceState === "disabled"}
      tabIndex={forceState ? -1 : 0}
    >
      Agendar demonstração
    </button>
  );
}
