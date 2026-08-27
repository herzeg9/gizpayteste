import Link from "next/link";
import { negocio } from "@/data/negocio";
import { FaixaProposta } from "@/components/faixa-proposta";

export default function NotFound() {
  return (
    <>
      <FaixaProposta />
      <main className="mx-auto flex max-w-2xl flex-1 flex-col justify-center gap-4 px-6 py-24">
        <p className="text-sm tracking-widest uppercase opacity-60">404</p>
        <h1 className="text-3xl font-semibold">Página não encontrada</h1>
        <p className="opacity-80">
          Esta proposta do {negocio.nome} tem uma página só.
        </p>
        <Link href="/" className="underline underline-offset-4">
          Voltar para o início
        </Link>
      </main>
    </>
  );
}
