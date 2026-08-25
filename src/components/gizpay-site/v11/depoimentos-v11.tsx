"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, TrendingUp } from "lucide-react";
import { giz } from "@/components/prototipo/tokens";

const DEPOIMENTOS = [
  {
    iniciais: "RO",
    sigla: "CA",
    nome: "Ricardo Oliveira",
    cargo: "Diretor · Colégio Aurora",
    avatarBg: giz.deep,
    citacao:
      "A liquidação instantânea mudou nossa previsibilidade. Receber no mesmo dia o que os pais pagam permitiu que investíssemos em infraestrutura sem depender de crédito bancário.",
    economia: "Economizou R$ 47.280/ano",
    versoTitulo: "Impacto no Fluxo",
    versoTexto: "Fim da espera de 30 dias. Capital de giro sob controle total da diretoria.",
    metricas: [
      ["30d → 0", "espera caixa"],
      ["400", "alunos ativos"],
      ["Pix", "foco principal"],
    ],
  },
  {
    iniciais: "AM",
    sigla: "VV",
    nome: "Ana Martins",
    cargo: "Tesoureira · Escola Vila Verde",
    avatarBg: giz.raised,
    citacao:
      "A redução de horas administrativas foi brutal. A conciliação automática casando cada Pix com a matrícula do aluno liberou minha equipe para o atendimento humanizado às famílias.",
    economia: "Economizou R$ 86.400/ano",
    versoTitulo: "Eficiência Operacional",
    versoTexto: "Secretaria 100% digitalizada. Erro humano em conciliação reduzido a zero.",
    metricas: [
      ["600", "alunos"],
      ["-40h", "trabalho manual"],
      ["Auto", "conciliação"],
    ],
  },
  {
    iniciais: "FC",
    sigla: "IE",
    nome: "Felipe Costa",
    cargo: "Gestor · Instituto Educacional",
    avatarBg: giz.surface,
    citacao:
      "O que mais nos surpreendeu foi a régua de cobrança. Os lembretes são gentis e eficazes, reduzindo a inadimplência sem que a gente precise fazer ligações desconfortáveis.",
    economia: "Economizou R$ 24.000/ano",
    versoTitulo: "Controle de Atrasos",
    versoTexto: "Inadimplência sob controle através de automação inteligente e respeitosa.",
    metricas: [
      ["250", "alunos"],
      ["-18%", "inadimplência"],
      ["Zap", "lembretes auto"],
    ],
  },
  {
    iniciais: "GS",
    sigla: "AI",
    nome: "Gizela Santos",
    cargo: "Diretora · Academia Integral",
    avatarBg: giz.deep,
    citacao:
      "Poder oferecer Pix e cartão com taxas justas e liquidação direta transformou nossa saúde financeira. As famílias amam a facilidade do portal do responsável.",
    economia: "Economizou R$ 42.900/ano",
    versoTitulo: "Modernização do Portal",
    versoTexto: "Experiência de pagamento moderna que reflete a qualidade da nossa ensino.",
    metricas: [
      ["350", "alunos"],
      ["98%", "uso do portal"],
      ["Card", "crédito integrado"],
    ],
  },
];

function DepoimentoCard({
  item,
  ativo,
}: {
  item: (typeof DEPOIMENTOS)[number];
  ativo: boolean;
}) {
  return (
    <article className={`testimonial-slide ${ativo ? "is-active" : ""}`}>
      <div className="testimonial-inner">
        <div className="testimonial-face">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span
                className="grid size-14 place-items-center rounded-full font-display text-lg text-white"
                style={{ background: item.avatarBg }}
              >
                {item.iniciais}
              </span>
              <div>
                <p className="font-semibold" style={{ color: giz.fgLight }}>
                  {item.nome}
                </p>
                <p className="text-sm" style={{ color: giz.mutedLight }}>
                  {item.cargo}
                </p>
              </div>
            </div>
            <span
              className="grid size-12 place-items-center rounded-2xl font-display font-semibold"
              style={{ background: giz.lightAlt, color: "#3E8E63" }}
            >
              {item.sigla}
            </span>
          </div>
          <blockquote className="font-display text-[26px] italic leading-snug md:text-[34px]">
            &ldquo;{item.citacao}&rdquo;
          </blockquote>
          <div
            className="mt-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{ background: giz.lightAlt, color: "#3E8E63" }}
          >
            <TrendingUp className="size-4" />
            {item.economia}
          </div>
        </div>
        <div className="testimonial-face testimonial-back flex flex-col justify-between">
          <div>
            <span className="overline mb-5 block text-left">{item.versoTitulo}</span>
            <p className="font-display text-[34px] leading-tight">{item.versoTexto}</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {item.metricas.map(([val, label]) => (
              <div key={label} className="rounded-2xl bg-white/5 p-4">
                <p className="font-mono text-xl" style={{ color: giz.primary }}>
                  {val}
                </p>
                <p className="mt-2 text-xs" style={{ color: giz.mutedDark }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function DepoimentosV11() {
  const [index, setIndex] = useState(0);
  const total = DEPOIMENTOS.length;

  const next = useCallback(
    (resetTimer = true) => {
      setIndex((i) => (i + 1) % total);
      if (resetTimer) return;
    },
    [total],
  );

  const prev = () => setIndex((i) => (i + total - 1) % total);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(() => next(false), 5000);
    return () => window.clearInterval(timer);
  }, [next]);

  return (
    <section id="depoimento" className="section-padding" style={{ background: giz.light, color: giz.fgLight }}>
      <div className="mx-auto max-w-[940px] px-5">
        <div className="mb-12 text-center">
          <span className="overline mb-4 block" style={{ color: "#3E8E63" }}>
            Histórias reais de gestão
          </span>
          <h2 className="font-display text-[36px] md:text-[52px]">
            Quando o caixa volta para a escola,{" "}
            <span className="font-serif-italic">todo mundo percebe</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-[620px]" style={{ color: giz.mutedLight }}>
            Passe o cursor sobre o depoimento para conhecer o impacto financeiro. Os
            dados desta demonstração são ilustrativos.
          </p>
        </div>

        <div className="testimonial-stage relative">
          {DEPOIMENTOS.map((item, i) => (
            <DepoimentoCard key={item.nome} item={item} ativo={index === i} />
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            aria-label="Depoimento anterior"
            onClick={prev}
            className="grid size-12 place-items-center rounded-full border border-[#0B1F1A]/10 bg-white transition hover:border-[#3E8E63]"
          >
            <ArrowLeft className="size-4" />
          </button>
          <div className="flex items-center gap-2">
            {DEPOIMENTOS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Abrir depoimento ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`testimonial-dot h-2 rounded-full ${index === i ? "w-8 bg-[#3E8E63]" : "w-2 bg-[#0B1F1A]/20"}`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Próximo depoimento"
            onClick={() => next()}
            className="grid size-12 place-items-center rounded-full border border-[#0B1F1A]/10 bg-white transition hover:border-[#3E8E63]"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
