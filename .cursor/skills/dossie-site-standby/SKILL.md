---
name: dossie-site-standby
description: A partir de um lead ou nome de negócio, captura a essência (padaria, loja de roupas, móveis etc.), monta um dossiê (usando o site atual como base de informação e modelo, se existir), lista tudo que precisa entrar no site, gera o visual no Superdesign, implementa o site e publica na Vercel numa URL de standby `{slug}-product`. Use quando o usuário pedir dossiê, essência do negócio, lista de inputs, site standby, proposta hospedada, Superdesign + Vercel, ou para ir do briefing ao site no ar.
---

# Dossiê → inputs → Superdesign → site standby

Esta skill começa **depois** do briefing (`prospeccao-sp-sem-site`). Não prospecta lista nova e **não envia mensagem ao cliente**.

Função (verbatim):

> Captar a essência do negócio (loja de roupas, padaria, loja de móveis etc.). Fazer um dossiê com todas as informações (caso já exista um site, usá-lo como base de informação e modelo). Após isso, montar uma lista com todas as coisas que vamos precisar inputar no site. Feito isso, automatizar com o Superdesign, criar o site e hospedar no Vercel com uma URL de standby (algo como NOMEDONEGOCIO_PRODUCT).

## Princípios

1. **Essência ≠ ficha cadastral.** O dossiê diz o que o lugar *é* (ritual, materiais, tom, para quem, o que não é). Fatos vêm no mesmo arquivo, com fonte.
2. **Site atual = base, não clone.** Se existir site (mesmo básico), ele alimenta fatos + modelo visual (*inspired-by*). O standby **melhora** IA e conversão; não copia pixel a pixel nem texto de concorrente.
3. **Input com status.** Cada item: `temos` | `placeholder` | `falta`. Placeholder aparece marcado no site. `falta` bloqueante não é inventado como fato.
4. **Um negócio por vez** em Superdesign + deploy. Dossiê/inputs podem reutilizar um `brief.md` já gravado.
5. **Projeto Vercel novo.** Nunca `vercel --prod` na raiz deste repo (Giz Pay / Estúdio Giz). Standby = projeto `{slug}-product`.
6. **URL kebab-case.** Pedido do usuário: `NOMEDONEGOCIO_PRODUCT`. Hostname não aceita `_`. Usar `https://{slug}-product.vercel.app`.

Se não houver lead escolhido, pegar o de maior score em `prospeccao/leads/index.md` ou o nome que o usuário passou. Sem `brief.md` + `coleta.json` com `prontoParaDossie`, rodar antes a skill de prospecção **nesse nome**.

Protocolo: [dossie-protocolo.md](dossie-protocolo.md). Templates: [dossie-template.md](dossie-template.md), [inputs-template.md](inputs-template.md), [design-system-template.md](design-system-template.md), [roteiro-iteracao-template.md](roteiro-iteracao-template.md). Verticais: [verticais.md](verticais.md). Deploy: [superdesign-e-vercel.md](superdesign-e-vercel.md).

```bash
node .cursor/skills/dossie-site-standby/scripts/montar-dossie.mjs gate --slug <slug>
node .cursor/skills/dossie-site-standby/scripts/montar-dossie.mjs fatos --slug <slug>
```

Preflight: skill `fundacao-pipeline`. Sem Superdesign auth, parar no dossiê+inputs. Sem Vercel MCP e sem `VERCEL_TOKEN`, entregar o app em `sites/<slug>/` e **não** inventar URL.

## Fluxo

```
- [ ] 0. Gate (coleta.json + montar-dossie.mjs gate)
- [ ] 1. Essência (vertical + 6–10 frases)
- [ ] 2. Dossiê (fatos da coleta + site atual como modelo)
- [ ] 3. Lista de inputs (temos|placeholder|falta)
- [ ] 4. design-system.md + roteiro-iteracao.md
- [ ] 5. Superdesign (projeto isolado do Giz Pay) — só com roteiro no --context-file
- [ ] 6. Implementar sites/<slug>/ pelo scaffold (padrão de arquitetura v1)
- [ ] 7. verificar-arquitetura.mjs (estático + --url) antes de publicar
- [ ] 8. Vercel projeto {slug}-product
```

Parar cedo conforme o pedido:

| Pedido | Entrega |
|---|---|
| essência / dossiê | `dossie.md` |
| inputs / o que vai no site | + `inputs.md` |
| Superdesign / visual | + `roteiro-iteracao.md` + canvas (não implementa ainda) |
| site / standby / Vercel / URL | implementa + publica |

Pedido que descreve a linha inteira até a URL = autorização para os passos **daquele** negócio (gate → URL).

### 1. Essência

Ler `coleta.json`, o `brief.md` e [verticais.md](verticais.md). Responder, com fonte ou `(inferência)`:

