import type { Track } from "./types";

export const track3: Track = {
  id: "como-a-web-funciona",
  number: "03",
  title: "Como a web funciona",
  tagline: "O que acontece por baixo do Framer",
  description:
    "Você não precisa programar para construir um site excelente, mas precisa entender o que a ferramenta gera. Domínio, HTML, CSS, JavaScript, performance e SEO em português claro.",
  lessons: [
    {
      slug: "do-dominio-ao-navegador",
      number: "3.1",
      title: "Do domínio ao navegador",
      subtitle:
        "O caminho completo entre digitar gizpay.com.br e ver a página na tela — e por que cada etapa importa para você.",
      minutes: 10,
      goals: [
        "Entender domínio, DNS, hospedagem e CDN",
        "Saber o que é HTTPS e por que ele é obrigatório",
        "Conhecer o pipeline de renderização do navegador",
      ],
      blocks: [
        {
          type: "p",
          text: "Quando alguém digita o endereço do seu site, uma sequência de eventos acontece em menos de um segundo. Entender essa sequência é o que permite você diagnosticar “o site está lento” ou “o domínio não aponta” sem depender de ninguém.",
        },
        {
          type: "steps",
          items: [
            {
              title: "1. Domínio",
              text: "É o nome que você aluga de um registrador (Registro.br para .com.br, ou Namecheap/Cloudflare para .com). Você não compra: você renova anualmente. Perder o prazo é perder o site.",
            },
            {
              title: "2. DNS",
              text: "A agenda telefônica da internet. Traduz gizpay.com.br para o endereço IP de um servidor. Quando você publica no Framer e conecta um domínio, o que você faz é editar registros DNS — normalmente um A e um CNAME.",
            },
            {
              title: "3. Hospedagem / CDN",
              text: "O computador que guarda os arquivos. Uma CDN mantém cópias em vários países, então quem acessa de São Paulo baixa de um servidor próximo. Framer, Vercel e Netlify já entregam por CDN por padrão.",
            },
            {
              title: "4. HTTPS",
              text: "O cadeado. Criptografa o tráfego entre o navegador e o servidor. Hoje é obrigatório: navegadores marcam sites sem HTTPS como “não seguro” e o Google rebaixa no ranqueamento. As plataformas modernas emitem o certificado automaticamente.",
            },
            {
              title: "5. Resposta",
              text: "O servidor devolve um arquivo HTML. Esse arquivo referencia CSS, JavaScript, fontes e imagens, que o navegador vai buscar em seguida.",
            },
            {
              title: "6. Renderização",
              text: "O navegador transforma tudo isso em pixels. É onde nasce a maior parte dos problemas de performance.",
            },
          ],
        },
        {
          type: "callout",
          variant: "note",
          title: "Propagação de DNS",
          text: "Depois de apontar um domínio, a mudança leva de minutos a algumas horas para valer em toda a internet. Se o site “ainda não abriu”, quase sempre é isso — não um erro seu. Verifique em `dnschecker.org` antes de mexer de novo.",
        },
        {
          type: "h",
          text: "O pipeline de renderização",
        },
        {
          type: "code",
          lang: "texto",
          caption: "O que o navegador faz com a resposta",
          code: `HTML  ──parse──►  DOM  ─┐
                        ├─► Render Tree ──► Layout ──► Paint ──► Composite
CSS   ──parse──►  CSSOM ┘

JavaScript pode alterar DOM e CSSOM a qualquer momento,
o que força o navegador a refazer Layout e Paint.
Por isso JavaScript em excesso é a causa nº 1 de lentidão.`,
        },
        {
          type: "terms",
          items: [
            {
              term: "DOM",
              def: "A árvore de elementos da página, em memória. É o que você vê ao inspecionar um site.",
            },
            {
              term: "CSSOM",
              def: "A árvore de estilos. O navegador precisa das duas para saber o que desenhar.",
            },
            {
              term: "Layout (reflow)",
              def: "Calcular a posição e o tamanho de cada elemento. Caro. Animar `width`, `height` ou `top` dispara layout a cada quadro.",
            },
            {
              term: "Paint / Composite",
              def: "Pintar os pixels e juntar as camadas. Animar `transform` e `opacity` pula o layout e roda na GPU — é por isso que essas duas propriedades são as únicas recomendadas para animação.",
            },
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "A regra de ouro da animação",
          text: "Anime apenas `transform` e `opacity`. No Framer, as animações de scroll e appear já usam essas propriedades — mas se você animar largura ou posição manualmente, vai sentir a queda de fluidez no celular.",
        },
        {
          type: "h",
          text: "Estático, dinâmico e o meio-termo",
        },
        {
          type: "table",
          head: ["Modelo", "Como funciona", "Quando usar"],
          rows: [
            [
              "Estático",
              "O HTML já existe pronto no servidor e é servido direto pela CDN.",
              "Landing pages, sites institucionais, blogs. Mais rápido e mais barato. É o que o Framer publica.",
            ],
            [
              "Dinâmico (servidor)",
              "O servidor monta a página a cada visita, consultando banco de dados.",
              "Painéis com dados do usuário, e-commerce com estoque em tempo real.",
            ],
            [
              "Híbrido",
              "Páginas estáticas com trechos dinâmicos carregados depois.",
              "Site institucional com blog em CMS e uma área logada. É o modelo mais comum hoje.",
            ],
          ],
        },
        {
          type: "p",
          text: "O site da Giz Pay é um caso claro de **estático**: o conteúdo é o mesmo para todo visitante, a calculadora roda no navegador e o formulário envia para um serviço externo. Isso significa carregamento praticamente instantâneo e custo de hospedagem próximo de zero.",
        },
        {
          type: "exercise",
          title: "Exercício 3.1 — Investigue um site",
          items: [
            "Abra o DevTools (F12) em qualquer site e vá à aba Network. Recarregue e observe a ordem dos arquivos.",
            "Identifique o maior arquivo baixado. Quase sempre é uma imagem ou uma fonte.",
            "Na aba Elements, encontre a tag `<h1>` da página. Confira se ela contém a mensagem principal.",
            "Rode `nslookup gizpay.com.br` no terminal e veja o IP para onde o domínio aponta.",
          ],
        },
      ],
      takeaways: [
        "Domínio → DNS → hospedagem/CDN → HTTPS → HTML → renderização.",
        "Layout é caro; anime só transform e opacity.",
        "Sites estáticos são a escolha certa para landing pages.",
        "Propagação de DNS leva tempo — não é erro.",
      ],
    },
    {
      slug: "html-semantico-e-acessibilidade",
      number: "3.2",
      title: "HTML semântico e acessibilidade",
      subtitle:
        "A estrutura invisível que decide se o Google entende o seu site e se todo mundo consegue usá-lo.",
      minutes: 12,
      goals: [
        "Escolher a tag certa para cada papel",
        "Entender por que hierarquia de títulos importa",
        "Aplicar os requisitos básicos de acessibilidade",
      ],
      blocks: [
        {
          type: "p",
          text: "HTML descreve **o que a coisa é**, não como ela parece. Um site inteiro construído com `<div>` funciona visualmente e falha em tudo o mais: leitores de tela não navegam, o Google não entende a estrutura e a navegação por teclado quebra.",
        },
        {
          type: "code",
          lang: "html",
          caption: "Estrutura semântica de uma landing",
          code: `<header>          <!-- barra de navegação -->
  <nav> … </nav>
</header>

<main>
  <section aria-labelledby="hero">
    <h1 id="hero">O dinheiro da sua escola, no controle de quem ensina.</h1>
    <p>Cobrança automática e liquidação direto na conta da escola.</p>
    <a href="#agendar" class="btn">Agendar demonstração</a>
  </section>

  <section aria-labelledby="como">
    <h2 id="como">Como funciona</h2>
    <article> <h3>Cadastro dos alunos</h3> … </article>
    <article> <h3>Cobrança automática</h3> … </article>
  </section>
</main>

<footer> … </footer>`,
        },
        {
          type: "callout",
          variant: "key",
          title: "Um h1 por página",
          text: "O `<h1>` é a declaração do assunto da página. Deve existir exatamente um, e ele deve conter a mensagem principal — não o nome da empresa. Depois, `<h2>` para seções e `<h3>` dentro delas, sem pular níveis.",
        },
        {
          type: "table",
          caption: "Tag certa para cada papel",
          head: ["Papel", "Tag", "Erro comum"],
          rows: [
            ["Ação que navega", "`<a href>`", "Usar `<div onclick>`, que não é focável nem abre em nova aba"],
            ["Ação que executa algo", "`<button>`", "Usar `<a href=\"#\">`, que suja o histórico"],
            ["Bloco temático", "`<section>`", "`<div>` genérica sem título"],
            ["Conteúdo independente", "`<article>`", "Usar `<section>` para um card de blog"],
            ["Imagem decorativa", "`<img alt=\"\">`", "Omitir o alt (o leitor lê o nome do arquivo)"],
            ["Imagem informativa", "`<img alt=\"descrição\">`", "alt=\"imagem\" ou alt=\"logo\""],
            ["Lista", "`<ul>` / `<ol>`", "Parágrafos com hífen no início"],
          ],
        },
        {
          type: "h",
          text: "Acessibilidade: o mínimo que não se negocia",
        },
        {
          type: "list",
          items: [
            "**Navegação por teclado** — pressione Tab e percorra a página inteira. Todo elemento interativo precisa ser alcançável e ter foco visível.",
            "**Contraste** — 4,5:1 para texto normal, conforme a aula 2.3.",
            "**Alt em imagens** — descritivo quando informa, vazio quando decora.",
            "**Labels em formulários** — todo campo precisa de um `<label>` associado; placeholder não é label, ele some quando a pessoa digita.",
            "**Ordem lógica** — a ordem visual e a ordem do código devem coincidir.",
            "**Movimento** — respeite `prefers-reduced-motion` para quem tem sensibilidade vestibular.",
            "**Idioma** — `<html lang=\"pt-BR\">` faz o leitor de tela pronunciar corretamente.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Acessibilidade é SEO",
          text: "Não é coincidência. O robô do Google é, na prática, um usuário cego muito apressado: ele lê a estrutura, os títulos e os textos alternativos. Um site acessível é automaticamente mais bem indexado.",
        },
        {
          type: "h",
          text: "No Framer, isso é responsabilidade sua",
        },
        {
          type: "p",
          text: "O Framer gera HTML por você, mas as escolhas semânticas continuam nas suas mãos. Três pontos de atenção que fazem toda a diferença:",
        },
        {
          type: "steps",
          items: [
            {
              title: "Tag do texto",
              text: "Ao selecionar um texto, o painel direito tem um seletor de tag (H1, H2, H3, P). Não deixe tudo como P só porque você ajustou o tamanho visualmente. O tamanho é estilo; a tag é significado.",
            },
            {
              title: "Alt das imagens",
              text: "Selecione a imagem e preencha o campo Alt Text no painel. É um clique e resolve.",
            },
            {
              title: "Link vs. Button",
              text: "Se o elemento leva para outra página ou âncora, use o campo Link. Se ele abre um modal ou dispara uma ação, mantenha como interação — o Framer aplica o papel correto.",
            },
          ],
        },
        {
          type: "exercise",
          title: "Exercício 3.2 — Audite pelo teclado",
          items: [
            "Abra o site que você quer melhorar e navegue usando apenas Tab, Shift+Tab e Enter.",
            "Anote todo elemento que você não conseguiu alcançar ou cujo foco não aparece.",
            "Verifique se existe exatamente um `<h1>` e se ele contém a mensagem principal.",
            "Rode o Lighthouse (DevTools › Lighthouse › Accessibility) e corrija tudo acima de nota 90.",
          ],
        },
      ],
      takeaways: [
        "A tag descreve o papel, não a aparência.",
        "Um `<h1>` por página, com a mensagem principal.",
        "Teclado, contraste, alt e label são o mínimo inegociável.",
        "No Framer, definir a tag do texto e o alt da imagem é responsabilidade sua.",
      ],
    },
    {
      slug: "css-layout-e-responsividade",
      number: "3.3",
      title: "CSS: box model, Flexbox, Grid e responsividade",
      subtitle:
        "Os conceitos de CSS que você vai reconhecer diretamente nos painéis do Framer, com nomes ligeiramente diferentes.",
      minutes: 15,
      goals: [
        "Entender box model e por que border-box é o padrão",
        "Dominar Flexbox — a base do Stack do Framer",
        "Definir breakpoints e pensar mobile-first",
      ],
      blocks: [
        {
          type: "p",
          text: "Mesmo construindo visualmente, você vai encontrar esses conceitos o tempo todo. O Stack do Framer **é** Flexbox. O Grid do Framer **é** CSS Grid. Entender o modelo por trás faz você parar de arrastar até dar certo e passar a saber o que vai acontecer.",
        },
        {
          type: "h",
          text: "Box model",
        },
        {
          type: "code",
          lang: "texto",
          caption: "Todo elemento é uma caixa",
          code: `┌───────────── margin (empurra os vizinhos) ──────────────┐
│  ┌─────────── border (o contorno) ──────────────────┐   │
│  │  ┌───────── padding (respiro interno) ───────┐   │   │
│  │  │                                           │   │   │
│  │  │            CONTEÚDO                       │   │   │
│  │  │                                           │   │   │
│  │  └───────────────────────────────────────────┘   │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘

box-sizing: border-box  →  width inclui padding e border.
Sem isso, um card de 300px com 16px de padding vira 332px.`,
        },
        {
          type: "callout",
          variant: "note",
          title: "Padding vs. margin",
          text: "Padding é espaço **dentro** — pinta o fundo, aumenta a área clicável. Margin é espaço **fora** — empurra os vizinhos. Regra prática: use padding dentro de componentes e gap (não margin) para separar irmãos em um Stack.",
        },
        {
          type: "h",
          text: "Flexbox — uma dimensão",
        },
        {
          type: "p",
          text: "Flexbox organiza elementos em uma linha ou em uma coluna. São só quatro propriedades para 95% dos casos, e todas elas existem no painel do Framer:",
        },
        {
          type: "table",
          head: ["CSS", "No Framer", "O que faz"],
          rows: [
            ["`flex-direction`", "Direction (↓ / →)", "Empilha em coluna ou em linha"],
            ["`gap`", "Gap", "Espaço entre os filhos — use sempre isto no lugar de margin"],
            ["`justify-content`", "Distribute", "Alinhamento no eixo principal (início, centro, espaço entre)"],
            ["`align-items`", "Align", "Alinhamento no eixo transversal"],
            ["`flex-wrap`", "Wrap", "Permite quebrar em várias linhas quando não couber"],
            ["`flex: 1`", "Width: Fill", "O filho ocupa o espaço disponível"],
          ],
        },
        {
          type: "demo",
          id: "layout",
          title: "Playground de Flexbox / Stack",
          text: "Os mesmos controles que você vai encontrar no painel do Framer. Mexa e veja o CSS correspondente ser gerado.",
        },
        {
          type: "h",
          text: "Grid — duas dimensões",
        },
        {
          type: "p",
          text: "Quando você precisa de linhas **e** colunas ao mesmo tempo — uma galeria, uma matriz de recursos — Grid é a ferramenta. A propriedade mais útil resolve responsividade sem nenhuma media query:",
        },
        {
          type: "code",
          lang: "css",
          caption: "Grid responsivo em uma linha",
          code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

/* Leitura: crie quantas colunas couberem,
   cada uma com no mínimo 260px,
   dividindo o espaço restante igualmente.
   3 colunas no desktop, 2 no tablet, 1 no celular — automático. */`,
        },
        {
          type: "h",
          text: "Responsividade: mobile-first de verdade",
        },
        {
          type: "p",
          text: "Mais da metade do tráfego de um site B2B brasileiro vem de celular — e no caso de uma diretora de escola recebendo um link por WhatsApp, essa proporção é ainda maior. Mobile-first não é desenhar o desktop e espremer: é decidir a mensagem essencial no espaço mais escasso e depois **acrescentar** conforme sobra espaço.",
        },
        {
          type: "table",
          caption: "Breakpoints que cobrem o mundo real",
          head: ["Nome", "Largura", "Layout típico"],
          rows: [
            ["Mobile", "até 767px", "Uma coluna, menu em gaveta, botão de largura total"],
            ["Tablet", "768–1023px", "Duas colunas, menu ainda pode ser gaveta"],
            ["Desktop", "1024–1439px", "Grid completo de 12 colunas"],
            ["Wide", "1440px+", "Container com largura máxima, mais respiro lateral"],
          ],
        },
        {
          type: "demo",
          id: "breakpoints",
          title: "Preview responsivo",
          text: "Alterne entre os breakpoints e veja a mesma seção se reorganizar. É exatamente o que os breakpoints do Framer fazem.",
        },
        {
          type: "callout",
          variant: "warn",
          title: "Os erros de mobile que mais custam conversão",
          text: "Tabela larga que força rolagem horizontal; botão colado no rodapé onde o polegar não alcança; formulário com teclado errado (use `type=\"email\"` e `type=\"tel\"`); e texto abaixo de 16px, que faz o iOS dar zoom automático ao focar um campo.",
        },
        {
          type: "h",
          text: "Unidades: quando usar cada uma",
        },
        {
          type: "list",
          items: [
            "**px** — bordas, raios, sombras. Coisas que não devem escalar.",
            "**rem** — tipografia e espaçamento. Escala com a preferência de fonte do usuário.",
            "**%** e **fr** — larguras dentro de containers e grids.",
            "**vw / vh** — alturas de seção cheia e tipografia fluida. Cuidado com `100vh` no mobile: a barra do navegador atrapalha, prefira `100dvh`.",
            "**clamp(min, ideal, max)** — o melhor amigo da tipografia responsiva: `clamp(40px, 6vw, 76px)` cresce com a tela sem nunca sair do intervalo.",
          ],
        },
        {
          type: "exercise",
          title: "Exercício 3.3 — Reconstrua uma seção",
          items: [
            "Escolha uma seção de três cards de qualquer site.",
            "Descreva no papel: é Flex ou Grid? Qual a direção, o gap e o alinhamento?",
            "Abra o DevTools e confira se você acertou.",
            "Reduza a janela até 375px e anote tudo que quebra.",
          ],
        },
      ],
      takeaways: [
        "Padding é dentro, margin é fora — e entre irmãos use gap.",
        "Stack do Framer é Flexbox; Grid do Framer é CSS Grid.",
        "`repeat(auto-fit, minmax(260px, 1fr))` resolve grade responsiva sem media query.",
        "Mobile-first é decidir o essencial primeiro, não espremer o desktop.",
      ],
    },
    {
      slug: "javascript-e-interatividade",
      number: "3.4",
      title: "JavaScript e interatividade",
      subtitle:
        "O que é possível fazer sem escrever código, o que exige código, e como pensar interações que aumentam conversão.",
      minutes: 11,
      goals: [
        "Entender o papel do JavaScript na página",
        "Saber o que o Framer resolve sem código",
        "Projetar interações com propósito comercial",
      ],
      blocks: [
        {
          type: "p",
          text: "Se HTML é a estrutura e CSS é a aparência, JavaScript é o comportamento. Ele responde a eventos (clique, rolagem, digitação), altera a página, busca dados e valida formulários.",
        },
        {
          type: "code",
          lang: "javascript",
          caption: "A calculadora de economia da Giz Pay, em essência",
          code: `const alunos = 450;
const mensalidade = 950;
const taxa = 0.035;

const faturamentoAnual = alunos * mensalidade * 12;
const custoIntermediario = faturamentoAnual * taxa;

// R$ 5.130.000 de faturamento → R$ 179.550 por ano em taxa
console.log(custoIntermediario.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
}));`,
        },
        {
          type: "p",
          text: "Três linhas de multiplicação. O valor dessa calculadora não está na complexidade técnica: está no fato de ela transformar um argumento abstrato (“intermediários são caros”) em um número que a pessoa reconhece como o dinheiro dela.",
        },
        {
          type: "h",
          text: "O que o Framer resolve sem uma linha de código",
        },
        {
          type: "cards",
          items: [
            {
              tag: "Nativo",
              title: "Animações de entrada e scroll",
              text: "Appear animations, parallax, transições ligadas à posição de rolagem, contadores. Tudo em painel.",
            },
            {
              tag: "Nativo",
              title: "Estados e variantes",
              text: "Hover, press, toggle, accordion, abas, carrossel. Variants + transições dão conta.",
            },
            {
              tag: "Nativo",
              title: "Formulários",
              text: "Coleta, validação básica, envio por e-mail e integração com ferramentas externas via webhook.",
            },
            {
              tag: "Nativo",
              title: "CMS",
              text: "Coleções, páginas dinâmicas, listagem com filtro e ordenação.",
            },
            {
              tag: "Código",
              title: "Cálculo em tempo real",
              text: "Uma calculadora com fórmula própria pede um Code Component. São ~40 linhas de React — e é o único trecho de código do nosso projeto.",
            },
            {
              tag: "Código",
              title: "Integrações profundas",
              text: "Consumir uma API, personalizar a página por origem do tráfego, gráficos customizados.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Regra de decisão",
          text: "Comece sempre pelo caminho sem código. Só escreva um Code Component quando a interação for realmente central para a conversão — como a calculadora. Código no Framer é uma ferramenta de precisão, não o caminho padrão.",
        },
        {
          type: "h",
          text: "Interação com propósito",
        },
        {
          type: "p",
          text: "Movimento sem função é distração. Antes de adicionar qualquer animação, responda: **que trabalho ela faz?** Existem quatro trabalhos legítimos:",
        },
        {
          type: "table",
          head: ["Trabalho", "Exemplo", "Duração"],
          rows: [
            ["Dar feedback", "Botão afunda levemente ao ser pressionado", "80–150ms"],
            ["Mostrar relação", "Modal cresce a partir do botão que o abriu", "200–300ms"],
            ["Guiar atenção", "Número da calculadora pulsa quando muda", "150–250ms"],
            ["Dar continuidade", "Seção surge de baixo conforme entra na tela", "400–600ms"],
          ],
        },
        {
          type: "compare",
          badTitle: "Movimento que atrapalha",
          bad: [
            "Cada item de uma lista de 12 entrando com atraso escalonado de 200ms",
            "Parallax pesado que engasga no celular",
            "Animação que precisa terminar antes de a pessoa poder clicar",
            "Rolagem sequestrada, que ignora o gesto do usuário",
          ],
          goodTitle: "Movimento que ajuda",
          good: [
            "Grupos entrando juntos, com no máximo 60ms de diferença entre eles",
            "Apenas transform e opacity, rodando na GPU",
            "Interface utilizável durante a animação",
            "Rolagem natural, com o conteúdo apenas revelando-se",
          ],
        },
        {
          type: "callout",
          variant: "warn",
          title: "prefers-reduced-motion",
          text: "Parte das pessoas sente náusea com movimento na tela e configura o sistema para reduzi-lo. Respeite essa preferência: no Framer há a opção de desativar animações para esses usuários, e no CSS é uma media query. Este site que você está lendo faz isso.",
        },
        {
          type: "exercise",
          title: "Exercício 3.4 — Projete uma interação",
          items: [
            "Escolha o argumento mais difícil de provar no seu produto.",
            "Desenhe uma interação em que o visitante insira a própria realidade e veja o resultado.",
            "Defina o que muda na tela, em quanto tempo e com qual curva.",
            "Responda: essa interação faz qual dos quatro trabalhos? Se não fizer nenhum, descarte.",
          ],
        },
      ],
      takeaways: [
        "JavaScript é comportamento: eventos, cálculo, dados e validação.",
        "O Framer resolve animação, estados, formulários e CMS sem código.",
        "Toda animação precisa fazer um dos quatro trabalhos legítimos.",
        "Respeite prefers-reduced-motion sempre.",
      ],
    },
    {
      slug: "performance-e-seo",
      number: "3.5",
      title: "Performance, Core Web Vitals e SEO",
      subtitle:
        "Um site lento é um site que perde clientes antes de mostrar qualquer argumento. O que medir e como corrigir.",
      minutes: 13,
      goals: [
        "Entender LCP, INP e CLS",
        "Aplicar as correções que mais impactam",
        "Montar o SEO básico de uma landing",
      ],
      blocks: [
        {
          type: "p",
          text: "Performance é uma decisão de negócio disfarçada de detalhe técnico. Cada segundo a mais de carregamento derruba conversão de forma mensurável, e no Brasil — onde boa parte do acesso é 4G em celular intermediário — o efeito é maior do que os benchmarks internacionais sugerem.",
        },
        {
          type: "h",
          text: "Core Web Vitals",
        },
        {
          type: "cards",
          items: [
            {
              tag: "LCP",
              title: "Largest Contentful Paint · meta < 2,5s",
              text: "Quanto tempo até o maior elemento visível aparecer — geralmente a imagem ou o título do hero. Se está ruim, o culpado quase sempre é uma imagem pesada ou uma fonte que bloqueia a renderização.",
            },
            {
              tag: "INP",
              title: "Interaction to Next Paint · meta < 200ms",
              text: "Quanto tempo a página leva para responder a um clique. Substituiu o antigo FID. JavaScript pesado travando a thread principal é a causa habitual.",
            },
            {
              tag: "CLS",
              title: "Cumulative Layout Shift · meta < 0,1",
              text: "O quanto o conteúdo pula durante o carregamento. Aquele momento em que você vai clicar e o botão foge. Causado por imagem sem dimensão declarada e por fonte que troca de tamanho.",
            },
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "As cinco correções que resolvem quase tudo",
          text: "1) Comprimir imagens e servir em WebP/AVIF. 2) Declarar largura e altura das imagens. 3) Carregar por preguiça (lazy) tudo que está abaixo da dobra, mas nunca a imagem do hero. 4) Limitar-se a duas famílias de fonte e a pesos realmente usados. 5) Cortar scripts de terceiros que não geram receita.",
        },
        {
          type: "table",
          caption: "Peso de imagem: referência prática",
          head: ["Uso", "Formato", "Peso alvo"],
          rows: [
            ["Imagem do hero", "WebP ou AVIF", "menos de 200 KB"],
            ["Foto de seção", "WebP", "menos de 120 KB"],
            ["Ícone", "SVG", "menos de 5 KB"],
            ["Logo", "SVG", "menos de 10 KB"],
            ["Captura de tela de produto", "WebP, 2x da área exibida", "menos de 250 KB"],
          ],
        },
        {
          type: "p",
          text: "Um detalhe que quase ninguém observa: se o seu card tem 400 px de largura, exportar a imagem em 1600 px não deixa nada mais nítido em nenhuma tela — só desperdiça banda. Exporte no dobro da área exibida e pare por aí.",
        },
        {
          type: "h",
          text: "SEO da landing page",
        },
        {
          type: "steps",
          items: [
            {
              title: "Title — até 60 caracteres",
              text: "Aparece na aba e no resultado de busca. Estrutura que funciona: “Benefício principal | Nome da marca”. Ex.: “Cobrança escolar automática sem intermediário | Giz Pay”.",
            },
            {
              title: "Meta description — até 155 caracteres",
              text: "Não influencia o ranqueamento diretamente, mas decide o clique. Escreva como anúncio: benefício + diferencial + convite.",
            },
            {
              title: "Um h1 com a palavra-chave",
              text: "Naturalmente, sem forçar. O h1 e o title não precisam ser idênticos.",
            },
            {
              title: "URLs limpas",
              text: "`/precos` e não `/page-id-2847`. Sem acento, sem underscore, com hífen.",
            },
            {
              title: "Open Graph",
              text: "`og:title`, `og:description` e `og:image` (1200×630). Sem isso, o link compartilhado no WhatsApp aparece sem imagem — e no B2B brasileiro o WhatsApp é o principal canal de compartilhamento.",
            },
            {
              title: "Dados estruturados",
              text: "JSON-LD com Organization e FAQPage. Perguntas frequentes marcadas corretamente podem aparecer expandidas no Google.",
            },
            {
              title: "Sitemap e robots",
              text: "Gerados automaticamente pelo Framer. Depois de publicar, envie o sitemap no Google Search Console.",
            },
          ],
        },
        {
          type: "code",
          lang: "html",
          caption: "O bloco de metadados de uma landing bem configurada",
          code: `<title>Cobrança escolar automática, sem intermediário | Giz Pay</title>
<meta name="description" content="Pix, boleto e cartão com baixa automática e o
dinheiro caindo direto na conta da escola. Calcule a economia da sua escola.">

<meta property="og:title" content="O dinheiro da sua escola, no seu controle">
<meta property="og:description" content="Cobrança automática e liquidação no CNPJ da escola.">
<meta property="og:image" content="https://gizpay.com.br/og.png">
<meta property="og:type" content="website">
<link rel="canonical" href="https://gizpay.com.br/">`,
        },
        {
          type: "callout",
          variant: "note",
          title: "SEO não é sobre enganar o Google",
          text: "Há muito tempo o algoritmo premia a mesma coisa que o usuário quer: página rápida, estrutura clara, conteúdo que responde de fato à pergunta da busca. Escreva para a diretora da escola e o SEO acontece como consequência.",
        },
        {
          type: "exercise",
          title: "Exercício 3.5 — Meça e corrija",
          items: [
            "Rode o PageSpeed Insights no seu site e anote LCP, INP e CLS do relatório mobile.",
            "Identifique a maior imagem carregada e recomprima em WebP.",
            "Confira title, description e og:image. Teste o link colando no WhatsApp para você mesmo.",
            "Liste os scripts de terceiros ativos e remova os que não geram receita.",
          ],
        },
      ],
      takeaways: [
        "LCP < 2,5s, INP < 200ms, CLS < 0,1.",
        "Imagem comprimida em WebP com dimensões declaradas resolve a maioria dos problemas.",
        "Title e description decidem o clique no resultado de busca.",
        "og:image é obrigatório: sem ele o link no WhatsApp fica sem imagem.",
      ],
    },
  ],
};
