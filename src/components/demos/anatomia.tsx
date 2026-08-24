"use client";

import { useState } from "react";
import { DemoFrame } from "./demo-frame";
import { cn } from "@/lib/utils";

type Section = {
  n: string;
  name: string;
  question: string;
  job: string;
  detail: string;
  conversion?: boolean;
};

const SECTIONS: Section[] = [
  {
    n: "01",
    name: "Barra fixa",
    question: "Onde estou e como falo com vocês?",
    job: "Orientação",
    detail:
      "Logo, âncoras para as seções principais e um CTA sempre visível. No mobile vira barra inferior fixa, onde o polegar alcança.",
    conversion: true,
  },
  {
    n: "02",
    name: "Hero com painel vivo",
    question: "O que é isso e serve para mim?",
    job: "Clareza em 5 segundos",
    detail:
      "Título de resultado, apoio que remove o sacrifício do jeito atual, um botão sólido e um contornado. O painel do produto anima sozinho, mostrando um Pix caindo e a inadimplência atualizando.",
    conversion: true,
  },
  {
    n: "03",
    name: "Faixa de prova",
    question: "Posso confiar em vocês?",
    job: "Credibilidade",
    detail:
      "Logos de escolas clientes e três números com a base de cálculo declarada abaixo. Sem origem, número forte vira desconfiança.",
  },
  {
    n: "04",
    name: "O problema",
    question: "Isso acontece comigo?",
    job: "Reconhecimento da dor",
    detail:
      "Quatro dores concretas com as palavras do cliente: repasse com atraso, taxa sobre faturamento, cobrança manual e falta de visibilidade.",
  },
  {
    n: "05",
    name: "Como funciona",
    question: "É complicado de implantar?",
    job: "Redução do medo",
    detail:
      "Quatro passos em linha do tempo navegável. O visitante clica no passo e vê a tela correspondente — mostrar vale mais que descrever.",
  },
  {
    n: "06",
    name: "Calculadora",
    question: "Quanto isso me custa hoje?",
    job: "Clímax de convencimento",
    detail:
      "A pessoa insere os números da escola dela e vê o valor anual que o intermediário retira. Fundo invertido, seção mais densa da página.",
    conversion: true,
  },
  {
    n: "07",
    name: "Depoimento",
    question: "Quem já passou por isso?",
    job: "Prova social",
    detail:
      "Logo depois do pico de interesse. Nome, cargo, escola, tamanho e um número antes/depois.",
  },
  {
    n: "08",
    name: "Comparativo",
    question: "É melhor que o que eu já uso?",
    job: "Diferenciação",
    detail:
      "Critérios que o cliente já usa para decidir. Sai do modal e entra na página — argumento forte não pode ficar atrás de um clique.",
    conversion: true,
  },
  {
    n: "09",
    name: "Módulos",
    question: "O que exatamente eu recebo?",
    job: "Escopo",
    detail:
      "Quatro em destaque, com link para os demais. Seis cards de peso igual diluem a atenção (Lei de Hick).",
  },
  {
    n: "10",
    name: "Portal do responsável",
    question: "E a família, como fica?",
    job: "Benefício secundário",
    detail:
      "Reduz o atendimento repetitivo na secretaria. A tela do celular anima mostrando o Pix copia-e-cola.",
  },
  {
    n: "11",
    name: "Segurança e LGPD",
    question: "Meus dados estão seguros?",
    job: "Remoção de risco",
    detail:
      "Quatro selos concretos: LGPD, criptografia, acesso por papel e trilha de auditoria. Com link para a página completa.",
  },
  {
    n: "12",
    name: "FAQ",
    question: "E aquela dúvida específica?",
    job: "Última objeção",
    detail:
      "Seis perguntas reais, com dado estruturado para o Google. É a seção que mais evita e-mail desnecessário.",
  },
  {
    n: "13",
    name: "Conversão",
    question: "Como eu começo?",
    job: "Ação",
    detail:
      "Cinco campos, validação em tempo real e uma confirmação que diz o que acontece agora e em quanto tempo.",
    conversion: true,
  },
];

export function AnatomiaDemo() {
  const [active, setActive] = useState(1);
  const section = SECTIONS[active];

  return (
    <DemoFrame>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,300px)_1fr]">
        <ol className="grid max-h-[420px] gap-1 overflow-y-auto pr-1 scrollbar-slim">
          {SECTIONS.map((item, i) => (
            <li key={item.n}>
              <button
                onClick={() => setActive(i)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left transition-colors",
                  active === i
                    ? "border-primary/50 bg-primary/15"
                    : "border-transparent hover:border-border hover:bg-secondary/50",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[11px] tabular-nums",
                    active === i ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.n}
                </span>
                <span
                  className={cn(
                    "flex-1 text-xs",
                    active === i ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </span>
                {item.conversion ? (
                  <span
                    className="size-1.5 rounded-full bg-primary"
                    title="Ponto de conversão"
                  />
                ) : null}
              </button>
            </li>
          ))}
        </ol>

        <div className="grid content-start gap-4 rounded-[14px] border border-border bg-secondary/30 p-5">
          <div>
            <span className="font-mono text-xs text-primary">{section.n}</span>
            <h4 className="mt-1 font-display text-2xl font-semibold tracking-tight">
              {section.name}
            </h4>
          </div>

          <div className="grid gap-3">
            <Field label="Pergunta que responde" value={section.question} />
            <Field label="Trabalho da seção" value={section.job} />
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {section.detail}
          </p>

          {section.conversion ? (
            <p className="flex items-center gap-2 rounded-lg border border-primary/25 bg-primary/10 px-3 py-2 text-xs text-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Ponto de conversão — existe uma ação disponível aqui
            </p>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Pontos verdes marcam onde o visitante pode agir. Repare que eles estão
        distribuídos por estado mental, não espalhados ao acaso.
      </p>
    </DemoFrame>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-0.5">
      <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  );
}
