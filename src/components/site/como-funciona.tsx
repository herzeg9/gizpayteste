import { Reveal } from "./reveal";
import { ChalkMark, Section, SectionHeader } from "./section";

const steps = [
  {
    number: "01",
    title: "Cadastro dos alunos",
    description:
      "Importe a planilha de matrículas ou cadastre pela tela. As 12 mensalidades do ano nascem prontas, com valor, vencimento, desconto e responsável financeiro.",
  },
  {
    number: "02",
    title: "Cobrança automática",
    description:
      "Pix, boleto e cartão emitidos antes do vencimento. Régua de lembretes por e-mail e WhatsApp, com multa e juros aplicados na data certa.",
  },
  {
    number: "03",
    title: "Recebimento direto",
    description:
      "O pagamento cai na conta da escola. O sistema dá baixa em segundos, concilia e atualiza a inadimplência em tempo real.",
  },
  {
    number: "04",
    title: "Visão em tempo real",
    description:
      "Painel com entradas, atrasos, devedores e rentabilidade por turma. Relatórios prontos para a contabilidade e para o conselho.",
  },
];

export function ComoFunciona() {
  return (
    <Section id="como-funciona" className="bg-card">
      <SectionHeader
        eyebrow="Como funciona"
        title={
          <>
            Da matrícula ao caixa em quatro passos — e <ChalkMark>nenhum</ChalkMark> deles é
            manual.
          </>
        }
        description="A Giz Pay conecta matrícula, cobrança e conciliação em um único fluxo. Você cadastra uma vez; o resto acontece sozinho."
      />

      <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
        {/* Linha conectando os passos no desktop */}
        <span
          aria-hidden="true"
          className="absolute top-7 right-[12%] left-[12%] hidden h-px border-t-2 border-dashed border-primary/25 lg:block"
        />
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.12}>
            <li className="relative flex h-full flex-col gap-3 lg:items-center lg:text-center">
              <span className="relative z-10 grid size-14 place-items-center rounded-2xl border-2 border-primary/20 bg-background font-display text-lg font-semibold text-primary shadow-sm">
                {step.number}
              </span>
              <h3 className="font-display text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
