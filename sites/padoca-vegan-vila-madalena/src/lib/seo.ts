import type { Metadata } from "next";
import { apenasFato, fatoFirme, valorExibivel, type Negocio } from "@/data/schema";

/**
 * JSON-LD derivado da camada de dados. Campo que não é `fato` fica de fora,
 * e fato com fonte concorrente (`ressalva`) também: dado estruturado não sabe
 * dizer "as fontes divergem".
 */
export function jsonLdNegocio(negocio: Negocio): Record<string, unknown> {
  const endereco = fatoFirme(negocio.endereco);
  const telefone = fatoFirme(negocio.telefone);
  const instagram = fatoFirme(negocio.instagram);
  const avaliacao = fatoFirme(negocio.avaliacao);
  // Horário usa `apenasFato`, não `fatoFirme`: a certeza aqui é declarada
  // **por linha**, pela presença de `iso`. Uma ressalva no campo (ex.: um
  // veículo discorda da segunda) não deve apagar os outros seis dias, que são
  // inequívocos — a linha divergente simplesmente não tem `iso`.
  const horarios = apenasFato(negocio.horarios);

  const dados: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": negocio.tipoSchema,
    name: negocio.nome,
    url: negocio.baseUrl,
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

  // Só emite a linha que tem forma legível por máquina. O texto que o humano
  // lê ("Terça a sábado, 8h – 22h") não é `openingHours` válido.
  const comIso = (horarios ?? []).filter((h) => h.iso);
  if (comIso.length) {
    dados.openingHoursSpecification = comIso.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.iso!.dias,
      opens: h.iso!.abre,
      closes: h.iso!.fecha,
    }));
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
  const card = negocio.copy.previa ?? negocio.copy.heroImagem;
  const imagem = valorExibivel(card);
  const titulo = `${negocio.nome} · proposta Estúdio Giz`;

  return {
    metadataBase: new URL(negocio.baseUrl),
    title: titulo,
    description: `${negocio.resumo} Proposta de site do Estúdio Giz — não é o site oficial.`,
    robots: { index: false, follow: false, nocache: true },
    openGraph: {
      title: titulo,
      description: negocio.resumo,
      type: "website",
      locale: "pt_BR",
      url: negocio.baseUrl,
      // Sem isto o link cai no WhatsApp do dono como texto cru.
      images: imagem ? [{ url: imagem.src, alt: imagem.alt }] : undefined,
    },
    twitter: {
      card: imagem ? "summary_large_image" : "summary",
      title: titulo,
      description: negocio.resumo,
      images: imagem ? [imagem.src] : undefined,
    },
  };
}
