# Site Giz Pay — preview local (GitHub)

Este repositório inclui uma **recriação local** da homepage repaginada da Giz Pay para visualização, testes de UX e validação antes de publicar no Framer ou em produção.

## Clone e execução

```bash
git clone <url-do-seu-repositorio>
cd <nome-do-repo>
npm install
npm run dev
```

Abra no navegador:

| URL | O que é |
|-----|---------|
| **http://localhost:43117/site** | Site Giz Pay 2.0 — preview limpo (recomendado para testes) |
| http://localhost:43117/prototipo | Mesmo site + barra do curso Estúdio Giz |
| http://localhost:43117/wireframes | Spec dos frames para montar no Figma |
| http://localhost:43117/auditoria | Auditoria do gizpay.com.br atual |

Se algo aparecer em branco no `npm run dev`, use o build de produção (mais estável):

```bash
npm run build
npm run start
```

Depois acesse novamente **http://localhost:43117/site**.

## Scripts

```bash
npm run dev        # servidor de desenvolvimento (porta 43117)
npm run dev:site   # igual ao dev, imprime URL do /site
npm run build      # build de produção
npm run start      # servir build na porta 43117
```

## O que testar localmente

1. **Hero** — painel animado, CTAs, scroll para calculadora
2. **Calculadora** — sliders, número animado, CTA após resultado
3. **Comparativo** — toggle “Com Giz Pay” / “Com intermediário”
4. **Como funciona** — passos clicáveis
5. **Portal** — mock mobile do responsável
6. **Formulário** — estados vazio, erro e sucesso (sem envio real)
7. **Mobile** — barra fixa inferior (demo + WhatsApp)

## Fluxo recomendado (Figma → repo → Framer)

```
Auditoria (/auditoria)
    ↓
Wireframes no Figma (/wireframes + docs/wireframes-gizpay.md)
    ↓
Validação local (/site) — este repo
    ↓
Framer ou produção
```

## Estrutura do código do site

```
src/components/gizpay-site/
├── gizpay-site.tsx           # landing completa
└── comparativo-interativo.tsx

src/components/prototipo/     # calculadora, painel, portal, form…
```

Tokens de cor e tipografia: `src/components/prototipo/tokens.ts`

## GitHub

Commit e push normalmente:

```bash
git add .
git commit -m "feat: atualiza seção calculadora"
git push origin main
```

Quem clonar o repo repete `npm install && npm run dev` e acessa `/site`.

## Aviso

Conteúdo, depoimentos, logos de escolas e métricas são **ilustrativos** para estudo e testes. Não usar números em produção sem base de cálculo aprovada.

## Documentação relacionada

- [`docs/wireframes-gizpay.md`](wireframes-gizpay.md) — roteiro escrito frame a frame
- [`docs/auditoria-gizpay.md`](auditoria-gizpay.md) — diagnóstico do site atual
- [`docs/checklist-gizpay-redesign.md`](checklist-gizpay-redesign.md) — checklist completo
