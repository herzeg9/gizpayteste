export const FRAME_HASHTAGS = [
  { tag: "#copy", use: "Texto na tela, locução, headline, CTA verbal." },
  { tag: "#ui", use: "Layout, cor, tipo, alinhamento, hierarquia visual." },
  { tag: "#ux", use: "Fluxo, clareza, esforço, próximo passo do usuário." },
  { tag: "#cta", use: "Botões, convites, formulário, WhatsApp." },
  { tag: "#motion", use: "Ritmo, corte, animação, duração de cena." },
  { tag: "#prova", use: "Números, demo do painel, calculadora, depoimento." },
  { tag: "#objecao", use: "FAQ, comparação, risco, confiança, LGPD." },
  { tag: "#acessibilidade", use: "Contraste, legenda, tamanho de tipo, foco." },
  { tag: "#pacing", use: "Aula rápida demais, pausa, repetição didática." },
  { tag: "#frame", use: "Enquadramento, lower third cobrindo conteúdo." },
] as const;

export const FRAME_ROUNDS = [
  {
    version: "V1 — Rough cut",
    goal: "História e didática. Ignore cor, música e microajustes.",
    questions: [
      "A aula ensina uma ideia por bloco?",
      "O exemplo da Giz Pay aparece cedo o suficiente?",
      "O aluno sabe o que fazer depois desta aula?",
    ],
  },
  {
    version: "V2 — Picture lock",
    goal: "UI na tela, gráficos, lower thirds e ritmo.",
    questions: [
      "O que está na tela reforça a locução, ou compete com ela?",
      "CTAs e números estão legíveis em 1080p?",
      "Há silêncio de 1s entre blocos para o comentário no Frame.io?",
    ],
  },
  {
    version: "V3 — Final review",
    goal: "Nitpicks e aprovação. Um ponto por comentário.",
    questions: [
      "Legenda e locução batem?",
      "Hashtags de revisão foram resolvidas?",
      "Share link de cliente está sem comentários internos?",
    ],
  },
] as const;

export const FRAME_PROTOCOL = [
  "Um ponto por comentário. Se tem dois problemas, são dois cards.",
  "Comente no quadro exato (pause) ou use I/O para um trecho.",
  "Anote na tela quando o problema for visual: circule o CTA, a headline, o número.",
  "Comece com a hashtag: #copy, #ui, #ux, #cta, #motion, #prova, #objecao, #acessibilidade, #pacing, #frame.",
  "Escreva a correção, não só o diagnóstico. “Aumentar o CTA para 18px” > “está pequeno”.",
  "Marque como Complete quando a correção entrar na próxima versão.",
  "Não suba V2 enquanto a V1 tiver cards abertos.",
  "Separe rodada estrutural (história) de rodada cosmética (cor, tipo, música).",
];

export function markersToCsv(
  markers: { timecode: string; comment: string; hashtag: string }[],
) {
  const header = "Timecode,Hashtag,Comment";
  const rows = markers.map((m) => {
    const safe = m.comment.replaceAll('"', '""');
    return `${m.timecode},${m.hashtag},"${safe}"`;
  });
  return [header, ...rows].join("\n");
}

export const PROJECT_TREE = [
  {
    folder: "00_briefing",
    files: ["briefing-gizpay.md", "personas.pdf", "auditoria-atual.pdf"],
  },
  {
    folder: "01_aulas",
    files: [
      "A1_territorio_V1.mp4",
      "A2_conversao_V1.mp4",
      "A3_ux_V1.mp4",
      "A4_ui_V1.mp4",
      "A5_frontend_V1.mp4",
      "A6_auditoria_V1.mp4",
      "A7_redesign_V1.mp4",
      "A8_frameio_V1.mp4",
    ],
  },
  {
    folder: "02_screencasts",
    files: [
      "site-atual-walkthrough.mp4",
      "site-novo-walkthrough.mp4",
      "calculadora-e-form.mp4",
    ],
  },
  {
    folder: "03_aprovacao",
    files: ["share-link-interno", "share-link-cliente"],
  },
];
