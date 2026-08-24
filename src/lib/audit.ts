export type AuditVerdict = "keep" | "fix" | "cut" | "add";

export type AuditItem = {
  id: string;
  section: string;
  verdict: AuditVerdict;
  finding: string;
  impact: "alto" | "médio" | "baixo";
  recommendation: string;
};

export type AuditCategory = {
  id: string;
  title: string;
  summary: string;
  items: AuditItem[];
};

export const AUDIT_META = {
  site: "https://gizpay.com.br",
  date: "24 de agosto de 2026",
  stack: "Vercel (HTML estático/SPA)",
  primaryGoal: "Agendar demonstração gratuita",
  secondaryGoal: "Contato WhatsApp comercial — (11) 98044-8792",
};

export const PERSONAS = [
  {
    role: "Direção / mantenedor",
    need: "Caixa previsível, menos taxa, prova de que o dinheiro cai na conta da escola",
    pain: "Intermediário retém repasse; falta visibilidade do caixa",
  },
  {
    role: "Tesouraria",
    need: "Baixa automática, conciliação, relatório para contabilidade",
    pain: "Fechamento manual, extrato vs. planilha",
  },
  {
    role: "Secretaria",
    need: "Menos ligações, segunda via self-service, régua de cobrança",
    pain: "Emitir boleto, cobrar por telefone, atender repetitivo",
  },
];

export const SECTION_MAP = [
  { order: 1, name: "Hero + prova numérica", anchor: "topo", hasCta: true },
  { order: 2, name: "Mock do painel (app.gizpay.com.br)", anchor: "hero", hasCta: false },
  { order: 3, name: "Faixa de features (Pix, boleto, cartão…)", anchor: "features", hasCta: false },
  { order: 4, name: "O problema (4 dores)", anchor: "problema", hasCta: true },
  { order: 5, name: "Como funciona (4 passos)", anchor: "como-funciona", hasCta: false },
  { order: 6, name: "Módulos (6 cards)", anchor: "modulos", hasCta: false },
  { order: 7, name: "Comparativo vs intermediário", anchor: "comparativo", hasCta: true },
  { order: 8, name: "Calculadora de economia", anchor: "calculadora", hasCta: true },
  { order: 9, name: "Portal do responsável", anchor: "portal", hasCta: false },
  { order: 10, name: "Na prática (3 benefícios)", anchor: "na-pratica", hasCta: false },
  { order: 11, name: "Segurança / LGPD", anchor: "seguranca", hasCta: true },
  { order: 12, name: "FAQ (5 perguntas)", anchor: "faq", hasCta: false },
  { order: 13, name: "Formulário + WhatsApp", anchor: "contato", hasCta: true },
];

export const SCORES = {
  content: { score: 8, label: "Conteúdo / copy", note: "Proposta clara, números fortes, FAQ útil" },
  structure: { score: 7, label: "Estrutura / jornada", note: "Funil correto, mas longo e com repetição" },
  ui: { score: 6, label: "UI / hierarquia", note: "Profissional, porém genérico SaaS" },
  interaction: { score: 5, label: "Interatividade", note: "Calculadora existe; resto é estático" },
  conversion: { score: 6, label: "Conversão", note: "CTAs certos, mas dispersos e tardios" },
  mobile: { score: 6, label: "Mobile", note: "Responsivo, scroll longo, CTA some" },
  trust: { score: 7, label: "Confiança", note: "LGPD citada; falta prova social real" },
  seo: { score: 7, label: "SEO técnico", note: "Meta e OG ok; imagem social fraca" },
};

