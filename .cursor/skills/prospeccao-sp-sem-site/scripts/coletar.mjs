#!/usr/bin/env node
/**
 * Coleta pública — etapa 1 (busca + evidências).
 * Sem Places key, não inventa leads: imprime queriesWeb e classifica o que o agente achar.
 *
 *   node coletar.mjs search --nicho "padaria artesanal" --bairro "Vila Madalena"
 *   node coletar.mjs lead --nome "Kio Bakehouse" --bairro "Vila Madalena" --out prospeccao/leads/<slug>/coleta.json
 *   node coletar.mjs init --slug kio-bakehouse-vila-madalena --nome "Kio Bakehouse" --bairro "Vila Madalena"
 *   node coletar.mjs classify --url "https://linktr.ee/exemplo"
 *   node coletar.mjs fetch --url "https://…" [--out coleta.json]
 *   node coletar.mjs evidencia --out coleta.json --campo endereco --valor "…" --url "…"
 *   node coletar.mjs report --in coleta.json
 *   node coletar.mjs cnpj --cnpj "00000000000000"
 *   node coletar.mjs dns --host "exemplo.com.br"
 */
import { lookup } from "node:dns/promises";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const AGGREGATORS = [
  "instagram.com",
  "facebook.com",
  "fb.com",
  "tiktok.com",
  "linktr.ee",
  "bio.site",
  "beacons.ai",
  "ifood.com.br",
  "rappi.com.br",
  "doctoralia.com.br",
  "getninjas.com.br",
  "wa.me",
  "api.whatsapp.com",
  "goo.gl",
  "maps.app.goo.gl",
  "google.com",
  "business.site",
  "restaurantguru.com",
  "restaurantguru.com.br",
  "happycow.net",
  "tripadvisor.com",
  "tripadvisor.com.br",
  "yelp.com",
  "foursquare.com",
  "minube.com",
  "minube.com.br",
  "baressp.com.br",
  "avaliacoesbrasil.com.br",
];

const FONTES_TERCEIRO = [
  "abril.com.br",
  "estadao.com.br",
  "folha.uol.com.br",
  "folha.com.br",
  "uol.com.br",
  "cnnbrasil.com.br",
  "gastronominho.com.br",
  "globo.com",
  "alexferraz.com.br",
  "baladacerta.com.br",
];

const BASICO_HOSTS = [
  "wixsite.com",
  "wix.com",
  "sites.google.com",
  "blogspot.com",
  "blogspot.com.br",
  "my.canva.site",
  "square.site",
  "webnode.com",
  "hotmart.com",
  "lojaintegrada.com.br",
];

const CAMPOS_MINIMOS = [
  "nome",
  "endereco",
  "contato_publico",
  "site_ou_ausencia",
];

