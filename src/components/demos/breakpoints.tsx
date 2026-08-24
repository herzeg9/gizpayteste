"use client";

import { useState } from "react";
import { Monitor, Smartphone, Tablet } from "lucide-react";
import { DemoFrame } from "./demo-frame";
import { cn } from "@/lib/utils";

const VIEWPORTS = [
  { id: "phone", label: "Phone", width: 390, icon: Smartphone },
  { id: "tablet", label: "Tablet", width: 768, icon: Tablet },
  { id: "desktop", label: "Desktop", width: 1200, icon: Monitor },
] as const;

export function BreakpointsDemo() {
  const [active, setActive] = useState<(typeof VIEWPORTS)[number]["id"]>("desktop");
  const viewport = VIEWPORTS.find((v) => v.id === active)!;
  const isPhone = active === "phone";
  const isDesktop = active === "desktop";

  return (
    <DemoFrame>
      <div className="mb-5 flex flex-wrap items-center gap-2">
        {VIEWPORTS.map((option) => {
          const Icon = option.icon;
          return (
            <button
              key={option.id}
              onClick={() => setActive(option.id)}
              className={cn(
                "flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs transition-colors",
                active === option.id
                  ? "border-primary/50 bg-primary/15 text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="size-3.5" />
              {option.label}
              <span className="font-mono text-[10px] opacity-60">
                {option.width}
              </span>
            </button>
          );
        })}
      </div>

      <div className="overflow-x-auto rounded-[14px] border border-border bg-background p-4 scrollbar-slim">
        <div
          className="mx-auto rounded-[12px] border border-border bg-[#07211B] transition-[max-width] duration-300"
          style={{ maxWidth: viewport.width }}
        >
          <div
            className={cn(
              "flex items-center justify-between border-b border-white/10",
              isPhone ? "px-4 py-3" : "px-6 py-4",
            )}
          >
            <span className="font-display text-sm font-semibold text-[#F2F7F3]">
              Giz Pay
            </span>
            {isPhone ? (
              <span className="text-[#9CB0A8]">☰</span>
            ) : (
              <span className="flex items-center gap-4 text-[11px] text-[#9CB0A8]">
                <span>Como funciona</span>
                <span>Preço</span>
                <span>Segurança</span>
                <span className="rounded-md bg-[#4ADE80] px-2.5 py-1 font-medium text-[#0B1F1A]">
                  Agendar
                </span>
              </span>
            )}
          </div>

          <div
            className={cn(
              "grid",
              isPhone ? "gap-5 px-4 py-6" : "gap-8 px-6 py-10",
              isDesktop && "grid-cols-[1.1fr_0.9fr] items-center",
            )}
          >
            <div className={cn("grid", isPhone ? "gap-3" : "gap-4")}>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#4ADE80]">
                Plataforma financeira para escolas
              </span>
              <h4
                className="font-display font-semibold leading-[1.08] text-[#F2F7F3]"
                style={{ fontSize: isPhone ? 26 : isDesktop ? 40 : 34 }}
              >
                O dinheiro da sua escola, no controle de quem ensina.
              </h4>
              <p
                className="leading-relaxed text-[#9CB0A8]"
                style={{ fontSize: isPhone ? 13 : 14 }}
              >
                Cobrança automática e liquidação direto no CNPJ da escola.
              </p>
              <div
                className={cn(
                  "flex gap-2",
                  isPhone ? "flex-col" : "flex-row items-center",
                )}
              >
                <button
                  className={cn(
                    "rounded-lg bg-[#4ADE80] px-4 py-2.5 text-xs font-medium text-[#0B1F1A]",
                    isPhone && "w-full",
                  )}
                >
                  Agendar demonstração
                </button>
                <button
                  className={cn(
                    "rounded-lg border border-white/20 px-4 py-2.5 text-xs font-medium text-[#F2F7F3]",
                    isPhone && "w-full",
                  )}
                >
                  Calcular economia
                </button>
              </div>
            </div>

            <div className="rounded-[10px] border border-white/10 bg-[#0E2F27] p-4">
              <p className="text-[10px] text-[#9CB0A8]">Recebido no mês</p>
              <p className="font-mono text-2xl font-medium tabular-nums text-[#F2F7F3]">
                R$ 428.910
              </p>
              <div
                className={cn(
                  "mt-3 grid gap-2",
                  isPhone ? "grid-cols-3" : "grid-cols-3",
                )}
              >
                {[
                  ["Em dia", "391k", "#4ADE80"],
                  ["Em aberto", "24k", "#9CB0A8"],
                  ["Atrasado", "13k", "#F0B429"],
                ].map(([label, value, color]) => (
                  <div
                    key={label}
                    className="rounded-md border border-white/10 px-2 py-1.5"
                  >
                    <p className="text-[9px] text-[#9CB0A8]">{label}</p>
                    <p
                      className="font-mono text-xs tabular-nums"
                      style={{ color }}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {isPhone ? (
            <div className="sticky bottom-0 flex gap-2 border-t border-white/10 bg-[#07211B] px-4 py-3">
              <button className="flex-1 rounded-lg bg-[#4ADE80] py-2.5 text-xs font-medium text-[#0B1F1A]">
                Agendar demonstração
              </button>
              <button className="rounded-lg border border-white/20 px-3 text-xs text-[#F2F7F3]">
                WhatsApp
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        {isPhone
          ? "No Phone: Stack vertical, botões em Fill, padding reduzido para 64/20 e uma barra fixa no rodapé — onde o polegar alcança."
          : isDesktop
            ? "No Desktop: Stack horizontal de duas colunas, container de 1200px, padding de 96/24."
            : "No Tablet: ainda uma coluna para o hero, mas com tipografia intermediária. É o breakpoint mais esquecido e o que mais quebra."}
      </p>
    </DemoFrame>
  );
}
