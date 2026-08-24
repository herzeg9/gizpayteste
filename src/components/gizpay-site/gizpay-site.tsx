import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ComparativoInterativo } from "@/components/gizpay-site/comparativo-interativo";
import { PainelVivo } from "@/components/prototipo/painel-vivo";
import { Calculadora } from "@/components/prototipo/calculadora";
import { ComoFunciona } from "@/components/prototipo/como-funciona";
import { Faq } from "@/components/prototipo/faq";
import { Formulario } from "@/components/prototipo/formulario";
import { PortalResponsavel } from "@/components/prototipo/portal-responsavel";
import { giz } from "@/components/prototipo/tokens";

const DORES = [
  {
    titulo: "Repasse com atraso",
    texto:
      "Os pais pagam hoje. A escola recebe em 15, 30 ou 60 dias — e ainda com a taxa cheia já descontada.",
    metrica: "até 60 dias",
  },
  {
    titulo: "Taxa sobre o faturamento",
    texto:
      "De 2% a 6% de tudo o que a escola fatura, todo mês, independentemente do trabalho que o fornecedor teve.",
    metrica: "2% a 6%",
  },
  {
    titulo: "Cobrança manual",
    texto:
      "A secretaria emitindo boleto no banco, ligando para cobrar e controlando inadimplência em planilha.",
    metrica: "~6h por mês",
  },
  {
    titulo: "Nenhuma visibilidade",
    texto:
      "A direção só descobre o que entrou, o que atrasou e quem deve quando o relatório do mês fecha.",
    metrica: "1x por mês",
  },
];

const MODULOS = [
  {
    sigla: "Pix",
    titulo: "Baixa instantânea",
    texto:
      "O responsável paga e o sistema confirma em segundos. Sem esperar compensação nem conferir extrato no dia seguinte.",
  },
  {
    sigla: "RC",
    titulo: "Régua de cobrança",
    texto:
      "Lembrete antes do vencimento, aviso no atraso e encargos automáticos — sem constranger a família.",
  },
  {
    sigla: "IN",
    titulo: "Painel de inadimplência",
    texto:
      "Em dia, em aberto e atrasado em tempo real. Filtre por turma, série ou responsável e aja antes de crescer.",
  },
  {
    sigla: "CB",
    titulo: "Conciliação bancária",
    texto:
      "Cada entrada casada com a cobrança correspondente. Fechamento do mês em minutos, não em dias de planilha.",
  },
];

const SEGURANCA = [
  ["LGPD desde o dia 1", "Base legal por finalidade e canal do titular"],
  ["Criptografia e isolamento", "Dados cifrados em trânsito e em repouso"],
  ["Acesso por papel", "Perfis distintos com autenticação em duas etapas"],
  ["Trilha de auditoria", "Cada alteração registrada com autor, data e hora"],
];

/** Mini-cards flutuantes — estilo Payoneer, conteúdo Giz Pay. */
const HERO_FLOATING_CARDS = [
  {
    label: "Pix confirmado",
    value: "R$ 1.240",
    sub: "Maria Clara · 7º ano",
    className: "left-[2%] top-[6%] xl:left-[4%]",
    delay: "0s",
  },
  {
    label: "Recebido hoje",
    value: "R$ 18.430",
    sub: "Colégio Aurora",
    className: "right-[0%] top-[14%] xl:right-[2%]",
    delay: "0.8s",
  },
  {
    label: "Baixa automática",
    value: "12 seg",
    sub: "João Pedro · Pix",
    className: "bottom-[32%] left-[-2%] xl:left-[0%]",
    delay: "1.6s",
  },
  {
    label: "Inadimplência",
    value: "4,2%",
    sub: "↓ 11% este semestre",
    className: "bottom-[26%] right-[0%] xl:right-[3%]",
    delay: "2.4s",
  },
] as const;

