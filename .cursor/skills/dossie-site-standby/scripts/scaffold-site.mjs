#!/usr/bin/env node
/**
 * Cria `sites/<slug>/` no padrão de arquitetura, com a camada de dados
 * pré-preenchida a partir de `prospeccao/leads/<slug>/coleta.json`.
 *
 *   node scaffold-site.mjs --slug padoca-vegan-vila-madalena \
 *     --nome "Padoca Vegan" --tipo-schema Bakery
 *
 * O `negocio.ts` sai como RASCUNHO: onde a coleta não permite decidir, o
 * campo vira `lacuna("PREENCHER: …")`. O agente revisa antes de buildar —
 * o scaffold não inventa fato.
 */
import { cp, mkdir, readFile, writeFile, rename, access } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL("../../../../", import.meta.url)));
const TEMPLATE = resolve(fileURLToPath(new URL("../template", import.meta.url)));

function arg(flag, fallback = "") {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

async function existe(caminho) {
  try {
    await access(caminho);
    return true;
  } catch {
    return false;
  }
}

function aspas(texto) {
  return JSON.stringify(String(texto ?? ""));
}

/** Nome de variável estável para uma fonte, a partir do host. */
function nomeFonte(url, usados) {
  let base = "fonte";
  try {
    base = new URL(url).hostname
      .replace(/^www\./, "")
      .split(".")[0]
      .replace(/[^a-z0-9]/gi, "");
  } catch {
    /* url inválida vira "fonte" */
  }
  if (!base || /^\d/.test(base)) base = `fonte${base}`;
  let nome = base;
  let n = 2;
  while (usados.has(nome)) nome = `${base}${n++}`;
  usados.add(nome);
  return nome;
}

function veiculoDe(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "fonte não identificada";
  }
}

/** `Rua Harmonia, 1275 — Sumarezinho / Vila Madalena, São Paulo, SP, 05435-001` */
function separarEndereco(valor) {
  const texto = String(valor ?? "");
  const cep = texto.match(/\d{5}-?\d{3}/)?.[0] ?? "";
  const logradouro = texto.split(/[—,]/)[0]?.trim() ?? "";
  return { logradouro, cep, bruto: texto };
}

function blocoFontes(evidencias) {
  const usados = new Set();
  const porUrl = new Map();
  const linhas = [];
  for (const ev of evidencias) {
    if (!ev.url || porUrl.has(ev.url)) continue;
    const nome = nomeFonte(ev.url, usados);
    porUrl.set(ev.url, nome);
    linhas.push(
      `const ${nome}: Fonte = {\n  url: ${aspas(ev.url)},\n  veiculo: ${aspas(veiculoDe(ev.url))},\n  data: ${aspas(ev.data ?? "")},\n};`,
    );
  }
  return { linhas, porUrl };
}

function campoDe(evidencias, porUrl, nomeCampo, alternativas = []) {
  const chaves = [nomeCampo, ...alternativas];
  const ev = evidencias.find((e) => chaves.includes(e.campo));
  if (!ev) return null;
  return { ev, fonte: porUrl.get(ev.url) };
}

