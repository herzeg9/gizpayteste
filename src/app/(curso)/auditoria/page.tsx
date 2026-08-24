import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, Plus, RefreshCw, Scissors } from "lucide-react";
import { AuditItemCheck, AuditProgress } from "@/components/auditoria/checklist";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AUDIT_CATEGORIES,
  AUDIT_META,
  averageScore,
  PERSONAS,
  PRIORITY_ACTIONS,
  SCORES,
  SECTION_MAP,
  VERDICT_COLORS,
  VERDICT_LABELS,
  WIREFRAME_ORDER,
  allAuditChecklistIds,
} from "@/lib/audit";

export const metadata: Metadata = {
  title: "Auditoria · gizpay.com.br",
  description:
    "Diagnóstico UX/UI e conversão do site atual da Giz Pay — o que manter, corrigir, cortar e adicionar no redesign.",
};

const toc = [
  { id: "resumo", label: "Resumo executivo" },
  { id: "personas", label: "Personas e objetivos" },
  { id: "mapa", label: "Mapa de seções" },
  { id: "scores", label: "Notas por dimensão" },
  { id: "achados", label: "Achados detalhados" },
  { id: "prioridades", label: "Prioridades P0–P2" },
  { id: "wireframe", label: "Próximo passo: Figma" },
];

const verdictIcon = {
  keep: Plus,
  fix: RefreshCw,
  cut: Scissors,
  add: Plus,
};

