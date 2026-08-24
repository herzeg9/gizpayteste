"use client";

import { useSyncExternalStore } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  markComplete,
  markVisited,
  progressServerSnapshot,
  progressSnapshot,
  subscribeProgress,
} from "@/lib/progress";

function useProgress() {
  const raw = useSyncExternalStore(
    subscribeProgress,
    progressSnapshot,
    progressServerSnapshot,
  );
  return JSON.parse(raw) as { completed: string[]; lastSlug?: string };
}

export function CompleteLesson({ slug }: { slug: string }) {
  const progress = useProgress();
  const done = progress.completed.includes(slug);

  return (
    <Button
      variant={done ? "secondary" : "default"}
      onClick={() => {
        markVisited(slug);
        markComplete(slug);
      }}
    >
      {done ? <Check /> : null}
      {done ? "Aula concluída" : "Marcar como concluída"}
    </Button>
  );
}

export function ProgressBar({ total }: { total: number }) {
  const progress = useProgress();
  const count = progress.completed.length;
  const pct = Math.round((count / total) * 100);
  return (
    <div>
      <div className="mb-2 flex justify-between text-xs text-muted-foreground">
        <span>
          {count} de {total} aulas
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
