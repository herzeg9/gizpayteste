#!/usr/bin/env node
/**
 * Etapa 2: gate + fatos a partir de coleta.json.
 *
 *   node montar-dossie.mjs gate --slug padoca-vegan-vila-madalena
 *   node montar-dossie.mjs fatos --slug padoca-vegan-vila-madalena
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

function arg(flag, fallback = "") {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

function print(obj) {
  process.stdout.write(`${JSON.stringify(obj, null, 2)}\n`);
}

function leadDir(slug) {
  return join("prospeccao/leads", slug);
}

async function loadJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

function evidenciasMap(coleta) {
  const out = {};
  for (const e of coleta.evidencias || []) {
    if (!out[e.campo]) out[e.campo] = [];
    out[e.campo].push(e);
  }
  return out;
}

function first(map, campo) {
  return (map[campo] || [])[0] || null;
}

function contato(map) {
  return (
    first(map, "contato_publico") ||
    first(map, "instagram") ||
    first(map, "whatsapp") ||
    first(map, "telefone")
  );
}

function gate(coleta, files) {
  const map = evidenciasMap(coleta);
  const nome = first(map, "nome") || (coleta.nome ? { valor: coleta.nome } : null);
  const endereco = first(map, "endereco");
  const bairro = coleta.bairro || null;
  const site = first(map, "site_ou_ausencia");
  const c = contato(map);
  const missing = [];
  if (!nome) missing.push("nome");
  if (!bairro) missing.push("bairro");
  if (!c) missing.push("contato_publico");
  const arquivos = {
    coleta: files.coleta,
    brief: files.brief,
    dossie: files.dossie,
    inputs: files.inputs,
    designSystem: files.designSystem,
    roteiro: files.roteiro,
  };
  return {
    slug: coleta.slug,
    nome: nome?.valor || coleta.nome || "",
    bairro,
    contato: c ? { campo: c.campo, valor: c.valor, url: c.url } : null,
    endereco: endereco?.valor || null,
    site: site?.valor || null,
    lacunas: coleta.lacunas || [],
    evidencias: (coleta.evidencias || []).length,
    missing,
    arquivos,
    prontoParaDossie: missing.length === 0 && files.coleta,
    prontoParaSuperdesign:
      missing.length === 0 &&
      files.dossie &&
      files.inputs &&
      files.designSystem &&
      files.roteiro,
  };
}

async function fileExists(path) {
  try {
    await readFile(path);
    return true;
  } catch {
    return false;
  }
}

async function leadFiles(slug) {
  const dir = leadDir(slug);
  const paths = {
    coleta: join(dir, "coleta.json"),
    brief: join(dir, "brief.md"),
    dossie: join(dir, "dossie.md"),
    inputs: join(dir, "inputs.md"),
    designSystem: join(dir, "design-system.md"),
    roteiro: join(dir, "roteiro-iteracao.md"),
    fatos: join(dir, "fatos-dossie.json"),
  };
  const exists = {};
  for (const [k, p] of Object.entries(paths)) {
    exists[k] = await fileExists(p);
  }
  return { dir, paths, exists };
}

function fatosFromColeta(coleta) {
  const map = evidenciasMap(coleta);
  const pick = (campo) =>
    (map[campo] || []).map((e) => ({
      valor: e.valor,
      url: e.url,
      data: e.data,
    }));
  return {
    versao: 1,
    slug: coleta.slug,
    nome: coleta.nome,
    bairro: coleta.bairro,
    geradoEm: new Date().toISOString(),
    campos: {
      nome: pick("nome"),
      endereco: pick("endereco"),
      instagram: pick("instagram"),
      telefone: pick("telefone"),
      whatsapp: pick("whatsapp"),
      horario: pick("horario"),
      site_ou_ausencia: pick("site_ou_ausencia"),
      google_nota: pick("google_nota"),
      contato_publico: pick("contato_publico"),
    },
    lacunas: coleta.lacunas || [],
    paginas: (coleta.paginas || []).map((p) => ({
      url: p.url,
      status: p.status,
      title: p.title,
      veredito: p.site?.veredito,
    })),
    dns: coleta.dns || [],
  };
}

const USAGE = `uso: montar-dossie.mjs gate|fatos --slug <slug>`;

const cmd = process.argv[2];
const slug = arg("--slug");
if (!cmd || cmd === "help" || !slug) {
  console.error(USAGE);
  process.exit(cmd === "help" ? 0 : 2);
}

const files = await leadFiles(slug);
if (!files.exists.coleta) {
  console.error(`Falta ${files.paths.coleta} — rodar etapa 1`);
  process.exit(2);
}
const coleta = await loadJson(files.paths.coleta);

if (cmd === "gate") {
  print(gate(coleta, files.exists));
} else if (cmd === "fatos") {
  const fatos = fatosFromColeta(coleta);
  await mkdir(files.dir, { recursive: true });
  await writeFile(files.paths.fatos, `${JSON.stringify(fatos, null, 2)}\n`);
  print({ wrote: files.paths.fatos, ...gate(coleta, { ...files.exists, fatos: true }) });
} else {
  console.error(USAGE);
  process.exit(2);
}
