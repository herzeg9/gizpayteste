import { fato, placeholder, type Fonte, type Negocio } from "@/data/schema";

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

  publico: {
    quem: "Vizinho do Sumarezinho e público vegano da Vila Madalena, no celular",
    porque:
      "A casa vive de recorrência de bairro e de brunch de fim de semana; quem chega já sabe o que é comida vegana e decide por proximidade e horário, não por explicação de dieta.",
    implica: [
      "Endereço, horário e como pedir vêm antes de discurso sobre veganismo — o leitor já é convertido.",
      "Tom coloquial de padaria de rua, não linguagem de restaurante ou de causa.",
      "CTA leva ao delivery oficial, que é o canal que a própria casa empurra no Linktree.",
      "Densidade baixa: página curta, seções que se alcançam em um toque.",
    ],
  },

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
  // página com o conflito à vista e fica fora do JSON-LD — inclusive o `iso`,
  // porque schema.org não sabe expressar "as fontes divergem".
  horarios: fato(
    [
      {
        dias: "Terça a domingo",
        horas: "7h – 20h",
        iso: {
          dias: [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          abre: "07:00",
          fecha: "20:00",
        },
      },
      { dias: "Segunda", horas: "as fontes divergem" },
    ],
    restaurantGuru,
    "O Restaurant Guru lista 7h–20h todos os dias, incluindo segunda; o HappyCow indica que fecha segunda. Confirme a segunda antes de ir.",
  ),

  avaliacao: fato({ nota: 4.6, total: 1313 }, restaurantGuru),

  ctaPrimario: {
    rotulo: "Pedir no delivery oficial",
    rotuloCurto: "Pedir",
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
    // Ilustração nossa, feita na paleta da Padoca. Continua `placeholder`
    // porque é arte do Estúdio Giz, não afirmação sobre o negócio — mas é
    // específica deste lead e não um JPEG genérico reaproveitado.
    heroImagem: placeholder(
      {
        src: "/hero-padoca-vegan.webp",
        alt: "Ilustração de vitrine de padaria vegana: pães rústicos, donuts e cinnamon rolls sobre balcão de madeira, com planta ao fundo",
      },
      "Ilustração do Estúdio Giz na paleta da casa. Não é foto da Padoca Vegan — fotos oficiais dependem de autorização.",
    ),
    previa: placeholder(
      {
        src: "/hero-padoca-vegan.webp",
        alt: "Padoca Vegan — proposta Estúdio Giz",
      },
      "Card de compartilhamento usa a mesma ilustração do hero.",
    ),
    naoEh:
      "Isto não é um app de delivery, nem restaurante de jantar, nem padaria de rede.",
  },

  // `preco` omitido onde a casa não publica valor: o campo é opcional de
  // propósito, e forçar uma lacuna aqui enchia a linha de texto e estourava a
  // tela no celular (achado do parâmetro 3).
  oferta: [
    {
      secao: "Padaria",
      nome: "Pães artesanais",
      descricao: "Produção da casa, 100% vegetal.",
    },
    {
      secao: "Doces",
      nome: "Donuts",
      descricao: "Citados com frequência nas avaliações públicas.",
    },
    {
      secao: "Doces",
      nome: "Cinnamon roll",
      descricao: "Clássico da vitrine, plant-based.",
    },
    {
      secao: "Salão",
      nome: "Brunch",
      descricao: "Servido no salão, com opções completas.",
      preco: fato(
        "R$ 40–60 por pessoa",
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
