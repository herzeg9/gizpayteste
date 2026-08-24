import Link from "next/link";
import { audit } from "@/lib/audit";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Auditoria · gizpay.com.br",
};

export default function AuditPage() {
  return (
    <div>
      <p className="font-mono text-xs tracking-widest text-primary uppercase">
        {audit.url} · {audit.date}
      </p>
      <h1 className="font-display mt-3 text-4xl sm:text-5xl">
        Auditoria do site atual
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {audit.summary}
      </p>
      <div className="mt-6 flex gap-3">
        <Button render={<Link href="/aula/auditoria" />}>Aula 06</Button>
        <Button variant="outline" render={<Link href="/gizpay" />}>
          Site novo
        </Button>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Personas</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {audit.personas.map((p) => (
            <article key={p.name} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-medium">{p.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.school}</p>
              <p className="mt-3 text-sm">
                <span className="text-primary">Gatilho.</span> {p.trigger}
              </p>
              <p className="mt-2 text-sm">
                <span className="text-primary">Medo.</span> {p.fear}
              </p>
              <p className="mt-2 text-sm">
                <span className="text-primary">Trabalho.</span> {p.job}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <Column title="Manter" items={audit.keep} />
        <Column title="Cortar ou recuar" items={audit.cut} />
        <Column title="Inventar" items={audit.invent} />
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Heurísticas</h2>
        <ul className="mt-4 divide-y divide-border rounded-2xl border border-border bg-card">
          {audit.heuristics.map((h) => (
            <li key={h.name} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:justify-between">
              <div>
                <p className="font-medium">{h.name}</p>
                <p className="text-sm text-muted-foreground">{h.note}</p>
              </div>
              <span className="font-mono text-xs text-primary">{h.score}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Column({
  title,
  items,
}: {
  title: string;
  items: { title: string; detail: string }[];
}) {
  return (
    <section>
      <h2 className="font-display text-2xl">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.title} className="rounded-xl border border-border bg-card p-4">
            <p className="text-sm font-medium">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
