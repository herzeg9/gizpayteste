"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { tracks } from "@/content";
import { useProgress } from "@/lib/use-progress";
import { cn } from "@/lib/utils";

export function LessonSidebar({ current }: { current: string }) {
  const { completed, ready } = useProgress();

  return (
    <nav
      aria-label="Aulas do curso"
      className="grid gap-6 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-3 scrollbar-slim"
    >
      {tracks.map((track) => (
        <div key={track.id}>
          <p className="mb-2 flex items-center gap-2 px-2 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            <span className="font-mono text-primary">{track.number}</span>
            {track.title}
          </p>
          <ul className="grid gap-0.5">
            {track.lessons.map((lesson) => {
              const active = lesson.slug === current;
              const done = ready && completed.includes(lesson.slug);
              return (
                <li key={lesson.slug}>
                  <Link
                    href={`/aula/${lesson.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-start gap-2.5 rounded-lg px-2 py-2 text-[13px] leading-snug transition-colors",
                      active
                        ? "bg-primary/12 text-foreground"
                        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border",
                        done
                          ? "border-primary bg-primary text-primary-foreground"
                          : active
                            ? "border-primary/60"
                            : "border-border",
                      )}
                    >
                      {done ? <Check className="size-2.5" /> : null}
                    </span>
                    <span className="font-mono text-[11px] tabular-nums opacity-70">
                      {lesson.number}
                    </span>
                    <span className="flex-1">{lesson.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
