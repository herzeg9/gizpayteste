# Stack — o que usar em cada passo

## Skills (já no repo)

| Skill | Quando |
|---|---|
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
