"use client";

import { useEffect, useState } from "react";
import { MessageCircleMore, Send, X } from "lucide-react";
import { giz } from "@/components/prototipo/tokens";

export function ChatWidget({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [pergunta, setPergunta] = useState("");
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    function onPointer(e: MouseEvent) {
      if (!open) return;
      const target = e.target as HTMLElement;
      if (
        !target.closest('[role="dialog"]') &&
        !target.closest('[aria-label="Abrir atendimento Giz Pay"]')
      ) {
        onOpenChange(false);
      }
    }
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open, onOpenChange]);

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!pergunta.trim()) return;
    setEnviado(true);
    setPergunta("");
  }

  return (
    <div className="fixed bottom-7 right-7 z-[70] hidden lg:block">
      {open ? (
        <div
          className="chat-drawer absolute bottom-20 right-0 w-[360px] rounded-3xl border border-white/10 p-6 shadow-2xl"
          style={{ background: giz.surface }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-title"
        >
          <div className="mb-6 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <span
                className="grid size-10 place-items-center rounded-full font-display font-semibold"
                style={{ background: giz.primary, color: giz.deep }}
              >
                G
              </span>
              <div>
                <p id="chat-title" className="font-semibold">
                  Alguma dúvida não respondida?
                </p>
                <p className="text-xs" style={{ color: giz.mutedDark }}>
                  Normalmente respondemos em poucos minutos.
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Fechar chat"
              onClick={() => onOpenChange(false)}
              className="grid size-9 place-items-center rounded-full bg-white/5 transition hover:bg-white/10"
              style={{ color: giz.mutedDark }}
            >
              <X className="size-4" />
            </button>
          </div>
          <form onSubmit={enviar} className="space-y-4">
            <label htmlFor="chat-question" className="block text-sm" style={{ color: giz.mutedDark }}>
              Como podemos ajudar?
            </label>
            <textarea
              id="chat-question"
              rows={4}
              value={pergunta}
              onChange={(e) => setPergunta(e.target.value)}
              placeholder="Digite sua dúvida..."
              className="w-full resize-none rounded-2xl border border-white/10 bg-[#07211B] p-4 text-sm placeholder:text-[#9CB0A8] focus:border-[#4ADE80]/50 focus:outline-none"
              style={{ color: giz.fgDark }}
            />
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold transition hover:opacity-90"
              style={{ background: giz.primary, color: giz.fgLight }}
            >
              <Send className="size-4" />
              Enviar pergunta
            </button>
            {enviado ? (
              <p className="animate-pulse text-center text-sm" style={{ color: giz.primary }}>
                Pergunta recebida. Falaremos com você em breve.
              </p>
            ) : null}
          </form>
        </div>
      ) : null}
      <button
        type="button"
        aria-label="Abrir atendimento Giz Pay"
        onClick={() => onOpenChange(!open)}
        className="grid size-16 place-items-center rounded-full border-4 shadow-2xl transition hover:scale-105"
        style={{ borderColor: giz.deep, background: giz.primary, color: giz.fgLight }}
      >
        {open ? <X className="size-6" /> : <MessageCircleMore className="size-6" />}
      </button>
    </div>
  );
}
