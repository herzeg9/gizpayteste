import type { Metadata } from "next";
import { GizPaySite } from "@/components/gizpay-site/gizpay-site";

export const metadata: Metadata = {
  title: "Giz Pay — Gestão financeira escolar sem intermediários",
  description:
    "Cobrança automática por Pix, boleto e cartão, liquidação direto no CNPJ da escola.",
  openGraph: {
    title: "Giz Pay — O dinheiro da sua escola, no seu controle",
    description:
      "Cobrança automática, inadimplência sob controle e liquidação direto na conta da escola.",
    locale: "pt_BR",
    type: "website",
  },
};

/** Homepage pública — mesmo conteúdo que antes ficava em /site. */
export default function HomePage() {
  return <GizPaySite />;
}
