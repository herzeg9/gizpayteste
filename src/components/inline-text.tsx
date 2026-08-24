import { Fragment, type ReactNode } from "react";

const PATTERN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

/**
 * Marcação inline mínima usada pelo conteúdo do curso:
 * **negrito**, `código` e [texto](url).
 */
export function InlineText({ text }: { text: string }) {
  const parts = text.split(PATTERN).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>{renderPart(part)}</Fragment>
      ))}
    </>
  );
}

function renderPart(part: string): ReactNode {
  if (part.startsWith("**") && part.endsWith("**")) {
    return (
      <strong className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    );
  }

  if (part.startsWith("`") && part.endsWith("`")) {
    return (
      <code className="rounded-[5px] border border-border bg-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-primary">
        {part.slice(1, -1)}
      </code>
    );
  }

  const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
  if (link) {
    const external = link[2].startsWith("http");
    return (
      <a
        href={link[2]}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
      >
        {link[1]}
      </a>
    );
  }

  return part;
}
