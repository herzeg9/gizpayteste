# Os 5 parâmetros da linha de operações

Programa de melhoria do site gerado. **Qualidade acima de quantidade.**

## Regra de trabalho (vale para todo agente)

> Não realizar nada concreto — código, template, scaffold, deploy — antes de os **cinco** escopos estarem registrados aqui.

O usuário passa a especificação de um parâmetro por vez. Enquanto faltar escopo, o trabalho é **especificar**: entender o pedido, mapear o que ele exige, achar as tensões com os outros parâmetros e decidir no papel. Implementar cedo, um parâmetro de cada vez, produz retrabalho — porque as decisões se contradizem entre parâmetros e a última a chegar desmancha as anteriores.

### O que a regra congela, e o que não congela

O congelamento é sobre **mudar o padrão**, não sobre operar com ele.

| Ação | Pode agora? |
|---|---|
| Gerar um standby novo para um lead, com o padrão v1 como está | **sim** — é o produto funcionando |
| Rodar coleta, dossiê, canvas, verificador | **sim** |
| Alterar o `template/`, o `schema.ts`, o scaffold ou os verificadores | **não** — é mexer no padrão |
| Implementar item do baseline do parâmetro 2 (CTA no rodapé, `og:image`, `oferta`) | **não** — espera os cinco escopos |
| Corrigir defeito já publicado com risco real (ex.: `openingHours` inválido) | **só com autorização explícita do usuário** |

Esta leitura vem de "toda a estrutura que iremos desenvolver": o que está em suspenso é o programa de melhoria, não a linha de produção. Se a intenção do usuário for congelamento total, ele corrige e este quadro muda.

| # | Parâmetro | Escopo | Implementado |
|---|---|---|---|
| 1 | Estrutura / Arquitetura | fechado | sim — padrão v1 |
| 2 | Funcionalidade | **fechado** | não — aguarda 3, 4 e 5 |
| 3 | Desempenho | aguardando | — |
| 4 | Especificidade | aguardando | — |
| 5 | Entrega | aguardando | — |

---

## 1. Estrutura / Arquitetura — fechado

Pedido do usuário:

> Todo site profissional e com um alto fluxo tem uma arquitetura consistente e com uma equipe de database para respaldar a arquitetura. A arquitetura é o passo essencial para não se tornar algo genérico e sem valor. Utilizando como exemplo diversos sites de big Techs, fica claro que precisamos gerar valor a partir de segurança. Após modelarmos um padrão de Arquitetura, será simples repetir a fórmula para todos os futuros projetos.

Detalhe em [arquitetura.md](../dossie-site-standby/arquitetura.md). Requisitos derivados, para este documento se sustentar sozinho:

1. **Quatro camadas, não invertíveis:** `coleta.json` (evidência) → `src/data/negocio.ts` (dado tipado) → `src/lib/` (derivação: SEO, segurança) → `src/app/` + componentes (apresentação). A apresentação não decide o que é fato.
2. **Procedência obrigatória:** todo dado é `fato(valor, fonte)`, `placeholder(valor, motivo)` ou `lacuna(motivo, fontes)`. `Fonte` = URL + veículo + data. Nenhum fato compila sem os três.
3. **Fato com fonte concorrente** (`ressalva`) vai para a página, **não** para o dado estruturado.
4. **Nove headers de segurança** aplicados em `/(.*)`, com CSP estrita sem `nonce` — porque nonce forçaria render dinâmico e mataria o cache de CDN.
5. **Arquivos obrigatórios por site:** `robots.ts` (noindex), `sitemap.ts`, `not-found.tsx`, `src/data/{schema,negocio}.ts`, `src/lib/{seo,seguranca}.ts`.
6. **JSON-LD sempre derivado** de `negocio.ts`; escrever à mão no layout é falha de verificação.
7. **A fórmula se repete por ferramenta, não por memória:** `scaffold-site.mjs` cria o site já no padrão; `verificar-arquitetura.mjs` é portão com exit code, em modo estático e contra a URL viva.
8. **O verificador precisa provar que reprova** — a tabela de mutações está na `arquitetura.md`.

---

## 2. Funcionalidade — fechado

Pedido do usuário:

