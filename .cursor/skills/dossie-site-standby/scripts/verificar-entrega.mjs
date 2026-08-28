#!/usr/bin/env node
/**
 * Parâmetro 5 (entrega): portão de qualidade antes de publicar.
 *
 * Consolida o que os parâmetros 2, 3 e 4 exigem. O parâmetro 1 tem portão
 * próprio (`verificar-arquitetura.mjs`) e continua separado de propósito:
 * falhas de razão diferente na mesma saída ficam ilegíveis.
 *
 *   node verificar-entrega.mjs --slug <slug> --url http://localhost:3000
 *
 * Sem --url roda só o que se prova por arquivo. Exit 1 = não entrega.
 */
import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL("../../../../", import.meta.url)));
const SITES = join(ROOT, "sites");

function arg(flag, fallback = "") {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

const checks = [];
const ok = (id, detalhe) => checks.push({ id, ok: true, detalhe });
const falha = (id, detalhe) => checks.push({ id, ok: false, detalhe });
/** Aproximação declarada: correlaciona, não prova. */
const proxy = (id, detalhe) => checks.push({ id, ok: true, proxy: true, detalhe });

async function ler(caminho) {
  try {
    return await readFile(caminho, "utf8");
  } catch {
    return null;
  }
}

/** Remove comentários antes de auditar código: comentário não é comportamento. */
function semComentarios(fonte) {
  return fonte
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "")
    .split("\n")
    .filter((l) => !/^\s*(\/\/|\*)/.test(l))
    .join("\n");
}

// ---------------------------------------------------------------- parâmetro 2

async function auditarFuncionalidade(dir) {
  const negocio = (await ler(join(dir, "src/data/negocio.ts"))) ?? "";
  const page = semComentarios((await ler(join(dir, "src/app/page.tsx"))) ?? "");

  // B4 — piso de 3 itens de oferta (a faixa saudável de 4–12 é design)
  const itens = (negocio.match(/^\s{4,6}nome:/gm) ?? []).length;
  if (itens >= 3) ok("b4-oferta", `${itens} itens`);
  else falha("b4-oferta", `${itens} itens de oferta; piso do portão é 3`);

  // B5 — depoimento sem fonte não entra
  const depoimentos = (negocio.match(/^\s{4,6}autor:/gm) ?? []).length;
  if (depoimentos === 0) {
    ok("b5-prova", "sem depoimentos — bloco some, é permitido");
  } else {
    const fontes = (negocio.match(/^\s{4,6}fonte:/gm) ?? []).length;
    if (fontes >= depoimentos) ok("b5-prova", `${depoimentos} com fonte`);
    else falha("b5-prova", `${depoimentos} depoimentos, ${fontes} fontes`);
  }

  // B6 — FAQ é o escoadouro das lacunas
  const perguntas = (negocio.match(/pergunta:/g) ?? []).length;
  if (perguntas >= 3) ok("b6-faq", `${perguntas} perguntas`);
  else falha("b6-faq", `${perguntas} perguntas; mínimo 3`);

  // B2 — CTA precisa estar na barra fixa E no fim do conteúdo
  const ctas = (page.match(/ctaPrimario\.url/g) ?? []).length;
  if (ctas >= 3) ok("b2-cta", `${ctas} usos do CTA primário`);
  else falha("b2-cta", `${ctas} usos; esperado ao menos 3 (barra, hero, fecho)`);

  // B7 — prévia de compartilhamento derivada dos dados
  const seo = (await ler(join(dir, "src/lib/seo.ts"))) ?? "";
  if (/openGraph[\s\S]{0,400}images/.test(seo)) ok("b7-og", "openGraph.images presente");
  else falha("b7-og", "seo.ts não define openGraph.images");
}

// ---------------------------------------------------------------- parâmetro 3

