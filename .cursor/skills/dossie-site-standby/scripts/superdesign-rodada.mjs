#!/usr/bin/env node
/**
 * Etapa 3 — ritual Superdesign. plan não gasta crédito.
 *
 *   node superdesign-rodada.mjs plan --slug padoca-vegan-vila-madalena
 *   node superdesign-rodada.mjs audit --slug padoca-vegan-vila-madalena --html draft.html
 *
 * --exec no plan: corre create-project + create-design-draft. Só com pedido explícito de canvas.
 */
import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL("../../../../", import.meta.url)));
const SKILL = dirname(fileURLToPath(import.meta.url));
const CLI = ["npx", "--yes", "@superdesign/cli@latest"];
const LINE_CAP = 900;
const FAIXA = "Proposta Estúdio Giz — não é o site oficial";
const FIDELIDADE =
  "Use ONLY the fonts, colors, spacing, and component styles defined in the design system. Do not introduce any fonts, colors, or visual styles not in the design system.";

function arg(flag, fallback = "") {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : fallback;
}
function hasFlag(flag) {
  return process.argv.includes(flag);
}
function print(obj) {
  process.stdout.write(`${JSON.stringify(obj, null, 2)}\n`);
}
function shQuote(s) {
  return `'${String(s).replace(/'/g, `'\\''`)}'`;
}
function hexes(text) {
  return [...new Set(String(text).match(/#[0-9A-Fa-f]{3,8}\b/g) || [])].map((h) =>
    h.toUpperCase(),
  );
}
function countLines(text) {
  return String(text).split(/\n/).length;
}
function leadPaths(slug) {
  const dir = join(ROOT, "prospeccao/leads", slug);
  return {
    dir,
    designSystem: join(dir, "design-system.md"),
    roteiro: join(dir, "roteiro-iteracao.md"),
    dossie: join(dir, "dossie.md"),
    inputs: join(dir, "inputs.md"),
    promptP: join(dir, "prompt-p.md"),
    plan: join(dir, "rodada-plan.json"),
    superdesign: join(dir, "superdesign.md"),
    gizPayDs: join(ROOT, ".superdesign/design-system.md"),
  };
}

async function loadIsolados() {
  return JSON.parse(
    await readFile(join(SKILL, "../projetos-isolados.json"), "utf8"),
  );
}

function gate(slug) {
  const script = join(SKILL, "montar-dossie.mjs");
  const raw = execFileSync(process.execPath, [script, "gate", "--slug", slug], {
    encoding: "utf8",
    cwd: ROOT,
  });
  return JSON.parse(raw);
}

function paletteFromMarkdown(md) {
  const pal = [];
  const forb = [];
  for (const line of String(md).split("\n")) {
    const parts = line.split(/Proibido/i);
    pal.push(...hexes(parts[0] || ""));
    if (parts.length > 1) forb.push(...hexes(parts.slice(1).join(" ")));
  }
  const palU = [...new Set(pal)];
  const forbU = [...new Set(forb)].filter((h) => !palU.includes(h));
  return { paleta: palU, proibidosNoArquivo: forbU };
}

function extractCtas(ds, roteiro) {
  const urls = [];
  for (const line of `${ds}\n${roteiro}`.split("\n")) {
    if (/concorrente|referência de estrutura|tu ês|tu és|panadero|não copiar/i.test(line)) {
      continue;
    }
    if (!/cta|primário|secundário|delivery|instagram\.com|wa\.me|pedir no/i.test(line)) {
      continue;
    }
    for (const m of line.matchAll(/https?:\/\/[^\s)`"'<>]+/g)) {
      urls.push(m[0].replace(/[.,;]+$/, ""));
    }
  }
  const insta = `${ds}\n${roteiro}`.match(/@[a-z0-9._]+/i);
  return { urls: [...new Set(urls)], instagram: insta ? insta[0] : null };
}

function forbiddenHex(isolados, slug) {
  const out = [];
  for (const [key, meta] of Object.entries(isolados.projetos || {})) {
    if (key === slug || key === "giz-pay") continue;
    for (const h of meta.hex || []) out.push(h.toUpperCase());
  }
  return [...new Set(out)];
}

function forbiddenProjectIds(isolados, slug) {
  const ids = [isolados.gizPayProjectId];
  for (const [key, meta] of Object.entries(isolados.projetos || {})) {
    if (key === slug) continue;
    if (meta.projectId) ids.push(meta.projectId);
  }
  return [...new Set(ids.filter(Boolean))];
}

