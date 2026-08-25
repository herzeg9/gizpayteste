# Theme & Design Tokens

## Part 1 — Compact Token Summary

### Framework
- **CSS:** Tailwind CSS v4 via `@import "tailwindcss"` in `globals.css` (no `tailwind.config.*` — theme in CSS `@theme inline`)
- **Component library:** shadcn/ui v4 on Radix UI
- **Fonts:** Inter (sans/body), Fraunces (display/heading via `.font-display`), JetBrains Mono (mono)

### Platform theme (`:root` — course shell, dark-only)

| Token | Value |
|-------|-------|
| `--background` | oklch(0.168 0.019 168) |
| `--foreground` | oklch(0.968 0.008 150) |
| `--card` | oklch(0.212 0.021 168) |
| `--popover` | oklch(0.198 0.021 168) |
| `--primary` | oklch(0.855 0.183 148) — green |
| `--primary-foreground` | oklch(0.18 0.04 160) |
| `--secondary` | oklch(0.268 0.024 168) |
| `--muted` | oklch(0.258 0.022 168) |
| `--muted-foreground` | oklch(0.735 0.024 160) |
| `--accent` | oklch(0.295 0.032 166) |
| `--destructive` | oklch(0.652 0.192 24) |
| `--border` | oklch(0.968 0.008 150 / 12%) |
| `--input` | oklch(0.968 0.008 150 / 16%) |
| `--ring` | oklch(0.855 0.183 148 / 60%) |
| `--brand` | oklch(0.855 0.183 148) |
| `--brand-soft` | oklch(0.855 0.183 148 / 12%) |
| `--amber-glow` | oklch(0.83 0.15 78) |
| `--radius` | 0.75rem |
| `--radius-sm` … `--radius-4xl` | 0.6× … 2.6× of `--radius` |

### Giz Pay homepage tokens (`giz` object in `tokens.ts`)

| Token | Value | Role |
|-------|-------|------|
| `deep` | #07211B | Page background (dark sections) |
| `surface` | #0E2F27 | Elevated dark surface |
| `raised` | #143B31 | Cards on dark |
| `light` | #F6F8F5 | Light section background |
| `lightAlt` | #EAEFE9 | Alternate light background |
| `fgDark` | #F2F7F3 | Text on dark |
| `fgLight` | #0B1F1A | Text on light |
| `mutedDark` | #9CB0A8 | Secondary text on dark |
| `mutedLight` | #5A6B64 | Secondary text on light |
| `primary` | #4ADE80 | Brand green / CTAs |
| `primaryPress` | #35C46B | Pressed state |
| `amber` | #F0B429 | Warning / overdue badge |
| `danger` | #E5484D | Form errors |
| `borderDark` | rgba(242,247,243,0.12) | Borders on dark |
| `borderLight` | rgba(11,31,26,0.10) | Borders on light |

### Typography
- **Body:** Inter, base via Tailwind `text-sm` / `text-base`
- **Display:** Fraunces (`.font-display`), opsz 96 — hero/section headings
- **Mono:** JetBrains Mono — metrics, labels, code
- **Type scale (course reference):** 13 · 16 · 20 · 25 · 31 · 39 · 49 · 61 · 76 (1.25 ratio)

### Spacing (8pt scale reference)
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px

### Border radius
- Platform: `--radius` = 12px; components use `rounded-lg` (md), `rounded-xl`, `rounded-full`
- Giz Pay sections: 10–32px inline (cards 16–24px, phone mock 28px)

### Shadows & effects
- `.glow-brand`: green ring + soft drop shadow
- `.grid-backdrop`: 64px grid lines at 4% opacity
- Scroll sections: sticky + scroll-driven opacity/transform

### Breakpoints (Tailwind defaults)
- `sm`: 640px · `md`: 768px · `lg`: 1024px · `xl`: 1280px
- Max content width: `max-w-[1200px]` throughout

### Motion
- Reveal: `rise-in` 0.62s cubic-bezier(0.22, 1, 0.36, 1)
- Hero float: `float-gentle` 5s
- Scroll hint: `scroll-hint` 1.8s
- `prefers-reduced-motion`: disables animations

---

## Part 2 — Raw Source

