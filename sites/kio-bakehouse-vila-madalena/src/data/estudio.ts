/**
 * Canal do Estúdio Giz. **Não** é `Negocio`: aquilo é ficha do lead, e cada
 * campo dela carrega procedência porque é afirmação sobre terceiro. Isto aqui
 * é configuração nossa, sem `Campo` e sem `Fonte`.
 *
 * Serve à decisão do parâmetro 2 sobre medição: em vez de analytics, o CTA
 * "Falar com o Estúdio Giz" leva o **slug da proposta** na mensagem. Quando o
 * dono responde, sabemos exatamente qual proposta converteu — sem script, sem
 * cookie e sem alterar a CSP.
 */
export const estudio = {
  nome: "Estúdio Giz",
  /**
   * WhatsApp em formato internacional, só dígitos. `null` enquanto não for
   * informado: número inventado numa proposta é pior que CTA ausente, então o
   * layout omite o botão em vez de publicar link quebrado.
   */
  whatsapp: null as string | null,
} as const;

/** Link de conversa com o slug embutido, ou `null` se não há canal. */
export function falarComEstudio(slug: string): string | null {
  if (!estudio.whatsapp) return null;
  // Sem emoji de propósito: o redirect do wa.me corrompe caractere de 4 bytes.
  const texto = `Ola! Vi a proposta ${slug} do Estudio Giz e quero falar sobre ela.`;
  return `https://wa.me/${estudio.whatsapp}?text=${encodeURIComponent(texto)}`;
}
