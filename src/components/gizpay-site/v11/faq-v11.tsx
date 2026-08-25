"use client";

import { useMemo, useState } from "react";
import { MessageCircle, Plus, Search, SearchX } from "lucide-react";
import { giz } from "@/components/prototipo/tokens";

const FAQ_ITEMS = [
  {
    id: 1,
    pergunta: "A escola precisa trocar de banco?",
    resposta:
      "Não. O Giz Pay se conecta à conta bancária que a sua escola já possui. O dinheiro das liquidações cai diretamente no seu CNPJ sem passar por nós.",
  },
  {
    id: 2,
    pergunta: "Como funciona a migração da base de alunos?",
    resposta:
      "Nossa equipe técnica cuida de tudo. Você nos envia sua planilha ou exportação do sistema atual e nós fazemos a higienização e importação dos dados sem custo.",
  },
  {
    id: 3,
    pergunta: "O Pix tem taxa de liquidação?",
    resposta:
      "Sim, cobramos uma tarifa fixa por cada transação liquidada com sucesso. Não há taxas de emissão, cancelamento ou manutenção.",
  },
];

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="rounded-sm bg-[rgba(74,222,128,0.28)] px-0.5" style={{ color: giz.fgLight }}>
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

export function FaqV11({ onOpenChat }: { onOpenChat?: () => void }) {
  const [busca, setBusca] = useState("");
  const [aberto, setAberto] = useState<number | null>(1);

  const filtrados = useMemo(() => {
    const q = busca.trim().toLocaleLowerCase("pt-BR");
    if (!q) return FAQ_ITEMS;
    return FAQ_ITEMS.filter((item) =>
      (item.pergunta + " " + item.resposta).toLocaleLowerCase("pt-BR").includes(q),
    );
  }, [busca]);

  return (
    <section id="faq" className="section-padding" style={{ background: giz.light, color: giz.fgLight }}>
      <div className="mx-auto max-w-[860px] px-5">
        <div className="mb-12 text-center">
          <span className="overline mb-4 block" style={{ color: "#3E8E63" }}>
            FAQ inteligente
          </span>
          <h2 className="font-display text-[34px] md:text-[46px]">Antes de falar com a gente.</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-center" style={{ color: giz.mutedLight }}>
            Pesquise por banco, migração, Pix ou qualquer outra dúvida.
          </p>
        </div>

        <label className="relative mb-8 block" htmlFor="faq-search">
          <span className="sr-only">Pesquisar nas perguntas frequentes</span>
          <Search
            className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2"
            style={{ color: giz.mutedLight }}
          />
          <input
            id="faq-search"
            type="search"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Digite uma palavra-chave..."
            className="h-14 w-full rounded-2xl border border-[#0B1F1A]/10 bg-white pl-14 pr-5 text-[15px] shadow-sm placeholder:text-[#5A6B64] focus:border-[#4ADE80]/50 focus:outline-none"
            style={{ color: giz.fgLight }}
          />
        </label>

        {filtrados.length > 0 ? (
          <div className="space-y-4">
            {filtrados.map((item) => {
              const open = aberto === item.id;
              return (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-[#0B1F1A]/10 bg-white"
                >
                  <button
                    type="button"
                    className="flex min-h-16 w-full items-center justify-between gap-5 p-6 text-left"
                    aria-expanded={open}
                    onClick={() => setAberto(open ? null : item.id)}
                  >
                    <span className="text-[17px] font-semibold">
                      {highlight(item.pergunta, busca)}
                    </span>
                    <Plus
                      className={`faq-icon size-5 shrink-0 ${open ? "is-open" : ""}`}
                      style={{ color: "#3E8E63" }}
                    />
                  </button>
                  <div className={`faq-answer ${open ? "is-open" : ""}`}>
                    <div>
                      <p
                        className="border-t border-[#0B1F1A]/5 px-6 pb-6 pt-5 text-[15px]"
                        style={{ color: giz.mutedLight }}
                      >
                        {highlight(item.resposta, busca)}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[#0B1F1A]/15 bg-white p-10 text-center">
            <span
              className="mx-auto mb-4 grid size-12 place-items-center rounded-full"
              style={{ background: giz.lightAlt, color: "#3E8E63" }}
            >
              <SearchX className="size-6" />
            </span>
            <p className="font-semibold">Nenhum resultado</p>
            <p className="mt-2 text-sm" style={{ color: giz.mutedLight }}>
              Tente outro termo ou envie sua dúvida pelo chat.
            </p>
            {onOpenChat ? (
              <button
                type="button"
                onClick={onOpenChat}
                className="mt-5 rounded-full px-5 py-2.5 text-sm font-semibold"
                style={{ background: giz.primary, color: giz.fgLight }}
              >
                Falar com a Giz Pay
              </button>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
