import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { Toc, type TocItem } from "@/components/aula/toc";
import { Modulo0 } from "@/components/aula/modulo-0";
import { Modulo1 } from "@/components/aula/modulo-1";
import { Modulo2 } from "@/components/aula/modulo-2";
import { Modulo3 } from "@/components/aula/modulo-3";
import { Modulo4 } from "@/components/aula/modulo-4";
import { Modulo5 } from "@/components/aula/modulo-5";
import { Modulo6 } from "@/components/aula/modulo-6";
import { Modulo7 } from "@/components/aula/modulo-7";

export const metadata: Metadata = {
  title: "Aula: UI/UX, web e front-end na prática — projeto GizPay",
  description:
    "Curso completo em 7 módulos: fundamentos de UI/UX, como um site funciona, front-end, Framer na prática e o repaginamento guiado do gizpay.com.br.",
};

const toc: TocItem[] = [
  { id: "modulo-0", label: "0 · A ferramenta certa" },
  { id: "modulo-1", label: "1 · Fundamentos de UI/UX" },
  { id: "modulo-2", label: "2 · Como um site funciona" },
  { id: "modulo-3", label: "3 · Front-end na prática" },
  { id: "modulo-4", label: "4 · Framer na prática" },
  { id: "modulo-5", label: "5 · UX que converte" },
  { id: "modulo-6", label: "6 · Projeto: repaginando a GizPay" },
  { id: "modulo-7", label: "7 · Para continuar" },
];

export default function AulaPage() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Voltar para o redesign">
            <Logo />
          </Link>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft data-slot="icon" />
              Ver o redesign
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <div className="dotted-bg border-b">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="mb-3 text-sm font-bold tracking-widest text-primary uppercase">
              Aula completa · 7 módulos
            </p>
            <h1 className="mb-5 max-w-3xl font-display text-4xl leading-[1.1] font-semibold text-balance sm:text-5xl">
              UI/UX, desenvolvimento web e front-end — do zero ao repaginamento da GizPay.
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Tudo o que você precisa saber para projetar e publicar um site profissional com{" "}
              <strong>Figma</strong> e <strong>Framer</strong>: fundamentos de design, como a web
              funciona, a ferramenta na prática e um projeto guiado de ponta a ponta — cujo
              resultado você pode navegar na{" "}
              <Link href="/" className="font-medium text-primary underline underline-offset-4">
                página inicial deste projeto
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/aula/figma-framer">
                  Script completo Figma + Framer
                  <ArrowRight data-slot="icon" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#modulo-0">
                  Módulos curtos (7×)
                  <ArrowRight data-slot="icon" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <Toc items={toc} />
            </div>
          </aside>

          <div className="min-w-0">
            <Modulo0 />
            <Modulo1 />
            <Modulo2 />
            <Modulo3 />
            <Modulo4 />
            <Modulo5 />
            <Modulo6 />
            <Modulo7 />

            <div className="mt-4 rounded-2xl bg-ink p-8 text-center text-ink-foreground sm:p-10">
              <h2 className="mb-3 font-display text-2xl font-semibold sm:text-3xl">
                Aula concluída. Agora, mão no giz.
              </h2>
              <p className="mx-auto mb-6 max-w-xl text-ink-foreground/70">
                Abra a Framer, siga os 9 passos do módulo 6 e compare o seu resultado com o
                redesign de referência. Design se aprende construindo.
              </p>
              <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/">
                  Explorar o redesign de referência
                  <ArrowRight data-slot="icon" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-8">
        <p className="text-center text-sm text-muted-foreground">
          Material de estudo · Projeto prático baseado no gizpay.com.br
        </p>
      </footer>
    </>
  );
}
