# Giz Pay — Redesign + Aula de UI/UX, Web e Front-end

Projeto de estudo com duas partes que se completam:

1. **`/` — Redesign conceitual do [gizpay.com.br](https://gizpay.com.br)**: uma landing page repaginada do zero com o conceito visual "giz e papel", focada em interatividade e conversão (agendamento de demonstrações). Inclui painel animado no hero, calculadora de economia com sliders, comparativo interativo "com intermediário vs. com a Giz Pay", mock do portal do responsável, FAQ e formulário de captação.
2. **`/aula` — Aula completa em 7 módulos** (em português): fundamentos de UI/UX, como um site funciona, front-end na prática, a ferramenta **Framer** (não confundir com Frame.io, que é revisão de vídeo), UX de conversão e o projeto guiado de repaginamento da GizPay passo a passo.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Button, Slider, Accordion, Select, Sheet…)
- [Motion](https://motion.dev) para animações (scroll reveal, contadores, transições)
- Fontes: Fraunces (títulos) + Inter (texto), via `next/font`

## Rodando localmente

```bash
npm install
npm run dev -- --port 43117
```

Abra [http://127.0.0.1:43117](http://127.0.0.1:43117) — o redesign fica na raiz e a aula em `/aula`.

## Estrutura

```
src/
├── app/
│   ├── page.tsx          # Redesign da GizPay (landing)
│   ├── aula/page.tsx     # Aula em 7 módulos
│   ├── layout.tsx        # Fontes e metadados
│   └── globals.css       # Design tokens (conceito "giz e papel")
└── components/
    ├── site/             # Seções da landing (hero, calculadora, comparativo…)
    ├── aula/             # Módulos e componentes tipográficos da aula
    └── ui/               # Primitivas shadcn/ui
```

## Notas

- O conteúdo (proposta de valor, números, FAQ) foi mantido do site original; o trabalho é de **repaginação**: direção visual, hierarquia, interatividade e ritmo de conversão.
- O formulário de demonstração é ilustrativo (não envia dados a nenhum servidor).
- Projeto criado para fins de estudo, como parte da aula em `/aula`.
