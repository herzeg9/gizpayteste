"use client";

import { useState } from "react";
import { giz } from "./tokens";

const PASSOS = [
  {
    n: "01",
    titulo: "Cadastro dos alunos",
    texto:
      "Importe a planilha de matrículas ou cadastre pela tela. As 12 mensalidades do ano nascem prontas, com valor, vencimento, desconto e responsável financeiro.",
    tela: [
      ["Base importada", "612 alunos"],
      ["Mensalidades geradas", "7.344"],
      ["Tempo do processo", "4 minutos"],
    ],
    destaque: "Nenhuma digitação manual",
  },
  {
    n: "02",
    titulo: "Cobrança automática",
    texto:
      "Pix, boleto e cartão emitidos antes do vencimento. Régua de lembretes por e-mail e WhatsApp, com multa e juros aplicados na data certa.",
    tela: [
      ["Lembrete D-5", "enviado"],
      ["Vencimento D-0", "cobrança ativa"],
      ["Atraso D+3", "encargos aplicados"],
    ],
    destaque: "A secretaria não liga cobrando",
  },
  {
    n: "03",
    titulo: "Recebimento direto",
    texto:
      "O pagamento cai na conta da escola, no CNPJ dela. O sistema dá baixa em segundos, concilia e atualiza a inadimplência em tempo real.",
    tela: [
      ["Pix recebido", "09:41:12"],
      ["Baixa automática", "09:41:14"],
      ["Conciliação", "automática"],
    ],
    destaque: "Sem D+30, sem repasse de terceiro",
  },
  {
    n: "04",
    titulo: "Visão em tempo real",
    texto:
      "Painel com entradas, atrasos, devedores e rentabilidade por turma. Relatórios prontos para a contabilidade e para o conselho.",
    tela: [
      ["Recebido no mês", "R$ 428.910"],
      ["Inadimplência", "4,2%"],
      ["Fechamento", "40 minutos"],
    ],
    destaque: "A direção não espera o fim do mês",
  },
];

export function ComoFunciona() {
  const [ativo, setAtivo] = useState(0);
  const passo = PASSOS[ativo];

  return (
    <div className="grid gap-6">
      <div
        className="flex gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label="Etapas do funcionamento"
      >
        {PASSOS.map((item, i) => (
          <button
            key={item.n}
            role="tab"
            aria-selected={ativo === i}
            onClick={() => setAtivo(i)}
            className="flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm transition-colors"
            style={{
              borderColor: ativo === i ? giz.fgLight : giz.borderLight,
              background: ativo === i ? giz.fgLight : "transparent",
              color: ativo === i ? giz.light : giz.mutedLight,
            }}
          >
            <span className="font-mono text-[11px] tabular-nums">{item.n}</span>
            <span className="hidden sm:inline">{item.titulo}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <div className="grid gap-4">
          <h3
            className="font-display text-[28px] font-semibold leading-tight sm:text-[34px]"
            style={{ color: giz.fgLight }}
          >
            {passo.titulo}
          </h3>
          <p
            className="max-w-[52ch] text-[17px] leading-[1.68]"
            style={{ color: giz.mutedLight }}
          >
            {passo.texto}
          </p>
          <p
            className="flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs"
            style={{ borderColor: giz.borderLight, color: giz.fgLight }}
          >
            <span
              className="size-1.5 rounded-full"
              style={{ background: giz.primary }}
            />
            {passo.destaque}
          </p>
        </div>

        <div
          className="rounded-[20px] border p-6"
          style={{ background: giz.deep, borderColor: giz.borderDark }}
        >
          <p
            className="font-mono text-[10px] uppercase tracking-[0.14em]"
            style={{ color: giz.mutedDark }}
          >
            Passo {passo.n}
          </p>
          <dl className="mt-4 grid gap-3">
            {passo.tela.map(([label, valor]) => (
              <div
                key={label}
                className="flex items-baseline justify-between gap-4 border-b pb-3 last:border-0 last:pb-0"
                style={{ borderColor: giz.borderDark }}
              >
                <dt className="text-sm" style={{ color: giz.mutedDark }}>
                  {label}
                </dt>
                <dd
                  className="font-mono text-sm tabular-nums"
                  style={{ color: giz.primary }}
                >
                  {valor}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
