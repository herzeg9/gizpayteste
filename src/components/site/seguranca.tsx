import { FileSearch, Lock, ShieldCheck, UserCog } from "lucide-react";
import { Reveal } from "./reveal";
import { Section, SectionHeader } from "./section";

const items = [
  {
    icon: ShieldCheck,
    title: "LGPD desde o dia 1",
    description:
      "Base legal definida por finalidade, política de retenção e canal do titular para solicitações.",
  },
  {
    icon: Lock,
    title: "Criptografia e isolamento",
    description:
      "Dados cifrados em trânsito e em repouso, com isolamento lógico por escola.",
  },
  {
    icon: UserCog,
    title: "Acesso por papel + 2 etapas",
    description:
      "Perfis de administrador, financeiro e leitura, com autenticação em duas etapas.",
  },
  {
    icon: FileSearch,
    title: "Trilha de auditoria",
    description:
      "Cada alteração de valor, desconto ou baixa registrada com autor, data e hora.",
  },
];

export function Seguranca() {
  return (
    <Section id="seguranca" className="bg-ink text-ink-foreground">
      <SectionHeader
        dark
        eyebrow="Segurança e conformidade"
        title="Dado de aluno é dado sensível. Tratamos como tal."
        description="Infraestrutura em nuvem no Brasil, criptografia ponta a ponta e políticas alinhadas à LGPD desde o primeiro dia."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <article className="h-full rounded-2xl border border-ink-foreground/10 bg-ink-foreground/5 p-6 transition-colors hover:bg-ink-foreground/10">
              <span className="mb-4 grid size-11 place-items-center rounded-xl bg-accent/15 text-accent">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-display text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-foreground/65">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
