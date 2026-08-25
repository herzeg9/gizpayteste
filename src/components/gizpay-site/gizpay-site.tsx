import Link from "next/link";
import {
  ArrowLeft,
  Check,
  FileText,
  Lock,
  Mail,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { giz } from "@/components/prototipo/tokens";
import { SmoothScrollAnchors } from "@/components/gizpay-site/smooth-scroll-anchors";
import { CalculadoraStayflow } from "@/components/gizpay-site/stayflow/calculadora-stayflow";
import { PortalStayflow } from "@/components/gizpay-site/stayflow/portal-stayflow";
import { ComparativoV11 } from "@/components/gizpay-site/v11/comparativo-v11";
import { DepoimentosV11 } from "@/components/gizpay-site/v11/depoimentos-v11";
import { FormularioAgendamento } from "@/components/gizpay-site/v11/formulario-agendamento";
import { HeroV11 } from "@/components/gizpay-site/v11/hero-v11";
import { SiteInteractive } from "@/components/gizpay-site/v11/site-interactive";

const PROBLEMAS = [
  {
    n: "01",
    titulo: "Repasse com atraso",
    texto: (
      <>
        Os pais pagam hoje. A escola recebe em{" "}
        <strong style={{ color: giz.fgDark }}>até 30 dias</strong> — e ainda com a
        taxa cheia já descontada.
      </>
    ),
  },
  {
    n: "02",
    titulo: "Taxa sobre tudo",
    texto: (
      <>
        De <strong style={{ color: giz.fgDark }}>2% a 6% de todo o faturamento mensal</strong>{" "}
        entregue para a plataforma.
      </>
    ),
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
  { n: "01", titulo: "Conexão da Conta", texto: "Conectamos o Giz Pay diretamente ao CNPJ da sua escola via API bancária segura." },
  { n: "02", titulo: "Migração de Dados", texto: "Nossa equipe importa sua base de alunos e responsáveis sem custo adicional." },
  { n: "03", titulo: "Treinamento", texto: "Sua secretaria aprende a usar a plataforma em uma sessão prática de 45 minutos." },
  { n: "04", titulo: "Primeira Cobrança", texto: "Disparamos os primeiros avisos e você vê o dinheiro cair direto na sua conta." },
];

const MODULOS = [
  { sigla: "Pix", titulo: "Baixa Instantânea", texto: "Pagamento confirmado em segundos. Sem esperar compensação bancária." },
  { sigla: "RC", titulo: "Régua Automática", texto: "Lembretes pré e pós vencimento via WhatsApp e E-mail sem constrangimento." },
  { sigla: "IN", titulo: "Painel Vivo", texto: "Visão em tempo real de quem pagou e quem está em atraso por turma." },
  { sigla: "CB", titulo: "Conciliação", texto: "Fechamento do mês em minutos. Cada entrada casada automaticamente." },
];

const SEGURANCA = [
  { icon: ShieldCheck, titulo: "LGPD Nativa", texto: "Base legal por finalidade e canal do titular desde o dia zero." },
  { icon: Lock, titulo: "Criptografia", texto: "Dados cifrados em trânsito e em repouso com isolamento de ambiente." },
  { icon: Users, titulo: "Acesso por Papel", texto: "Perfis distintos com autenticação em duas etapas para secretarias." },
  { icon: FileText, titulo: "Audit Log", texto: "Cada alteração registrada com autor, data e hora para total transparência." },
];

export function GizPaySite({ showCourseBanner = false }: { showCourseBanner?: boolean }) {
  return (
    <div
      className="typography-refined relative flex min-h-screen flex-col font-body"
      style={{ background: giz.deep, color: giz.fgDark }}
    >
      <SmoothScrollAnchors />
      {showCourseBanner ? <BarraProtótipo /> : null}
      <Navegacao />

      <main className="flex-1">
        <HeroV11 />

        <section id="problema" className="section-padding" style={{ background: giz.deep }}>
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="mb-20 max-w-[700px]">
              <span className="overline mb-4 block">O Problema</span>
              <h2 className="font-display text-[40px] md:text-[64px]">
                Sua escola trabalha o mês inteiro.{" "}
                <span className="font-serif-italic">Quem lucra</span> é o intermediário.
              </h2>
            </div>
            <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
              {PROBLEMAS.map((p) => (
                <article key={p.n} className="border-t border-white/10 pt-8">
                  <span className="font-mono text-[13px]" style={{ color: giz.primary }}>
                    [ {p.n} ]
                  </span>
                  <h3 className="mb-4 mt-4 font-display text-[24px]">{p.titulo}</h3>
                  <p className="text-[16px]" style={{ color: giz.mutedDark }}>
                    {p.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

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
              <h2 className="font-display text-[40px] md:text-[64px]">
                A migração que <span className="font-serif-italic">não dói</span>.
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {IMPLANTACAO.map((p) => (
                <article key={p.n} className="space-y-4">
                  <span className="font-mono text-[13px]" style={{ color: "#3E8E63" }}>
                    {p.n}
                  </span>
                  <h4 className="text-[18px] font-semibold">{p.titulo}</h4>
                  <p className="text-[15px] leading-relaxed" style={{ color: giz.mutedLight }}>
                    {p.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="calculadora" className="scroll-mt-[72px] section-padding" style={{ background: giz.deep }}>
          <div className="mx-auto max-w-[1000px] px-5">
            <CalculadoraStayflow />
          </div>
        </section>

        <DepoimentosV11 />
        <ComparativoV11 />

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
                <h2 className="font-display text-[42px]">
                  Uma plataforma completa, não um boleto avulso.
                </h2>
              </div>
              <p className="max-w-[400px] text-[17px]" style={{ color: giz.mutedLight }}>
                Construída ouvindo secretarias e tesourarias para resolver a rotina escolar
                real.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {MODULOS.map((m) => (
                <article
                  key={m.sigla}
                  className="rounded-[24px] border border-[#0B1F1A]/10 bg-white p-8"
                >
                  <span
                    className="mb-6 inline-grid size-9 place-items-center rounded-[10px] bg-[#F6F8F5] font-mono text-[11px]"
                    style={{ color: "#3E8E63" }}
                  >
                    {m.sigla}
                  </span>
                  <h3 className="mb-3 font-display text-[20px] font-semibold">{m.titulo}</h3>
                  <p className="text-[15px]" style={{ color: giz.mutedLight }}>
                    {m.texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="portal-responsavel"
          className="section-padding"
          style={{ background: giz.lightAlt, color: giz.fgLight }}
        >
          <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-5 lg:grid-cols-2">
            <div className="space-y-8">
              <span className="overline" style={{ color: "#3E8E63" }}>
                Portal do Responsável
              </span>
              <h2 className="font-display text-[40px] md:text-[54px]">
                A família resolve sozinha. Sua secretaria{" "}
                <span className="font-serif-italic">ganha tempo</span>.
              </h2>
              <p className="text-[18px]" style={{ color: giz.mutedLight }}>
                2ª via, código Pix copia-e-cola, histórico de pagamentos e informe de IR.
                Tudo na palma da mão, com a marca da sua escola.
              </p>
              <ul className="space-y-4 font-medium">
                {[
                  "Redução de 70% nos atendimentos financeiros",
                  "Histórico completo de pagamentos e acordos",
                  "Ambiente seguro e intuitivo para os pais",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="size-5 shrink-0" style={{ color: giz.primary }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <PortalStayflow />
          </div>
        </section>

        <section id="seguranca" className="scroll-mt-[72px] section-padding" style={{ background: giz.deep }}>
          <div className="mx-auto grid max-w-[1200px] gap-16 px-5 lg:grid-cols-[1fr_2fr]">
            <div>
              <span className="overline mb-4 block">Segurança</span>
              <h2 className="font-display text-[42px]">Dado de aluno é sensível.</h2>
              <p className="text-[17px]" style={{ color: giz.mutedDark }}>
                Tratamos a informação com o rigor que o ambiente escolar exige,{" "}
                <strong style={{ color: giz.fgDark }}>seguindo a LGPD à risca</strong>.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {SEGURANCA.map(({ icon: Icon, titulo, texto }) => (
                <article key={titulo} className="glass-card p-8">
                  <Icon className="mb-6 size-8" style={{ color: giz.primary }} />
                  <h4 className="mb-2 font-display text-[20px]">{titulo}</h4>
                  <p className="text-[14px]" style={{ color: giz.mutedDark }}>
                    {texto}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SiteInteractive />

        <section
          id="agendar"
          className="scroll-mt-[72px] section-padding border-t border-white/5"
          style={{ background: giz.deep }}
        >
          <div className="mx-auto grid max-w-[1200px] items-start gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="space-y-10">
              <div>
                <span className="overline mb-4 block">Agendar demonstração</span>
                <h2 className="font-display text-[40px] md:text-[54px]">
                  Veja o painel com os números da{" "}
                  <span className="font-serif-italic">sua escola</span>.
                </h2>
              </div>
              <p className="text-[18px]" style={{ color: giz.mutedDark }}>
                Uma conversa de{" "}
                <strong style={{ color: giz.fgDark }}>30 minutos</strong>: entendemos sua
                operação, mostramos a plataforma funcionando e estimamos sua economia anual
                — <strong style={{ color: giz.fgDark }}>sem compromisso</strong>.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="grid size-10 place-items-center rounded-full bg-white/5">
                    <MessageCircle className="size-5" style={{ color: giz.primary }} />
                  </span>
                  <div>
                    <p className="font-medium">WhatsApp comercial</p>
                    <p className="text-sm" style={{ color: giz.mutedDark }}>
                      (11) 98044-8792
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="grid size-10 place-items-center rounded-full bg-white/5">
                    <Mail className="size-5" style={{ color: giz.primary }} />
                  </span>
                  <div>
                    <p className="font-medium">E-mail direto</p>
                    <p className="text-sm" style={{ color: giz.mutedDark }}>
                      contato.gizpay@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card border-white/15 p-6 shadow-xl transition-shadow duration-300 sm:p-10 md:p-12">
              <FormularioAgendamento />
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
      className="fixed top-0 z-50 w-full border-b border-white/10"
      style={{ background: giz.deep }}
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
        <a href="#agendar" className="pill-primary px-5 py-2.5 text-sm font-semibold">
          Agendar demo
        </a>
      </div>
    </header>
  );
}

function Rodape({ local }: { local: boolean }) {
  return (
    <footer className="border-t border-white/10 py-12 pb-24 lg:pb-12" style={{ background: giz.deep }}>
      <div className="mx-auto max-w-[1200px] px-5">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-[300px]">
            <Link href="/" className="mb-6 flex items-center gap-2.5">
              <span
                className="grid size-8 place-items-center rounded-full font-display text-sm font-semibold"
                style={{ background: giz.primary, color: giz.fgLight }}
              >
                G
              </span>
              <span className="font-display font-semibold">Giz Pay</span>
            </Link>
            <p className="text-sm" style={{ color: giz.mutedDark }}>
              Gestão financeira escolar sem intermediários. Liquidação direto na conta da
              escola.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h5 className="mb-5 text-xs uppercase tracking-widest">Produto</h5>
              <ul className="space-y-3 text-sm" style={{ color: giz.mutedDark }}>
                {[
                  ["Como funciona", "#como-funciona"],
                  ["Módulos", "#modulos"],
                  ["Segurança", "#seguranca"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="transition-colors hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="mb-5 text-xs uppercase tracking-widest">Contato</h5>
              <ul className="space-y-3 text-sm" style={{ color: giz.mutedDark }}>
                <li>
                  <a href="https://wa.me/5511980448792" className="hover:text-white">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="mailto:contato.gizpay@gmail.com" className="hover:text-white">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs md:flex-row"
          style={{ color: giz.mutedDark }}
        >
          <p>© 2024 Giz Pay. Todos os direitos reservados.</p>
          <p>
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
    <nav
      className="fixed inset-x-0 bottom-0 z-[60] flex gap-3 border-t border-white/10 px-4 py-4 lg:hidden"
      style={{ background: giz.deep }}
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
        className="flex size-14 items-center justify-center rounded-2xl border border-white/10"
        style={{ background: giz.raised }}
      >
        <MessageCircle className="size-6" style={{ color: giz.primary }} />
      </a>
    </nav>
  );
}
