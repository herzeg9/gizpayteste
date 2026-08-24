"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/use-progress";
import { totalLessons } from "@/content";

export function LessonComplete({ slug }: { slug: string }) {
  const { completed, ready, toggle } = useProgress();
  const done = ready && completed.includes(slug);

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-[14px] border border-border bg-card px-5 py-4">
      <Button
        variant={done ? "outline" : "default"}
        onClick={() => toggle(slug)}
        className="gap-2"
      >
        <Check className="size-4" />
        {done ? "Aula concluída" : "Marcar como concluída"}
      </Button>
      <p className="text-sm text-muted-foreground">
        {ready ? (
          <>
            <span className="font-mono tabular-nums text-primary">
              {completed.length}
            </span>{" "}
            de {totalLessons} aulas concluídas
          </>
        ) : (
          "Seu progresso fica salvo neste navegador."
        )}
      </p>
    </div>
  );
}
