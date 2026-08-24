import { Banknote, Hourglass, LineChart } from "lucide-react";
import { Reveal } from "./reveal";
import { Section, SectionHeader } from "./section";

const changes = [
  {
    icon: Hourglass,
    title: "Menos trabalho manual",
    description:
      "A secretaria deixa de passar o dia emitindo boleto e cobrando por telefone. A régua automática cuida dos lembretes.",
  },
  {
    icon: LineChart,
    title: "Caixa em tempo real",
    description:
      "A direção acompanha o recebido do dia a qualquer momento, sem depender do relatório de fim de mês.",
  },
  {
    icon: Banknote,
    title: "Dinheiro na conta certa",
    description:
      "O pagamento cai direto na conta da escola, no CNPJ dela, melhorando o fluxo de caixa desde o primeiro mês.",
  },
];

export function NaPratica() {
  return (
    <Section id="na-pratica">
      <SectionHeader
        eyebrow="Na prática"
        title="O que muda no dia a dia da escola."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {changes.map((change, i) => (
          <Reveal key={change.title} delay={i * 0.1}>
            <article className="flex h-full gap-4 rounded-2xl border bg-card p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <change.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="mb-1.5 font-display text-lg font-semibold">{change.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {change.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
