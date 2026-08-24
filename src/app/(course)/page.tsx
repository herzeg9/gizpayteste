import Link from "next/link";
import { ArrowRight, Clapperboard, LayoutTemplate, PencilRuler } from "lucide-react";
import { lessons } from "@/lib/course";
import { ProgressBar } from "@/components/course/progress";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div>
      <p className="font-mono text-xs tracking-widest text-primary uppercase">
        Curso · 8 aulas · Frame.io
      </p>
      <h1 className="font-display mt-3 max-w-3xl text-4xl leading-[1.12] sm:text-6xl">
        O básico de UI, UX e front-end — praticado no redesenho da Giz Pay.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Você não vai decorar jargão. Vai gravar a aula no Frame.io, auditar o
        gizpay.com.br e operar o site novo: mais interativo, mais claro para
        direção, tesouraria e secretaria, feito para captar demonstrações.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" render={<Link href="/aula/territorio" />}>
          Começar a aula 01
          <ArrowRight />
        </Button>
        <Button size="lg" variant="outline" render={<Link href="/gizpay" />}>
          Abrir o site redesenhado
        </Button>
      </div>
      <div className="mt-10 max-w-md">
        <ProgressBar total={lessons.length} />
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        <Card
          icon={<PencilRuler className="size-5" />}
          title="Teoria aplicada"
          body="UI, UX, hierarquia, jornada, HTML/CSS e conversão — sempre com a Giz Pay como caso."
        />
        <Card
          icon={<LayoutTemplate className="size-5" />}
          title="Site do zero"
          body="Homepage nova em /gizpay: painel vivo, calculadora, portal clicável e form com estado de sucesso."
        />
        <Card
          icon={<Clapperboard className="size-5" />}
          title="Pronto para Frame.io"
          body="Locução com timecode, CSV de marcadores, hashtags e protocolo de V1/V2/V3."
        />
      </div>

      <ol className="mt-14 divide-y divide-border rounded-2xl border border-border bg-card">
        {lessons.map((lesson) => (
          <li key={lesson.slug}>
            <Link
              href={`/aula/${lesson.slug}`}
              className="flex flex-col gap-2 px-5 py-4 transition-colors hover:bg-accent/40 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-mono text-[11px] text-primary">Aula {lesson.number}</p>
                <p className="text-base font-medium">{lesson.title}</p>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                  {lesson.objective}
                </p>
              </div>
              <p className="font-mono text-xs text-muted-foreground">{lesson.duration}</p>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Card({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <div className="text-primary">{icon}</div>
      <h2 className="mt-3 font-medium">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}
