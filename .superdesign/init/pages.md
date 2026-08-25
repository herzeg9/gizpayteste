# Page Dependency Trees

Local imports only (`@/` alias and relative). node_modules excluded.

## / (Home — GizPaySite)

Entry: `src/app/page.tsx`

Summary: Public Giz Pay homepage — scroll-driven hero, social proof, problem, how-it-works, calculator, testimonial, comparison, modules, portal mock, security, FAQ, conversion form.

Dependencies:
- src/app/page.tsx
  - src/components/gizpay-site/gizpay-site.tsx
    - src/components/reveal.tsx
      - src/lib/utils.ts
    - src/components/gizpay-site/hero-scroll.tsx
      - src/components/prototipo/painel-vivo.tsx
        - src/components/prototipo/tokens.ts
      - src/components/prototipo/tokens.ts
      - src/components/gizpay-site/use-scroll-section.ts
    - src/components/gizpay-site/prova-social-scroll.tsx
      - src/components/prototipo/tokens.ts
      - src/components/gizpay-site/use-scroll-section.ts
    - src/components/gizpay-site/problema-scroll.tsx
      - src/components/prototipo/tokens.ts
      - src/components/gizpay-site/use-scroll-section.ts
    - src/components/gizpay-site/como-funciona-scroll.tsx
      - src/components/prototipo/como-funciona.tsx
        - src/components/prototipo/tokens.ts
      - src/components/prototipo/tokens.ts
      - src/components/gizpay-site/use-scroll-section.ts
    - src/components/gizpay-site/calculadora-scroll.tsx
      - src/components/reveal.tsx
      - src/components/prototipo/calculadora.tsx
        - src/components/prototipo/tokens.ts
      - src/components/prototipo/tokens.ts
      - src/components/gizpay-site/use-scroll-section.ts
    - src/components/gizpay-site/depoimento-scroll.tsx
      - src/components/prototipo/tokens.ts
      - src/components/gizpay-site/use-scroll-section.ts
    - src/components/gizpay-site/comparativo-scroll.tsx
      - src/components/reveal.tsx
      - src/components/gizpay-site/comparativo-interativo.tsx
        - src/components/prototipo/tokens.ts
      - src/components/prototipo/tokens.ts
      - src/components/gizpay-site/use-scroll-section.ts
    - src/components/prototipo/faq.tsx
      - src/components/prototipo/tokens.ts
    - src/components/prototipo/formulario.tsx
      - src/components/prototipo/tokens.ts
    - src/components/prototipo/portal-responsavel.tsx
      - src/components/prototipo/tokens.ts
    - src/components/prototipo/tokens.ts
    - (inline) Navegacao, RodapePrototipo, BarraMobile, BarraProtótipo, CabecalhoSecao in gizpay-site.tsx

## /prototipo

Entry: `src/app/prototipo/page.tsx`

Summary: Same as `/` but passes `showCourseBanner` to show course prototype banner linking back to /projeto.

Dependencies:
- src/app/prototipo/page.tsx
  - (same tree as / via GizPaySite)

## /curso

Entry: `src/app/(curso)/curso/page.tsx`

Summary: Course landing page with hero, three pillars, track list, Trilha 05 promo.

Dependencies:
- src/app/(curso)/curso/page.tsx
  - src/components/ui/button.tsx
    - src/lib/utils.ts
  - src/components/track-list.tsx
    - src/content/index.ts (and track content modules)
  - src/components/reveal.tsx
    - src/lib/utils.ts
  - src/content/index.ts
- Layout (via src/app/(curso)/layout.tsx):
  - src/components/site-header.tsx
    - src/lib/utils.ts
    - src/components/ui/button.tsx
    - src/components/ui/sheet.tsx
      - src/components/ui/button.tsx
      - src/lib/utils.ts
  - src/components/site-footer.tsx
    - src/content/index.ts

## /aula/[slug]

Entry: `src/app/(curso)/aula/[slug]/page.tsx`

Summary: Lesson reader with sticky sidebar, content blocks, takeaways, completion toggle, prev/next navigation.

Dependencies:
- src/app/(curso)/aula/[slug]/page.tsx
  - src/content/index.ts
  - src/components/blocks.tsx
    - src/components/demos/index.tsx (and demo subcomponents)
    - src/components/inline-text.tsx
  - src/components/lesson-sidebar.tsx
    - src/content/index.ts
    - src/lib/use-progress.ts
  - src/components/lesson-complete.tsx
    - src/lib/use-progress.ts
  - src/components/ui/button.tsx
- Layout: (curso)/layout.tsx → site-header, site-footer

## /projeto

Entry: `src/app/(curso)/projeto/page.tsx`

Summary: Project command center — diagnosis scores, conversion priorities, lesson links, interactive checklist.

Dependencies:
- src/app/(curso)/projeto/page.tsx
  - src/components/ui/button.tsx
  - src/components/reveal.tsx
  - src/components/checklist.tsx
  - src/content/track-5-projeto.ts
- Layout: (curso)/layout.tsx

## /auditoria

Entry: `src/app/(curso)/auditoria/page.tsx`

Summary: Full UX audit of gizpay.com.br with interactive checklist, scores, findings, wireframe next steps.

Dependencies:
- src/app/(curso)/auditoria/page.tsx
  - src/components/auditoria/checklist.tsx
    - src/lib/use-progress.ts
  - src/components/reveal.tsx
  - src/components/ui/badge.tsx
  - src/components/ui/button.tsx
  - src/lib/audit.ts
- Layout: (curso)/layout.tsx

## /wireframes

Entry: `src/app/(curso)/wireframes/page.tsx`

Summary: Figma wireframe specification — setup steps, design tokens, 14 frame specs.

Dependencies:
- src/app/(curso)/wireframes/page.tsx
  - src/components/reveal.tsx
  - src/components/ui/button.tsx
  - src/lib/wireframes.ts
- Layout: (curso)/layout.tsx

## /recursos

Entry: `src/app/(curso)/recursos/page.tsx`

Summary: Reference page — spacing/type scales, Framer shortcuts, QA checklist, glossary accordion, external links.

Dependencies:
- src/app/(curso)/recursos/page.tsx
  - src/components/reveal.tsx
  - src/components/checklist.tsx
  - src/components/ui/accordion.tsx
    - src/lib/utils.ts
- Layout: (curso)/layout.tsx
