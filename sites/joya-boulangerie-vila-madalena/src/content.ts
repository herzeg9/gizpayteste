export const site = {
  name: "Joya Boulangerie",
  slug: "joya-boulangerie-vila-madalena",
  proposalBanner: "Proposta Estúdio Giz — não é o site oficial",
  privacy:
    "Este standby não coleta dados pessoais. Sem formulário, sem newsletter, sem cookies de marketing.",
  whatsappDigits: "5511910389816",
  whatsappDisplay: "(11) 91038-9816",
  whatsappHref: "https://wa.me/5511910389816",
  instagram: "https://www.instagram.com/joyaboulangerie/",
  instagramHandle: "@joyaboulangerie",
  maps: "https://maps.google.com/?q=Joya+Boulangerie+Rua+Fradique+Coutinho+1406+São+Paulo",
  address: {
    street: "Rua Fradique Coutinho, 1406",
    neighborhood: "Vila Madalena",
    city: "São Paulo",
    region: "SP",
    postalCode: "05416-001",
  },
  hours: [
    { days: "Terça a sábado", time: "8h – 22h" },
    { days: "Jantar", time: "18h – 22h" },
    { days: "Domingo", time: "8h – 15h" },
    { days: "Segunda", time: "Fechado" },
  ],
  hoursNote: "Horário publicado em agosto de 2026 (Gastronominho). Confirme no WhatsApp.",
  google: { rating: 4.5, count: 385, source: "Restaurant Guru / Google" },
} as const;

export const copy = {
  headline: {
    text: "O pão da casa, o dia inteiro na Vila Madalena",
    placeholder: true,
  },
  subheadline: {
    text: "Boulangerie de chef: croissant de manhã, cesta de pães à noite. Reserva no WhatsApp.",
    placeholder: true,
  },
  about: {
    text: "Casa da confeiteira Isabela Honda (ex-Tuju), com a sócia Marisol Piccoli. Inaugurada em novembro de 2024 na Fradique Coutinho, 1406, em um imóvel de cerca de 593 m² com 95 lugares — salão, terraço e empório.",
    placeholder: false,
  },
  notThis:
    "Isto não é padoca 24 horas, nem sourdough de garagem, nem restaurante que esconde a padaria.",
  cta: "Reservar no WhatsApp",
};

export const menu = {
  padaria: [
    { name: "Croissant", price: "R$ 14", source: "Gastronominho" },
    { name: "Pain au chocolat", price: "R$ 22", source: "Gastronominho" },
    { name: "Pão de queijo JOYA (80 g)", price: "ação sazonal", source: "Gastronominho ago/2026" },
    { name: "Entremet coco e manga", price: "R$ 33", source: "Estadão / Gastronominho" },
  ],
  brunch: [
    { name: "Bowl de iogurte grego, granola e frutas", price: "R$ 25", source: "Gastronominho" },
    { name: "Shakshuka de linguiça toscana com sourdough", price: "R$ 38", source: "Gastronominho" },
  ],
  jantar: [
    { name: "Legumes grelhados, beurre blanc", price: "R$ 49", source: "Estadão Paladar" },
    { name: "Cogumelos tostados, jus de legumes", price: "R$ 52", source: "Estadão Paladar" },
    { name: "Frutos do mar, creme de crustáceos", price: "R$ 68", source: "Estadão Paladar" },
    { name: "Steak tartare, chips de batata", price: "R$ 77", source: "solanomundo.com.br" },
  ],
  disclaimer:
    "Recorte de preços publicados na imprensa — não é o cardápio completo nem necessariamente o da semana.",
};

export const reviews = [
  {
    quote: "A Joya Boulangerie tem uma variedade muito interessante e um atendimento impecável.",
    author: "Paula Cantagessi",
    source: "Google, via Restaurant Guru",
  },
  {
    quote: "Os entremets são a joia da casa.",
    author: "equipe de salão, citada pela VEJA SP",
    source: "VEJA São Paulo",
  },
  {
    quote: "Google 4,5 · 385 avaliações",
    author: "Restaurant Guru",
    source: "coleta 26/08/2026",
  },
];

export const faq = [
  {
    q: "Precisa reservar?",
    a: "Para o jantar, a imprensa indica reserva pelo WhatsApp (11) 91038-9816. Brunch e padaria: não encontrado se exigem reserva — pergunte no mesmo número.",
    placeholder: false,
  },
  {
    q: "Tem jantar?",
    a: "Sim. Menu para compartilhar, terça a sexta (e, em listagens de 2026, terça a sábado) das 18h às 22h.",
    placeholder: false,
  },
  {
    q: "Fecha segunda?",
    a: "Sim, segundo VEJA SP e Gastronominho. Domingo até as 15h.",
    placeholder: false,
  },
];