### `src/app/globals.css`

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "../styles/shadcn-ui.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-inter);
  --font-mono: var(--font-mono-code);
  --font-heading: var(--font-fraunces);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --color-brand: var(--brand);
  --color-brand-soft: var(--brand-soft);
  --color-amber-glow: var(--amber-glow);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

/*
  Tema único (escuro) da plataforma de aula. Os tokens seguem o mesmo modelo
  que ensinamos no Módulo 9: cor semântica, nunca cor literal.
*/
:root {
  --background: oklch(0.168 0.019 168);
  --foreground: oklch(0.968 0.008 150);
  --card: oklch(0.212 0.021 168);
  --card-foreground: oklch(0.968 0.008 150);
  --popover: oklch(0.198 0.021 168);
  --popover-foreground: oklch(0.968 0.008 150);
  --primary: oklch(0.855 0.183 148);
  --primary-foreground: oklch(0.18 0.04 160);
  --secondary: oklch(0.268 0.024 168);
  --secondary-foreground: oklch(0.955 0.01 150);
  --muted: oklch(0.258 0.022 168);
  --muted-foreground: oklch(0.735 0.024 160);
  --accent: oklch(0.295 0.032 166);
  --accent-foreground: oklch(0.968 0.008 150);
  --destructive: oklch(0.652 0.192 24);
  --border: oklch(0.968 0.008 150 / 12%);
  --input: oklch(0.968 0.008 150 / 16%);
  --ring: oklch(0.855 0.183 148 / 60%);
  --radius: 0.75rem;

  --brand: oklch(0.855 0.183 148);
  --brand-soft: oklch(0.855 0.183 148 / 12%);
  --amber-glow: oklch(0.83 0.15 78);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
    -webkit-font-smoothing: antialiased;
  }
  html {
    @apply font-sans;
    scroll-behavior: smooth;
  }
  ::selection {
    background: var(--brand);
    color: var(--primary-foreground);
  }
}

@layer utilities {
  .font-display {
    font-family: var(--font-fraunces), Georgia, serif;
    font-variation-settings: "opsz" 96;
  }

  .text-balance-tight {
    text-wrap: balance;
  }

  /* Malha de fundo: reforça a ideia de grid que o curso ensina. */
  .grid-backdrop {
    background-image:
      linear-gradient(to right, oklch(0.968 0.008 150 / 4%) 1px, transparent 1px),
      linear-gradient(to bottom, oklch(0.968 0.008 150 / 4%) 1px, transparent 1px);
    background-size: 64px 64px;
  }

  .glow-brand {
    box-shadow: 0 0 0 1px oklch(0.855 0.183 148 / 22%), 0 24px 70px -30px oklch(0.855 0.183 148 / 45%);
  }

  .scrollbar-slim {
    scrollbar-width: thin;
    scrollbar-color: oklch(0.968 0.008 150 / 18%) transparent;
  }
}

@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes float-gentle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hero-float-card {
  animation: float-gentle 5s ease-in-out infinite;
}

@keyframes scroll-hint {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.35;
  }
  50% {
    transform: translateY(8px);
    opacity: 1;
  }
}

.hero-scroll-hint {
  animation: scroll-hint 1.8s ease-in-out infinite;
}

.reveal[data-reveal-ready]:not([data-visible="true"]) {
  opacity: 0;
}

.reveal[data-reveal-ready][data-visible="true"] {
  animation: rise-in 0.62s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .hero-float-card {
    animation: none;
  }

  .hero-scroll-hint {
    animation: none;
  }
  .reveal,
  .reveal[data-reveal-ready]:not([data-visible="true"]),
  .reveal[data-reveal-ready][data-visible="true"] {
    opacity: 1;
    animation: none;
  }
}
```

### `src/styles/shadcn-ui.css` (Tailwind v4 utilities & keyframes)

```css
@theme inline {
  @keyframes accordion-down {
    from {
      height: 0;
    }
    to {
      height: var(
        --radix-accordion-content-height,
        var(--accordion-panel-height, auto)
      );
    }
  }

  @keyframes accordion-up {
    from {
      height: var(
        --radix-accordion-content-height,
        var(--accordion-panel-height, auto)
      );
    }
    to {
      height: 0;
    }
  }
}

/* Custom variants */
@custom-variant data-open {
  &:where([data-state="open"]),
  &:where([data-open]:not([data-open="false"])) {
    @slot;
  }
}

