import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import {
  FIGMA_FRAMER_OVERVIEW,
  GLOSSARY,
  LESSON_BLOCKS,
  TOOL_MATRIX,
} from "@/lib/figma-framer";

export const metadata: Metadata = {
  title: "Script completo · Figma + Framer",
  description:
    "Roteiro de ~90 minutos: UI/UX, front-end e redesign Giz Pay com Figma e Framer.",
};

export default function FigmaFramerPage() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Voltar para o redesign">
            <Logo />
          </Link>
          <Button variant="outline" asChild>
            <Link href="/aula">
              <ArrowLeft data-slot="icon" />
              Módulos da aula
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <div className="dotted-bg border-b">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="mb-3 text-sm font-bold tracking-widest text-primary uppercase">
              Script · {FIGMA_FRAMER_OVERVIEW.duration}
            </p>
            <h1 className="mb-5 max-w-3xl font-display text-4xl leading-[1.1] font-semibold text-balance sm:text-5xl">
              UI/UX, front-end, Figma e Framer
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Roteiro completo para aprender o básico e aplicar no redesign do{" "}
              <a
                href="https://gizpay.com.br"
                className="font-medium text-primary underline underline-offset-4"
              >
                gizpay.com.br
              </a>
              . Versão exportável em{" "}
              <code className="text-sm">docs/aula-ui-ux-framer-figma.md</code>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#abertura">Começar o script</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Ver o redesign</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8">
          <section className="rounded-2xl border bg-card p-6">
            <h2 className="font-display text-xl font-semibold">Como ler</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">FALA</strong> — texto para gravar ou estudar.
              </li>
              <li>
                <strong className="text-foreground">NOTA</strong> — contexto extra.
              </li>
              <li>
                <strong className="text-foreground">EXERCÍCIO</strong> — pause e pratique no Figma
                ou Framer.
              </li>
            </ul>
          </section>

          <ol className="mt-12 space-y-12">
            {LESSON_BLOCKS.map((block, index) => (
              <li
                key={block.id}
                id={block.id}
                className="scroll-mt-24 border-t pt-12 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-primary">
                    Bloco {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{block.duration}</span>
                </div>
                <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
                  {block.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {block.fala.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="leading-relaxed text-foreground/90">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {block.nota ? (
                  <p className="mt-4 border-l-2 border-primary/40 pl-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">NOTA: </span>
                    {block.nota}
                  </p>
                ) : null}
                {block.exercicio ? (
                  <div className="mt-6 rounded-xl border border-primary/20 bg-accent/50 p-5">
                    <p className="text-sm font-semibold">
                      EXERCÍCIO · {block.exercicio.title}
                    </p>
                    <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                      {block.exercicio.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ) : null}
              </li>
            ))}
          </ol>

          <section className="mt-16">
            <h2 className="font-display text-2xl font-semibold">Glossário</h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {GLOSSARY.map((item) => (
                <div key={item.term} className="rounded-xl border bg-card px-4 py-3">
                  <dt className="font-mono text-sm font-bold text-primary">{item.term}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{item.def}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold">Figma vs Framer vs código</h2>
            <div className="mt-4 overflow-x-auto rounded-2xl border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50 text-left">
                    <th className="px-4 py-3 font-semibold">Tarefa</th>
                    <th className="px-4 py-3 font-semibold">Ferramenta</th>
                  </tr>
                </thead>
                <tbody>
                  {TOOL_MATRIX.map((row) => (
                    <tr key={row.task} className="border-b last:border-0">
                      <td className="px-4 py-3">{row.task}</td>
                      <td className="px-4 py-3 font-mono text-primary">{row.tool}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