- Vertical (uma): padaria, moda, móveis, salão, restaurante, oficina, pet, clínica, outro
- Uma frase de posicionamento
- Ritual do cliente (entra, pede, espera, leva)
- Materiais / atmosfera (o que se vê e se toca)
- Tom de voz (palavras deles, se houver)
- O que isto **não** é (ex.: padaria de bairro, não rede de shopping)
- CTA natural (WhatsApp, encomenda, visitar, orçamento)

### 2. Dossiê

Gravar `prospeccao/leads/<slug>/dossie.md` a partir da coleta (`montar-dossie.mjs fatos` gera `fatos-dossie.json`). Cada fato do dossiê aponta para a mesma URL da tabela Evidências. Horários que divergem: os dois + lacuna.

Se houver site próprio (mesmo básico):

1. Fetch das páginas públicas; extrair copy, serviços, horário, fotos, IA.
2. Superdesign `extract-website` — `--design-md --brand --content-structure` (ver [superdesign-e-vercel.md](superdesign-e-vercel.md)). **Pular** se a URL for app de pedido / Linktree / checkout; nesses casos o DNA vai no design-system como “o que descartar”.
3. Modo visual: **inspired-by** o site atual (default). Clone fiel só se o usuário pedir.

Se não houver site: Instagram/Maps/iFood como fonte; 1 concorrente do bairro só como referência de *estrutura*, nunca de texto.

Campos sem fonte: `não encontrado`. Placeholder de copy só na etapa 3, rotulado.

### 3. Lista de inputs

Gravar `prospeccao/leads/<slug>/inputs.md` a partir de [inputs-template.md](inputs-template.md) + páginas da vertical.

Tudo que o site vai precisar: marca, fotos, textos, dados (NAP, horário, cardápio), prova social, CTA, legal.

Não avançar para Superdesign com `falta` em: nome, vertical, bairro, e pelo menos um contato (WhatsApp, telefone ou Instagram).

### 4. Design system + roteiro (antes do canvas)

Gravar no lead, nesta ordem:

1. `design-system.md` — paleta **distinta** de Joya e Kio; fecho “Use ONLY the fonts, colors…”.
2. `roteiro-iteracao.md` — script completo da rodada ([roteiro-iteracao-template.md](roteiro-iteracao-template.md)): o que é, o que não é, CTA, fatos `temos`, lacunas, placeholders.

`montar-dossie.mjs gate` precisa sair `prontoParaSuperdesign: true`.

### 5. Superdesign

Seguir [superdesign-rodada.md](superdesign-rodada.md). Este repo **é** o curso Giz Pay — não desenhar isso.

```bash
node .cursor/skills/dossie-site-standby/scripts/superdesign-rodada.mjs plan --slug <slug>
```

- `plan` grava `prompt-p.md` + `rodada-plan.json` e **não** gasta crédito.
- Alvo = produto novo. **Não** `superdesign init`. **Não** `.superdesign/design-system.md`.
- Contexto: só `design-system.md` + `roteiro-iteracao.md` do lead. Um `-p`. `--device mobile`. `--no-open`.
- Recusar projectIds da Giz Pay / Joya / Kio ([projetos-isolados.json](projetos-isolados.json)).
- Depois do draft: `get-design --output` + `audit`. Faixa/CTA/hex falhou → `import-design-draft`, não branch.
- Canvas só quando o usuário pedir. Sem `execute-flow-pages` na 1ª geração.

Implementar código só depois do canvas **ou** se o pedido desta mensagem já incluir site/standby/Vercel.

### 6–7. Código e Vercel

Arquitetura obrigatória: [arquitetura.md](arquitetura.md). Não montar app à mão.

```bash
node .cursor/skills/dossie-site-standby/scripts/scaffold-site.mjs \
  --slug <slug> --nome "<Nome>" --tipo-schema Bakery \
  --base-url https://<slug-curto>-product.vercel.app

cd sites/<slug> && npm install && npm run build

node .cursor/skills/dossie-site-standby/scripts/verificar-arquitetura.mjs --slug <slug>
```

O scaffold lê `coleta.json` e escreve `src/data/negocio.ts` com as fontes. Revisar todo `PREENCHER` — o scaffold não inventa fato. Fonte que diverge vira `fato(..., fonte, ressalva)`; dado que falta vira `lacuna`.

Ler [superdesign-e-vercel.md](superdesign-e-vercel.md) para o deploy. Resumo:

- App Next.js **em** `sites/<slug>/` (não na raiz).
- Conteúdo vem de `src/data/negocio.ts`, tipado — não de um `content.ts` solto.
- Faixa fixa de proposta; placeholders visíveis; WhatsApp se existir; NAP no rodapé.
- `vercel project add {slug}-product` + link **dentro** de `sites/<slug>` + `vercel deploy --prod --yes`.
- Confirmar `vercel whoami` antes. Sem login → parar e dizer.
- Gravar a URL no `dossie.md` e em `prospeccao/leads/index.md`.

## Recusar

- Não publicar no projeto Vercel deste repositório.
- Não apontar domínio real do cliente.
- Não copiar blocos de texto de concorrente.
- Não tratar foto sem origem pública como marca oficial.
- Não fingir deploy se a CLI falhar.