> Muitas vezes não há um padrão que podemos copiar para que cada projeto tenha e atenda funções mínimas para seu objetivo. Cada projeto de site pode ser de uma área completamente diferente, mas todos precisam de funcionalidades básicas. Assim, cada funcionalidade específica deve ficar para quando formos trabalhar apenas em um projeto. Não vamos realizar um trabalho do 0 a 100% com todas as funcionalidades possíveis, causará lentidão e problema. Assim nosso objetivo é realizar um padrão mínimo de funcionalidade para cada projeto, desde que seja bem feito e condizente com os sites do mercado atualmente, sem divergências absurdas.

### Critério de corte

Um item só é baseline se as três forem verdade:

1. a falta dele quebra uma das cinco perguntas que todo visitante de PME faz — *é aqui mesmo? o que vocês fazem? onde ficam e quando abrem? dá pra confiar? como falo com vocês agora?*
2. praticamente todo site de PME de mercado tem;
3. funciona **sem nenhum dado que só o dono tem**.

O critério 3 é o que mais elimina candidato, e é o que separa este produto de um site comum: o standby é feito antes de o cliente existir.

### Baseline (8 itens)

| # | Item | O que quebra sem ele |
|---|---|---|
| B1 | Identificação acima da dobra: nome, uma linha, bairro | o visitante não confirma que chegou no lugar certo |
| B2 | Um CTA acionável (WhatsApp / telefone), repetido em 3 posições | o site vira panfleto; é a única "função" real de site de PME |
| B3 | Ficha do local: NAP, horários, link de rotas | perde para a própria ficha do Google |
| B4 | Oferta nomeada, 4–12 itens, preço opcional | "salão de beleza" não converte; "corte, coloração, mechas" converte |
| B5 | Prova pública com procedência (nota + 1–3 citações com link) | nenhuma razão externa para acreditar |
| B6 | FAQ, 3–6 pares, incluindo o que não sabemos | as lacunas ficam sem endereço fixo e somem na próxima iteração |
| B7 | Esqueleto: âncoras, rodapé com fontes, 404 com marca, **prévia de compartilhamento** | a proposta chega no WhatsApp do dono como texto cru |
| B8 | Funcionar no celular: responsivo, viewport sem `user-scalable=no`, alvo de toque ≥24px | a proposta é aberta no celular, dentro do WhatsApp |

Regras de estado por item, que a camada de dados já sabe expressar:

- **Nunca placeholder:** nome, bairro, CTA, nome de item da oferta, depoimento. Link ou serviço inventado é afirmação falsa sobre terceiro.
- **B3 nunca some**, os campos é que mudam de estado. Horário divergente aparece como lacuna com as duas fontes — comunica método.
- **B5 some inteiro** se não houver avaliação pública. Bloco de prova vazio é pior que nenhum.
- **B6 é o escoadouro das lacunas.** É o único item que aceito divergir do "todo site tem", e a justificativa é a camada de dados, não estética.

Sobre B7: hoje o `seo.ts` define `openGraph.title` e `description` mas **não define `images`**. O primeiro contato do dono com o trabalho não é a página — é o card de prévia no chat. É o defeito de funcionalidade mais barato de corrigir e o de maior impacto no funil.

### Fronteira — o que NÃO entra

Critério de saída (os três): o cliente **assinou**, o dado é **oficial e dele**, e existe **um dono do dado** que mantém aquilo atualizado.

Funcionalidade transacional não entra num site que o dono não autorizou: um standby que aceita agendamento promete, em nome de terceiro, um compromisso que ninguém assumiu. Isso não é escopo, é responsabilidade.

| Vertical | Fica para projeto único |
|---|---|
| Salão / barbearia / pet | agendamento com agenda real, profissional, duração |
| Oficina | orçamento com placa/modelo, upload de foto, tabela de mão de obra |
| Restaurante / padaria | cardápio completo com pedido, carrinho, iFood |
| Clínica | convênios, agendamento de avaliação — dado de saúde é sensível (LGPD art. 5º, II) |
| Marcenaria / móveis | configurador sob medida, simulação de ambiente |
| Loja / ateliê | catálogo com estoque, grade, checkout |
| Qualquer | blog, newsletter, área do cliente, busca interna, chat, cupons, multi-idioma |

**Página única com âncoras é o baseline.** Multi-página exige volume de conteúdo oficial que, por definição, não temos.

A fronteira é o que protege a economia do produto: cada standby que ganha feature de vertical vira projeto artesanal, e a escala desaparece. A recusa é a arquitetura.

