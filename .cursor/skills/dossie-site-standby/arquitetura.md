# Arquitetura do standby (padrão v1)

Parâmetro **1 de 5** da linha de operações (estrutura/arquitetura). Vale para **todo** site em `sites/<slug>/`.

A tese: um standby genérico não vale nada. O que dá valor é a arquitetura — e neste produto a arquitetura se prova em **procedência do dado** e **segurança**. Site de proposta não tem login nem carrinho, então a superfície de ataque é escolha nossa: mantemos em zero e provamos isso no header.

## As quatro camadas (não inverter)

```
prospeccao/leads/<slug>/coleta.json     evidência (etapa 1) — campo · valor · URL · data
        ↓  scaffold-site.mjs
sites/<slug>/src/data/negocio.ts        camada de dados — Campo<T> tipado
        ↓
sites/<slug>/src/lib/                   derivação — seo.ts (JSON-LD), seguranca.ts (CSP)
        ↓
sites/<slug>/src/app/ + components/     apresentação — nunca lê fato cru
```

Regra da camada: **a apresentação não decide o que é fato.** Ela recebe `Campo<T>` e renderiza o estado. Quem decide é a coleta.

## Camada de dados — procedência obrigatória

`src/data/schema.ts` é o contrato. Todo dado do negócio é um `Campo<T>` em um destes três estados:

| Estado | Quando | No site | No JSON-LD |
|---|---|---|---|
| `fato(valor, fonte)` | tem URL pública + data | valor limpo | **entra** |
| `placeholder(valor, motivo)` | inventamos para o layout respirar | valor + badge visível | nunca |
| `lacuna(motivo, fontes)` | não achamos, **ou as fontes divergem** | o conflito, explícito | nunca |

`Fonte` é a linha da tabela Evidências: `{ url, veiculo, data }`. Não existe `fato` sem `Fonte` — o TypeScript não deixa compilar.

Isso resolve na estrutura o que antes dependia de o agente lembrar. A segunda-feira da Padoca (Restaurant Guru diz 7h–20h, HappyCow diz fechado) é uma `lacuna` com **as duas** fontes — não uma frase que alguém escreveu à mão e que a próxima geração de layout apaga.

## Segurança — o que o cliente compra

`src/lib/seguranca.ts` monta os headers; `next.config.ts` os aplica em `/(.*)`.

| Header | Valor | Por quê aqui |
|---|---|---|
| `Content-Security-Policy` | ver abaixo | XSS, injeção, clickjacking |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | sem downgrade para http |
| `X-Content-Type-Options` | `nosniff` | sem MIME sniffing |
| `X-Frame-Options` | `DENY` | phishing por iframe da proposta |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | não vaza a URL da proposta |
| `Permissions-Policy` | câmera, mic, geo, pagamento — tudo `()` | o site não pede nada |
| `Cross-Origin-Opener-Policy` | `same-origin` | isola o browsing context |
| `Cross-Origin-Resource-Policy` | `same-origin` | evita embed de terceiro |
| `X-DNS-Prefetch-Control` | `off` | não pré-resolve host de terceiro |

CSP do standby:

```
default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';
img-src 'self' data: blob:; font-src 'self'; connect-src 'self';
object-src 'none'; base-uri 'self'; form-action 'none';
frame-ancestors 'none'; upgrade-insecure-requests
```

Três decisões que precisam de justificativa, não de fé:

1. **Sem `nonce`.** Nonce obriga render dinâmico (a doc do Next é explícita), o que mataria o cache de CDN de uma página que é 100% estática. Como não há script de terceiro nem script inline nosso, `script-src 'self'` já é estrito — mais estrito que o `'unsafe-inline'` que o guia "sem nonce" do Next sugere.
2. **`style-src` aceita `'unsafe-inline'`.** O Next injeta CSS inline no streaming do App Router. É a única folga, e ela vale para estilo, não para script.
3. **`form-action 'none'`.** O standby não tem formulário. Se um dia tiver, é decisão consciente — o header quebra primeiro.

