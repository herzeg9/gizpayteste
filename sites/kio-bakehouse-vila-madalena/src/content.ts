export const site = {
  name: "Kio Bakehouse",
  slug: "kio-bakehouse-vila-madalena",
  proposalBanner: "Proposta Estúdio Giz — não é o site oficial",
  privacy:
    "Este standby não coleta dados pessoais. Sem formulário, sem newsletter, sem cookies de marketing.",
  phoneDisplay: "(11) 94556-6894",
  phoneNote: "Ficha VEJA SP — não confirmado como WhatsApp de pedidos",
  instagram: "https://www.instagram.com/kio.bakehouse/",
  instagramHandle: "@kio.bakehouse",
  maps: "https://maps.google.com/?q=Kio+Bakehouse+Rua+Aspicuelta+300+São+Paulo",
  address: {
    street: "Rua Aspicuelta, 300",
    neighborhood: "Vila Madalena",
    city: "São Paulo",
    region: "SP",
    postalCode: "05433-010",
  },
  hours: [
    { days: "Terça a sexta", time: "10h – 18h" },
    { days: "Sábado e domingo", time: "10h – 17h" },
    { days: "Segunda", time: "Fechado" },
  ],
  hoursNote:
    "Horário VEJA SP e CNN (ago–set/2025). O Estadão Paladar também listou 8h em dia de semana — confirme no Instagram.",
  google: { rating: 4.4, count: 274, source: "Restaurant Guru / Google" },
  ifoodNote: "Delivery via iFood citado pela CNN — atalho, não é a marca.",
} as const;

export const copy = {
  wordmark: "Kio",
  kicker: "Vila Madalena, São Paulo",
  navCta: "Instagram",
  headline: {
    line1: "O croissant da fila.",
    line2: "Aspicuelta, 300.",
    placeholder: true,
  },
  subheadline: {
    text: "Bakehouse do chef Henrique Yukio Ide: folhado clássico, três chocolates, pão de queijo em croissant. Salão pequeno — leve para viagem.",
    placeholder: true,
  },
  heroImage: {
    src: "/hero-placeholder.jpg",
    alt: "Viennoiserie — foto genérica, não é da casa",
    placeholder: true,
  },
  about: {
    text: "Henrique Yukio Ide (apelido Kio; Top Chef) abriu em 2024 na Aspicuelta, 300. Especialidade: viennoiserie. Cerca de 24 lugares, 8 mesas. Fonte: VEJA SP, CNN, Estadão.",
    placeholder: false,
  },
  quote: {
    text: "Os folhados me dariam mais possibilidades criativas.",
    author: "Henrique Yukio Ide",
    source: "CNN Brasil",
    placeholder: false,
  },
  notThis:
    "Isto não é boulangerie-restaurante com jantar, nem padoca 24 horas, nem vitrine de shopping.",
  cta: "Ver no Instagram",
  ctaHours: "Ver horários",
};

export const menu = {
  items: [
    {
      name: "Croissant clássico",
      price: "preço no balcão",
      source: "imprensa (sem valor público estável)",
      note: "Folhado da casa.",
      placeholder: true,
    },
    {
      name: "Croissant de três chocolates",
      price: "R$ 19–20",
      source: "VEJA SP / CNN",
      note: "Ao leite, branco e 70%.",
      placeholder: false,
    },
    {
      name: "Cheesecake folhada de morango",
      price: "R$ 28",
      source: "brief / VEJA (peça fotografada)",
      note: "Baunilha e morango sobre folhado.",
      placeholder: false,
    },
    {
      name: "Enroladinho kimchi e Catupiry",
      price: "R$ 28",
      source: "coleta 2026-08-26",
      note: "Salsicha, kimchi, Catupiry.",
      placeholder: false,
    },
    {
      name: "Sanduíche steak tartare",
      price: "R$ 19",
      source: "VEJA SP",
      note: "Croissant com tartare e molho de peixe.",
      placeholder: false,
    },
    {
      name: "Croissant de pão de queijo",
      price: "preço no balcão",
      source: "Estadão Paladar",
      note: "Releitura citada na imprensa.",
      placeholder: true,
    },
  ],
  disclaimer:
    "Recorte de preços publicados na imprensa — não é o cardápio completo nem necessariamente o da semana.",
};

export const reviews = [
  {
    quote: "Crocância e criatividade — melhores folhados de São Paulo",
    author: "júri Folha",
    source: "O Melhor de São Paulo 2025 e 2026",
  },
  {
    quote: "Delícia de croissant, fresquinho e crocante.",
    author: "Marco Catto",
    source: "Google, via Restaurant Guru",
  },
  {
    quote: "Google 4,4 · 274 avaliações",
    author: "Restaurant Guru",
    source: "coleta 26/08/2026",
  },
];

export const faq = [
  {
    q: "Fecha segunda?",
    a: "Sim, segundo VEJA SP e CNN.",
  },
  {
    q: "Tem mesa ou é para viagem?",
    a: "As duas. VEJA lista 24 lugares; Folha descreve 8 mesas para dois. Fim de semana costuma ter fila — leve para viagem.",
  },
  {
    q: "Qual o horário?",
    a: "VEJA/CNN: ter–sex 10h–18h, sáb–dom 10h–17h. O Estadão também publicou 8h em dia de semana. Confirme no Instagram no dia.",
  },
];
