import {
  fato,
  lacuna,
  placeholder,
  type Fonte,
  type Negocio,
} from "@/data/schema";

const veja: Fonte = {
  url: "https://vejasp.abril.com.br/estabelecimento/kio-bakehouse/",
  veiculo: "VEJA SP",
  data: "2026-08-26",
};

const cnn: Fonte = {
  url: "https://www.cnnbrasil.com.br/viagemegastronomia/gastronomia/na-vila-madalena-kio-bakehouse-faz-dos-croissants-verdadeiros-reis/",
  veiculo: "CNN Brasil",
  data: "2026-08-26",
};

const estadao: Fonte = {
  url: "https://www.estadao.com.br/paladar/na-mesa-com-fred/kio-bakehouse-pequena-no-tamanho-grande-na-tecnica/",
  veiculo: "Estadão Paladar",
  data: "2026-08-26",
};

const folha: Fonte = {
  url: "https://www1.folha.uol.com.br/o-melhor-de-sao-paulo/2026/restaurantes-bares-e-cozinha/2026/08/crocancia-e-criatividade-fazem-de-folhados-do-kio-os-melhores-de-sao-paulo.shtml",
  veiculo: "Folha — O Melhor de São Paulo",
  data: "2026-08-26",
};

const restaurantGuru: Fonte = {
  url: "https://restaurantguru.com.br/Kio-Bakehouse-Sao-Paulo",
  veiculo: "Restaurant Guru (bloco Google)",
  data: "2026-08-26",
};

const instagram: Fonte = {
  url: "https://www.instagram.com/kio.bakehouse/",
  veiculo: "Instagram do negócio",
  data: "2026-08-26",
};

export const negocio: Negocio = {
  slug: "kio-bakehouse-vila-madalena",
  nome: "Kio Bakehouse",
  resumo:
    "Bakehouse de folhados na Vila Madalena, do chef Henrique Yukio Ide.",
  tipoSchema: "Bakery",
  baseUrl: "https://kio-bakehouse-product.vercel.app",

  proposta: {
    faixa: "Proposta Estúdio Giz — não é o site oficial",
    privacidade:
      "Este standby não coleta dados pessoais. Sem formulário, sem newsletter, sem cookies de marketing.",
  },

  endereco: fato(
    {
      logradouro: "Rua Aspicuelta, 300",
      bairro: "Vila Madalena",
      cidade: "São Paulo",
      uf: "SP",
      cep: "05433-010",
    },
    veja,
  ),

  telefone: fato(
    "(11) 94556-6894",
    veja,
    "Número da ficha VEJA SP. Não confirmado como canal de pedidos — a coluna Delícia de Conta (2024) dizia que a casa não tinha telefone.",
  ),

  instagram: fato("https://www.instagram.com/kio.bakehouse/", instagram),

  // VEJA e CNN publicam 10h; o Estadão publicou 8h em dia de semana.
  // Fato com ressalva: vai para a página, fica fora do JSON-LD.
  horarios: fato(
    [
      { dias: "Terça a sexta", horas: "10h – 18h" },
      { dias: "Sábado e domingo", horas: "10h – 17h" },
      { dias: "Segunda", horas: "Fechado" },
    ],
    veja,
    "CNN confirma 10h; o Estadão Paladar publicou 8h em dia de semana. Confirme no Instagram antes de ir.",
  ),

  avaliacao: fato({ nota: 4.4, total: 274 }, restaurantGuru),

  ctaPrimario: {
    rotulo: "Ver no Instagram",
    url: "https://www.instagram.com/kio.bakehouse/",
    fonte: instagram,
  },

  copy: {
    wordmark: "Kio",
    chapeu: "Vila Madalena, São Paulo",
    headline: placeholder(
      ["O croissant da fila.", "Aspicuelta, 300."],
      "Título de vitrine escrito pelo Estúdio Giz — não é copy oficial da casa.",
    ),
    subheadline: placeholder(
      "Bakehouse do chef Henrique Yukio Ide: folhado clássico, três chocolates, pão de queijo em croissant. Salão pequeno — leve para viagem.",
      "Resumo escrito a partir da imprensa; a casa não publica esta frase.",
    ),
    sobre: fato(
      "Henrique Yukio Ide (apelido Kio; Top Chef) abriu em 2024 na Aspicuelta, 300. Especialidade: viennoiserie. Cerca de 24 lugares, 8 mesas.",
      veja,
    ),
    heroImagem: placeholder(
      {
        src: "/hero-placeholder.jpg",
        alt: "Viennoiserie — imagem genérica, não é foto da casa",
      },
      "Fotos oficiais da Kio não foram republicadas neste standby.",
    ),
    naoEh:
      "Isto não é boulangerie-restaurante com jantar, nem padoca 24 horas, nem vitrine de shopping.",
  },

  cardapio: [
    {
      nome: "Croissant clássico",
      descricao: "Folhado da casa.",
      preco: lacuna("Preço no balcão — sem valor público estável."),
    },
    {
      nome: "Croissant de três chocolates",
      descricao: "Ao leite, branco e 70%.",
      preco: fato("R$ 19–20", veja, "CNN publicou R$ 20; VEJA, R$ 19."),
    },
    {
      nome: "Cheesecake folhada de morango",
      descricao: "Baunilha e morango sobre folhado.",
      preco: fato("R$ 28", veja),
    },
    {
      nome: "Sanduíche steak tartare",
      descricao: "Croissant com tartare e molho de peixe.",
      preco: fato("R$ 19", veja),
    },
    {
      nome: "Croissant de pão de queijo",
      descricao: "Releitura citada na imprensa.",
      preco: lacuna("Preço não publicado."),
    },
  ],

  depoimentos: [
    {
      texto: "Crocância e criatividade — os melhores folhados de São Paulo.",
      autor: "Júri Folha, 2025 e 2026",
      fonte: folha,
    },
    {
      texto: "Delícia de croissant, fresquinho e crocante.",
      autor: "Marco Catto, Google",
      fonte: restaurantGuru,
    },
    {
      texto: "Os folhados me dariam mais possibilidades criativas.",
      autor: "Henrique Yukio Ide",
      fonte: cnn,
    },
  ],

  faq: [
    {
      pergunta: "Fecha segunda?",
      resposta: "Sim, segundo VEJA SP e CNN.",
    },
    {
      pergunta: "Tem mesa ou é para viagem?",
      resposta:
        "As duas. A VEJA lista 24 lugares e a Folha descreve 8 mesas para dois. Fim de semana costuma ter fila — leve para viagem.",
    },
    {
      pergunta: "Qual o horário?",
      resposta:
        "VEJA e CNN publicam 10h–18h de terça a sexta. O Estadão também listou 8h em dia de semana. Confirme no Instagram no dia.",
      emAberto: true,
    },
  ],
};

/** Fontes citadas no rodapé — a proposta mostra de onde tirou cada coisa. */
export const fontesUsadas: readonly Fonte[] = [
  veja,
  cnn,
  estadao,
  folha,
  restaurantGuru,
  instagram,
];
