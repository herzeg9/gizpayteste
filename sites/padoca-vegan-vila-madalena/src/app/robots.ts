import type { MetadataRoute } from "next";
import { negocio } from "@/data/negocio";

/**
 * Proposta indexada competiria com o Instagram do cliente na busca.
 * Isso é dano, não exposição.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${negocio.baseUrl}/sitemap.xml`,
  };
}
