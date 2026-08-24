# Giz Pay — Redesign + Aula de UI/UX, Web e Front-end

Projeto de estudo com duas partes que se completam:

1. **`/` — Redesign conceitual do [gizpay.com.br](https://gizpay.com.br)**: landing repaginada do zero com o conceito visual "giz e papel", focada em interatividade e conversão (agendamento de demonstrações). Inclui painel animado no hero, calculadora de economia, comparativo interativo, mock do portal do responsável, FAQ e formulário de captação.
2. **`/aula` — Aula em 7 módulos** (Framer na prática + projeto guiado) e **`/aula/figma-framer` — Script completo (~90 min)** com Figma + Framer, front-end e checklist do redesign.

## Conteúdo da aula

| Recurso | Caminho |
|---------|---------|
| **7 módulos interativos** | `/aula` — fundamentos, web, front-end, Framer, conversão, projeto GizPay |
| **Script completo Figma + Framer** | `/aula/figma-framer` e [`docs/aula-ui-ux-framer-figma.md`](docs/aula-ui-ux-framer-figma.md) |
| **Checklist do redesign** | [`docs/checklist-gizpay-redesign.md`](docs/checklist-gizpay-redesign.md) |

## Fluxo recomendado

1. **Figma** — wireframe → design system → mockup → protótipo clicável.
2. **Framer** — site interativo publicado (calculadora, modais, scroll).
3. **Código** (`/`) — versão de referência com controle total e SEO.

Comece pelo script em `/aula/figma-framer` ou pelos módulos em `/aula`.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Motion](https://motion.dev) para animações
- Fontes: Fraunces (títulos) + Inter (texto), via `next/font`

## Rodando localmente

```bash
npm install
npm run dev -- --port 43117
```

Abra [http://127.0.0.1:43117](http://127.0.0.1:43117) — o redesign fica na raiz; a aula em `/aula`.

```bash
npm run build   # checagem de produção
npm run lint
```

## Estrutura

```
src/
├── app/
│   ├── page.tsx                    # Redesign da GizPay (landing)
│   ├── aula/
│   │   ├── page.tsx                # 7 módulos
│   │   └── figma-framer/page.tsx   # Script completo Figma + Framer
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── site/                       # Seções da landing
│   ├── aula/                       # Módulos da aula
│   └── ui/
docs/
├── aula-ui-ux-framer-figma.md      # Roteiro exportável (~90 min)
└── checklist-gizpay-redesign.md
```

## Notas

- O conteúdo (proposta de valor, números, FAQ) foi mantido do site original; o trabalho é de **repaginação**: direção visual, hierarquia, interatividade e ritmo de conversão.
- O formulário de demonstração é ilustrativo (não envia dados a nenhum servidor).
- **Framer** (framer.com) é o editor de sites; não confundir com **Frame.io** (revisão de vídeo).