export function GizPaySite({ showCourseBanner = false }: { showCourseBanner?: boolean }) {
  return (
    <div style={{ background: giz.deep, color: giz.fgDark }}>
      {showCourseBanner ? <BarraProtótipo /> : null}
      <Navegacao />

      {/* 02 · HERO — estilo Payoneer (tentativa 1) */}
      <section
        className="relative overflow-hidden border-b"
        style={{ borderColor: giz.borderDark }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 size-[680px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{ background: "rgba(74,222,128,0.14)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 right-[-10%] size-[420px] rounded-full blur-[120px]"
          style={{ background: "rgba(74,222,128,0.08)" }}
        />

        <div className="relative mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-28 lg:py-36">
          <div className="relative mx-auto min-h-[520px] max-w-[980px] lg:min-h-[580px]">
            {/* Cards flutuantes — desktop */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden lg:block"
            >
              {HERO_FLOATING_CARDS.map((card) => (
                <div
                  key={card.label}
                  className={`hero-float-card absolute w-[210px] rounded-[24px] border p-4 backdrop-blur-md xl:w-[230px] ${card.className}`}
                  style={{
                    animationDelay: card.delay,
                    background: "rgba(20,59,49,0.72)",
                    borderColor: "rgba(242,247,243,0.12)",
                  }}
                >
                  <p
                    className="text-[10px] font-medium uppercase tracking-[0.12em]"
                    style={{ color: giz.mutedDark }}
                  >
                    {card.label}
                  </p>
                  <p
                    className="mt-1 font-mono text-[22px] font-medium tabular-nums leading-none"
                    style={{ color: giz.primary }}
                  >
                    {card.value}
                  </p>
                  <p className="mt-2 text-[12px]" style={{ color: giz.fgDark }}>
                    {card.sub}
                  </p>
                </div>
              ))}
            </div>

            <Reveal>
              <div className="relative z-10 mx-auto grid max-w-[820px] gap-7 text-center">
                <span
                  className="mx-auto w-fit rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em]"
                  style={{
                    borderColor: giz.borderDark,
                    color: giz.primary,
                    background: "rgba(74,222,128,0.08)",
                  }}
                >
                  Plataforma financeira para escolas
                </span>
                <h1
                  className="mx-auto max-w-[13ch] font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]"
                  style={{ color: giz.fgDark }}
                >
                  O dinheiro da sua escola, no controle de quem ensina.
                </h1>
                <p
                  className="mx-auto max-w-[46ch] text-[17px] leading-[1.68] sm:text-[19px]"
                  style={{ color: giz.mutedDark }}
                >
                  Cobrança automática por Pix, boleto e cartão, com liquidação
                  direto no CNPJ da escola. Sem intermediário segurando o seu
                  caixa por 30 dias.
                </p>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#agendar"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-medium transition-transform active:scale-[0.98]"
                    style={{ background: giz.primary, color: giz.fgLight }}
                  >
                    Agendar demonstração
                  </a>
                  <a
                    href="#calculadora"
                    className="inline-flex min-w-[220px] items-center justify-center gap-1.5 rounded-full border px-7 py-3.5 text-[15px] font-medium transition-colors hover:bg-white/5"
                    style={{ borderColor: giz.borderDark, color: giz.fgDark }}
                  >
                    Calcular economia
                    <ArrowUpRight className="size-4 opacity-70" />
                  </a>
                </div>
                <p className="text-[13px]" style={{ color: giz.mutedDark }}>
                  Implantação e migração da base inclusas · suporte humano por
                  WhatsApp
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative z-10 mx-auto mt-14 max-w-[640px] sm:mt-16 lg:mt-20">
                <PainelVivo />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03 · PROVA */}
      <section
        className="border-b"
        style={{ borderColor: giz.borderDark, background: giz.surface }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-5 py-12 sm:px-6">
          <Reveal>
            <p
              className="text-[11px] uppercase tracking-[0.16em]"
              style={{ color: giz.mutedDark }}
            >
              Escolas que já usam
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
              {[
                "Colégio Aurora",
                "Instituto Vale Verde",
                "Escola Monte Azul",
                "Colégio São Roque",
              ].map((nome) => (
                <span
                  key={nome}
                  className="font-display text-lg font-semibold tracking-tight opacity-45"
                  style={{ color: giz.fgDark }}
                >
                  {nome}
                </span>
              ))}
            </div>

            <dl className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                ["R$ 12,4 mi", "processados em 2026"],
                ["38 escolas", "ativas na plataforma"],
                ["4,2%", "inadimplência média das escolas ativas"],
              ].map(([valor, label]) => (
                <div key={label}>
                  <dt
                    className="font-mono text-[32px] font-medium tabular-nums"
                    style={{ color: giz.primary }}
                  >
                    {valor}
                  </dt>
                  <dd
                    className="mt-1 text-sm leading-snug"
                    style={{ color: giz.mutedDark }}
                  >
                    {label}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-[11px]" style={{ color: giz.mutedDark }}>
              Números ilustrativos para fins de protótipo. Em produção, cada
              métrica publicada precisa da base de cálculo declarada — veja a
              aula 5.1.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 04 · PROBLEMA */}
      <section style={{ background: giz.light, color: giz.fgLight }}>
        <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <CabecalhoSecao
              overline="O problema"
              titulo="Sua escola trabalha o mês inteiro. Quem lucra é o intermediário."
              subtitulo="Os intermediários tradicionais retêm o caixa da escola, cobram um percentual sobre tudo o que ela fatura e devolvem o dinheiro semanas depois."
              tom="claro"
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DORES.map((dor, i) => (
              <Reveal key={dor.titulo} delay={i * 60}>
                <article
                  className="grid h-full content-start gap-3 rounded-[16px] border bg-white p-6"
                  style={{ borderColor: giz.borderLight }}
                >
                  <span
                    className="font-mono text-xs tabular-nums"
                    style={{ color: giz.mutedLight }}
                  >
                    {dor.metrica}
                  </span>
                  <h3
                    className="text-[17px] font-semibold leading-snug"
                    style={{ color: giz.fgLight }}
                  >
                    {dor.titulo}
                  </h3>
                  <p
                    className="text-[14.5px] leading-[1.65]"
                    style={{ color: giz.mutedLight }}
                  >
                    {dor.texto}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · COMO FUNCIONA */}
      <section id="como-funciona" style={{ background: giz.lightAlt, color: giz.fgLight }}>
        <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <CabecalhoSecao
              overline="Como funciona"
              titulo="Da matrícula ao caixa em quatro passos — e nenhum deles é manual."
              subtitulo="Você cadastra uma vez; o resto acontece sozinho. Clique em cada etapa para ver o que o sistema faz."
              tom="claro"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12">
              <ComoFunciona />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 · CALCULADORA */}
      <section
        id="calculadora"
        className="relative overflow-hidden"
        style={{ background: giz.deep }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{ background: "rgba(74,222,128,0.12)" }}
        />
        <div className="relative mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-28">
          <Reveal>
            <CabecalhoSecao
              overline="Calculadora de economia"
              titulo="Quanto a intermediação custa à sua escola por ano?"
              subtitulo="Ajuste os três números da sua escola. O resultado é o que uma taxa percentual retira do seu faturamento a cada ano."
              tom="escuro"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-12">
              <Calculadora />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07 · DEPOIMENTO */}
      <section style={{ background: giz.light, color: giz.fgLight }}>
        <div className="mx-auto w-full max-w-[900px] px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <figure className="grid gap-7">
              <blockquote
                className="font-display text-[26px] font-medium leading-[1.4] sm:text-[34px]"
                style={{ color: giz.fgLight }}
              >
                “Parei de antecipar recebível no banco. O dinheiro entra no dia
                em que o responsável paga, e eu enxergo isso no painel.”
              </blockquote>
              <figcaption
                className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t pt-6"
                style={{ borderColor: giz.borderLight }}
              >
                <div>
                  <p className="text-[15px] font-medium">Renata Albuquerque</p>
                  <p className="text-sm" style={{ color: giz.mutedLight }}>
                    Diretora financeira · Colégio Aurora · 620 alunos
                  </p>
                </div>
                <dl className="ml-auto flex gap-8">
                  {[
                    ["Inadimplência", "11% → 4%"],
                    ["Fechamento do mês", "3 dias → 40 min"],
                  ].map(([label, valor]) => (
                    <div key={label}>
                      <dt className="text-xs" style={{ color: giz.mutedLight }}>
                        {label}
                      </dt>
                      <dd className="font-mono text-sm tabular-nums">{valor}</dd>
                    </div>
                  ))}
                </dl>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 08 · COMPARATIVO */}
      <section id="comparativo" style={{ background: giz.lightAlt, color: giz.fgLight }}>
        <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <CabecalhoSecao
              overline="Comparativo"
              titulo="Giz Pay e o intermediário tradicional, critério por critério."
              subtitulo="Os mesmos pontos que a direção usa para decidir — sem escondê-los atrás de um clique."
              tom="claro"
            />
          </Reveal>

          <Reveal delay={80}>
            <ComparativoInterativo />
          </Reveal>
        </div>
      </section>

      {/* 09 · MÓDULOS */}
      <section id="modulos" style={{ background: giz.light, color: giz.fgLight }}>
        <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <CabecalhoSecao
              overline="Módulos"
              titulo="Uma plataforma completa, não um boleto avulso."
              subtitulo="Construída ouvindo secretarias, tesourarias e direções — não é uma ferramenta genérica adaptada para escola."
              tom="claro"
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {MODULOS.map((modulo, i) => (
              <Reveal key={modulo.sigla} delay={i * 60}>
                <article
                  className="grid h-full content-start gap-3 rounded-[16px] border bg-white p-6"
                  style={{ borderColor: giz.borderLight }}
                >
                  <span
                    className="grid size-9 place-items-center rounded-[10px] font-mono text-[11px] font-medium"
                    style={{ background: giz.deep, color: giz.primary }}
                  >
                    {modulo.sigla}
                  </span>
                  <h3 className="text-[17px] font-semibold">{modulo.titulo}</h3>
                  <p
                    className="text-[14.5px] leading-[1.65]"
                    style={{ color: giz.mutedLight }}
                  >
                    {modulo.texto}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <p className="mt-6 text-sm" style={{ color: giz.mutedLight }}>
              Também inclusos: portal do responsável, multi-unidade, white label
              e relatórios para a contabilidade.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 10 · PORTAL DO RESPONSÁVEL */}
      <section style={{ background: giz.lightAlt, color: giz.fgLight }}>
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="grid gap-5">
              <CabecalhoSecao
                overline="Portal do responsável"
                titulo="A família resolve sozinha. A secretaria ganha tempo."
                subtitulo="Segunda via, código Pix copia-e-cola, histórico e informe anual para o Imposto de Renda — tudo com a marca da escola, no celular do responsável."
                tom="claro"
              />
              <ul className="grid gap-2.5">
                {[
                  "Menos ligações e mensagens na secretaria",
                  "Pagamento em poucos toques, sem app para instalar",
                  "Comunicação de cobrança respeitosa e padronizada",
                  "Acordos e parcelamentos registrados no sistema",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[15px] leading-[1.6]"
                    style={{ color: giz.mutedLight }}
                  >
                    <Check
                      className="mt-1 size-3.5 shrink-0"
                      style={{ color: "#3E8E63" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <PortalResponsavel />
          </Reveal>
        </div>
      </section>

      {/* 11 · SEGURANÇA */}
      <section
        id="seguranca"
        className="border-t"
        style={{ background: giz.surface, borderColor: giz.borderDark }}
      >
        <div className="mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <CabecalhoSecao
              overline="Segurança e conformidade"
              titulo="Dado de aluno é dado sensível. Tratamos como tal."
              subtitulo="Infraestrutura em nuvem no Brasil, criptografia ponta a ponta e políticas alinhadas à LGPD desde o primeiro dia."
              tom="escuro"
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SEGURANCA.map(([titulo, texto], i) => (
              <Reveal key={titulo} delay={i * 60}>
                <article
                  className="grid h-full content-start gap-3 rounded-[16px] border p-6"
                  style={{ borderColor: giz.borderDark, background: giz.deep }}
                >
                  <ShieldCheck className="size-5" style={{ color: giz.primary }} />
                  <h3 className="text-[15px] font-semibold">{titulo}</h3>
                  <p
                    className="text-[14px] leading-[1.6]"
                    style={{ color: giz.mutedDark }}
                  >
                    {texto}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12 · FAQ */}
      <section style={{ background: giz.light, color: giz.fgLight }}>
        <div className="mx-auto w-full max-w-[860px] px-5 py-20 sm:px-6 sm:py-24">
          <Reveal>
            <CabecalhoSecao
              overline="Perguntas frequentes"
              titulo="Antes de falar com a gente."
              subtitulo="Ficou algo de fora? Escreva para contato.gizpay@gmail.com."
              tom="claro"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10">
              <Faq />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 13 · CONVERSÃO */}
      <section
        id="agendar"
        className="border-t"
        style={{ background: giz.deep, borderColor: giz.borderDark }}
      >
        <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <div className="grid content-start gap-5">
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: giz.primary }}
              >
                Agendar demonstração
              </span>
              <h2
                className="max-w-[16ch] font-display text-[34px] font-semibold leading-[1.1] sm:text-[46px]"
                style={{ color: giz.fgDark }}
              >
                Veja o painel com os números da sua escola.
              </h2>
              <p
                className="max-w-[46ch] text-[17px] leading-[1.68]"
                style={{ color: giz.mutedDark }}
              >
                Uma conversa de 30 minutos: entendemos sua operação, mostramos a
                plataforma funcionando e estimamos sua economia anual — sem
                compromisso.
              </p>
              <a
                href="https://wa.me/5511980448792"
                target="_blank"
                rel="noreferrer"
                className="flex w-fit items-center gap-2 rounded-[12px] border px-4 py-2.5 text-sm"
                style={{ borderColor: giz.borderDark, color: giz.fgDark }}
              >
                <MessageCircle className="size-4" style={{ color: giz.primary }} />
                WhatsApp comercial · (11) 98044-8792
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <Formulario />
          </Reveal>
        </div>
      </section>

      <RodapePrototipo local={!showCourseBanner} />
      <BarraMobile />
    </div>
  );
}

function CabecalhoSecao({
  overline,
  titulo,
  subtitulo,
  tom,
}: {
  overline: string;
  titulo: string;
  subtitulo: string;
  tom: "claro" | "escuro";
}) {
  const corTitulo = tom === "claro" ? giz.fgLight : giz.fgDark;
  const corTexto = tom === "claro" ? giz.mutedLight : giz.mutedDark;
  return (
    <div className="grid gap-3">
      <span
        className="text-[11px] font-semibold uppercase tracking-[0.16em]"
        style={{ color: tom === "claro" ? "#3E8E63" : giz.primary }}
      >
        {overline}
      </span>
      <h2
        className="max-w-[20ch] font-display text-[30px] font-semibold leading-[1.12] tracking-tight sm:text-[42px]"
        style={{ color: corTitulo }}
      >
        {titulo}
      </h2>
      <p
        className="max-w-[58ch] text-[16px] leading-[1.68] sm:text-[17px]"
        style={{ color: corTexto }}
      >
        {subtitulo}
      </p>
    </div>
  );
}

function BarraProtótipo() {
  return (
    <div
      className="border-b px-5 py-2.5 text-center text-xs sm:px-6"
      style={{ background: giz.raised, borderColor: giz.borderDark }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-3 gap-y-1">
        <span style={{ color: giz.mutedDark }}>
          Protótipo da proposta de repaginamento — construído com o sistema da
          Trilha 05.
        </span>
        <Link
          href="/projeto"
          className="inline-flex items-center gap-1.5 underline underline-offset-4"
          style={{ color: giz.primary }}
        >
          <ArrowLeft className="size-3" />
          voltar ao plano do projeto
        </Link>
      </div>
    </div>
  );
}

function Navegacao() {
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-xl"
      style={{
        background: "rgba(7,33,27,0.92)",
        borderColor: giz.borderDark,
      }}
    >
      <div className="mx-auto grid h-[72px] w-full max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 justify-self-start">
          <span
            className="grid size-9 place-items-center rounded-full font-display text-base font-semibold"
            style={{ background: giz.primary, color: giz.fgLight }}
          >
            G
          </span>
          <span className="font-display text-[18px] font-semibold tracking-tight">
            Giz Pay
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] md:flex">
          {[
            ["Como funciona", "#como-funciona"],
            ["Calculadora", "#calculadora"],
            ["Módulos", "#modulos"],
            ["Segurança", "#seguranca"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="transition-colors hover:text-white"
              style={{ color: giz.mutedDark }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 justify-self-end sm:gap-4">
          <a
            href="#calculadora"
            className="hidden items-center gap-1 text-sm transition-colors hover:text-white lg:inline-flex"
            style={{ color: giz.mutedDark }}
          >
            Calcular economia
            <ArrowUpRight className="size-3.5 opacity-70" />
          </a>
          <a
            href="#agendar"
            className="rounded-full px-4 py-2.5 text-sm font-medium transition-transform active:scale-[0.98] sm:px-5"
            style={{ background: giz.primary, color: giz.fgLight }}
          >
            Agendar demo
          </a>
        </div>
      </div>
    </header>
  );
}

function RodapePrototipo({ local = false }: { local?: boolean }) {
  return (
    <footer
      className="border-t pb-24 sm:pb-10"
      style={{ background: giz.surface, borderColor: giz.borderDark }}
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-5 py-12 sm:grid-cols-[1.5fr_1fr_1fr] sm:px-6">
        <div>
          <span className="font-display text-lg font-semibold">Giz Pay</span>
          <p
            className="mt-3 max-w-sm text-sm leading-relaxed"
            style={{ color: giz.mutedDark }}
          >
            Gestão financeira escolar sem intermediários. Cobrança automática,
            inadimplência sob controle e liquidação direto na conta da escola.
          </p>
        </div>
        {[
          ["Produto", ["Como funciona", "Módulos", "Calculadora", "Segurança"]],
          ["Contato", ["WhatsApp comercial", "contato.gizpay@gmail.com", "Agendar demonstração"]],
        ].map(([titulo, itens]) => (
          <div key={titulo as string}>
            <p
              className="text-[11px] uppercase tracking-[0.14em]"
              style={{ color: giz.mutedDark }}
            >
              {titulo}
            </p>
            <ul className="mt-4 grid gap-2.5 text-sm">
              {(itens as string[]).map((item) => (
                <li key={item} style={{ color: giz.mutedDark }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p
        className="mx-auto max-w-[1200px] border-t px-5 pt-6 text-xs sm:px-6"
        style={{ borderColor: giz.borderDark, color: giz.mutedDark }}
      >
        {local
          ? "Versão local para testes. Conteúdo e métricas são ilustrativos."
          : "Protótipo didático. Conteúdo e métricas são ilustrativos."}
      </p>
    </footer>
  );
}

function BarraMobile() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t px-4 py-3 backdrop-blur-xl sm:hidden"
      style={{
        background: "rgba(7,33,27,0.94)",
        borderColor: giz.borderDark,
      }}
    >
      <a
        href="#agendar"
        className="flex-1 rounded-[12px] py-3.5 text-center text-sm font-medium"
        style={{ background: giz.primary, color: giz.fgLight }}
      >
        Agendar demonstração
      </a>
      <a
        href="https://wa.me/5511980448792"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="grid w-13 place-items-center rounded-[12px] border px-4"
        style={{ borderColor: giz.borderDark, color: giz.fgDark }}
      >
        <MessageCircle className="size-5" />
      </a>
    </div>
  );
}
