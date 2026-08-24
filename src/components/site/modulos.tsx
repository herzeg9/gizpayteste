import {
  BellRing,
  Building2,
  Gauge,
  Landmark,
  Smartphone,
  Zap,
} from "lucide-react";
import { Reveal } from "./reveal";
import { Section, SectionHeader } from "./section";

const modules = [
  {
    icon: Zap,
    title: "Pix com baixa instantânea",
    description:
      "O responsável paga e o sistema confirma em segundos. Sem esperar compensação, sem conferir extrato no dia seguinte.",
  },
  {
    icon: BellRing,
    title: "Régua de cobrança",
    description:
      "Lembrete antes do vencimento, aviso no atraso e encargos automáticos. Comunicação padronizada, sem constranger a família.",
  },
  {
    icon: Gauge,
    title: "Painel de inadimplência",
    description:
      "Em tempo real: em dia, em aberto e atrasado. Filtre por turma, série, competência ou responsável e aja antes do problema crescer.",
  },
  {
    icon: Landmark,
    title: "Conciliação bancária",
    description:
      "Cada entrada casada com a cobrança correspondente. Fechamento do mês em minutos, não em dias de planilha.",
  },
  {
    icon: Smartphone,
    title: "Portal do responsável",
    description:
      "Segunda via, código Pix, histórico e informe para o IR — o responsável resolve sozinho e a secretaria reduz o atendimento repetitivo.",
  },
  {
    icon: Building2,
    title: "Multi-unidade e white label",
    description:
      "Um login, várias unidades, dados isolados e a marca da sua escola em todo o painel e nas comunicações.",
  },
];

export function Modulos() {
  return (
    <Section id="modulos">
      <SectionHeader
        eyebrow="Módulos"
        title="Uma plataforma completa, não um boleto avulso."
        description="Construída ouvindo secretarias, tesourarias e direções — não é uma ferramenta genérica adaptada para escola."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod, i) => (
          <Reveal key={mod.title} delay={(i % 3) * 0.08}>
            <article className="group h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <span className="mb-4 grid size-11 place-items-center rounded-xl bg-secondary text-primary transition-transform duration-300 group-hover:scale-110">
                <mod.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-display text-lg font-semibold">{mod.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{mod.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
