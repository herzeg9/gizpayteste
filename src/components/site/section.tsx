import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex max-w-2xl flex-col gap-4 sm:mb-16",
        align === "center" && "mx-auto items-center text-center",
      )}
    >
      <span
        className={cn(
          "inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase",
          dark
            ? "border-ink-foreground/20 text-ink-foreground/70"
            : "border-primary/20 bg-secondary text-secondary-foreground",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl",
          dark ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-lg",
            dark ? "text-ink-foreground/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

/** Palavra com um "risco de giz" desenhado por baixo. */
export function ChalkMark({ children }: { children: ReactNode }) {
  return (
    <span className="chalk-underline">
      {children}
      <svg viewBox="0 0 120 12" aria-hidden="true" preserveAspectRatio="none">
        <path
          d="M3 9 C 25 3, 55 2.5, 117 6"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