export const AUDIT_CATEGORIES: AuditCategory[] = [
  {
    id: "conversao",
    title: "Conversão e funil",
    summary:
      "O site sabe o que quer (demo), mas empurra o visitante a scrollar demais antes de sentir urgência personalizada.",
    items: [
      {
        id: "conv-1",
        section: "Hero",
        verdict: "keep",
        finding:
          "Headline forte — “O dinheiro da sua escola, no controle de quem ensina.” Dois CTAs claros: demo e calculadora.",
        impact: "alto",
        recommendation: "Manter mensagem; reforçar prova social (logos de escolas ou depoimento) ao lado dos números 0% / -80% / <3s.",
      },
      {
        id: "conv-2",
        section: "CTAs ao longo da página",
        verdict: "fix",
        finding:
          "CTA primário só reaparece em blocos pontuais. Entre “Módulos” e “Calculadora” há ~4 scrolls sem convite claro.",
        impact: "alto",
        recommendation:
          "Inserir faixa sticky ou CTA repetido a cada 2 seções. No redesign: navbar com “Agendar demo” sempre visível.",
      },
      {
        id: "conv-3",
        section: "Calculadora",
        verdict: "keep",
        finding:
          "Ferramenta de alto valor — personaliza o prejuízo do intermediário (ex.: R$ 179.550/ano). CTA “Quero ver na minha escola” após resultado.",
        impact: "alto",
        recommendation:
          "Tornar sliders mais táteis no mobile; animar o número ao mover; pré-preencher com defaults da persona (450 alunos, R$ 950).",
      },
      {
        id: "conv-4",
        section: "Formulário final",
        verdict: "fix",
        finding:
          "5 campos + select de faixa de alunos. WhatsApp aparece só no bloco final — quem prefere chat precisa scrollar tudo.",
        impact: "médio",
        recommendation:
          "WhatsApp flutuante discreto ou link na navbar. Reduzir atrito: nome + WhatsApp + alunos pode bastar na primeira etapa.",
      },
      {
        id: "conv-5",
        section: "Prova social",
        verdict: "add",
        finding: "Nenhum logo de escola cliente, case ou depoimento nomeado. Só “Colégio Exemplo” nos mocks.",
        impact: "alto",
        recommendation:
          "Adicionar 2–3 cases reais (mesmo anônimos: “Rede com 800 alunos, SP”) ou selo “X escolas ativas”.",
      },
    ],
  },
  {
    id: "conteudo",
    title: "Conteúdo e narrativa",
    summary:
      "Copy B2B maduro; repetição entre seções dilui o impacto. Três papéis (direção, tesouraria, secretaria) não se reconhecem igualmente.",
    items: [
      {
        id: "cont-1",
        section: "O problema + Comparativo",
        verdict: "fix",
        finding:
          "Mesma tese (intermediário retém caixa) repetida em 3 lugares: problema, comparativo inline e modal.",
        impact: "médio",
        recommendation:
          "Manter comparativo interativo como prova; enxugar texto do “problema” para 4 cards visuais sem parágrafo longo.",
      },
      {
        id: "cont-2",
        section: "Na prática + Módulos",
        verdict: "cut",
        finding:
          "“Na prática” repete benefícios já ditos em módulos e “como funciona”. Três bullets genéricos.",
        impact: "baixo",
        recommendation:
          "Fundir em uma seção “Resultados no dia a dia” com ícones, ou cortar e usar espaço para case/prova social.",
      },
      {
        id: "cont-3",
        section: "Portal do responsável",
        verdict: "keep",
        finding:
          "Mock mobile convence secretaria e direção de que família não sobrecarrega a equipe. Lista de ✓ clara.",
        impact: "médio",
        recommendation:
          "Tornar mock clicável (simular pagamento Pix) — no Framer ou no redesign com estados.",
      },
      {
        id: "cont-4",
        section: "Faixa de features (hero)",
        verdict: "fix",
        finding:
          "Lista horizontal “Pix · Boleto · Cartão · Régua…” competindo com headline. Informação útil, mas visualmente barulhenta.",
        impact: "médio",
        recommendation: "Mover para marquee animado abaixo do hero ou integrar nos cards de módulos.",
      },
      {
        id: "cont-5",
        section: "Personas",
        verdict: "add",
        finding: "Site fala 80% com direção financeira. Secretaria e tesouraria aparecem só no texto dos módulos.",
        impact: "médio",
        recommendation:
          "Seletor “Sou direção / tesouraria / secretaria” que filtra 1 linha de copy ou destaca módulo relevante.",
      },
    ],
  },
  {
    id: "ui",
    title: "UI e hierarquia visual",
    summary:
      "Layout limpo estilo SaaS 2024, mas pouca identidade de marca e pouco contraste emocional para o setor educacional.",
    items: [
      {
        id: "ui-1",
        section: "Identidade visual",
        verdict: "fix",
        finding:
          "Paleta e tipografia genéricas (azul/roxo SaaS). Nome “Giz Pay” sugere giz/escola, mas visual não explora o conceito.",
        impact: "médio",
        recommendation:
          "Redesign “giz e papel”: textura sutil, Fraunces/display + traços manuais, verde/azul confiança financeira.",
      },
      {
        id: "ui-2",
        section: "Mock do painel",
        verdict: "keep",
        finding:
          "Dashboard no hero mostra produto real (R$ recebido, em dia/atrasado, feed de pagamentos). “Ver é crer”.",
        impact: "alto",
        recommendation:
          "Animar feed de pagamentos; números contando; alternar cenários (alta inadimplência → melhora).",
      },
      {
        id: "ui-3",
        section: "Hierarquia de botões",
        verdict: "fix",
        finding:
          "“Ver comparativo completo”, “Ver detalhes LGPD” e links secundários competem com CTA primário em peso similar.",
        impact: "médio",
        recommendation:
          "Links secundários como ghost/text; um só botão filled por bloco. Comparativo abre em modal, não nova página.",
      },
      {
        id: "ui-4",
        section: "Densidade",
        verdict: "fix",
        finding: "Página longa (~13 seções). No mobile, sensação de “nunca acaba”.",
        impact: "alto",
        recommendation:
          "Agrupar: Problema + Como funciona; Módulos + Comparativo; Calculadora + CTA. Ancoras na nav fixa.",
      },
    ],
  },
  {
    id: "interacao",
    title: "Interatividade",
    summary:
      "Calculadora e modais existem; o resto não convida a explorar. Oportunidade grande vs. concorrentes estáticos.",
    items: [
      {
        id: "int-1",
        section: "Calculadora",
        verdict: "fix",
        finding: "Inputs funcionam, mas feedback visual fraco — número grande poderia pulsar ao mudar.",
        impact: "médio",
        recommendation: "Transição animada no total; barra comparativa Giz Pay vs intermediário.",
      },
      {
        id: "int-2",
        section: "Comparativo",
        verdict: "fix",
        finding: "Tabela parcial na página + modal completo. Pouco “jogo” — visitante lê, não experimenta.",
        impact: "médio",
        recommendation: "Toggle “Com intermediário | Com Giz Pay” que troca copy e números lado a lado.",
      },
      {
        id: "int-3",
        section: "FAQ",
        verdict: "fix",
        finding: "Accordion padrão. Funcional, sem destaque para objeção #1 (dinheiro na conta).",
        impact: "baixo",
        recommendation: "Primeira pergunta aberta por default; ícone de escudo na pergunta de segurança.",
      },
      {
        id: "int-4",
        section: "Formulário",
        verdict: "fix",
        finding: "Sem estados de loading/sucesso visíveis na landing (depende de backend).",
        impact: "médio",
        recommendation: "Estado sucesso: “Recebemos! Comercial no WhatsApp em até 2h” + próximo passo.",
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile (375px)",
    summary:
      "Conteúdo legível e viewport correto; CTAs e calculadora precisam de área de toque e sticky.",
    items: [
      {
        id: "mob-1",
        section: "Navbar",
        verdict: "add",
        finding: "Menu mobile provável, mas CTA demo não fica fixo durante scroll longo.",
        impact: "alto",
        recommendation: "Barra inferior sticky: “Agendar demo” + ícone WhatsApp.",
      },
      {
        id: "mob-2",
        section: "Mock painel + portal",
        verdict: "fix",
        finding: "Dois mocks de produto empilhados — ocupam muita altura antes da calculadora.",
        impact: "médio",
        recommendation: "Carrossel ou tabs: Painel | Portal | Comparativo.",
      },
      {
        id: "mob-3",
        section: "Calculadora",
        verdict: "keep",
        finding: "Sliders utilizáveis; valores legíveis.",
        impact: "médio",
        recommendation: "Inputs numéricos alternativos para quem prefere teclado.",
      },
    ],
  },
  {
    id: "seo-tecnico",
    title: "SEO e técnico",
    summary: "Base sólida em meta tags e HTTPS. Imagem OG e performance podem melhorar.",
    items: [
      {
        id: "seo-1",
        section: "Meta tags",
        verdict: "keep",
        finding:
          "Title, description, og:title, og:description, og:locale pt_BR presentes. H1 único coerente.",
        impact: "médio",
        recommendation: "Alinhar og:title com title da aba para consistência no WhatsApp.",
      },
      {
        id: "seo-2",
        section: "Open Graph image",
        verdict: "fix",
        finding: "og:image aponta para favicon-512.png — preview pobre ao compartilhar link.",
        impact: "médio",
        recommendation: "Criar imagem 1200×630 com headline + mock do painel + logo.",
      },
      {
        id: "seo-3",
        section: "Performance",
        verdict: "fix",
        finding: "HTML ~59KB; hospedagem Vercel. Sem medição pública, mas página longa com muitos blocos.",
        impact: "médio",
        recommendation: "Lazy load de mocks; WebP; Lighthouse alvo LCP < 2,5s.",
      },
      {
        id: "seo-4",
        section: "Acessibilidade",
        verdict: "fix",
        finding: "Modais (comparativo, LGPD) precisam trap de foco e aria-label no fechar.",
        impact: "médio",
        recommendation: "Auditar com teclado; contraste em textos muted; labels explícitos no form.",
      },
    ],
  },
];

export const PRIORITY_ACTIONS = [
  {
    priority: "P0" as const,
    action: "Navbar fixa com CTA + ancora para calculadora e FAQ",
    why: "Recupera conversão perdida no scroll longo",
  },
  {
    priority: "P0" as const,
    action: "Prova social real (cases, logos ou métrica “X escolas”)",
    why: "B2B educacional decide com confiança de pares",
  },
  {
    priority: "P0" as const,
    action: "Comparativo interativo (toggle intermediário vs Giz Pay)",
    why: "Diferencial racional principal — merece destaque, não modal escondido",
  },
  {
    priority: "P1" as const,
    action: "Identidade “giz e escola” + motion no painel",
    why: "Memorabilidade e sensação de produto vivo",
  },
  {
    priority: "P1" as const,
    action: "Enxugar seções repetidas (Na prática, faixa duplicada)",
    why: "Reduz fadiga e tempo até o form",
  },
  {
    priority: "P1" as const,
    action: "WhatsApp visível antes do footer",
    why: "Canal preferido no Brasil para decisor ocupado",
  },
  {
    priority: "P2" as const,
    action: "Seletor de persona (direção / tesouraria / secretaria)",
    why: "Aumenta identificação sem nova página",
  },
  {
    priority: "P2" as const,
    action: "OG image e Lighthouse > 90",
    why: "Compartilhamento e SEO de longo prazo",
  },
];

export const WIREFRAME_ORDER = [
  "Navbar (logo, anchors, CTA demo)",
  "Hero (headline, 2 CTAs, 3 métricas, mock painel animado)",
  "Marquee de features",
  "Problema (4 cards)",
  "Como funciona (4 passos numerados)",
  "Módulos (grid 6)",
  "Comparativo (toggle interativo)",
  "Calculadora (sliders + resultado + CTA)",
  "Portal (mock mobile clicável)",
  "Segurança (4 pilares + link LGPD)",
  "FAQ (5 perguntas)",
  "Lead form + WhatsApp",
  "Footer",
];

export const VERDICT_LABELS: Record<AuditVerdict, string> = {
  keep: "Manter",
  fix: "Corrigir",
  cut: "Cortar / fundir",
  add: "Adicionar",
};

export const VERDICT_COLORS: Record<AuditVerdict, string> = {
  keep: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400",
  fix: "bg-amber-500/15 text-amber-800 dark:text-amber-400",
  cut: "bg-rose-500/15 text-rose-700 dark:text-rose-400",
  add: "bg-sky-500/15 text-sky-700 dark:text-sky-400",
};

export function averageScore() {
  const values = Object.values(SCORES).map((s) => s.score);
  return Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 10) / 10;
}

export function allAuditChecklistIds() {
  return AUDIT_CATEGORIES.flatMap((c) => c.items.map((i) => i.id));
}
