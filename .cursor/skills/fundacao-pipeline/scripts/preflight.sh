#!/usr/bin/env bash
# Preflight da fundação Estúdio Giz. Exit 0 = mínimo ok para dossiê.
# Exit 2 = falta peça de autenticação (dizer ao usuário, não fingir deploy).
set -u
fail=0
warn=0

ok() { printf '  OK   %s\n' "$1"; }
bad() { printf '  FALTA %s\n' "$1"; fail=1; }
maybe() { printf '  OPC  %s\n' "$1"; warn=1; }

echo "Fundação pipeline"
echo "-----------------"

if command -v npx >/dev/null 2>&1; then
  ok "npx"
else
  bad "npx (Node)"
fi

sd_out="$(npx --yes @superdesign/cli@latest 2>/dev/null | tr -d '\r' || true)"
if printf '%s' "$sd_out" | grep -q 'authenticated as'; then
  ok "Superdesign autenticado"
elif printf '%s' "$sd_out" | grep -q 'not authenticated'; then
  bad "Superdesign login (npx @superdesign/cli@latest login)"
else
  maybe "Superdesign (não deu para ler auth:)"
fi

if [ -n "${VERCEL_TOKEN:-}" ]; then
  ok "VERCEL_TOKEN no ambiente"
else
  bad "VERCEL_TOKEN (Cloud Agent não faz OAuth do MCP)"
fi

vercel_who="$(npx --yes vercel@latest whoami 2>/dev/null | tr -d '\r' || true)"
if printf '%s' "$vercel_who" | grep -qiE 'logged out|Error|not.*login'; then
  maybe "vercel whoami (use VERCEL_TOKEN ou vercel login no Desktop)"
elif [ -n "$vercel_who" ]; then
  ok "Vercel CLI: $(printf '%s' "$vercel_who" | tail -n 1)"
fi

if [ -n "${GOOGLE_PLACES_API_KEY:-}" ] || [ -n "${GOOGLE_MAPS_API_KEY:-}" ]; then
  ok "Places/Maps API key"
else
  maybe "GOOGLE_PLACES_API_KEY (filtra websiteUri vazio no Maps)"
fi

echo "-----------------"
if [ "$fail" -ne 0 ]; then
  echo "Bloqueado para Superdesign e/ou URL Vercel. Dossiê ainda pode rodar."
  exit 2
fi
echo "Mínimo ok."
exit 0
