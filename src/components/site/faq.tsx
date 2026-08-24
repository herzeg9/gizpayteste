import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";
import { Section, SectionHeader } from "./section";

const faqs = [
  {
    question: "O dinheiro cai mesmo direto na conta da escola?",
    answer:
      "Sim. A liquidação acontece na conta da própria escola, no CNPJ dela. A Giz Pay não retém valores nem intermedia repasse.",
  },
  {
    question: "Preciso trocar o sistema acadêmico que já uso?",
    answer:
      "Não. A Giz Pay cuida da camada financeira e convive com o sistema pedagógico atual, importando a base por planilha ou integração.",
  },
  {
    question: "Quanto tempo leva a implantação?",
    answer:
      "De 7 a 15 dias em média, incluindo importação da base, configuração da régua de cobrança e treinamento da equipe.",
  },
  {
    question: "Como funciona a cobrança da Giz Pay?",
    answer:
      "Assinatura mensal por aluno ativo, com valor previsível. Não cobramos percentual sobre o faturamento da escola.",
  },
  {
    question: "A plataforma acompanha a identidade visual da escola?",
    answer:
      "Sim. O painel e o portal do responsável são white label: logo, cores e comunicações saem com a marca da instituição.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeader
        eyebrow="Perguntas frequentes"
        title="Antes de falar com a gente."
        description="Ficou algo de fora? Escreva para contato.gizpay@gmail.com."
      />

      <Reveal className="mx-auto max-w-2xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
