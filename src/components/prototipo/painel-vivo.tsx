"use client";

import { useEffect, useState } from "react";
import { giz, brl } from "./tokens";

const PAGAMENTOS = [
  { iniciais: "MC", nome: "Maria Clara", turma: "7º ano", meio: "Pix", valor: 1240 },
  { iniciais: "JP", nome: "João Pedro", turma: "3º ano", meio: "Boleto", valor: 980 },
  { iniciais: "AL", nome: "Ana Lúcia", turma: "1º ano", meio: "Pix", valor: 1120 },
  { iniciais: "RS", nome: "Rafael Souza", turma: "9º ano", meio: "Cartão", valor: 1310 },
  { iniciais: "BT", nome: "Beatriz Tavares", turma: "5º ano", meio: "Pix", valor: 1040 },
];

/**
 * Substitui o mockup estático do site atual: o painel demonstra sozinho
 * o Pix caindo e o recebido do mês subindo. É o argumento "baixa em
 * segundos" acontecendo na frente do visitante.
 */
export function PainelVivo() {
  const [indice, setIndice] = useState(0);
  const [recebido, setRecebido] = useState(428910);
  const [pulso, setPulso] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const timer = window.setInterval(() => {
      setIndice((i) => {
        const proximo = (i + 1) % PAGAMENTOS.length;
        setRecebido((atual) => atual + PAGAMENTOS[proximo].valor);
        return proximo;
      });
      setPulso(true);
      window.setTimeout(() => setPulso(false), 700);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const visiveis = Array.from({ length: 3 }, (_, offset) => {
    const item = PAGAMENTOS[(indice - offset + PAGAMENTOS.length * 2) % PAGAMENTOS.length];
    return { ...item, offset };
  });

  return (
    <div
      className="w-full overflow-hidden rounded-[24px] border p-5 shadow-[0_40px_120px_-50px_rgba(74,222,128,0.4)]"
      style={{ background: giz.surface, borderColor: giz.borderDark }}
    >
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-[10px]"
          style={{ color: giz.mutedDark }}
        >
          app.gizpay.com.br / painel
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="size-1.5 rounded-full"
            style={{ background: giz.primary }}
          />
          <span className="text-[10px]" style={{ color: giz.mutedDark }}>
            ao vivo
          </span>
        </span>
      </div>

      <div className="mt-5">
        <p className="text-[11px]" style={{ color: giz.mutedDark }}>
          Colégio Exemplo · recebido no mês
        </p>
        <p
          className="mt-1 font-mono text-[34px] font-medium tabular-nums transition-transform duration-500 sm:text-[40px]"
          style={{
            color: giz.fgDark,
            transform: pulso ? "scale(1.03)" : "scale(1)",
          }}
        >
          {brl(recebido)}
        </p>
        <p className="mt-1 text-[11px]" style={{ color: giz.primary }}>
          ↑ 6,2% vs. mês anterior
        </p>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[
          ["Em dia", "R$ 391k", giz.primary],
          ["Em aberto", "R$ 24k", giz.mutedDark],
          ["Atrasado", "R$ 13k", giz.amber],
        ].map(([label, valor, cor]) => (
          <div
            key={label}
            className="rounded-[10px] border px-3 py-2.5"
            style={{ borderColor: giz.borderDark }}
          >
            <p className="text-[10px]" style={{ color: giz.mutedDark }}>
              {label}
            </p>
            <p
              className="mt-0.5 font-mono text-sm tabular-nums"
              style={{ color: cor }}
            >
              {valor}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-2">
        {visiveis.map((item) => (
          <div
            key={`${item.iniciais}-${item.offset}`}
            className="flex items-center gap-3 rounded-[10px] border px-3 py-2.5 transition-all duration-500"
            style={{
              borderColor: item.offset === 0 ? giz.primary + "55" : giz.borderDark,
              background: item.offset === 0 ? "rgba(74,222,128,0.08)" : "transparent",
              opacity: 1 - item.offset * 0.28,
            }}
          >
            <span
              className="grid size-7 shrink-0 place-items-center rounded-full font-mono text-[10px]"
              style={{ background: giz.raised, color: giz.primary }}
            >
              {item.iniciais}
            </span>
            <span className="min-w-0 flex-1">
              <span
                className="block truncate text-[12px]"
                style={{ color: giz.fgDark }}
              >
                {item.nome} · {item.turma}
              </span>
              <span className="block text-[10px]" style={{ color: giz.mutedDark }}>
                {item.meio} · baixa automática
              </span>
            </span>
            <span
              className="font-mono text-[12px] tabular-nums"
              style={{ color: item.offset === 0 ? giz.primary : giz.mutedDark }}
            >
              {brl(item.valor)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
