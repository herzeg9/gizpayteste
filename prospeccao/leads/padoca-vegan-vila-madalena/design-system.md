# Design system — Padoca Vegan (standby)

Produto novo do cliente. **Não** usar o design system da Giz Pay, da Joya nem da Kio neste arquivo.

## Product
Standby de proposta Estúdio Giz para a Padoca Vegan, Sumarezinho / Vila Madalena. Padaria artesanal vegana com brunch e delivery. Home longa (mobile first) com âncoras: cardápio, sobre, encomendas, como chegar.

## Brand & styling
- Wordmark **“Padoca Vegan”** em serifada de leitura (Literata ou equivalente), não Fraunces da Joya/Kio. Sem folha genérica de “eco” clip-art, sem croissant de ouro.
- Paleta: fundo papel `#F4EFE4`, trigo `#C9A36A`, erva `#4A7C59`, texto carvão `#1A1A18`, beterraba `#9B3D4A` só em detalhe (CTA ou doce).
- **Proibido:** oliva Joya `#3F4F3A` e manteiga/crosta Kio `#E4B04A` / `#8B5A2B`.
- UI: cantos 8–16px, ar um pouco mais “padoca de rua” que boulangerie; cards leves; muito espaço no hero.
- Faixa fixa no topo: “Proposta Estúdio Giz — não é o site oficial” (contraste AA) em carvão sobre papel.
- Badge “placeholder” em itálico em toda copy/foto que não for fato `temos`.
- Hero: padaria vegana / vitrine de doce, **não** tela de app de delivery, **não** restaurante de jantar.

## Pages
Home (hero + CTA delivery oficial) · Cardápio · Sobre · Como chegar. CTA principal: `https://delivery.padocavegan.com/padocavegan/padocavegan`. Instagram `@padocavegan` secundário. Telefone (11) 2503-5930 no rodapé, não como único botão “pedir no WhatsApp”.

## Público (parâmetro 4)
Vizinho do Sumarezinho e público vegano da Vila Madalena, **no celular**. A casa vive de recorrência de bairro e de brunch de fim de semana; quem chega já sabe o que é comida vegana e decide por proximidade e horário, não por explicação de dieta.

Consequências de layout, não de gosto:

- Endereço, horário e como pedir vêm **antes** de discurso sobre veganismo — o leitor já é convertido.
- Tom coloquial de padaria de rua, não linguagem de restaurante nem de causa.
- CTA no delivery oficial, que é o canal que a própria casa empurra no Linktree.
- Densidade baixa: página curta, seções alcançáveis em um toque.

## Hero (parâmetro 4)
Ilustração **própria** em `public/hero-padoca-vegan.webp`, na paleta da casa — vitrine com pães, donuts e cinnamon rolls, planta ao fundo, sem texto e sem pessoa. Registrada no canvas como conteúdo do projeto (`padoca-hero-vitrine`).

Segue `placeholder` na camada de dados: é arte do Estúdio Giz, não afirmação sobre o negócio. Mas é **deste lead** — o JPEG genérico que servia aos três standbys foi removido. Nenhum ativo visual é compartilhado entre leads.

## Constraints
- Use ONLY the fonts, colors, spacing, and component styles defined in this design system. Do not introduce any fonts, colors, or visual styles not in this design system.
- Não copiar texto de Panadero, Tu És Pão, Joya, Kio ou do checkout `delivery.padocavegan.com`.
- Não clonar a UI de pedido (login, carrinho, categorias de app).
- JSON-LD Bakery só com fatos `temos` (nome, endereço, telefone, Instagram).
- Sem formulário que grave dado pessoal.
- Horário: se aparecer, mostrar a lacuna segunda (RG 7h–20h todos os dias vs. HappyCow fecha segunda) ou omitir o dia.
