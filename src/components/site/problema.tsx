import { Clock4, EyeOff, Percent, PhoneCall } from "lucide-react";
import { Reveal } from "./reveal";
import { ChalkMark, Section, SectionHeader } from "./section";

const pains = [
  {
    icon: Clock4,
    title: "Repasse com atraso",
    description:
      "Pais pagam hoje, a escola recebe em 15, 30 ou 60 dias — e ainda com a taxa cheia descontada.",
  },
  {
    icon: Percent,
    title: "Taxa sobre o faturamento",
    description:
      "De 2% a 6% de tudo que a escola fatura repassados a um terceiro, todo mês, sem contrapartida.",
  },
  {
    icon: PhoneCall,
    title: "Cobrança manual",
    description:
      "Secretaria emitindo boleto no banco, ligando para cobrar e controlando inadimplência em planilha.",
  },
  {
    icon: EyeOff,
    title: "Nenhuma visibilidade",
    description:
      "A direção não sabe o que entrou, o que atrasou nem quem deve — até o relatório do fim do mês chegar.",
  },
];

export function Problema() {
  return (
    <Section id="problema">
      <SectionHeader
        eyebrow="O problema"
        title={
          <>
            Sua escola trabalha o mês inteiro. Quem lucra é o{" "}
            <ChalkMark>intermediário</ChalkMark>.
          </>
        }
        description="Os intermediários tradicionais retêm o caixa da escola, cobram uma taxa sobre o faturamento e devolvem o dinheiro semanas depois. A Giz Pay faz o contrário: automatiza a cobrança e mantém a escola no comando."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pains.map((pain, i) => (
          <Reveal key={pain.title} delay={i * 0.08}>
            <article className="group h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <span className="mb-4 grid size-11 place-items-center rounded-xl bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive/15">
                <pain.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-display text-lg font-semibold">{pain.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{pain.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
