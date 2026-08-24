import { cn } from "@/lib/utils";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm"
      >
        {/* Um pedaço de giz estilizado */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect
            x="4.5"
            y="10.8"
            width="15"
            height="5.4"
            rx="2.7"
            transform="rotate(-32 12 13.5)"
            fill="currentColor"
          />
          <circle cx="18.6" cy="7.6" r="2.4" fill="var(--color-accent)" />
        </svg>
      </span>
      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tight",
          dark ? "text-ink-foreground" : "text-foreground",
        )}
      >
        Giz&nbsp;Pay
      </span>
    </span>
  );
}
