import { negocio } from "@/data/negocio";

/** Faixa obrigatória em todo standby. O verificador falha sem ela. */
export function FaixaProposta() {
  return (
    <div
      role="note"
      className="z-50 w-full bg-olive px-4 py-2 text-center text-[10px] tracking-[0.2em] text-cream uppercase sm:text-xs"
    >
      {negocio.proposta.faixa}
    </div>
  );
}
