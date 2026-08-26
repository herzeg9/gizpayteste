import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} · proposta Estúdio Giz`,
  description:
    "Proposta de site para a Joya Boulangerie, Vila Madalena. Não é o site oficial.",
  robots: { index: false, follow: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: site.name,
  telephone: "+55-11-91038-9816",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "BR",
  },
  sameAs: [site.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
