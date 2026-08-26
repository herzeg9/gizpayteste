# Central de operações — Estúdio Giz

Padrão para **testar a automação de criação de sites**. Mesa: este repositório, branch de unificação, skills em `.cursor/skills/`. Playbook: skill `central-operacoes`.

Não é o site da Giz Pay. Giz Pay continua na raiz (`/` em `:43117`). Cliente = `sites/<slug>/` + `https://{slug}-product.vercel.app`.

## Linha

```
nicho + bairro
  → 5–8 briefs (prospeccao-sp-sem-site)
  → essência / dossiê / inputs (dossie-site-standby)
  → Superdesign (projeto isolado)
  → Next em sites/<slug>/
  → Vercel projeto {slug}-product
```

Outreach (WhatsApp, e-mail, Amplemarket) **não entra**.

## Fundação (atualizar a cada sessão)

Rodar: `bash .cursor/skills/fundacao-pipeline/scripts/preflight.sh`

| Peça | Papel | Última checagem (unificação, 2026-08-26) |
|---|---|---|
| `VERCEL_TOKEN` | CLI no Cloud Agent | OK, `whoami=herzeg9`, time HHP |
| MCP Vercel | `deploy_to_vercel`, projetos, logs | Pronto neste run (nos agents antigos estava `needsAuth`) |
| Superdesign CLI | Canvas isolado | **FALTA login** neste VM — `npx @superdesign/cli@latest login --no-browser` |
| Places API | `websiteUri` vazio | Opcional, ausente → busca web |
| Amplemarket | — | Não conectar |

Environment Cloud: `.cursor/environment.json` (`npm ci` + terminal Next da **Giz Pay**). Standby não usa essa porta. Draft testado: [bld-20260826-6a6c6ba7-7c3b-4ed1-abd7-677b39b47b9b](https://cursor.com/dashboard/cloud-agents/builds/bld-20260826-6a6c6ba7-7c3b-4ed1-abd7-677b39b47b9b).

## Teste ouro (não repetir)

| Campo | Valor |
|---|---|
| Recorte | padaria artesanal · Vila Madalena |
| Lead | Joya Boulangerie (score 9, sem site — Linktree) |
| Pasta | `prospeccao/leads/joya-boulangerie-vila-madalena/` |
| App | `sites/joya-boulangerie-vila-madalena/` |
| Vercel | `joya-boulangerie-product` (não ligado ao GitHub da Giz Pay) |
| URL | https://joya-boulangerie-product.vercel.app/ |
| Canvas | projeto `d6e705fe-871b-45b0-a8d7-ee6b6c5ae487` (isolado do canvas Giz Pay) |

Browser (agents internos): faixa charcoal, wordmark Joya, WhatsApp `wa.me/5511910389816`, desktop + 390px — PASS.

## Fila de testes

Ver tabela completa em [`leads/index.md`](leads/index.md).

1. **Kio Bakehouse** — próximo teste (brief pronto, sem dossiê/standby).
2. **Padoca Vegan** — primeiro teste de *site básico* (não ausência total).
3. Demais da mesma rodada, ou recorte novo se o usuário nomear.

## Como pedir nesta conversa

- `teste` / `próxima rodada` → Kio, linha completa até URL (Superdesign se login; senão dossiê + código + Vercel, declarar o pulo do canvas).
- `rodada {nicho} {bairro}` → prospecção nova, depois um standby.
- `só dossiê {nome}` → para no `inputs.md`.
- `login Superdesign` → CLI `--no-browser` e esperar o usuário.

## Não fazer

- Publicar no projeto Vercel `gizpayteste`.
- `vercel --prod` na raiz.
- Desenhar cliente em cima do design system / canvas da Giz Pay.
- Inventar telefone, horário ou copy como fato.
- Mandar o trabalho de volta para outro Agent.
