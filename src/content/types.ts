export type DemoId =
  | "espacamento"
  | "tipografia"
  | "contraste"
  | "hierarquia"
  | "layout"
  | "sizing"
  | "breakpoints"
  | "variantes"
  | "cta"
  | "anatomia";

/**
 * O texto dos blocos aceita marcação inline mínima: **negrito**, `código`,
 * [texto](url) e ==destaque==. O renderizador vive em components/prose.tsx.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | {
      type: "callout";
      variant: "key" | "tip" | "warn" | "note";
      title: string;
      text: string;
    }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "code"; lang: string; caption?: string; code: string }
  | {
      type: "compare";
      badTitle: string;
      bad: string[];
      goodTitle: string;
      good: string[];
    }
  | { type: "terms"; items: { term: string; def: string }[] }
  | { type: "exercise"; title: string; text?: string; items: string[] }
  | { type: "demo"; id: DemoId; title: string; text?: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "cards"; items: { title: string; text: string; tag?: string }[] };

export type Lesson = {
  slug: string;
  /** Numeração exibida, ex.: "2.3" */
  number: string;
  title: string;
  subtitle: string;
  minutes: number;
  goals: string[];
  blocks: Block[];
  takeaways: string[];
};

export type Track = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  lessons: Lesson[];
};