async function auditarDesempenho(dir) {
  const css = (await ler(join(dir, "src/app/globals.css"))) ?? "";
  if (/prefers-reduced-motion/.test(css)) ok("p3-motion", "escape de movimento presente");
  else falha("p3-motion", "scroll suave sem prefers-reduced-motion");

  const config = (await ler(join(dir, "next.config.ts"))) ?? "";
  if (/image\/avif/.test(config)) ok("p3-avif", "AVIF habilitado");
  else falha("p3-avif", "images.formats sem AVIF");

  // Teto de 2 famílias tipográficas: cada família a mais é peso de rede.
  const layout = (await ler(join(dir, "src/app/layout.tsx"))) ?? "";
  const familias = new Set(
    [...layout.matchAll(/from\s+"next\/font\/google"/g)].length
      ? (layout.match(/^import\s*\{([^}]+)\}\s*from\s*"next\/font\/google"/m)?.[1] ?? "")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : [],
  );
  if (familias.size <= 2) ok("p3-fontes", `${familias.size} família(s)`);
  else falha("p3-fontes", `${familias.size} famílias; teto é 2`);

  // `shrink-0` num flex ao lado de texto de tamanho imprevisível foi a causa
  // provada do estouro horizontal. Proibido conviver com `Dado`/`Lacuna`.
  const page = semComentarios((await ler(join(dir, "src/app/page.tsx"))) ?? "");
  const suspeitas = page
    .split("\n")
    .filter((l) => l.includes("shrink-0") && /Dado|Lacuna|preco/.test(l));
  if (suspeitas.length) {
    falha("p3-shrink", `shrink-0 junto de campo de texto variável: ${suspeitas[0].trim()}`);
  } else {
    ok("p3-shrink", "sem shrink-0 em campo de texto variável");
  }
}

// ---------------------------------------------------------------- parâmetro 4

