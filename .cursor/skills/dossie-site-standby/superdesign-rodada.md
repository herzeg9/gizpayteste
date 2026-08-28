# Ritual Superdesign (etapa 3)

Playbook da **rodada de canvas**. Não substitui a skill do plugin Superdesign — **corta** o que nela puxaria para a Giz Pay.

Script:

```bash
node .cursor/skills/dossie-site-standby/scripts/superdesign-rodada.mjs plan --slug <slug>
node .cursor/skills/dossie-site-standby/scripts/superdesign-rodada.mjs audit --slug <slug> --html <arquivo.html>
```

`plan` **não gasta crédito**. `--exec` só depois do usuário pedir canvas.

## Cortes duros (este repo)

| Plugin Superdesign diria | Aqui |
|---|---|
| `init` + `.superdesign/init/` antes de gerar | **Não.** Este codebase é o curso Giz Pay. Alvo = produto novo do cliente. |
| Sempre `--context-file .superdesign/design-system.md` | **Proibido.** Só `prospeccao/leads/<slug>/design-system.md` + `roteiro-iteracao.md` |
| Vários `-p` / branch “para ver” | **Não** na 1ª geração. Um `-p`. Sem `execute-flow-pages` |
| Reusar projeto recente | Recusar IDs em [projetos-isolados.json](projetos-isolados.json) (Giz Pay, Joya, Kio) |

## Orçamento de crédito (1ª geração)

1. `create-project --title "{Nome}" --no-open` (Cloud)
2. **Um** `create-design-draft` (`--device mobile`, um `-p`, dois `--context-file`)
3. `get-design --output` + `audit` — **0** crédito de geração
4. Se a auditoria falhar em faixa / CTA / hex de outro lead: `get-design` + `import-design-draft` (determinístico) **ou** um `iterate-design-draft --mode replace`
5. `branch` e `execute-flow-pages` só se o usuário pedir mais páginas/alternativas

## Contexto

Passar **só**:

- `prospeccao/leads/<slug>/design-system.md`
- `prospeccao/leads/<slug>/roteiro-iteracao.md`

Não passar `dossie.md` nem `inputs.md` (já destilados no roteiro). Teto ~900 linhas por arquivo — o `plan` recusa se estourar.

`--user-request` = pedido humano literal da mensagem (teto 16 KB). `-p` = texto curto em `prompt-p.md`.

## Auditoria (depois do draft)

O HTML precisa ter:

- “Proposta Estúdio Giz — não é o site oficial”
- CTA do lead (URL do design-system / roteiro)
- Pelo menos 2 hex da paleta **deste** lead
- **Não** hex característico de outro standby (oliva Joya, manteiga Kio) se o slug não for esse
- **Não** `wa.me` de outro negócio (ex.: Joya `5511910389816`)
- **Não** copy da Giz Pay / “curso”

Falhou faixa/CTA/telefone: correção determinística, não nova geração.

## Log

Gravar `prospeccao/leads/<slug>/superdesign.md` + `rodada-plan.json` com `projectId`, `draftId`, canvas, `-p`, context files, créditos, resultado do `audit`.