Fonte não é de terceiro: `next/font/google` baixa e serve do próprio domínio no build, então `font-src 'self'` fecha.

## Rotas e arquivos obrigatórios

```
src/app/
  layout.tsx      metadata + JSON-LD derivado + faixa de proposta
  page.tsx        home
  robots.ts       noindex (proposta não é site oficial no Google)
  sitemap.ts      coerente com o robots
  not-found.tsx   404 com a marca, não a tela do Next
```

`robots.ts` com `disallow: "/"` + `metadata.robots.index = false`. Proposta indexada compete com o Instagram do cliente no Google — é dano, não exposição.

## SEO / dados estruturados

`src/lib/seo.ts` monta o JSON-LD a partir de `negocio.ts` e **descarta** o que não for `fato`. Nunca escrever JSON-LD à mão no layout: telefone duplicado no `layout.tsx` e no `content.ts` diverge no primeiro ajuste, e dado estruturado errado é penalização.

## Acessibilidade

O que o tipo garante, o revisor não precisa lembrar:

- `Imagem = { src, alt }` — **`alt` é obrigatório**. Não existe imagem sem alternativo na camada de dados.
- `<html lang="pt-BR">` no layout: leitor de tela e tradução dependem disso.
- A faixa de proposta é `role="note"`: é um aviso sobre a página, não conteúdo dela.
- Estrutura semântica: `nav`, `main`, `footer`, `section`, títulos em ordem; FAQ em `dl`/`dt`/`dd`.
- Placeholder e lacuna aparecem como **texto**, nunca só como cor — quem não distingue cor continua entendendo o que é proposta e o que é fato.

O verificador confere `lang` e o `role` da faixa. Contraste e navegação por teclado são revisão de layout (parâmetro 4), não de arquitetura.

## Observabilidade

Standby não recebe analytics, e isso é decisão, não esquecimento: métrica de terceiro significa script de terceiro, cookie e um `connect-src` aberto — o oposto do que estamos vendendo. O que fica:

- Logs de build e de runtime no projeto Vercel do próprio standby (`get_runtime_logs`), isolado do `gizpayteste`.
- `verificar-arquitetura.mjs --url` como sonda: roda contra a URL publicada e falha se um header sumiu depois do deploy.

Medição de audiência, se um dia entrar, é conversa do parâmetro 5 (entrega) — e aí a CSP muda junto, de propósito.

## Verificação (roda no CI e antes do deploy)

```bash
node .cursor/skills/dossie-site-standby/scripts/verificar-arquitetura.mjs --slug <slug>
```

Falha (exit 1) se: faltar header da tabela, CSP com `unsafe-eval`/`script-src` frouxo, faltar `robots.ts`/`sitemap.ts`/`not-found.tsx`, faltar a faixa de proposta, o JSON-LD sair de dado que não é `fato`, houver `.env*` rastreado no git, ou a camada de dados não existir.

Com `--url` ele lê os headers da resposta real. Sem `--url` é só leitura de arquivo — útil no CI, mas não prova o runtime.

**Ao mexer no verificador, refaça o teste negativo.** Um portão que só sabe dizer “ok” não é portão. As mutações que precisam reprovar:

| Mutação | Deve falhar em |
|---|---|
| tirar `headers()` do `next.config.ts` | `next.config`, `x-powered-by` |
| `script-src 'self' 'unsafe-inline'` | `csp-script` |
| remover `frame-ancestors 'none'` | `csp` |
| `unsafe-eval` fora do ramo de dev | `csp-eval` |
| JSON-LD literal no `layout.tsx` | `json-ld-inline` |

A checagem de CSP ignora comentários de propósito: numa versão anterior, a diretiva citada no cabeçalho do arquivo satisfazia o teste e a diretiva real passava sem ser lida.

## O que este padrão não cobre

Funcionalidade, desempenho, especificidade e entrega são os parâmetros 2 a 5 — cada um entra depois, com a especificação do usuário. Não antecipar aqui.