@custom-variant data-closed {
  &:where([data-state="closed"]),
  &:where([data-closed]:not([data-closed="false"])) {
    @slot;
  }
}

@custom-variant data-checked {
  &:where([data-state="checked"]),
  &:where([data-checked]:not([data-checked="false"])) {
    @slot;
  }
}

@custom-variant data-unchecked {
  &:where([data-state="unchecked"]),
  &:where([data-unchecked]:not([data-unchecked="false"])) {
    @slot;
  }
}

@custom-variant data-selected {
  &:where([data-selected="true"]) {
    @slot;
  }
}

@custom-variant data-disabled {
  &:where([data-disabled="true"]),
  &:where([data-disabled]:not([data-disabled="false"])) {
    @slot;
  }
}

@custom-variant data-active {
  &:where([data-state="active"]),
  &:where([data-active]:not([data-active="false"])) {
    @slot;
  }
}

@custom-variant data-horizontal {
  &:where([data-orientation="horizontal"]) {
    @slot;
  }
}

@custom-variant data-vertical {
  &:where([data-orientation="vertical"]) {
    @slot;
  }
}

@utility no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

/* scroll-fade */
@property --scroll-fade-t {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0px;
}
@property --scroll-fade-b {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0px;
}
@property --scroll-fade-s {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0px;
}
@property --scroll-fade-e {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0px;
}
@property --scroll-fade-mask {
  syntax: "*";
  inherits: false;
}

@theme inline {
  @keyframes scroll-fade-reveal-t {
    from {
      --scroll-fade-t: 0px;
    }
    to {
      --scroll-fade-t: var(--_scroll-fade-size-t, var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10))));
    }
  }
  @keyframes scroll-fade-reveal-b {
    from {
      --scroll-fade-b: var(--_scroll-fade-size-b, var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10))));
    }
    to {
      --scroll-fade-b: 0px;
    }
  }
  @keyframes scroll-fade-reveal-s {
    from {
      --scroll-fade-s: 0px;
    }
    to {
      --scroll-fade-s: var(--_scroll-fade-size-s, var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10))));
    }
  }
  @keyframes scroll-fade-reveal-e {
    from {
      --scroll-fade-e: var(--_scroll-fade-size-e, var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10))));
    }
    to {
      --scroll-fade-e: 0px;
    }
  }
}

@utility scroll-fade {
  --_scroll-fade-size-t: var(
    --scroll-fade-t-size,
    var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))
  );
  --_scroll-fade-size-b: var(
    --scroll-fade-b-size,
    var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))
  );
  --scroll-fade-block: linear-gradient(
    to bottom,
    transparent 0,
    #000 var(--scroll-fade-t, 0px),
    #000 calc(100% - var(--scroll-fade-b, 0px)),
    transparent 100%
  );
  -webkit-mask-image: var(--scroll-fade-mask, var(--scroll-fade-block));
  mask-image: var(--scroll-fade-mask, var(--scroll-fade-block));
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  @supports (animation-timeline: scroll()) {
    animation:
      scroll-fade-reveal-t 1ms ease-in-out,
      scroll-fade-reveal-b 1ms ease-in-out;
    animation-timeline: scroll(self y), scroll(self y);
    animation-range:
      0 var(--scroll-fade-reveal, calc(var(--spacing) * 24)),
      calc(100% - var(--scroll-fade-reveal, calc(var(--spacing) * 24))) 100%;
    animation-fill-mode: both;
  }

  @supports not (animation-timeline: scroll()) {
    --scroll-fade-t: var(--_scroll-fade-size-t);
    --scroll-fade-b: var(--_scroll-fade-size-b);
  }
}

