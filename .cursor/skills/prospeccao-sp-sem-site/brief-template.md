# Brief do estabelecimento

Preencher um arquivo por lead em `prospeccao/leads/<slug>/brief.md`. Copiar este esqueleto. Usar `não encontrado` quando a fonte pública não tiver o dado.

```markdown
# {Nome fantasia}

- **Slug:** `{slug}`
- **Rodada:** {YYYY-MM-DD} · {nicho} · {bairros}
- **Veredito:** sem site | site básico
- **Score:** {0-10}
- **Vale ofertar?** sim / não · {uma frase}

## 1. Identidade
- Nome fantasia:
- Razão social / CNPJ: (se público)
- Categoria:
- Bairro / endereço completo:
- Uma frase do negócio (com as palavras deles, se houver):
- Para quem parece vender: (inferência marcada como inferência)
- Anos / “desde …”: (só se citado)

## 2. Presença digital hoje
- Site próprio: nenhum | {url}
- Qualidade do site (se houver): {sinais da rubrica}
- Instagram:
- Facebook / TikTok:
- WhatsApp / telefone:
- iFood / Doctoralia / outro aggregator:
- Google: nota {x} · {n} avaliações · perfil {url}

## 3. Oferta (para montar páginas)
- Serviços ou produtos citados:
- Diferenciais citados por eles ou por clientes:
- Faixa de preço: (só se pública)
- Horário:
- Formas de pedido/agendamento atuais: (WhatsApp, iFood, telefone, fila)

## 4. Prova social (citar fonte)
- 3–5 trechos curtos de avaliação pública
- Reclamações recorrentes (se houver): o site pode responder a isso?
- Prêmios / imprensa / “melhor de”:

## 5. Visual (URLs, não arquivos binários)
- Logo: {url ou “só foto da fachada”}
- Fachada:
- Interior:
- Produto / resultado do serviço:
- Equipe:
- Paleta / estilo inferido: (ex.: quente, artesanal, clínico-branco)
- Observação para o designer:

## 6. Concorrentes do bairro (com site melhor)
| Nome | URL | O que eles têm e o lead não tem |
|---|---|---|
|  |  |  |
|  |  |  |

## 7. Arquitetura sugerida do site
- Home:
- Páginas:
- CTA principal: (WhatsApp / agendar / pedir / orçamento)
- Seção que mais falta hoje:

## 8. Ângulo da oferta comercial
- Dor: (concreta: “quem busca no Google cai no iFood e não vê o salão”)
- Promessa do site em uma frase:
- Não falar: discurso genérico de “presença digital”

## 9. Evidências (obrigatório — um fato sem URL não entra como fato)
| Campo | Valor | Fonte (URL) | Data |
|---|---|---|---|
| Endereço |  |  |  |
| Telefone / WhatsApp |  |  |  |
| Instagram |  |  |  |
| Horário |  |  |  |
| Google nota / n |  |  |  |
| Site / ausência |  |  |  |

## 10. Fontes
- Lista de URLs usadas (além da tabela)
- Data da coleta
- Arquivo máquina: `coleta.json` se o `coletar.mjs` rodou
- Lacunas para confirmar com o cliente (preços, fotos oficiais, convênios, etc.)
```
