#!/usr/bin/env node
/**
 * Parâmetro 1 (estrutura/arquitetura): audita um standby contra o padrão.
 *
 *   node verificar-arquitetura.mjs --slug padoca-vegan-vila-madalena
 *   node verificar-arquitetura.mjs --slug <slug> --url http://localhost:3000
 *
 * Sem --url roda só a auditoria estática. Com --url confere os headers
 * que o servidor realmente devolve — descrição não conta como prova.
 */
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL("../../../../", import.meta.url)));

const ARQUIVOS_OBRIGATORIOS = [
  "next.config.ts",
  "src/data/schema.ts",
  "src/data/negocio.ts",
  "src/lib/seguranca.ts",
  "src/lib/seo.ts",
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "src/app/not-found.tsx",
];

const HEADERS_OBRIGATORIOS = [
  "content-security-policy",
  "strict-transport-security",
  "x-content-type-options",
  "x-frame-options",
  "referrer-policy",
  "permissions-policy",
  "cross-origin-opener-policy",
  "cross-origin-resource-policy",
];

const DIRETIVAS_CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
];

function arg(flag, fallback = "") {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

async function ler(caminho) {
  try {
    return await readFile(caminho, "utf8");
  } catch {
    return null;
  }
}

/**
 * Remove comentários antes de auditar CSP. Sem isto, uma diretiva citada num
 * comentário satisfaz a checagem e a diretiva real passa sem ser lida.
 */
function semComentarios(fonte) {
  return fonte
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .split("\n")
    .filter((linha) => !/^\s*(\/\/|\*)/.test(linha))
    .join("\n");
}

const checks = [];
const ok = (id, detalhe) => checks.push({ id, ok: true, detalhe });
const falha = (id, detalhe) => checks.push({ id, ok: false, detalhe });

async function auditarEstatico(dir, slug) {
  const faltando = [];
  for (const rel of ARQUIVOS_OBRIGATORIOS) {
    if ((await ler(join(dir, rel))) === null) faltando.push(rel);
  }
  if (faltando.length) falha("arquivos", `faltam: ${faltando.join(", ")}`);
  else ok("arquivos", `${ARQUIVOS_OBRIGATORIOS.length} arquivos do padrão`);

  const config = (await ler(join(dir, "next.config.ts"))) ?? "";
  if (/cabecalhosSeguranca/.test(config) && /async headers\(\)/.test(config)) {
    ok("next.config", "headers() aplica cabecalhosSeguranca");
  } else {
    falha("next.config", "next.config.ts não aplica cabecalhosSeguranca em headers()");
  }
  if (/poweredByHeader:\s*false/.test(config)) ok("x-powered-by", "desligado");
  else falha("x-powered-by", "faltou poweredByHeader: false");

  const seguranca = semComentarios(
    (await ler(join(dir, "src/lib/seguranca.ts"))) ?? "",
  );
  const semDiretiva = DIRETIVAS_CSP.filter((d) => !seguranca.includes(d));
  if (semDiretiva.length) falha("csp", `diretivas ausentes: ${semDiretiva.join("; ")}`);
  else ok("csp", "diretivas estritas presentes");

  // Toda linha de código com script-src precisa passar: basta uma frouxa para
  // a política inteira ficar frouxa.
  const linhasScript = seguranca
    .split("\n")
    .filter((linha) => linha.includes("script-src"));
  const frouxas = linhasScript.filter((linha) => linha.includes("unsafe-inline"));
  if (!linhasScript.length) {
    falha("csp-script", "sem diretiva script-src");
  } else if (frouxas.length) {
    falha("csp-script", `script-src com 'unsafe-inline': ${frouxas[0].trim()}`);
  } else {
    ok("csp-script", "script-src sem unsafe-inline");
  }

  const naoDev = seguranca.replace(/\$\{dev \? [^}]*\}/g, "");
  if (/unsafe-eval/.test(naoDev)) falha("csp-eval", "'unsafe-eval' fora do ramo de dev");
  else ok("csp-eval", "unsafe-eval só em dev");

  const layout = (await ler(join(dir, "src/app/layout.tsx"))) ?? "";
  if (/jsonLdNegocio/.test(layout)) ok("json-ld", "derivado de negocio.ts");
  else falha("json-ld", "layout.tsx não usa jsonLdNegocio");
  if (/"@type"\s*:/.test(layout)) {
    falha("json-ld-inline", "JSON-LD escrito à mão no layout (duplica dado, diverge)");
  } else {
    ok("json-ld-inline", "sem JSON-LD literal no layout");
  }

  const seo = (await ler(join(dir, "src/lib/seo.ts"))) ?? "";
  if (/fatoFirme/.test(seo)) ok("json-ld-fatos", "só fatos sem ressalva entram");
  else falha("json-ld-fatos", "seo.ts não filtra por fatoFirme");

  const robots = (await ler(join(dir, "src/app/robots.ts"))) ?? "";
  if (/disallow/i.test(robots)) ok("robots", "disallow presente");
  else falha("robots", "robots.ts sem disallow");
  if (/index:\s*false/.test(seo)) ok("noindex", "metadata robots.index = false");
  else falha("noindex", "seo.ts não marca index: false");

  if (/<html\s+lang="pt-BR"/.test(layout) || /lang="pt-BR"/.test(layout)) {
    ok("a11y-lang", 'html lang="pt-BR"');
  } else {
    falha("a11y-lang", 'layout.tsx sem lang="pt-BR"');
  }

  const faixa = (await ler(join(dir, "src/components/faixa-proposta.tsx"))) ?? "";
  if (/role="note"/.test(faixa)) ok("a11y-faixa", 'faixa com role="note"');
  else falha("a11y-faixa", 'faixa-proposta.tsx sem role="note"');
  const page = (await ler(join(dir, "src/app/page.tsx"))) ?? "";
  const negocio = (await ler(join(dir, "src/data/negocio.ts"))) ?? "";
  const temFaixa =
    /FaixaProposta/.test(page) &&
    /proposta\.faixa/.test(faixa) &&
    /não é o site oficial/i.test(negocio);
  if (temFaixa) ok("faixa", "faixa de proposta renderizada a partir dos dados");
  else falha("faixa", "faixa de proposta ausente em page.tsx / faixa-proposta.tsx / negocio.ts");

  if (/from "@\/data\/schema"/.test(negocio) && /\bfato\(/.test(negocio)) {
    ok("camada-dados", "negocio.ts usa o contrato tipado");
  } else {
    falha("camada-dados", "negocio.ts não usa fato()/schema");
  }
  if (/fonte:\s*\{\s*url:\s*""/.test(negocio)) {
    falha("fontes", "há fonte com url vazia");
  } else {
    ok("fontes", "nenhuma fonte vazia");
  }

  let rastreados = "";
  try {
    rastreados = execFileSync("git", ["ls-files", `sites/${slug}`], {
      cwd: ROOT,
      encoding: "utf8",
    });
  } catch {
    rastreados = "";
  }
  const envs = rastreados
    .split("\n")
    .filter((l) => /(^|\/)\.env(\.|$)/.test(l));
  if (envs.length) falha("segredos", `.env rastreado no git: ${envs.join(", ")}`);
  else ok("segredos", "nenhum .env rastreado");
}

async function auditarAoVivo(url) {
  let res;
  try {
    res = await fetch(url, { redirect: "manual" });
  } catch (e) {
    falha("live", `não consegui buscar ${url}: ${e.message}`);
    return;
  }
  const recebidos = new Map();
  res.headers.forEach((v, k) => recebidos.set(k.toLowerCase(), v));

  const ausentes = HEADERS_OBRIGATORIOS.filter((h) => !recebidos.has(h));
  if (ausentes.length) falha("live-headers", `ausentes na resposta: ${ausentes.join(", ")}`);
  else ok("live-headers", `${HEADERS_OBRIGATORIOS.length} headers na resposta real`);

  const csp = recebidos.get("content-security-policy") ?? "";
  const semDiretiva = DIRETIVAS_CSP.filter((d) => !csp.includes(d));
  if (semDiretiva.length) falha("live-csp", `CSP sem: ${semDiretiva.join("; ")}`);
  else ok("live-csp", "CSP estrita na resposta real");

  const scriptSrc = csp.split(";").find((d) => d.trim().startsWith("script-src"));
  if (scriptSrc && /unsafe-(inline|eval)/.test(scriptSrc)) {
    falha("live-csp-script", `script-src frouxo: ${scriptSrc.trim()}`);
  } else {
    ok("live-csp-script", "script-src sem unsafe-* na resposta real");
  }

  if (recebidos.has("x-powered-by")) falha("live-x-powered-by", recebidos.get("x-powered-by"));
  else ok("live-x-powered-by", "ausente");

  const corpo = await res.text();
  if (/não é o site oficial/i.test(corpo)) ok("live-faixa", "faixa no HTML servido");
  else falha("live-faixa", "faixa de proposta não apareceu no HTML");

  if (/<html[^>]+lang="pt-BR"/.test(corpo)) ok("live-lang", 'lang="pt-BR" no HTML servido');
  else falha("live-lang", "HTML servido sem lang=pt-BR");

  const imgsSemAlt = [...corpo.matchAll(/<img\b[^>]*>/g)].filter(
    (m) => !/\balt=/.test(m[0]),
  );
  if (imgsSemAlt.length) falha("live-alt", `${imgsSemAlt.length} <img> sem alt`);
  else ok("live-alt", "toda <img> com alt");

  const blocos = [...corpo.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!blocos.length) {
    falha("live-json-ld", "nenhum JSON-LD no HTML");
  } else {
    let problema = null;
    for (const [, cru] of blocos) {
      try {
        const dados = JSON.parse(cru);
        const texto = JSON.stringify(dados);
        if (/placeholder|lacuna|não encontrado/i.test(texto)) {
          problema = "JSON-LD contém placeholder/lacuna";
        }
      } catch {
        problema = "JSON-LD inválido";
      }
    }
    if (problema) falha("live-json-ld", problema);
    else ok("live-json-ld", `${blocos.length} bloco(s) válido(s), só fatos`);
  }
}

const slug = arg("--slug");
if (!slug) {
  console.error("uso: verificar-arquitetura.mjs --slug <slug> [--url http://localhost:3000]");
  process.exit(2);
}

const dir = join(ROOT, "sites", slug);
await auditarEstatico(dir, slug);

const url = arg("--url");
if (url) await auditarAoVivo(url);

const falhas = checks.filter((c) => !c.ok);
process.stdout.write(
  `${JSON.stringify(
    {
      slug,
      modo: url ? "estatico+live" : "estatico",
      ok: falhas.length === 0,
      falhas: falhas.map((c) => c.id),
      checks,
    },
    null,
    2,
  )}\n`,
);
process.exit(falhas.length === 0 ? 0 : 1);
