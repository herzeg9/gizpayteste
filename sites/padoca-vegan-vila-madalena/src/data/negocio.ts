import {
  fato,
  lacuna,
  placeholder,
  type Fonte,
  type Negocio,
} from "@/data/schema";

const restaurantGuru: Fonte = {
  url: "https://restaurantguru.com.br/Padoca-Vegan-Sao-Paulo",
  veiculo: "Restaurant Guru (ficha verificada pelo proprietário)",
  data: "2026-08-26",
};

const happyCow: Fonte = {
  url: "https://www.happycow.net/reviews/padoca-vegan-sao-paulo-91756",
  veiculo: "HappyCow",
  data: "2026-08-26",
};

const linktree: Fonte = {
  url: "https://linktr.ee/padocavegan",
  veiculo: "Linktree do negócio",
  data: "2026-08-26",
};

const delivery: Fonte = {
  url: "https://delivery.padocavegan.com/padocavegan/padocavegan",
  veiculo: "Delivery oficial",
  data: "2026-08-26",
};

const instagramFonte: Fonte = {
  url: "https://www.instagram.com/padocavegan/",
  veiculo: "Instagram do negócio",
  data: "2026-08-26",
};

export const negocio: Negocio = {
  slug: "padoca-vegan-vila-madalena",
  nome: "Padoca Vegan",
  resumo:
    "Padaria artesanal 100% vegana na Rua Harmonia, Sumarezinho, desde 2017.",
  tipoSchema: "Bakery",
  baseUrl: "https://padoca-vegan-product.vercel.app",

  proposta: {
    faixa: "Proposta Estúdio Giz — não é o site oficial",
    privacidade:
      "Este standby não coleta dados pessoais. Sem formulário, sem newsletter, sem cookies de marketing.",
  },

  endereco: fato(
    {
      logradouro: "Rua Harmonia, 1275",
      bairro: "Sumarezinho / Vila Madalena",
      cidade: "São Paulo",
      uf: "SP",
      cep: "05435-001",
    },
    restaurantGuru,
  ),

  telefone: fato("(11) 2503-5930", restaurantGuru),

  instagram: fato("https://www.instagram.com/padocavegan/", restaurantGuru),

  // O Restaurant Guru (ficha verificada pelo proprietário) publica a grade
  // completa; o HappyCow diz que fecha segunda. Fato com ressalva: vai para a
  // página com o conflito à vista e fica fora do JSON-LD.
  horarios: fato(
    [
      { dias: "Segunda a sexta", horas: "7h – 20h" },
      { dias: "Sábado e domingo", horas: "7h – 20h" },
    ],
    restaurantGuru,
    "O Restaurant Guru lista 7h–20h todos os dias; o HappyCow indica que fecha segunda. Confirme a segunda antes de ir.",
  ),

  avaliacao: fato({ nota: 4.6, total: 1313 }, restaurantGuru),

  ctaPrimario: {
    rotulo: "Pedir no delivery oficial",
    url: "https://delivery.padocavegan.com/padocavegan/padocavegan",
    fonte: linktree,
  },

  ctaSecundario: {
    rotulo: "Ver no Instagram",
    url: "https://www.instagram.com/padocavegan/",
    fonte: instagramFonte,
  },

  copy: {
    wordmark: "Padoca Vegan",
    chapeu: "Sumarezinho, Vila Madalena — São Paulo",
    headline: placeholder(
      ["Padaria artesanal", "100% vegana"],
      "Título de vitrine escrito pelo Estúdio Giz — não é copy oficial da casa.",
    ),
    subheadline: placeholder(
      "Pães, donuts, cinnamon rolls e brunch 100% vegano na Rua Harmonia, a passos do metrô Vila Madalena.",
      "Resumo escrito a partir da coleta; a casa não publica esta frase.",
    ),
    sobre: fato(
      "Padaria artesanal vegana. “Começamos em 2017 e estamos crescendo desde então.” A casa é 100% plant-based e fica no Sumarezinho, perto da estação Vila Madalena.",
      linktree,
    ),
    heroImagem: placeholder(
      {
        src: "/hero-placeholder.jpg",
        alt: "Vitrine de padaria — imagem genérica, não é foto da casa",
      },
      "Fotos oficiais da Padoca Vegan não foram republicadas neste standby.",
    ),
    naoEh:
      "Isto não é um app de delivery, nem restaurante de jantar, nem padaria de rede.",
  },

  cardapio: [
    {
      nome: "Pães artesanais",
      descricao: "Produção da casa, 100% vegetal.",
      preco: lacuna("Preço no balcão — a casa não publica tabela."),
    },
    {
      nome: "Donuts",
      descricao: "Citados com frequência nas avaliações públicas.",
      preco: lacuna("Preço no delivery oficial."),
    },
    {
      nome: "Cinnamon roll",
      descricao: "Clássico da vitrine, plant-based.",
      preco: lacuna("Preço no delivery oficial."),
    },
    {
      nome: "Brunch",
      descricao: "Servido no salão.",
      preco: fato(
        "cerca de R$ 40–60 por pessoa",
        restaurantGuru,
        "Faixa por pessoa informada na ficha, não é preço de item.",
      ),
    },
  ],

  depoimentos: [
    {
      texto: "Apaixonada pela Padoca Vegan, tudo muito caprichado e delicioso!",
      autor: "Beatriz Oliveira, Google",
      fonte: restaurantGuru,
    },
    {
      texto: "Casa 100% vegana, sem nenhum ingrediente de origem animal.",
      autor: "Ficha HappyCow",
      fonte: happyCow,
    },
  ],

  faq: [
    {
      pergunta: "Como peço?",
      resposta:
        "Pelo delivery oficial da casa, com entrega e retirada. O Linktree também aponta para iFood.",
    },
    {
      pergunta: "Abre na segunda?",
      resposta:
        "As fontes divergem: o Restaurant Guru lista 7h–20h todos os dias e o HappyCow indica que fecha segunda. Confirme no Instagram antes de ir.",
      emAberto: true,
    },
    {
      pergunta: "Onde fica?",
      resposta:
        "Rua Harmonia, 1275 — Sumarezinho / Vila Madalena, perto da estação Vila Madalena.",
    },
  ],
};

/** Fontes citadas no rodapé — a proposta mostra de onde tirou cada coisa. */
export const fontesUsadas: readonly Fonte[] = [
  restaurantGuru,
  happyCow,
  linktree,
  delivery,
  instagramFonte,
];
