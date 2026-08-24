"use client";

import { useState, type FormEvent } from "react";
import { Check, MessageCircle } from "lucide-react";
import { giz } from "./tokens";

type Campos = {
  nome: string;
  escola: string;
  email: string;
  whatsapp: string;
  alunos: string;
};

const VAZIO: Campos = {
  nome: "",
  escola: "",
  email: "",
  whatsapp: "",
  alunos: "201-500",
};

function validar(campos: Campos): Partial<Record<keyof Campos, string>> {
  const erros: Partial<Record<keyof Campos, string>> = {};
  if (campos.nome.trim().length < 2) erros.nome = "Como podemos te chamar?";
  if (campos.escola.trim().length < 2) erros.escola = "Precisamos do nome da escola";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(campos.email))
    erros.email = "Confira o e-mail — parece incompleto";
  if (campos.whatsapp.replace(/\D/g, "").length < 10)
    erros.whatsapp = "Precisamos do WhatsApp com DDD para confirmar o horário";
  return erros;
}

export function Formulario() {
  const [campos, setCampos] = useState<Campos>(VAZIO);
  const [erros, setErros] = useState<Partial<Record<keyof Campos, string>>>({});
  const [tocado, setTocado] = useState<Partial<Record<keyof Campos, boolean>>>({});
  const [enviado, setEnviado] = useState(false);

  const atualizar = (campo: keyof Campos, valor: string) => {
    const proximo = { ...campos, [campo]: valor };
    setCampos(proximo);
    if (tocado[campo]) setErros(validar(proximo));
  };

  const marcarTocado = (campo: keyof Campos) => {
    setTocado((t) => ({ ...t, [campo]: true }));
    setErros(validar(campos));
  };

  const enviar = (event: FormEvent) => {
    event.preventDefault();
    const resultado = validar(campos);
    setErros(resultado);
    setTocado({ nome: true, escola: true, email: true, whatsapp: true });
    if (Object.keys(resultado).length === 0) setEnviado(true);
  };

  if (enviado) {
    return (
      <div
        className="grid gap-4 rounded-[20px] border p-8"
        style={{ background: giz.surface, borderColor: giz.primary + "44" }}
      >
        <span
          className="grid size-11 place-items-center rounded-full"
          style={{ background: giz.primary, color: giz.fgLight }}
        >
          <Check className="size-5" />
        </span>
        <h3
          className="font-display text-2xl font-semibold"
          style={{ color: giz.fgDark }}
        >
          Recebemos, {campos.nome.split(" ")[0]}.
        </h3>
        <p className="max-w-[46ch] text-[15px] leading-[1.7]" style={{ color: giz.mutedDark }}>
          Nosso time entra em contato pelo WhatsApp{" "}
          <span className="font-mono" style={{ color: giz.fgDark }}>
            {campos.whatsapp}
          </span>{" "}
          em até 1 dia útil para combinar o horário. A conversa dura 30 minutos e
          já mostramos o painel com a realidade da {campos.escola}.
        </p>
        <div
          className="grid gap-2 rounded-[12px] border p-4 text-sm"
          style={{ borderColor: giz.borderDark, color: giz.mutedDark }}
        >
          <p style={{ color: giz.fgDark }}>O que acontece agora</p>
          <p>1 · Você recebe um e-mail de confirmação em alguns minutos.</p>
          <p>2 · Combinamos o horário pelo WhatsApp.</p>
          <p>3 · Na reunião, estimamos a economia anual da sua escola.</p>
        </div>
        <button
          onClick={() => {
            setCampos(VAZIO);
            setTocado({});
            setErros({});
            setEnviado(false);
          }}
          className="w-fit text-sm underline underline-offset-4"
          style={{ color: giz.primary }}
        >
          Enviar outro formulário
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} noValidate className="grid gap-4">
      <Campo
        id="nome"
        label="Seu nome"
        value={campos.nome}
        erro={erros.nome}
        onChange={(v) => atualizar("nome", v)}
        onBlur={() => marcarTocado("nome")}
        autoComplete="name"
      />
      <Campo
        id="escola"
        label="Escola"
        value={campos.escola}
        erro={erros.escola}
        onChange={(v) => atualizar("escola", v)}
        onBlur={() => marcarTocado("escola")}
        autoComplete="organization"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Campo
          id="email"
          label="E-mail"
          type="email"
          inputMode="email"
          value={campos.email}
          erro={erros.email}
          onChange={(v) => atualizar("email", v)}
          onBlur={() => marcarTocado("email")}
          autoComplete="email"
        />
        <Campo
          id="whatsapp"
          label="WhatsApp"
          type="tel"
          inputMode="tel"
          value={campos.whatsapp}
          erro={erros.whatsapp}
          onChange={(v) => atualizar("whatsapp", v)}
          onBlur={() => marcarTocado("whatsapp")}
          autoComplete="tel"
          placeholder="(11) 90000-0000"
        />
      </div>

      <label className="grid gap-2">
        <span className="text-sm" style={{ color: giz.mutedDark }}>
          Quantidade de alunos
        </span>
        <select
          value={campos.alunos}
          onChange={(event) => atualizar("alunos", event.target.value)}
          className="h-12 rounded-[12px] border px-4 text-[15px] outline-none"
          style={{
            background: giz.deep,
            borderColor: giz.borderDark,
            color: giz.fgDark,
          }}
        >
          <option value="ate-200">Até 200 alunos</option>
          <option value="201-500">201 a 500 alunos</option>
          <option value="501-1000">501 a 1.000 alunos</option>
          <option value="1000+">Mais de 1.000 alunos</option>
        </select>
      </label>

      <button
        type="submit"
        className="mt-1 h-13 rounded-[12px] px-6 py-3.5 text-[15px] font-medium transition-transform active:scale-[0.99]"
        style={{ background: giz.primary, color: giz.fgLight }}
      >
        Agendar demonstração gratuita
      </button>

      <a
        href="https://wa.me/5511980448792"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 text-sm"
        style={{ color: giz.mutedDark }}
      >
        <MessageCircle className="size-4" />
        Prefiro falar agora no WhatsApp
      </a>

      <p className="text-[11px] leading-relaxed" style={{ color: giz.mutedDark }}>
        Ao enviar, você concorda em ser contatado pela Giz Pay. Seus dados não
        são compartilhados com terceiros.
      </p>
    </form>
  );
}

function Campo({
  id,
  label,
  value,
  erro,
  onChange,
  onBlur,
  type = "text",
  inputMode,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  erro?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  type?: string;
  inputMode?: "email" | "tel" | "text";
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2" htmlFor={id}>
      <span className="text-sm" style={{ color: giz.mutedDark }}>
        {label}
      </span>
      <input
        id={id}
        type={type}
        inputMode={inputMode}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        aria-invalid={erro ? true : undefined}
        aria-describedby={erro ? `${id}-erro` : undefined}
        className="h-12 rounded-[12px] border px-4 text-[15px] outline-none transition-colors focus:border-[color:var(--foco)]"
        style={
          {
            background: giz.deep,
            borderColor: erro ? giz.danger : giz.borderDark,
            color: giz.fgDark,
            "--foco": giz.primary,
          } as React.CSSProperties
        }
      />
      {erro ? (
        <span id={`${id}-erro`} className="text-xs" style={{ color: giz.danger }}>
          {erro}
        </span>
      ) : null}
    </label>
  );
}
