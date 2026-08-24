"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const quiz = [
  {
    q: "O que a dobra do gizpay.com.br precisa resolver em 12 segundos?",
    options: [
      "Explicar todos os módulos da plataforma",
      "Dizer para quem é, o que muda, por que acreditar e o que clicar",
      "Mostrar o organograma da empresa e o login",
      "Listar preços por faixa de aluno",
    ],
    answer: 1,
    why: "Aula 02. Módulos e preço vêm depois. A dobra fecha a conversa mínima.",
  },
  {
    q: "Qual prova reduz risco de verdade na Giz Pay?",
    options: [
      "Somos inovadores e completos",
      "O Pix cai no CNPJ da escola e a Giz Pay não retém o valor",
      "Interface moderna e intuitiva",
      "Mais de 50 funcionalidades",
    ],
    answer: 1,
    why: "Aula 02. Elogio não reduz risco. Liquidação no CNPJ reduz.",
  },
  {
    q: "Motion no painel do hero existe para…",
    options: [
      "Dar personalidade à marca",
      "Ocupar o espaço vazio à direita",
      "Explicar que o caixa entra e a baixa é imediata",
      "Competir com a headline",
    ],
    answer: 2,
    why: "Aula 04. Motion com ofício: o feed de Pix ensina o produto.",
  },
  {
    q: "No Frame.io, um comentário bom…",
    options: [
      "Junta todos os problemas do meio do vídeo num card só",
      "Diz “não gostei” no minuto 3",
      "Tem um ponto, um quadro, uma hashtag e a correção",
      "Mistura história, cor e música na V1",
    ],
    answer: 2,
    why: "Aula 08. Um ponto por card. Correção, não só diagnóstico.",
  },
  {
    q: "Por que o seletor Direção / Tesouraria / Secretaria existe?",
    options: [
      "Para ter um componente a mais no Figma",
      "Porque três papéis chegam no mesmo URL e precisam se reconhecer",
      "Para substituir o FAQ",
      "Porque a direção nunca abre o site",
    ],
    answer: 1,
    why: "Aula 01 e 03. Uma homepage, três dores. O papel muda a copy da dobra.",
  },
];

export default function LabPage() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const item = quiz[step];

  function confirm() {
    if (picked === null) return;
    if (picked === item.answer) setScore((s) => s + 1);
    if (step === quiz.length - 1) setDone(true);
    else {
      setStep((s) => s + 1);
      setPicked(null);
    }
  }

  function restart() {
    setStep(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  return (
    <div>
      <p className="font-mono text-xs tracking-widest text-primary uppercase">
        Laboratório
      </p>
      <h1 className="font-display mt-3 text-4xl sm:text-5xl">
        Cinco perguntas antes de gravar a V1
      </h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground">
        Se errar, leia o porquê e volte à aula. Não é prova — é aquecimento para
        o Frame.io.
      </p>

      {done ? (
        <div className="mt-10 rounded-2xl border border-border bg-card p-8">
          <p className="font-display text-4xl">{score} / {quiz.length}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            {score >= 4
              ? "Pode gravar a V1. Suba o take e comente com hashtag."
              : "Revise as aulas 02, 04 e 08 e tente de novo."}
          </p>
          <Button className="mt-6" onClick={restart}>
            Refazer
          </Button>
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-border bg-card p-6">
          <p className="font-mono text-xs text-primary">
            {step + 1} / {quiz.length}
          </p>
          <h2 className="mt-3 text-xl font-medium">{item.q}</h2>
          <ul className="mt-6 space-y-2">
            {item.options.map((opt, i) => {
              const selected = picked === i;
              const revealed = picked !== null;
              const correct = i === item.answer;
              return (
                <li key={opt}>
                  <button
                    type="button"
                    onClick={() => setPicked(i)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm ${
                      selected
                        ? revealed && !correct
                          ? "border-destructive bg-destructive/10"
                          : "border-primary bg-accent"
                        : "border-border hover:bg-accent/50"
                    } ${revealed && correct ? "border-primary bg-accent" : ""}`}
                  >
                    {opt}
                  </button>
                </li>
              );
            })}
          </ul>
          {picked !== null ? (
            <p className="mt-4 text-sm text-muted-foreground">{item.why}</p>
          ) : null}
          <Button className="mt-6" disabled={picked === null} onClick={confirm}>
            {step === quiz.length - 1 ? "Ver resultado" : "Próxima"}
          </Button>
        </div>
      )}
    </div>
  );
}
