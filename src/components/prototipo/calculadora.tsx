"use client";

import { useEffect, useRef, useState } from "react";
import { brl, giz } from "./tokens";

type ControleProps = {
  label: string;
  exibicao: string;
  valor: number;
  min: number;
  max: number;
  step: number;
  onChange: (valor: number) => void;
};

function Controle({
  label,
  exibicao,
  valor,
  min,
  max,
  step,
  onChange,
}: ControleProps) {
  return (
    <div className="grid gap-2.5">
      <span className="flex items-baseline justify-between gap-4">
        <span className="text-sm" style={{ color: giz.mutedDark }}>
          {label}
        </span>
        <span
          className="font-mono text-base tabular-nums"
          style={{ color: giz.fgDark }}
        >
          {exibicao}
        </span>
      </span>

      <div
        className="rounded-[12px] border px-4 py-4"
        style={{
          borderColor: giz.borderDark,
          background: giz.raised,
        }}
      >
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={valor}
          aria-label={label}
          onChange={(e) => onChange(Number(e.target.value))}
          onInput={(e) => onChange(Number(e.currentTarget.value))}
          className="calc-range block h-2.5 w-full cursor-pointer appearance-none rounded-full"
          style={{
            background: `linear-gradient(to right, ${giz.primary} 0%, ${giz.primary} ${((valor - min) / (max - min)) * 100}%, rgba(242,247,243,0.12) ${((valor - min) / (max - min)) * 100}%, rgba(242,247,243,0.12) 100%)`,
          }}
        />
      </div>
    </div>
  );
}

/** Número que anima até o novo valor — aula 4.4, movimento a serviço da conversão. */
function useValorAnimado(alvo: number) {
  const [valor, setValor] = useState(alvo);
  const quadro = useRef<number | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setValor(alvo);
      return;
    }

    const inicio = performance.now();
    const de = valor;
    const duracao = 420;

    const passo = (agora: number) => {
      const t = Math.min(1, (agora - inicio) / duracao);
      const eased = 1 - Math.pow(1 - t, 3);
      setValor(de + (alvo - de) * eased);
      if (t < 1) quadro.current = requestAnimationFrame(passo);
    };

    quadro.current = requestAnimationFrame(passo);
    return () => {
      if (quadro.current) cancelAnimationFrame(quadro.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alvo]);

  return valor;
}

export function Calculadora() {
  const [alunos, setAlunos] = useState(450);
  const [mensalidade, setMensalidade] = useState(950);
  const [taxa, setTaxa] = useState(3.5);

  const faturamentoAnual = alunos * mensalidade * 12;
  const custoAnual = faturamentoAnual * (taxa / 100);
  const custoAnimado = useValorAnimado(custoAnual);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
      <div className="grid content-start gap-6">
        <Controle
          label="Alunos ativos"
          exibicao={String(alunos)}
          valor={alunos}
          min={50}
          max={2000}
          step={10}
          onChange={setAlunos}
        />
        <Controle
          label="Mensalidade média"
          exibicao={brl(mensalidade)}
          valor={mensalidade}
          min={300}
          max={5000}
          step={50}
          onChange={setMensalidade}
        />
        <Controle
          label="Taxa atual do intermediário"
          exibicao={`${taxa.toFixed(1)}%`}
          valor={taxa}
          min={0.5}
          max={8}
          step={0.1}
          onChange={setTaxa}
        />

        <p
          className="rounded-[10px] border px-3 py-2.5 text-xs leading-relaxed"
          style={{ borderColor: giz.borderDark, color: giz.mutedDark }}
        >
          Faturamento anual estimado de{" "}
          <span className="font-mono tabular-nums" style={{ color: giz.fgDark }}>
            {brl(faturamentoAnual)}
          </span>
          , considerando 12 mensalidades por aluno.
        </p>
      </div>

      <div
        className="grid content-center gap-4 rounded-[24px] border p-7"
        style={{ background: giz.surface, borderColor: giz.borderDark }}
      >
        <p className="text-sm" style={{ color: giz.mutedDark }}>
          O intermediário leva do seu caixa, por ano
        </p>
        <p
          className="font-mono text-[42px] font-medium leading-none tabular-nums sm:text-[58px]"
          style={{ color: giz.primary }}
        >
          {brl(custoAnimado)}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: giz.mutedDark }}>
          É o que uma taxa de {taxa.toFixed(1)}% retira do faturamento da sua
          escola a cada ano. Com a Giz Pay, esse percentual dá lugar a uma
          assinatura fixa por aluno ativo.
        </p>

        <a
          href="#agendar"
          className="mt-2 w-fit rounded-full px-6 py-3.5 text-sm font-medium transition-transform active:scale-[0.98]"
          style={{ background: giz.primary, color: giz.fgLight }}
        >
          Quero ver esse número na minha escola
        </a>

        <p className="text-[11px]" style={{ color: giz.mutedDark }}>
          Estimativa ilustrativa, com base nos valores que você informou.
        </p>
      </div>
    </div>
  );
}
