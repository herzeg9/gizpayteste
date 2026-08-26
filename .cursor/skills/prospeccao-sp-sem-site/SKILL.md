---
name: prospeccao-sp-sem-site
description: Encontra estabelecimentos de pequeno e médio porte na cidade de São Paulo sem site próprio (ou com site muito básico) e coleta um briefing comercial útil para criar o site depois e oferecer ao cliente. Use quando o usuário pedir leads, prospecção, negócios sem site, PMEs em São Paulo, pesquisa de estabelecimentos, briefing de site para oferta, ou quando quiser montar uma lista de clientes potenciais de web design.
---

# Prospecção SP — negócios sem site (ou site básico)

Esta skill **não envia mensagem ao cliente**. Ela pesquisa, qualifica e entrega um pacote de briefing.

**Próximo passo:** essência, dossiê, lista de inputs, Superdesign e URL de standby — skill `dossie-site-standby`.

Função (verbatim):

> Buscar na web por estabelecimentos de pequeno/médio porte na cidade de São Paulo que não tenham (ou que seja muito básico) sites. Além de encontrar esses sites, coletar informações sobre o negócio que sejam úteis para criarmos um site (passo posterior) e oferecer para esse cliente.

## Princípios

1. **Recorte estreito.** Nunca buscar “pequenos negócios em São Paulo”. Sempre **nicho + bairro** (ex.: `padaria artesanal Vila Madalena São Paulo`).
2. **Profundidade > volume.** Padrão: **5 a 8 leads qualificados** por rodada. Não entregar dezenas de nomes rasos.
3. **Só dado público.** Maps, busca, Instagram/Facebook públicos, iFood, Doctoralia, site atual, CNPJ público. Não inventar telefone, horário, preço ou história.
4. **O briefing é o produto.** Contato sozinho não basta. O output precisa permitir desenhar o site sem falar com o dono ainda.
5. **Descartar cadeia.** Franquia, rede nacional, shopping de marca grande e negócio já com site profissional saem da lista.

Se o usuário não definir nicho/bairro/quantidade, usar os padrões em [nichos-e-fontes.md](nichos-e-fontes.md) e declarar o recorte no início da resposta.

Antes da rodada, se a fundação nunca foi checada nesta sessão: skill `fundacao-pipeline` (Places se houver chave; senão busca web).

Protocolo de evidência: [coleta-protocolo.md](coleta-protocolo.md). Coletor:

```bash
node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs search --nicho "padaria artesanal" --bairro "Vila Madalena"
node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs init --slug <slug> --nome "Nome da Casa" --bairro "Vila Madalena"
node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs fetch --url "https://…" --out prospeccao/leads/<slug>/coleta.json
node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs evidencia --out prospeccao/leads/<slug>/coleta.json --campo endereco --valor "…" --url "https://…"
node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs report --in prospeccao/leads/<slug>/coleta.json
```

## Fluxo

Copie e marque:

```
Rodada:
- [ ] 1. Recorte (nicho + 1–3 bairros + N leads)
- [ ] 2. Descoberta (coletar.mjs search + queriesWeb)
- [ ] 3. Qualificação de site (classify --url + rubrica)
- [ ] 4. Coleta profunda (lead + imprensa + evidências)
- [ ] 5. Briefs + ranking
- [ ] 6. Persistir brief.md + coleta.json em prospeccao/leads/
```

### 1. Recorte

Pedir (ou assumir) em uma linha:

- Nicho (um só por rodada)
- 1–3 bairros de São Paulo
- Quantidade-alvo (default 5–8)
- Exclusões (já prospectados, redes, etc.)

Ler [nichos-e-fontes.md](nichos-e-fontes.md) para queries, bairros e fontes.

### 2. Descoberta

Montar um pool de **12–20 candidatos brutos** para sobrar 5–8 no fim.

**Primeiro** rodar o coletor (`search`). Se Places responder, a lista `candidatos` é o pool inicial (`sem_site` entra; `tem_dominio` fica para a rubrica). Se Places faltar, usar `queriesWeb` na busca — não inventar nomes que a busca não mostrou.

Fontes, nesta ordem (detalhe em [coleta-protocolo.md](coleta-protocolo.md)):

1. Places (`websiteUri`) se houver chave
2. **Google Search** — queries do recorte; priorizar destino que **não** é domínio próprio (Maps, Instagram, iFood, Facebook, Doctoralia, GetNinjas, Linktree)
3. **Google Maps** — ficha: site vazio, Instagram, Linktree, iFood ou Facebook = sem site próprio
4. **Instagram / Facebook** — bio com WhatsApp e sem URL própria
5. **Marketplaces** — iFood, Rappi, Doctoralia, GetNinjas: presença lá **não** é site
6. **Complemento** — Reclame Aqui, notícias de bairro, “melhores de [bairro]”

`classify` devolve `sem_site` (aggregator), `site_basico` (Wix/Blogspot/Google Sites), `fonte_terceiro` (VEJA/Estadão/Folha — **não** é o site do negócio), ou `tem_dominio` (qualificar na rubrica).

