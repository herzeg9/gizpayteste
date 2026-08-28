# Protocolo de dossiê + inputs (etapa 2)

Começa **depois** de `brief.md` + `coleta.json` com `report` → `prontoParaDossie: true`. Sem isso, voltar à skill `prospeccao-sp-sem-site`.

Objetivo: o Superdesign e o `sites/<slug>/` só recebem fato com fonte, inferência rotulada, ou placeholder visível.

## Gate

```bash
node .cursor/skills/prospeccao-sp-sem-site/scripts/coletar.mjs report \
  --in prospeccao/leads/<slug>/coleta.json

node .cursor/skills/dossie-site-standby/scripts/montar-dossie.mjs gate --slug <slug>
```

Bloqueantes para Superdesign: nome, vertical, bairro, **um** contato público (Instagram, telefone ou WhatsApp da ficha). `falta` nesses quatro = parar.

## Ordem (não inverter)

1. Ler `coleta.json` (evidências, lacunas, páginas, DNS) + `brief.md`.
2. `montar-dossie.mjs fatos` — dump máquina `fatos-dossie.json`.
3. Escrever `dossie.md` (essência humana + fatos com fonte). Horário conflitante: **os dois valores + lacuna**, nunca a média.
4. Escrever `inputs.md` — cada linha `temos` | `placeholder` | `falta`.
5. Escrever `design-system.md` **do lead** (nunca copiar Giz Pay, Joya ou Kio).
6. Escrever `roteiro-iteracao.md` — o script que a IA do Superdesign vai ler via `--context-file`.
7. Superdesign (etapa 3): `superdesign-rodada.mjs plan` → canvas só com pedido. Site básico = inspired-by a marca, não clonar o app.

## Site atual

| Veredito da coleta | O que fazer |
|---|---|
| `sem_site` | Instagram / imprensa / Maps. 1 concorrente só de **estrutura**. |
| `site_basico` (Wix, Linktree+delivery) | Fetch das páginas; DNA no design-system (o que reaproveitar / o que descartar). `extract-website` só se a URL for a marca, não um checkout. |
| `tem_dominio` profissional | Fora da fila de standby (já tem site). |

## O que esta etapa não faz

- Canvas Superdesign (isso é etapa 3; o **roteiro** já nasce aqui)
- Inventar horário, WhatsApp ou “desde …” para fechar o dossiê
- Copiar copy de concorrente
- Usar paleta da Joya (oliva) ou da Kio (manteiga) em outro lead
