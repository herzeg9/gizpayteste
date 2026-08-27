/**
 * Contrato de dados do standby. Espelha a tabela Evidências de `coleta.json`:
 * nenhum fato existe sem URL e data.
 */

export type Fonte = {
  /** URL pública consultada. */
  url: string;
  /** Veículo: "VEJA SP", "Restaurant Guru", "Instagram do negócio". */
  veiculo: string;
  /** Data da consulta, `YYYY-MM-DD`. */
  data: string;
};

/**
 * Dado público verificado. Só isto pode virar JSON-LD.
 * `ressalva` marca fato com fonte concorrente (ex.: um veículo publica outro
 * horário). Continua publicável no site, mas fica fora do dado estruturado.
 */
export type Fato<T> = {
  estado: "fato";
  valor: T;
  fonte: Fonte;
  ressalva?: string;
};

/** Inventado para o layout respirar. Sempre com badge visível. */
export type Placeholder<T> = { estado: "placeholder"; valor: T; motivo: string };

/** Não encontrado, ou fontes divergentes. Publicar o conflito, nunca a média. */
export type Lacuna = { estado: "lacuna"; motivo: string; fontes: readonly Fonte[] };

export type Campo<T> = Fato<T> | Placeholder<T> | Lacuna;

export function fato<T>(valor: T, fonte: Fonte, ressalva?: string): Fato<T> {
  return { estado: "fato", valor, fonte, ressalva };
}

export function placeholder<T>(valor: T, motivo: string): Placeholder<T> {
  return { estado: "placeholder", valor, motivo };
}

export function lacuna(motivo: string, fontes: readonly Fonte[] = []): Lacuna {
  return { estado: "lacuna", motivo, fontes };
}

export function ehFato<T>(campo: Campo<T>): campo is Fato<T> {
  return campo.estado === "fato";
}

export function ehPlaceholder<T>(campo: Campo<T>): campo is Placeholder<T> {
  return campo.estado === "placeholder";
}

export function ehLacuna<T>(campo: Campo<T>): campo is Lacuna {
  return campo.estado === "lacuna";
}

/** Valor apenas quando verificado. */
export function apenasFato<T>(campo: Campo<T> | undefined): T | undefined {
  return campo && ehFato(campo) ? campo.valor : undefined;
}

/**
 * Fato sem fonte concorrente. É o que pode virar dado estruturado:
 * schema.org não tem como expressar "as fontes divergem".
 */
export function fatoFirme<T>(campo: Campo<T> | undefined): T | undefined {
  return campo && ehFato(campo) && !campo.ressalva ? campo.valor : undefined;
}

/** Valor renderizável: fato ou placeholder. Lacuna não tem valor. */
export function valorExibivel<T>(campo: Campo<T>): T | undefined {
  return ehLacuna(campo) ? undefined : campo.valor;
}

export type Endereco = {
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
};

export type Horario = { dias: string; horas: string };

export type Avaliacao = { nota: number; total: number };

/** Um CTA sem fonte não vai ao ar: o canal precisa ser público e datado. */
export type Cta = { rotulo: string; url: string; fonte: Fonte };

export type ItemCardapio = {
  nome: string;
  descricao: string;
  preco: Campo<string>;
};

export type Depoimento = {
  texto: string;
  autor: string;
  fonte: Fonte;
};

export type Pergunta = {
  pergunta: string;
  resposta: string;
  /** `true` quando a resposta descreve uma lacuna, não um fato fechado. */
  emAberto?: boolean;
};

export type Imagem = { src: string; alt: string };

/**
 * Texto de vitrine. Também é `Campo`: headline inventada é placeholder,
 * frase do dono citada na imprensa é fato.
 */
export type Copy = {
  wordmark: string;
  chapeu: string;
  headline: Campo<readonly string[]>;
  subheadline: Campo<string>;
  sobre: Campo<string>;
  heroImagem: Campo<Imagem>;
  /** "Isto não é…" — evita o standby virar outra coisa. */
  naoEh: string;
};

/**
 * Forma única de todo standby. Trocar o lead troca só este objeto —
 * layout, SEO e verificação continuam iguais.
 */
export type Negocio = {
  slug: string;
  nome: string;
  /** Uma linha, sem promessa que a coleta não sustente. */
  resumo: string;
  /** Tipo schema.org: Bakery, Restaurant, BeautySalon, Dentist… */
  tipoSchema: string;
  baseUrl: string;
  proposta: {
    faixa: string;
    privacidade: string;
  };
  endereco: Campo<Endereco>;
  telefone: Campo<string>;
  instagram: Campo<string>;
  horarios: Campo<readonly Horario[]>;
  avaliacao: Campo<Avaliacao>;
  ctaPrimario: Cta;
  ctaSecundario?: Cta;
  copy: Copy;
  cardapio: readonly ItemCardapio[];
  depoimentos: readonly Depoimento[];
  faq: readonly Pergunta[];
};