### Tensões com o parâmetro 1 — decididas

**Formulário de contato — não entra.** `form-action 'none'` restringe destino de submissão; **não afeta link de saída**, então `wa.me`, `tel:` e `mailto:` funcionam com a política intacta. Verificado na [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/form-action): a diretiva é de navegação e restringe "the URLs which can be used as the target of form submissions". A ressalva conhecida — navegadores divergem sobre bloquear o *redirect posterior à submissão* — não nos alcança justamente porque não há submissão. Aceitar formulário custaria: `form-action 'self'`, rota POST (adeus 100% estático), destino da mensagem, e captcha de terceiro — que reabre `script-src`, exatamente o que estamos vendendo. E há o problema maior: num standby, **quem é o controlador LGPD?** A pessoa acha que fala com a padaria; a padaria não é nossa cliente. Compensação: `wa.me` com mensagem pré-preenchida tem atrito menor que formulário e é o padrão do mercado brasileiro.

**Mapa — imagem estática self-hosted, ou nada.** Nível 0 (endereço + link "abrir rotas") é o baseline: custo zero, e no celular abre o app nativo, que é o que o usuário quer. Nível 1 (imagem renderizada no build, servida do nosso domínio, provedor OSM com atribuição) é upgrade autorizado quando `endereco` é fato — `img-src 'self'` fica intacto. **Iframe do Google nunca:** fura `default-src`, traz cookie de terceiro (tornando falsa a nossa nota de privacidade) e troca o argumento inteiro de segurança por um mapa que ninguém arrasta.

**Analytics — zero, e medir a entrega em vez da audiência.** O standby não é campanha: é um link enviado a uma pessoa. O sinal que importa não é pageview, é resposta. Baseline: um CTA discreto "Falar com o Estúdio Giz" apontando para o nosso `wa.me` com o **slug da proposta na mensagem** — atribuição da única conversão que paga a conta, sem uma linha de JavaScript.

