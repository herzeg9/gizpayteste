"use client";

import { useState, type FormEvent } from "react";
import {
  Building2,
  Check,
  Mail,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";
import { giz } from "@/components/prototipo/tokens";

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

const inputClass =
  "h-11 w-full rounded-xl border border-white/10 bg-[#07211B] pl-11 pr-4 text-[15px] transition-colors duration-150 placeholder:text-[#5A6B64] focus:border-[#4ADE80]/50 focus:outline-none";

function CampoIcon({
  id,
  label,
  icon: Icon,
  type = "text",
  value,
  erro,
  placeholder,
  autoComplete,
  inputMode,
  onChange,
  onBlur,
}: {
  id: string;
  label: string;
  icon: typeof User;
  type?: string;
  value: string;
  erro?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "text";
  onChange: (v: string) => void;
  onBlur: () => void;
}) {
  return (
    <label className="block" htmlFor={id}>
      <span
        className="mb-2 block text-[13px] font-semibold uppercase tracking-wider"
        style={{ color: giz.mutedDark }}
      >
        {label}
      </span>
      <span className="relative block">
        <Icon
          className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2"
          style={{ color: giz.mutedDark }}
        />
        <input
          id={id}
          type={type}
          inputMode={inputMode}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={erro ? true : undefined}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={inputClass}
          style={{
            color: giz.fgDark,
            borderColor: erro ? giz.danger : undefined,
          }}
        />
      </span>
      {erro ? (
        <span className="mt-1 block text-xs" style={{ color: giz.danger }}>
          {erro}
        </span>
      ) : null}
    </label>
  );
}

export function FormularioAgendamento() {
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
      <div className="grid gap-5 text-center">
        <span
          className="mx-auto grid size-12 place-items-center rounded-full"
          style={{ background: giz.primary, color: giz.fgLight }}
        >
          <Check className="size-6" />
        </span>
        <h3 className="font-display text-2xl font-semibold">
          Recebemos, {campos.nome.split(" ")[0]}.
        </h3>
        <p className="text-[16px] leading-relaxed" style={{ color: giz.mutedDark }}>
          Você fará uma chamada de 30 minutos com nosso time. Vamos entender sua
          operação, mostrar a plataforma ao vivo e enviar um relatório de economia
          personalizado — sem compromisso.
        </p>
        <div
          className="rounded-2xl border p-5 text-left text-sm"
          style={{ borderColor: giz.borderDark, color: giz.mutedDark }}
        >
          <p className="font-medium" style={{ color: giz.fgDark }}>
            O que acontece agora
          </p>
          <p className="mt-2">1 · Confirmação por e-mail em alguns minutos.</p>
          <p>2 · Combinamos o horário pelo WhatsApp {campos.whatsapp}.</p>
          <p>3 · Na reunião, estimamos a economia anual da {campos.escola}.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setCampos(VAZIO);
            setTocado({});
            setErros({});
            setEnviado(false);
          }}
          className="mx-auto text-sm underline underline-offset-4"
          style={{ color: giz.primary }}
        >
          Enviar outro formulário
        </button>
      </div>
    );
  }

  return (
    <>
      <p
        className="mx-auto mb-10 max-w-[620px] text-center text-[16px]"
        style={{ color: giz.mutedDark }}
      >
        Você fará uma chamada de 30 minutos com nosso time. Vamos entender sua
        operação, mostrar a plataforma ao vivo e enviar um relatório de economia
        personalizado — sem compromisso.
      </p>
      <form onSubmit={enviar} noValidate className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-2">
          <CampoIcon
            id="nome"
            label="Seu nome"
            icon={User}
            value={campos.nome}
            erro={erros.nome}
            placeholder="Como podemos chamar você?"
            autoComplete="name"
            onChange={(v) => atualizar("nome", v)}
            onBlur={() => marcarTocado("nome")}
          />
          <CampoIcon
            id="escola"
            label="Escola"
            icon={Building2}
            value={campos.escola}
            erro={erros.escola}
            placeholder="Nome da instituição"
            autoComplete="organization"
            onChange={(v) => atualizar("escola", v)}
            onBlur={() => marcarTocado("escola")}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <CampoIcon
            id="email"
            label="E-mail"
            icon={Mail}
            type="email"
            inputMode="email"
            value={campos.email}
            erro={erros.email}
            placeholder="voce@escola.com.br"
            autoComplete="email"
            onChange={(v) => atualizar("email", v)}
            onBlur={() => marcarTocado("email")}
          />
          <CampoIcon
            id="whatsapp"
            label="WhatsApp"
            icon={Phone}
            type="tel"
            inputMode="tel"
            value={campos.whatsapp}
            erro={erros.whatsapp}
            placeholder="(11) 99999-9999"
            autoComplete="tel"
            onChange={(v) => atualizar("whatsapp", v)}
            onBlur={() => marcarTocado("whatsapp")}
          />
        </div>
        <label className="block" htmlFor="student-count">
          <span
            className="mb-2 block text-[13px] font-semibold uppercase tracking-wider"
            style={{ color: giz.mutedDark }}
          >
            Quantidade de alunos
          </span>
          <select
            id="student-count"
            value={campos.alunos}
            onChange={(e) => atualizar("alunos", e.target.value)}
            className="h-11 w-full rounded-xl border border-white/10 bg-[#07211B] px-4 text-[15px] transition-colors duration-150 focus:border-[#4ADE80]/50 focus:outline-none"
            style={{ color: giz.fgDark }}
          >
            <option value="ate-200">Até 200 alunos</option>
            <option value="201-500">201 a 500 alunos</option>
            <option value="501-1000">501 a 1.000 alunos</option>
            <option value="1000+">Mais de 1.000 alunos</option>
          </select>
        </label>
        <button
          type="submit"
          className="pill-primary flex h-12 w-full items-center justify-center px-6 text-[15px] font-semibold"
        >
          Agendar demonstração gratuita
        </button>
        <a
          href="https://wa.me/5511980448792"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 text-[14px] transition-colors duration-150 hover:text-[#4ADE80]"
          style={{ color: giz.mutedDark }}
        >
          <MessageCircle className="size-5" />
          Prefiro falar agora no WhatsApp
        </a>
        <p className="mt-2 text-center text-[12px] opacity-70" style={{ color: giz.mutedDark }}>
          Ao enviar, você concorda em ser contatado pela Giz Pay. Seus dados não são
          compartilhados com terceiros.
        </p>
      </form>
    </>
  );
}
