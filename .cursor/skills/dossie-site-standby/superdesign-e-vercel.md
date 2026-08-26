# Superdesign e Vercel — site standby

Este repositório é o curso **Estúdio Giz / Giz Pay**. Site de cliente é outro produto.

## Superdesign (isolado)

1. Preflight: `npx --yes @superdesign/cli@latest` — ler a linha `auth:`. Se não autenticado: `npx --yes @superdesign/cli@latest login` e parar se falhar.
2. **Não** rodar init nem geração contra a UI deste repo. **Não** sobrescrever `.superdesign/design-system.md`.
3. Design system do cliente: `prospeccao/leads/<slug>/design-system.md` (essência, paleta, páginas, CTA, faixa de proposta, fidelidade de fonte/cor).
4. Se houver site atual:
   ```bash
   npx --yes @superdesign/cli@latest extract-website \
     --url "<url>" --design-md --brand --content-structure
   ```
   Ler `.superdesign/website/<domínio>/`. Dobrar o DNA **só** no `design-system.md` do lead (modo inspired-by). A extração na pasta `.superdesign/website/` pode ficar; o `design-system.md` da raiz não.
5. Projeto: `npx --yes @superdesign/cli@latest create-project --title "<Nome fantasia>"`  
   Headless/CI: acrescentar `--no-open`.
6. Draft (um `-p` só). Sempre `--context-file prospeccao/leads/<slug>/design-system.md` e o fecho de fidelidade do Superdesign (“Use ONLY the fonts, colors…”).
7. Fotos: `upload-asset` no projeto; `--reference-id` nos drafts. Logo real → `--purpose brand`. Prints do site/Instagram → `--purpose reference`. Foto que deve aparecer no layout → `--purpose content`.
8. Passar o `canvas:` ao usuário. Mais páginas: `execute-flow-pages` a partir do draft da home, lista da vertical.
9. Implementar no código depois do canvas **ou** se o pedido já pediu standby/Vercel.

Se `create-design-draft` falhar duas vezes: implementar a partir do dossiê + inputs (skill Superdesign: *design-with-your-model*), e dizer isso.

## Implementação (`sites/<slug>/`)

- Next.js App Router + TypeScript + Tailwind, pasta **própria**. Não editar `src/app` da Giz Pay.
- Antes de gerar código, ler o guia em `node_modules/next/dist/docs/` (deste repo ou do app novo).
- `content.ts` (ou equivalente) gerado a partir de `inputs.md`. Placeholders no conteúdo com um flag `placeholder: true`.
- Faixa fixa no topo: “Proposta Estúdio Giz — não é o site oficial”.
- CTA WhatsApp `https://wa.me/55…` se o número for `temos`.
- Rodapé: nome, endereço, horário, Instagram; CNPJ só se `temos`.
- Mobile primeiro. Sem auth, sem form que grave dado pessoal (standby não é CRM).
- JSON-LD `LocalBusiness` só com fatos `temos`.

Scaffold sugerido (ajuste flags ao `create-next-app --help` da versão):

```bash
npx create-next-app@latest sites/<slug> --typescript --tailwind --app --eslint --yes
```

## Vercel — projeto `{slug}-product`

Hostname com hífen. O pedido `NOMEDONEGOCIO_PRODUCT` vira `{slug}-product`.

```bash
vercel whoami
# se falhar: vercel login  →  parar se não autenticar

cd sites/<slug>
vercel project add <slug>-product
vercel link --yes --project <slug>-product
vercel deploy --prod --yes
```

- `--prod` aqui é a production **desse** projeto novo, não da Giz Pay.
- **Proibido** rodar `vercel deploy --prod` na raiz do git.
- Sem `vercel link --repo` neste passo (evita amarrar o standby ao projeto do curso).
- Não adicionar domínio customizado do cliente.
- Token: `VERCEL_TOKEN` no ambiente, nunca na linha de comando.

Se o MCP Vercel estiver autenticado, pode criar/inspecionar o projeto por lá; o deploy continua pela CLI no diretório `sites/<slug>`.

Depois do deploy: colar a URL no dossiê e na tabela de `prospeccao/leads/index.md`. Conferir a home com `vercel curl / --deployment <url>` ou fetch da URL pública.