@utility scroll-fade-y {
  --_scroll-fade-size-t: var(
    --scroll-fade-t-size,
    var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))
  );
  --_scroll-fade-size-b: var(
    --scroll-fade-b-size,
    var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))
  );
  --scroll-fade-block: linear-gradient(
    to bottom,
    transparent 0,
    #000 var(--scroll-fade-t, 0px),
    #000 calc(100% - var(--scroll-fade-b, 0px)),
    transparent 100%
  );
  -webkit-mask-image: var(--scroll-fade-mask, var(--scroll-fade-block));
  mask-image: var(--scroll-fade-mask, var(--scroll-fade-block));
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  @supports (animation-timeline: scroll()) {
    animation:
      scroll-fade-reveal-t 1ms ease-in-out,
      scroll-fade-reveal-b 1ms ease-in-out;
    animation-timeline: scroll(self y), scroll(self y);
    animation-range:
      0 var(--scroll-fade-reveal, calc(var(--spacing) * 24)),
      calc(100% - var(--scroll-fade-reveal, calc(var(--spacing) * 24))) 100%;
    animation-fill-mode: both;
  }

  @supports not (animation-timeline: scroll()) {
    --scroll-fade-t: var(--_scroll-fade-size-t);
    --scroll-fade-b: var(--_scroll-fade-size-b);
  }
}

@utility scroll-fade-x {
  --_scroll-fade-size-s: var(
    --scroll-fade-s-size,
    var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))
  );
  --_scroll-fade-size-e: var(
    --scroll-fade-e-size,
    var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))
  );
  --scroll-fade-inline: linear-gradient(
    to right,
    transparent 0,
    #000 var(--scroll-fade-s, 0px),
    #000 calc(100% - var(--scroll-fade-e, 0px)),
    transparent 100%
  );
  &:where([dir="rtl"], [dir="rtl"] *) {
    --scroll-fade-inline: linear-gradient(
      to left,
      transparent 0,
      #000 var(--scroll-fade-s, 0px),
      #000 calc(100% - var(--scroll-fade-e, 0px)),
      transparent 100%
    );
  }
  -webkit-mask-image: var(--scroll-fade-mask, var(--scroll-fade-inline));
  mask-image: var(--scroll-fade-mask, var(--scroll-fade-inline));
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  @supports (animation-timeline: scroll()) {
    animation:
      scroll-fade-reveal-s 1ms ease-in-out,
      scroll-fade-reveal-e 1ms ease-in-out;
    animation-timeline: scroll(self inline), scroll(self inline);
    animation-range:
      0 var(--scroll-fade-reveal, calc(var(--spacing) * 24)),
      calc(100% - var(--scroll-fade-reveal, calc(var(--spacing) * 24))) 100%;
    animation-fill-mode: both;
  }

  @supports not (animation-timeline: scroll()) {
    --scroll-fade-s: var(--_scroll-fade-size-s);
    --scroll-fade-e: var(--_scroll-fade-size-e);
  }
}

@utility scroll-fade-t {
  --_scroll-fade-size-t: var(
    --scroll-fade-t-size,
    var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))
  );
  --scroll-fade-mask: linear-gradient(
    to bottom,
    transparent 0,
    #000 var(--scroll-fade-t, 0px),
    #000 100%
  );
  -webkit-mask-image: var(--scroll-fade-mask);
  mask-image: var(--scroll-fade-mask);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  @supports (animation-timeline: scroll()) {
    animation: scroll-fade-reveal-t 1ms ease-in-out;
    animation-timeline: scroll(self y);
    animation-range: 0 var(--scroll-fade-reveal, calc(var(--spacing) * 24));
    animation-fill-mode: both;
  }

  @supports not (animation-timeline: scroll()) {
    --scroll-fade-t: var(--_scroll-fade-size-t);
  }
}

@utility scroll-fade-b {
  --_scroll-fade-size-b: var(
    --scroll-fade-b-size,
    var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))
  );
  --scroll-fade-mask: linear-gradient(
    to bottom,
    #000 0,
    #000 calc(100% - var(--scroll-fade-b, 0px)),
    transparent 100%
  );
  -webkit-mask-image: var(--scroll-fade-mask);
  mask-image: var(--scroll-fade-mask);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  @supports (animation-timeline: scroll()) {
    animation: scroll-fade-reveal-b 1ms ease-in-out;
    animation-timeline: scroll(self y);
    animation-range: calc(
        100% - var(--scroll-fade-reveal, calc(var(--spacing) * 24))
      )
      100%;
    animation-fill-mode: both;
  }

  @supports not (animation-timeline: scroll()) {
    --scroll-fade-b: var(--_scroll-fade-size-b);
  }
}

