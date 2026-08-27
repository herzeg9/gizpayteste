import type { ReactNode } from "react";
import { type Campo, type Fonte, ehFato, ehLacuna } from "@/data/schema";

/**
 * Renderiza um `Campo<T>` conforme o estado. É impossível pintar um
 * placeholder sem o selo, ou uma lacuna como se fosse fato.
 */
export function Dado<T>({
  campo,
  children,
  aoFaltar,
}: {
  campo: Campo<T>;
  children: (valor: T) => ReactNode;
  aoFaltar?: (motivo: string, fontes: readonly Fonte[]) => ReactNode;
}) {
  if (ehLacuna(campo)) {
    return <>{aoFaltar ? aoFaltar(campo.motivo, campo.fontes) : <Lacuna motivo={campo.motivo} />}</>;
  }
  if (ehFato(campo)) {
    return <>{children(campo.valor)}</>;
  }
  return (
    <>
      {children(campo.valor)} <Selo>placeholder</Selo>
    </>
  );
}

export function Selo({ children = "placeholder" }: { children?: ReactNode }) {
  return (
    <span className="ml-1 inline-block border border-current px-1 py-px align-middle text-[10px] tracking-wide italic opacity-70">
      {children}
    </span>
  );
}

/** Lacuna aparece como lacuna: o cliente confirma, o site não chuta. */
export function Lacuna({ motivo }: { motivo: string }) {
  return <span className="text-sm italic opacity-70">{motivo}</span>;
}

/** Ressalva de um fato com fonte concorrente. */
export function Ressalva({ campo }: { campo: Campo<unknown> }) {
  if (!ehFato(campo) || !campo.ressalva) return null;
  return (
    <p className="mt-2 text-xs leading-relaxed italic opacity-70">
      {campo.ressalva}
    </p>
  );
}
