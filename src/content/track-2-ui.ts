import type { Track } from "./types";

export const track2: Track = {
  id: "fundamentos-ui",
  number: "02",
  title: "Fundamentos de UI",
  tagline: "Espaço, tipo, cor e sistema",
  description:
    "Os quatro pilares que separam uma tela amadora de uma tela profissional — e como transformá-los em um sistema reutilizável em vez de decisões avulsas.",
  lessons: [
    {
      slug: "layout-grid-e-espacamento",
      number: "2.1",
      title: "Layout, grid e espaçamento",
      subtitle:
        "Se você só puder melhorar uma coisa no seu design, melhore o espaçamento. É o que mais rápido diferencia amador de profissional.",
      minutes: 14,
      goals: [
        "Adotar uma escala de espaçamento de 8 pontos",
        "Entender grid de 12 colunas, gutter e margem",
        "Usar proximidade para agrupar informação sem desenhar caixas",
      ],
      blocks: [
        {
          type: "p",
          text: "Peça a alguém para apontar o que há de errado em um layout amador e a pessoa vai falar de cor ou de fonte. Quase sempre o problema real é **espaçamento inconsistente**: 13 px aqui, 18 px ali, 21 px acolá. O olho não sabe nomear, mas percebe o ruído.",
        },
        {
          type: "h",
          text: "A escala de 8 pontos",
        },
        {
          type: "p",
          text: "A solução é parar de escolher números e passar a escolher **degraus de uma escala**. A convenção mais usada na indústria é a base 8, com o 4 disponível para ajustes finos:",
        },
        {
          type: "code",
          lang: "escala",
          caption: "Escala de espaçamento — use apenas estes valores",
          code: `4    →  respiro entre ícone e texto
8    →  dentro de um componente pequeno (badge, tag)
12   →  entre label e campo de formulário
16   →  padding padrão de card
24   →  entre elementos relacionados
32   →  entre grupos dentro de uma seção
48   →  entre blocos de uma seção
64   →  padding vertical de seção (mobile)
96   →  padding vertical de seção (desktop)
128  →  separação entre grandes capítulos da página`,
        },
        {
          type: "callout",
          variant: "key",
          title: "Por que 8 e não qualquer número",
          text: "Telas têm densidades diferentes (1x, 2x, 3x). Múltiplos de 8 se dividem bem em todas elas, evitando meio pixel e bordas borradas. Mas o benefício maior é humano: com 9 valores possíveis, você decide rápido e o resultado fica coerente sozinho.",
        },
        {
          type: "demo",
          id: "espacamento",
          title: "Sinta a diferença da escala",
          text: "Compare um card com espaçamentos arbitrários e o mesmo card na escala de 8pt. Ajuste o degrau e observe o ritmo mudar.",
        },
        {
          type: "h",
          text: "Proximidade: o espaço é que agrupa",
        },
        {
          type: "p",
          text: "Um dos princípios da Gestalt diz que elementos próximos são percebidos como um grupo. Isso tem uma consequência prática que quase todo iniciante erra: **a distância entre um título e o parágrafo dele precisa ser menor que a distância entre esse parágrafo e o próximo título.**",
        },
        {
          type: "code",
          lang: "texto",
          caption: "Ritmo vertical correto de uma seção",
          code: `Título da seção
   ↕ 12px   (título e subtítulo pertencem um ao outro)
Subtítulo explicativo
   ↕ 48px   (o grupo acima termina aqui)
Card  Card  Card
   ↕ 24px
Botão`,
        },
        {
          type: "p",
          text: "Quando o espaçamento agrupa corretamente, você deixa de precisar de linhas divisórias e caixas em volta de tudo. Iniciantes desenham bordas porque o espaçamento não está fazendo o trabalho dele.",
        },
        {
          type: "h",
          text: "Grid de 12 colunas",
        },
        {
          type: "terms",
          items: [
            {
              term: "Coluna",
              def: "A faixa vertical onde o conteúdo se apoia. Doze colunas é o padrão porque 12 divide por 2, 3, 4 e 6 — permitindo layouts de 2, 3, 4 e 6 partes com o mesmo grid.",
            },
            {
              term: "Gutter (calha)",
              def: "O espaço entre colunas. Normalmente 24 px no desktop e 16 px no mobile.",
            },
            {
              term: "Margem",
              def: "O respiro nas bordas da tela. Nunca deixe o texto encostar na borda: 24 px é o mínimo no celular.",
            },
            {
              term: "Largura máxima do container",
              def: "Entre 1.100 e 1.280 px para o conteúdo geral. Para texto corrido, muito menos — veja a próxima aula.",
            },
          ],
        },
        {
          type: "table",
          caption: "Combinações comuns em um grid de 12 colunas",
          head: ["Layout", "Divisão", "Usar quando"],
          rows: [
            ["Hero assimétrico", "7 + 5", "Texto de um lado, imagem do produto do outro"],
            ["Três benefícios", "4 + 4 + 4", "Blocos de peso igual"],
            ["Quatro métricas", "3 + 3 + 3 + 3", "Números curtos, comparáveis"],
            ["Conteúdo + apoio", "8 + 4", "Artigo com barra lateral"],
            ["Texto centralizado", "6 centralizadas", "Introdução de seção, manifesto"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "No Framer",
          text: "Ative a régua e defina um container central com largura máxima e padding lateral. Depois monte tudo dentro de Stacks — na Trilha 04 você vai ver que Stack com gap é a tradução direta da escala de espaçamento.",
        },
        {
          type: "h",
          text: "Ritmo: alterne densidades",
        },
        {
          type: "p",
          text: "Uma página em que todas as seções têm a mesma altura e o mesmo padding fica monótona, e monotonia faz o visitante parar de rolar. Alterne: uma seção alta e respirada, depois uma faixa compacta de números, depois um bloco largo com imagem. O contraste de densidade é o que cria a sensação de “essa página tem movimento”.",
        },
        {
          type: "exercise",
          title: "Exercício 2.1 — Corrija um layout",
          items: [
            "Pegue uma seção que você já fez e liste todos os valores de espaçamento usados.",
            "Substitua cada um pelo valor mais próximo da escala de 8pt.",
            "Verifique a regra da proximidade: título mais perto do próprio texto que do bloco seguinte.",
            "Remova todas as bordas e fundos que só existiam para agrupar. Veja se o layout continua legível.",
          ],
        },
      ],
      takeaways: [
        "Use apenas valores da escala de 8pt: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.",
        "O espaço agrupa: título perto do próprio texto, longe do bloco seguinte.",
        "Grid de 12 colunas cobre praticamente todos os layouts com o mesmo sistema.",
        "Alterne densidade entre seções para criar ritmo na rolagem.",
      ],
    },
    {
      slug: "tipografia",
      number: "2.2",
      title: "Tipografia que se lê e que vende",
      subtitle:
        "Escala, hierarquia, largura de linha e entrelinha — as quatro variáveis que resolvem 90% dos problemas de texto na tela.",
      minutes: 13,
      goals: [
        "Montar uma escala tipográfica com razão fixa",
        "Definir hierarquia com poucos estilos",
        "Acertar largura de linha, entrelinha e peso",
      ],
      blocks: [
        {
          type: "p",
          text: "Um site é, na esmagadora maioria dos casos, texto. Tipografia não é a escolha da fonte bonita — é o sistema que faz o texto ser lido na ordem certa e sem esforço.",
        },
        {
          type: "h",
          text: "Escala tipográfica",
        },
        {
          type: "p",
          text: "Assim como no espaçamento, o segredo é parar de escolher tamanhos soltos. Defina um tamanho base (16 px é o padrão web, porque é o default do navegador) e multiplique por uma razão constante. Razões comuns: 1,200 (terça menor, discreta), 1,250 (terça maior, equilibrada) e 1,333 (quarta, dramática).",
        },
        {
          type: "demo",
          id: "tipografia",
          title: "Gerador de escala tipográfica",
          text: "Mude a base e a razão e veja a escala inteira se recalcular. Repare como razões maiores criam mais drama e exigem mais espaço vertical.",
        },
        {
          type: "table",
          caption: "Escala sugerida com base 16 e razão 1,25",
          head: ["Papel", "Tamanho", "Peso", "Entrelinha"],
          rows: [
            ["Display / hero", "clamp(40px, 6vw, 76px)", "600–700", "1,05–1,1"],
            ["Título de seção", "39px", "600", "1,15"],
            ["Subtítulo", "25px", "400–500", "1,35"],
            ["Corpo grande", "20px", "400", "1,6"],
            ["Corpo", "16px", "400", "1,6"],
            ["Apoio / legenda", "13px", "500", "1,45"],
            ["Rótulo / overline", "12px", "600 + letter-spacing 0,08em", "1,2"],
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "Regra da entrelinha inversa",
          text: "Quanto maior o texto, menor a entrelinha proporcional. Um título de 72 px com entrelinha 1,6 parece desmontado; com 1,05 fica compacto e forte. Um corpo de 16 px com 1,2 fica sufocante; com 1,6 respira.",
        },
        {
          type: "h",
          text: "Largura de linha: o erro mais comum",
        },
        {
          type: "p",
          text: "Texto corrido ocupando toda a largura de um monitor de 27 polegadas é ilegível — o olho perde a linha ao voltar. O intervalo confortável é de **50 a 75 caracteres por linha**, o que na prática significa uma largura máxima entre 560 e 720 px para o corpo do texto.",
        },
        {
          type: "code",
          lang: "css",
          caption: "Como controlar isso em CSS (e o equivalente no Framer)",
          code: `/* CSS */
.texto {
  max-width: 65ch;   /* 65 caracteres da fonte atual */
  line-height: 1.6;
}

/* No Framer: selecione o bloco de texto,
   defina Width = Fixed com o valor em px (ex.: 640),
   ou use Max Width dentro de um Stack com Width = Fill. */`,
        },
        {
          type: "h",
          text: "Combinação de fontes",
        },
        {
          type: "p",
          text: "Duas famílias resolvem praticamente qualquer projeto: uma para títulos, com personalidade, e uma para texto, neutra e legível. Uma terceira, monoespaçada, é útil para números e dados — dá um ar técnico e alinha dígitos em tabelas.",
        },
        {
          type: "cards",
          items: [
            {
              tag: "Títulos",
              title: "Serifada com contraste",
              text: "Fraunces, Playfair Display, Instrument Serif. Passam credibilidade e um tom editorial. É a fonte que a Giz Pay já usa nos títulos — e é uma escolha acertada para o setor educacional.",
            },
            {
              tag: "Texto",
              title: "Sem serifa neutra",
              text: "Inter, Geist, Söhne, Public Sans. Precisam de boa legibilidade em 14–16 px e um conjunto amplo de pesos.",
            },
            {
              tag: "Dados",
              title: "Monoespaçada",
              text: "JetBrains Mono, IBM Plex Mono. Use em valores em reais, percentuais e no painel do produto: os dígitos ficam alinhados verticalmente.",
            },
          ],
        },
        {
          type: "compare",
          badTitle: "Sinais de tipografia amadora",
          bad: [
            "Cinco tamanhos diferentes na mesma seção, todos escolhidos no olho",
            "Texto corrido com 140 caracteres por linha",
            "Título em peso 400 competindo com corpo em peso 400",
            "Texto centralizado em parágrafos longos",
            "Letter-spacing negativo em texto pequeno",
          ],
          goodTitle: "Sinais de tipografia profissional",
          good: [
            "Três a cinco papéis tipográficos definidos e reutilizados",
            "Corpo entre 50 e 75 caracteres por linha",
            "Hierarquia criada por tamanho, peso e cor — não só por tamanho",
            "Parágrafos alinhados à esquerda; centralize só linhas curtas",
            "Letter-spacing levemente negativo apenas em títulos grandes",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Truque para números grandes",
          text: "Em métricas do tipo “R$ 179.550”, use `font-variant-numeric: tabular-nums`. Os dígitos passam a ter a mesma largura, e o número para de “tremer” quando anima ou muda em uma calculadora.",
        },
        {
          type: "exercise",
          title: "Exercício 2.2 — Sua escala",
          items: [
            "Escolha base 16 e uma razão entre 1,2 e 1,333.",
            "Gere seis tamanhos e nomeie cada um pelo papel (display, h2, h3, corpo, apoio, rótulo).",
            "Defina peso e entrelinha de cada papel — anote em um documento.",
            "Aplique em uma seção real e apague qualquer tamanho que não esteja na lista.",
          ],
        },
      ],
      takeaways: [
        "Escala tipográfica = base 16 × razão constante. Nada de tamanhos avulsos.",
        "Entrelinha inversa ao tamanho: títulos apertados, corpo respirado.",
        "50 a 75 caracteres por linha para texto corrido.",
        "Hierarquia se faz com tamanho + peso + cor, não só com tamanho.",
      ],
    },
    {
      slug: "cor-e-contraste",
      number: "2.3",
      title: "Cor, contraste e acessibilidade",
      subtitle:
        "Como montar uma paleta que funciona, por que 60-30-10 ainda é o melhor atalho e como garantir que todo mundo consiga ler.",
      minutes: 12,
      goals: [
        "Montar uma paleta com papéis semânticos",
        "Aplicar a regra 60-30-10",
        "Verificar contraste segundo a WCAG e corrigir problemas",
      ],
      blocks: [
        {
          type: "p",
          text: "Cor é a decisão que mais rápido comunica personalidade e a que mais rápido destrói legibilidade. A abordagem profissional não é escolher cores bonitas: é atribuir **papéis** e depois escolher valores que cumpram esses papéis.",
        },
        {
          type: "h",
          text: "Papéis, não cores",
        },
        {
          type: "terms",
          items: [
            {
              term: "Background / Surface",
              def: "O fundo da página e o fundo dos cards. Geralmente dois ou três níveis para criar profundidade sem sombra.",
            },
            {
              term: "Foreground / Muted",
              def: "Cor do texto principal e do texto secundário. O secundário costuma ser o mesmo tom com opacidade reduzida.",
            },
            {
              term: "Primary / Brand",
              def: "A cor de ação. Reservada para o botão principal e para destaques raros. Se ela aparecer em tudo, deixa de significar “clique aqui”.",
            },
            {
              term: "Border",
              def: "Separadores e contornos, quase sempre o foreground com 10–15% de opacidade.",
            },
            {
              term: "Semânticas",
              def: "Sucesso, atenção, erro. Não invente: verde, âmbar e vermelho já são convenções e a Lei de Jakob vale aqui também.",
            },
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "Por que nomear por papel muda tudo",
          text: "Se o token se chama `--verde-escuro`, o dia em que a marca mudar para azul o nome vira mentira em 200 lugares. Se ele se chama `--primary`, você troca um valor e o site inteiro acompanha. É exatamente assim que este site que você está lendo funciona.",
        },
        {
          type: "h",
          text: "A regra 60-30-10",
        },
        {
          type: "p",
          text: "Uma distribuição que quase nunca falha: **60%** da tela na cor dominante (o fundo), **30%** na cor secundária (superfícies, cards, texto) e **10%** na cor de destaque (ações e acentos). O erro típico é inverter — usar a cor de marca em 40% da tela e depois não ter como destacar o botão.",
        },
        {
          type: "code",
          lang: "texto",
          caption: "Aplicado à Giz Pay",
          code: `60%  Verde profundo quase preto  →  fundo das seções escuras
30%  Off-white / cinza-quente    →  superfícies claras, texto, cards
10%  Verde-limão vibrante        →  botão primário, números, destaques
 +   Âmbar                       →  apenas alertas e o estado "atrasado"`,
        },
        {
          type: "h",
          text: "Contraste: o requisito não negociável",
        },
        {
          type: "p",
          text: "A WCAG define razões mínimas de contraste entre texto e fundo. Não é preciosismo: cerca de 8% dos homens têm alguma deficiência na percepção de cor, e todo mundo já tentou ler um site sob o sol.",
        },
        {
          type: "table",
          head: ["Situação", "Mínimo (AA)", "Ideal (AAA)"],
          rows: [
            ["Texto normal (< 18px)", "4,5:1", "7:1"],
            ["Texto grande (≥ 24px ou 19px bold)", "3:1", "4,5:1"],
            ["Ícones e bordas de componentes", "3:1", "—"],
            ["Texto sobre imagem", "4,5:1 com overlay", "—"],
          ],
        },
        {
          type: "demo",
          id: "contraste",
          title: "Verificador de contraste",
          text: "Ajuste as duas cores e veja a razão de contraste em tempo real, com o veredito AA/AAA. Teste combinações que você usaria de verdade.",
        },
        {
          type: "callout",
          variant: "warn",
          title: "As três armadilhas mais comuns",
          text: "1) Texto cinza-claro sobre fundo branco — bonito no Figma, ilegível no celular ao sol. 2) Cor como única informação: “os campos em vermelho estão errados” não ajuda quem não distingue vermelho; use ícone e texto junto. 3) Botão de marca com texto branco quando a marca é clara — verde-limão com branco costuma dar 1,8:1.",
        },
        {
          type: "h",
          text: "Modo escuro não é inverter",
        },
        {
          type: "list",
          items: [
            "Não use preto puro (#000). Um cinza muito escuro com um leve matiz da marca cansa menos e parece mais sofisticado.",
            "Reduza a saturação das cores vivas no escuro; elas vibram e cansam a vista.",
            "Sombras não funcionam no escuro. Crie profundidade com superfícies mais claras, não com sombra.",
            "Texto branco puro sobre fundo escuro causa halo. Use um branco levemente rebaixado, como o desta página.",
          ],
        },
        {
          type: "exercise",
          title: "Exercício 2.3 — Sua paleta",
          items: [
            "Defina cinco papéis: background, surface, foreground, muted, primary.",
            "Atribua um valor a cada e teste todas as combinações de texto sobre fundo no verificador acima.",
            "Aplique 60-30-10 em uma seção e confira se o botão primário é o ponto mais contrastante da tela.",
            "Simule daltonismo (DevTools › Rendering › Emulate vision deficiencies) e verifique se a informação sobrevive.",
          ],
        },
      ],
      takeaways: [
        "Nomeie cores por papel semântico, nunca pelo valor.",
        "60-30-10: dominante, secundária, destaque — nessa proporção.",
        "Contraste mínimo 4,5:1 para texto normal, 3:1 para texto grande.",
        "Cor nunca pode ser a única forma de transmitir uma informação.",
      ],
    },
    {
      slug: "hierarquia-visual",
      number: "2.4",
      title: "Hierarquia visual e anatomia de uma seção",
      subtitle:
        "Como controlar a ordem em que o olho percorre a tela e montar seções com uma estrutura repetível.",
      minutes: 11,
      goals: [
        "Usar as cinco alavancas de hierarquia",
        "Montar uma seção com anatomia previsível",
        "Diagnosticar telas em que “tudo grita”",
      ],
      blocks: [
        {
          type: "p",
          text: "Hierarquia visual é o controle da ordem de leitura. Você decide o que a pessoa vê em primeiro, segundo e terceiro lugar — e essa ordem precisa coincidir com a ordem dos seus argumentos.",
        },
        {
          type: "h",
          text: "As cinco alavancas",
        },
        {
          type: "cards",
          items: [
            {
              tag: "01",
              title: "Tamanho",
              text: "A mais óbvia e a mais usada em excesso. Aumentar tudo não cria hierarquia; cria barulho. Guarde o tamanho grande para um elemento por seção.",
            },
            {
              tag: "02",
              title: "Peso",
              text: "Diferença entre 400 e 600 é frequentemente mais elegante que diferença de tamanho. Ótimo para separar rótulo de valor.",
            },
            {
              tag: "03",
              title: "Cor e contraste",
              text: "Texto secundário em muted, texto principal em foreground, número em primary. Três níveis, sem mudar um pixel de tamanho.",
            },
            {
              tag: "04",
              title: "Espaço",
              text: "Isolar um elemento com muito espaço em volta o torna importante mesmo sendo pequeno. É a alavanca mais sofisticada.",
            },
            {
              tag: "05",
              title: "Posição",
              text: "No ocidente o olho percorre em Z ou em F. O canto superior esquerdo e o centro óptico carregam mais peso naturalmente.",
            },
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "Regra prática",
          text: "Combine no máximo duas alavancas por elemento. Um título que é maior, mais pesado, colorido, espaçado e centralizado não é hierárquico: é um outdoor.",
        },
        {
          type: "demo",
          id: "hierarquia",
          title: "Antes e depois",
          text: "Alterne entre a versão sem hierarquia e a versão corrigida. As duas têm exatamente o mesmo conteúdo.",
        },
        {
          type: "h",
          text: "Anatomia repetível de uma seção",
        },
        {
          type: "p",
          text: "Seções que seguem a mesma anatomia criam previsibilidade — e previsibilidade reduz esforço cognitivo. Uma estrutura que funciona em praticamente qualquer landing:",
        },
        {
          type: "code",
          lang: "texto",
          caption: "Estrutura de seção",
          code: `┌─────────────────────────────────────────────┐
│  OVERLINE          ← 12px, maiúsculas,      │
│                      cor primary, opcional  │
│                                             │
│  Título da seção   ← 32–40px, peso 600,     │
│                      no máximo 8 palavras   │
│                                             │
│  Subtítulo de uma ou duas linhas explicando │
│  o que essa seção prova.  ← 18px, muted     │
│                                             │
│  [ conteúdo: cards / tabela / imagem ]      │
│                                             │
│  → Link ou botão secundário (opcional)      │
└─────────────────────────────────────────────┘`,
        },
        {
          type: "p",
          text: "O overline é um detalhe pequeno com efeito grande: ele funciona como um marcador de capítulo, ajuda quem está rolando rápido a saber onde está e adiciona um toque de rigor editorial ao layout.",
        },
        {
          type: "h",
          text: "Diagnóstico: o teste do olho fechado",
        },
        {
          type: "p",
          text: "Feche os olhos, abra por meio segundo olhando para a tela e feche de novo. O que ficou registrado? Se o que ficou não é o elemento mais importante da seção, a hierarquia está errada. Outra variação: desfoque a tela (no Framer, uma captura com blur de 8 px resolve) — a mancha que sobressai deveria ser a mensagem principal.",
        },
        {
          type: "compare",
          badTitle: "Sintomas de hierarquia quebrada",
          bad: [
            "Três elementos disputando o papel de “mais importante”",
            "Todos os cards com sombra forte e borda",
            "Ícones grandes e coloridos ao lado de texto pequeno e cinza",
            "Botões secundários com a mesma cor do primário",
          ],
          goodTitle: "Sintomas de hierarquia saudável",
          good: [
            "Um único ponto focal por tela visível",
            "Cards planos, separados por espaço e uma borda sutil",
            "Ícone discreto servindo ao texto, não competindo com ele",
            "Um botão sólido, os demais em texto ou contorno",
          ],
        },
        {
          type: "exercise",
          title: "Exercício 2.4 — Refaça uma seção",
          items: [
            "Escolha a seção mais confusa do seu site atual.",
            "Liste os elementos e ordene por importância real para o negócio.",
            "Aplique no máximo duas alavancas de hierarquia por elemento.",
            "Faça o teste do desfoque e ajuste até o ponto focal ser o item nº 1 da sua lista.",
          ],
        },
      ],
      takeaways: [
        "Cinco alavancas: tamanho, peso, cor, espaço e posição — no máximo duas por elemento.",
        "Um ponto focal por tela visível.",
        "Anatomia repetível: overline, título, subtítulo, conteúdo, ação.",
        "Teste do desfoque revela hierarquia quebrada em segundos.",
      ],
    },
    {
      slug: "design-system-e-componentes",
      number: "2.5",
      title: "Design system, tokens e componentes",
      subtitle:
        "Como transformar decisões avulsas em um sistema — e por que isso é o que torna um site rápido de construir e fácil de manter.",
      minutes: 13,
      goals: [
        "Entender tokens como fonte única de verdade",
        "Modelar componentes com variantes e estados",
        "Saber o que documentar e o que não vale a pena",
      ],
      blocks: [
        {
          type: "p",
          text: "Um design system não é um manual de 80 páginas. Para um site como o que vamos construir, é um conjunto pequeno de decisões escritas que você para de tomar de novo: **tokens** (os valores) e **componentes** (as peças montadas com esses valores).",
        },
        {
          type: "h",
          text: "Tokens: a fonte única de verdade",
        },
        {
          type: "code",
          lang: "css",
          caption: "Um design system mínimo cabe em 25 linhas",
          code: `/* Cor — por papel, nunca por valor */
--background:  #0B1F1A;
--surface:     #12302A;
--foreground:  #F2F7F3;
--muted:       #9CB0A8;
--primary:     #7CE7A2;
--border:      rgba(242,247,243,0.12);

/* Espaçamento — escala de 8pt */
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;
--space-4: 16px;  --space-6: 24px;  --space-8: 32px;
--space-12: 48px; --space-16: 64px; --space-24: 96px;

/* Tipografia */
--text-display: 76px/1.05  600;
--text-h2:      39px/1.15  600;
--text-body:    16px/1.6   400;
--text-small:   13px/1.45  500;

/* Forma e movimento */
--radius:     12px;
--radius-lg:  20px;
--ease:       cubic-bezier(0.22, 1, 0.36, 1);
--duration:   220ms;`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "O equivalente no Framer",
          text: "Framer tem **Color Styles** e **Text Styles** no painel Assets. Crie os seus antes de desenhar qualquer tela. Depois, trocar a cor de marca do site inteiro é uma edição só. Quem pula esse passo acaba com 14 tons de verde ligeiramente diferentes.",
        },
        {
          type: "h",
          text: "Componentes: variantes e estados",
        },
        {
          type: "p",
          text: "Um componente é uma peça reutilizável. **Variante** é uma versão intencional (primário, secundário, fantasma). **Estado** é uma reação à interação (repouso, hover, pressionado, foco, desabilitado, carregando). Iniciantes desenham o repouso e esquecem o resto — e o site fica com aquela sensação de “morto” ao interagir.",
        },
        {
          type: "table",
          caption: "Matriz de um botão",
          head: ["", "Repouso", "Hover", "Pressionado", "Foco", "Desabilitado"],
          rows: [
            ["Primário", "Fundo primary", "Clarear 6%", "Escurecer 4% + escala 0,98", "Anel de foco 2px", "Opacidade 45%, cursor bloqueado"],
            ["Secundário", "Contorno border", "Fundo surface", "Fundo surface escuro", "Anel de foco 2px", "Opacidade 45%"],
            ["Fantasma", "Só texto", "Sublinhado", "Texto muted", "Anel de foco 2px", "Opacidade 45%"],
          ],
        },
        {
          type: "callout",
          variant: "warn",
          title: "Foco não é opcional",
          text: "O anel de foco existe para quem navega por teclado. Removê-lo com `outline: none` sem colocar nada no lugar quebra a acessibilidade do site inteiro. Se ele te incomoda visualmente, redesenhe-o — não apague.",
        },
        {
          type: "demo",
          id: "variantes",
          title: "Variantes e estados ao vivo",
          text: "Escolha a variante e o tamanho e passe o mouse sobre o botão. É a mesma lógica dos Variants do Framer.",
        },
        {
          type: "h",
          text: "O inventário mínimo para uma landing",
        },
        {
          type: "list",
          items: [
            "**Botão** — 3 variantes × 2 tamanhos, com todos os estados",
            "**Card** — um único componente com slots para ícone, título, texto e rodapé",
            "**Campo de formulário** — label, input, texto de ajuda, estado de erro",
            "**Badge / pill** — para overlines, tags e status",
            "**Item de FAQ** — accordion com estado aberto e fechado",
            "**Bloco de métrica** — número grande, rótulo, variação",
            "**Cabeçalho de seção** — overline, título, subtítulo",
            "**Barra de navegação** — desktop, mobile e estado rolado",
          ],
        },
        {
          type: "p",
          text: "Oito componentes. É isso. Se você construir esses oito bem feitos, monta a página inteira encaixando peças — e é por isso que designers experientes terminam um site em uma fração do tempo de um iniciante que desenha cada seção do zero.",
        },
        {
          type: "h",
          text: "O que documentar",
        },
        {
          type: "compare",
          badTitle: "Documentação que ninguém lê",
          bad: [
            "História da marca em 6 páginas",
            "Regras teóricas sem exemplo visual",
            "Todos os tons possíveis de todas as cores",
            "Nomes internos que só o designer entende",
          ],
          goodTitle: "Documentação que economiza tempo",
          good: [
            "Os tokens, com o valor e onde usar",
            "Um exemplo de uso correto e um de uso errado por componente",
            "A escala de espaçamento com o nome de cada degrau",
            "Regra explícita: quando usar botão primário vs. secundário",
          ],
        },
        {
          type: "exercise",
          title: "Exercício 2.5 — Monte seu sistema",
          items: [
            "Escreva seus tokens de cor, espaçamento e tipografia em um único arquivo ou frame.",
            "Crie o componente Botão com 3 variantes e todos os 5 estados.",
            "Crie o componente Card com slots, e use-o em três contextos diferentes.",
            "Refaça uma seção existente usando apenas componentes — sem desenhar nada novo.",
          ],
        },
      ],
      takeaways: [
        "Tokens são a fonte única de verdade: mude um valor, o site inteiro acompanha.",
        "Variante é intenção; estado é reação. Desenhe os dois.",
        "Oito componentes cobrem uma landing page inteira.",
        "Documente decisões e exemplos, não teoria.",
      ],
    },
  ],
};
