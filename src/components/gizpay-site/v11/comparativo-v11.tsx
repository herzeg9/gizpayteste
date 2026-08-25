import { AlertCircle, CheckCircle } from "lucide-react";
import { giz } from "@/components/prototipo/tokens";

const ANTES = [
  { valor: "15–30 dias", label: "Prazo de repasse" },
  { valor: "2–6%", label: "Taxa sobre receita" },
  { valor: "24h", label: "Trabalho manual por mês" },
];

const DEPOIS = [
  { valor: "Instantâneo", label: "Liquidação" },
  { valor: "Fixa", label: "Tarifa predefinida" },
  { valor: "Automática", label: "Cobrança e conciliação" },
];

export function ComparativoV11() {
  return (
    <section id="comparativo" className="section-padding" style={{ background: giz.deep }}>
      <div className="mx-auto max-w-[1060px] px-5">
        <div className="mb-14 text-center">
          <span className="overline mb-4 block">Comparativo</span>
          <h2 className="font-display text-[34px] md:text-[48px]">O que muda de verdade</h2>
          <p className="mx-auto mt-5 max-w-[620px] text-center" style={{ color: giz.mutedDark }}>
            Compare uma operação dependente de intermediários com uma gestão financeira
            direta, previsível e automatizada.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <article
            className="rounded-[24px] border p-6 md:p-8"
            style={{ borderColor: "rgba(229,72,77,0.25)", background: giz.surface }}
          >
            <div className="mb-8 flex items-center gap-4 border-b border-white/10 pb-6">
              <span
                className="grid size-12 shrink-0 place-items-center rounded-2xl"
                style={{ background: giz.danger, color: giz.fgDark }}
              >
                <AlertCircle className="size-6" />
              </span>
              <div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: giz.danger }}
                >
                  Antes
                </p>
                <h3 className="mt-1 text-2xl font-semibold">Intermediários</h3>
              </div>
            </div>
            <div className="space-y-4">
              {ANTES.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border p-5"
                  style={{ borderColor: "rgba(229,72,77,0.2)", background: giz.deep }}
                >
                  <p className="font-mono text-3xl" style={{ color: giz.danger }}>
                    {m.valor}
                  </p>
                  <p
                    className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: giz.mutedDark }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </article>
          <article
            className="rounded-[24px] border p-6 md:p-8"
            style={{ borderColor: "rgba(74,222,128,0.35)", background: giz.raised }}
          >
            <div className="mb-8 flex items-center gap-4 border-b border-white/10 pb-6">
              <span
                className="grid size-12 shrink-0 place-items-center rounded-2xl"
                style={{ background: giz.primary, color: giz.fgLight }}
              >
                <CheckCircle className="size-6" />
              </span>
              <div>
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: giz.primary }}
                >
                  Depois
                </p>
                <h3 className="mt-1 text-2xl font-semibold">Giz Pay</h3>
              </div>
            </div>
            <div className="space-y-4">
              {DEPOIS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border p-5"
                  style={{ borderColor: "rgba(74,222,128,0.25)", background: giz.deep }}
                >
                  <p className="font-mono text-3xl" style={{ color: giz.primary }}>
                    {m.valor}
                  </p>
                  <p
                    className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: giz.mutedDark }}
                  >
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
