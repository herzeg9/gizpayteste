import type { ReactNode } from "react";
import { Check, Lightbulb, Pencil, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export function Modulo({
  id,
  numero,
  titulo,
  descricao,
  children,
}: {
  id: string;
  numero: string;
  titulo: string;
  descricao: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t py-14 first:border-t-0 first:pt-0">
      <p className="mb-2 text-sm font-bold tracking-widest text-primary uppercase">
        Módulo {numero}
      </p>
      <h2 className="mb-3 font-display text-3xl font-semibold text-balance sm:text-4xl">
        {titulo}
      </h2>
      <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{descricao}</p>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-6 font-display text-xl font-semibold first:mt-0 sm:text-2xl">{children}</h3>
  );
}

export function H4({ children }: { children: ReactNode }) {
  return <h4 className="mt-2 text-base font-bold">{children}</h4>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="max-w-3xl leading-relaxed text-foreground/85">{children}</p>;
}

export function Callout({
  tone = "tip",
  title,
  children,
}: {
  tone?: "tip" | "warn" | "info";
  title: string;
  children: ReactNode;
}) {
  const styles = {
    tip: "border-primary/25 bg-secondary/60",
    warn: "border-accent bg-accent/15",
    info: "border-border bg-muted/60",
  }[tone];
  const Icon = tone === "warn" ? TriangleAlert : Lightbulb;
  return (
    <aside className={cn("max-w-3xl rounded-xl border-l-4 border p-5", styles)}>
      <p className="mb-1.5 flex items-center gap-2 font-semibold">
        <Icon className="size-4.5 shrink-0" aria-hidden="true" />
        {title}
      </p>
      <div className="text-sm leading-relaxed text-foreground/80 [&>p+p]:mt-2">{children}</div>
    </aside>
  );
}

/** Lista de definições: termo em destaque + explicação. */
export function Termos({ items }: { items: { termo: string; def: ReactNode }[] }) {
  return (
    <dl className="grid max-w-3xl gap-3">
      {items.map((item) => (
        <div key={item.termo} className="rounded-xl border bg-card p-4">
          <dt className="mb-1 font-semibold text-primary">{item.termo}</dt>
          <dd className="text-sm leading-relaxed text-muted-foreground">{item.def}</dd>
        </div>
      ))}
    </dl>
  );
}

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="grid max-w-3xl gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 leading-relaxed">
          <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-secondary">
            <Check className="size-3.5 text-primary" aria-hidden="true" />
          </span>
          <span className="text-foreground/85">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Passo numerado do projeto prático. */
export function Passo({
  numero,
  titulo,
  children,
}: {
  numero: string;
  titulo: string;
  children: ReactNode;
}) {
  return (
    <div className="relative max-w-3xl border-l-2 border-primary/20 pb-2 pl-8 last:pb-0">
      <span className="absolute top-0 -left-[17px] grid size-8 place-items-center rounded-full border-2 border-primary/25 bg-background font-display text-sm font-bold text-primary">
        {numero}
      </span>
      <h4 className="mb-2 pt-0.5 text-lg font-bold">{titulo}</h4>
      <div className="flex flex-col gap-3 text-foreground/85 [&_p]:leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function TabelaSimples({
  colunas,
  linhas,
}: {
  colunas: string[];
  linhas: ReactNode[][];
}) {
  return (
    <div className="max-w-3xl overflow-x-auto rounded-xl border bg-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b bg-muted/60 text-left">
            {colunas.map((col) => (
              <th key={col} scope="col" className="px-4 py-3 font-semibold whitespace-nowrap">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {linhas.map((linha, i) => (
            <tr key={i} className="border-b align-top last:border-b-0">
              {linha.map((cel, j) => (
                <td
                  key={j}
                  className={cn(
                    "px-4 py-3 leading-relaxed",
                    j === 0 ? "font-medium" : "text-muted-foreground",
                  )}
                >
                  {cel}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Codigo({ children }: { children: string }) {
  return (
    <pre className="max-w-3xl overflow-x-auto rounded-xl bg-ink p-5 text-[13px] leading-relaxed text-ink-foreground">
      <code>{children}</code>
    </pre>
  );
}

export function Exercicio({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <div className="max-w-3xl rounded-xl border-2 border-dashed border-primary/30 bg-secondary/30 p-5">
      <p className="mb-2 flex items-center gap-2 text-sm font-bold tracking-wide text-primary uppercase">
        <Pencil className="size-4" aria-hidden="true" />
        Exercício · {titulo}
      </p>
      <div className="text-sm leading-relaxed text-foreground/85 [&>p+p]:mt-2">{children}</div>
    </div>
  );
}
