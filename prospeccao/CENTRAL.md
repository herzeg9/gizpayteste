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

Etapa 3 (Superdesign): Padoca Vegan **canvas no ar** — projeto `eba8a21f-…`, draft `86b0609d-…`, audit PASS, 3 créditos. Preview: https://p.superdesign.dev/draft/86b0609d-dc85-4c80-b286-2a1ed2887d9b

## Melhoria da linha em 5 parâmetros

Escopos e decisões: [`parametros.md`](../.cursor/skills/central-operacoes/parametros.md).

**Regra:** qualidade acima de quantidade, e **nada concreto antes de os cinco escopos estarem fechados**. Enquanto faltar escopo, o trabalho é especificar.

| # | Parâmetro | Escopo | Implementado |
|---|---|---|---|
| 1 | Estrutura / arquitetura | fechado | sim — [padrão v1](../.cursor/skills/dossie-site-standby/arquitetura.md) nos três standbys |
| 2 | Funcionalidade | fechado — baseline de 8 itens, fronteira e tensões decididas | não |
| 3 | Desempenho | fechado — régua por função vital (contato, scroll, checkpoints, responsividade) | não |
| 4 | Especificidade | fechado — esqueleto fixo, pele variável; público-alvo é eixo novo | não |
| 5 | Entrega | fechado — portão de qualidade (check final / debug), não logística de deploy | não |

**Escopo completo em 2026-08-28.** A implementação está liberada quando o usuário mandar.

## Fundação (atualizar a cada sessão)

Rodar: `bash .cursor/skills/fundacao-pipeline/scripts/preflight.sh`

| Peça | Papel | Última checagem (unificação, 2026-08-26) |
|---|---|---|
| `VERCEL_TOKEN` | CLI no Cloud Agent | OK, `whoami=herzeg9`, time HHP |
| MCP Vercel | `deploy_to_vercel`, projetos, logs | Pronto neste run (etapa 5, não busca) |
| Superdesign CLI | Canvas isolado; roteiro via `--context-file` | OK, team Personal |
| Coletor etapa 1 | `coletar.mjs` + `coleta.json` + evidências | Em uso; Places **ausente** |
| Places API | `websiteUri` vazio | Opcional, ausente → queriesWeb (não inventar nomes) |
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

1. **Padoca Vegan** — canvas (audit PASS) **e** site em `sites/padoca-vegan-vila-madalena/` no padrão v1, verificador `exit=0`. Falta publicar em `padoca-vegan-product`. Publicar é operação normal; o parâmetro 5 é o portão de qualidade, não a logística de deploy.
2. Iza / Villa Grano / De Lá do Pão / Rodésia
3. Recorte novo se o usuário nomear

## Como pedir nesta conversa

- `teste` / `próxima rodada` → Padoca Vegan: implementar `sites/` + Vercel `{slug}-product`.
- `rodada {nicho} {bairro}` → prospecção nova, depois um standby.
- `só dossiê {nome}` → para no `inputs.md`.

## Não fazer

- Publicar no projeto Vercel `gizpayteste`.
- `vercel --prod` na raiz.
- Desenhar cliente em cima do design system / canvas da Giz Pay.
- Inventar telefone, horário ou copy como fato.
- Mandar o trabalho de volta para outro Agent.
