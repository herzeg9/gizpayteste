import Link from "next/link";
import { negocio } from "@/data/negocio";
import { FaixaProposta } from "@/components/faixa-proposta";

export default function NotFound() {
  return (
    <>
      <FaixaProposta />
      <main className="mx-auto flex max-w-2xl flex-1 flex-col justify-center gap-4 px-6 py-24">
        <p className="text-xs tracking-[0.2em] text-olive uppercase">404</p>
        <h1 className="font-display text-4xl">Página não encontrada</h1>
        <p className="text-charcoal/70">
          Esta proposta da {negocio.nome} tem uma página só.
        </p>
        <Link
          href="/"
          className="text-sm tracking-widest text-olive uppercase underline underline-offset-4"
        >
          Voltar para o início
        </Link>
      </main>
    </>
  );
}
