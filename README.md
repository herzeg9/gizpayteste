# Estúdio Giz

Curso-roteiro em português sobre **UI/UX, desenvolvimento web e o fluxo de trabalho no Framer**, aplicado a um projeto real: o repaginamento completo do site da [Giz Pay](https://gizpay.com.br).

Não é um site de slides. É uma plataforma de aula com conteúdo escrito, dez demonstrações interativas e um protótipo navegável da proposta de redesign.

## O que tem aqui

| Rota | O que é |
| --- | --- |
| `/` | Página inicial com as cinco trilhas e o progresso do aluno |
| `/aula/[slug]` | As 25 aulas, com objetivos, conteúdo, demos e resumo |
| `/projeto` | Diagnóstico do site atual, prioridades e checklist de execução |
| `/prototipo` | Protótipo navegável da nova home da Giz Pay |
| `/recursos` | Escalas de referência, atalhos do Framer, glossário e QA de lançamento |

### As cinco trilhas

1. **Fundamentos de UX** — UI vs. UX, público e mensagem, arquitetura da informação, leis de UX
2. **Fundamentos de UI** — espaçamento, tipografia, cor e contraste, hierarquia, design system
3. **Como a web funciona** — domínio e DNS, HTML semântico, CSS e responsividade, JavaScript, performance e SEO
4. **Framer na prática** — tour da ferramenta, Stack e sizing, componentes e variantes, movimento, CMS e publicação
5. **Projeto Giz Pay** — diagnóstico, briefing, wireframe, design system, copy e build

### Demonstrações interativas

Escala de espaçamento de 8pt, gerador de escala tipográfica, verificador de contraste WCAG, comparador de hierarquia visual, playground de Flexbox/Stack, modos Fill/Fit/Fixed, preview responsivo, variantes e estados de componente, laboratório de CTA e anatomia de uma landing page.

## Rodando localmente

```bash
npm install
npm run dev
```

A aplicação sobe em [http://localhost:43117](http://localhost:43117).

Outros comandos:

```bash
npm run build      # build de produção
npm run start      # servir o build
npm run typecheck  # checagem de tipos
npm run lint       # ESLint
```

Não há variáveis de ambiente nem serviços externos: o progresso do aluno e as checklists ficam no `localStorage` do navegador, e o formulário do protótipo valida e confirma localmente.

## Stack

- **Next.js 16** com App Router e React 19
- **TypeScript**
- **Tailwind CSS 4** com tokens semânticos em `src/app/globals.css`
- **shadcn/ui** para os primitivos de interface
- Fontes **Fraunces** (títulos), **Inter** (texto) e **JetBrains Mono** (números)

## Organização

```
src/
├─ app/
│  ├─ (curso)/          # site do curso: home, aulas, projeto, recursos
│  ├─ prototipo/        # protótipo da Giz Pay, com identidade visual própria
│  ├─ globals.css       # design system do curso
│  └─ layout.tsx
├─ components/
│  ├─ demos/            # as dez demonstrações interativas
│  ├─ prototipo/        # calculadora, painel vivo, portal, formulário
│  ├─ ui/               # shadcn/ui
│  └─ blocks.tsx        # renderizador dos blocos de conteúdo
├─ content/
│  ├─ types.ts          # modelo de conteúdo (Track, Lesson, Block)
│  └─ track-*.ts        # o conteúdo das cinco trilhas
└─ lib/
```

O conteúdo é dado tipado, não JSX. Cada aula é uma lista de blocos (`p`, `callout`, `table`, `code`, `compare`, `demo`, `exercise`…) renderizada por `components/blocks.tsx`. Para escrever uma aula nova, basta acrescentar um objeto `Lesson` ao arquivo da trilha correspondente.

## Sobre a ferramenta

O curso é baseado no **Framer** (framer.com), que é onde sites são desenhados e publicados. O **Frame.io**, da Adobe, é uma plataforma de revisão e aprovação de vídeo — útil se o projeto tiver peças em vídeo, mas não é onde o site é construído.

## Aviso

Material didático. O protótipo da Giz Pay é uma proposta de repaginamento e usa depoimentos, logos e métricas ilustrativos. Antes de publicar qualquer número em produção, exija a base de cálculo — é o que a aula 5.1 explica.
