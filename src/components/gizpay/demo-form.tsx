"use client";

import { FormEvent, useState } from "react";
import { Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NotePin } from "@/components/gizpay/notes";

const sizes = ["Até 200 alunos", "201 a 500 alunos", "501 a 1.000 alunos", "Mais de 1.000 alunos"];

type Status = "idle" | "error" | "success";

export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [size, setSize] = useState(sizes[1]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const school = String(data.get("school") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (!name || !school || !email || !phone) {
      setStatus("error");
      setError("Preencha nome, escola, e-mail e WhatsApp para a gente retornar.");
      return;
    }
    if (!email.includes("@")) {
      setStatus("error");
      setError("Esse e-mail não parece válido.");
      return;
    }
    setError("");
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="relative rounded-3xl border border-chalk/40 bg-board p-8 text-paper">
        <NotePin id="form" />
        <div className="flex size-12 items-center justify-center rounded-full bg-chalk text-board">
          <Check className="size-6" />
        </div>
        <h3 className="font-display mt-5 text-3xl">Pedido recebido, Carla.</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
          O comercial fala com você no WhatsApp em até um dia útil. A conversa dura 30
          minutos: operação da escola, painel ao vivo e estimativa de economia — sem
          compromisso.
        </p>
        <p className="mt-6 font-mono text-sm text-chalk">(11) 98044-8792</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative rounded-3xl border border-border bg-card p-6 sm:p-8">
      <NotePin id="form" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Seu nome" placeholder="Carla Mendes" />
        <Field name="school" label="Escola" placeholder="Colégio Horizonte" />
        <Field name="email" label="E-mail" placeholder="carla@escola.com.br" type="email" />
        <Field name="phone" label="WhatsApp" placeholder="(11) 98000-0000" />
      </div>
      <fieldset className="mt-5">
        <legend className="mb-2 text-sm font-medium">Quantidade de alunos</legend>
        <div className="grid grid-cols-2 gap-2">
          {sizes.map((s) => (
            <label
              key={s}
              className={`cursor-pointer rounded-xl border px-3 py-2 text-xs ${
                size === s ? "border-board bg-board text-paper" : "border-border bg-background"
              }`}
            >
              <input
                type="radio"
                name="size"
                className="sr-only"
                checked={size === s}
                onChange={() => setSize(s)}
              />
              {s}
            </label>
          ))}
        </div>
      </fieldset>
      {status === "error" ? (
        <p className="mt-4 text-sm text-brick" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-6 h-11 w-full rounded-full bg-board text-sm font-medium text-chalk transition hover:bg-[#1d4636]"
      >
        Agendar demonstração gratuita
      </button>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Ao enviar, você concorda em ser contatado pela Giz Pay. Dados não são
        compartilhados com terceiros. WhatsApp comercial: (11) 98044-8792.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-10 bg-background"
      />
    </div>
  );
}
