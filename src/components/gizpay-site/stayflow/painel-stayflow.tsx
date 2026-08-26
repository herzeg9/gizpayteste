"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Landmark, QrCode, Zap } from "lucide-react";
import { brl, giz } from "@/components/prototipo/tokens";

const FAKE_PAYMENTS = [
  { initials: "MC", grade: "7º ano", method: "Pix", value: 1240 },
  { initials: "JP", grade: "3º ano", method: "Boleto", value: 980 },
  { initials: "AL", grade: "1º ano", method: "Pix", value: 1120 },
  { initials: "RS", grade: "9º ano", method: "Cartão", value: 1310 },
  { initials: "BT", grade: "5º ano", method: "Pix", value: 1040 },
];

type Toast = (typeof FAKE_PAYMENTS)[number] & { id: number };

// Contador monotônico compartilhado: garante keys únicas mesmo com o duplo
// mount do StrictMode em desenvolvimento e entre instâncias do painel.
let uidSeq = 0;
const nextUid = () => (uidSeq += 1);

export function PainelStayflow({ embedded = false }: { embedded?: boolean }) {
  const [revenue, setRevenue] = useState(428910);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [pulse, setPulse] = useState(false);
  const [flashes, setFlashes] = useState<{ id: number; value: number }[]>([]);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!pulse) return;
    const timer = window.setTimeout(() => setPulse(false), 550);
    return () => window.clearTimeout(timer);
  }, [pulse]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    function addPayment() {
      const p = FAKE_PAYMENTS[indexRef.current];
      indexRef.current = (indexRef.current + 1) % FAKE_PAYMENTS.length;

      setRevenue((v) => v + p.value);
      setPulse(true);

      const flashId = nextUid();
      setFlashes((f) => [...f, { id: flashId, value: p.value }]);
      window.setTimeout(() => {
        setFlashes((f) => f.filter((x) => x.id !== flashId));
      }, 1000);

      const toastId = nextUid();
      setToasts((prev) => [{ ...p, id: toastId }, ...prev].slice(0, 4));
    }

    addPayment();
    const timer = window.setInterval(addPayment, 3200);
    return () => window.clearInterval(timer);
  }, []);

  const content = (
    <>
      <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex gap-2">
          <div className="size-3 rounded-full bg-red-500/50" />
          <div className="size-3 rounded-full bg-amber-500/50" />
          <div className="size-3 rounded-full bg-green-500/50" />
        </div>
        <div className="flex items-center gap-3">
          <span
            className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px]"
            style={{ color: giz.mutedDark }}
          >
            app.gizpay.com.br / painel
          </span>
          <span className="flex items-center gap-1.5 text-[10px]" style={{ color: giz.primary }}>
            <span className="size-1.5 animate-pulse rounded-full" style={{ background: giz.primary }} />
            ao vivo
          </span>
        </div>
      </div>

      <div className="grid items-start gap-12 md:grid-cols-[1fr_280px]">
        <div className="relative space-y-8">
          <div className="counter-shell relative">
            <p
              className="mb-1 text-[11px] uppercase tracking-widest"
              style={{ color: giz.mutedDark }}
            >
              Colégio Aurora • Recebido no mês
            </p>
            <div className="relative">
              <p
                className={`font-mono text-[36px] font-medium leading-none tabular-nums text-white md:text-[48px] ${pulse ? "pulse-text" : ""}`}
              >
                {brl(revenue)}
              </p>
              <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
                {flashes.map((f) => (
                  <span
                    key={f.id}
                    className="flash-badge whitespace-nowrap font-mono text-sm"
                    style={{ color: giz.primary }}
                  >
                    + {brl(f.value)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              ["Em dia", "82%", giz.primary],
              ["Em aberto", "14%", giz.mutedDark],
              ["Atrasado", "4%", "#f59e0b"],
            ].map(([label, val, color]) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2"
              >
                <p className="text-[9px] uppercase" style={{ color: giz.mutedDark }}>
                  {label}
                </p>
                <p className="font-mono text-sm" style={{ color }}>
                  {val}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="payment-feed relative flex shrink-0 flex-col overflow-hidden">
          {toasts.map((t, i) => (
            <div
              key={t.id}
              className="toast-item mb-3 flex items-center gap-3 rounded-2xl border bg-white/5 p-3 last:mb-0"
              style={{
                borderColor: i === 0 ? "rgba(74,222,128,0.4)" : "rgba(255,255,255,0.1)",
                opacity: i === 0 ? 1 : 0.45,
              }}
            >
              <span
                className="flex size-8 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold"
                style={{ color: giz.primary }}
              >
                {t.initials}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] text-white/80">
                  Responsável •••• · {t.grade}
                </p>
                <p className="text-[9px]" style={{ color: giz.mutedDark }}>
                  {t.method} confirmado · {brl(t.value)}
                </p>
              </div>
              <CheckCircle2 className="size-4 shrink-0" style={{ color: giz.primary }} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 border-t border-white/5 pt-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 md:gap-4">
            {[
              { icon: QrCode, label: "1. Pix pago" },
              { icon: Zap, label: "2. Baixa (~12s)" },
              { icon: Landmark, label: "3. Liquidado" },
            ].map(({ icon: Icon, label }, i) => (
              <div key={label} className="flex items-center gap-2 md:gap-4">
                {i > 0 ? <div className="mb-4 h-px w-8 bg-white/10" /> : null}
                <div className="flex flex-col items-center gap-1">
                  <div className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <Icon className="size-3.5" style={{ color: giz.primary }} />
                  </div>
                  <span className="text-[9px]" style={{ color: giz.mutedDark }}>
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <span
            className="self-end text-[10px] font-medium opacity-60"
            style={{ color: giz.mutedDark }}
          >
            dados fictícios
          </span>
        </div>
      </div>
    </>
  );

  if (embedded) return content;

  return (
    <div className="glass-card relative overflow-hidden p-4 shadow-2xl md:p-8">
      {content}
    </div>
  );
}
