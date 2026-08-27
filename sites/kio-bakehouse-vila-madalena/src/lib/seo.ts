import type { Metadata } from "next";
import { fatoFirme, type Negocio } from "@/data/schema";

/**
 * JSON-LD derivado da camada de dados. Campo que não é `fato` fica de fora:
 * dado estruturado inventado é penalização, não enfeite.
 */
export function jsonLdNegocio(negocio: Negocio): Record<string, unknown> {
  const endereco = fatoFirme(negocio.endereco);
  const telefone = fatoFirme(negocio.telefone);
  const instagram = fatoFirme(negocio.instagram);
  const avaliacao = fatoFirme(negocio.avaliacao);
  const horarios = fatoFirme(negocio.horarios);

  const dados: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": negocio.tipoSchema,
    name: negocio.nome,
  };

  if (endereco) {
    dados.address = {
      "@type": "PostalAddress",
      streetAddress: endereco.logradouro,
      addressLocality: endereco.cidade,
      addressRegion: endereco.uf,
      postalCode: endereco.cep,
      addressCountry: "BR",
    };
  }
  if (telefone) dados.telephone = telefone;
  if (instagram) dados.sameAs = [instagram];
  if (horarios?.length) {
    dados.openingHours = horarios.map((h) => `${h.dias} ${h.horas}`);
  }
  if (avaliacao) {
    dados.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: avaliacao.nota,
      reviewCount: avaliacao.total,
    };
  }

  return dados;
}

/** Proposta não é o site oficial: nunca indexar. */
export function metadataNegocio(negocio: Negocio): Metadata {
  return {
    metadataBase: new URL(negocio.baseUrl),
    title: `${negocio.nome} · proposta Estúdio Giz`,
    description: `${negocio.resumo} Proposta de site do Estúdio Giz — não é o site oficial.`,
    robots: { index: false, follow: false, nocache: true },
    openGraph: {
      title: `${negocio.nome} · proposta Estúdio Giz`,
      description: negocio.resumo,
      type: "website",
      locale: "pt_BR",
    },
  };
}
