# Routes

Next.js App Router (file-based). Route group `(curso)` does not affect URL paths.

## Route Map

| URL | File | Layout | Summary |
|-----|------|--------|--------|
| `/` | `src/app/page.tsx` | `src/app/layout.tsx` | Giz Pay homepage — renders `<GizPaySite />` (13 scroll sections, nav, footer, mobile CTA bar) |
| `/site` | `src/app/site/page.tsx` | `src/app/layout.tsx` | Legacy redirect → `/` |
| `/prototipo` | `src/app/prototipo/page.tsx` | `src/app/layout.tsx` | Same Giz Pay site with `showCourseBanner` course prototype banner |
| `/curso` | `src/app/(curso)/curso/page.tsx` | `(curso)/layout.tsx` | Course landing — hero, pillars, track list, Trilha 05 CTA |
| `/aula/[slug]` | `src/app/(curso)/aula/[slug]/page.tsx` | `(curso)/layout.tsx` | Individual lesson page with sidebar, blocks, takeaways, prev/next nav |
| `/projeto` | `src/app/(curso)/projeto/page.tsx` | `(curso)/layout.tsx` | Giz Pay project plan — diagnosis, priorities, lessons, checklist |
| `/auditoria` | `src/app/(curso)/auditoria/page.tsx` | `(curso)/layout.tsx` | UX audit of gizpay.com.br — scores, findings, P0–P2 priorities |
| `/wireframes` | `src/app/(curso)/wireframes/page.tsx` | `(curso)/layout.tsx` | Figma wireframe spec — 14 frames, design tokens, setup steps |
| `/recursos` | `src/app/(curso)/recursos/page.tsx` | `(curso)/layout.tsx` | Reference resources — scales, Framer shortcuts, QA checklist, glossary, links |

## Root Layout

```tsx
import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Giz Pay — Gestão financeira escolar sem intermediários",
    template: "%s · Giz Pay",
  },
  description:
    "Cobrança automática por Pix, boleto e cartão, liquidação direto no CNPJ da escola.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
```

## Course Layout (`(curso)` group)

```tsx
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function CursoLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
```
