"use client";

import { useMemo, useState } from "react";
import { Check, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Lesson } from "@/lib/course";
import { markersToCsv } from "@/lib/frameio";

export function ScriptStudio({ lesson }: { lesson: Lesson }) {
  const [copied, setCopied] = useState<"vo" | "csv" | null>(null);

  const vo = useMemo(
    () =>
      lesson.scenes
        .map((s) => `[${s.in}–${s.out}]\n${s.vo}`)
        .join("\n\n"),
    [lesson],
  );

  const csv = useMemo(() => {
    const markers = lesson.scenes.flatMap((s) =>
      s.comments.map((c) => ({
        timecode: c.timecode,
        hashtag: c.hashtag,
        comment: `[${lesson.number}] ${c.text}`,
      })),
    );
    return markersToCsv(markers);
  }, [lesson]);

  function copy(kind: "vo" | "csv") {
    const text = kind === "vo" ? vo : csv;
    void navigator.clipboard.writeText(text);
    setCopied(kind);
    window.setTimeout(() => setCopied(null), 1600);
  }

  function downloadCsv() {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `frameio-aula-${lesson.number}-${lesson.slug}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="rounded-2xl border border-border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div>
          <p className="text-xs font-medium tracking-widest text-primary uppercase">
            Roteiro Frame.io
          </p>
          <p className="text-sm text-muted-foreground">
            Duração {lesson.duration} · locução + marcadores com timecode
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" onClick={() => copy("vo")}>
            {copied === "vo" ? <Check /> : <Copy />}
            Copiar locução
          </Button>
          <Button size="sm" variant="outline" onClick={() => copy("csv")}>
            {copied === "csv" ? <Check /> : <Copy />}
            Copiar CSV
          </Button>
          <Button size="sm" onClick={downloadCsv}>
            <Download />
            Baixar marcadores
          </Button>
        </div>
      </div>
      <Tabs defaultValue="cenas" className="p-4">
        <TabsList>
          <TabsTrigger value="cenas">Cenas</TabsTrigger>
          <TabsTrigger value="locucao">Locução contínua</TabsTrigger>
          <TabsTrigger value="comentarios">Comentários sugeridos</TabsTrigger>
        </TabsList>
        <TabsContent value="cenas" className="mt-4 space-y-4">
          {lesson.scenes.map((scene) => (
            <article
              key={scene.in}
              className="rounded-xl border border-border bg-background p-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-mono text-xs text-primary">
                  {scene.in} → {scene.out}
                </p>
                {scene.lowerThird ? (
                  <p className="text-xs text-muted-foreground">
                    Lower third: {scene.lowerThird}
                  </p>
                ) : null}
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Visual
              </p>
              <p className="mt-1 text-sm leading-relaxed">{scene.visual}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Locução
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">{scene.vo}</p>
            </article>
          ))}
        </TabsContent>
        <TabsContent value="locucao" className="mt-4">
          <pre className="whitespace-pre-wrap rounded-xl bg-background p-4 font-sans text-sm leading-relaxed">
            {vo}
          </pre>
        </TabsContent>
        <TabsContent value="comentarios" className="mt-4 space-y-2">
          {lesson.scenes.flatMap((scene) =>
            scene.comments.map((c) => (
              <div
                key={`${c.timecode}-${c.text}`}
                className="flex flex-wrap items-start gap-3 rounded-xl border border-border bg-background px-3 py-2 text-sm"
              >
                <span className="font-mono text-xs text-primary">{c.timecode}</span>
                <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[11px]">
                  {c.hashtag}
                </span>
                <p className="min-w-[200px] flex-1">{c.text}</p>
              </div>
            )),
          )}
          {lesson.scenes.every((s) => s.comments.length === 0) ? (
            <p className="text-sm text-muted-foreground">
              Sem comentários pré-anotados nesta aula. Use o protocolo da aula 08.
            </p>
          ) : null}
        </TabsContent>
      </Tabs>
    </section>
  );
}