function gerarNegocio({ slug, nome, tipoSchema, baseUrl, coleta }) {
  const evidencias = coleta?.evidencias ?? [];
  const { linhas, porUrl } = blocoFontes(evidencias);

  const endereco = campoDe(evidencias, porUrl, "endereco");
  const telefone = campoDe(evidencias, porUrl, "telefone", ["whatsapp"]);
  const insta = campoDe(evidencias, porUrl, "instagram", ["contato_publico"]);
  const horario = campoDe(evidencias, porUrl, "horario");
  const avaliacao = campoDe(evidencias, porUrl, "google_nota");

  const partes = separarEndereco(endereco?.ev.valor);
  const lacunas = (coleta?.lacunas ?? []).map((l) => `// Lacuna da coleta: ${l}`);
  /** Comentário de uma linha, indentado como propriedade do objeto. */
  const nota = (texto) => `  // Coleta: ${String(texto).replace(/\s*\n\s*/g, " ")}\n`;

  const enderecoTs = endereco
    ? `fato(
    {
      // Coleta: ${partes.bruto}
      logradouro: ${aspas(partes.logradouro)},
      bairro: "PREENCHER",
      cidade: "São Paulo",
      uf: "SP",
      cep: ${aspas(partes.cep)},
    },
    ${endereco.fonte},
  )`
    : `lacuna("PREENCHER: endereço não veio na coleta.")`;

  const telefoneTs = telefone
    ? `fato(${aspas(telefone.ev.valor)}, ${telefone.fonte})`
    : `lacuna("PREENCHER: telefone público não encontrado.")`;

  const instaTs =
    insta && /instagram\.com/.test(String(insta.ev.valor))
      ? `fato(${aspas(insta.ev.valor)}, ${insta.fonte})`
      : `lacuna("PREENCHER: URL do Instagram.")`;

  const horarioTs = horario
    ? `${nota(horario.ev.valor)}  horarios: lacuna(
    "PREENCHER: transformar em grade. Se as fontes divergirem, use fato(..., fonte, ressalva).",
    [${horario.fonte}],
  ),`
    : `  horarios: lacuna("PREENCHER: horário não encontrado."),`;

  const avaliacaoTs = avaliacao
    ? `${nota(avaliacao.ev.valor)}  avaliacao: lacuna("PREENCHER: fato({ nota, total }, ${avaliacao.fonte}).", [${avaliacao.fonte}]),`
    : `  avaliacao: lacuna("PREENCHER: nota do Google."),`;

  const primeiraFonte = [...porUrl.values()][0] ?? null;

  return `import {
  fato,
  lacuna,
  placeholder,
  type Fonte,
  type Negocio,
} from "@/data/schema";

// RASCUNHO gerado por scaffold-site.mjs a partir de coleta.json.
// Revise todo "PREENCHER" antes do build — o scaffold não inventa fato.
${lacunas.length ? `${lacunas.join("\n")}\n\n` : ""}${linhas.join("\n\n")}

export const negocio: Negocio = {
  slug: ${aspas(slug)},
  nome: ${aspas(nome)},
  resumo: "PREENCHER: uma linha que a coleta sustente.",
  tipoSchema: ${aspas(tipoSchema)},
  baseUrl: ${aspas(baseUrl)},

  proposta: {
    faixa: "Proposta Estúdio Giz — não é o site oficial",
    privacidade:
      "Este standby não coleta dados pessoais. Sem formulário, sem newsletter, sem cookies de marketing.",
  },

  endereco: ${enderecoTs},
  telefone: ${telefoneTs},
  instagram: ${instaTs},
${horarioTs}
${avaliacaoTs}

  ctaPrimario: {
    rotulo: "PREENCHER",
    url: "PREENCHER",
    fonte: ${primeiraFonte ?? "{ url: \"PREENCHER\", veiculo: \"PREENCHER\", data: \"PREENCHER\" }"},
  },

  copy: {
    wordmark: ${aspas(nome)},
    chapeu: "PREENCHER: bairro, cidade",
    headline: placeholder(
      ["PREENCHER", "PREENCHER"],
      "Título de vitrine do Estúdio Giz — não é copy oficial.",
    ),
    subheadline: placeholder(
      "PREENCHER",
      "Resumo escrito a partir da coleta; a casa não publica esta frase.",
    ),
    sobre: lacuna("PREENCHER: parágrafo com fonte."),
    heroImagem: placeholder(
      { src: "/hero-placeholder.jpg", alt: "PREENCHER — imagem genérica" },
      "Fotos oficiais não foram republicadas neste standby.",
    ),
    naoEh: "PREENCHER: isto não é …",
  },

  cardapio: [],
  depoimentos: [],
  faq: [],
};

/** Fontes citadas no rodapé — a proposta mostra de onde tirou cada coisa. */
export const fontesUsadas: readonly Fonte[] = [${[...porUrl.values()].join(", ")}];
`;
}

const slug = arg("--slug");
const nome = arg("--nome");
if (!slug || !nome) {
  console.error(
    'uso: scaffold-site.mjs --slug <slug> --nome "<Nome>" [--tipo-schema Bakery] [--base-url https://…]',
  );
  process.exit(2);
}

const destino = join(ROOT, "sites", slug);
if (await existe(destino)) {
  console.error(`já existe: sites/${slug} — remova antes de reescafoldar`);
  process.exit(2);
}

const tipoSchema = arg("--tipo-schema", "LocalBusiness");
const baseUrl = arg("--base-url", `https://${slug.split("-").slice(0, 2).join("-")}-product.vercel.app`);

await cp(TEMPLATE, destino, { recursive: true });
await rename(join(destino, "gitignore"), join(destino, ".gitignore"));

const pkgPath = join(destino, "package.json");
const pkg = await readFile(pkgPath, "utf8");
await writeFile(pkgPath, pkg.replaceAll("__SLUG__", slug));

const caminhoColeta = join(ROOT, "prospeccao/leads", slug, "coleta.json");
let coleta = null;
if (await existe(caminhoColeta)) {
  coleta = JSON.parse(await readFile(caminhoColeta, "utf8"));
}

await mkdir(join(destino, "src/data"), { recursive: true });
await writeFile(
  join(destino, "src/data/negocio.ts"),
  gerarNegocio({ slug, nome, tipoSchema, baseUrl, coleta }),
);

const pendencias = coleta ? "revise os PREENCHER em src/data/negocio.ts" : "sem coleta.json: preencha src/data/negocio.ts à mão";

process.stdout.write(
  `${JSON.stringify(
    {
      ok: true,
      criado: `sites/${slug}`,
      baseUrl,
      evidenciasUsadas: coleta?.evidencias?.length ?? 0,
      proximo: [
        pendencias,
        `cd sites/${slug} && npm install`,
        `npm run build`,
        `node .cursor/skills/dossie-site-standby/scripts/verificar-arquitetura.mjs --slug ${slug}`,
      ],
    },
    null,
    2,
  )}\n`,
);