function arg(flag, fallback = "") {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

function hasFlag(flag) {
  return process.argv.includes(flag);
}

function placesKey() {
  return process.env.GOOGLE_PLACES_API_KEY || process.env.GOOGLE_MAPS_API_KEY || "";
}

function hostOf(uri) {
  try {
    return new URL(uri).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "";
  }
}

function matchesHostList(host, list) {
  return list.some((a) => host === a || host.endsWith(`.${a}`));
}

export function classifyWebsite(uri) {
  if (!uri || !String(uri).trim()) {
    return { veredito: "sem_site", motivo: "websiteUri vazio", url: null };
  }
  const host = hostOf(uri);
  if (!host) {
    return { veredito: "invalida", motivo: "URL malformada", url: uri };
  }
  if (matchesHostList(host, AGGREGATORS)) {
    return { veredito: "sem_site", motivo: `aggregator:${host}`, url: uri, host };
  }
  if (matchesHostList(host, FONTES_TERCEIRO)) {
    return { veredito: "fonte_terceiro", motivo: `imprensa_ou_guia:${host}`, url: uri, host };
  }
  if (matchesHostList(host, BASICO_HOSTS)) {
    return { veredito: "site_basico", motivo: `plataforma:${host}`, url: uri, host };
  }
  return { veredito: "tem_dominio", motivo: "dominio_proprio_a_qualificar", url: uri, host };
}

function discoveryQueries(nicho, bairro) {
  const base = `${nicho} ${bairro} São Paulo`;
  return [
    base,
    `${base} Instagram`,
    `${base} WhatsApp`,
    `"${nicho}" "${bairro}" site:instagram.com`,
    `${base} iFood`,
    `melhores ${nicho} ${bairro} São Paulo`,
    `${base} "linktr.ee"`,
    `${base} "em construção"`,
  ];
}

function emptyColeta(partial = {}) {
  return {
    versao: 1,
    coletadoEm: new Date().toISOString(),
    slug: partial.slug || "",
    nome: partial.nome || "",
    nicho: partial.nicho || "",
    bairro: partial.bairro || "",
    comando: partial.comando || "init",
    query: partial.query || "",
    placesKey: Boolean(placesKey()),
    places: { ok: false, reason: "ainda_nao_consultado", places: [] },
    queriesWeb: partial.queriesWeb || [],
    nota: "",
    candidatos: [],
    paginas: [],
    dns: [],
    cnpj: null,
    evidencias: [],
    lacunas: [],
    ...partial,
  };
}

async function loadColeta(path) {
  try {
    const raw = await readFile(path, "utf8");
    const parsed = JSON.parse(raw);
    return emptyColeta({ ...parsed, versao: 1 });
  } catch {
    return null;
  }
}

async function saveColeta(path, data) {
  await mkdir(dirname(path), { recursive: true });
  const payload = { ...data, atualizadoEm: new Date().toISOString() };
  await writeFile(path, `${JSON.stringify(payload, null, 2)}\n`);
  return payload;
}

function lastWins(arr, keyFn) {
  const seen = new Map();
  for (const item of arr) {
    const k = keyFn(item);
    if (k) seen.set(k, item);
  }
  return [...seen.values()];
}

function mergeColeta(base, patch) {
  const out = emptyColeta({ ...base, ...patch });
  out.evidencias = lastWins(
    [...(base.evidencias || []), ...(patch.evidencias || [])],
    (e) => `${e.campo}|${e.valor}|${e.url}`,
  );
  out.paginas = lastWins(
    [...(base.paginas || []), ...(patch.paginas || [])],
    (p) => p.url || p.finalUrl,
  );
  out.dns = lastWins([...(base.dns || []), ...(patch.dns || [])], (d) => d.host);
  if (patch.candidatos) out.candidatos = patch.candidatos;
  else out.candidatos = base.candidatos || [];
  out.lacunas = [...new Set([...(base.lacunas || []), ...(patch.lacunas || [])])];
  return out;
}

function defaultOutFromSlug(slug) {
  return join("prospeccao/leads", slug, "coleta.json");
}

async function placesSearch(textQuery) {
  const key = placesKey();
  if (!key) {
    return { ok: false, reason: "sem_GOOGLE_PLACES_API_KEY", places: [] };
  }
  const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask":
        "places.id,places.displayName,places.formattedAddress,places.websiteUri,places.nationalPhoneNumber,places.internationalPhoneNumber,places.rating,places.userRatingCount,places.googleMapsUri,places.regularOpeningHours,places.businessStatus",
    },
    body: JSON.stringify({
      textQuery,
      languageCode: "pt-BR",
      regionCode: "BR",
      maxResultCount: 20,
    }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    return { ok: false, reason: `http_${res.status}`, error: body, places: [] };
  }
  const places = (body.places || []).map((p) => {
    const websiteUri = p.websiteUri || null;
    return {
      id: p.id,
      name: p.displayName?.text || "",
      address: p.formattedAddress || "",
      websiteUri,
      site: classifyWebsite(websiteUri),
      phone: p.nationalPhoneNumber || p.internationalPhoneNumber || null,
      rating: p.rating ?? null,
      userRatingCount: p.userRatingCount ?? null,
      maps: p.googleMapsUri || null,
      status: p.businessStatus || null,
      hours: p.regularOpeningHours?.weekdayDescriptions || null,
    };
  });
  return { ok: true, places };
}

function evidenciasFromPlace(place, mapsUrl) {
  const data = new Date().toISOString().slice(0, 10);
  const url = place.maps || mapsUrl || place.websiteUri || "";
  const rows = [];
  if (place.name) rows.push({ campo: "nome", valor: place.name, url, data });
  if (place.address) rows.push({ campo: "endereco", valor: place.address, url, data });
  if (place.phone) {
    rows.push({ campo: "telefone", valor: place.phone, url, data });
    rows.push({ campo: "contato_publico", valor: place.phone, url, data });
  }
  if (place.hours) {
    rows.push({
      campo: "horario",
      valor: Array.isArray(place.hours) ? place.hours.join(" | ") : String(place.hours),
      url,
      data,
    });
  }
  if (place.rating != null) {
    rows.push({
      campo: "google_nota",
      valor: `${place.rating} · ${place.userRatingCount ?? "?"} avaliações`,
      url,
      data,
    });
  }
  rows.push({
    campo: "site_ou_ausencia",
    valor: place.site?.veredito || "sem_site",
    url: place.websiteUri || url,
    data,
  });
  return rows;
}

