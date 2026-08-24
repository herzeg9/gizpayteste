"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./reveal";
import { ChalkMark, Section, SectionHeader } from "./section";

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [nome, setNome] = useState("");

  return (
    <Section id="demonstracao" className="bg-ink text-ink-foreground">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            dark
            align="left"
            eyebrow="Demonstração gratuita"
            title={
              <>
                Veja o painel com os números da <ChalkMark>sua escola</ChalkMark>.
              </>
            }
            description="Uma conversa de 30 minutos: entendemos sua operação, mostramos a plataforma funcionando e estimamos sua economia anual — sem compromisso."
          />
          <Reveal>
            <a
              href="https://wa.me/5511980448792"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-ink-foreground/15 bg-ink-foreground/5 px-5 py-4 transition-colors hover:bg-ink-foreground/10"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-accent/15 text-accent">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-ink-foreground/60">WhatsApp comercial</span>
                <span className="block font-semibold">(11) 98044-8792</span>
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-card p-6 text-card-foreground shadow-2xl sm:p-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-10 text-center"
              >
                <span className="grid size-14 place-items-center rounded-full bg-secondary">
                  <CheckCircle2 className="size-7 text-primary" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-semibold">
                  Recebido{nome ? `, ${nome.split(" ")[0]}` : ""}!
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Nossa equipe entra em contato pelo WhatsApp em até 1 dia útil para agendar a
                  demonstração no melhor horário para você.
                </p>
                <Button variant="outline" onClick={() => setSent(false)}>
                  Enviar outro contato
                </Button>
              </motion.div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lead-nome">Seu nome</Label>
                    <Input
                      id="lead-nome"
                      name="nome"
                      required
                      autoComplete="name"
                      placeholder="Renata Souza"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lead-escola">Escola</Label>
                    <Input
                      id="lead-escola"
                      name="escola"
                      required
                      autoComplete="organization"
                      placeholder="Colégio Exemplo"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lead-email">E-mail</Label>
                    <Input
                      id="lead-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="voce@escola.com.br"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lead-whatsapp">WhatsApp</Label>
                    <Input
                      id="lead-whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="lead-alunos">Quantidade de alunos</Label>
                  <Select name="alunos" defaultValue="201-500">
                    <SelectTrigger id="lead-alunos" className="w-full">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ate-200">Até 200 alunos</SelectItem>
                      <SelectItem value="201-500">201 a 500 alunos</SelectItem>
                      <SelectItem value="501-1000">501 a 1.000 alunos</SelectItem>
                      <SelectItem value="1000+">Mais de 1.000 alunos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" size="lg" className="mt-2 w-full">
                  Agendar demonstração gratuita
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Ao enviar, você concorda em ser contatado pela Giz Pay. Seus dados não são
                  compartilhados com terceiros.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
