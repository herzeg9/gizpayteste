"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { giz } from "./tokens";

const CODIGO_PIX =
  "00020126580014BR.GOV.BCB.PIX0136giz-pay-colegio-aurora-mensalidade";

export function PortalResponsavel() {
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    if (!copiado) return;
    const timer = window.setTimeout(() => setCopiado(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copiado]);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(CODIGO_PIX);
    } catch {
      // Sem permissão de clipboard: o feedback visual ainda vale como protótipo.
    }
    setCopiado(true);
  };

  return (
    <div
      className="mx-auto w-full max-w-[320px] overflow-hidden rounded-[28px] border p-1"
      style={{ background: giz.raised, borderColor: giz.borderDark }}
    >
      <div
        className="overflow-hidden rounded-[24px]"
        style={{ background: giz.deep }}
      >
        <div
          className="flex items-center justify-between px-5 pb-3 pt-4 text-[10px]"
          style={{ color: giz.mutedDark }}
        >
          <span className="font-mono">9:41</span>
          <span>Colégio Aurora</span>
        </div>

        <div className="px-5 pb-5">
          <p className="text-[15px] font-medium" style={{ color: giz.fgDark }}>
            Olá, Renata
          </p>
          <p className="text-[11px]" style={{ color: giz.mutedDark }}>
            Responsável por Maria Clara · 7º ano
          </p>

          <div
            className="mt-4 rounded-[14px] border p-4"
            style={{ background: giz.surface, borderColor: giz.borderDark }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px]" style={{ color: giz.mutedDark }}>
                Mensalidade · Agosto
              </span>
              <span
                className="rounded-full px-2 py-0.5 text-[10px]"
                style={{ background: "rgba(240,180,41,0.14)", color: giz.amber }}
              >
                vence em 3 dias
              </span>
            </div>
            <p
              className="mt-2 font-mono text-[26px] font-medium tabular-nums"
              style={{ color: giz.fgDark }}
            >
              R$ 1.240,00
            </p>

            <button
              onClick={copiar}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-[10px] py-3 text-[13px] font-medium transition-transform active:scale-[0.98]"
              style={{
                background: copiado ? giz.surface : giz.primary,
                color: copiado ? giz.primary : giz.fgLight,
                border: `1px solid ${copiado ? giz.primary : "transparent"}`,
              }}
            >
              {copiado ? (
                <>
                  <Check className="size-3.5" />
                  Código Pix copiado
                </>
              ) : (
                <>
                  <Copy className="size-3.5" />
                  Copiar código Pix
                </>
              )}
            </button>
            <button
              className="mt-2 w-full rounded-[10px] border py-2.5 text-[13px]"
              style={{ borderColor: giz.borderDark, color: giz.fgDark }}
            >
              Segunda via do boleto
            </button>
          </div>

          <div className="mt-4 grid gap-2">
            {["Julho", "Junho", "Maio"].map((mes) => (
              <div
                key={mes}
                className="flex items-center justify-between rounded-[10px] border px-3 py-2.5"
                style={{ borderColor: giz.borderDark }}
              >
                <span className="text-[12px]" style={{ color: giz.fgDark }}>
                  {mes}
                </span>
                <span
                  className="flex items-center gap-1 text-[11px]"
                  style={{ color: giz.primary }}
                >
                  <Check className="size-3" /> pago
                </span>
              </div>
            ))}
          </div>

          <button
            className="mt-4 w-full text-center text-[12px] underline underline-offset-4"
            style={{ color: giz.mutedDark }}
          >
            Baixar informe para o Imposto de Renda
          </button>
        </div>
      </div>
    </div>
  );
}
