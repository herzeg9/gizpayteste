import type { Track } from "./types";

export const track4: Track = {
  id: "framer-na-pratica",
  number: "04",
  title: "Framer na prática",
  tagline: "Da tela em branco ao site publicado",
  description:
    "O fluxo de trabalho completo dentro do Framer: canvas, Stacks, sizing, componentes, variantes, movimento, CMS, formulários e publicação com domínio próprio.",
  lessons: [
    {
      slug: "tour-do-framer",
      number: "4.1",
      title: "Tour do Framer e o jeito certo de começar",
      subtitle:
        "Onde fica cada coisa, quais atalhos aprender primeiro e por que começar por um template acelera o aprendizado.",
      minutes: 12,
      goals: [
        "Reconhecer as quatro áreas da interface",
        "Aprender os atalhos que economizam horas",
        "Montar a estrutura inicial de um projeto",
      ],
      blocks: [
        {
          type: "p",
          text: "O Framer ocupa um espaço próprio: tem a liberdade visual de uma ferramenta de design e publica um site real, rápido e hospedado. Você desenha, e o site existe — sem exportar, sem passar para um desenvolvedor, sem perder nada na tradução.",
        },
        {
          type: "callout",
          variant: "note",
          title: "Uma nota sobre o nome",
          text: "Para construir sites, a ferramenta é o **Framer** (framer.com). Existe também o **Frame.io**, da Adobe, que é uma plataforma de revisão e aprovação de vídeo — útil se o projeto tiver peças em vídeo, mas não é onde o site é feito. Este curso trata do Framer.",
        },
        {
          type: "h",
          text: "As quatro áreas da interface",
        },
        {
          type: "cards",
          items: [
            {
              tag: "Esquerda",
              title: "Camadas e páginas",
              text: "A árvore de tudo que existe na página e a lista de páginas do site. Designers experientes selecionam por aqui, não clicando no canvas — é mais preciso e evita pegar o elemento aninhado errado.",
            },
            {
              tag: "Centro",
              title: "Canvas",
              text: "O espaço infinito onde ficam os breakpoints. Space + arrastar move a tela; Cmd/Ctrl + scroll dá zoom.",
            },
            {
              tag: "Direita",
              title: "Propriedades",
              text: "Muda conforme a seleção: tamanho, layout, tipografia, cor, efeitos, link e SEO. É onde você passa a maior parte do tempo.",
            },
            {
              tag: "Topo",
              title: "Insert, Preview e Publish",
              text: "Inserir elementos e componentes, abrir o preview (Cmd/Ctrl + P) e publicar. O preview mostra rolagem, hover e animações de verdade.",
            },
          ],
        },
        {
          type: "h",
          text: "Atalhos que valem os primeiros dez minutos",
        },
        {
          type: "table",
          head: ["Atalho", "Ação"],
          rows: [
            ["`F`", "Criar um Frame"],
            ["`T`", "Criar um texto"],
            ["`R`", "Criar um retângulo"],
            ["`Shift + A`", "Envolver a seleção em um Stack (o mais usado de todos)"],
            ["`Cmd/Ctrl + D`", "Duplicar"],
            ["`Cmd/Ctrl + P`", "Abrir o preview"],
            ["`Space + arrastar`", "Mover o canvas"],
            ["`Cmd/Ctrl + scroll`", "Zoom"],
            ["`Esc` duas vezes", "Sair da edição de texto e desmarcar"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Shift + A é o atalho da casa",
          text: "Selecione dois ou mais elementos e pressione Shift + A: eles viram um Stack com Fit Content. É assim que layouts nascem no Framer — de dentro para fora, agrupando o que já existe, em vez de desenhar caixas vazias.",
        },
        {
          type: "h",
          text: "Comece por um template — sério",
        },
        {
          type: "p",
          text: "Há uma resistência natural a isso (“quero fazer do zero para aprender”), mas o efeito é o contrário do esperado. Uma tela em branco obriga você a resolver **design** e **ferramenta** ao mesmo tempo, e as duas coisas travam juntas. Abrir um template bem construído e desmontá-lo ensina a organização de camadas, o uso de componentes e a estrutura de CMS de uma vez só.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Escolha um template do mesmo tipo de projeto",
              text: "Para a Giz Pay: um template de SaaS ou fintech B2B, com hero, seção de recursos, comparativo e formulário.",
            },
            {
              title: "Antes de mudar qualquer coisa, explore",
              text: "Abra o painel de camadas e percorra a árvore. Identifique o que é Frame, o que é Stack e o que é componente. Isso leva 20 minutos e vale mais que três tutoriais.",
            },
            {
              title: "Substitua o conteúdo, não a estrutura",
              text: "Troque textos e imagens pelos seus, mantendo a estrutura de camadas. Você vai sentir onde o template resolve bem e onde ele atrapalha o seu conteúdo.",
            },
            {
              title: "Aí sim reconstrua as seções que não servem",
              text: "Com a mecânica dominada, refazer uma seção do zero é rápido — e você já sabe qual padrão seguir.",
            },
          ],
        },
        {
          type: "h",
          text: "Higiene de projeto desde o primeiro dia",
        },
        {
          type: "compare",
          badTitle: "Projeto que vira um pesadelo em duas semanas",
          bad: [
            "Camadas chamadas “Frame 327”, “Frame 328”, “Frame 329”",
            "Cores em hexadecimal digitadas direto em cada elemento",
            "O mesmo card copiado e colado em 12 lugares",
            "Elementos posicionados no olho, fora de Stacks",
          ],
          goodTitle: "Projeto que continua rápido no mês seguinte",
          good: [
            "Camadas nomeadas: “Hero”, “Grade de módulos”, “Card de módulo”",
            "Color Styles e Text Styles criados **antes** do primeiro elemento",
            "Card transformado em componente e reutilizado",
            "Tudo dentro de Stacks, com padding e gap definidos",
          ],
        },
        {
          type: "callout",
          variant: "warn",
          title: "A ordem importa",
          text: "Crie os Styles (cor e tipografia) antes de desenhar. Se você desenhar 20 seções e só depois tentar organizar tokens, vai encontrar 14 tons de verde ligeiramente diferentes e não vai ter paciência de consertar todos.",
        },
        {
          type: "h",
          text: "E a IA do Framer?",
        },
        {
          type: "p",
          text: "O Framer 3.0 trouxe agentes de IA capazes de gerar e editar seções inteiras a partir de uma descrição. É genuinamente útil para o trabalho braçal: gerar variações de uma seção, preencher conteúdo de exemplo, converter um layout para mobile. O que ela não faz é decidir a mensagem, a hierarquia e a estratégia de conversão — que é exatamente o conteúdo das Trilhas 01 e 02. **Delegue a tarefa repetitiva, mantenha a decisão.**",
        },
        {
          type: "exercise",
          title: "Exercício 4.1 — Prepare o terreno",
          items: [
            "Crie um projeto novo e configure os Color Styles: background, surface, foreground, muted, primary, border.",
            "Crie os Text Styles: Display, H2, H3, Corpo, Apoio, Rótulo.",
            "Abra um template de referência e mapeie, no painel de camadas, como o hero dele está montado.",
            "Pratique Shift + A dez vezes até virar reflexo.",
          ],
        },
      ],
      takeaways: [
        "Selecione pelo painel de camadas e nomeie tudo desde o começo.",
        "Shift + A envolve a seleção em um Stack — é o atalho mais usado.",
        "Crie Color e Text Styles antes de desenhar o primeiro elemento.",
        "Comece por um template e desmonte-o; a tela em branco vem depois.",
      ],
    },
    {
      slug: "stack-grid-e-sizing",
      number: "4.2",
      title: "Stack, Grid e sizing — o coração do layout",
      subtitle:
        "Frame, Stack e Grid: quando usar cada um, e por que Fill / Fit / Fixed é o conceito que separa quem sofre de quem constrói rápido.",
      minutes: 15,
      goals: [
        "Escolher entre Frame, Stack e Grid",
        "Dominar os quatro modos de sizing",
        "Montar uma seção responsiva que não quebra",
      ],
      blocks: [
        {
          type: "p",
          text: "Se você entender bem esta aula, 80% da frustração com o Framer desaparece. Praticamente todo problema de “o texto está cortado”, “a imagem não escala” ou “quebrou no celular” tem raiz aqui.",
        },
        {
          type: "h",
          text: "Os três containers",
        },
        {
          type: "table",
          head: ["Container", "Como posiciona os filhos", "Use para"],
          rows: [
            [
              "**Frame**",
              "Livre, por coordenadas X/Y. Você arrasta e ele fica ali.",
              "Elementos decorativos sobrepostos, um brilho de fundo, um selo em cima de uma imagem. Raramente para estrutura.",
            ],
            [
              "**Stack**",
              "Automaticamente em linha ou coluna, com gap constante. É Flexbox.",
              "Praticamente toda a estrutura: navbar, hero, grupos de botões, listas, seções inteiras.",
            ],
            [
              "**Grid**",
              "Em linhas e colunas simultâneas.",
              "Galerias, matrizes de recursos, listagens de CMS com número fixo de colunas.",
            ],
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "A regra do Frame",
          text: "Se você se pegar arrastando um elemento para “alinhar no olho” dentro de um Frame, pare. Provavelmente ele deveria estar em um Stack. Layout arrastado no olho quebra no primeiro breakpoint.",
        },
        {
          type: "h",
          text: "Sizing: Fill, Fit, Fixed e Relative",
        },
        {
          type: "p",
          text: "Ao selecionar qualquer elemento, os campos **W** (largura) e **H** (altura) têm um seletor de modo. Esses quatro modos explicam quase tudo:",
        },
        {
          type: "cards",
          items: [
            {
              tag: "Fixed",
              title: "Tamanho exato em pixels",
              text: "“Fique com 400px, sempre.” Bom para ícones, avatares e elementos decorativos. É o padrão — e é a causa da maioria dos textos cortados, porque um texto Fixed não cresce quando o conteúdo aumenta.",
            },
            {
              tag: "Fill",
              title: "Ocupa o espaço disponível",
              text: "“Pegue tudo o que sobrou.” É o modo que você mais vai usar em layouts responsivos. Dois irmãos em Fill dividem o espaço meio a meio.",
            },
            {
              tag: "Fit",
              title: "Encolhe até o conteúdo",
              text: "“Fique do tamanho exato do que tem dentro.” Obrigatório em botões e na **altura** de qualquer texto.",
            },
            {
              tag: "Relative",
              title: "Porcentagem do pai",
              text: "“Fique com 50% do meu pai.” Útil quando você quer proporção explícita em vez de divisão automática.",
            },
          ],
        },
        {
          type: "demo",
          id: "sizing",
          title: "Fill, Fit e Fixed lado a lado",
          text: "Troque o modo de cada bloco e veja o comportamento mudar. É o mesmo modelo mental do painel do Framer.",
        },
        {
          type: "callout",
          variant: "warn",
          title: "A receita que resolve texto cortado",
          text: "Para praticamente todo texto: **Width = Fill** (ou Fixed com a largura da coluna) e **Height = Fit Content**. Assim o texto sempre aparece inteiro e reflui sozinho — o que é indispensável quando o conteúdo vem do CMS e o tamanho varia por item.",
        },
        {
          type: "h",
          text: "A estrutura padrão de uma seção",
        },
        {
          type: "code",
          lang: "estrutura",
          caption: "Copie este esqueleto para toda seção que criar",
          code: `Section (Stack vertical)
├─ W: Fill  ·  H: Fit
├─ Padding: 96 em cima e embaixo, 24 nas laterais
└─ Align: center
   │
   └─ Container (Stack vertical)
      ├─ W: Fixed 1200  ·  H: Fit
      ├─ Gap: 48
      │
      ├─ Cabeçalho (Stack vertical, gap 12)
      │  ├─ Overline   → W: Fit
      │  ├─ Título     → W: Fill · H: Fit
      │  └─ Subtítulo  → W: Fixed 640 · H: Fit
      │
      └─ Conteúdo (Stack horizontal, gap 24, wrap ligado)
         ├─ Card → W: Fill · H: Fit
         ├─ Card → W: Fill · H: Fit
         └─ Card → W: Fill · H: Fit`,
        },
        {
          type: "p",
          text: "Repare no padrão: o Stack externo é sempre **Fill** para pegar a largura da tela toda, e o container interno é **Fixed** com a largura máxima, centralizado. Essa dupla resolve o problema de “o conteúdo esticou demais no monitor grande” de uma vez por todas.",
        },
        {
          type: "h",
          text: "Padding e gap, nunca empurrão manual",
        },
        {
          type: "p",
          text: "Espaçamento em Stack tem exatamente duas ferramentas: **padding** (do Stack até os filhos) e **gap** (entre os filhos). Se você está empurrando um elemento para dar espaço, o layout vai quebrar assim que o conteúdo mudar de tamanho. E aqui entra a Trilha 02: os valores de padding e gap saem da escala de 8pt, não do que parecer bom no momento.",
        },
        {
          type: "h",
          text: "Breakpoints",
        },
        {
          type: "p",
          text: "O Framer trabalha com breakpoints de Desktop, Tablet e Phone no canvas. A mudança mais poderosa de todas é uma só: **trocar a Direction do Stack de horizontal para vertical no Phone**. Um hero de duas colunas vira duas linhas empilhadas, e como tudo está em Fill, os tamanhos se resolvem sozinhos.",
        },
        {
          type: "table",
          caption: "Ajustes típicos por breakpoint",
          head: ["Propriedade", "Desktop", "Phone"],
          rows: [
            ["Direction do hero", "Horizontal", "Vertical"],
            ["Padding vertical da seção", "96px", "64px"],
            ["Padding lateral", "24px", "20px"],
            ["Gap entre cards", "24px", "16px"],
            ["Tamanho do display", "76px", "36px"],
            ["Botão primário", "Fit", "Fill (largura total)"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Verifique em 390px antes de publicar",
          text: "Percorra a página inteira no breakpoint de telefone. Os três problemas mais comuns: texto transbordando de container Fixed, imagem que não escala e elemento posicionado de forma absoluta que só fazia sentido no desktop. Todos são de resolução rápida — se descobertos antes de ir ao ar.",
        },
        {
          type: "exercise",
          title: "Exercício 4.2 — Uma seção que não quebra",
          items: [
            "Monte a estrutura padrão acima do zero, usando só Shift + A.",
            "Coloque três cards com quantidades de texto bem diferentes entre si e confirme que os três continuam alinhados.",
            "Ative wrap no Stack horizontal e reduza a janela até os cards quebrarem de linha.",
            "No breakpoint Phone, troque a Direction para vertical e ajuste apenas padding e tamanho de fonte.",
          ],
        },
      ],
      takeaways: [
        "Frame para decoração, Stack para estrutura, Grid para matrizes.",
        "Texto: Width = Fill, Height = Fit Content. Sempre.",
        "Section em Fill + Container Fixed centralizado resolve a largura máxima.",
        "Espaçamento é padding e gap — nunca empurrão manual.",
      ],
    },
    {
      slug: "componentes-e-variantes",
      number: "4.3",
      title: "Componentes, variantes e propriedades",
      subtitle:
        "Como parar de copiar e colar e montar peças que se atualizam sozinhas em toda a página.",
      minutes: 12,
      goals: [
        "Criar componentes e entender master vs. instância",
        "Usar variantes para estados interativos",
        "Expor propriedades para reutilizar com conteúdos diferentes",
      ],
      blocks: [
        {
          type: "p",
          text: "Componente é um elemento definido uma vez e usado em muitos lugares. Você edita o **master** e todas as instâncias acompanham. É a diferença entre alterar a cor de um botão em um lugar ou em quarenta.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Criar",
              text: "Selecione o elemento pronto, clique com o botão direito e escolha **Create Component**. O original vira o master e aparece no painel Assets.",
            },
            {
              title: "Usar",
              text: "Arraste instâncias do painel Assets para as páginas. Cada instância pode receber conteúdo próprio, mas mantém a estrutura do master.",
            },
            {
              title: "Editar",
              text: "Abra o master (duplo clique no Assets) e altere. Todas as instâncias do site atualizam na mesma hora.",
            },
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "Quando transformar em componente",
          text: "A regra prática é a terceira vez. Na primeira, desenhe. Na segunda, duplique. Na terceira, transforme em componente — nesse ponto você já sabe quais partes variam e quais são fixas, que é justamente a informação necessária para modelar bem.",
        },
        {
          type: "h",
          text: "Variantes: estados sem código",
        },
        {
          type: "p",
          text: "Um componente pode ter várias **variantes** — versões visuais alternativas. O Framer anima a transição entre elas automaticamente. É assim que se constrói hover, estado ativo, toggle e accordion sem escrever nada.",
        },
        {
          type: "code",
          lang: "estrutura",
          caption: "Variantes do componente Botão",
          code: `Botão
├─ Default    → fundo primary, texto escuro
├─ Hover      → fundo 6% mais claro, leve elevação
├─ Pressed    → escala 0.98, fundo 4% mais escuro
└─ Disabled   → opacidade 45%, sem interação

Conexão: Default --(Hover)--> Hover --(Click)--> Pressed
Transição: 180ms, ease-out`,
        },
        {
          type: "p",
          text: "Para criar: selecione o master, clique no **+** ao lado de Variants no painel direito, nomeie, mude o estilo e ligue a interação. Leva uns dez minutos na primeira vez e depois vira automático.",
        },
        {
          type: "demo",
          id: "variantes",
          title: "Variantes e estados",
          text: "O mesmo componente em variantes diferentes, com todos os estados. Passe o mouse e clique para sentir as transições.",
        },
        {
          type: "h",
          text: "Propriedades: o mesmo componente, conteúdos diferentes",
        },
        {
          type: "p",
          text: "Um card de módulo aparece seis vezes na página da Giz Pay com ícone, título e texto diferentes. Sem propriedades, você teria seis componentes separados — e perderia o benefício. Expondo o texto e a imagem como propriedades, você usa **um** componente e preenche cada instância no painel.",
        },
        {
          type: "table",
          caption: "Componentes da Giz Pay e suas propriedades",
          head: ["Componente", "Propriedades", "Variantes"],
          rows: [
            ["Botão", "Texto, link", "Primário, Secundário, Fantasma × 2 tamanhos"],
            ["Card de módulo", "Sigla, título, descrição", "Padrão, Destaque"],
            ["Métrica", "Valor, rótulo, variação", "Positiva, Neutra, Negativa"],
            ["Item de FAQ", "Pergunta, resposta", "Fechado, Aberto"],
            ["Passo", "Número, título, texto", "Padrão"],
            ["Linha do comparativo", "Critério, Giz Pay, concorrente", "Padrão, Destaque"],
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Copiar estilo entre elementos",
          text: "Quando dois elementos precisam do mesmo visual mas não justificam um componente: botão direito no elemento pronto → Copy, botão direito no destino → **Paste Style**. Copia cor, borda, raio, sombra e tipografia sem levar conteúdo nem posição. Funciona até entre páginas.",
        },
        {
          type: "h",
          text: "Erros comuns de modelagem",
        },
        {
          type: "compare",
          badTitle: "Modelagem que dá trabalho depois",
          bad: [
            "Um componente separado para cada variação de cor",
            "Componentes com 15 propriedades expostas",
            "Master com tamanho fixo, impedindo Fill na instância",
            "Nomes como “Componente 4” e “Card cópia 2”",
          ],
          goodTitle: "Modelagem que escala",
          good: [
            "Um componente com uma propriedade de variante",
            "Três a cinco propriedades: só o que realmente muda",
            "Master construído em Stack com Fill, adaptando-se ao contexto",
            "Nomes descritivos: “Card / Módulo”, “Botão / Primário”",
          ],
        },
        {
          type: "exercise",
          title: "Exercício 4.3 — Sua biblioteca",
          items: [
            "Crie o componente Botão com 3 variantes e todos os estados.",
            "Crie o componente Card expondo ícone, título e descrição como propriedades.",
            "Use o Card seis vezes com conteúdos diferentes e confirme que edita apenas no painel.",
            "Altere o raio da borda no master e verifique que as seis instâncias mudaram juntas.",
          ],
        },
      ],
      takeaways: [
        "Na terceira repetição, vire componente.",
        "Variantes cobrem estados interativos sem código.",
        "Propriedades permitem um componente com conteúdos diferentes.",
        "Paste Style resolve o caso em que não vale a pena criar componente.",
      ],
    },
    {
      slug: "movimento-e-scroll",
      number: "4.4",
      title: "Movimento: appear, scroll e microinterações",
      subtitle:
        "Como dar vida ao site sem transformá-lo em um parque de diversões que ninguém consegue ler.",
      minutes: 11,
      goals: [
        "Configurar animações de entrada com valores que funcionam",
        "Usar efeitos de scroll com propósito",
        "Definir curvas e durações coerentes",
      ],
      blocks: [
        {
          type: "p",
          text: "Movimento bem feito é quase invisível: a pessoa não pensa “que animação bonita”, ela apenas sente que o site é bem acabado. Movimento mal feito é impossível de ignorar — e cansa.",
        },
        {
          type: "h",
          text: "A receita que funciona sempre",
        },
        {
          type: "code",
          lang: "config",
          caption: "Animação de entrada padrão (Appear / Scroll)",
          code: `Opacidade:  0  →  1
Y offset:  +24px  →  0
Duração:   0.5s
Curva:     Ease Out
Delay:     0
Escalonamento entre irmãos: 60ms
Repetir:   apenas uma vez (não a cada rolagem)`,
        },
        {
          type: "p",
          text: "Esses números não são arbitrários. Um deslocamento de 20 a 30 px é perceptível sem ser dramático; meio segundo é rápido o bastante para não atrasar a leitura; e Ease Out — rápido no começo, desacelerando no fim — imita como objetos reais chegam ao repouso.",
        },
        {
          type: "callout",
          variant: "warn",
          title: "Escalonamento é onde todo mundo exagera",
          text: "Uma grade de 6 cards com 200ms de atraso entre cada um leva 1,2 segundo para terminar. Quem chega na seção fica esperando o site carregar algo que já está lá. Use 40 a 80ms, ou anime a grade inteira como um bloco só.",
        },
        {
          type: "h",
          text: "Tipos de movimento no Framer",
        },
        {
          type: "cards",
          items: [
            {
              tag: "Appear",
              title: "Entrada na tela",
              text: "O elemento anima quando entra no viewport. É o efeito mais usado e o que mais contribui para a sensação de site premium. Aplique em cabeçalhos de seção e grupos de cards.",
            },
            {
              tag: "Scroll",
              title: "Ligado à rolagem",
              text: "A propriedade acompanha a posição da rolagem: parallax leve, um número que cresce, uma barra que preenche. Use com moderação e sempre com transform/opacity.",
            },
            {
              tag: "Hover / Press",
              title: "Resposta ao ponteiro",
              text: "Feedback imediato: elevação sutil, mudança de cor, ícone que desliza. Duração curta, entre 80 e 180ms.",
            },
            {
              tag: "Transição de variante",
              title: "Entre estados",
              text: "Accordion abrindo, aba trocando, menu mobile aparecendo. O Framer interpola automaticamente entre as variantes.",
            },
          ],
        },
        {
          type: "h",
          text: "Curvas e durações",
        },
        {
          type: "table",
          head: ["Situação", "Duração", "Curva"],
          rows: [
            ["Hover de botão", "120–180ms", "Ease Out"],
            ["Pressionar", "80–120ms", "Ease Out"],
            ["Abrir accordion", "220–300ms", "Ease In Out"],
            ["Entrada de seção", "400–600ms", "Ease Out"],
            ["Modal abrindo", "250–350ms", "Spring suave"],
            ["Contador de número", "800–1200ms", "Ease Out"],
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "Regra de uma frase",
          text: "Se você não consegue explicar em uma frase por que aquela animação existe, remova. “Ela revela a seção conforme a pessoa chega” é uma razão. “Ficou legal” não é.",
        },
        {
          type: "h",
          text: "Movimento a serviço da conversão",
        },
        {
          type: "p",
          text: "Existe uma aplicação de movimento que não é decorativa: **fazer o valor aparecer**. Na Giz Pay, quando a pessoa arrasta o controle de número de alunos, o valor em reais deve animar até o novo número em vez de trocar instantaneamente. Isso faz o olho acompanhar a mudança e transforma um número em um acontecimento.",
        },
        {
          type: "list",
          items: [
            "**Contador animado** em métricas — o número sobe do zero quando entra na tela.",
            "**Barra de progresso** em formulário de várias etapas — efeito Zeigarnik da aula 1.4.",
            "**Painel do produto animando sozinho** no hero — mostra o produto funcionando sem exigir clique.",
            "**Destaque pulsante** na linha da tabela comparativa em que você ganha.",
          ],
        },
        {
          type: "callout",
          variant: "note",
          title: "Acessibilidade do movimento",
          text: "Ative a opção de reduzir animações para quem configurou isso no sistema operacional. Não é um detalhe menor: parte das pessoas sente enjoo real com movimento na tela.",
        },
        {
          type: "exercise",
          title: "Exercício 4.4 — Anime com critério",
          items: [
            "Aplique a receita padrão (opacidade + Y 24px + 0,5s + ease out) em três seções.",
            "Adicione escalonamento de 60ms em uma grade de cards e compare com 200ms.",
            "Crie um hover de card com elevação de 4px em 150ms.",
            "Percorra a página inteira e remova toda animação que você não consegue justificar em uma frase.",
          ],
        },
      ],
      takeaways: [
        "Receita padrão: opacidade 0→1, Y +24px, 0,5s, ease out.",
        "Escalonamento entre 40 e 80ms — nunca 200ms.",
        "Duração proporcional à distância percorrida pelo elemento.",
        "Movimento pode servir à conversão, animando o valor que a pessoa acabou de calcular.",
      ],
    },
    {
      slug: "cms-formularios-e-publicacao",
      number: "4.5",
      title: "CMS, formulários, SEO e publicação",
      subtitle:
        "As últimas peças: conteúdo gerenciável, captura de leads, metadados e o site no ar com domínio próprio.",
      minutes: 14,
      goals: [
        "Modelar uma coleção de CMS",
        "Configurar formulário e destino dos leads",
        "Publicar com domínio próprio e medir resultado",
      ],
      blocks: [
        {
          type: "h",
          text: "CMS: conteúdo que se repete",
        },
        {
          type: "p",
          text: "Sempre que houver muitos itens com a mesma estrutura — posts, cases, vagas, depoimentos — eles pertencem ao CMS, não a páginas duplicadas. A modelagem tem três peças:",
        },
        {
          type: "terms",
          items: [
            {
              term: "Collection",
              def: "O banco de itens semelhantes. Ex.: “Cases de escolas”.",
            },
            {
              term: "Fields",
              def: "Os dados de cada item: Título, Slug, Imagem, Resumo, Conteúdo, Data, Categoria.",
            },
            {
              term: "Collection Page",
              def: "A página-modelo que exibe um item. Você desenha uma vez e o Framer gera uma URL para cada item da coleção.",
            },
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Campos: comece pelo mínimo",
          text: "Adicionar campo “por via das dúvidas” é o erro mais comum. Campo sobrando polui o editor e torna o cadastro lento. Adicionar depois é fácil; remover, quando já existe conteúdo ligado, é dolorido.",
        },
        {
          type: "p",
          text: "Um detalhe de SEO que vale ouro: na página de coleção, os campos podem ser usados como variáveis no title e na meta description. Configurando `{{Título}} — Giz Pay` uma única vez, todos os itens ganham metadados únicos automaticamente.",
        },
        {
          type: "h",
          text: "Formulários",
        },
        {
          type: "p",
          text: "O Framer tem componente de formulário nativo. O que decide a conversão não é a tecnologia, é o desenho:",
        },
        {
          type: "compare",
          badTitle: "Formulário que espanta",
          bad: [
            "Onze campos, incluindo CNPJ e cargo",
            "Placeholder no lugar do label",
            "Erros aparecendo só depois de enviar",
            "Botão escrito “Enviar”",
            "Depois do envio: uma linha dizendo “Obrigado”",
          ],
          goodTitle: "Formulário que converte",
          good: [
            "Cinco campos: nome, escola, e-mail, WhatsApp, faixa de alunos",
            "Label visível acima do campo, sempre",
            "Validação em tempo real, com mensagem específica",
            "Botão escrito “Agendar demonstração gratuita”",
            "Depois do envio: o que acontece agora, em quanto tempo, e um atalho para o WhatsApp",
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "Cada campo custa",
          text: "Todo campo adicional derruba a taxa de envio. Pergunte apenas o que você precisa para fazer o primeiro contato. O resto você descobre na conversa — que é justamente o objetivo do formulário.",
        },
        {
          type: "p",
          text: "Sobre o destino dos leads: a entrega por e-mail funciona, mas some no meio da caixa de entrada. O ideal é enviar por webhook para uma planilha ou CRM e disparar uma notificação no WhatsApp comercial. Lead de venda consultiva contactado em minutos converte muito mais do que lead contactado no dia seguinte.",
        },
        {
          type: "h",
          text: "SEO antes de publicar",
        },
        {
          type: "steps",
          items: [
            {
              title: "Favicon",
              text: "Site Settings › General › Favicon. Sem ele, a aba mostra um globo genérico.",
            },
            {
              title: "Imagem social",
              text: "Site Settings › General › Social Image, em 1200×630. É o que aparece quando o link é compartilhado no WhatsApp — canal principal no B2B brasileiro.",
            },
            {
              title: "Title e description por página",
              text: "Únicos, com o benefício na frente. Description abaixo de 160 caracteres.",
            },
            {
              title: "Tags de texto",
              text: "Confirme um único H1 por página, com a mensagem principal.",
            },
            {
              title: "Alt das imagens",
              text: "Descritivo nas informativas, vazio nas decorativas.",
            },
            {
              title: "URLs limpas",
              text: "`/precos`, `/seguranca`. Sem acento, com hífen.",
            },
          ],
        },
        {
          type: "h",
          text: "Publicar em duas etapas",
        },
        {
          type: "steps",
          items: [
            {
              title: "1. Publique no subdomínio do Framer",
              text: "`seusite.framer.website`. Teste no navegador real, no celular real. A renderização de verdade às vezes difere do preview, especialmente com fontes customizadas e scripts de terceiros.",
            },
            {
              title: "2. Conecte o domínio próprio",
              text: "Site Settings › Domains. O Framer mostra os registros DNS a criar no seu provedor — normalmente um A e um CNAME. No caso de um .com.br, isso é feito no painel do Registro.br ou no provedor onde o DNS está delegado.",
            },
            {
              title: "3. Espere a propagação",
              text: "De minutos a algumas horas. O certificado HTTPS é emitido automaticamente depois que o apontamento é reconhecido.",
            },
            {
              title: "4. Configure a medição",
              text: "Google Analytics 4 e Search Console. Envie o sitemap (o Framer gera em `/sitemap.xml`).",
            },
          ],
        },
        {
          type: "callout",
          variant: "warn",
          title: "Não conecte o domínio antes de testar",
          text: "Se você apontar o domínio para uma versão com problema, o problema vai ao ar para todo mundo — inclusive para quem chegar por um anúncio pago naquele momento. Verifique no subdomínio primeiro, sempre.",
        },
        {
          type: "h",
          text: "Medir o que importa",
        },
        {
          type: "table",
          head: ["Evento", "O que revela", "Ação se estiver baixo"],
          rows: [
            ["Rolagem além de 25%", "O hero prendeu a atenção", "Reescreva o título e troque a imagem"],
            ["Uso da calculadora", "O argumento de custo engajou", "Suba a calculadora na página"],
            ["Início do formulário", "Houve intenção real", "Reduza campos, aproxime o CTA"],
            ["Envio do formulário", "A conversão aconteceu", "Simplifique validação e reforce o que vem depois"],
            ["Cliques no WhatsApp", "Preferência de canal do público", "Deixe o botão fixo no mobile"],
          ],
        },
        {
          type: "exercise",
          title: "Exercício 4.5 — Ao ar",
          items: [
            "Crie uma coleção de CMS com cinco campos e três itens de exemplo.",
            "Monte a página de coleção usando variáveis no title e na description.",
            "Configure um formulário de cinco campos com destino por webhook.",
            "Publique no subdomínio, teste no celular e só então conecte o domínio.",
          ],
        },
      ],
      takeaways: [
        "Conteúdo repetitivo vai para o CMS; campos, o mínimo necessário.",
        "Cinco campos no formulário, label visível, e uma confirmação que diz o que vem depois.",
        "Favicon, imagem social, title e description antes de publicar.",
        "Publique no subdomínio, teste, e só então conecte o domínio.",
      ],
    },
  ],
};
