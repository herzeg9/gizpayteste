export type WireframeFrame = {
  id: string;
  order: number;
  name: string;
  mobile: { w: number; h: number };
  desktop: { w: number; h: number };
  blocks: string[];
  notes: string;
  figmaLayer: string;
};

export const WIREFRAME_FILE = "Giz Pay — Redesign";

export const WIREFRAME_FRAMES: WireframeFrame[] = [
  {
    id: "nav",
    order: 1,
    name: "Navbar",
    mobile: { w: 390, h: 64 },
    desktop: { w: 1440, h: 64 },
    blocks: ["Logo Giz Pay", "Menu (4 links)", "CTA Agendar demo"],
    notes: "Sticky top. Mobile: hamburger + CTA na barra inferior fixa.",
    figmaLayer: "01 · Navbar",
  },
  {
    id: "hero",
    order: 2,
    name: "Hero",
    mobile: { w: 390, h: 720 },
    desktop: { w: 1440, h: 680 },
    blocks: [
      "Overline",
      "H1 (max 3 linhas mobile)",
      "Subtítulo",
      "CTA primário + secundário",
      "Microcopy suporte",
      "Mock painel (feed animado)",
    ],
    notes: "Grid 2 col desktop. Painel à direita com números e feed de pagamentos.",
    figmaLayer: "02 · Hero",
  },
  {
    id: "prova",
    order: 3,
    name: "Prova social",
    mobile: { w: 390, h: 320 },
    desktop: { w: 1440, h: 240 },
    blocks: ["Logos escolas (4)", "3 métricas (R$ / escolas / inadimplência)", "Disclaimer ilustrativo"],
    notes: "Fundo surface escuro. Corrigir P0: prova social ausente no site atual.",
    figmaLayer: "03 · Prova social",
  },
  {
    id: "problema",
    order: 4,
    name: "O problema",
    mobile: { w: 390, h: 880 },
    desktop: { w: 1440, h: 420 },
    blocks: ["Overline + H2", "4 cards (métrica + título + texto)"],
    notes: "Fundo claro. Cards 1 col mobile, 4 col desktop.",
    figmaLayer: "04 · Problema",
  },
  {
    id: "como-funciona",
    order: 5,
    name: "Como funciona",
    mobile: { w: 390, h: 520 },
    desktop: { w: 1440, h: 400 },
    blocks: ["H2", "4 passos clicáveis (01–04)", "Painel de detalhe do passo ativo"],
    notes: "Interação: tab ou accordion. Reduz medo da migração.",
    figmaLayer: "05 · Como funciona",
  },
  {
    id: "calculadora",
    order: 6,
    name: "Calculadora",
    mobile: { w: 390, h: 640 },
    desktop: { w: 1440, h: 480 },
    blocks: [
      "3 sliders (alunos, mensalidade, taxa)",
      "Resultado grande animado",
      "CTA Quero ver na minha escola",
    ],
    notes: "Promover do fim para o meio (P1 auditoria). Fundo escuro.",
    figmaLayer: "06 · Calculadora",
  },
  {
    id: "depoimento",
    order: 7,
    name: "Depoimento",
    mobile: { w: 390, h: 360 },
    desktop: { w: 1440, h: 280 },
    blocks: ["Citação", "Nome + cargo + escola", "2 métricas antes/depois"],
    notes: "Prova social nominal. Substituir por case real quando disponível.",
    figmaLayer: "07 · Depoimento",
  },
  {
    id: "comparativo",
    order: 8,
    name: "Comparativo",
    mobile: { w: 390, h: 480 },
    desktop: { w: 1440, h: 420 },
    blocks: ["Toggle Giz Pay | Intermediário", "5 linhas critério + valor", "Resumo em 1 linha"],
    notes: "P0: interativo, não modal. Implementado em /site.",
    figmaLayer: "08 · Comparativo",
  },
  {
    id: "modulos",
    order: 9,
    name: "Módulos",
    mobile: { w: 390, h: 720 },
    desktop: { w: 1440, h: 400 },
    blocks: ["H2", "Grid 4 cards (sigla + título + texto)"],
    notes: "2 col mobile, 2×2 desktop.",
    figmaLayer: "09 · Módulos",
  },
  {
    id: "portal",
    order: 10,
    name: "Portal do responsável",
    mobile: { w: 390, h: 560 },
    desktop: { w: 1440, h: 480 },
    blocks: ["Copy + lista ✓", "Mock celular (Pix + histórico)"],
    notes: "Mock clicável no Framer/code. Fala com secretaria.",
    figmaLayer: "10 · Portal",
  },
  {
    id: "seguranca",
    order: 11,
    name: "Segurança",
    mobile: { w: 390, h: 480 },
    desktop: { w: 1440, h: 280 },
    blocks: ["H2", "4 cards LGPD / cripto / papéis / auditoria"],
    notes: "Fundo surface. Ícone escudo por card.",
    figmaLayer: "11 · Segurança",
  },
  {
    id: "faq",
    order: 12,
    name: "FAQ",
    mobile: { w: 390, h: 400 },
    desktop: { w: 860, h: 360 },
    blocks: ["H2", "Accordion 5 perguntas", "1ª aberta por default"],
    notes: "Max-width 860px centrado.",
    figmaLayer: "12 · FAQ",
  },
  {
    id: "form",
    order: 13,
    name: "Agendar + formulário",
    mobile: { w: 390, h: 720 },
    desktop: { w: 1440, h: 520 },
    blocks: [
      "Copy + WhatsApp link",
      "Form: nome, escola, email, whatsapp, faixa alunos",
      "Estado sucesso",
    ],
    notes: "Grid 2 col desktop. Form ilustrativo no repo local.",
    figmaLayer: "13 · Conversão",
  },
  {
    id: "footer",
    order: 14,
    name: "Footer",
    mobile: { w: 390, h: 280 },
    desktop: { w: 1440, h: 200 },
    blocks: ["Logo + tagline", "Links produto", "Links contato", "Legal"],
    notes: "Padding-bottom extra no mobile (barra fixa).",
    figmaLayer: "14 · Footer",
  },
];

