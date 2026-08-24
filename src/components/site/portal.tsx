import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import { ChalkMark, Section, SectionHeader } from "./section";

const benefits = [
  "Menos ligações e mensagens na secretaria",
  "Pagamento em poucos toques, sem app para instalar",
  "Comunicação de cobrança respeitosa e padronizada",
  "Acordos e parcelamentos registrados no sistema",
];

function PhoneMock() {
  return (
    <div className="mx-auto w-full max-w-[300px]">
      <div className="overflow-hidden rounded-[2.2rem] border-[6px] border-ink bg-background shadow-2xl shadow-primary/15">
        <div className="flex items-center justify-between bg-ink px-5 py-2 text-[10px] font-medium text-ink-foreground">
          <span>9:41</span>
          <span className="h-4 w-16 rounded-full bg-ink-foreground/15" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-3 p-4">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-[10px] font-bold text-primary-foreground">
              CE
            </span>
            <div>
              <p className="text-xs font-semibold">Colégio Exemplo</p>
              <p className="text-[10px] text-muted-foreground">Portal do responsável</p>
            </div>
          </div>

          <div className="rounded-xl border bg-card p-3">
            <p className="text-[11px] text-muted-foreground">Olá, Renata</p>
            <p className="text-xs font-medium">Responsável por Maria Clara · 7º ano</p>
          </div>

          <div className="rounded-xl border-2 border-primary/20 bg-secondary/50 p-3">
            <div className="mb-1 flex items-center justify-between">
              <p className="text-[11px] font-medium">Mensalidade · Agosto</p>
              <Badge className="h-5 bg-accent px-1.5 text-[9px] text-accent-foreground">
                Vence em 3 dias
              </Badge>
            </div>
            <p className="font-display text-xl font-semibold">R$ 1.240,00</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <span className="grid h-8 place-items-center rounded-lg bg-primary text-[11px] font-semibold text-primary-foreground">
                Pagar com Pix
              </span>
              <span className="grid h-8 place-items-center rounded-lg border bg-background text-[11px] font-semibold">
                Boleto
              </span>
            </div>
          </div>

          {["Julho", "Junho"].map((month) => (
            <div
              key={month}
              className="flex items-center justify-between rounded-xl border bg-card px-3 py-2.5"
            >
              <p className="text-[11px] font-medium">{month}</p>
              <span className="flex items-center gap-1 text-[10px] font-semibold text-primary">
                <Check className="size-3" aria-hidden="true" /> Pago
              </span>
            </div>
          ))}

          <span className="grid h-9 place-items-center rounded-xl border border-dashed text-[11px] font-medium text-muted-foreground">
            Baixar informe para o IR
          </span>
        </div>
      </div>
    </div>
  );
}

export function Portal() {
  return (
    <Section id="portal" className="bg-card">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Portal do responsável"
            title={
              <>
                A família resolve <ChalkMark>sozinha</ChalkMark>. A secretaria ganha tempo.
              </>
            }
            description="Segunda via, código Pix copia-e-cola, histórico de pagamentos, comprovantes e informe anual para o Imposto de Renda — tudo com a marca da escola, no celular do responsável."
          />
          <Reveal>
            <ul className="mb-8 flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-secondary">
                    <Check className="size-3.5 text-primary" aria-hidden="true" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            <Button size="lg" asChild>
              <a href="#demonstracao">Ver o portal em ação</a>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <PhoneMock />
        </Reveal>
      </div>
    </Section>
  );
}
