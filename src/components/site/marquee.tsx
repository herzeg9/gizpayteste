const items = [
  "Pix com baixa em segundos",
  "Boleto registrado",
  "Cartão e recorrência",
  "Régua de cobrança automática",
  "Portal do responsável",
  "Conciliação bancária",
  "Relatórios para contabilidade",
  "Multi-unidade e white label",
];

export function Marquee() {
  return (
    <div className="border-y bg-card">
      <div
        className="group relative flex overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-label="Recursos da plataforma"
      >
        <div className="flex w-max shrink-0 animate-marquee items-center motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {items.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="mx-3 inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap text-muted-foreground"
                >
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
