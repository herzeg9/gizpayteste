import Link from "next/link";
import { notFound } from "next/navigation";
import { adjacentLessons, getLesson, lessons } from "@/lib/course";
import { ScriptStudio } from "@/components/course/script-studio";
import { CompleteLesson } from "@/components/course/progress";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return {};
  return { title: `Aula ${lesson.number} · ${lesson.title}` };
}

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();
  const { prev, next } = adjacentLessons(slug);

  return (
    <>
      <p className="font-mono text-xs tracking-widest text-primary uppercase">
        Aula {lesson.number} · {lesson.duration}
      </p>
      <h1 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
        {lesson.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        {lesson.objective}
      </p>
      <div className="mt-6">
        <CompleteLesson slug={slug} />
      </div>

      <section className="mt-10">
        <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Nesta aula você
        </h2>
        <ul className="mt-3 space-y-2">
          {lesson.youWill.map((item) => (
            <li key={item} className="flex gap-2 text-sm leading-relaxed">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 space-y-8">
        {lesson.theory.map((block) => (
          <article key={block.heading}>
            <h2 className="font-display text-2xl">{block.heading}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/90">
              {block.body}
            </p>
            {block.callout ? (
              <p className="mt-4 border-l-2 border-primary pl-4 text-sm text-primary/90">
                {block.callout}
              </p>
            ) : null}
          </article>
        ))}
      </section>

      <section className="mt-12 rounded-2xl border border-primary/20 bg-accent/40 p-6">
        <h2 className="font-display text-2xl">Na Giz Pay</h2>
        <div className="mt-4 space-y-4">
          {lesson.gizpay.map((block) => (
            <div key={block.heading}>
              <h3 className="text-sm font-medium">{block.heading}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {block.body}
              </p>
            </div>
          ))}
        </div>
        <Button className="mt-5" render={<Link href="/gizpay" />}>
          Abrir o site redesenhado
        </Button>
      </section>

      <div className="mt-12">
        <ScriptStudio lesson={lesson} />
      </div>

      <section className="mt-12 rounded-2xl border border-border bg-card p-6">
        <p className="text-xs font-medium tracking-widest text-primary uppercase">
          Exercício · Frame.io
        </p>
        <h2 className="mt-2 font-display text-2xl">{lesson.exercise.title}</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          {lesson.exercise.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          Entrega: {lesson.exercise.deliverable}
        </p>
      </section>

      <nav className="mt-12 flex flex-wrap justify-between gap-3">
        {prev ? (
          <Button variant="outline" render={<Link href={`/aula/${prev.slug}`} />}>
            ← {prev.number} {prev.title}
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button render={<Link href={`/aula/${next.slug}`} />}>
            {next.number} {next.title} →
          </Button>
        ) : (
          <Button render={<Link href="/gizpay" />}>Ir ao site novo →</Button>
        )}
      </nav>
    </>
  );
}
