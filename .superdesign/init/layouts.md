# Layout Components

Shared layout shells, navigation, and footers used across the app.

## `src/components/site-header.tsx`

Course platform sticky header with desktop nav and mobile Sheet menu (Estúdio Giz branding).

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "/curso", label: "Curso" },
  { href: "/auditoria", label: "Auditoria" },
  { href: "/wireframes", label: "Wireframes" },
  { href: "/", label: "Site Giz Pay" },
  { href: "/projeto", label: "Projeto Giz Pay" },
  { href: "/prototipo", label: "Protótipo" },
  { href: "/recursos", label: "Recursos" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/curso"
      ? pathname === "/curso" || pathname.startsWith("/aula")
      : href === "/"
        ? pathname === "/"
        : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-200",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-6">
        <Link href="/curso" className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-[10px] bg-primary font-display text-[17px] font-semibold text-primary-foreground"
          >
            G
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-semibold tracking-tight">
              Estúdio Giz
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              UI/UX · Front-end · Framer
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors",
                isActive(link.href)
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/aula/ui-ux-e-por-que-sites-nao-convertem">Começar a aula</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="font-display">Navegação</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {links.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-md px-3 py-2.5 text-sm",
                        isActive(link.href)
                          ? "bg-accent text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-3">
                    <Link href="/aula/ui-ux-e-por-que-sites-nao-convertem">
                      Começar a aula
                    </Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
```

## `src/components/site-footer.tsx`

Course platform footer with track links, project links, and course stats.

```tsx
import Link from "next/link";
import { totalLessons, totalMinutes, tracks } from "@/content";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">
              Estúdio Giz
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Um curso-roteiro em português sobre UI/UX, desenvolvimento web e o
              fluxo de trabalho no Framer, aplicado a um projeto real: o
              repaginamento do site da Giz Pay.
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              {tracks.length} trilhas · {totalLessons} aulas ·{" "}
              {Math.round(totalMinutes / 60)}h de leitura
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Trilhas
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {tracks.map((track) => (
                <li key={track.id}>
                  <Link
                    href={`/aula/${track.lessons[0].slug}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="font-mono text-xs text-primary">
                      {track.number}
                    </span>{" "}
                    {track.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Projeto
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/projeto"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Diagnóstico e plano
                </Link>
              </li>
              <li>
                <Link
                  href="/prototipo"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Protótipo navegável
                </Link>
              </li>
              <li>
                <Link
                  href="/recursos"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Checklists e glossário
                </Link>
              </li>
              <li>
                <a
                  href="https://gizpay.com.br"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Site atual da Giz Pay ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          Material didático. O protótipo da Giz Pay é uma proposta de
          repaginamento e usa dados ilustrativos.
        </p>
      </div>
    </footer>
  );
}
```

## `src/components/gizpay-site/gizpay-site.tsx`

Giz Pay marketing site shell — includes Navegacao (header), RodapePrototipo (footer), BarraMobile (mobile CTA bar), BarraProtótipo (course banner), and all homepage sections.

```tsx
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ComparativoScroll } from "@/components/gizpay-site/comparativo-scroll";
import { DepoimentoScroll } from "@/components/gizpay-site/depoimento-scroll";
import { CalculadoraScroll } from "@/components/gizpay-site/calculadora-scroll";
import { ComoFuncionaScroll } from "@/components/gizpay-site/como-funciona-scroll";
import { HeroScroll } from "@/components/gizpay-site/hero-scroll";
import { ProblemaScroll } from "@/components/gizpay-site/problema-scroll";
import { ProvaSocialScroll } from "@/components/gizpay-site/prova-social-scroll";
import { Faq } from "@/components/prototipo/faq";
import { Formulario } from "@/components/prototipo/formulario";
import { PortalResponsavel } from "@/components/prototipo/portal-responsavel";
import { giz } from "@/components/prototipo/tokens";

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

export function GizPaySite({ showCourseBanner = false }: { showCourseBanner?: boolean }) {
  return (
    <div style={{ background: giz.deep, color: giz.fgDark }}>
      {showCourseBanner ? <BarraProtótipo /> : null}
      <Navegacao />

      <HeroScroll />

      <ProvaSocialScroll />

      <ProblemaScroll />

      <ComoFuncionaScroll />

      <CalculadoraScroll />

      <DepoimentoScroll />

      <ComparativoScroll />

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
```

## `src/app/layout.tsx`

Root layout — fonts (Inter, Fraunces, JetBrains Mono), globals.css, html/body shell.

```tsx
import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Giz Pay — Gestão financeira escolar sem intermediários",
    template: "%s · Giz Pay",
  },
  description:
    "Cobrança automática por Pix, boleto e cartão, liquidação direto no CNPJ da escola.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
```

## `src/app/(curso)/layout.tsx`

Course route group layout — wraps pages with SiteHeader + main + SiteFooter.

```tsx
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function CursoLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
```