async function brasilCnpj(raw) {
  const digits = String(raw).replace(/\D/g, "");
  if (digits.length !== 14) {
    return { ok: false, reason: "cnpj_invalido" };
  }
  const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${digits}`);
  if (res.status === 404) return { ok: false, reason: "nao_encontrado" };
  if (!res.ok) return { ok: false, reason: `http_${res.status}` };
  const data = await res.json();
  return {
    ok: true,
    fonte: `https://brasilapi.com.br/api/cnpj/v1/${digits}`,
    razao: data.razao_social,
    fantasia: data.nome_fantasia,
    cnae: data.cnae_fiscal_descricao,
    situacao: data.descricao_situacao_cadastral,
    logradouro: [data.descricao_tipo_de_logradouro, data.logradouro, data.numero]
      .filter(Boolean)
      .join(" "),
    municipio: data.municipio,
    uf: data.uf,
    cep: data.cep,
  };
}

async function dnsHost(host) {
  try {
    const r = await lookup(host);
    return { ok: true, host, address: r.address };
  } catch (e) {
    return { ok: false, host, reason: e.code || String(e) };
  }
}

function stripHtml(html) {
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchPagina(uri) {
  const classificado = classifyWebsite(uri);
  if (classificado.veredito === "invalida") {
    return { ok: false, ...classificado, status: null };
  }
  const ctrl = AbortSignal.timeout(15000);
  try {
    const res = await fetch(uri, {
      redirect: "follow",
      signal: ctrl,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; EstudioGizColetor/1.0; +https://github.com/herzeg9/gizpayteste)",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
      },
    });
    const ctype = res.headers.get("content-type") || "";
    let title = "";
    let snippet = "";
    if (/html/i.test(ctype) || !ctype) {
      const html = await res.text();
      title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [, ""])[1]
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 200);
      snippet = stripHtml(html).slice(0, 400);
    } else {
      snippet = `(${ctype})`;
    }
    return {
      ok: res.ok,
      url: uri,
      finalUrl: res.url,
      status: res.status,
      contentType: ctype,
      title,
      snippet,
      site: classifyWebsite(res.url || uri),
    };
  } catch (e) {
    return {
      ok: false,
      url: uri,
      status: null,
      reason: e.name === "TimeoutError" ? "timeout" : e.message || String(e),
      site: classificado,
    };
  }
}

function reportGaps(coleta) {
  const campos = new Set((coleta.evidencias || []).map((e) => e.campo));
  const temContato = campos.has("contato_publico") || campos.has("instagram") || campos.has("telefone") || campos.has("whatsapp");
  const missing = CAMPOS_MINIMOS.filter((c) => {
    if (c === "contato_publico") return !temContato;
    return !campos.has(c);
  });
  return {
    slug: coleta.slug,
    evidencias: (coleta.evidencias || []).length,
    paginas: (coleta.paginas || []).length,
    placesKey: Boolean(coleta.placesKey),
    placesOk: Boolean(coleta.places?.ok),
    missing,
    prontoParaDossie: missing.length === 0,
  };
}

function print(obj) {
  process.stdout.write(`${JSON.stringify(obj, null, 2)}\n`);
}

const USAGE = `uso: coletar.mjs <comando>
  search   --nicho --bairro [--out]
  lead     --nome --bairro [--nicho] [--slug] [--out]
  init     --slug --nome --bairro [--nicho]
  classify --url
  fetch    --url [--out]
  evidencia --out --campo --valor --url [--data]
  report   --in
  cnpj     --cnpj
  dns      --host [--out]
  help`;