@utility scroll-fade-l {
  --_scroll-fade-size-s: var(
    --scroll-fade-s-size,
    var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))
  );
  --scroll-fade-mask: linear-gradient(
    to right,
    transparent 0,
    #000 var(--scroll-fade-s, 0px),
    #000 100%
  );
  -webkit-mask-image: var(--scroll-fade-mask);
  mask-image: var(--scroll-fade-mask);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  @supports (animation-timeline: scroll()) {
    animation: scroll-fade-reveal-s 1ms ease-in-out;
    animation-timeline: scroll(self x);
    animation-range: 0 var(--scroll-fade-reveal, calc(var(--spacing) * 24));
    animation-fill-mode: both;
  }

  @supports not (animation-timeline: scroll()) {
    --scroll-fade-s: var(--_scroll-fade-size-s);
  }
}

@utility scroll-fade-r {
  --_scroll-fade-size-e: var(
    --scroll-fade-e-size,
    var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))
  );
  --scroll-fade-mask: linear-gradient(
    to right,
    #000 0,
    #000 calc(100% - var(--scroll-fade-e, 0px)),
    transparent 100%
  );
  -webkit-mask-image: var(--scroll-fade-mask);
  mask-image: var(--scroll-fade-mask);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  @supports (animation-timeline: scroll()) {
    animation: scroll-fade-reveal-e 1ms ease-in-out;
    animation-timeline: scroll(self x);
    animation-range: calc(
        100% - var(--scroll-fade-reveal, calc(var(--spacing) * 24))
      )
      100%;
    animation-fill-mode: both;
  }

  @supports not (animation-timeline: scroll()) {
    --scroll-fade-e: var(--_scroll-fade-size-e);
  }
}

@utility scroll-fade-s {
  --_scroll-fade-size-s: var(
    --scroll-fade-s-size,
    var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))
  );
  --scroll-fade-mask: linear-gradient(
    to right,
    transparent 0,
    #000 var(--scroll-fade-s, 0px),
    #000 100%
  );
  &:where([dir="rtl"], [dir="rtl"] *) {
    --scroll-fade-mask: linear-gradient(
      to left,
      transparent 0,
      #000 var(--scroll-fade-s, 0px),
      #000 100%
    );
  }
  -webkit-mask-image: var(--scroll-fade-mask);
  mask-image: var(--scroll-fade-mask);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  @supports (animation-timeline: scroll()) {
    animation: scroll-fade-reveal-s 1ms ease-in-out;
    animation-timeline: scroll(self inline);
    animation-range: 0 var(--scroll-fade-reveal, calc(var(--spacing) * 24));
    animation-fill-mode: both;
  }

  @supports not (animation-timeline: scroll()) {
    --scroll-fade-s: var(--_scroll-fade-size-s);
  }
}

@utility scroll-fade-e {
  --_scroll-fade-size-e: var(
    --scroll-fade-e-size,
    var(--scroll-fade-size, min(12%, calc(var(--spacing) * 10)))
  );
  --scroll-fade-mask: linear-gradient(
    to right,
    #000 0,
    #000 calc(100% - var(--scroll-fade-e, 0px)),
    transparent 100%
  );
  &:where([dir="rtl"], [dir="rtl"] *) {
    --scroll-fade-mask: linear-gradient(
      to left,
      #000 0,
      #000 calc(100% - var(--scroll-fade-e, 0px)),
      transparent 100%
    );
  }
  -webkit-mask-image: var(--scroll-fade-mask);
  mask-image: var(--scroll-fade-mask);
  -webkit-mask-composite: source-in;
  mask-composite: intersect;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  @supports (animation-timeline: scroll()) {
    animation: scroll-fade-reveal-e 1ms ease-in-out;
    animation-timeline: scroll(self inline);
    animation-range: calc(
        100% - var(--scroll-fade-reveal, calc(var(--spacing) * 24))
      )
      100%;
    animation-fill-mode: both;
  }

  @supports not (animation-timeline: scroll()) {
    --scroll-fade-e: var(--_scroll-fade-size-e);
  }
}

@utility scroll-fade-* {
  --scroll-fade-size: calc(var(--spacing) * --value(integer));
  --scroll-fade-size: --value([length], [percentage]);
}

@utility scroll-fade-t-* {
  --scroll-fade-t-size: calc(var(--spacing) * --value(integer));
  --scroll-fade-t-size: --value([length], [percentage]);
}

