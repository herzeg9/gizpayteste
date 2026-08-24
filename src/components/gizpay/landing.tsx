"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Lock,
  Menu,
  MessageCircle,
  Shield,
} from "lucide-react";
import { DashboardMock } from "@/components/gizpay/dashboard";
import { SavingsCalculator } from "@/components/gizpay/calculator";
import { ParentPortal } from "@/components/gizpay/portal";
import { DemoForm } from "@/components/gizpay/demo-form";
import {
  NotesLegend,
  NotesProvider,
  NotePin,
} from "@/components/gizpay/notes";
import {
  compareRows,
  designNotes,
  faqs,
  modules,
  roles,
  schools,
  steps,
  timeline,
  type Role,
} from "@/components/gizpay/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#comparativo", label: "Comparativo" },
  { href: "#calculadora", label: "Calculadora" },
  { href: "#demo", label: "Agendar demo" },
];

export function GizpayLanding() {
  const [role, setRole] = useState<Role>("direcao");
  const [notesOn, setNotesOn] = useState(false);
  const [sticky, setSticky] = useState(false);
  const copy = roles[role];

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goDemo() {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <NotesProvider on={notesOn}>
      <div className="gizpay min-h-screen bg-paper text-foreground paper-noise">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-chalk focus:px-3 focus:py-2 focus:text-board"
        >
          Pular para o conteúdo
        </a>
        <div className="bg-board px-4 py-2 text-center text-xs text-paper sm:text-sm">
          Implantação assistida em até 15 dias — matrículas 2027 já com cobrança
          automática.
        </div>
        <header className="sticky top-0 z-30 border-b border-border/70 bg-paper/90 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
            <Link href="/gizpay" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-md bg-board font-display text-lg text-chalk">
                g
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold tracking-tight">
                  Giz Pay
                </span>
                <span className="block text-[11px] text-muted-foreground">
                  Financeiro escolar
                </span>
              </span>
            </Link>
            <nav className="hidden items-center gap-6 text-sm md:flex">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-board">
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setNotesOn((v) => !v)}
                className={`hidden h-8 rounded-full px-3 text-xs font-medium sm:inline ${
                  notesOn ? "bg-brick text-white" : "bg-secondary text-board"
                }`}
              >
                {notesOn ? "Ocultar decisões" : "Ver decisões de design"}
              </button>
              <button
                type="button"
                onClick={goDemo}
                className="h-9 rounded-full bg-board px-4 text-sm font-medium text-chalk"
              >
                Agendar demo
              </button>
              <Sheet>
                <SheetTrigger
                  render={
                    <Button variant="outline" size="icon" className="md:hidden" />
                  }
                >
                  <Menu className="size-4" />
                </SheetTrigger>
                <SheetContent className="gizpay bg-paper">
                  <SheetHeader>
                    <SheetTitle>Giz Pay</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-3 p-4">
                    {links.map((l) => (
                      <a key={l.href} href={l.href} className="text-sm">
                        {l.label}
                      </a>
                    ))}
                    <button
                      type="button"
                      onClick={() => setNotesOn((v) => !v)}
                      className="h-9 rounded-full bg-secondary text-sm"
                    >
                      {notesOn ? "Ocultar decisões" : "Ver decisões de design"}
                    </button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        <main id="conteudo">
          <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
            <div className="relative">
              <NotePin id="hero" />
              <div className="flex flex-wrap gap-2">
                {(Object.keys(roles) as Role[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setRole(key)}
                    className={`h-8 rounded-full px-3 text-xs font-medium ${
                      role === key
                        ? "bg-board text-chalk"
                        : "bg-secondary text-board"
                    }`}
                  >
                    {roles[key].label}
                  </button>
                ))}
              </div>
              <p className="mt-6 text-xs font-medium tracking-widest text-brick uppercase">
                {copy.kicker}
              </p>
              <h1 className="font-display mt-3 text-4xl leading-[1.1] text-board sm:text-5xl lg:text-[3.4rem]">
                {copy.headline}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {copy.sub}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#demo"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-board px-6 text-sm font-medium text-chalk"
                >
                  Agendar demonstração
                </a>
                <a
                  href="#calculadora"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-board/20 bg-white px-6 text-sm font-medium text-board"
                >
                  Calcular economia da minha escola
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Implantação e migração inclusas · Suporte humano por WhatsApp
              </p>
            </div>
            <DashboardMock />
          </section>

          <section className="border-y border-border bg-card/60">
            <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6">
              <Metric value="0%" label="de repasse retido — o caixa é da escola" />
              <Metric value="−80%" label="no custo vs. intermediários tradicionais" />
              <Metric value="<3s" label="para baixa automática de um Pix" />
            </div>
          </section>

          <div className="overflow-hidden border-b border-border py-4">
            <div className="animate-ticker flex w-max gap-10 text-sm text-muted-foreground">
              {[...schools, ...schools].map((s, i) => (
                <span key={`${s}-${i}`} className="whitespace-nowrap">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <NotePin id="problema" />
            <p className="text-xs font-medium tracking-widest text-brick uppercase">
              O problema
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-3xl leading-tight text-board sm:text-5xl">
              Sua escola trabalha o mês inteiro. Quem lucra é o intermediário.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Intermediários tradicionais retêm o caixa, cobram um percentual do
              faturamento e devolvem o dinheiro semanas depois. A Giz Pay faz o
              contrário: automatiza a cobrança e mantém a escola no comando.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  t: "Repasse com atraso",
                  d: "Pais pagam hoje, a escola recebe em 15, 30 ou 60 dias — com taxa cheia descontada.",
                },
                {
                  t: "Taxa sobre faturamento",
                  d: "2% a 6% de tudo que a escola fatura, todo mês, sem contrapartida de tesouraria.",
                },
                {
                  t: "Cobrança manual",
                  d: "Secretaria emitindo boleto, ligando para cobrar e controlando atraso em planilha.",
                },
                {
                  t: "Nenhuma visibilidade",
                  d: "A direção não sabe o que entrou nem quem deve até o relatório do fim do mês.",
                },
              ].map((item) => (
                <article
                  key={item.t}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <h3 className="font-medium text-board">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.d}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="comparativo"
            className="relative border-y border-border bg-[#fff7ea] px-4 py-16 sm:px-6 sm:py-20"
          >
            <div className="relative mx-auto max-w-6xl">
              <NotePin id="comparativo" />
              <p className="text-xs font-medium tracking-widest text-brick uppercase">
                Comparativo
              </p>
              <h2 className="font-display mt-3 text-3xl text-board sm:text-4xl">
                Giz Pay vs. intermediários tradicionais
              </h2>
              <div className="mt-8 overflow-x-auto">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 pr-4 font-medium">Critério</th>
                      <th className="py-3 pr-4 font-medium text-board">Giz Pay</th>
                      <th className="py-3 font-medium text-muted-foreground">
                        Intermediário
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((row) => (
                      <tr key={row.criterion} className="border-b border-border/70">
                        <td className="py-4 pr-4 font-medium">{row.criterion}</td>
                        <td className="py-4 pr-4">
                          <span className="rounded-full bg-chalk/80 px-2 py-1 text-board">
                            {row.giz}
                          </span>
                        </td>
                        <td className="py-4 text-muted-foreground">{row.other}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="text-xs font-medium tracking-widest text-brick uppercase">
              Como funciona
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-3xl leading-tight text-board sm:text-4xl">
              Da matrícula ao caixa em quatro passos — nenhum deles é manual.
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {steps.map((s) => (
                <article
                  key={s.n}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <p className="font-mono text-sm text-brick">{s.n}</p>
                  <h3 className="mt-2 text-lg font-medium text-board">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="border-y border-border bg-board text-paper">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
              <p className="text-xs font-medium tracking-widest text-chalk uppercase">
                Módulos
              </p>
              <h2 className="font-display mt-3 max-w-3xl text-3xl sm:text-4xl">
                Uma plataforma completa, não um boleto avulso.
              </h2>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {modules.map((m) => (
                  <article
                    key={m.code}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="font-mono text-xs text-chalk">{m.code}</p>
                    <h3 className="mt-2 font-medium">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{m.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="calculadora" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SavingsCalculator onCta={goDemo} />
          </section>

          <section className="border-y border-border bg-card/70 px-4 py-16 sm:px-6 sm:py-20">
            <div className="mx-auto max-w-6xl">
              <ParentPortal />
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="text-xs font-medium tracking-widest text-brick uppercase">
              Implantação
            </p>
            <h2 className="font-display mt-3 text-3xl text-board sm:text-4xl">
              Quinze dias. Base migrada. Equipe treinada.
            </h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-4">
              {timeline.map((item) => (
                <li
                  key={item.d}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <p className="font-mono text-xs text-brick">{item.d}</p>
                  <h3 className="mt-2 font-medium text-board">{item.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.dtl}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="border-y border-border bg-[#fff7ea] px-4 py-16 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-medium tracking-widest text-brick uppercase">
                  Segurança
                </p>
                <h2 className="font-display mt-3 text-3xl text-board">
                  Dado de aluno é dado sensível. Tratamos como tal.
                </h2>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "LGPD desde o dia 1 — base legal, retenção e canal do titular",
                    "Criptografia em trânsito e em repouso, isolamento por escola",
                    "Acesso por papel + autenticação em duas etapas",
                    "Trilha de auditoria: valor, desconto e baixa com autor e hora",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <Shield className="mt-0.5 size-4 shrink-0 text-board" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6">
                <Lock className="size-6 text-board" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Infraestrutura em nuvem no Brasil. O intermediário tradicional
                  mistura o caixa de várias escolas. Aqui o dinheiro e os dados
                  ficam no perímetro da sua instituição.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="text-xs font-medium tracking-widest text-brick uppercase">
              Perguntas frequentes
            </p>
            <h2 className="font-display mt-3 text-3xl text-board">
              Antes de falar com a gente.
            </h2>
            <Accordion className="mt-8" defaultValue={["faq-0"]}>
              {faqs.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-base">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section id="demo" className="border-t border-border bg-board px-4 py-16 text-paper sm:px-6 sm:py-20">
            <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-medium tracking-widest text-chalk uppercase">
                  Demonstração
                </p>
                <h2 className="font-display mt-3 text-3xl sm:text-5xl">
                  Veja o painel com os números da sua escola.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                  Trinta minutos: entendemos a operação, mostramos a plataforma
                  funcionando e estimamos a economia anual — sem compromisso.
                </p>
                <a
                  href="https://wa.me/5511980448792"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-chalk"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp comercial · (11) 98044-8792
                </a>
              </div>
              <div className="gizpay">
                <DemoForm />
              </div>
            </div>
          </section>
        </main>

        {notesOn ? <NotesLegend notes={designNotes} /> : null}

        <footer className="border-t border-border bg-paper px-4 py-10 text-sm text-muted-foreground sm:px-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-xl text-board">Giz Pay</p>
              <p className="mt-1 max-w-sm">
                Gestão financeira escolar sem intermediários. Redesign didático —
                oferta e dados a partir de gizpay.com.br.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:items-end">
              <Link href="/" className="inline-flex items-center gap-1 text-board">
                Voltar à aula <ArrowRight className="size-3.5" />
              </Link>
              <Link href="/auditoria">Ver auditoria do site atual</Link>
              <p>contato.gizpay@gmail.com</p>
            </div>
          </div>
        </footer>

        {sticky ? (
          <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-paper/95 p-3 backdrop-blur md:hidden">
            <a
              href="#demo"
              className="flex h-11 items-center justify-center rounded-full bg-board text-sm font-medium text-chalk"
            >
              Agendar demonstração
            </a>
          </div>
        ) : null}

        <a
          href="https://wa.me/5511980448792"
          className="fixed right-4 bottom-20 z-40 flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg md:bottom-6"
          aria-label="WhatsApp comercial"
        >
          <MessageCircle className="size-6" />
        </a>
      </div>
    </NotesProvider>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl text-board">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

