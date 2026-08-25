import Link from "next/link";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  FileText,
  Lock,
  Mail,
  MessageCircle,
  Plus,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";
import { Formulario } from "@/components/prototipo/formulario";
import { giz } from "@/components/prototipo/tokens";
import { SmoothScrollAnchors } from "@/components/gizpay-site/smooth-scroll-anchors";
import { CalculadoraStayflow } from "@/components/gizpay-site/stayflow/calculadora-stayflow";
import { PainelStayflow } from "@/components/gizpay-site/stayflow/painel-stayflow";
import { PortalStayflow } from "@/components/gizpay-site/stayflow/portal-stayflow";

const PROBLEMAS = [
  {
    n: "01",
    titulo: "Repasse com atraso",
    texto:
      "Os pais pagam hoje. A escola recebe em até 30 dias — e ainda com a taxa cheia já descontada.",
  },
  {
    n: "02",
    titulo: "Taxa sobre tudo",
    texto: "De 2% a 6% de todo o seu faturamento mensal entregue para a plataforma.",
  },
  {
    n: "03",
    titulo: "Inadimplência cega",
    texto:
      "Dificuldade em saber quem está em atraso sem gastar horas cruzando extratos bancários.",
  },
  {
    n: "04",
    titulo: "Gestão Manual",
    texto:
      "A secretaria emitindo boletos manualmente e controlando cobranças em planilhas infinitas.",
  },
];

const IMPLANTACAO = [
  {
    n: "01",
    titulo: "Conexão da Conta",
    texto: "Conectamos o Giz Pay diretamente ao CNPJ da sua escola via API bancária segura.",
  },
  {
    n: "02",
    titulo: "Migração de Dados",
    texto: "Nossa equipe importa sua base de alunos e responsáveis sem custo adicional.",
  },
  {
    n: "03",
    titulo: "Treinamento",
    texto: "Sua secretaria aprende a usar a plataforma em uma sessão prática de 45 minutos.",
  },
  {
    n: "04",
    titulo: "Primeira Cobrança",
    texto: "Disparamos os primeiros avisos e você vê o dinheiro cair direto na sua conta.",
  },
];

const MODULOS = [
  {
    sigla: "Pix",
    titulo: "Baixa Instantânea",
    texto: "Pagamento confirmado em segundos. Sem esperar compensação bancária.",
  },
  {
    sigla: "RC",
    titulo: "Régua Automática",
    texto: "Lembretes pré e pós vencimento via WhatsApp e E-mail sem constrangimento.",
  },
  {
    sigla: "IN",
    titulo: "Painel Vivo",
    texto: "Visão em tempo real de quem pagou e quem está em atraso por turma.",
  },
  {
    sigla: "CB",
    titulo: "Conciliação",
    texto: "Fechamento do mês em minutos. Cada entrada casada automaticamente.",
  },
];

const SEGURANCA = [
  { icon: ShieldCheck, titulo: "LGPD Nativa", texto: "Base legal por finalidade e canal do titular desde o dia zero." },
  { icon: Lock, titulo: "Criptografia", texto: "Dados cifrados em trânsito e em repouso com isolamento de ambiente." },
  { icon: Users, titulo: "Acesso por Papel", texto: "Perfis distintos com autenticação em duas etapas para secretarias." },
  { icon: FileText, titulo: "Audit Log", texto: "Cada alteração registrada com autor, data e hora para total transparência." },
];

const FAQ = [
  {
    pergunta: "A escola precisa trocar de banco?",
    resposta:
      "Não. O Giz Pay se conecta à conta bancária que a sua escola já possui. O dinheiro das liquidações cai diretamente no seu CNPJ sem passar por nós.",
  },
  {
    pergunta: "Como funciona a migração da base de alunos?",
    resposta:
      "Nossa equipe técnica cuida de tudo. Você nos envia sua planilha ou exportação do sistema atual e nós fazemos a higienização e importação dos dados sem custo.",
  },
  {
    pergunta: "O Pix tem taxa de liquidação?",
    resposta:
      "Sim, cobramos uma tarifa fixa por cada transação liquidada com sucesso. Não há taxas de emissão, cancelamento ou manutenção.",
  },
];

