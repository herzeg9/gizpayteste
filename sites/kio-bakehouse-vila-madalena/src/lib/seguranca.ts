/**
 * Headers de segurança do standby.
 *
 * O site é estático, sem formulário, sem cookie e sem script de terceiro.
 * Por isso a CSP dispensa `nonce` (que forçaria render dinâmico e mataria o
 * cache de CDN) e ainda assim mantém `script-src 'self'`.
 */

export type Cabecalho = { key: string; value: string };

export function politicaCsp({ dev }: { dev: boolean }): string {
  const diretivas = [
    "default-src 'self'",
    // Em dev o React usa eval para reconstruir stack trace do servidor.
    `script-src 'self'${dev ? " 'unsafe-eval'" : ""}`,
    // O App Router injeta CSS inline durante o streaming. Folga de estilo, não de script.
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    // next/font/google baixa a fonte no build e serve do próprio domínio.
    "font-src 'self'",
    `connect-src 'self'${dev ? " ws:" : ""}`,
    "object-src 'none'",
    "base-uri 'self'",
    // Standby não tem formulário. Se ganhar um, este header quebra primeiro.
    "form-action 'none'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ];
  return diretivas.join("; ");
}

export function cabecalhosSeguranca({ dev }: { dev: boolean }): Cabecalho[] {
  return [
    { key: "Content-Security-Policy", value: politicaCsp({ dev }) },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
      key: "Permissions-Policy",
      value: [
        "accelerometer=()",
        "camera=()",
        "geolocation=()",
        "gyroscope=()",
        "magnetometer=()",
        "microphone=()",
        "payment=()",
        "usb=()",
      ].join(", "),
    },
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
    { key: "X-DNS-Prefetch-Control", value: "off" },
  ];
}
