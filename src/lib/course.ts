export type Scene = {
  in: string;
  out: string;
  visual: string;
  vo: string;
  lowerThird?: string;
  comments: { timecode: string; hashtag: string; text: string }[];
};

export type Lesson = {
  slug: string;
  number: string;
  title: string;
  duration: string;
  objective: string;
  youWill: string[];
  theory: { heading: string; body: string; callout?: string }[];
  gizpay: { heading: string; body: string }[];
  exercise: { title: string; steps: string[]; deliverable: string };
  scenes: Scene[];
};

export const lessons: Lesson[] = [
  {
    slug: "territorio",
    number: "01",
    title: "O mapa do território",
    duration: "08:20",
    objective:
      "Separar UI, UX, front-end e conversão — e saber onde cada um decide o site da Giz Pay.",
    youWill: [
      "Definir UI, UX, front-end e produto em uma frase cada.",
      "Ler um site como um funil, não como um cartaz.",
      "Identificar quem é o cliente da Giz Pay e o que ele precisa decidir.",
    ],
    theory: [
      {
        heading: "Quatro camadas que as pessoas misturam",
        body: "UX é a experiência: o caminho mental e prático até um resultado. UI é a interface: o que se vê e se toca. Front-end é a construção no navegador: HTML, CSS, JavaScript, performance, acessibilidade. Conversão é o resultado de negócio: a escola agendar uma demonstração. Um site bonito com UX ruim não captura cliente. Um site feio com CTA claro às vezes captura. O trabalho bom junta as quatro camadas.",
      },
      {
        heading: "O site não é um folder. É um vendedor que nunca dorme.",
        body: "A direção da escola chega cansada, comparando intermediários, com medo de migrar a tesouraria. Em 12 segundos ela decide se continua. O site precisa responder, nessa ordem: o que é, para quem é, por que agora, o que eu ganho, o que eu risco, o que eu faço em seguida.",
        callout:
          "Se a homepage precisa de uma reunião para ser entendida, a homepage falhou.",
      },
      {
        heading: "Três papéis, três dores",
        body: "Direção quer caixa previsível e menos taxa. Tesouraria quer baixa automática, conciliação e relatório. Secretaria quer parar de emitir boleto e atender responsável pedindo segunda via. O site atual fala principalmente com a direção. O redesign precisa deixar os três se reconhecerem sem virar um catálogo genérico.",
      },
      {
        heading: "O vocabulário mínimo de front-end",
        body: "Página: uma URL. Seção: um bloco da página. Componente: um pedaço reutilizável (botão, card, formulário). Estado: vazio, carregando, erro, sucesso. Responsivo: o layout se reorganiza no celular. Acessível: teclado, leitor de tela, contraste. Performance: a primeira pintura útil chega rápido. Isso é o básico que você precisa para conversar com quem implementa — ou implementar você mesmo.",
      },
    ],
    gizpay: [
      {
        heading: "O produto em uma frase",
        body: "A Giz Pay é a camada financeira da escola: cobrança automática em Pix, boleto e cartão, liquidação direto no CNPJ da instituição, sem intermediário retendo o caixa.",
      },
      {
        heading: "A decisão que o site precisa provocar",
        body: "Não é “entender o produto”. É “agendar 30 minutos” ou “calcular quanto o intermediário leva por ano”. Tudo no site existe para reduzir o medo dessa decisão.",
      },
    ],
    exercise: {
      title: "Mapa de 5 minutos do site atual",
      steps: [
        "Abra gizpay.com.br no celular e no desktop.",
        "Anote, sem julgar: headline, CTA principal, prova numérica, próximo passo.",
        "Escreva em uma linha: quem é o visitante e o que ele deve fazer.",
        "Marque o primeiro ponto em que você ficou em dúvida.",
      ],
      deliverable:
        "Um cartão no Frame.io (screencast de 60s) com a hashtag #ux listando headline, CTA e a primeira dúvida.",
    },
    scenes: [
      {
        in: "00:00",
        out: "00:35",
        visual:
          "Tela preta → logotipo giz + pay desenhado em giz. Corte para o site atual em 50% de opacidade.",
        vo: "Esta aula não é teoria solta. É o básico de UI, UX e front-end que você precisa para redesenhar o gizpay.com.br do zero — e captar mais escolas.",
        lowerThird: "Aula 01 · O mapa do território",
        comments: [
          {
            timecode: "00:08",
            hashtag: "#frame",
            text: "O logo precisa aparecer nítido 1s antes da locução citar Giz Pay.",
          },
        ],
      },
      {
        in: "00:35",
        out: "02:10",
        visual:
          "Quadro branco com quatro cartões: UX / UI / Front-end / Conversão. Cada um acende quando é definido.",
        vo: "UX é o caminho. UI é a cara. Front-end é o código no navegador. Conversão é a escola pedindo uma demo. Se você misturar esses quatro, o time discute cor enquanto o CTA está escondido.",
        comments: [
          {
            timecode: "01:22",
            hashtag: "#pacing",
            text: "Pausar 1s em cada cartão. O aluno precisa fotografar mentalmente.",
          },
        ],
      },
      {
        in: "02:10",
        out: "04:00",
        visual:
          "Screencast do gizpay.com.br. Cursor destaca headline, botões e números 0% / -80% / <3s.",
        vo: "Olhe o site atual como um vendedor. A headline fala com quem ensina. Os números tentam provar caixa e velocidade. Os dois CTAs — demonstração e calculadora — já são o funil certo. O problema não é a oferta. É a forma, o ritmo e o quanto o visitante se vê na tela.",
        comments: [
          {
            timecode: "02:40",
            hashtag: "#prova",
            text: "Zoom nos três números do hero. Eles são o gancho da aula 02.",
          },
        ],
      },
      {
        in: "04:00",
        out: "06:20",
        visual:
          "Três retratos ilustrados: direção, tesouraria, secretaria. Dores em uma linha cada.",
        vo: "Direção quer o dinheiro na conta dela. Tesouraria quer conciliar sem planilha. Secretaria quer parar de mandar segunda via. Um site que fala só com a direção perde os outros dois, que muitas vezes abrem a aba.",
        comments: [
          {
            timecode: "05:10",
            hashtag: "#ux",
            text: "Mostrar o seletor de papel do site novo por 3s, mesmo que a aula 07 o explique.",
          },
        ],
      },
      {
        in: "06:20",
        out: "08:20",
        visual:
          "Checklist na tela + exercício. Encerrar no Frame.io: pastas 00, 01, 02.",
        vo: "Antes da próxima aula, grave sessenta segundos do site atual no celular. No Frame.io, um comentário #ux: headline, CTA, primeira dúvida. Um ponto por card. Nos vemos na conversão.",
        comments: [
          {
            timecode: "07:40",
            hashtag: "#cta",
            text: "O exercício precisa ficar 4s na tela, não só na locução.",
          },
        ],
      },
    ],
  },
  {
    slug: "conversao",
    number: "02",
    title: "Como um site captura cliente",
    duration: "09:10",
    objective:
      "Montar o funil de uma landing B2B educacional: atenção, prova, objeção, ação.",
    youWill: [
      "Desenhar o above-the-fold com uma promessa e um próximo passo.",
      "Escolher prova que reduz risco (número, demo, comparação), não elogio vazio.",
      "Posicionar CTAs primário e secundário sem competirem.",
    ],
    theory: [
      {
        heading: "Above the fold é uma conversa de 12 segundos",
        body: "Acima da dobra cabem quatro coisas: para quem é, o que muda, por que acreditar, o que clicar. Tudo que não cabe nisso desce. Banner de anúncio da matrícula 2027 pode viver numa faixa — não pode roubar a headline.",
      },
      {
        heading: "CTA primário versus secundário",
        body: "Primário: Agendar demonstração. É o compromisso de 30 minutos. Secundário: Calcular economia. É um micro-sim, menor atrito, que aquece o primário. Nunca dois primários iguais. O botão de WhatsApp é um atalho de confiança, não o CTA da dobra.",
        callout:
          "O CTA deve completar a frase da headline. “O dinheiro da sua escola, no controle de quem ensina” → “Agendar demonstração”.",
      },
      {
        heading: "Prova que reduz risco",
        body: "Em fintech educacional, prova não é “somos inovadores”. É: o dinheiro cai no CNPJ da escola, 0% de repasse retido, Pix em menos de 3 segundos, implantação em 15 dias, LGPD. A calculadora transforma a taxa do intermediário em reais por ano — isso é prova sentida, não decorativa.",
      },
      {
        heading: "Objeção é conteúdo, não FAQ escondido",
        body: "As cinco objeções reais: “vocês ficam com o meu dinheiro?”, “preciso trocar o sistema acadêmico?”, “quanto custa?”, “quanto tempo leva?”, “a família vai achar que um terceiro está cobrando?”. Cada uma merece resposta visível antes do formulário. FAQ no fim confirma. Não introduz.",
      },
    ],
    gizpay: [
      {
        heading: "O que o site atual já acerta",
        body: "Promessa clara, dois CTAs, números no hero, comparativo, calculadora, portal do responsável, FAQ e formulário. A arquitetura de conversão existe.",
      },
      {
        heading: "O que trava a captura",
        body: "Pouca personalização por papel, demo do painel estática, calculadora tarde demais para quem só scrolla o hero, formulário genérico, ausência de um “ver o produto funcionando” interativo. O visitante entende, mas não sente o caixa entrar.",
      },
    ],
    exercise: {
      title: "Reescrever a dobra em 8 linhas",
      steps: [
        "Headline de no máximo 12 palavras.",
        "Subheadline que cita Pix, boleto e liquidação no CNPJ.",
        "CTA primário e secundário.",
        "Um número de prova.",
        "Uma linha de risco reduzido (implantação ou LGPD).",
      ],
      deliverable:
        "Imagem da dobra (Figma ou print) anexada no Frame.io com #copy e #cta.",
    },
    scenes: [
      {
        in: "00:00",
        out: "00:40",
        visual: "Cronômetro de 12s sobre o hero atual.",
        vo: "Doze segundos. É o tempo que a direção dá para o seu site. Se a dobra não fecha a conversa, o intermediário atual ganha por inércia.",
        lowerThird: "Aula 02 · Conversão",
        comments: [
          {
            timecode: "00:20",
            hashtag: "#pacing",
            text: "Deixar o cronômetro chegar a zero no silêncio. Não narrar por cima.",
          },
        ],
      },
      {
        in: "00:40",
        out: "03:00",
        visual:
          "Diagrama AIDA aplicado à Giz Pay: Atenção (headline), Interesse (números), Desejo (calculadora), Ação (form).",
        vo: "Atenção é a headline. Interesse são os números e o painel. Desejo é a calculadora mostrando R$ 179 mil saindo por ano. Ação é o formulário de 30 minutos. Pule uma etapa e o clique some.",
        comments: [
          {
            timecode: "02:10",
            hashtag: "#cta",
            text: "Mostrar os dois botões com labels reais, não Lorem.",
          },
        ],
      },
      {
        in: "03:00",
        out: "06:00",
        visual:
          "Split screen: site com prova vazia versus site com calculadora e comparativo.",
        vo: "Elogio não reduz risco. “Plataforma completa” não reduz risco. “O Pix cai no CNPJ da escola e a Giz Pay não retém o valor” reduz. Cada bloco abaixo da dobra ou reduz uma objeção ou é ruído.",
        comments: [
          {
            timecode: "04:30",
            hashtag: "#objecao",
            text: "Listar as 5 objeções na tela, uma por vez.",
          },
        ],
      },
      {
        in: "06:00",
        out: "09:10",
        visual: "Exercício da dobra + preview do seletor de papel do site novo.",
        vo: "Sua tarefa: reescrever a dobra em oito linhas e subir no Frame.io. Na aula 7 você vai comparar com o que construímos. Não precisa estar perfeito. Precisa ser específico.",
        comments: [
          {
            timecode: "08:20",
            hashtag: "#copy",
            text: "Mostrar um exemplo bom e um ruim da headline, lado a lado.",
          },
        ],
      },
    ],
  },
  {
    slug: "ux",
    number: "03",
    title: "UX na prática — jornada e heurísticas",
    duration: "10:00",
    objective:
      "Usar personas, jornada e as heurísticas de Nielsen para decidir o que entra no redesign.",
    youWill: [
      "Escrever uma jornada da direção da descoberta até a demo.",
      "Aplicar 6 heurísticas no gizpay.com.br.",
      "Priorizar atrito que mata conversão versus atrito que é só incômodo.",
    ],
    theory: [
      {
        heading: "Persona não é um avatar com nome bonito",
        body: "Persona útil tem contexto, gatilho e medo. Exemplo: Carla, 44 anos, diretora de um colégio de 480 alunos em Campinas. Gatilho: a taxa do intermediário subiu e o repasse atrasou a folha. Medo: migrar no meio do ano e quebrar a cobrança. Trabalho: clareza de caixa, implantação em 15 dias, “não preciso trocar o acadêmico”.",
      },
      {
        heading: "Jornada, não organograma",
        body: "Descoberta (Google, indicação, WhatsApp) → dobra do site → calculadora → comparativo → FAQ “o dinheiro cai na nossa conta?” → formulário ou WhatsApp. Cada etapa tem uma pergunta na cabeça. Se a página responde fora de ordem, a pessoa procura o preço e não acha — e sai.",
      },
      {
        heading: "Seis heurísticas que bastam neste projeto",
        body: "1. Visibilidade do estado: o visitante sabe onde está e o que aconteceu depois de enviar o form. 2. Correspondência com o mundo: “repasse”, “inadimplência”, “segunda via”, não “settlement”. 3. Controle: dá para recalcular, fechar modal, voltar. 4. Consistência: o botão verde sempre é a ação principal. 5. Prevenção de erro: formulário pede WhatsApp no formato certo. 6. Reconhecimento: o painel na dobra parece o produto, não um stock art.",
        callout:
          "Estética e design minimalista (heurística 8) aqui significa: menos seções genéricas, mais produto visível.",
      },
      {
        heading: "Acessibilidade é UX",
        body: "Contraste do giz limão no verde-lousa precisa passar WCAG. Foco visível nos botões. Formulário com label de verdade, não placeholder fingindo de label. Teclado no FAQ. Se a secretaria abre o site num Chromebook velho, o LCP não pode ser um vídeo de 8MB.",
      },
    ],
    gizpay: [
      {
        heading: "Atrito que mata",
        body: "Não entender em 12s se o dinheiro fica com a Giz Pay. Não conseguir se ver (papel). Calculadora invisível no mobile. Form longo sem saber o que acontece depois. Modal de comparativo em vez de seção permanente.",
      },
      {
        heading: "Atrito que pode esperar",
        body: "Microcopy do rodapé, ícones dos módulos, ordem exata do FAQ. Polir depois de a jornada principal converter.",
      },
    ],
    exercise: {
      title: "Heurística em 6 prints",
      steps: [
        "Percorra o site atual como Carla (direção).",
        "Para cada uma das 6 heurísticas, um print e uma nota de 1 linha.",
        "Classifique: mata conversão / incômodo / ok.",
        "Traga só os “mata conversão” para o Frame.io.",
      ],
      deliverable: "Seis comentários #ux no screencast, um por heurística.",
    },
    scenes: [
      {
        in: "00:00",
        out: "01:20",
        visual: "Persona Carla em um card. Foto ilustrada, gatilho, medo.",
        vo: "Esquece o usuário genérico. Você está falando com a Carla. A taxa subiu. O repasse atrasou a folha. Ela não quer inovar. Ela quer que o Pix da mensalidade caia na conta da escola na terça.",
        lowerThird: "Aula 03 · UX",
        comments: [
          {
            timecode: "00:50",
            hashtag: "#ux",
            text: "Manter o card da Carla visível enquanto a jornada começa.",
          },
        ],
      },
      {
        in: "01:20",
        out: "04:40",
        visual: "Linha do tempo da jornada com perguntas em cada nó.",
        vo: "A jornada é uma sequência de perguntas. O site que responde na ordem certa sente-se óbvio. O que responde em ordem errada sente-se “bonito, mas enrolado”.",
        comments: [
          {
            timecode: "03:10",
            hashtag: "#objecao",
            text: "Destacar o nó “eles ficam com o meu dinheiro?” — é o medo número um.",
          },
        ],
      },
      {
        in: "04:40",
        out: "08:10",
        visual: "Heurísticas aplicadas em prints do site atual.",
        vo: "Visibilidade, linguagem da escola, controle, consistência, prevenção de erro, reconhecimento do produto. Seis lentes. Chega. Não precisa das dez na primeira passagem.",
        comments: [
          {
            timecode: "06:00",
            hashtag: "#acessibilidade",
            text: "Medir contraste do CTA no print. Se falhar, anotar #acessibilidade.",
          },
        ],
      },
      {
        in: "08:10",
        out: "10:00",
        visual: "Exercício + corte para o seletor de papel do redesign.",
        vo: "Seis prints, seis cards no Frame.io. Só o que mata conversão. Na aula 4 a gente veste isso de interface.",
        comments: [],
      },
    ],
  },
  {
    slug: "ui",
    number: "04",
    title: "UI — hierarquia, tipo, cor, motion",
    duration: "09:40",
    objective:
      "Tomar decisões visuais que soem escola + fintech, não SaaS roxo genérico.",
    youWill: [
      "Montar uma escala tipográfica com um serif de display e um sans de interface.",
      "Escolher cor com significado: lousa, giz, papel, tijolo.",
      "Usar motion só para explicar caixa, não para enfeitar.",
    ],
    theory: [
      {
        heading: "Hierarquia é ordem de leitura, não tamanho de ego",
        body: "O olho precisa achar, nesta ordem: headline, prova, CTA, apoio. Se o mock do painel grita mais que a headline, a UI está invertida. Espaçamento cria hierarquia tanto quanto o tipo. Agrupe o que é uma ideia. Afaste o que é outra.",
      },
      {
        heading: "Tipo: voz da escola, números da tesouraria",
        body: "Display com serifa (Fraunces) para títulos — lembra quadro, livro, instituição. Sans (Geist) para interface e formulário. Mono para valores em real, para parecer painel, não prosa. Corpo entre 16 e 18px. Headline com contração de linha curta, não um parágrafo em 48px.",
      },
      {
        heading: "Cor com história",
        body: "Giz Pay = giz + pay. Lousa profunda (#16352A) é confiança e sala de aula. Giz limão (#D4F06A) é destaque e dinheiro que entra. Papel creme (#F6F1E6) é caderno, não fintech azul. Tijolo (#C45C26) é alerta de atraso, nunca o CTA principal. Um acento só para ação.",
        callout:
          "Se tudo é destaque, nada é destaque. O limão entra no CTA, no Pix pago e em quase nada mais.",
      },
      {
        heading: "Motion com ofício",
        body: "Animar o feed de pagamentos no painel ensina o produto. Animar o logo girando não ensina nada. Duração 200–400ms. Respeite reduced-motion. No Frame.io, motion demais vira #pacing: o aluno não consegue pausar num quadro estável para comentar.",
      },
    ],
    gizpay: [
      {
        heading: "Direção visual do redesign",
        body: "Institucional sem ser sisudo. Quadro-negro contemporâneo, papel de secretaria, números como giz. Distinto de intermediário bancário azul e de edtech roxa.",
      },
      {
        heading: "O painel é o herói visual",
        body: "O mock do caixa do mês não é decoração: é reconhecimento (heurística 6). Precisa parecer o app.gizpay.com.br, com recebidos, em dia, em aberto, atrasado e um feed de Pix.",
      },
    ],
    exercise: {
      title: "Paleta e tipo em uma página",
      steps: [
        "Aplicar lousa, giz, papel e tijolo em um retângulo de hero.",
        "Headline em serifa, corpo em sans, valor em mono.",
        "Um único botão primário.",
        "Checar contraste do botão e do texto sobre a lousa.",
      ],
      deliverable: "Print anexado no Frame.io com #ui e #acessibilidade.",
    },
    scenes: [
      {
        in: "00:00",
        out: "01:00",
        visual: "Moodboard: lousa, giz, caderno, Pix no celular.",
        vo: "A Giz Pay não é um banco. Não é uma edtech de aula online. É a tesouraria da escola. A UI precisa cheirar a isso.",
        lowerThird: "Aula 04 · UI",
        comments: [
          {
            timecode: "00:30",
            hashtag: "#ui",
            text: "Não usar stock de “handshake”. Manter o moodboard em objetos escolares e dinheiro.",
          },
        ],
      },
      {
        in: "01:00",
        out: "04:20",
        visual: "Escala tipográfica na tela. Headline / sub / corpo / caption / mono.",
        vo: "Serifa para o que se diz em voz alta. Sans para o que se usa. Mono para o que se conta em real. Se misturar, o site parece template.",
        comments: [],
      },
      {
        in: "04:20",
        out: "07:10",
        visual: "Paleta aplicada no hero do redesign. Tijolo só no “atrasado”.",
        vo: "Limão é o Pix que acabou de entrar. Tijolo é o atraso. Lousa é o fundo de confiança. Papel é onde a secretaria trabalha. Quatro cores, papéis claros.",
        comments: [
          {
            timecode: "05:50",
            hashtag: "#acessibilidade",
            text: "Mostrar o contraste giz-sobre-lousa passando no medidor.",
          },
        ],
      },
      {
        in: "07:10",
        out: "09:40",
        visual: "Feed de pagamentos animado versus logo girando (errado).",
        vo: "Motion explica caixa. Motion não é personalidade. Grave o exercício da paleta e comente #ui no Frame.io.",
        comments: [
          {
            timecode: "08:00",
            hashtag: "#motion",
            text: "Deixar o feed rodar 5s sem locução para o aluno ver o ritmo.",
          },
        ],
      },
    ],
  },
  {
    slug: "frontend",
    number: "05",
    title: "Front-end do básico ao que converte",
    duration: "10:30",
    objective:
      "Entender o suficiente de HTML, CSS, componentes, estados e performance para um site de captação.",
    youWill: [
      "Nomear as tags certas para nav, hero, form e FAQ.",
      "Listar estados de um formulário de demo.",
      "Checar o site no celular de verdade, não só no DevTools.",
    ],
    theory: [
      {
        heading: "HTML é estrutura, não visual",
        body: "header, nav, main, section, footer. h1 uma vez. botão é button, link é a. Formulário tem label associado. FAQ pode ser details/summary ou um acordeão acessível. Semântica ruim quebra SEO e leitor de tela — os dois importam para a Giz Pay.",
      },
      {
        heading: "CSS: fluxo, não posição mágica",
        body: "Flex e grid resolvem 90% do layout. Espaçamento em escala (8, 12, 16, 24, 32, 48, 72). Largura máxima do texto ~65 caracteres. No mobile, uma coluna. No desktop, hero em duas: copy + produto. Não esconda a calculadora no celular.",
      },
      {
        heading: "Componentes e estados",
        body: "Um botão, um campo, um card de módulo, um item de FAQ, o painel, o celular do responsável. Cada um tem vazio, hover, foco, disabled, erro, sucesso. O form de demo sem estado de sucesso é um beco. O visitante aperta e não sabe se a Carla da comercial vai ligar.",
        callout:
          "Front-end de marketing é front-end de produto: o mock do painel precisa se comportar, não só parecer.",
      },
      {
        heading: "Performance e confiança",
        body: "LCP abaixo de 2,5s. Imagens no tamanho certo. Fonte com display swap. Nada de popup no primeiro segundo. Escola em cidade do interior, 4G instável, Chromebook. Se o site é pesado, a Giz Pay parece cara de manter.",
      },
    ],
    gizpay: [
      {
        heading: "O que este repositório já é",
        body: "Next.js, TypeScript, Tailwind, componentes shadcn. A landing da Giz Pay é um app React com estados reais: calculadora, formulário, portal, seletor de papel. Não é um HTML estático fingindo interação.",
      },
      {
        heading: "Checklist de implementação",
        body: "CTA visível no sticky. Form com validação. Sucesso explícito. Calculadora com números da escola. Feed de Pix. Portal clicável. FAQ por teclado. Contraste. Página /gizpay independente do chrome da aula.",
      },
    ],
    exercise: {
      title: "Estados do formulário",
      steps: [
        "Liste: vazio, preenchendo, erro de e-mail, enviando, sucesso, falha de rede.",
        "Para cada um, uma frase na tela (microcopy).",
        "Compare com o form atual do gizpay.com.br.",
        "Anote o que falta no atual.",
      ],
      deliverable: "Tabela de 6 estados anexada no Frame.io com #ux e #cta.",
    },
    scenes: [
      {
        in: "00:00",
        out: "01:30",
        visual: "Árvore HTML da homepage em um editor.",
        vo: "Se o HTML é uma bagunça de divs, o Google e o leitor de tela também se perdem. A estrutura da homepage é o roteiro da conversa.",
        lowerThird: "Aula 05 · Front-end",
        comments: [
          {
            timecode: "00:40",
            hashtag: "#acessibilidade",
            text: "Mostrar um h1 só. Se houver dois no screencast, cortar.",
          },
        ],
      },
      {
        in: "01:30",
        out: "04:40",
        visual: "Layout grid da dobra desktop e stack mobile lado a lado.",
        vo: "Desktop: conversa à esquerda, produto à direita. Mobile: conversa, prova, produto, CTA. A calculadora não pode morrer abaixo de um fold infinito.",
        comments: [
          {
            timecode: "03:20",
            hashtag: "#ui",
            text: "Gravar o iPhone real, não só o emulador, num dos takes.",
          },
        ],
      },
      {
        in: "04:40",
        out: "08:00",
        visual: "Formulário passando pelos 6 estados.",
        vo: "Vazio, preenchendo, erro, enviando, sucesso, falha. Se você só desenha o estado feliz, você não desenhou o formulário. Você desenhou um cartaz.",
        comments: [
          {
            timecode: "06:10",
            hashtag: "#cta",
            text: "O sucesso precisa dizer o que acontece em seguida: WhatsApp em 24h, 30 min de call.",
          },
        ],
      },
      {
        in: "08:00",
        out: "10:30",
        visual: "Lighthouse resumido + exercício.",
        vo: "Performance é confiança. Faça a tabela de estados e suba no Frame.io. Na aula 6 a gente julga o site real.",
        comments: [],
      },
    ],
  },
  {
    slug: "auditoria",
    number: "06",
    title: "Auditoria do gizpay.com.br",
    duration: "08:50",
    objective:
      "Julgar o site atual com critério: o que manter, o que cortar, o que inventar.",
    youWill: [
      "Separar conteúdo forte de apresentação fraca.",
      "Listar oportunidades de interação que aumentam captura.",
      "Sair com um brief de uma página para o redesign.",
    ],
    theory: [
      {
        heading: "Não redesenhe por tédio",
        body: "O site atual já tem oferta, prova, comparativo, calculadora, portal, segurança e form. Um redesign que jogue isso fora é ego. Um redesign que dê cara, ritmo e interação a isso é ofício.",
      },
      {
        heading: "Manter",
        body: "Promessa “sem intermediário”. 0% retido. Liquidação no CNPJ. Calculadora. Comparativo Giz Pay vs intermediário. Portal do responsável. FAQ honesto. Implantação em 15 dias. White label. Esses blocos são o produto.",
      },
      {
        heading: "Cortar ou recuar",
        body: "Modais que escondem o comparativo e a LGPD. Linguagem que às vezes soa mais SaaS do que secretaria. Hero que não muda conforme o papel. Falta de estado de sucesso no que o visitante imagina do form. Pouca vida no painel.",
      },
      {
        heading: "Inventar — com propósito de captura",
        body: "Seletor de papel (direção, tesouraria, secretaria). Painel vivo com Pix entrando. Calculadora mais cedo e mais teatrada. Portal clicável. Linha do tempo de 15 dias. Modo “ver decisões de design” para esta aula. Sticky CTA. Sucesso de formulário explícito.",
      },
    ],
    gizpay: [
      {
        heading: "Brief de uma página",
        body: "Redesenhar a homepage para a diretora Carla sentir o caixa da escola entrar, calcular a taxa que perde hoje e agendar 30 minutos — sem medo de intermediário. Tom: lousa contemporânea. Interação: produto visível, não stock. Métrica: clique em demo ou WhatsApp.",
      },
    ],
    exercise: {
      title: "Brief de uma página",
      steps: [
        "Escreva: audiência, promessa, prova, CTA, tom, o que não fazer.",
        "Máximo 120 palavras.",
        "Compare com o brief desta aula.",
        "Leia em voz alta. Se parecer slogan, reescreva.",
      ],
      deliverable: "PDF ou comentário #copy no projeto 00_briefing do Frame.io.",
    },
    scenes: [
      {
        in: "00:00",
        out: "01:10",
        visual: "Walkthrough mudo de 20s do site atual em desktop e mobile.",
        vo: "Antes de desenhar, a gente julga. Com respeito. O conteúdo da Giz Pay já é forte. A apresentação ainda não trabalha o suficiente para a Carla.",
        lowerThird: "Aula 06 · Auditoria",
        comments: [
          {
            timecode: "00:20",
            hashtag: "#pacing",
            text: "Walkthrough sem locução. Comentários de auditoria entram depois.",
          },
        ],
      },
      {
        in: "01:10",
        out: "05:30",
        visual: "Três colunas: manter / cortar / inventar, preenchidas ao vivo.",
        vo: "Manter a oferta. Cortar o que esconde prova em modal. Inventar só o que faz a Carla sentir o Pix e marcar a agenda.",
        comments: [
          {
            timecode: "03:00",
            hashtag: "#ux",
            text: "Não inventar blog, login, ou pricing público se o modelo é conversa comercial.",
          },
        ],
      },
      {
        in: "05:30",
        out: "08:50",
        visual: "Brief na tela. Corte para o site novo em 30%.",
        vo: "Seu brief cabe em 120 palavras. Suba no Frame.io. A aula 7 é o zero: a gente constrói o site que você está prestes a ver.",
        comments: [],
      },
    ],
  },
  {
    slug: "redesign",
    number: "07",
    title: "Redesign do zero — o site que captura",
    duration: "12:00",
    objective:
      "Percorrer o novo gizpay.com.br seção a seção, ligando cada bloco a UI, UX e conversão.",
    youWill: [
      "Explicar por que cada seção existe.",
      "Operar a calculadora, o portal e o formulário como a Carla.",
      "Ligar o modo “decisões de design” e narrar as escolhas.",
    ],
    theory: [
      {
        heading: "Ordem da nova homepage",
        body: "Faixa de matrícula 2027 → nav → hero com papel + painel vivo → prova em números → problema do intermediário → comparativo → como funciona → módulos → calculadora → portal da família → dia a dia por papel → segurança → FAQ → formulário. Cada bloco reduz uma dúvida ou pede a ação.",
      },
      {
        heading: "Interação que vende",
        body: "O seletor de papel muda copy do hero. O feed de Pix prova velocidade. A calculadora transforma 3,5% em reais. O celular do responsável mostra segunda via sem app. O form diz o que acontece depois. Isso é produto na homepage, não marketing sobre o produto.",
      },
      {
        heading: "Copy: mesma verdade, mais corpo",
        body: "Mantemos a tese: caixa da escola, sem intermediário. Afiamos o ritmo. Falamos “repasse”, “inadimplência”, “segunda via”. Evitamos “solução completa” e “ecossistema”. Número antes de adjetivo.",
      },
    ],
    gizpay: [
      {
        heading: "Onde clicar agora",
        body: "Abra /gizpay. Ative “Ver decisões de design”. Percorra com a lista da aula. Depois desligue o modo e tente agendar uma demo como Carla.",
      },
    ],
    exercise: {
      title: "Teste das 30 pessoas imaginárias",
      steps: [
        "Percorra o site novo no celular como direção.",
        "Percorra como tesouraria (mude o papel).",
        "Envie o formulário até o sucesso.",
        "Anote 3 pontos de orgulho e 3 de dúvida.",
      ],
      deliverable:
        "Screencast de 2 min no Frame.io, pasta 02_screencasts, hashtags #ux #cta #prova.",
    },
    scenes: [
      {
        in: "00:00",
        out: "01:00",
        visual: "Antes / depois: site atual versus /gizpay, mesmo recorte do hero.",
        vo: "Mesma empresa. Mesma oferta. Outra conversa. Do zero não significa jogar a verdade fora. Significa reconstruir o palco.",
        lowerThird: "Aula 07 · Redesign",
        comments: [
          {
            timecode: "00:24",
            hashtag: "#ui",
            text: "Alinhar as duas headlines no mesmo ponto do quadro para o corte bater.",
          },
        ],
      },
      {
        in: "01:00",
        out: "05:20",
        visual: "Walkthrough narrado: papel, painel, comparativo, calculadora.",
        vo: "Papel para se reconhecer. Painel para ver o caixa. Comparativo para matar o intermediário. Calculadora para sentir o prejuízo anual. Nesta ordem.",
        comments: [
          {
            timecode: "03:40",
            hashtag: "#prova",
            text: "Mostrar a calculadora chegando em um valor grande. Não deixar em R$ 0.",
          },
        ],
      },
      {
        in: "05:20",
        out: "08:40",
        visual: "Portal do responsável + form de sucesso.",
        vo: "A família paga no celular. A secretaria some da fila. O form não some no vazio: diz que o comercial fala no WhatsApp. Confiança é continuidade.",
        comments: [
          {
            timecode: "07:10",
            hashtag: "#cta",
            text: "Gravar o estado de sucesso inteiro, incluindo o próximo passo.",
          },
        ],
      },
      {
        in: "08:40",
        out: "12:00",
        visual: "Modo decisões de design ligado. Exercício do screencast.",
        vo: "Ligue as anotações, desligue, e grave dois minutos no Frame.io como se fosse a Carla no 4G. Se ela se perde, a gente corrige na V2.",
        comments: [],
      },
    ],
  },
  {
    slug: "frameio",
    number: "08",
    title: "Produção e revisão no Frame.io",
    duration: "08:00",
    objective:
      "Gravar, organizar, comentar e aprovar esta aula como um time de produto + vídeo.",
    youWill: [
      "Montar a árvore de pastas do projeto.",
      "Comentar com hashtag, timecode e um ponto só.",
      "Separar V1, V2 e V3 sem misturar história com cor.",
    ],
    theory: [
      {
        heading: "Por que Frame.io nesta aula",
        body: "UI/UX de site e UI/UX de vídeo se parecem: precisão de quadro, versão, comentário acionável. Frame.io é o lugar onde a locução, o screencast do gizpay.com.br e o site novo se encontram. Comentário no minuto 03:12 sobre o CTA é o equivalente a um issue no botão da dobra.",
      },
      {
        heading: "Protocolo de comentário",
        body: "Um ponto por card. Pause no quadro ou marque I/O no trecho. Anote na tela se for visual. Comece com hashtag. Escreva a correção. Complete quando entrar na versão seguinte. Não suba V2 com V1 aberta.",
      },
      {
        heading: "Três rodadas, três perguntas",
        body: "V1: a aula ensina? V2: a tela ensina sem brigar com a voz? V3: está aprovado para o aluno? Misturar as três no mesmo share link é como pedir para a Carla julgar a cor do botão antes de entender se o dinheiro cai na conta dela.",
      },
      {
        heading: "Share links",
        body: "Interno: comentários ligados, time da Giz Pay e da aula. Cliente/aluno: pode comentar, sem ver a briga interna da V1. Baixe CSV de marcadores se for editar noutro NLE. Exporte legendas. O roteiro desta plataforma já nasce com timecode para colar como capítulo.",
      },
    ],
    gizpay: [
      {
        heading: "Pacote para subir hoje",
        body: "Oito aulas (esta plataforma gera locução e CSV). Screencast do site atual. Screencast do /gizpay. Brief de uma página. Planilha de hashtags.",
      },
    ],
    exercise: {
      title: "Primeira rodada real",
      steps: [
        "Crie o projeto e as pastas 00, 01, 02, 03.",
        "Suba um take de 60s (mesmo que seja o exercício da aula 1).",
        "Deixe 3 comentários no próprio vídeo, com hashtags diferentes.",
        "Resolva um, deixe dois abertos, e descreva o que iria para a V2.",
      ],
      deliverable: "Link de share interno colado no canal do time. Pasta 03_aprovacao.",
    },
    scenes: [
      {
        in: "00:00",
        out: "01:20",
        visual: "UI do Frame.io: asset, comments, versions. Sem narrar cada clique de login.",
        vo: "Frame.io não é galeria. É a mesa onde o quadro 03:12 do CTA vira tarefa. Se o comentário pudesse ser um e-mail, está mal feito.",
        lowerThird: "Aula 08 · Frame.io",
        comments: [
          {
            timecode: "00:40",
            hashtag: "#frame",
            text: "Usar a UI atual do Frame.io V4. Não gravar tutorial genérico de 2021.",
          },
        ],
      },
      {
        in: "01:20",
        out: "04:00",
        visual: "Árvore de pastas + exemplo de um card bom e um card ruim.",
        vo: "Ruim: “não gostei do meio”. Bom: “#cta 04:12 — o botão Calcular some no iPhone; manter sticky”. Um ponto. Um quadro. Uma correção.",
        comments: [
          {
            timecode: "02:30",
            hashtag: "#cta",
            text: "Mostrar o card bom com anotação desenhada no botão.",
          },
        ],
      },
      {
        in: "04:00",
        out: "06:20",
        visual: "V1 V2 V3 empilhados. Round questions na tela.",
        vo: "Rodada um é história. Rodada dois é picture. Rodada três é aprovação. Se a Carla do comercial misturar as três, você conduz: “isso é V2, anotei, agora só estrutura”.",
        comments: [],
      },
      {
        in: "06:20",
        out: "08:00",
        visual: "Share link + exercício final. Encerrar na homepage da aula.",
        vo: "Crie o projeto hoje. Suba sessenta segundos. Três cards. Uma correção. O site novo está em /gizpay. A aula está aqui. Agora é ofício: gravar, comentar, melhorar, captar.",
        comments: [],
      },
    ],
  },
];

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug);
}

export function getLessonIndex(slug: string) {
  return lessons.findIndex((l) => l.slug === slug);
}

export function adjacentLessons(slug: string) {
  const i = getLessonIndex(slug);
  return {
    prev: i > 0 ? lessons[i - 1] : undefined,
    next: i >= 0 && i < lessons.length - 1 ? lessons[i + 1] : undefined,
  };
}

export function allMarkers() {
  return lessons.flatMap((lesson) =>
    lesson.scenes.flatMap((scene) =>
      scene.comments.map((c) => ({
        lesson: `${lesson.number} ${lesson.title}`,
        timecode: c.timecode,
        hashtag: c.hashtag,
        comment: c.text,
      })),
    ),
  );
}
