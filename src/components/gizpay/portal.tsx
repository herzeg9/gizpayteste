"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { NotePin } from "@/components/gizpay/notes";

type Screen = "home" | "pix" | "done";

export function ParentPortal() {
  const [screen, setScreen] = useState<Screen>("home");
  const [copied, setCopied] = useState(false);

  function copyPix() {
    setCopied(true);
    window.setTimeout(() => {
      setScreen("done");
      setCopied(false);
    }, 700);
  }

  return (
    <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_280px]">
      <NotePin id="portal" />
      <div>
        <p className="text-xs font-medium tracking-widest text-brick uppercase">
          Portal do responsável
        </p>
        <h3 className="font-display mt-2 text-3xl leading-tight text-board sm:text-4xl">
          A família resolve sozinha. A secretaria ganha o dia.
        </h3>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Segunda via, Pix copia-e-cola, histórico e informe de IR — com a marca da
          escola, no celular. Sem app. Toque em “Pagar com Pix” no telefone ao lado.
        </p>
        <ul className="mt-6 space-y-2 text-sm">
          {[
            "Menos ligações pedindo boleto",
            "Pagamento em poucos toques",
            "Cobrança respeitosa e padronizada",
            "Acordos registrados no sistema",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 text-board" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto w-[260px]">
        <div className="rounded-[2.2rem] border-[10px] border-[#122016] bg-[#122016] shadow-2xl">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-[#f7f1e4]">
            <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-[#122016]" />
            <div className="min-h-[420px] p-4">
              {screen === "home" ? (
                <div className="animate-rise">
                  <p className="text-[11px] text-board/50">Colégio Exemplo</p>
                  <p className="mt-2 font-display text-2xl text-board">Olá, Renata</p>
                  <p className="text-xs text-board/60">
                    Responsável por Maria Clara · 7º ano
                  </p>
                  <div className="mt-4 rounded-2xl bg-board p-4 text-paper">
                    <p className="text-[11px] text-white/60">Mensalidade · Agosto</p>
                    <p className="mt-1 text-xs text-chalk">Vence em 3 dias</p>
                    <p className="mt-2 font-mono text-2xl">R$ 1.240,00</p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={copyPix}
                        className="h-9 rounded-full bg-chalk text-xs font-medium text-board"
                      >
                        Pagar com Pix
                      </button>
                      <button
                        type="button"
                        className="h-9 rounded-full border border-white/20 text-xs"
                      >
                        Boleto
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1.5 text-xs">
                    <Row ok label="Julho" />
                    <Row ok label="Junho" />
                  </div>
                </div>
              ) : null}
              {screen === "pix" || copied ? (
                <div className="animate-rise pt-6 text-center">
                  <div className="mx-auto grid size-28 place-items-center rounded-xl border border-dashed border-board/30 bg-white font-mono text-[10px] leading-4 text-board/70">
                    QR · Pix
                    <br />
                    Giz Pay
                  </div>
                  <p className="mt-4 text-sm text-board">Código copiado</p>
                  <p className="mt-1 text-xs text-board/60">
                    Cole no banco. A baixa chega em segundos.
                  </p>
                </div>
              ) : null}
              {screen === "done" ? (
                <div className="animate-rise pt-10 text-center">
                  <div className="mx-auto grid size-14 place-items-center rounded-full bg-chalk text-board">
                    <Check className="size-7" />
                  </div>
                  <p className="mt-4 font-display text-2xl text-board">Pago</p>
                  <p className="mt-1 text-xs text-board/60">
                    Baixa em &lt; 3s. A tesouraria já vê no painel.
                  </p>
                  <button
                    type="button"
                    onClick={() => setScreen("home")}
                    className="mt-6 text-xs underline"
                  >
                    Voltar ao início
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ ok, label }: { ok?: boolean; label: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 ring-1 ring-border">
      <span>{label}</span>
      <span className={ok ? "text-board" : "text-brick"}>{ok ? "Pago" : "Aberto"}</span>
    </div>
  );
}
