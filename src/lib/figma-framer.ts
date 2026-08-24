export type LessonBlock = {
  id: string;
  title: string;
  duration: string;
  fala: string[];
  nota?: string;
  exercicio?: { title: string; steps: string[] };
};

export const FIGMA_FRAMER_OVERVIEW = {
  duration: "90 min (+ 30 min exercícios)",
  tools: ["Figma", "Framer"],
  project: "Redesign gizpay.com.br",
};

export const LESSON_BLOCKS: LessonBlock[] = [
  {
    id: "abertura",
    title: "Abertura — O mapa",
    duration: "5 min",
    fala: [
      "Nesta aula você não vai só aprender ferramentas. Vamos construir o vocabulário para pensar como quem desenha experiências digitais e entregar sites que funcionam no navegador.",
      "O caso real é o Giz Pay: uma plataforma financeira para escolas. O site precisa convencer diretores e mantenedores de que vale uma demonstração — em menos de um minuto de leitura.",
      "Figma — pensar, estruturar, desenhar, prototipar. Framer — levar o design ao ar com interação, animação e publicação rápida.",
    ],
    nota: "Figma = design e colaboração. Framer = site publicado. São etapas sequenciais, não concorrentes.",
  },
  {
    id: "ui-ux",
    title: "UI vs UX",
    duration: "10 min",
    fala: [
      "UX (User Experience) é a experiência completa: desde o anúncio até o formulário e o WhatsApp depois.",
      "UI (User Interface) é a camada visual: botões, cores, tipografia, espaçamento, estados de hover e erro.",
      "Para o Giz Pay, a UX central é: Entendi o problema → vi que a solução existe → quero ver na prática.",
      "A UI deve comunicar: seriedade financeira + modernidade + clareza.",
    ],
    exercicio: {
      title: "Auditoria rápida do site atual",
      steps: [
        "Abra gizpay.com.br e anote uma coisa com UX boa e uma com UX fraca.",
        "Anote uma coisa com UI boa e uma com UI fraca.",
      ],
    },
  },
  {
    id: "usuario",
    title: "Usuário e objetivo do site",
    duration: "10 min",
    fala: [
      "Persona: diretor(a) ou mantenedor(a) — cuida de caixa, inadimplência e reputação. Tem pouco tempo; desconfia de taxa escondida.",
      "Objetivo de negócio: leads qualificados — demonstração ou WhatsApp.",
      "Objetivo do usuário: entender se resolve repasse atrasado, taxa sobre faturamento e cobrança manual — e se é seguro (LGPD).",
      "Jornada: Chegada → Valor (10s) → Prova → Interação (calculadora) → CTA → Formulário.",
    ],
  },
  {
    id: "fundamentos-ui",
    title: "Fundamentos de UI",
    duration: "15 min",
    fala: [
      "Hierarquia visual: tamanho → contraste → posição → espaço em branco. Um CTA primário por viewport.",
      "Tipografia: máximo duas famílias. Corpo 16–18px. Line-height corpo ~1.5–1.6.",
      "Cores: primária (ação), neutros (fundo/texto), semânticas (pago/vencendo/atrasado).",
      "Espaçamento: escala de 8px. Grid 12 col desktop, 4 col mobile.",
      "Design system no Figma: Components + Variants para botão, input, card.",
    ],
    exercicio: {
      title: "Design system mínimo no Figma",
      steps: [
        "Crie arquivo Giz Pay — Aula, frame 1440×900.",
        "Defina 5 cores + 3 tamanhos de texto.",
        "Crie Button/Primary e Button/Secondary com variants.",
        "Duplique para 390×844 e ajuste H1 e padding.",
      ],
    },
  },
  {
    id: "interacao",
    title: "Interação e micro-UX",
    duration: "10 min",
    fala: [
      "Estados obrigatórios: botão (default, hover, pressed, disabled), input (foco, erro, sucesso).",
      "Interações de alto valor no Giz Pay: calculadora em tempo real, comparativo lado a lado, demo do painel.",
      "Animação: 200–400ms, com propósito. No Framer: While Hover, Scroll Transform, Appear.",
    ],
  },
  {
    id: "frontend",
    title: "Front-end — o que existe debaixo do design",
    duration: "15 min",
    fala: [
      "HTML semântico: header, main, section, footer. Um H1 por página.",
      "CSS: Flexbox (linhas), Grid (cards), breakpoints e clamp() para fontes fluidas.",
      "JavaScript na landing: menu mobile, modais, calculadora, validação de form.",
      "Framer publica rápido; Next.js quando precisa de CRM, API e SEO fino.",
    ],
  },
  {
    id: "mobile",
    title: "Mobile-first",
    duration: "8 min",
    fala: [
      "Desenhe mobile primeiro; expanda para desktop.",
      "Toque mínimo 44×44px. Texto legível sem zoom. CTA visível na hero.",
      "Formulário com type=email e type=tel para o teclado correto.",
    ],
  },
  {
    id: "a11y-seo",
    title: "Acessibilidade, performance e SEO",
    duration: "14 min",
    fala: [
      "Contraste ≥ 4.5:1, alt em imagens, foco visível com Tab, labels nos inputs.",
      "Performance: WebP, poucas fontes, lazy load abaixo da dobra.",
      "SEO: title e meta description claros, headings hierárquicos, Open Graph para WhatsApp.",
    ],
  },
  {
    id: "figma",
    title: "Figma na prática",
    duration: "12 min",
    fala: [
      "Fluxo: Moodboard → Wireframe (cinza) → Design system → High-fidelity → Protótipo → Framer.",
      "Wireframe sem cor — só ordem de seções e CTAs.",
      "High-fidelity: uma frame por seção (Hero, Problema, Módulos, Calculadora, FAQ, CTA).",
      "Atalhos: Shift+A (auto layout), Cmd+Alt+K (componente), Shift+E (protótipo).",
    ],
    exercicio: {
      title: "Wireframe mobile Giz Pay",
      steps: [
        "Frame 390px, somente cinza: navbar, hero, 3 métricas, 4 cards de problema, CTA.",
      ],
    },
  },
  {
    id: "framer",
    title: "Framer na prática",
    duration: "12 min",
    fala: [
      "Estrutura: Pages, Components, Breakpoints (Desktop/Tablet/Phone).",
      "Navbar fixa, scroll a #calculadora, modal comparativo, form com validação.",
      "Fluxo: protótipo Framer para validar → implementação Next.js para production.",
    ],
    exercicio: {
      title: "Hero no Framer",
      steps: [
        "Recrie a hero do wireframe.",
        "Hover no botão primário + scroll ao clicar Calcular economia.",
        "Publique preview e compartilhe o link.",
      ],
    },
  },
  {
    id: "conversao",
    title: "Copy e conversão",
    duration: "8 min",
    fala: [
      "Hero: problema + solução + prova + ação. CTAs específicos: Agendar demonstração gratuita.",
      "FAQ e comparativo removem objeções antes do formulário.",
      "Repetir CTA primário após cada bloco de valor.",
    ],
  },
  {
    id: "encerramento",
    title: "Encerramento",
    duration: "3 min",
    fala: [
      "Próxima sessão: auditoria detalhada, wireframes Figma, Framer interativo, depois código em /gizpay.",
      "Use o checklist em docs/checklist-gizpay-redesign.md.",
    ],
  },
];

export const GLOSSARY = [
  { term: "CTA", def: "Call to Action — botão ou link principal" },
  { term: "Hero", def: "Primeira seção visível ao abrir o site" },
  { term: "Wireframe", def: "Esqueleto sem design final" },
  { term: "Design system", def: "Regras e componentes reutilizáveis" },
  { term: "Breakpoint", def: "Largura onde o layout muda" },
  { term: "Conversão", def: "% que completa o objetivo (form, demo)" },
];

export const TOOL_MATRIX = [
  { task: "Brainstorm de layout", tool: "Figma" },
  { task: "Design system", tool: "Figma" },
  { task: "Protótipo clicável leve", tool: "Figma" },
  { task: "Animação de scroll avançada", tool: "Framer" },
  { task: "Calculadora interativa publicada", tool: "Framer" },
  { task: "Site no ar com domínio", tool: "Framer" },
  { task: "CRM, API, blog, testes", tool: "Next.js" },
];