async function main() {
const cmd = process.argv[2];

if (!cmd || cmd === "help" || hasFlag("--help")) {
  console.error(USAGE);
  if (cmd === "help" || hasFlag("--help")) process.exit(0);
  process.exit(2);
}

if (cmd === "classify") {
  print(classifyWebsite(arg("--url")));
} else if (cmd === "cnpj") {
  print(await brasilCnpj(arg("--cnpj")));
} else if (cmd === "dns") {
  const result = await dnsHost(arg("--host"));
  const out = arg("--out");
  if (out) {
    const existing = (await loadColeta(out)) || emptyColeta();
    print(await saveColeta(out, mergeColeta(existing, { dns: [result] })));
  } else {
    print(result);
  }
} else if (cmd === "fetch") {
  const pagina = await fetchPagina(arg("--url"));
  const out = arg("--out");
  if (out) {
    const existing = (await loadColeta(out)) || emptyColeta();
    print(await saveColeta(out, mergeColeta(existing, { paginas: [pagina] })));
  } else {
    print(pagina);
  }
} else if (cmd === "evidencia") {
  const out = arg("--out");
  if (!out) {
    console.error("Falta --out");
    process.exit(2);
  }
  const row = {
    campo: arg("--campo"),
    valor: arg("--valor"),
    url: arg("--url"),
    data: arg("--data", new Date().toISOString().slice(0, 10)),
  };
  if (!row.campo || !row.valor) {
    console.error("Falta --campo e/ou --valor");
    process.exit(2);
  }
  const existing = (await loadColeta(out)) || emptyColeta();
  print(await saveColeta(out, mergeColeta(existing, { evidencias: [row] })));
} else if (cmd === "report") {
  const file = arg("--in") || arg("--out");
  if (!file) {
    console.error("Falta --in");
    process.exit(2);
  }
  const coleta = await loadColeta(file);
  if (!coleta) {
    console.error(`não achei ${file}`);
    process.exit(2);
  }
  print(reportGaps(coleta));
} else if (cmd === "init") {
  const slug = arg("--slug");
  const nome = arg("--nome");
  const bairro = arg("--bairro");
  if (!slug || !nome || !bairro) {
    console.error("Falta --slug --nome --bairro");
    process.exit(2);
  }
  const out = arg("--out") || defaultOutFromSlug(slug);
  const existing = (await loadColeta(out)) || emptyColeta();
  const nicho = arg("--nicho", existing.nicho || "padaria artesanal");
  print(
    await saveColeta(
      out,
      mergeColeta(existing, {
        slug,
        nome,
        bairro,
        nicho,
        comando: "init",
        query: `${nome} ${bairro} São Paulo`,
        queriesWeb: discoveryQueries(nicho, bairro),
        nota: "Scaffold. Preencher evidencias[] com fonte. Sem Places, não inventar nomes.",
      }),
    ),
  );
} else if (cmd === "search" || cmd === "lead") {
  const nicho = arg("--nicho", "padaria artesanal");
  const bairro = arg("--bairro");
  const nome = arg("--nome");
  const slug = arg("--slug");
  if (!bairro) {
    console.error("Falta --bairro");
    process.exit(2);
  }
  if (cmd === "lead" && !nome) {
    console.error("Falta --nome");
    process.exit(2);
  }
  const query =
    cmd === "lead" && nome
      ? `${nome} ${bairro} São Paulo`
      : `${nicho} ${bairro} São Paulo`;
  const queries = discoveryQueries(nicho, bairro);
  const places = await placesSearch(query);
  const candidatos = (places.places || []).filter((p) =>
    ["sem_site", "tem_dominio", "site_basico"].includes(p.site.veredito),
  );
  const evidencias = [];
  if (cmd === "lead" && places.ok) {
    const match = (places.places || []).find(
      (p) => p.name && nome && p.name.toLowerCase().includes(nome.toLowerCase().split(" ")[0]),
    );
    if (match) evidencias.push(...evidenciasFromPlace(match));
  }
  const payload = {
    coletadoEm: new Date().toISOString(),
    comando: cmd,
    slug: slug || "",
    nome: nome || "",
    nicho,
    bairro,
    query,
    placesKey: Boolean(placesKey()),
    places,
    queriesWeb: queries,
    nota: places.ok
      ? "Filtrar sem_site + site_basico na skill. Não inventar o que Places não trouxe."
      : "Sem Places: usar queriesWeb na busca. Este script não gera nomes sozinho.",
    candidatos,
    evidencias,
  };
  const out = arg("--out") || (slug ? defaultOutFromSlug(slug) : "");
  if (out) {
    const existing = (await loadColeta(out)) || emptyColeta();
    print(await saveColeta(out, mergeColeta(existing, payload)));
  } else {
    print(emptyColeta(payload));
  }
} else {
  console.error(USAGE);
  process.exit(2);
}
}

const isMain =
  Boolean(process.argv[1]) &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href;
if (isMain) {
  await main();
}
