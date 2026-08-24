"use client";

import { useEffect, useState } from "react";
import { payments } from "@/components/gizpay/data";
import { NotePin } from "@/components/gizpay/notes";
import { brlExact } from "@/lib/format";

const statusStyle: Record<string, string> = {
  pago: "bg-chalk/90 text-board",
  compensado: "bg-chalk/70 text-board",
  recorrente: "bg-white/10 text-paper",
  atraso: "bg-brick text-white",
};

export function DashboardMock() {
  const [tick, setTick] = useState(0);
  const [amount, setAmount] = useState(428910.5);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTick((t) => t + 1);
      setAmount((a) => a + 1240);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  const feed = [...payments.slice(tick % payments.length), ...payments].slice(0, 4);

  return (
    <div className="relative">
      <NotePin id="painel" />
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0f241c] text-paper shadow-[0_30px_80px_-30px_rgba(16,36,28,0.7)]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-chalk animate-pulse-dot" />
            <p className="font-mono text-[11px] tracking-wide text-white/60">
              app.gizpay.com.br / painel
            </p>
          </div>
          <p className="text-xs text-white/50">Colégio Exemplo</p>
        </div>
        <div className="grid gap-4 p-4 sm:p-5">
          <div>
            <p className="text-xs text-white/50">Recebido no mês</p>
            <p className="mt-1 font-mono text-3xl tracking-tight text-chalk">
              {brlExact(amount)}
            </p>
            <p className="mt-1 text-xs text-chalk/80">↑ 6,2% vs. mês anterior</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Stat label="Em dia" value="R$ 391 mil" tone="ok" />
            <Stat label="Em aberto" value="R$ 24 mil" tone="mid" />
            <Stat label="Atrasado" value="R$ 13 mil" tone="bad" />
          </div>
          <ul className="space-y-2">
            {feed.map((p) => (
              <li
                key={`${p.initials}-${p.time}-${tick}`}
                className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 animate-rise"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-white/10 font-mono text-[11px]">
                    {p.initials}
                  </span>
                  <div>
                    <p className="text-sm">{p.name}</p>
                    <p className="text-[11px] text-white/50">
                      {p.klass} · {p.method}
                    </p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusStyle[p.status]}`}
                >
                  {p.status} · {p.time}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between rounded-xl border border-chalk/30 bg-chalk/10 px-3 py-2">
            <p className="text-xs text-white/70">Repasse</p>
            <p className="text-sm font-medium text-chalk">Imediato no CNPJ da escola</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "ok" | "mid" | "bad";
}) {
  const color =
    tone === "ok" ? "text-chalk" : tone === "bad" ? "text-orange-300" : "text-paper";
  return (
    <div className="rounded-xl bg-white/5 px-3 py-2">
      <p className="text-[10px] text-white/45">{label}</p>
      <p className={`mt-1 font-mono text-sm ${color}`}>{value}</p>
    </div>
  );
}
