# Superdesign e Vercel — site standby

Este repositório é o curso **Estúdio Giz / Giz Pay**. Site de cliente é outro produto.

## Superdesign (isolado)

Ritual: [superdesign-rodada.md](superdesign-rodada.md). `plan` primeiro (0 crédito). Plugin Superdesign: **não** rodar `init` neste repo e **não** passar `.superdesign/design-system.md`.

1. Preflight: `npx --yes @superdesign/cli@latest` — linha `auth:`.
2. `node …/superdesign-rodada.mjs plan --slug <slug>` — recusa gate, contexto Giz Pay, arquivos >900 linhas.
3. `create-project --title "<Nome>" --no-open`. Recusar IDs em [projetos-isolados.json](projetos-isolados.json).
4. Um `create-design-draft`: `--device mobile`, um `-p` (`prompt-p.md`), `--context-file` só design-system + roteiro do lead, `--user-request` literal.
5. `get-design --output` + `audit`. Falha de faixa/CTA → `import-design-draft` (sem crédito de geração).
6. Sem `branch` / `execute-flow-pages` / `extract-website` de checkout na 1ª geração.
7. Log em `superdesign.md`. Implementar código depois do canvas **ou** se o pedido já pediu standby.

Se `create-design-draft` falhar duas vezes: implementar a partir do dossiê + inputs (skill Superdesign: *design-with-your-model*), e dizer isso.

## Implementação (`sites/<slug>/`)

Padrão obrigatório: [arquitetura.md](arquitetura.md). **Não** usar `create-next-app` direto — o scaffold já entrega o padrão inteiro.

> Rodar o scaffold para um lead novo: liberado. Editar o `template/` ou o scaffold: congelado até os cinco escopos fecharem ([`parametros.md`](../central-operacoes/parametros.md)).

```bash
node .cursor/skills/dossie-site-standby/scripts/scaffold-site.mjs \
  --slug <slug> --nome "<Nome>" --tipo-schema Bakery \
  --base-url https://<slug-curto>-product.vercel.app
cd sites/<slug> && npm install && npm run build
```

- Next.js App Router + TypeScript + Tailwind, pasta **própria**. Não editar `src/app` da Giz Pay.
- Antes de mexer em código, ler o guia em `node_modules/next/dist/docs/`.
- Dados em `src/data/negocio.ts` (`fato` / `placeholder` / `lacuna`), nunca um `content.ts` solto.
- Faixa fixa no topo: “Proposta Estúdio Giz — não é o site oficial”.
- CTA precisa de `fonte`: o tipo `Cta` não compila sem.
- Mobile primeiro. Sem auth, sem form que grave dado pessoal (standby não é CRM).
- JSON-LD sai de `jsonLdNegocio()`; nunca escrever à mão no layout.

Antes de publicar, com o servidor no ar:

```bash
node .cursor/skills/dossie-site-standby/scripts/verificar-arquitetura.mjs \
  --slug <slug> --url http://localhost:4310/
```

Exit 1 = não publica.

## Vercel — projeto `{slug}-product`

Hostname com hífen. O pedido `NOMEDONEGOCIO_PRODUCT` vira `{slug}-product`.

**Preferir MCP Vercel** se o namespace não estiver `needsAuth`: ferramenta `deploy_to_vercel` com `name: "{slug}-product"`, `target: "production"`, `files` = árvore de `sites/<slug>/` (sem `node_modules`). Conferir a URL com `get_project` / `list_deployments`.

**Senão, CLI** (Cloud Agent: `VERCEL_TOKEN`; Desktop: `vercel login`):

```bash
npx --yes vercel@latest whoami
cd sites/<slug>
npx --yes vercel@latest project add <slug>-product
npx --yes vercel@latest link --yes --project <slug>-product
npx --yes vercel@latest deploy --prod --yes
```

- `--prod` aqui é a production **desse** projeto novo, não da Giz Pay.
- **Proibido** `vercel deploy --prod` na raiz do git.
- Sem `vercel link --repo` neste passo.
- Sem domínio customizado do cliente.
- Token só via env `VERCEL_TOKEN`, nunca `--token` na linha.

Depois do deploy: colar a URL no dossiê e na tabela de `prospeccao/leads/index.md`. Conferir a home com `vercel curl / --deployment <url>` ou fetch da URL pública.
