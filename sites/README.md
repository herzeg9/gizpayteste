# Sites standby

Um app Next.js por cliente, publicado em `https://{slug}-product.vercel.app`.

Criado pela skill `dossie-site-standby`, orquestrado pela `central-operacoes`. Quadro: `prospeccao/CENTRAL.md`. Não misturar com o site da Giz Pay na raiz.

Todos seguem o **padrão de arquitetura v1** — [`arquitetura.md`](../.cursor/skills/dossie-site-standby/arquitetura.md).

> O padrão está congelado enquanto os cinco parâmetros da linha não fecharem ([`parametros.md`](../.cursor/skills/central-operacoes/parametros.md)). Criar site novo com ele: liberado. Alterá-lo: espera o escopo.

| Pasta | Projeto Vercel | URL | Arquitetura |
|---|---|---|---|
| `joya-boulangerie-vila-madalena/` | `joya-boulangerie-product` | https://joya-boulangerie-product.vercel.app | v1 |
| `kio-bakehouse-vila-madalena/` | `kio-bakehouse-product` | https://kio-bakehouse-product.vercel.app | v1 |
| `padoca-vegan-vila-madalena/` | ainda não publicado | — | v1 |

## Criar o próximo

```bash
node .cursor/skills/dossie-site-standby/scripts/scaffold-site.mjs \
  --slug <slug> --nome "<Nome>" --tipo-schema Bakery \
  --base-url https://<slug-curto>-product.vercel.app

cd sites/<slug> && npm install && npm run build
```

O scaffold lê `prospeccao/leads/<slug>/coleta.json` e já escreve as fontes em `src/data/negocio.ts`. Onde a coleta não decide, o campo sai como `lacuna("PREENCHER: …")`.

## Verificar antes de publicar

```bash
node .cursor/skills/dossie-site-standby/scripts/verificar-arquitetura.mjs --slug <slug>

# com o servidor no ar, confere os headers que ele devolve de fato
cd sites/<slug> && npx next start -p 4310 &
node .cursor/skills/dossie-site-standby/scripts/verificar-arquitetura.mjs --slug <slug> --url http://localhost:4310/
```

Exit 1 = não publica.
