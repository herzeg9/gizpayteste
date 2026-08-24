"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { giz } from "./tokens";

const PERGUNTAS = [
  {
    q: "O dinheiro cai mesmo direto na conta da escola?",
    a: "Sim. A liquidação acontece na conta da própria escola, no CNPJ dela. A Giz Pay não retém valores nem intermedia repasse.",
  },
  {
    q: "Preciso trocar o sistema acadêmico que já uso?",
    a: "Não. A Giz Pay cuida da camada financeira e convive com o sistema pedagógico atual, importando a base por planilha ou integração.",
  },
  {
    q: "Quanto tempo leva a implantação?",
    a: "De 7 a 15 dias em média, incluindo importação da base, configuração da régua de cobrança e treinamento da equipe.",
  },
  {
    q: "Como funciona a cobrança da Giz Pay?",
    a: "Assinatura mensal por aluno ativo, com valor previsível. Não cobramos percentual sobre o faturamento da escola.",
  },
  {
    q: "A plataforma acompanha a identidade visual da escola?",
    a: "Sim. O painel e o portal do responsável são white label: logo, cores e comunicações saem com a marca da instituição.",
  },
  {
    q: "E se uma família atrasar? Como é a cobrança?",
    a: "A régua envia lembrete antes do vencimento, aviso no atraso e aplica encargos na data configurada. A comunicação é padronizada e sai com a marca da escola, sem constranger a família.",
  },
];

export function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <div className="grid gap-2">
      {PERGUNTAS.map((item, i) => {
        const isOpen = aberto === i;
        return (
          <div
            key={item.q}
            className="rounded-[14px] border transition-colors"
            style={{
              borderColor: isOpen ? giz.fgLight + "33" : giz.borderLight,
              background: isOpen ? "#FFFFFF" : "transparent",
            }}
          >
            <button
              onClick={() => setAberto(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span
                className="text-[16px] font-medium leading-snug"
                style={{ color: giz.fgLight }}
              >
                {item.q}
              </span>
              <Plus
                className="size-4 shrink-0 transition-transform duration-200"
                style={{
                  color: giz.mutedLight,
                  transform: isOpen ? "rotate(45deg)" : "none",
                }}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <p
                  className="max-w-[62ch] px-5 pb-5 text-[15px] leading-[1.7]"
                  style={{ color: giz.mutedLight }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
