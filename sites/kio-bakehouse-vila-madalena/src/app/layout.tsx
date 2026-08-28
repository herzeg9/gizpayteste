import { Fraunces, Inter } from "next/font/google";
import { negocio } from "@/data/negocio";
import { jsonLdNegocio, metadataNegocio } from "@/lib/seo";
import "./globals.css";

// Duas famílias, não três: o teto do parâmetro 3 existe porque cada família a
// mais é peso de rede. A Fraunces cobre display e corpo serifado.
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

export const metadata = metadataNegocio(negocio);

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-charcoal">
        <script
          type="application/ld+json"
          // Derivado de `negocio`: só entra fato sem ressalva.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdNegocio(negocio)),
          }}
        />
        {children}
      </body>
    </html>
  );
}