function buildPrompt({ nome, bairro }) {
  return [
    `Home de proposta Estúdio Giz para ${nome} (${bairro}).`,
    "Uma página longa, mobile first, com âncoras do roteiro.",
    `Faixa fixa no topo: “${FAIXA}”.`,
    "Seguir 100% o design-system.md e o roteiro-iteracao.md passados em --context-file.",
    FIDELIDADE,
    "Não inventar telefone, horário, WhatsApp ou preço. Lacunas do roteiro ficam visíveis ou omitidas — nunca resolvidas.",
    "Copy/foto que não for fato temos leva badge visível placeholder.",
    "Não clonar app de delivery, Wix, Joya, Kio nem a Giz Pay.",
  ].join(" ");
}

async function cmdPlan(slug) {
  const g = gate(slug);
  if (!g.prontoParaSuperdesign) {
    print({ ok: false, motivo: "gate_falhou", gate: g });
    process.exit(2);
  }
  const isolados = await loadIsolados();
  const paths = leadPaths(slug);
  const ds = await readFile(paths.designSystem, "utf8");
  const roteiro = await readFile(paths.roteiro, "utf8");
  const dsLines = countLines(ds);
  const roteiroLines = countLines(roteiro);
  if (dsLines > LINE_CAP || roteiroLines > LINE_CAP) {
    print({
      ok: false,
      motivo: "context_estourou_900_linhas",
      dsLines,
      roteiroLines,
    });
    process.exit(2);
  }
  const pal = paletteFromMarkdown(ds);
  const palette = pal.paleta;
  const forbidHex = [
    ...forbiddenHex(isolados, slug),
    ...pal.proibidosNoArquivo,
  ].filter((h, i, arr) => !palette.includes(h) && arr.indexOf(h) === i);
  const ctas = extractCtas(ds, roteiro);
  const userRequest =
    arg("--user-request") ||
    "Gerar a home de proposta Estúdio Giz deste lead, seguindo o roteiro e o design system do lead — não o da Giz Pay.";
  const prompt = buildPrompt({ nome: g.nome, bairro: g.bairro });
  await writeFile(paths.promptP, `${prompt}\n`);

  const relDs = `prospeccao/leads/${slug}/design-system.md`;
  const relRoteiro = `prospeccao/leads/${slug}/roteiro-iteracao.md`;
  const createProject = `${CLI.join(" ")} create-project --title ${shQuote(g.nome)} --no-open --json`;
  const createDraft = [
    CLI.join(" "),
    "create-design-draft",
    "--project-id",
    "<PROJECT_ID>",
    "--title",
    shQuote(`Home ${g.nome}`),
    "--device",
    "mobile",
    "-p",
    shQuote(prompt),
    "--user-request",
    shQuote(userRequest),
    "--context-file",
    relDs,
    "--context-file",
    relRoteiro,
    "--json",
  ].join(" ");

  const plan = {
    versao: 1,
    slug,
    geradoEm: new Date().toISOString(),
    nome: g.nome,
    bairro: g.bairro,
    exec: false,
    orcamento: {
      createProject: 1,
      createDesignDraft: 1,
      iterateReplace: "somente se auditoria falhar em faixa/CTA/hex",
      branch: false,
      executeFlowPages: false,
      extractWebsite: false,
      passarDossieOuInputs: false,
      passarDesignSystemGizPay: false,
    },
    isolamento: {
      recusarProjectIds: forbiddenProjectIds(isolados, slug),
      recusarContext: [isolados.designSystemRaiz, ".superdesign/init/"],
      naoRodarInit: true,
    },
    contextFiles: [relDs, relRoteiro],
    linhas: { designSystem: dsLines, roteiro: roteiroLines },
    paletaLead: palette,
    hexProibidosOutrosLeads: forbidHex,
    ctas,
    faixa: FAIXA,
    device: "mobile",
    promptFile: `prospeccao/leads/${slug}/prompt-p.md`,
    userRequest,
    comandos: {
      createProject,
      createDraft,
      getDesign:
        `${CLI.join(" ")} get-design --draft-id <DRAFT_ID> --output prospeccao/leads/${slug}/draft-home.html`,
      audit: `node .cursor/skills/dossie-site-standby/scripts/superdesign-rodada.mjs audit --slug ${slug} --html prospeccao/leads/${slug}/draft-home.html`,
    },
    nota: "plan não chama o CLI de geração. --exec só com pedido explícito de canvas.",
  };

  if (hasFlag("--exec")) {
    print({
      ok: false,
      motivo: "exec_recusado_neste_modo",
      detalhe:
        "Passe o canvas só quando o usuário pedir. Rode os comandos do plan manualmente ou peça --exec numa sessão com autorização de geração.",
      plan,
    });
    process.exit(2);
  }

  await writeFile(paths.plan, `${JSON.stringify(plan, null, 2)}\n`);
  print({ ok: true, wrote: [`prospeccao/leads/${slug}/prompt-p.md`, `prospeccao/leads/${slug}/rodada-plan.json`], plan });
}

