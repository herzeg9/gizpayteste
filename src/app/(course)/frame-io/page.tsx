import { FRAME_HASHTAGS, FRAME_PROTOCOL, FRAME_ROUNDS, PROJECT_TREE } from "@/lib/frameio";
import { allMarkers, lessons } from "@/lib/course";
import { MarkersExport } from "@/components/course/markers-export";

export const metadata = {
  title: "Estúdio Frame.io",
};

export default function FramePage() {
  const markers = allMarkers();

  return (
    <div>
      <p className="font-mono text-xs tracking-widest text-primary uppercase">
        Produção · Frame.io V4
      </p>
      <h1 className="font-display mt-3 text-4xl sm:text-5xl">
        Como gravar e revisar esta aula
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Frame.io é a mesa de montagem da aula: comentário no quadro, versão
        empilhada, share link. O roteiro de cada aula já nasce com timecode,
        locução e cards sugeridos.
      </p>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Árvore do projeto</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {PROJECT_TREE.map((folder) => (
            <article
              key={folder.folder}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <p className="font-mono text-sm text-primary">{folder.folder}/</p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {folder.files.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Protocolo de comentário</h2>
        <ol className="mt-4 space-y-2">
          {FRAME_PROTOCOL.map((rule, i) => (
            <li key={rule} className="flex gap-3 text-sm leading-relaxed">
              <span className="font-mono text-xs text-primary">{i + 1}</span>
              {rule}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Hashtags</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {FRAME_HASHTAGS.map((h) => (
            <li
              key={h.tag}
              className="rounded-xl border border-border bg-card px-4 py-3 text-sm"
            >
              <p className="font-mono text-primary">{h.tag}</p>
              <p className="mt-1 text-muted-foreground">{h.use}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Três rodadas</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {FRAME_ROUNDS.map((r) => (
            <article
              key={r.version}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="font-medium">{r.version}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.goal}</p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm">
                {r.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-display text-2xl">Marcadores de todas as aulas</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {markers.length} cards pré-escritos. Importe como referência de revisão
          ou copie para o primeiro take.
        </p>
        <MarkersExport />
        <ul className="mt-6 space-y-2">
          {lessons.map((l) => (
            <li key={l.slug} className="text-sm">
              <a className="text-primary hover:underline" href={`/aula/${l.slug}`}>
                Aula {l.number} · {l.title}
              </a>
              <span className="text-muted-foreground">
                {" "}
                · {l.duration} ·{" "}
                {l.scenes.reduce((n, s) => n + s.comments.length, 0)} cards
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