export const FIGMA_SETUP = [
  "Criar arquivo Figma: Giz Pay — Redesign",
  "Página 🧱 Wireframes — frames cinza (#E5E7EB fill, #9CA3AF texto)",
  "Página 🎨 Design — high-fidelity com tokens do tokens.ts",
  "Página 🧩 Components — Button, Card, Input, Navbar, SectionHeader",
  "Auto Layout em tudo (Shift+A). Grid 12 col desktop, 4 col mobile.",
  "Conectar protótipo: CTAs → #calculadora, #agendar, nav anchors",
  "Exportar assets SVG para o repo se necessário",
];

export const DESIGN_TOKENS_FIGMA = {
  cores: [
    { name: "deep", hex: "#07211B", uso: "Fundo hero, footer" },
    { name: "surface", hex: "#0E2F27", uso: "Faixas escuras" },
    { name: "light", hex: "#F6F8F5", uso: "Seções claras" },
    { name: "primary", hex: "#4ADE80", uso: "CTA, destaques" },
    { name: "fg-light", hex: "#0B1F1A", uso: "Texto em fundo claro" },
    { name: "muted-light", hex: "#5A6B64", uso: "Corpo secundário claro" },
  ],
  tipografia: [
    { role: "Display / H1", font: "Fraunces Semibold", size: "40–68px" },
    { role: "H2 seção", font: "Fraunces Semibold", size: "30–42px" },
    { role: "Corpo", font: "Inter Regular", size: "16–19px" },
    { role: "Label / overline", font: "Inter Semibold", size: "11px caps" },
    { role: "Números", font: "JetBrains Mono", size: "32px" },
  ],
  espacamento: [4, 8, 12, 16, 24, 32, 48, 64, 80, 96],
};
