# Publicar em https://github.com/herzeg9/gizpayteste

O código deste projeto está pronto para push. O ambiente Cloud Agent **não tem credenciais** da sua conta GitHub — o push final precisa ser feito por você (ou com token configurado).

## Opção A — GitHub CLI (recomendado)

```bash
gh auth login
./scripts/push-to-github.sh
```

## Opção B — HTTPS com token

1. Crie um [Personal Access Token](https://github.com/settings/tokens) com escopo `repo`.
2. No terminal, na pasta do projeto:

```bash
git remote add github https://github.com/herzeg9/gizpayteste.git 2>/dev/null || \
  git remote set-url github https://github.com/herzeg9/gizpayteste.git

git push -u github main
```

Quando pedir senha, use o **token** (não a senha da conta).

## Opção C — Clonar do Cursor e empurrar

Se você baixou o projeto pelo Cursor, abra o terminal local na pasta e rode os comandos acima.

## Depois do push — site no ar (Vercel)

1. [vercel.com](https://vercel.com) → **Add New Project** → importe `herzeg9/gizpayteste`.
2. Framework: **Next.js** (detectado automaticamente).
3. Deploy.
4. Site repaginado: `https://seu-projeto.vercel.app/` (raiz — não precisa de `/site`)

## Conteúdo do repositório

- `/` — homepage Giz Pay repaginada
- `/curso` — curso Estúdio Giz
- `/auditoria` — diagnóstico do site atual
- `/wireframes` — spec para Figma
- Curso completo Estúdio Giz (aulas, protótipo, demos)
