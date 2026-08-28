import { fato, placeholder, type Fonte, type Negocio } from "@/data/schema";

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

  publico: {
    quem: "Quem atravessa a cidade por um croissant, e chega disposto a enfrentar fila",
    porque:
      "A Folha elegeu os folhados da casa os melhores de São Paulo em 2025 e 2026, e o salão tem 8 mesas. Quem procura o Kio já sabe o que quer — o que ele precisa saber é se está aberto, se vai pegar fila e se dá para levar.",
    implica: [
      "Horário e o aviso de fila vêm antes do cardápio: a dúvida real é logística, não escolha.",
      "Deixar explícito que o salão é pequeno e que levar para viagem é normal — evita frustração na porta.",
      "Tom de ofício, de padeiro, não de restaurante premiado: o prêmio é fato citado, não adjetivo.",
      "CTA no Instagram, que é onde a casa publica a fornada do dia — não no telefone, que não é canal de pedido confirmado.",
    ],
  },

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
  // A divergência aqui é só na **abertura de dia de semana**: VEJA e CNN dizem
  // 10h, o Estadão publicou 8h. Então terça a sexta fica sem `iso` e não vai
  // para o dado estruturado; sábado, domingo e a segunda fechada são
  // inequívocos e entram. Dia fechado é `00:00`–`00:00`, convenção do Google.
  horarios: fato(
    [
      { dias: "Terça a sexta", horas: "10h – 18h (fontes divergem na abertura)" },
      {
        dias: "Sábado e domingo",
        horas: "10h – 17h",
        iso: { dias: ["Saturday", "Sunday"], abre: "10:00", fecha: "17:00" },
      },
      {
        dias: "Segunda",
        horas: "Fechado",
        iso: { dias: ["Monday"], abre: "00:00", fecha: "00:00" },
      },
    ],
    veja,
    "CNN confirma 10h; o Estadão Paladar publicou 8h em dia de semana. Confirme no Instagram antes de ir.",
  ),

  avaliacao: fato({ nota: 4.4, total: 274 }, restaurantGuru),

  ctaPrimario: {
    rotulo: "Ver no Instagram",
    rotuloCurto: "Instagram",
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
    // Ilustração nossa, na paleta da Kio. Continua `placeholder` porque é arte
    // do Estúdio Giz, não afirmação sobre o negócio — mas é deste lead: o JPEG
    // que servia aos três standbys foi removido.
    heroImagem: placeholder(
      {
        src: "/hero-kio-bakehouse.webp",
        alt: "Ilustração de balcão de viennoiserie: croissants com camadas visíveis numa bandeja, café espresso ao lado e a boca do forno ao fundo",
      },
      "Ilustração do Estúdio Giz na paleta da casa. Não é foto da Kio — fotos oficiais dependem de autorização.",
    ),
    previa: placeholder(
      {
        src: "/hero-kio-bakehouse.webp",
        alt: "Kio Bakehouse — proposta Estúdio Giz",
      },
      "Card de compartilhamento usa a mesma ilustração do hero.",
    ),
    naoEh:
      "Isto não é boulangerie-restaurante com jantar, nem padoca 24 horas, nem vitrine de shopping.",
  },

  // `preco` omitido onde não há valor público: o campo é opcional, e forçar
  // lacuna enchia a linha de texto e estourava a tela no celular.
  oferta: [
    {
      secao: "Folhados",
      nome: "Croissant clássico",
      descricao: "O folhado da casa, o que forma a fila.",
    },
    {
      secao: "Folhados",
      nome: "Croissant de três chocolates",
      descricao: "Ao leite, branco e 70%.",
      preco: fato("R$ 19–20", veja, "CNN publicou R$ 20; VEJA, R$ 19."),
    },
    {
      secao: "Folhados",
      nome: "Croissant de pão de queijo",
      descricao: "Releitura citada na imprensa.",
    },
    {
      secao: "Doces",
      nome: "Cheesecake folhada de morango",
      descricao: "Baunilha e morango sobre folhado.",
      preco: fato("R$ 28", veja),
    },
    {
      secao: "Salgados",
      nome: "Sanduíche de steak tartare",
      descricao: "Croissant com tartare e molho de peixe.",
      preco: fato("R$ 19", veja),
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
