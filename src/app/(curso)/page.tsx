import Link from "next/link";
import { ArrowRight, BookOpen, MousePointerClick, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrackList } from "@/components/track-list";
import { Reveal } from "@/components/reveal";
import { totalLessons, totalMinutes, tracks } from "@/content";

const PILLARS = [
  {
    icon: BookOpen,
    title: "Teoria que cabe na prática",
    text: "Cada conceito vem com a decisão que ele muda em uma tela real. Nada de história do design ou lista de ferramentas.",
  },
  {
    icon: MousePointerClick,
    title: "Dez demonstrações interativas",
    text: "Escala de espaçamento, contraste WCAG, Flexbox, sizing do Framer, variantes de componente. Você mexe e vê o efeito.",
  },
  {
    icon: Rocket,
    title: "Um projeto real do começo ao fim",
    text: "Diagnóstico, briefing, wireframe, design system, copy e build da nova home da Giz Pay — com o protótipo navegável ao lado.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="grid-backdrop pointer-events-none absolute inset-0 opacity-60"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 size-[620px] -translate-x-1/2 rounded-full bg-primary/12 blur-[130px]"
        />

        <div className="relative mx-auto w-full max-w-[1200px] px-5 py-20 sm:px-6 sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
              <span className="size-1.5 rounded-full bg-primary" />
              Curso-roteiro · português · Framer
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 max-w-[16ch] font-display text-[42px] font-semibold leading-[1.04] tracking-tight text-balance-tight sm:text-[64px] lg:text-[76px]">
              Aprenda a desenhar sites que{" "}
              <span className="text-primary">captam clientes</span>.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-[58ch] text-lg leading-[1.65] text-muted-foreground">
              Fundamentos de UI/UX, como a web realmente funciona e o fluxo de
              trabalho completo no Framer — tudo aplicado a um trabalho de
              verdade: repaginar o site da{" "}
              <a
                href="https://gizpay.com.br"
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
              >
                Giz Pay
              </a>{" "}
              do zero.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="text-[15px]">
                <Link href="/aula/ui-ux-e-por-que-sites-nao-convertem">
                  Começar pela aula 1.1
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-[15px]">
                <Link href="/prototipo">Ver o protótipo da Giz Pay</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {[
                [tracks.length, "trilhas"],
                [totalLessons, "aulas"],
                [`${Math.round(totalMinutes / 60)}h`, "de leitura"],
                ["10", "demos interativas"],
              ].map(([value, label]) => (
                <div key={label as string}>
                  <dt className="font-mono text-3xl font-medium tabular-nums text-primary">
                    {value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.1em] text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-4 sm:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 70}>
                <article className="h-full rounded-[18px] border border-border bg-card p-6">
                  <Icon className="size-5 text-primary" />
                  <h2 className="mt-4 font-display text-xl font-semibold tracking-tight">
                    {pillar.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.65] text-muted-foreground">
                    {pillar.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section
        id="trilhas"
        className="mx-auto w-full max-w-[1200px] px-5 pb-8 sm:px-6"
      >
        <Reveal>
          <div className="mb-8 max-w-[54ch]">
            <span className="text-[11px] uppercase tracking-[0.14em] text-primary">
              O programa
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-[40px]">
              Cinco trilhas, na ordem em que um projeto acontece.
            </h2>
            <p className="mt-3 text-[16px] leading-[1.68] text-muted-foreground">
              Comece pela primeira e siga em sequência. As trilhas 01 a 04 dão
              o vocabulário; a trilha 05 é o trabalho real, com o diagnóstico do
              site atual da Giz Pay e o passo a passo do repaginamento.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <TrackList />
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[22px] border border-primary/25 bg-card p-7 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 size-[320px] rounded-full bg-primary/12 blur-[100px]"
            />
            <div className="relative grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <span className="text-[11px] uppercase tracking-[0.14em] text-primary">
                  Trilha 05 · o trabalho real
                </span>
                <h2 className="mt-3 max-w-[20ch] font-display text-3xl font-semibold leading-tight tracking-tight sm:text-[42px]">
                  Repaginar a Giz Pay, do diagnóstico ao site no ar.
                </h2>
                <p className="mt-4 max-w-[54ch] text-[16px] leading-[1.68] text-muted-foreground">
                  Auditoria heurística do site atual, briefing aprovável,
                  wireframe das treze seções da nova home, design system com
                  contraste verificado, copy pronta seção por seção e a ordem de
                  execução dentro do Framer — incluindo a calculadora em código.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="/projeto">
                      Ver o plano do projeto
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/prototipo">Abrir o protótipo</Link>
                  </Button>
                </div>
              </div>

              <ul className="grid gap-2">
                {[
                  "Diagnóstico com nota por dimensão",
                  "Briefing de uma página, pronto para aprovar",
                  "Wireframe da home em baixa fidelidade",
                  "Tokens e dez componentes especificados",
                  "Copy final de cada seção",
                  "Checklist de lançamento em doze pontos",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-[10px] border border-border bg-background/60 px-4 py-3 text-sm text-muted-foreground"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
