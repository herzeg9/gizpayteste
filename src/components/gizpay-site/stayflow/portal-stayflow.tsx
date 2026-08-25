import { Bell } from "lucide-react";
import { giz } from "@/components/prototipo/tokens";

export function PortalStayflow() {
  return (
    <div className="relative">
      <div className="aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-black/5 bg-white p-6 shadow-2xl">
        <div className="flex h-full flex-col rounded-[20px] border border-black/5 bg-[#F6F8F5]">
          <div className="flex items-center justify-between border-b border-black/5 p-4">
            <div className="flex items-center gap-3">
              <div
                className="flex size-8 items-center justify-center rounded-full text-[10px] text-white"
                style={{ background: giz.deep }}
              >
                G
              </div>
              <p className="text-xs font-bold" style={{ color: giz.fgLight }}>
                Colégio Vila Verde
              </p>
            </div>
            <Bell className="size-4 text-gray-400" />
          </div>
          <div className="flex-1 space-y-6 p-5">
            <div className="rounded-xl border border-black/5 bg-white p-4">
              <p className="text-[10px] uppercase text-gray-400">Mensalidade Fevereiro</p>
              <p className="text-lg font-bold" style={{ color: giz.fgLight }}>
                R$ 1.250,00
              </p>
              <div
                className="mt-3 rounded-lg py-2 text-center text-[10px] font-bold"
                style={{ background: giz.primary, color: giz.deep }}
              >
                Pagar com Pix
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase text-gray-400">Últimos Pagamentos</p>
              {["Janeiro", "Dezembro"].map((mes) => (
                <div
                  key={mes}
                  className="flex items-center justify-between rounded-lg border border-black/5 bg-white p-3"
                >
                  <p className="text-xs font-medium" style={{ color: giz.fgLight }}>
                    {mes}
                  </p>
                  <span className="text-[10px] font-bold uppercase text-green-600">Pago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
