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
