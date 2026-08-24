/** Design system da proposta Giz Pay 2.0 — aula 5.4. */
export const giz = {
  deep: "#07211B",
  surface: "#0E2F27",
  raised: "#143B31",
  light: "#F6F8F5",
  lightAlt: "#EAEFE9",
  fgDark: "#F2F7F3",
  fgLight: "#0B1F1A",
  mutedDark: "#9CB0A8",
  mutedLight: "#5A6B64",
  primary: "#4ADE80",
  primaryPress: "#35C46B",
  amber: "#F0B429",
  danger: "#E5484D",
  borderDark: "rgba(242,247,243,0.12)",
  borderLight: "rgba(11,31,26,0.10)",
} as const;

export const brl = (value: number, digits = 0) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
