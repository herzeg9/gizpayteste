<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Cloud agents install dependencies with `npm ci` (see `.cursor/environment.json`). There are no environment variables, databases, or external services: student progress lives in `localStorage`, and forms confirm locally.

The Next.js dev server listens on **http://localhost:43117**. Verify UI work there, not only with a screenshot:

| URL | What it is |
| --- | --- |
| `/` | Giz Pay 2.0 homepage |
| `/curso` | Course home |
| `/prototipo` | Same site plus the course bar |
| `/auditoria` | Site audit |
| `/wireframes` | Figma frame spec |

Before finishing, run `npm run typecheck`. `npm run lint` currently fails on pre-existing `react-hooks/set-state-in-effect` issues in checklist, calculator, reveal, and progress hooks — do not treat those as blockers unless you edited those files. If `next-env.d.ts` is missing (it is gitignored), generate it by starting `npm run dev` once.