export default function AuditoriaPage() {
  const avg = averageScore();
  const totalItems = allAuditChecklistIds().length;

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-6 sm:py-20">
      <Reveal>
        <header className="max-w-[62ch]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.16em] text-primary">
              Auditoria · {AUDIT_META.date}
            </span>
            <AuditProgress total={totalItems} />
          </div>
          <h1 className="mt-3 font-display text-[38px] font-semibold leading-[1.06] tracking-tight sm:text-[54px]">
            Diagnóstico do gizpay.com.br
          </h1>
          <p className="mt-5 text-lg leading-[1.65] text-muted-foreground">
            Análise de conteúdo, UI, interação, mobile, conversão e SEO do site
            publicado. Base para wireframes no Figma e build no Framer. Nota
            geral: <strong className="text-foreground">{avg}/10</strong>.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild>
              <a href="#prioridades">Ver prioridades P0</a>
            </Button>
            <Button asChild variant="outline">
              <a href={AUDIT_META.site} target="_blank" rel="noopener noreferrer">
                Abrir site atual
                <ExternalLink className="size-3.5" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/prototipo">Ver protótipo</Link>
            </Button>
          </div>
        </header>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-[200px_1fr]">
        <aside className="hidden lg:block">
          <nav
            aria-label="Sumário da auditoria"
            className="sticky top-24 flex flex-col gap-1"
          >
            <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Nesta auditoria
            </p>
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0 space-y-16">
          <section id="resumo" className="scroll-mt-28">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Resumo executivo
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border bg-card p-5">
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-400">
                  O que funciona
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Proposta de valor clara no hero — caixa da escola vs. intermediário</li>
                  <li>Funil lógico: problema → solução → comparativo → calculadora → form</li>
                  <li>Calculadora personalizada — argumento financeiro forte</li>
                  <li>Mock do painel no hero — mostra produto, não só promessa</li>
                  <li>FAQ cobre as 5 objeções principais antes da demo</li>
                </ul>
              </article>
              <article className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
                <h3 className="font-semibold text-amber-800 dark:text-amber-400">
                  O que trava conversão
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Página longa demais — CTA primário some no scroll</li>
                  <li>Zero prova social real (cases, logos, depoimentos)</li>
                  <li>Repetição de copy (problema / comparativo / na prática)</li>
                  <li>Visual genérico SaaS — não explora identidade “Giz” + educação</li>
                  <li>Interatividade limitada à calculadora e modais</li>
                </ul>
              </article>
            </div>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Veredito:</strong> o site atual
              não precisa de nova oferta — precisa de <em>ritmo</em>,{" "}
              <em>identidade</em> e <em>interação</em>. O protótipo em{" "}
              <Link href="/prototipo" className="text-primary underline">
                /prototipo
              </Link>{" "}
              implementa várias correções P0/P1; use esta auditoria para validar
              no Figma o que ainda falta antes de publicar.
            </p>
          </section>

          <section id="personas" className="scroll-mt-28">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Personas e objetivos
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Objetivo #1:{" "}
              <strong className="text-foreground">{AUDIT_META.primaryGoal}</strong>.
              Objetivo #2: {AUDIT_META.secondaryGoal}.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {PERSONAS.map((p) => (
                <article key={p.role} className="rounded-xl border bg-card p-4">
                  <p className="font-semibold">{p.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Precisa: </span>
                    {p.need}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Dor: </span>
                    {p.pain}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="mapa" className="scroll-mt-28">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Mapa de seções (site atual)
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              13 blocos na homepage — ordem observada em agosto/2026.
            </p>
            <ol className="mt-6 space-y-2">
              {SECTION_MAP.map((s) => (
                <li
                  key={s.order}
                  className="flex flex-wrap items-center gap-3 rounded-lg border bg-card px-4 py-3 text-sm"
                >
                  <span className="font-mono text-xs text-primary">
                    {String(s.order).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-medium">{s.name}</span>
                  {s.hasCta ? (
                    <Badge variant="secondary">CTA</Badge>
                  ) : (
                    <Badge variant="outline">Informativo</Badge>
                  )}
                </li>
              ))}
            </ol>
          </section>

          <section id="scores" className="scroll-mt-28">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Notas por dimensão
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {Object.values(SCORES).map((s) => (
                <div key={s.label} className="rounded-xl border bg-card p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="font-medium">{s.label}</p>
                    <p className="font-display text-2xl font-semibold text-primary">
                      {s.score}
                    </p>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${s.score * 10}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{s.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="achados" className="scroll-mt-28">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Achados detalhados
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Marque cada achado como lido — progresso salvo no navegador.
            </p>
            <div className="mt-8 space-y-12">
              {AUDIT_CATEGORIES.map((cat) => (
                <div key={cat.id}>
                  <h3 className="font-display text-xl font-semibold">{cat.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                    {cat.summary}
                  </p>
                  <ul className="mt-6 space-y-4">
                    {cat.items.map((item) => {
                      const Icon = verdictIcon[item.verdict];
                      return (
                        <li
                          key={item.id}
                          className="rounded-2xl border bg-card p-5 shadow-sm"
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${VERDICT_COLORS[item.verdict]}`}
                            >
                              <Icon className="size-3" aria-hidden="true" />
                              {VERDICT_LABELS[item.verdict]}
                            </span>
                            <span className="text-sm font-medium">{item.section}</span>
                            <Badge variant="outline" className="text-[10px]">
                              impacto {item.impact}
                            </Badge>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed">{item.finding}</p>
                          <p className="mt-2 text-sm leading-relaxed text-primary/90">
                            <strong>→ </strong>
                            {item.recommendation}
                          </p>
                          <AuditItemCheck
                            id={item.id}
                            label="Marcar achado como revisado"
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="prioridades" className="scroll-mt-28">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Prioridades P0 → P2
            </h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50 text-left">
                    <th className="px-4 py-3 font-semibold">Prioridade</th>
                    <th className="px-4 py-3 font-semibold">Ação</th>
                    <th className="px-4 py-3 font-semibold">Por quê</th>
                  </tr>
                </thead>
                <tbody>
                  {PRIORITY_ACTIONS.map((row) => (
                    <tr key={row.action} className="border-b last:border-0">
                      <td className="px-4 py-3 font-mono font-bold text-primary">
                        {row.priority}
                      </td>
                      <td className="px-4 py-3 font-medium">{row.action}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section
            id="wireframe"
            className="scroll-mt-28 rounded-2xl border border-primary/25 bg-accent/30 p-6 sm:p-8"
          >
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Próximo passo: wireframe no Figma
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Use esta ordem de frames no arquivo{" "}
              <code className="text-sm">Giz Pay — Redesign</code>. Mobile primeiro
              (390px), depois desktop (1440px).
            </p>
            <ol className="mt-6 grid gap-2 sm:grid-cols-2">
              {WIREFRAME_ORDER.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-3 rounded-lg border bg-background/80 px-4 py-3 text-sm"
                >
                  <span className="font-mono text-xs font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/wireframes">
                  Abrir spec wireframes
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/site">Testar site local</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
