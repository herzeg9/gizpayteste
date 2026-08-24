import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  DESIGN_TOKENS_FIGMA,
  FIGMA_SETUP,
  WIREFRAME_FILE,
  WIREFRAME_FRAMES,
} from "@/lib/wireframes";

export const metadata: Metadata = {
  title: "Wireframes · Giz Pay Redesign",
  description:
    "Especificação frame a frame para montar os wireframes no Figma — alinhada ao site local em /site.",
};

export default function WireframesPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-6 sm:py-20">
      <Reveal>
        <header className="max-w-[62ch]">
          <span className="text-[11px] uppercase tracking-[0.16em] text-primary">
            Figma · Wireframes
          </span>
          <h1 className="mt-3 font-display text-[38px] font-semibold leading-[1.06] tracking-tight sm:text-[54px]">
            Wireframes do redesign Giz Pay
          </h1>
          <p className="mt-5 text-lg leading-[1.65] text-muted-foreground">
            14 frames na ordem da homepage. Mobile primeiro (390px), depois desktop
            (1440px). Cada frame corresponde a uma seção do site local em{" "}
            <Link href="/site" className="font-medium text-primary underline">
              /site
            </Link>
            .
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/site">
                Abrir site local
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/auditoria">Ver auditoria</Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://figma.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir Figma
                <ExternalLink className="size-3.5" />
              </a>
            </Button>
          </div>
        </header>
      </Reveal>

      <Reveal delay={60}>
        <section className="mt-16 rounded-2xl border bg-card p-6">
          <h2 className="font-display text-xl font-semibold">Setup no Figma</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Arquivo: <strong className="text-foreground">{WIREFRAME_FILE}</strong>
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            {FIGMA_SETUP.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold">Design tokens</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border p-5">
              <h3 className="text-sm font-semibold">Cores</h3>
              <ul className="mt-3 space-y-2">
                {DESIGN_TOKENS_FIGMA.cores.map((c) => (
                  <li key={c.name} className="flex items-center gap-3 text-sm">
                    <span
                      className="size-8 shrink-0 rounded-md border"
                      style={{ background: c.hex }}
                    />
                    <span>
                      <code className="text-primary">{c.name}</code> · {c.hex} — {c.uso}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border p-5">
              <h3 className="text-sm font-semibold">Tipografia</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {DESIGN_TOKENS_FIGMA.tipografia.map((t) => (
                  <li key={t.role}>
                    <strong className="text-foreground">{t.role}:</strong> {t.font},{" "}
                    {t.size}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                Escala 8pt: {DESIGN_TOKENS_FIGMA.espacamento.join(", ")}px
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="mt-16 space-y-6">
        <h2 className="font-display text-2xl font-semibold">Frames (14)</h2>
        {WIREFRAME_FRAMES.map((frame, i) => (
          <Reveal key={frame.id} delay={i * 30}>
            <article
              id={frame.id}
              className="scroll-mt-28 rounded-2xl border bg-card p-6"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-xs font-bold text-primary">
                  {String(frame.order).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-semibold">{frame.name}</h3>
                <code className="text-xs text-muted-foreground">{frame.figmaLayer}</code>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{frame.notes}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span>
                  Mobile: {frame.mobile.w}×{frame.mobile.h}px
                </span>
                <span>
                  Desktop: {frame.desktop.w}×{frame.desktop.h}px
                </span>
              </div>
              <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
                {frame.blocks.map((block) => (
                  <li
                    key={block}
                    className="flex items-start gap-2 rounded-md bg-muted/50 px-3 py-2 text-sm"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {block}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="mt-16 rounded-2xl border border-primary/25 bg-accent/30 p-6">
          <h2 className="font-display text-xl font-semibold">Depois do wireframe</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Duplicar frames para high-fidelity na página 🎨 Design</li>
            <li>Protótipo clicável no Figma (links de nav + CTAs)</li>
            <li>Recriar interações no Framer ou validar em /site neste repo</li>
            <li>Commit + push para GitHub — clone local para testes da equipe</li>
          </ol>
          <Button asChild className="mt-6">
            <Link href="/site">Testar implementação local</Link>
          </Button>
        </section>
      </Reveal>
    </div>
  );
}
