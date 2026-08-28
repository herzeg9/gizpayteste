import {
  fato,
  lacuna,
  placeholder,
  type Fonte,
  type Negocio,
} from "@/data/schema";

const gastronominho: Fonte = {
  url: "https://gastronominho.com.br/comidas/2026/08/joya-boulangerie-dia-do-pao-de-queijo-vulari/",
  veiculo: "Gastronominho",
  data: "2026-08-26",
};

const estadao: Fonte = {
  url: "https://www.estadao.com.br/paladar/por-ai/jantar-na-padaria/",
  veiculo: "Estadão Paladar",
  data: "2026-08-26",
};

const veja: Fonte = {
  url: "https://vejasp.abril.com.br/coluna/delicia-de-conta/comer-e-beber-joya-boulangerie-vila-madalena-critica/",
  veiculo: "VEJA SP",
  data: "2026-08-26",
};

const alexFerraz: Fonte = {
  url: "https://alexferraz.com.br/2024/11/15/joya-boulangerie-e-inaugurada-na-vila-madalena/",
  veiculo: "Alex Ferraz (inauguração)",
  data: "2026-08-26",
};

const restaurantGuru: Fonte = {
  url: "https://restaurantguru.com/Joya-Boulangerie-Sao-Paulo",
  veiculo: "Restaurant Guru (bloco Google)",
  data: "2026-08-26",
};

const instagramFonte: Fonte = {
  url: "https://www.instagram.com/joyaboulangerie/",
  veiculo: "Instagram do negócio",
  data: "2026-08-26",
};

export const negocio: Negocio = {
  slug: "joya-boulangerie-vila-madalena",
  nome: "Joya Boulangerie",
  resumo:
    "Boulangerie da confeiteira Isabela Honda na Vila Madalena: padaria de manhã, jantar para compartilhar à noite.",
  tipoSchema: "Bakery",
  baseUrl: "https://joya-boulangerie-product.vercel.app",

  proposta: {
    faixa: "Proposta Estúdio Giz — não é o site oficial",
    privacidade:
      "Este standby não coleta dados pessoais. Sem formulário, sem newsletter, sem cookies de marketing.",
  },

  endereco: fato(
    {
      logradouro: "Rua Fradique Coutinho, 1406",
      bairro: "Vila Madalena",
      cidade: "São Paulo",
      uf: "SP",
      cep: "05416-001",
    },
    gastronominho,
  ),

  telefone: fato("(11) 91038-9816", gastronominho),

  instagram: fato("https://www.instagram.com/joyaboulangerie/", instagramFonte),

  horarios: fato(
    [
      { dias: "Terça a sábado", horas: "8h – 22h" },
      { dias: "Jantar", horas: "18h – 22h" },
      { dias: "Domingo", horas: "8h – 15h" },
      { dias: "Segunda", horas: "Fechado" },
    ],
    gastronominho,
    "Grade publicada em agosto de 2026. O jantar aparece como terça a sexta em fontes anteriores. Confirme no WhatsApp.",
  ),

  avaliacao: fato({ nota: 4.5, total: 385 }, restaurantGuru),

  ctaPrimario: {
    rotulo: "Reservar no WhatsApp",
    url: "https://wa.me/5511910389816",
    fonte: gastronominho,
  },

  ctaSecundario: {
    rotulo: "Ver no Instagram",
    url: "https://www.instagram.com/joyaboulangerie/",
    fonte: instagramFonte,
  },

  copy: {
    wordmark: "Joya",
    chapeu: "Vila Madalena, São Paulo",
    headline: placeholder(
      ["O pão da casa,", "o dia inteiro."],
      "Título de vitrine escrito pelo Estúdio Giz — não é copy oficial da casa.",
    ),
    subheadline: placeholder(
      "Boulangerie de chef: croissant de manhã, cesta de pães à noite. Um convite para uma manhã tranquila ou um jantar para compartilhar.",
      "Resumo escrito a partir da imprensa; a casa não publica esta frase.",
    ),
    sobre: fato(
      "Casa da confeiteira Isabela Honda (ex-Tuju), com a sócia Marisol Piccoli. Inaugurada em novembro de 2024 na Fradique Coutinho, 1406, em um imóvel de cerca de 593 m² com 95 lugares — salão, terraço e empório.",
      alexFerraz,
    ),
    heroImagem: placeholder(
      {
        src: "/hero-placeholder.jpg",
        alt: "Pães e viennoiserie — imagem genérica, não é foto da casa",
      },
      "Fotos oficiais da Joya não foram republicadas neste standby.",
    ),
    naoEh:
      "Isto não é padoca 24 horas, nem sourdough de garagem, nem restaurante que esconde a padaria.",
  },

  cardapio: [
    {
      secao: "Padaria",
      nome: "Croissant",
      descricao: "Viennoiserie da casa.",
      preco: fato("R$ 14", gastronominho),
    },
    {
      secao: "Padaria",
      nome: "Pain au chocolat",
      descricao: "Folhado com chocolate.",
      preco: fato("R$ 22", gastronominho),
    },
    {
      secao: "Padaria",
      nome: "Entremet coco e manga",
      descricao: "Os entremets são a assinatura da confeitaria.",
      preco: fato("R$ 33", estadao),
    },
    {
      secao: "Padaria",
      nome: "Pão de queijo JOYA (80 g)",
      descricao: "Ação sazonal citada em agosto de 2026.",
      preco: lacuna("Preço de ação sazonal — não publicado."),
    },
    {
      secao: "Brunch",
      nome: "Bowl de iogurte grego, granola e frutas",
      descricao: "Servido no salão.",
      preco: fato("R$ 25", gastronominho),
    },
    {
      secao: "Brunch",
      nome: "Shakshuka de linguiça toscana com sourdough",
      descricao: "Prato de brunch.",
      preco: fato("R$ 38", gastronominho),
    },
    {
      secao: "Jantar",
      nome: "Cogumelos tostados, jus de legumes",
      descricao: "Menu para compartilhar.",
      preco: fato("R$ 52", estadao),
    },
    {
      secao: "Jantar",
      nome: "Frutos do mar, creme de crustáceos",
      descricao: "Menu para compartilhar.",
      preco: fato("R$ 68", estadao),
    },
  ],

  depoimentos: [
    {
      texto:
        "A Joya Boulangerie tem uma variedade muito interessante e um atendimento impecável.",
      autor: "Paula Cantagessi, Google",
      fonte: restaurantGuru,
    },
    {
      texto: "Os entremets são a joia da casa.",
      autor: "VEJA São Paulo",
      fonte: veja,
    },
  ],

  faq: [
    {
      pergunta: "Precisa reservar?",
      resposta:
        "Para o jantar, a imprensa indica reserva pelo WhatsApp (11) 91038-9816. Para brunch e padaria não encontramos exigência de reserva — pergunte no mesmo número.",
      emAberto: true,
    },
    {
      pergunta: "Tem jantar?",
      resposta:
        "Sim. Menu para compartilhar, das 18h às 22h. As listagens divergem entre terça a sexta e terça a sábado.",
      emAberto: true,
    },
    {
      pergunta: "Fecha segunda?",
      resposta: "Sim, segundo VEJA SP e Gastronominho. Domingo até as 15h.",
    },
  ],
};

/** Fontes citadas no rodapé — a proposta mostra de onde tirou cada coisa. */
export const fontesUsadas: readonly Fonte[] = [
  gastronominho,
  estadao,
  veja,
  alexFerraz,
  restaurantGuru,
  instagramFonte,
];
