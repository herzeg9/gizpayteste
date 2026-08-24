import type { DemoId } from "@/content/types";
import { AnatomiaDemo } from "./anatomia";
import { BreakpointsDemo } from "./breakpoints";
import { ContrasteDemo } from "./contraste";
import { CtaDemo } from "./cta";
import { EspacamentoDemo } from "./espacamento";
import { HierarquiaDemo } from "./hierarquia";
import { LayoutDemo } from "./layout";
import { SizingDemo } from "./sizing";
import { TipografiaDemo } from "./tipografia";
import { VariantesDemo } from "./variantes";

const DEMOS: Record<DemoId, () => React.JSX.Element> = {
  anatomia: AnatomiaDemo,
  breakpoints: BreakpointsDemo,
  contraste: ContrasteDemo,
  cta: CtaDemo,
  espacamento: EspacamentoDemo,
  hierarquia: HierarquiaDemo,
  layout: LayoutDemo,
  sizing: SizingDemo,
  tipografia: TipografiaDemo,
  variantes: VariantesDemo,
};

export function Demo({ id }: { id: DemoId }) {
  const Component = DEMOS[id];
  return <Component />;
}
