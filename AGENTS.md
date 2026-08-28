<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Cloud agents install dependencies with `npm ci` (see `.cursor/environment.json`). The **Giz Pay / curso** app has no env vars, databases, or external services: student progress lives in `localStorage`, and forms confirm locally.

The Next.js dev server of the **curso** listens on **http://localhost:43117**. Verify UI work there, not only with a screenshot:

| URL | What it is |
| --- | --- |
| `/` | Giz Pay 2.0 homepage |
| `/curso` | Course home |
| `/prototipo` | Same site plus the course bar |
| `/auditoria` | Site audit |
| `/wireframes` | Figma frame spec |

Before finishing work on the curso, run `npm run typecheck` (root `tsconfig` excludes `sites/`). If `next-env.d.ts` is missing (it is gitignored), generate it by starting `npm run dev` once.

## Central de operações (padrão)

Automação de **criação de sites para PME** (prospecção SP → dossiê → Superdesign → standby `{slug}-product`) opera **neste repositório**, pela skill `central-operacoes` e o quadro `prospeccao/CENTRAL.md`. Não desviar para outro Cloud Agent.

- Curso Giz Pay = raiz, porta 43117, projeto Vercel `gizpayteste`.
- Site de cliente = `sites/<slug>/`, projeto Vercel **novo** `{slug}-product`. Nunca `vercel --prod` na raiz.
- Segredo de Cloud: `VERCEL_TOKEN`. Superdesign: login CLI neste VM. Amplemarket: não conectar.
- No ar: Joya e Kio. A Padoca Vegan já tem site em `sites/`, ainda não publicado.

**O padrão dos standbys está congelado.** A linha está sendo melhorada em 5 parâmetros e a regra do usuário é não implementar antes de os cinco escopos fecharem — ler [`.cursor/skills/central-operacoes/parametros.md`](.cursor/skills/central-operacoes/parametros.md) antes de mexer em `template/`, `schema.ts`, scaffold ou verificadores. Gerar standby novo com o padrão v1 como está segue liberado.
