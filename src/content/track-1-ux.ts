import type { Track } from "./types";

export const track1: Track = {
  id: "fundamentos-ux",
  number: "01",
  title: "Fundamentos de UX",
  tagline: "Antes do pixel, a decisão",
  description:
    "O que UX realmente significa, para quem você está desenhando, como organizar a informação e quais princípios de comportamento decidem se alguém clica ou vai embora.",
  lessons: [
    {
      slug: "ui-ux-e-por-que-sites-nao-convertem",
      number: "1.1",
      title: "UI, UX e por que a maioria dos sites não converte",
      subtitle:
        "As duas palavras que todo mundo usa como sinônimo, a diferença prática entre elas e o único critério que importa em um site comercial.",
      minutes: 12,
      goals: [
        "Separar UX, UI, design visual e front-end sem confusão",
        "Entender o que é uma métrica de sucesso e por que ela vem antes do layout",
        "Reconhecer os quatro motivos mais comuns de um site bonito não vender",
      ],
      blocks: [
        {
          type: "p",
          text: "Existe uma confusão que atrasa qualquer projeto: tratar **UX** e **UI** como a mesma coisa. Elas se sobrepõem no dia a dia, mas resolvem perguntas diferentes, e misturar as duas é o motivo número um de reuniões improdutivas sobre cor de botão.",
        },
        {
          type: "terms",
          items: [
            {
              term: "UX — User Experience",
              def: "A experiência inteira de quem usa. Responde: a pessoa consegue fazer o que veio fazer? Ela entende onde está, o que ganha e qual é o próximo passo? Vive em fluxos, hierarquia de informação e decisões de conteúdo.",
            },
            {
              term: "UI — User Interface",
              def: "A camada concreta com que a pessoa interage: botões, campos, cards, menus, estados. Responde: essa tela comunica com clareza e é agradável e previsível de operar?",
            },
            {
              term: "Design visual",
              def: "Cor, tipografia, forma, imagem, ritmo. É o que dá personalidade e credibilidade. É parte da UI, não um passo separado no fim.",
            },
            {
              term: "Front-end",
              def: "O código que transforma o design em algo que roda no navegador: HTML, CSS e JavaScript. No Framer, boa parte disso é gerada para você — mas os conceitos continuam valendo.",
            },
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "A regra que resume tudo",
          text: "UX é a decisão. UI é a execução da decisão. Se a decisão está errada, nenhuma execução salva. Um formulário lindo de 14 campos continua sendo um formulário de 14 campos.",
        },
        {
          type: "h",
          text: "Todo site tem exatamente um trabalho",
        },
        {
          type: "p",
          text: "Sites institucionais falham porque tentam fazer tudo: informar, impressionar, listar features, contar a história da empresa, ter um blog. Um site comercial precisa de **uma métrica primária** — a ação que, se acontecer mais vezes, faz o negócio crescer.",
        },
        {
          type: "table",
          caption: "A métrica primária muda completamente o desenho da página.",
          head: ["Tipo de negócio", "Métrica primária", "O que isso muda no site"],
          rows: [
            [
              "SaaS B2B com venda consultiva",
              "Demonstrações agendadas",
              "A página inteira empurra para um formulário curto e qualificado; o produto precisa ser mostrado, não descrito.",
            ],
            [
              "E-commerce",
              "Pedidos concluídos",
              "Busca, filtro, foto e checkout mandam. Texto institucional atrapalha.",
            ],
            [
              "Portfólio",
              "Contatos qualificados",
              "O trabalho ocupa 80% da tela; o texto só contextualiza.",
            ],
            [
              "Conteúdo / mídia",
              "Assinaturas ou tempo de leitura",
              "Legibilidade, ritmo editorial e recirculação de conteúdo.",
            ],
          ],
        },
        {
          type: "p",
          text: "A Giz Pay, que vamos repaginar na Trilha 05, é o primeiro caso: uma plataforma financeira para escolas, com venda consultiva. A métrica primária é **demonstração agendada com escola qualificada**. Guarde isso — cada decisão do projeto vai ser julgada contra esse número.",
        },
        {
          type: "h",
          text: "Os quatro motivos de um site bonito não vender",
        },
        {
          type: "cards",
          items: [
            {
              tag: "01",
              title: "Clareza atrasada",
              text: "A pessoa chega e leva mais de 5 segundos para saber o que é aquilo e para quem serve. Frases como “soluções inteligentes para o seu negócio” não dizem nada. O visitante não pergunta, ele fecha.",
            },
            {
              tag: "02",
              title: "Prova ausente",
              text: "O site afirma que é melhor, mais rápido e mais barato, mas não mostra nada: nenhum número, nenhum cliente, nenhuma tela de produto. Afirmação sem prova vira ruído.",
            },
            {
              tag: "03",
              title: "Fricção no meio do caminho",
              text: "O botão principal aparece uma vez só, o formulário pede CNPJ antes do nome, o preço está escondido. Cada obstáculo desnecessário derruba uma fatia dos visitantes.",
            },
            {
              tag: "04",
              title: "Passividade",
              text: "O site é um folheto. A pessoa lê, concorda e vai embora, porque não houve nenhum momento em que ela colocou a própria realidade dentro da página.",
            },
          ],
        },
        {
          type: "p",
          text: "O quarto ponto é o que separa um site correto de um site que capta clientes. Quando o visitante move um controle, digita o número de alunos da escola dele e vê o resultado mudar na tela, ele deixa de ler sobre o produto e passa a experimentar o produto. **Interatividade não é enfeite: é a prova mais barata que existe.**",
        },
        {
          type: "quote",
          text: "Ninguém compra porque leu que a solução é boa. As pessoas compram quando reconhecem o próprio problema descrito com precisão e enxergam o caminho de saída.",
        },
        {
          type: "h",
          text: "O processo em que vamos trabalhar",
        },
        {
          type: "steps",
          items: [
            {
              title: "Descobrir",
              text: "Quem é o público, qual é a dor real, o que a concorrência promete, quais são as objeções. Sem entrevista ou dado, você está decorando um chute.",
            },
            {
              title: "Definir",
              text: "Objetivo, métrica primária, mensagem central e escopo. Uma frase que resume o site e é aprovada antes de qualquer tela.",
            },
            {
              title: "Estruturar",
              text: "Arquitetura da informação e wireframe: a ordem das seções e o que cada uma precisa provar. Ainda sem cor e sem fonte.",
            },
            {
              title: "Desenhar",
              text: "Design system (cor, tipografia, espaçamento, componentes) e depois a alta fidelidade. Nessa ordem, nunca ao contrário.",
            },
            {
              title: "Construir",
              text: "No Framer: montar em Stacks, transformar repetição em componentes, adicionar movimento e conectar formulários.",
            },
            {
              title: "Publicar e medir",
              text: "Domínio, SEO, analytics e eventos de conversão. Um site sem medição é uma opinião permanente.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warn",
          title: "O erro clássico de iniciante",
          text: "Abrir a ferramenta de design e começar pelo hero, escolhendo cor e fonte. Você vai passar horas polindo uma seção cuja mensagem ainda não foi decidida — e vai jogar tudo fora quando a mensagem mudar.",
        },
        {
          type: "exercise",
          title: "Exercício 1.1 — Defina o alvo",
          text: "Antes de seguir, escreva em um documento (leva 10 minutos e economiza dias):",
          items: [
            "Qual é a métrica primária do site que você vai construir?",
            "Qual é a única ação que você quer que o visitante faça?",
            "Se a pessoa lesse apenas uma frase do site, qual seria?",
            "Como você vai saber, daqui a 30 dias, se o site funcionou?",
          ],
        },
      ],
      takeaways: [
        "UX é a decisão, UI é a execução — nenhuma execução salva uma decisão errada.",
        "Todo site comercial tem uma métrica primária; sem ela, não existe critério para decidir nada.",
        "Sites falham por clareza atrasada, falta de prova, fricção e passividade.",
        "Interatividade é a forma mais barata de provar valor antes da venda.",
      ],
    },
    {
      slug: "publico-dor-e-mensagem",
      number: "1.2",
      title: "Público, dor e mensagem central",
      subtitle:
        "Como sair do “nosso produto é completo” e chegar a uma frase que faz a pessoa certa parar de rolar a página.",
      minutes: 14,
      goals: [
        "Montar uma persona útil (e não uma ficha decorativa)",
        "Usar Jobs to Be Done para descobrir o que a pessoa realmente quer resolver",
        "Escrever uma proposta de valor testável",
      ],
      blocks: [
        {
          type: "p",
          text: "Design sem público definido é decoração. A pergunta “isso está bonito?” não tem resposta; a pergunta “isso é claro e convincente para uma diretora de escola de 400 alunos que perde três dias por mês conciliando boleto?” tem.",
        },
        {
          type: "h",
          text: "Persona: só o que muda uma decisão",
        },
        {
          type: "p",
          text: "Esqueça a ficha com foto de banco de imagens, idade e hobbies. Uma persona útil responde quatro coisas, e cada uma delas altera algo concreto na tela.",
        },
        {
          type: "table",
          head: ["Campo", "Exemplo (Giz Pay)", "O que muda no site"],
          rows: [
            [
              "Quem decide",
              "Diretora / mantenedora da escola; a secretária influencia muito.",
              "Duas mensagens: caixa e controle para a direção, menos trabalho manual para a secretaria.",
            ],
            [
              "Dor concreta",
              "O intermediário retém o dinheiro por 30 dias e cobra 3,5% do faturamento.",
              "O herói da página não é o produto, é o dinheiro parado. A dor precisa aparecer em número.",
            ],
            [
              "Objeção real",
              "“Vou ter que trocar meu sistema acadêmico?” e “quanto tempo leva para implantar?”",
              "FAQ deixa de ser rodapé decorativo e vira uma seção de remoção de risco.",
            ],
            [
              "Nível de conhecimento",
              "Alta em gestão escolar, baixa em meios de pagamento.",
              "Explicar “liquidação no CNPJ da escola” em português simples, sem jargão de adquirência.",
            ],
          ],
        },
        {
          type: "h",
          text: "Jobs to Be Done: o que a pessoa contrata",
        },
        {
          type: "p",
          text: "A ideia é simples: ninguém quer um produto, todo mundo quer um progresso. As pessoas “contratam” uma solução para avançar de uma situação ruim para uma situação melhor. Escreva o job em uma frase estruturada:",
        },
        {
          type: "code",
          lang: "texto",
          caption: "Modelo de Job to Be Done",
          code: `Quando [situação],
eu quero [motivação],
para que eu possa [resultado esperado].

— Aplicado à Giz Pay —

Quando fecho o mês e descubro que 12% das mensalidades estão em atraso
e o repasse do intermediário só cai daqui a 30 dias,
eu quero cobrar automaticamente e receber direto na conta da escola,
para que eu possa pagar professores sem antecipar recebível no banco.`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "De onde tirar isso sem inventar",
          text: "Cinco conversas de 20 minutos com clientes reais valem mais que qualquer workshop. Pergunte: “me conta o último mês em que isso deu problema”. Anote as palavras exatas que a pessoa usa — elas viram o texto do site.",
        },
        {
          type: "h",
          text: "A proposta de valor em uma frase",
        },
        {
          type: "p",
          text: "O topo do site tem entre 3 e 5 segundos para responder três perguntas: **o que é**, **para quem** e **por que é melhor**. Um modelo que funciona bem para venda consultiva:",
        },
        {
          type: "code",
          lang: "texto",
          caption: "Fórmula da proposta de valor",
          code: `[Resultado que a pessoa quer] para [público específico],
sem [o principal sacrifício do jeito atual].`,
        },
        {
          type: "compare",
          badTitle: "Genérico — poderia ser de qualquer empresa",
          bad: [
            "“Soluções financeiras inteligentes para instituições de ensino.”",
            "“A plataforma completa de gestão escolar.”",
            "“Transformamos a gestão do seu negócio.”",
            "“Tecnologia e inovação a serviço da educação.”",
          ],
          goodTitle: "Específico — só a Giz Pay poderia dizer",
          good: [
            "“O dinheiro da sua escola cai na conta da sua escola, no mesmo dia.”",
            "“Cobrança automática de mensalidade sem intermediário segurando o seu caixa por 30 dias.”",
            "“Assinatura por aluno em vez de 3,5% sobre tudo o que a escola fatura.”",
            "“A secretaria para de emitir boleto no banco. A régua faz sozinha.”",
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "Teste do concorrente",
          text: "Pegue a sua frase de topo, troque o nome da sua empresa pelo nome de um concorrente e leia de novo. Se continuar fazendo sentido, a frase não diz nada. Reescreva até que só você possa assiná-la.",
        },
        {
          type: "h",
          text: "Mapear objeções antes que elas apareçam",
        },
        {
          type: "p",
          text: "Toda venda tem um conjunto pequeno e previsível de objeções. Se o site não responde a elas, a pessoa não pergunta: ela adia, e adiar é o mesmo que não comprar. Liste as objeções e decida **onde** cada uma será respondida.",
        },
        {
          type: "table",
          head: ["Objeção", "Onde responder", "Como responder"],
          rows: [
            [
              "“É caro?”",
              "Calculadora interativa",
              "Mostrar em reais o que o modelo atual custa por ano, com os números da própria escola.",
            ],
            [
              "“Vai dar trabalho migrar?”",
              "Seção de implantação",
              "Prazo explícito, o que a escola precisa fazer e o que a Giz Pay faz.",
            ],
            [
              "“É seguro? É LGPD?”",
              "Bloco de segurança",
              "Itens concretos: criptografia, papéis de acesso, trilha de auditoria.",
            ],
            [
              "“Funciona com o meu sistema?”",
              "FAQ, alta na página",
              "Resposta direta de uma linha: convive com o sistema pedagógico atual.",
            ],
            [
              "“Quem já usa?”",
              "Prova social",
              "Nome, número e uma frase específica de uma escola real.",
            ],
          ],
        },
        {
          type: "exercise",
          title: "Exercício 1.2 — Sua mensagem",
          items: [
            "Escreva o Job to Be Done do seu público na estrutura Quando / Eu quero / Para que.",
            "Escreva três versões da frase de topo usando a fórmula de proposta de valor.",
            "Aplique o teste do concorrente nas três e elimine as que sobrevivem ao teste.",
            "Liste as cinco objeções mais comuns e defina em qual seção cada uma será respondida.",
          ],
        },
      ],
      takeaways: [
        "Persona útil responde: quem decide, qual a dor concreta, qual a objeção e qual o nível de conhecimento.",
        "As pessoas contratam progresso, não produto — descreva o progresso.",
        "A frase de topo precisa passar no teste do concorrente.",
        "Toda objeção precisa de um endereço na página; senão vira abandono silencioso.",
      ],
    },
    {
      slug: "arquitetura-da-informacao",
      number: "1.3",
      title: "Arquitetura da informação e fluxo",
      subtitle:
        "A ordem das seções é uma argumentação. Como construir a narrativa de uma landing page que leva do problema ao formulário.",
      minutes: 13,
      goals: [
        "Entender arquitetura da informação como sequência de argumentos",
        "Conhecer a estrutura canônica de uma landing de conversão",
        "Desenhar o fluxo do usuário do anúncio até o agendamento",
      ],
      blocks: [
        {
          type: "p",
          text: "Arquitetura da informação (AI) é decidir **o que existe, em que ordem e sob qual rótulo**. Em um site institucional isso costuma virar um debate sobre o menu. Em uma landing de conversão, é mais preciso pensar assim: a página é uma conversa em que só você fala, e a ordem das seções é a ordem dos seus argumentos.",
        },
        {
          type: "callout",
          variant: "key",
          title: "O princípio da escada",
          text: "Cada seção precisa responder à pergunta que a seção anterior criou na cabeça do visitante. Se uma seção não responde a nenhuma pergunta, ela não deveria existir.",
        },
        {
          type: "h",
          text: "A estrutura canônica de uma landing de venda consultiva",
        },
        {
          type: "steps",
          items: [
            {
              title: "1. Hero — o que é e para quem",
              text: "Uma frase de resultado, uma linha de apoio que remove o principal sacrifício, um botão primário e um secundário. Mais uma imagem que já mostre o produto. Pergunta que fica: “tá, mas eu tenho esse problema mesmo?”",
            },
            {
              title: "2. Prova de credibilidade",
              text: "Números duros, logos de clientes ou uma métrica verificável. Serve para comprar permissão de continuar. Pergunta: “por que o jeito atual é ruim?”",
            },
            {
              title: "3. O problema",
              text: "Nomeie a dor com as palavras do cliente. É aqui que a pessoa pensa “é exatamente isso que acontece comigo”. Pergunta: “e como vocês resolvem?”",
            },
            {
              title: "4. Como funciona",
              text: "Três ou quatro passos, sem jargão. Reduz o medo de complexidade. Pergunta: “o que exatamente eu recebo?”",
            },
            {
              title: "5. Recursos / módulos",
              text: "O que existe no produto, sempre traduzido em benefício. Pergunta: “é melhor que o que eu já uso?”",
            },
            {
              title: "6. Comparativo",
              text: "Você contra a alternativa atual, em critérios que o cliente já usa para decidir. Pergunta: “quanto isso vale para mim?”",
            },
            {
              title: "7. Momento interativo",
              text: "Calculadora, simulador, configurador. A pessoa insere a própria realidade e vê o valor em número. É o pico de convencimento da página.",
            },
            {
              title: "8. Prova social",
              text: "Depoimento com nome, cargo e resultado. Idealmente logo depois do pico de interesse. Pergunta: “e se der errado?”",
            },
            {
              title: "9. Remoção de risco",
              text: "Implantação, segurança, suporte, FAQ. Todas as objeções da aula anterior moram aqui. Pergunta: “ok, como eu começo?”",
            },
            {
              title: "10. Conversão",
              text: "Formulário curto, com reforço do que acontece depois de enviar. Nada de novidade aqui — só o caminho.",
            },
          ],
        },
        {
          type: "callout",
          variant: "note",
          title: "Não é uma receita rígida",
          text: "É uma sequência de perguntas. Se o seu público já conhece o problema (mercado maduro), você pode encurtar as seções 3 e 4 e ir direto para comparativo e prova. O que não muda é a lógica: nunca peça a ação antes de ter respondido a pergunta pendente.",
        },
        {
          type: "h",
          text: "Fluxo do usuário: a página não começa na página",
        },
        {
          type: "p",
          text: "O visitante chega de algum lugar, e esse lugar define o que ele já sabe. Desenhar o fluxo é mapear as entradas e garantir continuidade entre a promessa que trouxe a pessoa e a primeira tela que ela vê.",
        },
        {
          type: "code",
          lang: "texto",
          caption: "Fluxo principal — Giz Pay",
          code: `Anúncio / indicação / busca por "sistema de cobrança escolar"
        │
        ▼
   HOME (hero)  ── rola ──►  problema ──►  como funciona
        │                                        │
        │  clica "Calcular economia"             │
        ▼                                        ▼
   CALCULADORA  ◄────────── continua rolando ────┘
        │  vê o valor anual em reais
        ▼
   FORMULÁRIO (5 campos)
        │
        ▼
   Tela de confirmação + WhatsApp + e-mail automático
        │
        ▼
   Reunião de 30 min agendada  ← esta é a métrica`,
        },
        {
          type: "p",
          text: "Duas observações importantes desse desenho. Primeira: a calculadora é um **atalho** disponível já no hero, porque parte do público chega com a dúvida “quanto custa” e ignorar isso gera abandono. Segunda: o fluxo não termina no envio do formulário — a tela de confirmação faz parte da experiência e é onde a maioria dos sites simplesmente mostra “obrigado” e desperdiça o momento de maior interesse do lead.",
        },
        {
          type: "h",
          text: "Rótulos: escreva como o usuário fala",
        },
        {
          type: "compare",
          badTitle: "Rótulos internos da empresa",
          bad: [
            "“Soluções”",
            "“Ecossistema”",
            "“Nossa metodologia”",
            "“Institucional”",
            "“Saiba mais”",
          ],
          goodTitle: "Rótulos que o visitante procura",
          good: [
            "“Como funciona”",
            "“Preço”",
            "“Segurança e LGPD”",
            "“Para escolas de 200 a 1.000 alunos”",
            "“Calcular a economia da minha escola”",
          ],
        },
        {
          type: "p",
          text: "Repare no último par: “Saiba mais” não diz o que vai acontecer depois do clique. Um bom rótulo de botão completa a frase **“eu quero…”**. “Eu quero saber mais” é fraco; “eu quero calcular a economia da minha escola” é uma intenção real.",
        },
        {
          type: "demo",
          id: "anatomia",
          title: "Anatomia interativa de uma landing",
          text: "Percorra a estrutura seção por seção e veja qual pergunta cada bloco responde. Clique em uma seção para abrir o detalhe.",
        },
        {
          type: "exercise",
          title: "Exercício 1.3 — Estruture a sua página",
          items: [
            "Liste as seções da sua página, em ordem, sem se preocupar com design.",
            "Ao lado de cada uma, escreva a pergunta do visitante que ela responde.",
            "Elimine qualquer seção que não responda a nenhuma pergunta.",
            "Desenhe o fluxo de entrada: de onde a pessoa vem e o que ela já sabe ao chegar.",
          ],
        },
      ],
      takeaways: [
        "A ordem das seções é a ordem dos seus argumentos, não uma questão de gosto.",
        "Cada seção responde à pergunta criada pela anterior — é uma escada.",
        "O fluxo começa antes da página e termina depois do envio do formulário.",
        "Rótulos de botão devem completar a frase “eu quero…”.",
      ],
    },
    {
      slug: "leis-de-ux",
      number: "1.4",
      title: "Leis de UX que decidem a conversão",
      subtitle:
        "Seis princípios de comportamento humano com aplicação direta e imediata em uma página de vendas.",
      minutes: 11,
      goals: [
        "Conhecer os princípios que mais impactam decisões de layout",
        "Aplicar cada um a um problema concreto de página",
        "Parar de tratar essas leis como curiosidade e usá-las como critério de revisão",
      ],
      blocks: [
        {
          type: "p",
          text: "Existem dezenas de “leis de UX” circulando por aí. Na prática de uma landing page, seis explicam quase todos os problemas que você vai encontrar. Trate esta aula como uma **checklist de revisão**: quando uma tela parecer errada e você não souber dizer por quê, passe por esta lista.",
        },
        {
          type: "cards",
          items: [
            {
              tag: "Lei de Jakob",
              title: "As pessoas passam a maior parte do tempo em outros sites",
              text: "Elas esperam que o seu funcione como os outros: logo no topo à esquerda, menu à direita, carrinho no canto, link do rodapé com contato. Inovação em navegação custa caro e raramente compensa. Seja original no conteúdo e na personalidade visual; seja convencional na mecânica.",
            },
            {
              tag: "Lei de Hick",
              title: "Quanto mais opções, mais lenta a decisão",
              text: "Um hero com cinco botões não oferece liberdade, oferece paralisia. Ofereça uma ação primária e, no máximo, uma secundária. O mesmo vale para menus com 9 itens e planos de preço com 6 colunas.",
            },
            {
              tag: "Lei de Fitts",
              title: "Alvo grande e perto é mais fácil de acertar",
              text: "Botões pequenos ou colados na borda no mobile geram erro e frustração. Use no mínimo 44×44 px de área tocável e coloque a ação principal onde o polegar alcança — a metade inferior da tela no celular.",
            },
            {
              tag: "Miller / Chunking",
              title: "A memória de trabalho é curta",
              text: "Agrupe informação em blocos de 3 a 5 itens. Uma lista de 12 recursos vira uma parede; os mesmos 12 divididos em três grupos de quatro, com título, viram algo memorizável.",
            },
            {
              tag: "Von Restorff",
              title: "O item diferente é o item lembrado",
              text: "Se tudo na página é destaque, nada é destaque. Reserve a cor de maior contraste exclusivamente para a ação primária. Um botão secundário com a mesma cor do primário mata os dois.",
            },
            {
              tag: "Efeito Zeigarnik",
              title: "Tarefa começada pede para ser terminada",
              text: "Uma barra de progresso em um formulário de várias etapas, ou uma calculadora já preenchida com valores razoáveis, cria envolvimento. Começar por a pessoa aumenta muito a chance de ela terminar.",
            },
          ],
        },
        {
          type: "h",
          text: "Aplicando: o hero da Giz Pay",
        },
        {
          type: "p",
          text: "O site atual da Giz Pay traz dois botões no hero: “Agendar demonstração” e “Calcular economia da minha escola”. Isso está **certo** — é exatamente uma ação primária e uma secundária, respeitando Hick. O ajuste necessário é de Von Restorff: os dois precisam ser visualmente diferentes, um sólido com a cor de marca e outro apenas com contorno. Se ambos tiverem o mesmo peso, o visitante hesita e a hesitação custa cliques.",
        },
        {
          type: "compare",
          badTitle: "Hero que dispersa",
          bad: [
            "Quatro botões com pesos visuais parecidos",
            "Menu com 9 itens e um segundo menu no topo",
            "Três frases longas concorrendo pelo mesmo espaço",
            "Ilustração abstrata que não mostra o produto",
          ],
          goodTitle: "Hero que direciona",
          good: [
            "Um botão sólido, um contornado, e mais nada",
            "Menu com 4 a 6 itens, âncoras para as seções da página",
            "Título curto, apoio de uma linha, microcópia de segurança",
            "Uma tela real do painel, com números legíveis",
          ],
        },
        {
          type: "h",
          text: "A regra dos 5 segundos",
        },
        {
          type: "p",
          text: "É o teste mais barato e mais brutal que existe. Mostre o topo da sua página para alguém que não conhece o projeto, conte cinco segundos, esconda a tela e pergunte três coisas:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "O que essa empresa faz?",
            "Para quem isso serve?",
            "Qual era a ação principal que a página queria que você fizesse?",
          ],
        },
        {
          type: "callout",
          variant: "warn",
          title: "Se a pessoa errar qualquer uma das três",
          text: "O problema não é design, é conteúdo. Não mexa em cor nem em espaçamento: reescreva o título, troque a imagem por uma que mostre o produto, e reduza o número de elementos concorrentes.",
        },
        {
          type: "demo",
          id: "hierarquia",
          title: "Von Restorff na prática",
          text: "Alterne entre a versão em que tudo grita e a versão com um único destaque. Repare para onde o seu olho vai primeiro em cada caso.",
        },
        {
          type: "exercise",
          title: "Exercício 1.4 — Auditoria em seis linhas",
          text: "Pegue qualquer página que você admira e uma que você acha ruim. Para cada uma, escreva uma linha por lei:",
          items: [
            "Jakob: a navegação é previsível ou tenta ser criativa?",
            "Hick: quantas ações concorrem na primeira tela?",
            "Fitts: os alvos são grandes o suficiente no celular?",
            "Miller: a informação está agrupada em blocos de 3 a 5?",
            "Von Restorff: existe um único destaque visual claro?",
            "Zeigarnik: existe algo já começado que convide a terminar?",
          ],
        },
      ],
      takeaways: [
        "Seja convencional na mecânica e original no conteúdo (Jakob).",
        "Uma ação primária, uma secundária, ponto (Hick + Von Restorff).",
        "Alvos de toque com no mínimo 44×44 px (Fitts).",
        "Agrupe em blocos de 3 a 5 e comece a tarefa pelo usuário (Miller + Zeigarnik).",
      ],
    },
  ],
};
