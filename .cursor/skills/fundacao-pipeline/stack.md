# Stack — o que usar em cada passo

## Plugin / MCP nesta sessão (o que ajuda de verdade)

Nenhum MCP extra nesta VM acha padaria. Catálogo atual: **Vercel** (ready), **Amplemarket** (`needsAuth` — **não conectar**), cursor-cloud, cursor-subscriptions, Cursor nativo.

| Peça | Etapa | Usar? |
|---|---|---|
| **`GOOGLE_PLACES_API_KEY`** (segredo, não é MCP) | **1. Busca + coleta** — `websiteUri` vazio = sem site | Principal gap. Ausente → `coletar.mjs` + WebSearch/WebFetch/Computer Use |
| **`coletar.mjs`** | 1 — classify, fetch, DNS, CNPJ, evidências | Sim |
| WebSearch + WebFetch + Computer Use | 1 — Maps/IG/imprensa quando Places falta | Sim, já na sessão |
| BrasilAPI HTTP | 1 — CNPJ só se o número já for público | Sim, sem MCP |
| Plugin **Superdesign** (CLI, não MCP) | 3 — canvas; ritual `superdesign-rodada.mjs` | Sim. `plan` = 0 crédito. Nunca init/Giz Pay DS. |
| **Vercel MCP** | 5 — `{slug}-product`, logs | Sim; **não** prospecta |
| Amplemarket | Outreach B2B | **Não conectar** |
| Firecrawl / Maps não oficial | — | Não adicionar |

Places não substitui evidência: mesmo com a chave, cada fato vai para `coleta.json` + tabela §9 do brief.

### Superdesign: passar um roteiro completo à IA

Sim, **por rodadas de CLI**, não por chat contínuo com a IA do canvas:

1. Escrever `prospeccao/leads/<slug>/roteiro-iteracao.md` (objetivo, paleta, CTA, lacunas, o que **não** inventar).
2. Em `create-design-draft` / `iterate-design-draft` / `execute-flow-pages`: `--context-file` nesse roteiro **e** no `design-system.md` **do lead** (nunca o da Giz Pay). Teto ~900 linhas por arquivo; cortar com `path:start:end`.
3. `--user-request` = pedido humano **literal** da rodada (teto 16 KB). `-p` = instrução de design que o agente escreve. Em `create-design-draft` **só um** `-p` (extras são ignorados).
4. `iterate-design-draft --mode replace` = refinar o mesmo draft; `--mode branch` = alternativas (vários `-p`).
5. HTML determinístico: `get-design` + `import-design-draft` (sem crédito de geração).

Não há MCP de Superdesign nesta sessão. O canal é o CLI.

## Skills (já no repo)

| Skill | Quando |
|---|---|
| `central-operacoes` | Hub: testes de automação, fila, preflight de sessão |
| `prospeccao-sp-sem-site` | Achar PME em SP sem site / site básico |
| `dossie-site-standby` | Essência → dossiê → inputs → Superdesign → Vercel |
| `fundacao-pipeline` | Preflight e conexões |

## Skills do plugin (não reinstalar)

Usar quando o passo cair nisso: `nextjs`, `vercel-cli`, `deployments-cicd`, `env-vars`, `shadcn`, `access-protected-vercel-deployment`, `superdesign`.

## MCP

| Server | URL | Obrigatório | Para quê |
|---|---|---|---|
| **Vercel** | `https://mcp.vercel.com` | Sim (deploy) | `deploy_to_vercel` com `name: "{slug}-product"`, `target: "production"` no **projeto novo**; `list_projects` / logs para conferir a URL |
| Amplemarket | `https://mcp.amplemarket.com/mcp` | **Não** | Outreach B2B. Fora do escopo |

Config do projeto: `.cursor/mcp.json` (só Vercel). OAuth do Vercel MCP só completa no **Cursor Desktop**. Cloud Agent usa `VERCEL_TOKEN`.

## CLIs

```bash
npx --yes @superdesign/cli@latest          # linha auth:
npx --yes vercel@latest whoami             # ou VERCEL_TOKEN
```

BrasilAPI (`https://brasilapi.com.br/api/cnpj/v1/{cnpj}`) — HTTP público, sem MCP.

## Places API New (opcional)

Se `GOOGLE_PLACES_API_KEY` existir, é a fonte **número 1** da prospecção (campo `websiteUri` vazio = sem site). Senão, busca web. Detalhe em `prospeccao-sp-sem-site` / [nichos-e-fontes.md](../prospeccao-sp-sem-site/nichos-e-fontes.md).
