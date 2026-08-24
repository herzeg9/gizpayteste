import type { Track } from "./types";

export const track5: Track = {
  id: "projeto-gizpay",
  number: "05",
  title: "Projeto: repaginar a Giz Pay",
  tagline: "Do diagnóstico ao site no ar",
  description:
    "O trabalho real, do zero. Diagnóstico do site atual, briefing, nova arquitetura, design system, copy seção por seção, construção no Framer e checklist de lançamento.",
  lessons: [
    {
      slug: "diagnostico-do-site-atual",
      number: "5.1",
      title: "Diagnóstico do site atual",
      subtitle:
        "Antes de refazer, entender. O que o gizpay.com.br já acerta, o que trava a conversão e o que precisa ser reconstruído.",
      minutes: 14,
      goals: [
        "Fazer uma auditoria heurística estruturada",
        "Separar o que preservar do que refazer",
        "Priorizar problemas por impacto na conversão",
      ],
      blocks: [
        {
          type: "callout",
          variant: "key",
          title: "Regra número um de redesign",
          text: "Nunca jogue fora o que está funcionando. Um redesign que ignora o site atual costuma reintroduzir problemas que já tinham sido resolvidos — e destruir conteúdo que levou meses para ser afinado.",
        },
        {
          type: "h",
          text: "O que o site atual já acerta",
        },
        {
          type: "list",
          items: [
            "**A mensagem central é forte.** “O dinheiro da sua escola, no controle de quem ensina” tem antagonista, tem benefício e passa no teste do concorrente da aula 1.2.",
            "**O inimigo está nomeado.** A seção do problema ataca o intermediário com quatro dores concretas. Isso é raro e é exatamente o que a Trilha 01 prega.",
            "**Já existe interatividade.** A calculadora de economia é o ativo mais valioso da página inteira.",
            "**As objeções foram mapeadas.** Implantação, sistema acadêmico, LGPD, modelo de cobrança — todas têm resposta.",
            "**A escolha tipográfica é adequada.** Fraunces nos títulos dá o tom editorial e institucional que o setor educacional pede.",
            "**Existe uma tela de produto.** O mockup do painel evita o erro da ilustração abstrata.",
          ],
        },
        {
          type: "p",
          text: "Isso significa que o trabalho não é reescrever a estratégia: é **executar melhor uma estratégia que já está certa**. É uma posição confortável, e você deve dizer isso ao cliente logo na primeira reunião.",
        },
        {
          type: "h",
          text: "Auditoria heurística",
        },
        {
          type: "table",
          caption: "Diagnóstico por dimensão · nota de 1 a 5",
          head: ["Dimensão", "Nota", "Observação"],
          rows: [
            [
              "Clareza da proposta de valor",
              "5",
              "Passa no teste dos 5 segundos. Manter praticamente intacta.",
            ],
            [
              "Prova e credibilidade",
              "2",
              "Métricas do hero (0%, −80%, <3s) não têm origem declarada. Nenhum nome de escola real, nenhum depoimento, nenhum logo. Este é o maior buraco da página.",
            ],
            [
              "Interatividade",
              "3",
              "A calculadora existe e é boa, mas está enterrada na metade inferior. Fora dela, a página é estática: o painel do hero é uma imagem parada.",
            ],
            [
              "Hierarquia visual",
              "3",
              "Muitas seções com o mesmo peso e a mesma densidade. A rolagem fica monótona e não há um clímax claro.",
            ],
            [
              "Conversão",
              "3",
              "Um único formulário, no fim da página. Não há CTA fixo no mobile, nem ponto de conversão intermediário.",
            ],
            [
              "Fundação técnica",
              "2",
              "Página única com Tailwind via CDN, sem sistema de componentes. Funciona, mas cada alteração é manual e arriscada. É o argumento técnico para reconstruir no Framer.",
            ],
            [
              "Mobile",
              "3",
              "Responsivo, mas a tabela comparativa e o mockup do painel sofrem em telas estreitas.",
            ],
            [
              "SEO e metadados",
              "4",
              "Title, description, keywords e Open Graph presentes. Falta dado estruturado de FAQ e a imagem social é o favicon esticado.",
            ],
          ],
        },
        {
          type: "h",
          text: "Os cinco problemas que mais custam clientes",
        },
        {
          type: "cards",
          items: [
            {
              tag: "P1",
              title: "Prova social inexistente",
              text: "A página inteira é a Giz Pay falando bem da Giz Pay. Para uma diretora que vai confiar o fluxo de caixa da escola a um fornecedor, isso é o bloqueio decisivo. Nenhum outro ajuste importa mais do que este.",
            },
            {
              tag: "P2",
              title: "Números sem lastro",
              text: "“−80% no custo” e “0% de repasse retido” são afirmações fortes sem nota de rodapé, sem base de cálculo e sem fonte. Números não verificáveis produzem o efeito oposto: desconfiança.",
            },
            {
              tag: "P3",
              title: "A calculadora está no lugar errado",
              text: "É o momento mais convincente da página e exige rolar por sete seções para chegar nele. Ela deveria estar acessível já no hero e reaparecer perto do formulário.",
            },
            {
              tag: "P4",
              title: "Página passiva",
              text: "Fora da calculadora, não há nada para fazer. O painel do produto é uma imagem estática, quando poderia demonstrar sozinho o Pix caindo e a inadimplência atualizando.",
            },
            {
              tag: "P5",
              title: "Um único ponto de conversão",
              text: "Quem se convenceu na seção do problema precisa rolar até o fim para agir. CTA fixo no mobile e pontos de conversão intermediários resolvem isso.",
            },
          ],
        },
        {
          type: "callout",
          variant: "warn",
          title: "Sobre o P2, um alerta profissional",
          text: "Antes de repetir qualquer número no site novo, exija do cliente a base de cálculo. Se “−80%” não puder ser demonstrado, ou você declara a premissa (“comparado a uma taxa de 3,5% em uma escola de 450 alunos”) ou remove o número. Afirmação numérica sem lastro é risco jurídico e destrói confiança quando o lead questiona na reunião.",
        },
        {
          type: "h",
          text: "Matriz de decisão",
        },
        {
          type: "table",
          head: ["Item", "Decisão", "Por quê"],
          rows: [
            ["Mensagem do hero", "Preservar", "Já é excelente"],
            ["Seção do problema", "Preservar, adicionar número", "O argumento está certo, falta lastro"],
            ["Como funciona (4 passos)", "Preservar, tornar interativo", "Boa estrutura, execução estática"],
            ["Grade de módulos", "Reduzir de 6 para 4 + “ver todos”", "Lei de Hick: seis cards de peso igual diluem a atenção"],
            ["Comparativo em modal", "Trazer para a página", "É um dos argumentos mais fortes e está escondido atrás de um clique"],
            ["Calculadora", "Reconstruir e promover", "Melhor ativo da página, na pior posição"],
            ["Prova social", "Criar do zero", "Não existe hoje"],
            ["Portal do responsável", "Preservar, animar", "Bom argumento de redução de trabalho da secretaria"],
            ["FAQ", "Preservar", "Bem escrito e bem posicionado"],
            ["Formulário", "Reconstruir", "Adicionar validação, confirmação útil e CTA fixo no mobile"],
            ["Base técnica", "Reconstruir no Framer", "Componentes, CMS e publicação sem depender de código"],
          ],
        },
        {
          type: "exercise",
          title: "Exercício 5.1 — Faça a sua auditoria",
          text: "Abra gizpay.com.br em uma janela e refaça o diagnóstico com os seus olhos:",
          items: [
            "Aplique o teste dos 5 segundos com alguém que não conhece o projeto.",
            "Navegue a página inteira só pelo teclado e anote o que não é alcançável.",
            "Rode o PageSpeed Insights no relatório mobile e anote LCP, INP e CLS.",
            "Liste toda afirmação numérica da página e marque quais têm origem declarada.",
            "Monte a sua matriz: preservar / ajustar / reconstruir.",
          ],
        },
      ],
      takeaways: [
        "O site atual acerta a mensagem e erra a prova — o trabalho é de execução, não de estratégia.",
        "Prova social ausente é o problema número um para venda consultiva.",
        "Número sem base de cálculo gera desconfiança, não credibilidade.",
        "Toda auditoria termina em matriz: preservar, ajustar, reconstruir.",
      ],
    },
    {
      slug: "briefing-e-metrica",
      number: "5.2",
      title: "Briefing, objetivo e métrica",
      subtitle:
        "O documento de uma página que alinha expectativa, define sucesso e protege você de mudanças infinitas de escopo.",
      minutes: 10,
      goals: [
        "Escrever um briefing objetivo e aprovável",
        "Definir métrica primária e métricas de apoio",
        "Fechar escopo de forma explícita",
      ],
      blocks: [
        {
          type: "p",
          text: "Briefing não é burocracia: é o instrumento que transforma “o site precisa ser mais moderno” em algo que pode ser feito e verificado. Um bom briefing cabe em uma página e é aprovado antes de qualquer tela.",
        },
        {
          type: "code",
          lang: "briefing",
          caption: "Briefing — Giz Pay 2.0",
          code: `PROJETO
Repaginamento completo do site gizpay.com.br, construído no Framer.

CONTEXTO
Plataforma financeira para escolas: cobrança automática de mensalidade
por Pix, boleto e cartão, com liquidação direto no CNPJ da escola.
Venda consultiva, ticket recorrente, ciclo de decisão de semanas.

PÚBLICO
Primário   — diretor(a) / mantenedor(a) de escola de 150 a 1.500 alunos.
Influência — secretaria e tesouraria, que sofrem a dor operacional.
Contexto   — muitos chegam por link de WhatsApp, no celular.

OBJETIVO
Aumentar o volume e a qualidade de demonstrações agendadas.

MÉTRICA PRIMÁRIA
Formulários de demonstração enviados por escolas dentro do perfil.

MÉTRICAS DE APOIO
· Taxa de rolagem além de 25% da página
· Interações com a calculadora de economia
· Taxa de início → envio do formulário
· Cliques no WhatsApp comercial

MENSAGEM CENTRAL
O dinheiro da escola cai na conta da escola, no mesmo dia,
e a cobrança acontece sozinha.

TOM
Institucional e confiável, sem ser corporativo genérico.
Direto sobre dinheiro. Respeitoso com a família que paga.

ESCOPO
Incluído  — home completa, página de segurança/LGPD, página de
            comparativo, formulário, SEO, publicação e medição.
Excluído  — blog, área logada, integrações com sistemas acadêmicos,
            produção de vídeo.

RESTRIÇÕES
· Manter a identidade tipográfica atual (Fraunces + Inter).
· Nenhum número novo entra sem base de cálculo declarada.
· Carregamento mobile abaixo de 2,5s de LCP.

CRITÉRIO DE SUCESSO
Passar no teste dos 5 segundos com três pessoas de fora,
e registrar aumento mensurável de envios em 30 dias.`,
        },
        {
          type: "callout",
          variant: "key",
          title: "A seção “Excluído” é a mais importante",
          text: "Escopo não fecha por otimismo, fecha por escrito. Listar o que **não** está incluído evita a conversa mais desgastante de qualquer projeto: aquela em que o cliente presume que o blog e o vídeo institucional estavam combinados desde o começo.",
        },
        {
          type: "h",
          text: "Escolher a métrica primária",
        },
        {
          type: "p",
          text: "Um erro comum é escolher tráfego como métrica. Tráfego é volume, não resultado — dobrar visitas com a mesma taxa de conversão ruim não muda nada no faturamento. Escolha a métrica mais próxima possível da receita que ainda esteja sob o controle do site.",
        },
        {
          type: "table",
          head: ["Métrica", "Sob controle do site?", "Serve como primária?"],
          rows: [
            ["Visitas", "Não — depende de mídia e SEO", "Não. É métrica de canal."],
            ["Tempo na página", "Parcialmente", "Não. Pode subir por confusão."],
            ["Uso da calculadora", "Sim", "Apoio. Ótimo sinal de engajamento."],
            ["Formulários enviados", "Sim", "**Sim.** É a métrica primária."],
            ["Contratos fechados", "Não — depende do time comercial", "Não. É métrica de negócio."],
          ],
        },
        {
          type: "h",
          text: "Perguntas para a reunião de briefing",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Quantas demonstrações vocês agendam por mês hoje, e quantas gostariam?",
            "Qual é a objeção que mais aparece na primeira conversa?",
            "Qual escola cliente aceitaria dar um depoimento com nome e número?",
            "De onde vem o tráfego hoje: busca, indicação, anúncio, prospecção ativa?",
            "Que porcentagem dos acessos vem de celular?",
            "Qual é a base de cálculo dos números que estão no site atual?",
            "O que um concorrente faz melhor que vocês, na opinião de vocês?",
            "Existe algum caso de sucesso com número antes e depois?",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "A pergunta que mais rende",
          text: "“Me conta a última vez em que uma escola disse não. O que ela falou?” A objeção real, com as palavras reais, é a matéria-prima do texto do site. Vale mais que qualquer pesquisa de mercado.",
        },
        {
          type: "exercise",
          title: "Exercício 5.2 — Seu briefing",
          items: [
            "Preencha o modelo acima com o seu projeto, sem pular a seção Excluído.",
            "Escolha uma métrica primária que esteja sob controle do site.",
            "Defina três métricas de apoio e como cada uma será medida.",
            "Envie para aprovação por escrito antes de abrir a ferramenta de design.",
          ],
        },
      ],
      takeaways: [
        "Briefing cabe em uma página e é aprovado antes de qualquer tela.",
        "A seção “Excluído” é a que protege o projeto.",
        "Métrica primária: a mais próxima da receita que ainda esteja sob controle do site.",
        "A objeção real, nas palavras do cliente, é a matéria-prima do texto.",
      ],
    },
    {
      slug: "nova-arquitetura-e-wireframe",
      number: "5.3",
      title: "Nova arquitetura e wireframe",
      subtitle:
        "A estrutura da home nova, seção por seção, com a pergunta que cada bloco responde e o wireframe em baixa fidelidade.",
      minutes: 15,
      goals: [
        "Definir a ordem das seções com base na escada de argumentos",
        "Desenhar um wireframe que resolve layout sem cor",
        "Distribuir os pontos de conversão pela página",
      ],
      blocks: [
        {
          type: "p",
          text: "Com o diagnóstico e o briefing na mão, esta é a etapa em que o site novo nasce de fato — e ainda sem uma única decisão de cor ou fonte. Wireframe existe para resolver **o que vai onde** enquanto mudar ainda é barato.",
        },
        {
          type: "h",
          text: "A estrutura da nova home",
        },
        {
          type: "table",
          caption: "13 blocos, cada um com um trabalho",
          head: ["#", "Seção", "Pergunta que responde", "Mudança vs. hoje"],
          rows: [
            ["01", "Barra fixa", "Onde estou e como falo com vocês", "CTA sempre visível; no mobile vira barra inferior fixa"],
            ["02", "Hero + painel vivo", "O que é e para quem", "Painel deixa de ser imagem e passa a demonstrar o Pix caindo"],
            ["03", "Faixa de prova", "Posso confiar?", "Logos e números **com base declarada**"],
            ["04", "O problema", "Isso acontece comigo?", "Preservado, com o custo do intermediário em reais"],
            ["05", "Como funciona", "É complicado?", "Quatro passos viram uma linha do tempo navegável"],
            ["06", "Calculadora", "Quanto isso me custa hoje?", "**Promovida** para o meio da página, com atalho no hero"],
            ["07", "Depoimento", "Quem já usa?", "Novo. Escola real, com nome, cargo e número"],
            ["08", "Comparativo", "É melhor que o que eu uso?", "Sai do modal e entra na página"],
            ["09", "Módulos", "O que exatamente eu recebo?", "Reduzido a quatro em destaque + link para todos"],
            ["10", "Portal do responsável", "E a família, como fica?", "Preservado, com a tela animando"],
            ["11", "Segurança e LGPD", "É seguro?", "Preservado, resumido na home"],
            ["12", "FAQ", "E aquela dúvida específica?", "Preservado, com dado estruturado para o Google"],
            ["13", "Conversão", "Como eu começo?", "Formulário de 5 campos + confirmação que diz o que vem depois"],
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "A decisão estrutural mais importante",
          text: "Mover a calculadora para o meio da página, logo depois de “Como funciona”. A sequência passa a ser: você tem este problema → resolvemos assim → **veja quanto isso custa a você hoje** → e olha quem já resolveu. O depoimento chega exatamente no pico de interesse.",
        },
        {
          type: "h",
          text: "Wireframe da home",
        },
        {
          type: "code",
          lang: "wireframe",
          caption: "Desktop · baixa fidelidade",
          code: `┌──────────────────────────────────────────────────────────┐
│ [logo]      Como funciona  Preço  Segurança   [Agendar]  │  fixa
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ▸ PLATAFORMA FINANCEIRA PARA ESCOLAS                    │
│                                    ┌───────────────────┐ │
│  O dinheiro da sua escola,         │  PAINEL AO VIVO   │ │
│  no controle de quem ensina.       │  Recebido no mês  │ │
│                                    │  R$ 428.910,50 ▲  │ │
│  Cobrança automática e liquidação  │                   │ │
│  direto na conta da escola.        │  ● Pix · 09:41    │ │
│                                    │  ● Boleto ·  ✓    │ │
│  [ Agendar demonstração ]          │  ● Atraso · 4d    │ │
│  [ Calcular economia   ]           └───────────────────┘ │
│  ✓ Implantação inclusa · suporte por WhatsApp            │
├──────────────────────────────────────────────────────────┤
│  ESCOLAS QUE JÁ USAM   [logo] [logo] [logo] [logo]       │
│  R$ 12,4 mi processados · 38 escolas · 4,2% inadimplência│
├──────────────────────────────────────────────────────────┤
│  O PROBLEMA                                              │
│  Sua escola trabalha o mês inteiro. Quem lucra é o       │
│  intermediário.                                          │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐            │
│  │ atraso │ │  taxa  │ │ manual │ │  cego  │            │
│  └────────┘ └────────┘ └────────┘ └────────┘            │
├──────────────────────────────────────────────────────────┤
│  COMO FUNCIONA        [1]──[2]──[3]──[4]   ← navegável   │
│  ┌──────────────────────────────────────────────────┐    │
│  │  texto do passo  │  ilustração do passo          │    │
│  └──────────────────────────────────────────────────┘    │
├──────────────────────────────────────────────────────────┤
│  ██████  CALCULADORA — fundo invertido, seção-clímax     │
│  Alunos ativos     ───────●────────  450                 │
│  Mensalidade média ──────●─────────  R$ 950              │
│  Taxa atual        ────●───────────  3,5%                │
│                                                          │
│         R$ 179.550  ← número grande, animado             │
│         é o que o intermediário leva por ano             │
│         [ Quero ver isso na minha escola ]               │
├──────────────────────────────────────────────────────────┤
│  “ Depoimento em uma frase forte. ”                      │
│    Nome · cargo · Colégio X · 620 alunos                 │
│    Inadimplência de 11% → 4%  em 6 meses                 │
├──────────────────────────────────────────────────────────┤
│  COMPARATIVO   ┌─────────┬──────────┬─────────────┐      │
│                │ critério│ Giz Pay  │ intermediário│     │
│                └─────────┴──────────┴─────────────┘      │
├──────────────────────────────────────────────────────────┤
│  MÓDULOS   [4 cards]        → ver todos os módulos       │
├──────────────────────────────────────────────────────────┤
│  PORTAL DO RESPONSÁVEL   texto  │  celular animado       │
├──────────────────────────────────────────────────────────┤
│  SEGURANÇA   4 selos            → detalhes de LGPD       │
├──────────────────────────────────────────────────────────┤
│  FAQ   accordion de 6 itens                              │
├──────────────────────────────────────────────────────────┤
│  ┌────────────────────┬───────────────────────────┐      │
│  │ Veja o painel com  │  Nome                     │      │
│  │ os números da sua  │  Escola                   │      │
│  │ escola.            │  E-mail                   │      │
│  │ 30 min, sem        │  WhatsApp                 │      │
│  │ compromisso.       │  Alunos ▾                 │      │
│  │ [WhatsApp]         │  [ Agendar demonstração ] │      │
│  └────────────────────┴───────────────────────────┘      │
└──────────────────────────────────────────────────────────┘`,
        },
        {
          type: "h",
          text: "Wireframe mobile: o que muda",
        },
        {
          type: "list",
          items: [
            "**Barra inferior fixa** com “Agendar” e ícone do WhatsApp, sempre acessível ao polegar (Lei de Fitts).",
            "**Hero empilhado**: título, apoio, botões e só então o painel — o painel não pode empurrar o CTA para fora da tela.",
            "**Sliders da calculadora** com área de toque de 44px e o resultado fixo acima enquanto se arrasta.",
            "**Comparativo** vira cards empilhados, um critério por card, em vez de tabela com rolagem lateral.",
            "**Formulário** com campos de largura total e teclado correto: `email` para e-mail e `tel` para WhatsApp.",
          ],
        },
        {
          type: "callout",
          variant: "tip",
          title: "Wireframe em texto é wireframe legítimo",
          text: "O bloco acima foi desenhado com caracteres e resolve exatamente o que precisa resolver nesta fase: ordem, proporção e conteúdo. Não perca tempo com wireframe bonito — ele existe para ser jogado fora.",
        },
        {
          type: "h",
          text: "Distribuição dos pontos de conversão",
        },
        {
          type: "table",
          head: ["Posição", "Ação", "Estado mental do visitante"],
          rows: [
            ["Barra fixa", "Agendar demonstração", "Pronto para agir a qualquer momento"],
            ["Hero", "Agendar (primário) + Calcular (secundário)", "Curioso, avaliando se serve para ele"],
            ["Fim da calculadora", "Quero ver isso na minha escola", "Acabou de ver o próprio prejuízo em reais — pico"],
            ["Fim do comparativo", "Ver comparativo completo", "Comparando alternativas"],
            ["Seção final", "Formulário completo", "Decidido, quer o próximo passo"],
            ["Barra inferior (mobile)", "Agendar + WhatsApp", "Qualquer momento, com o polegar"],
          ],
        },
        {
          type: "demo",
          id: "anatomia",
          title: "Percorra a nova estrutura",
          text: "Cada bloco da nova home com a pergunta que ele responde. Clique para ver o detalhe.",
        },
        {
          type: "exercise",
          title: "Exercício 5.3 — Seu wireframe",
          items: [
            "Liste as seções da sua página em ordem, com a pergunta que cada uma responde.",
            "Desenhe o wireframe em papel ou em blocos cinzas — sem cor, sem fonte definitiva.",
            "Marque onde ficam os pontos de conversão e qual é o estado mental em cada um.",
            "Refaça o wireframe para 390px de largura e veja o que precisa ser cortado.",
          ],
        },
      ],
      takeaways: [
        "Treze blocos, cada um respondendo a uma pergunta específica.",
        "A calculadora sobe para o meio da página; o depoimento vem logo depois dela.",
        "Wireframe resolve ordem e proporção enquanto mudar ainda é barato.",
        "Pontos de conversão distribuídos por estado mental, não espalhados ao acaso.",
      ],
    },
    {
      slug: "design-system-gizpay",
      number: "5.4",
      title: "Design system Giz Pay 2.0",
      subtitle:
        "Os tokens e componentes do projeto, prontos para virar Color Styles e Text Styles no Framer.",
      minutes: 13,
      goals: [
        "Definir a paleta com papéis semânticos e contraste verificado",
        "Fechar a escala tipográfica e de espaçamento",
        "Especificar os componentes que constroem a página inteira",
      ],
      blocks: [
        {
          type: "p",
          text: "Esta é a aula que você vai transcrever para dentro do Framer antes de desenhar qualquer coisa. Trinta minutos aqui economizam dias depois.",
        },
        {
          type: "h",
          text: "Paleta",
        },
        {
          type: "code",
          lang: "tokens",
          caption: "Color Styles — Giz Pay 2.0",
          code: `/* Superfícies escuras (hero, calculadora, rodapé) */
--bg-deep       #07211B   verde quase preto — herdado da marca atual
--bg-surface    #0E2F27   cards sobre fundo escuro
--bg-raised     #143B31   estados de hover e superfície elevada

/* Superfícies claras (miolo da página) */
--bg-light      #F6F8F5   off-white levemente quente
--bg-light-alt  #EAEFE9   faixas alternadas, cria ritmo

/* Texto */
--fg-on-dark    #F2F7F3   texto principal no escuro
--fg-on-light   #0B1F1A   texto principal no claro
--muted-dark    #9CB0A8   secundário no escuro
--muted-light   #5A6B64   secundário no claro

/* Ação e destaque */
--primary       #4ADE80   verde-limão: botão primário e números
--primary-press #35C46B   estado pressionado
--amber         #F0B429   apenas alerta e status "atrasado"
--danger        #E5484D   apenas erro de formulário

/* Estrutura */
--border-dark   rgba(242,247,243,0.12)
--border-light  rgba(11,31,26,0.10)`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Contraste verificado, não presumido",
          text: "`--primary` sobre `--bg-deep` dá cerca de 8,9:1 — excelente. Mas `--primary` com **texto branco** por cima dá menos de 2:1 e é ilegível. Por isso o botão primário leva texto escuro (`--fg-on-light`), não branco. Verifique cada par antes de aprovar a paleta.",
        },
        {
          type: "h",
          text: "Tipografia",
        },
        {
          type: "table",
          caption: "Text Styles — Fraunces nos títulos, Inter no texto, JetBrains Mono nos números",
          head: ["Estilo", "Fonte", "Tamanho", "Peso", "Entrelinha"],
          rows: [
            ["Display", "Fraunces", "clamp(38px, 6vw, 76px)", "600", "1,05"],
            ["H2", "Fraunces", "clamp(28px, 3.6vw, 44px)", "600", "1,15"],
            ["H3", "Inter", "20px", "600", "1,3"],
            ["Corpo grande", "Inter", "19px", "400", "1,6"],
            ["Corpo", "Inter", "16px", "400", "1,6"],
            ["Apoio", "Inter", "14px", "400", "1,5"],
            ["Overline", "Inter", "12px · maiúsculas · +0,10em", "600", "1,2"],
            ["Número", "JetBrains Mono", "clamp(36px, 5vw, 64px)", "500 · tabular", "1,0"],
          ],
        },
        {
          type: "p",
          text: "A escolha de monoespaçada para os números não é estética: em uma calculadora que atualiza ao arrastar, dígitos de largura variável fazem o valor “tremer”. Com `tabular-nums`, o número muda sem sacudir o layout.",
        },
        {
          type: "h",
          text: "Espaçamento, forma e movimento",
        },
        {
          type: "code",
          lang: "tokens",
          caption: "O restante do sistema",
          code: `/* Espaçamento — escala de 8pt */
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128

Padding de seção   96 (desktop) · 64 (mobile)
Padding lateral    24 (desktop) · 20 (mobile)
Gap entre cards    24 (desktop) · 16 (mobile)
Container máximo   1200px

/* Forma */
--radius-sm   8px    campos e badges
--radius      14px   cards e botões
--radius-lg   24px   painéis grandes e mockups

/* Movimento */
--duration-fast   140ms   hover e press
--duration        220ms   transições de estado
--duration-slow   520ms   entrada de seção
--ease            cubic-bezier(0.22, 1, 0.36, 1)`,
        },
        {
          type: "h",
          text: "Componentes do projeto",
        },
        {
          type: "table",
          head: ["Componente", "Variantes", "Propriedades", "Onde aparece"],
          rows: [
            ["Botão", "Primário · Secundário · Fantasma", "Texto, link, tamanho", "Toda a página"],
            ["Cabeçalho de seção", "Escuro · Claro", "Overline, título, subtítulo", "12 seções"],
            ["Card de dor", "—", "Ícone, título, texto", "Seção do problema"],
            ["Passo", "Ativo · Inativo", "Número, título, texto, imagem", "Como funciona"],
            ["Card de módulo", "Padrão · Destaque", "Sigla, título, descrição", "Módulos"],
            ["Métrica", "Positiva · Neutra · Negativa", "Valor, rótulo, variação", "Faixa de prova, painel"],
            ["Linha comparativa", "Padrão · Vitória", "Critério, nós, eles", "Comparativo"],
            ["Item de FAQ", "Fechado · Aberto", "Pergunta, resposta", "FAQ"],
            ["Campo de formulário", "Padrão · Erro · Foco", "Label, tipo, ajuda", "Formulário"],
            ["Depoimento", "—", "Frase, nome, cargo, escola, resultado", "Prova social"],
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "Dez componentes constroem a página inteira",
          text: "Depois de criar esses dez, montar a home é encaixar peças. É por isso que uma pessoa experiente entrega em um ritmo que parece impossível: ela não está desenhando 13 seções, está instanciando 10 componentes.",
        },
        {
          type: "h",
          text: "Regras de uso — escreva e siga",
        },
        {
          type: "list",
          items: [
            "**Um botão primário por tela visível.** O segundo vira secundário, sempre.",
            "**`--primary` nunca é fundo de área grande.** Ele é ação e número, não decoração.",
            "**Âmbar só significa atenção.** Não use como cor de destaque bonita.",
            "**Todo texto: Width Fill, Height Fit.** Sem exceção.",
            "**Alternância de fundo** entre claro e escuro define o ritmo da página — escuro no hero, na calculadora e no rodapé; claro no meio.",
            "**Nenhuma sombra em fundo escuro.** Profundidade vem de superfície mais clara.",
          ],
        },
        {
          type: "demo",
          id: "contraste",
          title: "Teste a paleta",
          text: "Cole os valores da paleta acima e confirme as combinações que você pretende usar.",
        },
        {
          type: "exercise",
          title: "Exercício 5.4 — Transcreva para o Framer",
          items: [
            "Crie todos os Color Styles com os nomes semânticos acima.",
            "Crie os oito Text Styles com fonte, tamanho, peso e entrelinha.",
            "Verifique no medidor de contraste todos os pares texto/fundo que você vai usar.",
            "Construa os componentes Botão e Cabeçalho de seção antes de qualquer tela.",
          ],
        },
      ],
      takeaways: [
        "Paleta com papéis semânticos e contraste verificado par a par.",
        "Botão primário com texto escuro — verde-limão com branco é ilegível.",
        "Números em monoespaçada tabular para não tremerem ao animar.",
        "Dez componentes constroem as treze seções.",
      ],
    },
    {
      slug: "copy-que-converte",
      number: "5.5",
      title: "Copy que converte, seção por seção",
      subtitle:
        "O texto pronto da nova home, com o raciocínio por trás de cada escolha — e as regras para escrever o seu.",
      minutes: 16,
      goals: [
        "Aplicar as regras de copy de conversão",
        "Escrever títulos, apoios e CTAs específicos",
        "Transformar recurso em benefício sem cair no genérico",
      ],
      blocks: [
        {
          type: "p",
          text: "Em uma landing page, o texto é o design. Você pode ter o layout mais elegante do mundo: se o título não disser algo que a pessoa reconhece como o problema dela, ela vai embora. Esta aula entrega o texto da nova home e explica a decisão por trás de cada bloco.",
        },
        {
          type: "h",
          text: "Cinco regras que governam tudo",
        },
        {
          type: "cards",
          items: [
            {
              tag: "01",
              title: "Você, não nós",
              text: "“Nossa plataforma oferece” vira “sua escola recebe”. Conte quantas vezes o site fala de si e quantas fala do cliente. A proporção saudável é de pelo menos três para um a favor do cliente.",
            },
            {
              tag: "02",
              title: "Concreto vence abstrato",
              text: "“Reduza a inadimplência” é abstrato. “De 11% para 4% em seis meses” é concreto. Sempre que puder trocar um adjetivo por um número, troque.",
            },
            {
              tag: "03",
              title: "Recurso → benefício → prova",
              text: "“Régua de cobrança automática” (recurso) → “a secretaria para de ligar cobrando” (benefício) → “em média, 6 horas por mês de volta” (prova). Recurso sozinho não vende.",
            },
            {
              tag: "04",
              title: "Uma ideia por bloco",
              text: "Se um parágrafo tem dois argumentos, ele tem um a mais. Divida.",
            },
            {
              tag: "05",
              title: "CTA completa “eu quero…”",
              text: "“Saiba mais” não é um desejo de ninguém. “Calcular a economia da minha escola” é.",
            },
          ],
        },
        {
          type: "h",
          text: "O texto, seção por seção",
        },
        {
          type: "code",
          lang: "copy",
          caption: "01 · Hero",
          code: `OVERLINE   Plataforma financeira para escolas

TÍTULO     O dinheiro da sua escola,
           no controle de quem ensina.

APOIO      Cobrança automática por Pix, boleto e cartão, com
           liquidação direto no CNPJ da escola. Sem intermediário
           segurando o seu caixa por 30 dias.

CTA 1      Agendar demonstração
CTA 2      Calcular a economia da minha escola

MICROCÓPIA Implantação e migração da base inclusas
           · suporte humano por WhatsApp`,
        },
        {
          type: "p",
          text: "O título permanece o mesmo do site atual porque já é muito bom: nomeia o antagonista implícito (“quem ensina” versus quem não ensina) e promete controle, que é a dor real. O apoio ganhou um número — “30 dias” — porque a Regra 02 exige concretude. A microcópia abaixo dos botões remove a objeção “vai dar trabalho” antes mesmo que ela se forme.",
        },
        {
          type: "code",
          lang: "copy",
          caption: "03 · Faixa de prova",
          code: `OVERLINE   Escolas que já usam

MÉTRICAS   R$ 12,4 mi        38 escolas       4,2%
           processados       ativas           inadimplência média
           em 2026                            das escolas ativas

NOTA       Dados agregados da base Giz Pay, atualizados em [mês].`,
        },
        {
          type: "callout",
          variant: "warn",
          title: "Sobre esses números",
          text: "São **exemplos de estrutura**, não dados reais. Só publique métricas que o cliente possa comprovar, e sempre com a nota de origem embaixo. Se a base ainda for pequena, use outra prova: depoimento nominal, tempo de operação, volume por escola. Nunca invente número.",
        },
        {
          type: "code",
          lang: "copy",
          caption: "04 · O problema",
          code: `OVERLINE   O problema

TÍTULO     Sua escola trabalha o mês inteiro.
           Quem lucra é o intermediário.

APOIO      Os intermediários tradicionais retêm o caixa da escola,
           cobram um percentual sobre tudo o que ela fatura e
           devolvem o dinheiro semanas depois.

CARD 1     Repasse com atraso
           Os pais pagam hoje. A escola recebe em 15, 30 ou 60 dias
           — e ainda com a taxa cheia já descontada.

CARD 2     Taxa sobre o faturamento
           De 2% a 6% de tudo o que a escola fatura, todo mês,
           independentemente do trabalho que o fornecedor teve.

CARD 3     Cobrança manual
           A secretaria emitindo boleto no banco, ligando para
           cobrar e controlando inadimplência em planilha.

CARD 4     Nenhuma visibilidade
           A direção só descobre o que entrou, o que atrasou e
           quem deve quando o relatório do mês fecha.`,
        },
        {
          type: "code",
          lang: "copy",
          caption: "06 · Calculadora — a seção-clímax",
          code: `OVERLINE   Calculadora de economia

TÍTULO     Quanto a intermediação custa à sua escola por ano?

APOIO      Ajuste os três números da sua escola. O resultado é o
           que uma taxa percentual retira do seu faturamento a
           cada ano.

CONTROLES  Alunos ativos · Mensalidade média · Taxa atual

RESULTADO  R$ 179.550
           é o que o intermediário leva do seu caixa por ano

DETALHE    Sobre um faturamento anual estimado de R$ 5.130.000.
           Com a Giz Pay, esse percentual dá lugar a uma
           assinatura fixa por aluno ativo.

CTA        Quero ver esse número na minha escola

NOTA       Estimativa ilustrativa, com base nos valores informados.`,
        },
        {
          type: "p",
          text: "Duas escolhas de texto aqui merecem atenção. Primeira: “**leva do seu caixa**” em vez de “custa”. Custo é uma categoria contábil neutra; “levar do seu caixa” descreve uma subtração de algo que era seu. Segunda: o CTA diz “esse número”, referindo-se ao valor que a pessoa acabou de gerar — o botão continua a frase que ela estava pensando.",
        },
        {
          type: "code",
          lang: "copy",
          caption: "07 · Depoimento",
          code: `“Parei de antecipar recebível no banco. O dinheiro entra no
dia em que o responsável paga, e eu enxergo isso no painel.”

Nome Sobrenome · Diretora financeira
Colégio [Nome] · 620 alunos · cliente desde 2025

ANTES → DEPOIS
Inadimplência   11%  →  4%
Fechamento      3 dias  →  40 minutos`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Como conseguir um depoimento assim",
          text: "Não peça “um depoimento”. Peça uma conversa de 15 minutos e faça três perguntas: como era antes; o que mudou na prática; e qual número mudou. Transcreva, escolha a frase mais específica e envie para aprovação. A frase boa quase nunca é a que o cliente escreveria sozinho.",
        },
        {
          type: "h",
          text: "Antes e depois de microcópia",
        },
        {
          type: "table",
          head: ["Onde", "Antes", "Depois"],
          rows: [
            ["Botão do hero", "Saiba mais", "Agendar demonstração"],
            ["Botão da calculadora", "Entre em contato", "Quero ver esse número na minha escola"],
            ["Título do formulário", "Fale conosco", "Veja o painel com os números da sua escola"],
            ["Botão de envio", "Enviar", "Agendar demonstração gratuita"],
            ["Após o envio", "Obrigado!", "Recebemos. Nosso time responde em até 1 dia útil pelo WhatsApp que você informou."],
            ["Campo vazio", "Campo obrigatório", "Precisamos do WhatsApp para confirmar o horário"],
            ["Item de módulo", "Régua de cobrança", "A secretaria para de ligar cobrando"],
          ],
        },
        {
          type: "demo",
          id: "cta",
          title: "Laboratório de CTA",
          text: "Compare formulações de chamada para ação e veja o efeito de especificidade, primeira pessoa e remoção de risco.",
        },
        {
          type: "h",
          text: "Erros de copy que aparecem em quase todo site",
        },
        {
          type: "compare",
          badTitle: "Evite",
          bad: [
            "“Soluções inovadoras” / “tecnologia de ponta” / “completo”",
            "Parágrafos de seis linhas em seção de benefício",
            "Falar do produto antes de nomear o problema",
            "Jargão do seu setor que o cliente não usa (“adquirência”, “liquidação D+1”)",
            "Superlativo sem prova (“a melhor plataforma do Brasil”)",
          ],
          goodTitle: "Prefira",
          good: [
            "Verbo concreto + número + prazo",
            "Duas a três linhas por bloco, no máximo",
            "Problema, depois solução — sempre nessa ordem",
            "Português do cliente (“o dinheiro cai na conta da escola no mesmo dia”)",
            "Afirmação verificável com a fonte ao lado",
          ],
        },
        {
          type: "exercise",
          title: "Exercício 5.5 — Reescreva",
          items: [
            "Pegue a sua seção mais fraca e reescreva o título com verbo concreto e número.",
            "Troque todos os CTAs para que completem a frase “eu quero…”.",
            "Aplique recurso → benefício → prova em cada item de recurso do seu site.",
            "Conte “nós” versus “você” no texto todo e ajuste a proporção.",
          ],
        },
      ],
      takeaways: [
        "Você, não nós; concreto, não abstrato; recurso vira benefício e ganha prova.",
        "O CTA precisa completar a frase “eu quero…”.",
        "Número sem fonte declarada não entra na página.",
        "Microcópia de confirmação é parte da conversão, não um detalhe.",
      ],
    },
    {
      slug: "build-e-lancamento",
      number: "5.6",
      title: "Construção no Framer e lançamento",
      subtitle:
        "A ordem de execução dentro da ferramenta, a calculadora em código, o QA completo e o que medir depois de publicar.",
      minutes: 16,
      goals: [
        "Executar o build na ordem que evita retrabalho",
        "Implementar a calculadora como Code Component",
        "Rodar o checklist de lançamento e configurar a medição",
      ],
      blocks: [
        {
          type: "p",
          text: "Tudo o que veio antes existe para que esta etapa seja mecânica. Com briefing, wireframe, design system e copy prontos, construir é montagem — e montagem tem uma ordem certa.",
        },
        {
          type: "h",
          text: "A ordem de execução",
        },
        {
          type: "steps",
          items: [
            {
              title: "1 · Fundação (antes de qualquer seção)",
              text: "Color Styles, Text Styles, o Frame de página com o container de 1200px e os breakpoints Desktop / Tablet / Phone. Nada de conteúdo ainda.",
            },
            {
              title: "2 · Componentes base",
              text: "Botão (3 variantes × todos os estados), Cabeçalho de seção, Campo de formulário. São os três que aparecem em todo lugar.",
            },
            {
              title: "3 · Barra de navegação e rodapé",
              text: "Emolduram a página inteira. Fazê-los cedo evita ajustar altura e espaçamento de todas as seções depois.",
            },
            {
              title: "4 · Hero",
              text: "A seção mais difícil e a mais importante. Faça com atenção, mas não polir infinitamente — você vai voltar aqui.",
            },
            {
              title: "5 · Seções de conteúdo, de cima para baixo",
              text: "Problema, como funciona, comparativo, módulos, portal, segurança, FAQ. Reutilizando Cabeçalho de seção em todas.",
            },
            {
              title: "6 · Calculadora",
              text: "O único trecho com código. Deixe para depois de a página estar de pé, para poder testar em contexto real.",
            },
            {
              title: "7 · Formulário e confirmação",
              text: "Cinco campos, validação, destino por webhook e uma página de confirmação que diz o que acontece agora.",
            },
            {
              title: "8 · Movimento",
              text: "Só agora. Aplicar animação em uma página que ainda vai mudar de estrutura é retrabalho garantido.",
            },
            {
              title: "9 · Mobile",
              text: "Percorrer os três breakpoints ajustando direction, padding e tamanho de fonte.",
            },
            {
              title: "10 · SEO, publicação e medição",
              text: "Metadados, subdomínio de teste, domínio, analytics.",
            },
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "Por que o movimento fica em nono lugar",
          text: "É a inversão que mais economiza tempo. Animação aplicada cedo precisa ser refeita a cada mudança de estrutura, e mudança de estrutura acontece o tempo todo até a página fechar.",
        },
        {
          type: "h",
          text: "A calculadora como Code Component",
        },
        {
          type: "p",
          text: "É a única parte do projeto que pede código. No Framer: painel Assets → Code → New Code File. O componente recebe controles de propriedade para que você ajuste os valores iniciais direto no canvas.",
        },
        {
          type: "code",
          lang: "tsx",
          caption: "Calculadora de economia — Code Component do Framer",
          code: `import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

export default function CalculadoraEconomia(props) {
    const [alunos, setAlunos] = useState(props.alunosIniciais)
    const [mensalidade, setMensalidade] = useState(props.mensalidadeInicial)
    const [taxa, setTaxa] = useState(props.taxaInicial)

    const faturamentoAnual = alunos * mensalidade * 12
    const custoAnual = faturamentoAnual * (taxa / 100)

    const brl = (v) =>
        v.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 0,
        })

    return (
        <div style={{ display: "grid", gap: 24, fontFamily: "Inter, sans-serif" }}>
            <Controle
                label="Alunos ativos"
                valor={alunos}
                exibicao={alunos}
                min={50} max={2000} step={10}
                onChange={setAlunos}
            />
            <Controle
                label="Mensalidade média"
                valor={mensalidade}
                exibicao={brl(mensalidade)}
                min={300} max={5000} step={50}
                onChange={setMensalidade}
            />
            <Controle
                label="Taxa atual do intermediário"
                valor={taxa}
                exibicao={taxa.toFixed(1) + "%"}
                min={0.5} max={8} step={0.1}
                onChange={setTaxa}
            />

            <div>
                <p style={{ opacity: 0.7, fontSize: 14 }}>
                    O intermediário leva do seu caixa, por ano
                </p>
                <strong
                    style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontVariantNumeric: "tabular-nums",
                        fontSize: 56,
                        color: "#4ADE80",
                    }}
                >
                    {brl(custoAnual)}
                </strong>
                <p style={{ opacity: 0.7, fontSize: 14 }}>
                    Sobre um faturamento anual estimado de {brl(faturamentoAnual)}.
                </p>
            </div>
        </div>
    )
}

function Controle({ label, valor, exibicao, min, max, step, onChange }) {
    return (
        <label style={{ display: "grid", gap: 8 }}>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{label}</span>
                <strong>{exibicao}</strong>
            </span>
            <input
                type="range"
                min={min} max={max} step={step} value={valor}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{ accentColor: "#4ADE80", width: "100%", height: 44 }}
            />
        </label>
    )
}

CalculadoraEconomia.defaultProps = {
    alunosIniciais: 450,
    mensalidadeInicial: 950,
    taxaInicial: 3.5,
}

addPropertyControls(CalculadoraEconomia, {
    alunosIniciais: { type: ControlType.Number, title: "Alunos", min: 50, max: 2000 },
    mensalidadeInicial: { type: ControlType.Number, title: "Mensalidade", min: 300, max: 5000 },
    taxaInicial: { type: ControlType.Number, title: "Taxa %", min: 0.5, max: 8, step: 0.1 },
})`,
        },
        {
          type: "callout",
          variant: "tip",
          title: "Detalhes que fazem diferença nesse componente",
          text: "A altura de 44px no slider atende à Lei de Fitts no celular. O `tabular-nums` impede o número de tremer ao arrastar. E os valores iniciais já vêm preenchidos com uma escola plausível — efeito Zeigarnik: a tarefa já começou.",
        },
        {
          type: "h",
          text: "Checklist de lançamento",
        },
        {
          type: "list",
          items: [
            "**Conteúdo** — todo número tem fonte declarada; nenhum texto de exemplo sobrou; todos os links funcionam.",
            "**Mobile a 390px** — percorrer a página inteira; nada transborda; nenhuma rolagem horizontal.",
            "**Toque** — todos os alvos com no mínimo 44×44px; CTA fixo alcançável pelo polegar.",
            "**Teclado** — Tab percorre a página inteira com foco visível em todos os interativos.",
            "**Contraste** — todos os pares texto/fundo em 4,5:1 ou mais.",
            "**Semântica** — um único H1; hierarquia de títulos sem pular nível; alt em todas as imagens.",
            "**Formulário** — validação em tempo real; teclado correto por tipo de campo; confirmação informativa; lead chegando no destino (teste você mesmo).",
            "**Performance** — LCP abaixo de 2,5s no mobile; imagens em WebP com dimensão declarada.",
            "**SEO** — title e description únicos; favicon; imagem social 1200×630; sitemap enviado ao Search Console.",
            "**Compartilhamento** — colar o link no WhatsApp e conferir se o card aparece com imagem e texto certos.",
            "**Medição** — GA4 instalado e eventos de conversão disparando.",
            "**Teste dos 5 segundos** — com três pessoas de fora do projeto.",
          ],
        },
        {
          type: "h",
          text: "Depois de publicar",
        },
        {
          type: "table",
          head: ["Quando", "O que fazer"],
          rows: [
            ["Primeiras 24h", "Enviar um lead de teste pelo formulário; confirmar chegada no destino e no WhatsApp; verificar o site em pelo menos três celulares reais."],
            ["Primeira semana", "Assistir gravações de sessão; anotar onde as pessoas param de rolar; conferir se a calculadora está sendo usada."],
            ["Primeiro mês", "Comparar envios de formulário com o período anterior; identificar a seção com maior abandono; testar uma variação do título do hero."],
            ["Contínuo", "Um teste por vez, mudando uma variável. Testar título e imagem juntos não diz qual dos dois funcionou."],
          ],
        },
        {
          type: "callout",
          variant: "key",
          title: "O site nunca fica pronto",
          text: "A primeira versão publicada é a sua melhor hipótese, não a resposta. O que separa um site bom de um site que cresce é o ciclo: publicar, medir, ajustar uma coisa, medir de novo. Publique aos 90% — os 10% restantes você descobre com dado real, não olhando para a tela.",
        },
        {
          type: "exercise",
          title: "Exercício 5.6 — Construa",
          items: [
            "Execute os dez passos na ordem, sem pular para o movimento antes da hora.",
            "Implemente a calculadora e teste no celular, arrastando com o polegar.",
            "Rode o checklist inteiro e corrija tudo antes de conectar o domínio.",
            "Configure GA4 com eventos para: uso da calculadora, início e envio do formulário.",
            "Marque na agenda uma revisão de dados para 30 dias depois do lançamento.",
          ],
        },
      ],
      takeaways: [
        "Fundação → componentes → moldura → hero → seções → calculadora → formulário → movimento → mobile → publicação.",
        "Movimento é o penúltimo passo, nunca o primeiro.",
        "A calculadora é o único código do projeto — e vale cada linha.",
        "Publique aos 90% e melhore com dado real.",
      ],
    },
  ],
};