export function GizPaySite({ showCourseBanner = false }: { showCourseBanner?: boolean }) {
  return (
    <div className="relative flex min-h-screen flex-col" style={{ background: giz.deep, color: giz.fgDark }}>
      <SmoothScrollAnchors />
      {showCourseBanner ? <BarraProtótipo /> : null}
      <Navegacao />

      <main className="flex-1">
        {/* HERO */}
        <section
          id="hero"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-20 pt-32"
          style={{ background: giz.deep }}
        >
          <div className="hero-beam" aria-hidden />
          <div className="relative z-10 mx-auto mb-16 max-w-[960px] px-5 text-center">
            <span className="overline mb-6 block">Plataforma financeira para escolas</span>
            <h1 className="font-display mb-8 text-[52px] font-semibold leading-[1.04] tracking-tight text-[#F2F7F3] md:text-[84px] lg:text-[92px]">
              O dinheiro da sua escola, <br />
              <span className="font-serif-italic">no controle</span> de quem ensina.
            </h1>
            <p
              className="mx-auto mt-8 max-w-[620px] text-[18px] leading-relaxed md:text-[20px]"
              style={{ color: giz.mutedDark }}
            >
              Cobrança automática por Pix, boleto e cartão, com liquidação direto no CNPJ
              da escola. Sem intermediário segurando o seu caixa por 30 dias.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <a href="#agendar" className="pill-primary min-w-[220px] px-8 py-4 text-[16px] font-semibold shadow-lg shadow-[#123429]/28">
                Agendar demonstração
              </a>
              <a href="#calculadora" className="pill-outline min-w-[220px] px-8 py-4 text-[16px] font-semibold">
                Calcular economia
              </a>
            </div>
            <p className="mt-10 text-[13px] opacity-70" style={{ color: giz.mutedDark }}>
              Implantação e migração da base inclusas · Suporte humano por WhatsApp
            </p>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1000px] px-5">
            <PainelStayflow />
          </div>
        </section>

        {/* PROBLEMA */}
        <section id="problema" className="section-padding" style={{ background: giz.deep }}>
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="mb-20 max-w-[700px]">
              <span className="overline mb-4 block">O Problema</span>
              <h2 className="font-display text-[40px] leading-[1.05] tracking-tight text-[#F2F7F3] md:text-[64px]">
                Sua escola trabalha o mês inteiro.{" "}
                <span className="font-serif-italic">Quem lucra</span> é o intermediário.
              </h2>
            </div>
            <div className="grid gap-x-12 gap-y-16 md:grid-cols-3 lg:grid-cols-4">
              {PROBLEMAS.map((p) => (
                <div
                  key={p.n}
                  className="relative border-t pt-8"
                  style={{ borderColor: giz.borderDark }}
                >
                  <span className="absolute top-2 font-mono text-[13px]" style={{ color: giz.primary }}>
                    [ {p.n} ]
                  </span>
                  <h3 className="font-display mb-4 text-[24px] text-[#F2F7F3]">{p.titulo}</h3>
                  <p className="text-[16px] leading-relaxed" style={{ color: giz.mutedDark }}>
                    {p.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section
          id="como-funciona"
          className="scroll-mt-[72px] section-padding"
          style={{ background: giz.light, color: giz.fgLight }}
        >
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="mb-20 max-w-[700px]">
              <span className="overline mb-4 block" style={{ color: "#3E8E63" }}>
                Implantação
              </span>
              <h2 className="font-display text-[40px] leading-[1.05] tracking-tight md:text-[64px]">
                A migração que <span className="font-serif-italic">não dói</span>.
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {IMPLANTACAO.map((p) => (
                <div key={p.n} className="space-y-4">
                  <span className="font-mono text-[13px]" style={{ color: "#3E8E63" }}>
                    {p.n}
                  </span>
                  <h4 className="text-[18px] font-semibold">{p.titulo}</h4>
                  <p className="text-[15px] leading-relaxed" style={{ color: giz.mutedLight }}>
                    {p.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALCULADORA */}
        <section id="calculadora" className="scroll-mt-[72px] section-padding" style={{ background: giz.deep }}>
          <div className="mx-auto max-w-[1000px] px-5">
            <CalculadoraStayflow />
          </div>
        </section>

        {/* DEPOIMENTO */}
        <section className="py-24" style={{ background: giz.light, color: giz.fgLight }}>
          <div className="mx-auto max-w-[860px] px-5 text-center">
            <span className="mb-8 block font-display text-[48px] opacity-20" style={{ color: giz.primary }}>
              “
            </span>
            <blockquote className="font-display mb-10 text-[28px] italic leading-snug md:text-[36px]">
              &ldquo;Antes do Giz Pay, perdíamos quase 4% da receita com o intermediário e o
              dinheiro demorava 15 dias para cair. Hoje a liquidação é instantânea e a
              gestão de inadimplência é automática.&rdquo;
            </blockquote>
            <div className="flex flex-col items-center gap-1.5">
              <p className="text-[16px] font-semibold">Ricardo Oliveira</p>
              <p className="text-[14px]" style={{ color: giz.mutedLight }}>
                Diretor
              </p>
              <p className="text-[14px]" style={{ color: giz.mutedLight }}>
                Colégio Vila Verde
              </p>
            </div>
          </div>
        </section>

        {/* COMPARATIVO */}
        <section id="comparativo" className="section-padding" style={{ background: giz.deep }}>
          <div className="mx-auto max-w-[1000px] px-5">
            <div className="mb-16 text-center">
              <span className="overline mb-4 block">Comparativo</span>
              <h2 className="font-display text-[32px] leading-tight md:text-[42px]">
                Intermediários x Giz Pay
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-white/5 bg-[#0E2F27]/30 p-10">
                <h3 className="mb-8 flex items-center gap-2 text-lg font-semibold text-white">
                  <span className="size-2 rounded-full bg-red-500" />
                  Intermediários
                </h3>
                <ul className="space-y-6">
                  {[
                    "Receba o repasse em 15-30 dias",
                    "Taxa de até 5% sobre o faturamento",
                    "Cobrança manual via WhatsApp um por um",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 text-[15px]"
                      style={{ color: giz.mutedDark }}
                    >
                      <XCircle className="mt-1 size-5 shrink-0 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="relative rounded-3xl border p-10"
                style={{ borderColor: "rgba(74,222,128,0.3)", background: "rgba(20,59,49,0.4)" }}
              >
                <div
                  className="absolute -top-3 right-8 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                  style={{ background: giz.primary, color: giz.deep }}
                >
                  Recomendado
                </div>
                <h3 className="mb-8 flex items-center gap-2 text-lg font-semibold text-white">
                  <span className="size-2 rounded-full" style={{ background: giz.primary }} />
                  Giz Pay
                </h3>
                <ul className="space-y-6">
                  {[
                    "Liquidação direta e instantânea no CNPJ",
                    "Tarifa fixa por transação liquidada",
                    "Régua automática e portal do responsável",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4 text-[15px] text-[#F2F7F3]">
                      <CheckCircle2 className="mt-1 size-5 shrink-0" style={{ color: giz.primary }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MÓDULOS */}
        <section
          id="modulos"
          className="scroll-mt-[72px] section-padding"
          style={{ background: giz.light, color: giz.fgLight }}
        >
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
              <div className="max-w-[600px]">
                <span className="overline mb-4 block" style={{ color: "#3E8E63" }}>
                  Módulos
                </span>
                <h2 className="font-display text-[42px] leading-[1.1]">
                  Uma plataforma completa, não um boleto avulso.
                </h2>
              </div>
              <p className="max-w-[400px] text-[17px] leading-relaxed" style={{ color: giz.mutedLight }}>
                Construída ouvindo secretarias e tesourarias para resolver a rotina escolar
                real.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {MODULOS.map((m) => (
                <article
                  key={m.sigla}
                  className="rounded-[24px] border bg-white p-8 transition-colors hover:border-[rgba(11,31,26,0.18)]"
                  style={{ borderColor: giz.borderLight }}
                >
                  <div
                    className="mb-6 inline-grid size-9 place-items-center rounded-[10px] border"
                    style={{ background: giz.light, borderColor: giz.borderLight }}
                  >
                    <span className="font-mono text-[11px] font-medium" style={{ color: "#3E8E63" }}>
                      {m.sigla}
                    </span>
                  </div>
                  <h3 className="font-display mb-3 text-[20px] font-semibold">{m.titulo}</h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: giz.mutedLight }}>
                    {m.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PORTAL */}
        <section className="section-padding overflow-hidden" style={{ background: giz.lightAlt, color: giz.fgLight }}>
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              <div className="space-y-8">
                <span className="overline" style={{ color: "#3E8E63" }}>
                  Portal do Responsável
                </span>
                <h2 className="font-display text-[40px] leading-tight md:text-[54px]">
                  A família resolve sozinha. Sua secretaria{" "}
                  <span className="font-serif-italic">ganha tempo</span>.
                </h2>
                <p className="text-[18px] leading-relaxed" style={{ color: giz.mutedLight }}>
                  2ª via, código Pix copia-e-cola, histórico de pagamentos e informe de IR.
                  Tudo na palma da mão, com a marca da sua escola.
                </p>
                <ul className="space-y-4">
                  {[
                    "Redução de 70% nos atendimentos financeiros",
                    "Histórico completo de pagamentos e acordos",
                    "Ambiente seguro e intuitivo para os pais",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-medium">
                      <Check className="size-5 shrink-0" style={{ color: giz.primary }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <PortalStayflow />
            </div>
          </div>
        </section>

        {/* SEGURANÇA */}
        <section
          id="seguranca"
          className="scroll-mt-[72px] section-padding relative overflow-hidden"
          style={{ background: giz.deep }}
        >
          <div className="relative z-10 mx-auto max-w-[1200px] px-5">
            <div className="grid items-start gap-16 lg:grid-cols-[1fr_2fr]">
              <div>
                <span className="overline mb-4 block">Segurança</span>
                <h2 className="font-display mb-6 text-[42px] leading-[1.1]">
                  Dado de aluno é sensível.
                </h2>
                <p className="text-[17px] leading-relaxed" style={{ color: giz.mutedDark }}>
                  Tratamos a informação com o rigor que o ambiente escolar exige, seguindo a
                  LGPD à risca.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {SEGURANCA.map(({ icon: Icon, titulo, texto }) => (
                  <article key={titulo} className="glass-card p-8">
                    <Icon className="mb-6 size-8" style={{ color: giz.primary }} />
                    <h4 className="font-display mb-2 text-[20px]">{titulo}</h4>
                    <p className="text-[14px] leading-relaxed" style={{ color: giz.mutedDark }}>
                      {texto}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-padding" style={{ background: giz.light, color: giz.fgLight }}>
          <div className="mx-auto max-w-[860px] px-5">
            <div className="mb-16 text-center">
              <span className="overline mb-4 block" style={{ color: "#3E8E63" }}>
                FAQ
              </span>
              <h2 className="font-display text-[32px] leading-tight md:text-[42px]">
                Antes de falar com a gente.
              </h2>
            </div>
            <div className="space-y-4">
              {FAQ.map((item) => (
                <details key={item.pergunta} className="accordion-item group">
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl border border-black/5 bg-white p-6 transition-colors hover:border-[#4ADE80]">
                    <span className="text-[17px] font-semibold">{item.pergunta}</span>
                    <Plus className="accordion-icon size-5 transition-transform" style={{ color: giz.primary }} />
                  </summary>
                  <div className="p-6 text-[15px] leading-relaxed" style={{ color: giz.mutedLight }}>
                    {item.resposta}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* AGENDAR */}
        <section
          id="agendar"
          className="scroll-mt-[72px] section-padding border-t border-white/5"
          style={{ background: giz.deep }}
        >
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="grid gap-20 lg:grid-cols-2">
              <div className="space-y-10">
                <div>
                  <span className="overline mb-4 block">Agendar demonstração</span>
                  <h2 className="font-display text-[40px] leading-tight md:text-[54px]">
                    Veja o painel com os números da{" "}
                    <span className="font-serif-italic">sua escola</span>.
                  </h2>
                </div>
                <p className="text-[18px] leading-relaxed" style={{ color: giz.mutedDark }}>
                  Uma conversa de 30 minutos: entendemos sua operação, mostramos a plataforma
                  funcionando e estimamos sua economia anual — sem compromisso.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/5">
                      <MessageCircle className="size-5" style={{ color: giz.primary }} />
                    </div>
                    <div>
                      <p className="font-medium text-white">WhatsApp comercial</p>
                      <p className="text-sm" style={{ color: giz.mutedDark }}>
                        (11) 98044-8792
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white/5">
                      <Mail className="size-5" style={{ color: giz.primary }} />
                    </div>
                    <div>
                      <p className="font-medium text-white">E-mail direto</p>
                      <p className="text-sm" style={{ color: giz.mutedDark }}>
                        contato.gizpay@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-card p-10">
                <Formulario />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Rodape local={!showCourseBanner} />
      <BarraMobile />
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
          Protótipo da proposta de repaginamento — construído com o sistema da Trilha 05.
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
      className="fixed top-0 z-50 w-full border-b backdrop-blur-xl"
      style={{ background: "rgba(7,33,27,0.92)", borderColor: giz.borderDark }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className="grid size-9 place-items-center rounded-full font-display text-base font-semibold"
            style={{ background: giz.primary, color: giz.fgLight }}
          >
            G
          </span>
          <span className="font-display text-[18px] font-semibold tracking-tight">Giz Pay</span>
        </Link>

        <nav className="hidden items-center gap-8 text-[14px] font-medium lg:flex">
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

        <a
          href="#agendar"
          className="pill-primary px-5 py-2.5 text-sm font-semibold"
        >
          Agendar demo
        </a>
      </div>
    </header>
  );
}

function Rodape({ local }: { local: boolean }) {
  return (
    <footer
      className="border-t py-12 pb-24 lg:pb-12"
      style={{ background: giz.deep, borderColor: "rgba(242,247,243,0.08)" }}
    >
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
          <div className="max-w-[300px]">
            <Link href="/" className="mb-6 flex items-center gap-2.5">
              <span
                className="grid size-8 place-items-center rounded-full font-display text-sm font-semibold"
                style={{ background: giz.primary, color: giz.fgLight }}
              >
                G
              </span>
              <span className="font-display text-[16px] font-semibold tracking-tight">
                Giz Pay
              </span>
            </Link>
            <p className="text-[14px] leading-relaxed" style={{ color: giz.mutedDark }}>
              Gestão financeira escolar sem intermediários. Liquidação direto na conta da
              escola.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-24 gap-y-8">
            <div>
              <h5 className="mb-6 text-[11px] font-semibold uppercase tracking-widest">
                Produto
              </h5>
              <ul className="space-y-4">
                {[
                  ["Como funciona", "#como-funciona"],
                  ["Módulos", "#modulos"],
                  ["Segurança", "#seguranca"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-[14px] transition-colors hover:text-white"
                      style={{ color: giz.mutedDark }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="mb-6 text-[11px] font-semibold uppercase tracking-widest">
                Contato
              </h5>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://wa.me/5511980448792"
                    className="text-[14px] transition-colors hover:text-white"
                    style={{ color: giz.mutedDark }}
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato.gizpay@gmail.com"
                    className="text-[14px] transition-colors hover:text-white"
                    style={{ color: giz.mutedDark }}
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="mt-20 flex flex-col justify-between gap-6 border-t pt-8 md:flex-row"
          style={{ borderColor: "rgba(242,247,243,0.08)" }}
        >
          <p className="text-[12px] opacity-50" style={{ color: giz.mutedDark }}>
            © 2024 Giz Pay. Todos os direitos reservados.
          </p>
          <p className="text-[12px] opacity-50" style={{ color: giz.mutedDark }}>
            {local
              ? "Versão local para testes. Conteúdo e métricas são ilustrativos."
              : "Protótipo de repaginação · Ilustrativo."}
          </p>
        </div>
      </div>
    </footer>
  );
}

function BarraMobile() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] flex gap-3 border-t px-4 py-4 backdrop-blur-xl lg:hidden"
      style={{ background: "rgba(7,33,27,0.95)", borderColor: "rgba(255,255,255,0.1)" }}
    >
      <a
        href="#agendar"
        className="pill-primary flex flex-1 items-center justify-center py-4 text-sm font-bold"
      >
        Agendar demonstração
      </a>
      <a
        href="https://wa.me/5511980448792"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
      >
        <MessageCircle className="size-6" style={{ color: giz.primary }} />
      </a>
    </div>
  );
}
