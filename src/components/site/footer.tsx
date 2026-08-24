import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-ink-foreground/10 bg-ink py-12 text-ink-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div className="max-w-xs">
            <Logo dark />
            <p className="mt-3 text-sm leading-relaxed text-ink-foreground/60">
              Gestão financeira escolar sem intermediários. Cobrança automática, liquidação
              direto na conta da escola.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div className="flex flex-col gap-2.5">
              <p className="font-semibold">Plataforma</p>
              <a href="#como-funciona" className="text-ink-foreground/60 transition-colors hover:text-ink-foreground">
                Como funciona
              </a>
              <a href="#modulos" className="text-ink-foreground/60 transition-colors hover:text-ink-foreground">
                Módulos
              </a>
              <a href="#comparativo" className="text-ink-foreground/60 transition-colors hover:text-ink-foreground">
                Comparativo
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="font-semibold">Contato</p>
              <a
                href="https://wa.me/5511980448792"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-foreground/60 transition-colors hover:text-ink-foreground"
              >
                WhatsApp comercial
              </a>
              <a
                href="mailto:contato.gizpay@gmail.com"
                className="text-ink-foreground/60 transition-colors hover:text-ink-foreground"
              >
                contato.gizpay@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="font-semibold">Aprenda</p>
              <Link href="/aula" className="text-ink-foreground/60 transition-colors hover:text-ink-foreground">
                Aula de UI/UX e front-end
              </Link>
              <a href="#seguranca" className="text-ink-foreground/60 transition-colors hover:text-ink-foreground">
                Segurança e LGPD
              </a>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink-foreground/10 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Giz Pay · Redesign conceitual para fins de estudo.</p>
          <p>Feito como projeto prático da aula de UI/UX, web e front-end.</p>
        </div>
      </div>
    </footer>
  );
}