function auditHtml(html, plan, isolados, slug) {
  const foundHex = hexes(html);
  const checks = [];
  const fail = (id, detalhe) => checks.push({ id, ok: false, detalhe });
  const pass = (id, detalhe) => checks.push({ id, ok: true, detalhe });

  if (html.includes(FAIXA) || html.includes("não é o site oficial")) {
    pass("faixa", FAIXA);
  } else fail("faixa", "faixa de proposta ausente");

  const ctaHits = (plan.ctas?.urls || []).filter((u) => html.includes(u));
  if (ctaHits.length) pass("cta", ctaHits.join(", "));
  else fail("cta", `nenhuma URL de CTA do roteiro no HTML: ${(plan.ctas?.urls || []).slice(0, 4).join(" ")}`);

  const paletteHits = (plan.paletaLead || []).filter((h) =>
    foundHex.includes(h.toUpperCase()),
  );
  if (paletteHits.length >= 2) pass("paleta", paletteHits.join(", "));
  else fail("paleta", `menos de 2 hex do lead; achados: ${foundHex.join(", ") || "nenhum"}`);

  const bleed = (plan.hexProibidosOutrosLeads || []).filter((h) =>
    foundHex.includes(h.toUpperCase()),
  );
  if (bleed.length) fail("hex_outro_lead", bleed.join(", "));
  else pass("hex_outro_lead", "sem paleta Joya/Kio alheia");

  const waForbid = isolados.waMeOutrosLeads || [];
  const waHit = waForbid.filter((n) => html.includes(n));
  if (waHit.length) fail("wa_me_outro", waHit.join(", "));
  else pass("wa_me_outro", "ok");

  if (/giz pay|gizpay|stayflow/i.test(html)) fail("gizpay", "copy/curso vazou");
  else pass("gizpay", "ok");

  const ownId = isolados.projetos?.[slug]?.projectId;
  // no HTML check for project ids

  const failed = checks.filter((c) => !c.ok);
  return {
    ok: failed.length === 0,
    slug,
    failed: failed.map((c) => c.id),
    checks,
    acaoSeFalhou: failed.some((c) => ["faixa", "cta", "wa_me_outro"].includes(c.id))
      ? "import-design-draft (determinístico), não branch"
      : failed.length
        ? "iterate-design-draft --mode replace (um -p) ou import-design-draft"
        : null,
    ownProjectIdPermitido: ownId || null,
  };
}

async function cmdAudit(slug) {
  const htmlPath = arg("--html");
  if (!htmlPath) {
    console.error("Falta --html");
    process.exit(2);
  }
  const paths = leadPaths(slug);
  const isolados = await loadIsolados();
  let plan = {};
  try {
    plan = JSON.parse(await readFile(paths.plan, "utf8"));
  } catch {
    console.error("Rode plan antes do audit");
    process.exit(2);
  }
  const html = await readFile(resolve(htmlPath), "utf8");
  print(auditHtml(html, plan, isolados, slug));
}

const USAGE = `uso: superdesign-rodada.mjs plan|audit --slug <slug> [--html arquivo.html] [--user-request "..."]`;
const cmd = process.argv[2];
const slug = arg("--slug");
if (!cmd || cmd === "help" || !slug) {
  console.error(USAGE);
  process.exit(cmd === "help" ? 0 : 2);
}

process.chdir(ROOT);
if (cmd === "plan") await cmdPlan(slug);
else if (cmd === "audit") await cmdAudit(slug);
else {
  console.error(USAGE);
  process.exit(2);
}
