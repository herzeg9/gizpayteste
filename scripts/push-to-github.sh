#!/usr/bin/env bash
# Push do projeto para https://github.com/herzeg9/gizpayteste
#
# Pré-requisitos:
# 1. Repo criado no GitHub (pode estar vazio): https://github.com/herzeg9/gizpayteste
# 2. Autenticação: `gh auth login` OU Personal Access Token com escopo repo
#
# Uso:
#   chmod +x scripts/push-to-github.sh
#   ./scripts/push-to-github.sh

set -euo pipefail

REPO_URL="https://github.com/herzeg9/gizpayteste.git"
BRANCH="main"

cd "$(dirname "$0")/.."

if ! git remote get-url github &>/dev/null; then
  git remote add github "$REPO_URL"
  echo "Remote 'github' adicionado: $REPO_URL"
else
  git remote set-url github "$REPO_URL"
  echo "Remote 'github' atualizado: $REPO_URL"
fi

echo "Enviando branch $BRANCH..."
git push -u github "$BRANCH"

echo ""
echo "Concluído. Repositório: https://github.com/herzeg9/gizpayteste"
