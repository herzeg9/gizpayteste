import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Clock, Target } from "lucide-react";
import { allLessons, getLesson, getLessonNeighbours } from "@/content";
import { Blocks } from "@/components/blocks";
import { LessonSidebar } from "@/components/lesson-sidebar";
import { LessonComplete } from "@/components/lesson-complete";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return allLessons.map((lesson) => ({ slug: lesson.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/aula/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return {};
  return {
    title: `${lesson.number} ${lesson.title}`,
    description: lesson.subtitle,
  };
}

export default async function LessonPage({ params }: PageProps<"/aula/[slug]">) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  const { previous, next, index } = getLessonNeighbours(slug);

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-10 sm:px-6 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-[248px_minmax(0,1fr)] lg:gap-12">
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <LessonSidebar current={slug} />
          </div>
        </aside>

        <article>
          <header className="border-b border-border pb-8">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              <Link
                href="/#trilhas"
                className="transition-colors hover:text-foreground"
              >
                Trilha {lesson.track.number} · {lesson.track.title}
              </Link>
              <span className="text-border">/</span>
              <span className="font-mono text-primary">{lesson.number}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3" />
                {lesson.minutes} min
              </span>
              <span className="font-mono">
                {String(index + 1).padStart(2, "0")}/{allLessons.length}
              </span>
            </div>

            <h1 className="mt-4 max-w-[20ch] font-display text-[34px] font-semibold leading-[1.08] tracking-tight sm:text-[46px]">
              {lesson.title}
            </h1>
            <p className="mt-4 max-w-[62ch] text-lg leading-[1.6] text-muted-foreground">
              {lesson.subtitle}
            </p>

            <div className="mt-7 grid gap-2 rounded-[14px] border border-border bg-secondary/40 p-5">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <Target className="size-3.5 text-primary" />
                Ao final desta aula você vai conseguir
              </p>
              <ul className="grid gap-1.5">
                {lesson.goals.map((goal) => (
                  <li
                    key={goal}
                    className="flex gap-2.5 text-[15px] leading-[1.6] text-foreground"
                  >
                    <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-primary" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <div className="py-9">
            <Blocks blocks={lesson.blocks} />
          </div>

          <section className="grid gap-3 rounded-[16px] border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-primary">
              Resumo da aula
            </p>
            <ul className="grid gap-2">
              {lesson.takeaways.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] leading-[1.65] text-foreground"
                >
                  <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-6">
            <LessonComplete slug={lesson.slug} />
          </div>

          <nav className="mt-8 grid gap-3 sm:grid-cols-2">
            {previous ? (
              <Button
                asChild
                variant="outline"
                className="h-auto justify-start gap-3 whitespace-normal px-5 py-4 text-left"
              >
                <Link href={`/aula/${previous.slug}`}>
                  <ArrowLeft className="size-4 shrink-0 text-muted-foreground" />
                  <span className="grid gap-0.5">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {previous.number} · anterior
                    </span>
                    <span className="text-sm">{previous.title}</span>
                  </span>
                </Link>
              </Button>
            ) : (
              <span />
            )}
            {next ? (
              <Button
                asChild
                variant="outline"
                className="h-auto justify-end gap-3 whitespace-normal px-5 py-4 text-right sm:col-start-2"
              >
                <Link href={`/aula/${next.slug}`}>
                  <span className="grid gap-0.5">
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {next.number} · próxima
                    </span>
                    <span className="text-sm">{next.title}</span>
                  </span>
                  <ArrowRight className="size-4 shrink-0 text-primary" />
                </Link>
              </Button>
            ) : (
              <Button asChild className="h-auto px-5 py-4 sm:col-start-2">
                <Link href="/prototipo">
                  Ver o protótipo da Giz Pay
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            )}
          </nav>
        </article>
      </div>
    </div>
  );
}