> **Correção de uma justificativa errada.** A primeira versão deste documento dizia que o Vercel Web Analytics exigiria `'unsafe-inline'` ou um hash frágil. Isso está **errado** e a verificação desmentiu: o componente cria um `<script src>` externo apontando para `/_vercel/insights/script.js`, mesma origem — ou seja, `script-src 'self'` e `connect-src 'self'` já permitiriam, sem tocar na CSP. O problema real documentado ([vercel/analytics#122](https://github.com/vercel/analytics/issues/122)) é que ele não aceita `nonce`, e nós não usamos nonce.
>
> Então a decisão continua a mesma, mas o motivo muda de **impossível** para **escolhido**: ligar analytics tornaria falsa a frase "este standby não coleta dados", que é justamente o argumento da página, em troca de um número que não decide nada. Fica desligado por princípio, não por limitação técnica — e quem quiser reabrir a discussão tem o custo real à vista.

Nota de implementação para o CTA: `https://wa.me/<numero>?text=<urlencoded>` é o formato [oficial do WhatsApp](https://faq.whatsapp.com/5913398998672934) (número em formato internacional, sem `+`, zeros ou traços). Cuidado conhecido: o redirect do `wa.me` corrompe emoji (caractere de 4 bytes vira `�`); se a mensagem pré-preenchida tiver emoji, usar `https://api.whatsapp.com/send?phone=…&text=…`, que pula o redirect. Como a nossa mensagem carrega o slug, o mais simples é **não usar emoji**.

**Fontes e ícones — confirmado.** `next/font` serve do próprio domínio; SVG inline não gera requisição. Proibido: ícone via CDN, icon font, e `<link>` para `fonts.googleapis.com` (a tentação aparece quando alguém cola um snippet de design).

O baseline inteiro cabe dentro do parâmetro 1 **sem afrouxar uma diretiva da CSP**. É a melhor validação de que os dois foram desenhados de forma coerente.

### Mudanças no contrato de dados (a implementar depois)

1. `cardapio` → `oferta`, agnóstico de vertical; `preco` passa a **opcional** (serviço sem tabela é legítimo).
2. Seções saem do `page.tsx` e voltam para o dado — hoje `const secoes = ["Padaria","Brunch","Jantar"]` está hardcoded na Joya, ou seja, o layout sabe que o negócio é padaria.
3. `Horario` ganha `iso` opcional; `seo.ts` só emite `openingHoursSpecification` quando existir. Formato conferido na [doc do Google](https://developers.google.com/search/docs/appearance/structured-data/local-business): `dayOfWeek` com nomes por extenso em inglês, `opens`/`closes` em `hh:mm`; **dia fechado é `opens` e `closes` ambos `"00:00"`** (não omitir o dia); 24 horas é `"00:00"`–`"23:59"`.
4. `copy.previa?: Campo<Imagem>` para a `og:image`.
5. `mapaEstatico?: Campo<Imagem>` — só quando `endereco` é fato.
6. O WhatsApp do Estúdio Giz **não** entra em `Negocio`: `Negocio` é ficha do lead, e todo campo dela carrega procedência porque é afirmação sobre terceiro. Nosso canal é configuração, vai em `estudio.ts` sem `Campo`.
7. **Gate de mínimo publicável:** nome fato, endereço fato, um contato fato, ≥3 itens de oferta com nome fato. Abaixo disso não sabemos o suficiente para propor — e proposta ruim queima o lead.

Nenhum campo novo para formulário, analytics, agendamento ou pedido. O contrato quase não cresce, o que é bom indício de baseline calibrado.

### Verificação

Script separado `verificar-funcionalidade.mjs`, mesmo contrato de exit code, com a mesma tabela de teste negativo. Separado do de arquitetura de propósito: parâmetros falham por razões diferentes, e um portão que mistura "sem CTA" com "sem frame-ancestors" fica ilegível.

Prova por máquina: CTA presente e batendo com `telefone` em E.164; endereço no HTML; `openingHoursSpecification` válido; ≥3 itens de oferta; depoimento com fonte; `og:image` respondendo 200 na mesma origem; 404 com status 404 de verdade; viewport sem `user-scalable=no`; **zero `<form>`**; **zero `<iframe>`**; **nenhum host de terceiro em recurso carregado** (distinguindo de link de saída, que é permitido).

Só aproximação, e a saída precisa dizer isso: "CTA acima da dobra" (posição no documento correlaciona, não equivale), "toda lacuna tem eco na página" (casamento de string não pega redação ruim), alvo de toque (exige geometria computada).

Só revisão humana: se a oferta representa o negócio; se a headline placeholder promete o que o negócio não entrega; se a FAQ responde a dúvida daquele vertical; se o mapa mostra o lugar certo; se a página parece o site oficial apesar da faixa; se há pessoa identificável numa imagem.

**O verificador prova presença e consistência, nunca adequação.** Portão verde é licença para a revisão humana começar, não substituto dela.

---

### Estado atual dos três standbys contra o baseline

Auditado em 2026-08-27 por leitura de código e resposta do servidor. Serve para dimensionar o parâmetro 2 antes de implementar — não é lista de tarefas ainda.

| Item | Joya | Kio | Padoca | Veredito |
|---|---|---|---|---|
| B1 identificação | ok | ok | ok | `nome` é `string` cru, **sem procedência** — decidir |
| B2 CTA em 3 posições | nav + hero | nav + hero | nav + hero | **falta o rodapé nos três** |
| B3 ficha do local | ok | ok | ok | `openingHours` inválido nos três |
| B4 oferta ≥3 itens | 8 | 5 | 4 | passa; falta renomear e tornar `preco` opcional |
| B5 prova com fonte | 2 | 3 | 2 | passa |
| B6 FAQ 3–6 | 3 | 3 | 3 | passa |
| B7 esqueleto | 404 real, fontes no rodapé | idem | idem | **`og:image` ausente nos três** |
| B8 celular | `width=device-width, initial-scale=1` | idem | idem | viewport ok; alvo de toque **não medido** |

Evidências: `curl` de rota inexistente devolve HTTP 404 com a faixa; o HTML servido traz `og:title`, `og:description`, `og:locale` e `og:type`, e **nenhum `og:image`**; nenhum site sobrescreve viewport nem usa `user-scalable=no`.

O saldo é melhor do que eu esperava: **cinco dos oito itens já passam**. O parâmetro 2 é, na prática, três correções (CTA no rodapé, `og:image`, `openingHours`) mais a generalização de `cardapio` para `oferta`. Isso muda o tamanho da fase de implementação e é exatamente o tipo de coisa que só aparece quando se especifica antes de codar.

Duas decisões ficaram em aberto e precisam ser tomadas na implementação:

- **`nome` sem procedência.** Hoje é `string`. É a identidade do registro (não existe lead sem nome) mas também é afirmação sobre terceiro. A evidência já existe em `coleta.json`; a pergunta é se ela precisa aparecer no site.
- **Alvo de toque de 24 px** exige geometria computada. Ou entra numa auditoria de layout, ou fica para o parâmetro 3 — não dá para provar com leitura de código, e fingir que dá seria pior que não checar.

## Restrições já fixas que 3, 4 e 5 herdam

Decidido nos parâmetros 1 e 2. Um parâmetro novo pode **contrariar** qualquer uma destas — mas aí a mudança é explícita, com o preço dito em voz alta, e o verificador muda junto. O que não pode é uma decisão nova revogar outra em silêncio.

| Restrição | De onde vem | O que ela custa se for revogada |
|---|---|---|
| Rotas 100% estáticas, cacheáveis em CDN | 1 — foi o motivo de recusar `nonce` na CSP | render dinâmico, custo por requisição, e a CSP precisa de nonce ou hash |
| `script-src 'self'`, zero script de terceiro | 1 | qualquer pixel, captcha, chat ou mapa embutido reabre a diretiva |
| Sem cookie, sem coleta de dado pessoal | 1 e 2 | a nota de privacidade da página deixa de ser verdadeira |
| Sem formulário (`form-action 'none'`) | 2 | rota POST, destino da mensagem, antispam e a questão do controlador LGPD |
| `robots` noindex | 1 | a proposta passa a competir com o cliente na busca |
| Página única com âncoras | 2 | multi-página exige conteúdo oficial que a proposta não tem |
| Todo fato carrega URL e data | 1 | perde-se o que separa este produto de um template |
| Nada de dado inventado como fato | 1 e 2 | risco reputacional direto com o dono |

## 3. Desempenho — aguardando

Para especificar bem quando o escopo chegar, o que preciso entender: **o que conta como rápido o suficiente** (métrica de campo tipo Core Web Vitals, ou nota de Lighthouse, ou orçamento de bytes?), **em que rede e aparelho** (a proposta é aberta no celular do dono, dentro do WhatsApp), e **se a meta é o standby ou o site final do cliente** — são regimes diferentes. Já sei que colide com: imagem de hero e mapa estático (peso), `next/font` (bloqueio de render), e a decisão de manter tudo estático (que ajuda aqui).

## 4. Especificidade — aguardando

O que preciso entender: se "especificidade" é sobre o **visual** ficar com cara daquele negócio e não de template, sobre o **conteúdo** ser específico do vertical, ou sobre a **proposta comercial** ser específica daquele dono. Colide diretamente com o baseline do parâmetro 2 — quanto mais específico, menos repetível — e é aí que a fronteira do que fica para a fase de projeto único vai ser testada.

## 5. Entrega — aguardando

O que preciso entender: se entrega é o **deploy** (projeto Vercel, URL, proteção), o **envio ao dono** (como a proposta chega, o que acompanha), ou o **handoff** se ele aceitar (quem passa a manter, o que vira do domínio e dos dados). Colide com: `robots` noindex, a medição por `wa.me` com o slug decidida no parâmetro 2, e a regra de nunca publicar na raiz nem no projeto `gizpayteste`.

---

## Defeitos achados durante a especificação

Não corrigidos: a regra manda fechar o escopo antes. Ficam na fila da fase de implementação.

| Defeito | Onde | Gravidade |
|---|---|---|
| `openingHours` em formato inválido — emitimos `"Terça a sábado 8h – 22h"`. O schema.org exige código de dois dígitos (`Mo Tu We Th Fr Sa Su`) e hora em 24h: `"Tu-Sa 08:00-22:00"`. Confirmado em [schema.org/openingHours](https://schema.org/openingHours); o Google prefere `openingHoursSpecification`. | `src/lib/seo.ts` dos três sites | dado estruturado errado no ar |
| `openGraph.images` ausente: a proposta compartilhada no WhatsApp chega sem card | `src/lib/seo.ts` | perda direta no funil |
| Seções do cardápio hardcoded no layout | `sites/joya-…/src/app/page.tsx` | vertical vazando para apresentação |
| Rótulo do CTA no nav divergente do dado (`"Reservar"` fixo vs. `ctaPrimario.rotulo`) | `sites/joya-…/src/app/page.tsx` | inconsistência pequena |
