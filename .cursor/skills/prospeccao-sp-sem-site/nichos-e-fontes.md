# Nichos, bairros e queries — São Paulo

Ler só quando for montar o recorte da rodada.

## Nichos com boa taxa de “sem site” e oferta clara

Preferir um nicho por rodada. Os da esquerda costumam viver de Maps + Instagram + WhatsApp.

| Nicho | Por que o site vende | Queries âncora |
|---|---|---|
| Padaria / confeitaria / cafeteria de bairro | Cardápio, encomendas, horário, fotos | `padaria artesanal`, `confeitaria`, `cafeteria especial` |
| Restaurante familiar / pizzaria / bar de bairro | Cardápio, reservas, eventos | `restaurante caseiro`, `pizzaria forno a lenha`, `bar petiscos` |
| Salão / barbearia / estética | Agenda, serviços, antes/depois | `salão de beleza`, `barbearia`, `estética facial` |
| Clínica odontológica / fisioterapia / psicólogo de bairro | Confiança, convênios, agendamento | `dentista`, `clínica de fisioterapia`, `psicólogo` |
| Pet shop / clínica veterinária | Serviços, emergência, vacina | `pet shop`, `clínica veterinária` |
| Oficina / auto elétrica / funilaria | Confiança, serviços, orçamento | `oficina mecânica`, `auto elétrica`, `funilaria pintura` |
| Estúdio de pilates / yoga / treino | Horários, planos, professores | `estúdio de pilates`, `yoga`, `funcional` |
| Floricultura / ateliê / marcenaria | Portfólio, encomenda | `floricultura`, `ateliê cerâmica`, `marcenaria sob medida` |
| Contabilidade / advogado / imobiliária de bairro | Autoridade local, contato | `escritório de contabilidade`, `advogado trabalhista`, `imobiliária` |

Evitar na primeira rodada: academias de rede, farmácias de bandeira, fast-food, supermercado, shopping âncora.

## Bairros — começar por estes

Rodar **1–3** por vez, nunca a cidade inteira.

**Oeste / centro expandido:** Pinheiros, Vila Madalena, Perdizes, Pompeia, Lapa, Vila Leopoldina, Alto de Pinheiros.

**Sul:** Vila Mariana, Saúde, Moema, Campo Belo, Brooklin, Santo Amaro, Itaim Bibi, Vila Olímpia, Cidade Jardim (cuidado com redes), Campo Grande.

**Centro / centro-sul:** Bela Vista, Consolação, Liberdade, Higienópolis, Santa Cecília, Barra Funda.

**Leste / norte (PME densa, menos site caprichado):** Tatuapé, Mooca, Penha, Santana, Casa Verde, Vila Guilherme, Ipiranga, São Mateus (só se o usuário pedir zona leste ampla).

Para visual + ticket, Pinheiros / Vila Madalena / Vila Mariana / Moema / Tatuapé funcionam bem. Para volume de “sem site”, Mooca, Lapa, Santana, Saúde, Santo Amaro.

## Queries de descoberta

Trocar `{nicho}` e `{bairro}`. Rodar 4–6 queries, não 20.

```
{nicho} {bairro} São Paulo
{nicho} {bairro} São Paulo Instagram
{nicho} {bairro} São Paulo WhatsApp
"{nicho}" "{bairro}" site:instagram.com
{nicho} {bairro} São Paulo iFood
melhores {nicho} {bairro} São Paulo
{nicho} {bairro} "linktr.ee"
{nicho} {bairro} "em construção"
```

Maps (se houver navegador): busca `{nicho} {bairro} São Paulo`, abrir fichas sem website ou com website = Instagram/iFood/Facebook.

## O que conta como “sem site próprio”

- Campo website vazio no Maps
- Website = `instagram.com`, `facebook.com`, `linktr.ee`, `bio.site`, `ifood.com.br`, `rappi.com.br`, `doctoralia.com.br`, `getninjas.com.br`, `wa.me`, `api.whatsapp.com`
- Domínio próprio que cai nos sinais de “site básico” da SKILL.md

## Fontes de enriquecimento (públicas)

| Dado | Onde |
|---|---|
| Endereço, horário, telefone, nota | Ficha Google / Maps |
| Tom, fotos, serviços | Instagram / Facebook públicos |
| Cardápio / faixa de preço | iFood, stories, posts, cardápio no Maps |
| Reclamações / prova | Google reviews, Reclame Aqui |
| CNPJ / razão / CNAE | BrasilAPI `https://brasilapi.com.br/api/cnpj/v1/{cnpj}` se o CNPJ já estiver público |
| Concorrente com site | `{nicho} {bairro} São Paulo` e pegar os que **têm** domínio próprio bom |

Não usar: bases compradas, scraping em massa, dado de grupo fechado, telefone de sócio pessoa física se não estiver no perfil do negócio.

## Sinal de PME (não de rede)

Indicadores de pequeno/médio porte:

- Um endereço (ou poucos)
- Nome de dono / família na fachada ou nas reviews
- Dezenas a poucos milhares de seguidores no Instagram, não dezenas de milhares de rede
- Sem “unidades em todo o Brasil”, sem `.com.br` corporativo óbvio (`rede`, `grupo`, `franchise`)

Se aparecer “pertence ao grupo X” ou cardápio idêntico a uma franquia conhecida → **fora**.
