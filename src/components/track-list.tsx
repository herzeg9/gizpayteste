"use client";

import Link from "next/link";
import { Check, Clock } from "lucide-react";
import { tracks } from "@/content";
import { useProgress } from "@/lib/use-progress";
import { cn } from "@/lib/utils";

export function TrackList() {
  const { completed, ready } = useProgress();

  return (
    <div className="grid gap-4">
      {tracks.map((track) => {
        const done = track.lessons.filter((lesson) =>
          completed.includes(lesson.slug),
        ).length;
        const percent = Math.round((done / track.lessons.length) * 100);

        return (
          <section
            key={track.id}
            className="rounded-[18px] border border-border bg-card p-5 transition-colors hover:border-primary/25 sm:p-7"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-[52ch]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-primary">
                    {track.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {track.tagline}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-[28px]">
                  {track.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-muted-foreground">
                  {track.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                {ready && done > 0 ? (
                  <span className="font-mono text-xs tabular-nums text-primary">
                    {percent}%
                  </span>
                ) : null}
                <span className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                  <Clock className="size-3" />
                  {track.lessons.reduce((sum, l) => sum + l.minutes, 0)} min
                </span>
              </div>
            </div>

            <ol className="mt-5 grid gap-1.5">
              {track.lessons.map((lesson) => {
                const isDone = ready && completed.includes(lesson.slug);
                return (
                  <li key={lesson.slug}>
                    <Link
                      href={`/aula/${lesson.slug}`}
                      className="group flex items-center gap-3 rounded-[10px] border border-transparent px-3 py-2.5 transition-colors hover:border-border hover:bg-secondary/50"
                    >
                      <span
                        className={cn(
                          "grid size-5 shrink-0 place-items-center rounded-full border font-mono text-[9px] transition-colors",
                          isDone
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-muted-foreground",
                        )}
                      >
                        {isDone ? <Check className="size-3" /> : null}
                      </span>
                      <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                        {lesson.number}
                      </span>
                      <span
                        className={cn(
                          "flex-1 text-[15px] transition-colors",
                          isDone
                            ? "text-muted-foreground"
                            : "text-foreground group-hover:text-primary",
                        )}
                      >
                        {lesson.title}
                      </span>
                      <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
                        {lesson.minutes} min
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        );
      })}
    </div>
  );
}
