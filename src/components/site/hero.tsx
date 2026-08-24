"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Calculator, CheckCircle2, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedNumber } from "./animated-number";
import { ChalkMark } from "./section";

const feed = [
  { initials: "MC", name: "Maria Clara · 7º ano", detail: "Pix · pago às 09:41", ok: true },
  { initials: "JP", name: "João Pedro · 3º ano", detail: "Boleto · compensado", ok: true },
  { initials: "AL", name: "Ana Lúcia · 1º ano", detail: "Atraso · lembrete enviado", ok: false },
  { initials: "RF", name: "Rafael F. · 9º ano", detail: "Cartão · recorrência ativa", ok: true },
  { initials: "BS", name: "Beatriz S. · 5º ano", detail: "Pix · pago às 10:07", ok: true },
];

function PaymentFeed() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % feed.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  const visible = [feed[index], feed[(index + 1) % feed.length], feed[(index + 2) % feed.length]];

  return (
    <ul className="flex flex-col gap-2" aria-label="Pagamentos recentes (simulação)">
      <AnimatePresence initial={false} mode="popLayout">
        {visible.map((item) => (
          <motion.li
            key={item.name}
            layout
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-3 rounded-lg border bg-background/70 px-3 py-2"
          >
            <span
              className={`grid size-8 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                item.ok
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-accent/30 text-accent-foreground"
              }`}
            >
              {item.initials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-xs font-semibold">{item.name}</span>
              <span className="block truncate text-[11px] text-muted-foreground">
                {item.detail}
              </span>
            </span>
            {item.ok ? (
              <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
            ) : (
              <Zap className="size-4 shrink-0 text-accent-foreground" aria-hidden="true" />
            )}
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

function DashboardMock() {
  return (
    <div className="relative">
      {/* Moldura de "janela de navegador" para dar contexto de produto */}
      <div className="overflow-hidden rounded-2xl border bg-card shadow-xl shadow-primary/10">
        <div className="flex items-center gap-2 border-b bg-muted/60 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="ml-3 truncate rounded-md bg-background px-3 py-1 text-[11px] text-muted-foreground">
            app.gizpay.com.br/painel
          </span>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                Colégio Exemplo · Recebido no mês
              </p>
              <p className="font-display text-3xl font-semibold text-foreground">
                R$&nbsp;
                <AnimatedNumber
                  value={428910}
                  format={(v) =>
                    Math.round(v).toLocaleString("pt-BR", { minimumFractionDigits: 0 })
                  }
                />
              </p>
            </div>
            <Badge className="bg-secondary text-secondary-foreground">↑ 6,2% vs. julho</Badge>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { label: "Em dia", value: "R$ 391k", tone: "bg-primary" },
              { label: "Em aberto", value: "R$ 24k", tone: "bg-accent" },
              { label: "Atrasado", value: "R$ 13k", tone: "bg-destructive/70" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border bg-background/60 px-2 py-3">
                <span className={`mx-auto mb-2 block h-1.5 w-8 rounded-full ${stat.tone}`} />
                <p className="text-sm font-bold">{stat.value}</p>
                <p className="text-[11px] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <PaymentFeed />
        </div>
      </div>

      {/* Selo flutuante de repasse imediato */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="absolute -bottom-5 -left-4 hidden rounded-xl border bg-card px-4 py-3 shadow-lg sm:block"
      >
        <p className="text-[11px] font-medium text-muted-foreground">Repasse</p>
        <p className="font-display text-lg font-semibold text-primary">Imediato</p>
        <p className="text-[11px] text-muted-foreground">no CNPJ da escola, sem D+30</p>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="dotted-bg relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="gap-2 rounded-full border-primary/25 bg-card px-3 py-1.5 text-xs font-medium"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Matrículas 2027 já com cobrança automática · implantação em até 15 dias
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl"
          >
            O dinheiro da sua escola, <ChalkMark>no controle</ChalkMark> de quem ensina.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Cobrança automática de mensalidades por Pix, boleto e cartão — com liquidação direto
            na conta da escola. Sem intermediário retendo o caixa, sem taxa escondida, sem
            planilha.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button size="lg" asChild className="h-12 px-6 text-base">
              <a href="#demonstracao">
                Agendar demonstração
                <ArrowRight data-slot="icon" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 px-6 text-base">
              <a href="#calculadora">
                <Calculator data-slot="icon" />
                Calcular minha economia
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.34 }}
            className="text-sm text-muted-foreground"
          >
            Implantação e migração da base inclusas · Suporte humano por WhatsApp
          </motion.p>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-2 grid w-full max-w-xl grid-cols-3 divide-x divide-border rounded-2xl border bg-card py-4 shadow-sm"
          >
            {[
              { value: "0%", label: "de repasse retido — o caixa é da escola" },
              { value: "-80%", label: "no custo vs. intermediários tradicionais" },
              { value: "<3s", label: "para baixa automática de um Pix" },
            ].map((stat) => (
              <div key={stat.value} className="flex flex-col gap-1 px-4 text-center sm:px-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="text-[11px] leading-snug text-muted-foreground sm:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
        >
          <DashboardMock />
        </motion.div>
      </div>
    </div>
  );
}
