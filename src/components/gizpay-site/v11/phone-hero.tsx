import { Bell, QrCode } from "lucide-react";
import { giz } from "@/components/prototipo/tokens";

export function PhoneHero() {
  return (
    <div
      className="phone-frame hidden lg:block"
      aria-label="Prévia do portal do responsável"
    >
      <div className="phone-notch" aria-hidden />
      <div className="phone-screen">
        <div className="flex items-center justify-between border-b border-[#0B1F1A]/10 px-5 pb-4 pt-12">
          <div className="flex items-center gap-2.5">
            <span
              className="grid size-8 place-items-center rounded-full font-display text-[11px] text-white"
              style={{ background: giz.deep }}
            >
              G
            </span>
            <div>
              <p className="text-[10px] font-semibold" style={{ color: giz.fgLight }}>
                Colégio Vila Verde
              </p>
              <p className="text-[8px]" style={{ color: giz.mutedLight }}>
                Portal do responsável
              </p>
            </div>
          </div>
          <Bell className="size-4" style={{ color: giz.mutedLight }} />
        </div>
        <div className="space-y-4 p-5">
          <div>
            <p className="text-[9px] uppercase tracking-widest" style={{ color: giz.mutedLight }}>
              Olá, Mariana
            </p>
            <p className="mt-1 font-display text-[21px] leading-tight" style={{ color: giz.fgLight }}>
              Sua mensalidade está disponível.
            </p>
          </div>
          <div className="rounded-2xl border border-[#0B1F1A]/10 bg-white p-4">
            <div className="mb-5 flex justify-between">
              <div>
                <p className="text-[9px] uppercase" style={{ color: giz.mutedLight }}>
                  Fevereiro
                </p>
                <p className="mt-1 font-mono text-[20px]" style={{ color: giz.fgLight }}>
                  R$ 1.250,00
                </p>
              </div>
              <span
                className="h-fit rounded-full px-2 py-1 text-[8px]"
                style={{ background: giz.lightAlt, color: "#3E8E63" }}
              >
                Em aberto
              </span>
            </div>
            <button
              type="button"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl text-[10px] font-semibold"
              style={{ background: giz.primary, color: giz.fgLight }}
            >
              <QrCode className="size-3.5" />
              Pagar com Pix
            </button>
          </div>
          <div>
            <p className="mb-2 text-[9px] uppercase tracking-widest" style={{ color: giz.mutedLight }}>
              Histórico
            </p>
            <div className="space-y-2">
              {["Janeiro", "Dezembro"].map((mes) => (
                <div
                  key={mes}
                  className="flex justify-between rounded-xl border border-[#0B1F1A]/10 bg-white p-3 text-[10px]"
                  style={{ color: giz.fgLight }}
                >
                  <span>{mes}</span>
                  <span className="font-semibold" style={{ color: "#3E8E63" }}>
                    Pago
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="phone-home-indicator" aria-hidden />
      </div>
    </div>
  );
}
