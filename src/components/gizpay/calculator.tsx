"use client";

import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { NotePin } from "@/components/gizpay/notes";
import { brl } from "@/lib/format";

export function SavingsCalculator({ onCta }: { onCta: () => void }) {
  const [students, setStudents] = useState(450);
  const [tuition, setTuition] = useState(950);
  const [fee, setFee] = useState(3.5);

  const annual = students * tuition * 12;
  const leaked = useMemo(() => annual * (fee / 100), [annual, fee]);

  return (
    <div className="relative rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <NotePin id="calculadora" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium tracking-widest text-brick uppercase">
            Calculadora de economia
          </p>
          <h3 className="font-display mt-2 text-3xl leading-tight text-board">
            Quanto a intermediação custa à sua escola por ano?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Ajuste os números. O percentual some — e vira real. Com a Giz Pay, esse
            valor vira assinatura fixa por aluno, previsível e muito menor.
          </p>
          <div className="mt-8 space-y-6">
            <Field
              label="Alunos ativos"
              value={String(students)}
              min={80}
              max={2000}
              step={10}
              current={[students]}
              onChange={(v) => setStudents(v)}
            />
            <Field
              label="Mensalidade média"
              value={brl(tuition)}
              min={400}
              max={3500}
              step={50}
              current={[tuition]}
              onChange={(v) => setTuition(v)}
            />
            <Field
              label="Taxa atual do intermediário"
              value={`${fee.toFixed(1).replace(".", ",")}%`}
              min={1}
              max={8}
              step={0.1}
              current={[fee]}
              onChange={(v) => setFee(v)}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-2xl bg-board p-6 text-paper sm:p-8">
          <div>
            <p className="text-xs text-white/55">O intermediário leva do seu caixa, por ano</p>
            <p className="mt-3 font-mono text-4xl tracking-tight text-chalk sm:text-5xl">
              {brl(leaked)}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              É o que {fee.toFixed(1).replace(".", ",")}% retira de um faturamento anual
              estimado de {brl(annual)}. Matrículas 2027 ainda dá tempo de mudar o jogo.
            </p>
          </div>
          <button
            type="button"
            onClick={onCta}
            className="mt-8 h-11 rounded-full bg-chalk px-5 text-sm font-medium text-board transition hover:bg-[#e4ff8a]"
          >
            Quero ver isso na minha escola
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step,
  current,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  current: number[];
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="text-sm">{label}</label>
        <span className="font-mono text-sm text-board">{value}</span>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={current}
        onValueChange={(v) =>
          onChange(Array.isArray(v) ? (v[0] ?? min) : v)
        }
      />
    </div>
  );
}