Para cada candidato bruto, anotar só: nome, bairro, fonte da descoberta, URL da evidência.

Não usar scraper em massa, extensão de extração do Maps, nem API não oficial. Pesquisa dirigida com as ferramentas de busca/fetch/navegador da sessão.

### 3. Qualificar o site

Para **cada** candidato, buscar `"Nome exato" São Paulo` e abrir o que parecer site oficial.

| Veredito | Critério | Ação |
|---|---|---|
| **Sem site** | Nenhum domínio próprio. Só Maps, Instagram, Facebook, WhatsApp, iFood, Linktree, Doctoralia | Segue |
| **Site básico** | Ver rubrica abaixo | Segue, com nota do site atual |
| **Fora** | Site profissional, franquia/rede, fechado, sem contato público, duplicata | Descarta (1 linha do motivo) |

**Site básico** (basta 2 sinais):

- URL é Linktree, Beacons, Google Sites, Blogspot, Wix/Hotmart/Loja Integrada no tema padrão
- Uma página, “em construção”, só botão de WhatsApp
- Sem HTTPS, ou mobile quebrado, ou atualização aparente de vários anos
- Sem endereço/horário/serviço claros; fotos pixeladas; copy genérica de template
- O “site” no Maps aponta para iFood, Instagram ou Facebook

**Não é básico:** domínio próprio, páginas de serviço, fotos decentes, WhatsApp/form, mobile ok, cara de agência ou de dono caprichoso.

### 4. Coleta profunda

Só para quem passou. `init` (scaffold), `lead` (Places se houver chave), `classify` + `fetch` em cada URL, `dns` nos hosts candidatos, `cnpj` só se o número já for público, `evidencia` para cada fato. `report` precisa sair `prontoParaDossie: true` antes de gravar o brief como qualificado.

Preencher [brief-template.md](brief-template.md) **incluindo a tabela Evidências**. Campos sem fonte ficam `não encontrado` — nunca chute. Horários que divergem entre VEJA/CNN/Estadão: os dois valores + lacuna, não a média.

Prioridade do que falta para **fazer o site**:

1. Identidade (nome, o que vende, para quem, bairro)
2. Oferta (serviços/produtos, diferenciais citados em bio/avaliações)
3. Prova social (nota Google, nº de reviews, 3–5 trechos públicos)
4. Contato e operação (endereço, WhatsApp, horário, Instagram)
5. Visual (URLs de foto de fachada, interior, produto, equipe; paleta inferida)
6. Concorrentes do **mesmo bairro** que já têm site bom (2–3), com o que o lead não tem
7. Arquitetura sugerida do site (páginas + CTA)
8. Ângulo da oferta comercial (dor concreta, não “você precisa de um site”)

CNPJ/razão social: só se aparecer em busca pública (BrasilAPI, páginas da empresa, menções). Não é bloqueante.

### 5. Score e ranking

Score 0–10, soma limitada a 10:

| Sinal | Pontos |
|---|---|
| Sem site próprio | +3 |
| Site próprio básico | +2 |
| Instagram com atividade recente aparente | +1 |
| Google ≥ 4,3 **e** ≥ 15 avaliações | +2 |
| WhatsApp público | +1 |
| Fotos úteis para o site (espaço/produto) | +1 |
| Nicho em que site converte fácil (ver fontes) | +1 |
| Franquia/rede nacional | −3 e em geral **fora** |
| Site já profissional | **fora** |
| Fechado / sem contato | **fora** |

Ordenar a rodada por score. Empate: mais avaliações, depois visual mais rico.

### 6. Persistência e resposta

Para cada lead qualificado, gravar:

```
prospeccao/leads/<slug-bairro-nome>/brief.md
prospeccao/leads/<slug-bairro-nome>/coleta.json   # se o coletor rodou
```

`slug` em minúsculas com hífen, estável (`padaria-vila-madalena-pao-da-esquina`).

Também atualizar `prospeccao/leads/index.md`: tabela da rodada (data, nicho, bairros, leads, scores, veredito).

Na resposta ao usuário:

1. Recorte usado
2. Tabela ranqueada (nome, bairro, veredito, score, WhatsApp/Instagram se público, 1 linha de ângulo)
3. Descartados (curto)
4. Caminhos dos `brief.md`
5. Lacunas que o site ainda precisaria confirmar com o cliente

Exemplo preenchido: [examples.md](examples.md).

## Recusar e pular

- Não mandar WhatsApp, e-mail ou DM.
- Não inventar dado para “completar” o brief.
- Não prospectar menor de idade, conteúdo adulto ilegal, nem dado pessoal de funcionário (CPF, casa, etc.).
- Não copiar texto longo de concorrentes; só apontar URL e o que o lead não tem.
- Se a sessão não tiver busca/web, dizer isso e parar — não fingir leads.

## Quando o usuário já trouxe um nome

Pular descoberta. Qualificar o site daquele negócio, coletar o brief e dizer se vale a oferta.

Se o pedido já incluir dossiê, site ou Vercel, ao terminar o `brief.md` seguir a skill `dossie-site-standby`.