async function auditarEspecificidade(dir, slug) {
  const negocio = (await ler(join(dir, "src/data/negocio.ts"))) ?? "";
  if (/publico:\s*\{/.test(negocio)) ok("p4-publico", "público-alvo declarado");
  else falha("p4-publico", "negocio.ts sem `publico`");

  const page = semComentarios((await ler(join(dir, "src/app/page.tsx"))) ?? "");
  if (/negocio\.publico/.test(page)) ok("p4-publico-usado", "público chega à página");
  else falha("p4-publico-usado", "`publico` é dado morto: nada o renderiza");

  // Nenhum ativo visual compartilhado entre leads — o defeito central do
  // parâmetro 4 era o mesmo hero em três standbys.
  const meu = new Map();
  const outros = new Map();
  let slugs = [];
  try {
    slugs = await readdir(SITES, { withFileTypes: true }).then((es) =>
      es.filter((e) => e.isDirectory()).map((e) => e.name),
    );
  } catch {
    slugs = [];
  }
  for (const s of slugs) {
    let arquivos = [];
    try {
      arquivos = await readdir(join(SITES, s, "public"));
    } catch {
      continue;
    }
    for (const a of arquivos) {
      if (!/\.(jpe?g|png|webp|avif|svg)$/i.test(a)) continue;
      let buf;
      try {
        buf = await readFile(join(SITES, s, "public", a));
      } catch {
        continue;
      }
      const hash = createHash("md5").update(buf).digest("hex");
      (s === slug ? meu : outros).set(hash, `${s}/${a}`);
    }
  }
  const compartilhados = [...meu.keys()].filter((h) => outros.has(h));
  if (compartilhados.length) {
    falha(
      "p4-ativo-unico",
      `ativo idêntico a outro lead: ${compartilhados.map((h) => `${meu.get(h)} = ${outros.get(h)}`).join(", ")}`,
    );
  } else {
    ok("p4-ativo-unico", `${meu.size} ativo(s), nenhum compartilhado`);
  }
}

// ------------------------------------------------------------------- ao vivo

async function auditarAoVivo(url) {
  let res;
  try {
    res = await fetch(url, { redirect: "manual" });
  } catch (e) {
    falha("live", `não consegui buscar ${url}: ${e.message}`);
    return;
  }
  const corpo = await res.text();

  // Checkpoint sem caminho até ele não é checkpoint.
  const ids = new Set([...corpo.matchAll(/id="([a-z-]+)"/g)].map((m) => m[1]));
  const alvos = new Set([...corpo.matchAll(/href="#([a-z-]+)"/g)].map((m) => m[1]));
  const orfaos = [...ids].filter(
    (id) => !alvos.has(id) && ["cardapio", "sobre", "visitar", "oferta"].includes(id),
  );
  if (orfaos.length) falha("live-checkpoints", `seções sem link: ${orfaos.join(", ")}`);
  else ok("live-checkpoints", `${alvos.size} âncora(s) com caminho`);

  const quebrados = [...alvos].filter((a) => a !== "" && !ids.has(a));
  if (quebrados.length) falha("live-ancoras", `links para id inexistente: ${quebrados.join(", ")}`);
  else ok("live-ancoras", "toda âncora aponta para id existente");

  // og:image tem de existir E responder.
  const og = corpo.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  if (!og) {
    falha("live-og", "sem og:image");
  } else {
    const caminho = og.replace(/^https?:\/\/[^/]+/, "");
    try {
      const r = await fetch(new URL(caminho, url));
      if (r.ok) ok("live-og", `og:image responde ${r.status}`);
      else falha("live-og", `og:image responde ${r.status}`);
    } catch (e) {
      falha("live-og", `og:image não respondeu: ${e.message}`);
    }
  }

  // Zero formulário e zero iframe: casa com form-action 'none' e frame-src.
  if (/<form\b/i.test(corpo)) falha("live-form", "há <form> no HTML");
  else ok("live-form", "zero <form>");
  if (/<iframe\b/i.test(corpo)) falha("live-iframe", "há <iframe> no HTML");
  else ok("live-iframe", "zero <iframe>");

  // A promessa "nenhum terceiro" virando fato auditável. Link de saída é
  // permitido; recurso carregado de outro host não é.
  const origem = new URL(url).host;
  const recursos = [
    ...[...corpo.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => m[1]),
    ...[...corpo.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"/g)].map((m) => m[1]),
    ...[...corpo.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]),
  ];
  const terceiros = recursos.filter((r) => {
    if (!/^https?:\/\//.test(r)) return false;
    try {
      return new URL(r).host !== origem;
    } catch {
      return false;
    }
  });
  if (terceiros.length) falha("live-terceiros", `recurso de terceiro: ${terceiros.join(", ")}`);
  else ok("live-terceiros", `${recursos.length} recurso(s), todos da própria origem`);

  // Toda imagem com alt.
  const semAlt = [...corpo.matchAll(/<img\b[^>]*>/g)].filter((m) => !/\balt=/.test(m[0]));
  if (semAlt.length) falha("live-alt", `${semAlt.length} <img> sem alt`);
  else ok("live-alt", "toda <img> com alt");

  // Aproximação honesta: posição no documento correlaciona com "acima da
  // dobra", mas não equivale. Provar exigiria viewport real.
  const primeiroCta = corpo.indexOf("ctaPrimario") >= 0 ? -1 : corpo.search(/href="https?:\/\/[^"]*"[^>]*>\s*(<span|Pedir|Reservar|Ver no)/);
  if (primeiroCta >= 0 && primeiroCta < corpo.length / 3) {
    proxy("live-cta-topo", "CTA aparece no primeiro terço do documento");
  } else {
    proxy("live-cta-topo", "não localizei o CTA no primeiro terço — conferir no navegador");
  }
}

const slug = arg("--slug");
if (!slug) {
  console.error("uso: verificar-entrega.mjs --slug <slug> [--url http://localhost:3000]");
  process.exit(2);
}

const dir = join(SITES, slug);
await auditarFuncionalidade(dir);
await auditarDesempenho(dir);
await auditarEspecificidade(dir, slug);

const url = arg("--url");
if (url) await auditarAoVivo(url);

const falhas = checks.filter((c) => !c.ok);
const proxies = checks.filter((c) => c.proxy);
process.stdout.write(
  `${JSON.stringify(
    {
      slug,
      modo: url ? "estatico+live" : "estatico",
      ok: falhas.length === 0,
      falhas: falhas.map((c) => c.id),
      aproximacoes: proxies.map((c) => c.id),
      nota: "Este portão prova presença e consistência, nunca adequação. Verde é licença para a revisão humana começar.",
      checks,
    },
    null,
    2,
  )}\n`,
);
process.exit(falhas.length === 0 ? 0 : 1);
