---
name: fundacao-pipeline
description: Audita e exige a fundação do pipeline Estúdio Giz (prospecção SP → dossiê → Superdesign → site standby na Vercel). Use no início de qualquer rodada, quando o usuário falar em MCP, skills, conectar ferramentas, autenticação Vercel/Superdesign, Places API, ou quando deploy/prospecção falhar por falta de login.
---

# Fundação do pipeline

Hub: skill `central-operacoes` + `prospeccao/CENTRAL.md`. Esta skill só audita conexões.

Rodar o preflight **antes** de prospectar, desenhar ou publicar. Sem as peças obrigatórias, não fingir o passo.

```bash
bash .cursor/skills/fundacao-pipeline/scripts/preflight.sh
```

Mapa completo: [stack.md](stack.md).

## O que está no caminho crítico

| Peça | Papel | Estado típico nesta sessão |
|---|---|---|
| Plugin + MCP **Vercel** | `list_projects`, `deploy_to_vercel`, logs, URL | Cloud: token; Desktop: OAuth. Conferir `namespaceStatus` |
| `VERCEL_TOKEN` | CLI no Cloud Agent (OAuth interativo não existe aqui) | Injetar no environment; nunca colar no chat |
| CLI **Superdesign** | Canvas, extract-website, drafts | `npx @superdesign/cli@latest` — linha `auth:` |
| Skills deste repo | `prospeccao-sp-sem-site`, `dossie-site-standby` | No git |
| Skills do plugin Vercel | nextjs, vercel-cli, shadcn, deploy protegido | Já injetadas — só usar |
| Busca web + fetch | Descoberta e dossiê sem Places | Já disponível |
| `computerUse` | Abrir Maps/Instagram quando a busca for ambígua | Já disponível |

## Autenticar (o agente não consegue sozinho no Cloud)

1. **Cursor Desktop** → Settings → MCP → Vercel → Connect / Sign in.
2. Segredo de ambiente **`VERCEL_TOKEN`** (Dashboard Vercel → Account Settings → Tokens). Obrigatório para Cloud Agent publicar `{slug}-product`.
3. Superdesign: no Desktop, `npx @superdesign/cli@latest login`. No Cloud, `login --no-browser` e o usuário cola o código.
4. Opcional, alta precisão de leads: **`GOOGLE_PLACES_API_KEY`** (Places API New, campo `websiteUri`).

## Ordem das ferramentas (não inverter)

1. Places (se houver chave) ou busca + Maps → lead sem site.
2. Fetch / extract-website → dossiê.
3. Superdesign → visual.
4. Next.js em `sites/<slug>/`.
5. Vercel MCP `deploy_to_vercel` **se autenticado**; senão `vercel deploy` com `VERCEL_TOKEN` **dentro de** `sites/<slug>`. Nunca `--prod` na raiz.

## Não conectar

- **Amplemarket** — já aparece no catálogo (`needsAuth`). É sequências B2B / e-mail / LinkedIn. Não acha padaria na Vila Madalena e puxa o sistema para outreach que este pipeline **não** faz.
- MCP genérico de scrape em massa, Google Maps não oficial, Firecrawl pago — só se o usuário pedir. Places oficial + fetch bastam.
- eve / Chat SDK / microfrontends / Shopify — fora do standby de PME.

## Falha

| Falta | Pode | Não pode |
|---|---|---|
| Vercel MCP e `VERCEL_TOKEN` | Dossiê, Superdesign, código local | URL `*.vercel.app` |
| Superdesign login | Dossiê + inputs; código a partir do dossiê | Canvas |
| Places | Busca web (menos preciso) | Filtrar `websiteUri` vazio em escala |
