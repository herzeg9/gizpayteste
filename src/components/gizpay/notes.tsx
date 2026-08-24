"use client";

import { createContext, useContext, type ReactNode } from "react";
import { designNotes, type DesignNote } from "@/components/gizpay/data";

const NotesCtx = createContext({
  on: false,
  notes: designNotes,
});

export function NotesProvider({
  on,
  children,
}: {
  on: boolean;
  children: ReactNode;
}) {
  return <NotesCtx.Provider value={{ on, notes: designNotes }}>{children}</NotesCtx.Provider>;
}

export function useNotes() {
  return useContext(NotesCtx);
}

export function NotePin({ id }: { id: string }) {
  const { on, notes } = useNotes();
  const note = notes.find((n) => n.id === id);
  if (!on || !note) return null;
  return (
    <a
      href={`#nota-${note.id}`}
      className="absolute -right-2 -top-2 z-20 flex size-7 items-center justify-center rounded-full bg-brick text-[11px] font-semibold text-white shadow-md ring-2 ring-paper"
      title={note.title}
    >
      {note.n}
    </a>
  );
}

export function NotesLegend({ notes }: { notes: DesignNote[] }) {
  return (
    <aside className="border-t border-border bg-[#fff7ea] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-medium tracking-widest text-brick uppercase">
          Modo aula · decisões de design
        </p>
        <h2 className="font-display mt-2 text-3xl text-board">Por que cada bloco existe</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {notes.map((note) => (
            <li
              id={`nota-${note.id}`}
              key={note.id}
              className="scroll-mt-24 rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-7 items-center justify-center rounded-full bg-brick text-xs font-semibold text-white">
                  {note.n}
                </span>
                <div>
                  <p className="font-medium">{note.title}</p>
                  <p className="text-xs text-muted-foreground">{note.lesson}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{note.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
