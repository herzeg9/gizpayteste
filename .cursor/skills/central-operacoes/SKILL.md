---
name: central-operacoes
description: Central de operações do Estúdio Giz para testar a automação de criação de sites (prospecção SP → dossiê → Superdesign → standby Vercel). Use por padrão neste repositório quando o usuário falar em central, operações, teste de automação, criar site, standby, rodada, próximo lead, pipeline, PME sem site, Joya, ou quiser continuar o trabalho dos agents de mapeamento/Vercel neste chat.
---

# Central de operações — automação de sites

Este arquivo é o **hub**. As skills de execução continuam sendo as três abaixo — aqui só se orquestra, mede e persiste.

Quadro vivo: [`prospeccao/CENTRAL.md`](../../../prospeccao/CENTRAL.md). Leia-o no início de **toda** sessão de pipeline.

## Antes de implementar qualquer melhoria

Ler [`parametros.md`](parametros.md). A linha está sendo melhorada em 5 parâmetros e a regra do usuário é **não realizar nada concreto antes de os cinco escopos estarem fechados** — qualidade acima de quantidade. Enquanto faltar escopo, o trabalho é especificar, não codar.

## Este chat é o padrão

Não mandar o usuário para outro Cloud Agent para “seguir o pipeline”. Este branch / esta conversa (unificação) é a mesa. Outros agents (environment, lint, mapeamento, Joya testers) são histórico — puxar o que falta deles e operar aqui.

## Linha de produção (não inverter)

1. `fundacao-pipeline` — preflight. Sem mentir deploy.
2. `prospeccao-sp-sem-site` — nicho + bairro, 5–8 briefs. **Não envia mensagem ao cliente.**
3. `dossie-site-standby` — essência → dossiê → inputs → Superdesign (projeto **isolado** da Giz Pay) → `sites/<slug>/` → Vercel `{slug}-product`.

Pedido que descreve a linha até a URL = autorização dos 6 passos **daquele** negócio (ver skill de dossiê).

## O que é um “teste de automação”

Uma rodada conta como teste quando **um** lead sai com URL pública e passa o checklist. Não misturar Giz Pay (`/` neste repo) com o standby.

```
Teste:
- [ ] Preflight rodado (colar o bloco na resposta)
- [ ] Recorte declarado (nicho + 1–3 bairros)
- [ ] 5–8 briefs em prospeccao/leads/ + `coleta.json` (evidências) + index.md
- [ ] Um lead escolhido (maior score, ou o nome do usuário)
- [ ] dossie.md + inputs.md (temos|placeholder|falta) + design-system.md + roteiro-iteracao.md
- [ ] Canvas Superdesign isolado — só depois de `superdesign-rodada.mjs plan`; audit do HTML
- [ ] App em sites/<slug>/ pelo scaffold (padrão de arquitetura v1)
- [ ] verificar-arquitetura.mjs --slug <slug> --url … com exit 0
- [ ] https://{slug}-product.vercel.app no ar
- [ ] Faixa “Proposta Estúdio Giz — não é o site oficial”
- [ ] Browser: desktop + ~390px; WhatsApp se temos; NAP no rodapé
- [ ] URL no index.md e no dossie.md
```

**Passou:** URL 200, faixa visível, não é o site da Giz Pay, placeholders marcados, nenhum dado inventado como fato.

**Bloqueou (honesto):** Superdesign sem login → parar no dossiê+inputs (código a partir do dossiê só se o pedido já pediu site). Sem `VERCEL_TOKEN` e MCP `needsAuth` → código local, sem URL. Places ausente → busca web, declarar.

## Hard rules (agents anteriores)

- Outreach **fora**. Amplemarket **não conectar**.
- Nunca `vercel deploy --prod` na raiz. Nunca publicar no projeto `gizpayteste`.
- Hostname: `{slug}-product` (pedido `NOMEDONEGOCIO_PRODUCT`; `_` vira hífen).
- Token só em `VERCEL_TOKEN`, nunca na conversa nem `--token`.
- Site atual = base/inspired-by, não clone. Sem copiar copy de concorrente.
- Giz Pay canvas / `.superdesign/design-system.md` da raiz = curso. Cliente = `prospeccao/leads/<slug>/design-system.md`.
- Standby sem headers de segurança ou sem camada de dados tipada não publica: rodar `verificar-arquitetura.mjs`.

## Como começar uma sessão

1. Ler `prospeccao/CENTRAL.md` e `prospeccao/leads/index.md`.
2. Rodar `bash .cursor/skills/fundacao-pipeline/scripts/preflight.sh`.
3. Responder com: estado da fundação, fila de testes, pergunta de recorte **só se** o usuário não trouxe nicho/bairro/nome.
4. Se o usuário disser só “teste” / “próxima rodada” sem recorte: **Padoca Vegan** — mas o site dela já existe e passa o verificador de arquitetura; falta publicar. Publicar é operação normal, **não** é o parâmetro 5 — o 5 é o portão de qualidade que decide se está pronto para sair. Para uma rodada nova de ponta a ponta, pedir recorte novo em vez de repetir Joya, Kio ou Padoca.
5. Atualizar `CENTRAL.md` + `index.md` no fim da rodada.

## Fila (não inventar outra sem o usuário)

| Prioridade | Lead | Por quê |
|---|---|---|
| Feito (ouro) | Joya Boulangerie | Primeira pseudo-automação completa |
| Feito | Kio Bakehouse | Segunda rodada; Superdesign + Vercel neste chat |
| 1 | Padoca Vegan | Canvas + site em `sites/padoca-vegan-vila-madalena/` (padrão v1, verificador passa). Falta publicar — operação normal, não gated pelo parâmetro 5 |
| 2 | Iza / Villa Grano / De Lá do Pão / Rodésia | Mesma rodada Vila Madalena |
| Novo recorte | Só se o usuário nomear nicho+bairro (ex. salões Pinheiros) | Skill de prospecção do zero |

## Onde está o código

| Peça | Caminho |
|---|---|
| Quadro | `prospeccao/CENTRAL.md` |
| Leads | `prospeccao/leads/` |
| Standbys | `sites/<slug>/` |
| Environment Cloud | `.cursor/environment.json` (`npm ci`, Next Giz Pay em `:43117`) |
| MCP Vercel | `.cursor/mcp.json` — Cloud usa `VERCEL_TOKEN`; Desktop OAuth |
