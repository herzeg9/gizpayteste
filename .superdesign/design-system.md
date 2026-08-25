# Giz Pay — Design System (Homepage Repaginação)

> **Mode:** Inspired by [base-lp19.vercel.app](https://base-lp19.vercel.app/) layout/flow, keeping Giz Pay brand identity and vital content.
> **Target:** `/` homepage — `GizPaySite`
> **Audience:** Diretores, secretários e tesoureiros de escolas particulares no Brasil

---

## Product context

**Giz Pay** is a school financial platform: automated billing (Pix, boleto, card), direct settlement to the school's CNPJ, delinquency control, and a parent portal — without intermediaries holding cash for 30 days.

**Primary conversion goal:** Schedule a demo (`#agendar`) and WhatsApp contact.

**Key differentiators to preserve in copy:**
- Liquidação direto no CNPJ da escola (sem intermediário)
- Cobrança automática + régua de cobrança respeitosa
- Painel de inadimplência em tempo real
- Portal do responsável com marca da escola
- LGPD, criptografia, trilha de auditoria

---

## Branding (NON-NEGOTIABLE)

Use **ONLY** these tokens. Do not introduce purple gradients, pink accents, or decorative serif fonts beyond Fraunces for display.

| Token | Value | Usage |
|-------|-------|-------|
| Deep background | `#07211B` | Hero, nav, dark sections, footer |
| Surface | `#0E2F27` | Elevated dark panels |
| Raised | `#143B31` | Cards on dark |
| Light bg | `#F6F8F5` | Alternating light sections |
| Light alt | `#EAEFE9` | Secondary light sections |
| Text on dark | `#F2F7F3` | Headlines, body on dark |
| Text on light | `#0B1F1A` | Headlines, body on light |
| Muted dark | `#9CB0A8` | Secondary text on dark |
| Muted light | `#5A6B64` | Secondary text on light |
| Primary / CTA | `#4ADE80` | Buttons, links, accents |
| Primary press | `#35C46B` | Hover/pressed CTA |
| Amber | `#F0B429` | Warnings, overdue |
| Danger | `#E5484D` | Errors |
| Border dark | `rgba(242,247,243,0.12)` | Dividers on dark |
| Border light | `rgba(11,31,26,0.10)` | Dividers on light |

### Typography
- **Display/headlines:** Fraunces (`font-display`), semibold, tight tracking on heroes
- **Body/UI:** Inter, 15–17px body, 11px uppercase overlines with `tracking-[0.14–0.16em]`
- **Metrics/mono:** JetBrains Mono for numbers and module siglas

### Shape & spacing
- Border radius: **12px** inputs/buttons, **16px** cards, **24–32px** hero panels (reference LP uses generous rounding)
- Max content width: **1200px**
- Section vertical padding: **80–96px** desktop, **64–80px** mobile
- 8pt spacing grid

---

## Layout inspiration (from base-lp19 — structure only)

Reference extraction: `.superdesign/website/base-lp19.vercel.app/design.md` (StayFlow / "Phosphor grove" — use **layout patterns only**, not its Instrument Serif palette or `#050B00` background).

Apply these **patterns** with Giz Pay colors and copy. Do NOT copy StayFlow's palette or sales-training content.

1. **Sticky nav** — logo left, anchor links center, pill CTA right ("Agendar demo")
2. **Hero** — centered headline + subhead + dual CTAs; optional product visual below (PainelVivo mock)
3. **Numbered problem section** — overline + H2; grid of cards labeled `[ 01 ]` … `[ 04 ]` with title + paragraph
4. **How it works** — numbered steps `[ 1.0 ]` … `[ 4.0 ]` or `[ 01 ]` … `[ 04 ]` with clear progression
5. **Deliverables / modules** — card grid with version numbers or siglas (Pix, RC, IN, CB)
6. **Social proof / testimonial** — quote block with attribution
7. **Interactive calculator** — sticky intro + tool in document flow
8. **Comparison toggle** — Giz Pay vs status quo
9. **FAQ accordion** — single column, max ~860px
10. **Conversion block** — split: copy + form; WhatsApp secondary
11. **Mobile** — fixed bottom bar with primary CTA + WhatsApp icon

Scroll-driven animations from the current site may be simplified to static sections in the design draft unless explicitly requested.

---

## Homepage information architecture (vital sections — preserve all)

| # | Section ID | Overline | Headline (PT-BR) |
|---|------------|----------|------------------|
| — | (nav) | — | Links: Como funciona, Calculadora, Módulos, Segurança |
| 1 | hero | Plataforma financeira para escolas | O dinheiro da sua escola, no controle de quem ensina. |
| 2 | prova | — | Prova social (escolas/métricas) |
| 3 | problema | O problema | Dor da gestão financeira manual |
| 4 | como-funciona | Como funciona | Passos 1–4 implantação |
| 5 | calculadora | Calculadora | Estime economia anual |
| 6 | depoimento | — | Depoimento de cliente |
| 7 | comparativo | Comparativo | Giz Pay vs planilha/intermediário |
| 8 | modulos | Módulos | Uma plataforma completa, não um boleto avulso. |
| 9 | — | Portal do responsável | A família resolve sozinha. A secretaria ganha tempo. |
| 10 | seguranca | Segurança e conformidade | Dado de aluno é dado sensível. Tratamos como tal. |
| 11 | faq | Perguntas frequentes | Antes de falar com a gente. |
| 12 | agendar | Agendar demonstração | Veja o painel com os números da sua escola. |

### Hero supporting copy
- Sub: Cobrança automática por Pix, boleto e cartão, liquidação direto no CNPJ. Sem intermediário segurando caixa por 30 dias.
- CTAs: "Agendar demonstração" (primary) + "Calcular economia" (secondary)
- Footnote: Implantação e migração inclusas · suporte WhatsApp

### Módulos (4 cards)
- Pix — Baixa instantânea
- RC — Régua de cobrança
- IN — Painel de inadimplência
- CB — Conciliação bancária

### Segurança (4 cards)
- LGPD desde o dia 1
- Criptografia e isolamento
- Acesso por papel
- Trilha de auditoria

### Contact
- WhatsApp: (11) 98044-8792 — `https://wa.me/5511980448792`
- Email: contato.gizpay@gmail.com

---

## Components

- **Logo:** Green circle with "G" + "Giz Pay" wordmark (Fraunces). Use existing brand mark — no generic substitutes.
- **Buttons:** Pill-shaped primary (`rounded-full`), green fill; secondary = border on dark bg
- **Cards:** White on light sections; `raised`/`deep` on dark; subtle borders, no heavy shadows
- **Overlines:** 11px uppercase, green `#3E8E63` on light / `#4ADE80` on dark

---

## Motion (optional in draft)

- Subtle fade-up on section enter
- Reference LP uses scroll-reveal; current codebase uses scroll-driven sticky sections — either is acceptable in design exploration

---

## Fidelity constraint (append to all generation prompts)

Use ONLY the fonts, colors, spacing, and component styles defined in this design system. Do not introduce any fonts, colors, or visual styles not listed here. Keep all Portuguese copy and contact details exactly as specified.
