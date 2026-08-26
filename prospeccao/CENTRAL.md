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

| Peça | Papel | Última checagem (unificação, 2026-08-26 21:30 UTC) |
|---|---|---|
| `VERCEL_TOKEN` | CLI no Cloud Agent | OK, `whoami=herzeg9`, time HHP |
| MCP Vercel | `deploy_to_vercel`, projetos, logs | Pronto neste run |
| Superdesign CLI | Canvas isolado | OK, team Personal |
| Places API | `websiteUri` vazio | Opcional, ausente → busca web |
| Amplemarket | — | Não conectar |

Environment Cloud: `.cursor/environment.json` (`npm ci` + terminal Next da **Giz Pay**). Standby não usa essa porta. Draft testado: [bld-20260826-6a6c6ba7-7c3b-4ed1-abd7-677b39b47b9b](https://cursor.com/dashboard/cloud-agents/builds/bld-20260826-6a6c6ba7-7c3b-4ed1-abd7-677b39b47b9b).

## Testes que passaram

| Lead | URL | Canvas | Browser |
|---|---|---|---|
| Joya Boulangerie | https://joya-boulangerie-product.vercel.app/ | `d6e705fe-…` isolado | desktop + 390px PASS |
| Kio Bakehouse | https://kio-bakehouse-product.vercel.app/ | `42842e66-…` isolado | desktop + 390px PASS (2026-08-26) |

Kio: preflight OK → dossiê/inputs → Superdesign (5 créditos) → `sites/kio-bakehouse-vila-madalena/` → projeto Vercel **novo** `kio-bakehouse-product` (não o gizpayteste). CTA Instagram, não WhatsApp. Paleta papel/manteiga (não oliva da Joya).

## Fila de testes

Ver tabela completa em [`leads/index.md`](leads/index.md).

1. **Padoca Vegan** — próximo: primeiro teste de *site básico* (não ausência total).
2. Iza / Villa Grano / De Lá do Pão / Rodésia
3. Recorte novo se o usuário nomear

## Como pedir nesta conversa

- `teste` / `próxima rodada` → Padoca Vegan, linha completa até URL.
- `rodada {nicho} {bairro}` → prospecção nova, depois um standby.
- `só dossiê {nome}` → para no `inputs.md`.

## Não fazer

- Publicar no projeto Vercel `gizpayteste`.
- `vercel --prod` na raiz.
- Desenhar cliente em cima do design system / canvas da Giz Pay.
- Inventar telefone, horário ou copy como fato.
- Mandar o trabalho de volta para outro Agent.
