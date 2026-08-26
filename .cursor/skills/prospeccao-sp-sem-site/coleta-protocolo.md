# Protocolo de busca + coleta (etapa 1)

Rodar **antes** de escrever `brief.md`. Objetivo: cada fato do briefing tem URL e data. Sem fonte → `não encontrado`. Sem chute.

Coletor: `node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs`.

## Ordem das fontes (não inverter)

1. **Places API New** — `search` / `lead` se `GOOGLE_PLACES_API_KEY` existir. `websiteUri` vazio / Instagram / iFood / Linktree / Restaurant Guru = sem site próprio. Wix / Blogspot / Google Sites = `site_basico`.
2. **Queries web** — o script sempre imprime `queriesWeb`. Busca + `fetch --url` das páginas (Maps listagens, “melhores de”, Instagram, iFood).
3. **Qualificar o domínio** — `classify --url "…"` e, se for próprio, `fetch` da home (HTTPS, mobile, uma página, Wix/tema padrão).
4. **Imprensa / listagens** — VEJA SP, Estadão Paladar, Folha, CNN, Gastronominho, Restaurant Guru. `fetch`; copiar só o que está escrito.
5. **Instagram / Facebook públicos** — bio, destaque, WhatsApp na bio. `computerUse` se a busca for ambígua; não logar, não DM.
6. **CNPJ** — só se o número já estiver público. `cnpj --cnpj "…"`.
7. **DNS** — `dns --host "nomefantasia.com.br"` para confirmar que o domínio **não** resolve (apoia veredito “sem site”).

Places ausente: declarar no início da rodada e seguir 2–7. Não fingir 20 fichas de Maps. O coletor **não gera nomes**.

## Comandos

```bash
node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs search \
  --nicho "padaria artesanal" --bairro "Vila Madalena"

node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs init \
  --slug kio-bakehouse-vila-madalena --nome "Kio Bakehouse" --bairro "Vila Madalena"

node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs lead \
  --nome "Kio Bakehouse" --bairro "Vila Madalena" --slug kio-bakehouse-vila-madalena

node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs classify --url "https://linktr.ee/x"
node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs fetch --url "https://…" --out prospeccao/leads/<slug>/coleta.json
node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs evidencia \
  --out prospeccao/leads/<slug>/coleta.json \
  --campo endereco --valor "Rua …" --url "https://…" --data 2026-08-26
node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs report --in prospeccao/leads/<slug>/coleta.json
```

`--out` **mescla** evidências/páginas/DNS; não apaga o que já estava.

## Schema `coleta.json`

```json
{
  "versao": 1,
  "slug": "",
  "nome": "",
  "bairro": "",
  "placesKey": false,
  "queriesWeb": [],
  "candidatos": [],
  "paginas": [{ "url": "", "status": 200, "title": "", "site": {} }],
  "dns": [{ "host": "", "ok": false }],
  "evidencias": [{ "campo": "endereco", "valor": "", "url": "", "data": "YYYY-MM-DD" }],
  "lacunas": []
}
```

Campos mínimos para o dossiê (`report` → `prontoParaDossie`): `nome`, `endereco`, `contato_publico` (ou `instagram` / `telefone` / `whatsapp`), `site_ou_ausencia`.

## O que gravar por lead

```
prospeccao/leads/<slug>/
  brief.md      # humano; tabela Evidências obrigatória
  coleta.json   # máquina; dump do coletor
```

No `brief.md`, a tabela **Evidências** é obrigatória (campo → valor → URL → data). Trecho de review sem link da ficha não entra.

## Campos mínimos para o dossiê depois

Sem estes quatro, o lead **não sobe** para Superdesign: nome, vertical, bairro, **um** contato público (Instagram ou telefone/WhatsApp da ficha do negócio).

Horário conflitante entre fontes: publicar os dois, marcar lacuna — como no Kio (8h vs 10h). Não escolher o mais conveniente.

## O que esta etapa não faz

- WhatsApp / e-mail / DM / Amplemarket
- Scraping em massa, API não oficial do Maps
- Inventar foto, preço, CNPJ ou “desde …”
- Completar fato “óbvio” sem URL
