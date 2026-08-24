import { Calculadora } from "@/components/site/calculadora";
import { ComoFunciona } from "@/components/site/como-funciona";
import { Comparativo } from "@/components/site/comparativo";
import { Faq } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { LeadForm } from "@/components/site/lead-form";
import { Marquee } from "@/components/site/marquee";
import { Modulos } from "@/components/site/modulos";
import { NaPratica } from "@/components/site/na-pratica";
import { Navbar } from "@/components/site/navbar";
import { Portal } from "@/components/site/portal";
import { Problema } from "@/components/site/problema";
import { Seguranca } from "@/components/site/seguranca";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Problema />
        <ComoFunciona />
        <Modulos />
        <Comparativo />
        <Calculadora />
        <Portal />
        <NaPratica />
        <Seguranca />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
