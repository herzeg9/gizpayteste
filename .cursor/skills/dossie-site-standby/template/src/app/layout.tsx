import { negocio } from "@/data/negocio";
import { jsonLdNegocio, metadataNegocio } from "@/lib/seo";
import "./globals.css";

export const metadata = metadataNegocio(negocio);

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          // Derivado de `negocio`: só entra o que é `fato`.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdNegocio(negocio)),
          }}
        />
        {children}
      </body>
    </html>
  );
}
