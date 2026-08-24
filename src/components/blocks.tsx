import {
  AlertTriangle,
  ArrowRight,
  Info,
  Key,
  Lightbulb,
  Minus,
  Plus,
  Quote,
} from "lucide-react";
import type { Block } from "@/content/types";
import { InlineText } from "@/components/inline-text";
import { Demo } from "@/components/demos";
import { cn } from "@/lib/utils";

const CALLOUTS = {
  key: {
    icon: Key,
    label: "Ponto-chave",
    className: "border-primary/30 bg-primary/8",
    iconClass: "text-primary",
  },
  tip: {
    icon: Lightbulb,
    label: "Dica prática",
    className: "border-[color:var(--amber-glow)]/30 bg-[color:var(--amber-glow)]/8",
    iconClass: "text-[color:var(--amber-glow)]",
  },
  warn: {
    icon: AlertTriangle,
    label: "Atenção",
    className: "border-destructive/30 bg-destructive/8",
    iconClass: "text-destructive",
  },
  note: {
    icon: Info,
    label: "Nota",
    className: "border-border bg-secondary/50",
    iconClass: "text-muted-foreground",
  },
} as const;

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="grid gap-7">
      {blocks.map((block, index) => (
        <BlockView key={index} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="max-w-[68ch] text-[17px] leading-[1.72] text-muted-foreground">
          <InlineText text={block.text} />
        </p>
      );

    case "h":
      return (
        <h2 className="mt-6 max-w-[26ch] font-display text-[27px] font-semibold leading-tight tracking-tight text-foreground sm:text-[31px]">
          {block.text}
        </h2>
      );

    case "list":
      return block.ordered ? (
        <ol className="grid max-w-[68ch] gap-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[16px] leading-[1.7] text-muted-foreground">
              <span className="mt-0.5 font-mono text-xs text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <InlineText text={item} />
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="grid max-w-[68ch] gap-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[16px] leading-[1.7] text-muted-foreground">
              <span className="mt-[0.62em] size-1.5 shrink-0 rounded-full bg-primary/70" />
              <span>
                <InlineText text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "callout": {
      const config = CALLOUTS[block.variant];
      const Icon = config.icon;
      return (
        <aside
          className={cn(
            "grid max-w-[70ch] gap-2 rounded-[14px] border p-5",
            config.className,
          )}
        >
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Icon className={cn("size-4", config.iconClass)} />
            {block.title}
          </p>
          <p className="text-[15px] leading-[1.7] text-muted-foreground">
            <InlineText text={block.text} />
          </p>
        </aside>
      );
    }

    case "steps":
      return (
        <ol className="grid gap-0">
          {block.items.map((item, i) => (
            <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 font-mono text-[11px] tabular-nums text-primary">
                  {i + 1}
                </span>
                {i < block.items.length - 1 ? (
                  <span className="mt-1 w-px flex-1 bg-border" />
                ) : null}
              </div>
              <div className="grid max-w-[62ch] gap-1 pt-0.5">
                <p className="text-[15px] font-semibold text-foreground">
                  <InlineText text={item.title} />
                </p>
                <p className="text-[15px] leading-[1.68] text-muted-foreground">
                  <InlineText text={item.text} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "table":
      return (
        <figure className="grid gap-2">
          <div className="overflow-x-auto rounded-[14px] border border-border scrollbar-slim">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/60">
                  {block.head.map((cell) => (
                    <th
                      key={cell}
                      className="px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-b border-border/70 last:border-0">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={cn(
                          "px-4 py-3 align-top leading-[1.6]",
                          j === 0 ? "text-foreground" : "text-muted-foreground",
                        )}
                      >
                        <InlineText text={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption ? (
            <figcaption className="text-xs text-muted-foreground">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case "code":
      return (
        <figure className="overflow-hidden rounded-[14px] border border-border bg-secondary/40">
          <figcaption className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="text-xs text-muted-foreground">
              {block.caption ?? "Exemplo"}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
              {block.lang}
            </span>
          </figcaption>
          <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-[1.65] text-foreground/90 scrollbar-slim">
            <code>{block.code}</code>
          </pre>
        </figure>
      );

    case "compare":
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          <ComparePane
            title={block.badTitle}
            items={block.bad}
            tone="bad"
          />
          <ComparePane
            title={block.goodTitle}
            items={block.good}
            tone="good"
          />
        </div>
      );

    case "terms":
      return (
        <dl className="grid gap-3">
          {block.items.map((item) => (
            <div
              key={item.term}
              className="grid gap-1 rounded-[12px] border border-border bg-secondary/30 p-4"
            >
              <dt className="text-[15px] font-semibold text-foreground">
                {item.term}
              </dt>
              <dd className="max-w-[64ch] text-[15px] leading-[1.68] text-muted-foreground">
                <InlineText text={item.def} />
              </dd>
            </div>
          ))}
        </dl>
      );

    case "exercise":
      return (
        <section className="grid gap-3 rounded-[16px] border border-primary/25 bg-primary/6 p-5 sm:p-6">
          <p className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
            <ArrowRight className="size-4 text-primary" />
            {block.title}
          </p>
          {block.text ? (
            <p className="max-w-[64ch] text-[15px] leading-[1.7] text-muted-foreground">
              <InlineText text={block.text} />
            </p>
          ) : null}
          <ul className="grid gap-2">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] leading-[1.68] text-muted-foreground"
              >
                <span className="mt-0.5 font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <InlineText text={item} />
                </span>
              </li>
            ))}
          </ul>
        </section>
      );

    case "demo":
      return (
        <section className="grid gap-3">
          <div className="grid gap-1">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              Demonstração interativa
            </p>
            <p className="font-display text-xl font-semibold text-foreground">
              {block.title}
            </p>
            {block.text ? (
              <p className="max-w-[64ch] text-[15px] leading-[1.68] text-muted-foreground">
                {block.text}
              </p>
            ) : null}
          </div>
          <Demo id={block.id} />
        </section>
      );

    case "quote":
      return (
        <blockquote className="grid max-w-[62ch] gap-3 border-l-2 border-primary/50 pl-5">
          <Quote className="size-5 text-primary/60" />
          <p className="font-display text-xl leading-[1.5] text-foreground">
            {block.text}
          </p>
          {block.author ? (
            <cite className="text-sm not-italic text-muted-foreground">
              {block.author}
            </cite>
          ) : null}
        </blockquote>
      );

    case "cards":
      return (
        <div className="grid gap-3 sm:grid-cols-2">
          {block.items.map((item) => (
            <article
              key={item.title}
              className="grid content-start gap-2 rounded-[14px] border border-border bg-card p-5 transition-colors hover:border-primary/30"
            >
              {item.tag ? (
                <span className="w-fit rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                  {item.tag}
                </span>
              ) : null}
              <p className="text-[15px] font-semibold leading-snug text-foreground">
                {item.title}
              </p>
              <p className="text-[14.5px] leading-[1.65] text-muted-foreground">
                <InlineText text={item.text} />
              </p>
            </article>
          ))}
        </div>
      );
  }
}

function ComparePane({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "good" | "bad";
}) {
  const Icon = tone === "good" ? Plus : Minus;
  return (
    <div
      className={cn(
        "grid content-start gap-3 rounded-[14px] border p-5",
        tone === "good"
          ? "border-primary/30 bg-primary/6"
          : "border-destructive/25 bg-destructive/6",
      )}
    >
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <ul className="grid gap-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-[14.5px] leading-[1.6] text-muted-foreground"
          >
            <Icon
              className={cn(
                "mt-1 size-3.5 shrink-0",
                tone === "good" ? "text-primary" : "text-destructive",
              )}
            />
            <span>
              <InlineText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
