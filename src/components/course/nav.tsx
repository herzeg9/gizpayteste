import Link from "next/link";
import { lessons } from "@/lib/course";

export const navItems = [
  { href: "/", label: "Aulas" },
  { href: "/auditoria", label: "Auditoria" },
  { href: "/gizpay", label: "Site novo" },
  { href: "/frame-io", label: "Frame.io" },
  { href: "/laboratorio", label: "Laboratório" },
];

export function CourseBrand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
        g
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-medium tracking-tight">
          Giz Pay · Aula
        </span>
        {!compact ? (
          <span className="block text-[11px] text-muted-foreground">
            UI/UX · front-end · Frame.io
          </span>
        ) : null}
      </span>
    </Link>
  );
}

export function LessonRail({ current }: { current?: string }) {
  return (
    <ol className="space-y-1">
      {lessons.map((lesson) => {
        const active = lesson.slug === current;
        return (
          <li key={lesson.slug}>
            <Link
              href={`/aula/${lesson.slug}`}
              className={`flex items-baseline gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-accent text-foreground"
                  : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
              }`}
            >
              <span className="font-mono text-[11px] text-primary">
                {lesson.number}
              </span>
              <span className="leading-snug">{lesson.title}</span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
