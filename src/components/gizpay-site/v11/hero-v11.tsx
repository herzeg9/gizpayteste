import { PainelStayflow } from "@/components/gizpay-site/stayflow/painel-stayflow";
import { giz } from "@/components/prototipo/tokens";
import { PhoneHero } from "./phone-hero";

export function HeroV11() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-20 pt-32"
      style={{ background: giz.deep }}
    >
      <div className="hero-beam" aria-hidden />

      <div className="relative z-10 mx-auto mb-16 max-w-[960px] px-5 text-center">
        <span className="hero-eyebrow overline mb-8 block">
          Plataforma financeira para escolas
        </span>
        <h1 className="hero-headline mb-0 font-display text-[52px] font-semibold leading-[1.04] tracking-[-2.3px] text-[#F2F7F3] md:text-[84px] lg:text-[92px]">
          O dinheiro da sua escola,
          <br />
          <span className="font-serif-italic">no controle</span> de quem ensina.
        </h1>
        <p
          className="hero-subheading mx-auto mt-12 max-w-[620px] text-[18px] leading-relaxed md:text-[20px]"
          style={{ color: giz.mutedDark }}
        >
          Cobrança automática por Pix, boleto e cartão, com{" "}
          <strong className="font-semibold" style={{ color: giz.fgDark }}>
            liquidação direto no CNPJ da escola
          </strong>
          . Sem intermediário segurando o seu caixa por 30 dias.
        </p>
        <div className="hero-actions mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href="#agendar"
            className="pill-primary mint-pulse inline-flex h-[52px] min-w-[220px] items-center justify-center px-8 text-[16px] font-semibold"
          >
            Agendar demonstração
          </a>
          <a
            href="#calculadora"
            className="pill-outline min-h-[52px] min-w-[220px] px-8 py-3 text-[16px] font-semibold"
          >
            Calcular economia
          </a>
        </div>
        <p className="hero-microcopy mt-6 text-[13px] opacity-70" style={{ color: giz.mutedDark }}>
          Implantação e migração da base inclusas · Suporte humano por WhatsApp
        </p>
      </div>

      <div className="hero-mockup-parallax relative z-10 mx-auto w-full max-w-[1200px] px-5">
        <div className="hero-product-stage">
          <div className="hero-dashboard hero-mockup-float glass-card relative overflow-hidden p-4 md:p-8">
            <PainelStayflow embedded />
          </div>
          <PhoneHero />
        </div>
      </div>
    </section>
  );
}