@utility scroll-fade-b-* {
  --scroll-fade-b-size: calc(var(--spacing) * --value(integer));
  --scroll-fade-b-size: --value([length], [percentage]);
}

@utility scroll-fade-s-* {
  --scroll-fade-s-size: calc(var(--spacing) * --value(integer));
  --scroll-fade-s-size: --value([length], [percentage]);
}

@utility scroll-fade-e-* {
  --scroll-fade-e-size: calc(var(--spacing) * --value(integer));
  --scroll-fade-e-size: --value([length], [percentage]);
}

@utility scroll-fade-none {
  --scroll-fade-mask: none;
}

/* shimmer */
@property --shimmer-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 20deg;
}
@property --shimmer-image {
  syntax: "*";
  inherits: false;
}
@property --shimmer-text-fill {
  syntax: "*";
  inherits: false;
}

@theme inline {
  @keyframes tw-shimmer {
    from {
      background-position: 100% 0;
    }
    to {
      background-position: 0 0;
    }
  }
}

@utility shimmer {
  --_spread: var(--shimmer-spread, calc(3ch + 40px));
  --_base: currentColor;
  --_highlight: var(
    --shimmer-color,
    oklch(from currentColor l c h / calc(alpha* 0.2))
  );

  background-image: var(
    --shimmer-image,
    linear-gradient(
      calc(90deg + var(--shimmer-angle)),
      var(--_base) calc(50% - var(--_spread)),
      color-mix(in oklch, var(--_highlight), var(--_base) 50%)
        calc(50% - var(--_spread) * 0.5),
      var(--_highlight) 50%,
      color-mix(in oklch, var(--_highlight), var(--_base) 50%)
        calc(50% + var(--_spread) * 0.5),
      var(--_base) calc(50% + var(--_spread))
    )
  );
  background-repeat: no-repeat;
  background-size: calc(200% + var(--_spread) * 2) 100%;
  background-position: 0 0;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: var(--shimmer-text-fill, transparent);
  animation: tw-shimmer var(--shimmer-duration, 2s) linear infinite;

  @variant dark {
    --_highlight: var(
      --shimmer-color,
      oklch(from currentColor max(0.8, calc(l + 0.4)) c h / calc(alpha + 0.4))
    );
  }

  &:where([dir="rtl"], [dir="rtl"] *) {
    animation-direction: reverse;
  }
}

@utility shimmer-once {
  animation-iteration-count: 1;
}

@utility shimmer-reverse {
  animation-direction: reverse;
}

@utility shimmer-none {
  --shimmer-image: none;
  --shimmer-text-fill: currentColor;
}

@utility shimmer-color-* {
  --shimmer-color: --value(--color, [color]);
  --shimmer-color: color-mix(
    in oklch,
    --value(--color, [color]) calc(--modifier(integer) * 1%),
    transparent
  );
}

@utility shimmer-duration-* {
  --shimmer-duration: calc(--value(integer) * 1ms);
}

@utility shimmer-spread-* {
  --shimmer-spread: calc(var(--spacing) * --value(integer));
  --shimmer-spread: --value([length], [percentage]);
}

@utility shimmer-angle-* {
  --shimmer-angle: calc(--value(integer) * 1deg);
}

@media (prefers-reduced-motion: reduce) {
  .shimmer {
    animation: none;
    background-image: none;
    -webkit-text-fill-color: currentColor;
  }
}
```

### `src/components/prototipo/tokens.ts` (Giz Pay design tokens)

```ts
/** Design system da proposta Giz Pay 2.0 — aula 5.4. */
export const giz = {
  deep: "#07211B",
  surface: "#0E2F27",
  raised: "#143B31",
  light: "#F6F8F5",
  lightAlt: "#EAEFE9",
  fgDark: "#F2F7F3",
  fgLight: "#0B1F1A",
  mutedDark: "#9CB0A8",
  mutedLight: "#5A6B64",
  primary: "#4ADE80",
  primaryPress: "#35C46B",
  amber: "#F0B429",
  danger: "#E5484D",
  borderDark: "rgba(242,247,243,0.12)",
  borderLight: "rgba(11,31,26,0.10)",
} as const;

export const brl = (value: number, digits = 0) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
```

### Note: No `tailwind.config.ts/js`

Tailwind CSS v4 configures theme via `@theme inline` blocks in `globals.css` and `shadcn-ui.css`.
