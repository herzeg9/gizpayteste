import type { ReactNode } from "react";
import { copy, faq, menu, reviews, site } from "@/content";

function Placeholder({ children }: { children?: ReactNode }) {
  return (
    <span className="ml-2 align-middle rounded-full border border-wood/50 bg-wood/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-olive-deep">
      {children ?? "placeholder"}
    </span>
  );
}

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.whatsappHref}
      className={`inline-flex items-center justify-center rounded-full bg-olive px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-olive-deep ${className}`}
    >
      {copy.cta}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-olive-deep px-4 py-2 text-center text-xs font-medium tracking-wide text-cream sm:text-sm">
        {site.proposalBanner}
      </div>

      <header className="border-b border-olive/15 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <a href="#topo" className="font-display text-2xl tracking-tight text-olive">
            {site.name}
          </a>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-olive">
            <a href="#cardapio" className="hover:underline">
              Cardápio
            </a>
            <a href="#sobre" className="hover:underline">
              Sobre
            </a>
            <a href="#chegar" className="hover:underline">
              Como chegar
            </a>
            <WhatsAppButton className="px-4 py-2" />
          </nav>
        </div>
      </header>

      <main id="topo">
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 80% 0%, var(--wood) 0%, transparent 50%), radial-gradient(ellipse at 0% 100%, var(--olive) 0%, transparent 45%)",
            }}
          />
          <div className="relative mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-olive">
                Vila Madalena · São Paulo
              </p>
              <h1 className="mt-4 max-w-xl font-display text-4xl leading-tight text-olive-deep sm:text-5xl">
                {copy.headline.text}
                {copy.headline.placeholder ? <Placeholder /> : null}
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-charcoal/80">
                {copy.subheadline.text}
                {copy.subheadline.placeholder ? <Placeholder /> : null}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppButton />
                <a
                  href="#cardapio"
                  className="inline-flex items-center justify-center rounded-full border border-olive/30 px-6 py-3 text-sm font-medium text-olive hover:bg-olive/10"
                >
                  Ver cardápio
                </a>
              </div>
            </div>
            <aside className="rounded-2xl bg-olive px-6 py-8 text-cream shadow-lg">
              <p className="font-display text-5xl">{site.google.rating.toFixed(1)}</p>
              <p className="mt-1 text-sm text-cream/80">
                {site.google.count} avaliações no Google
                <span className="block text-cream/60">{site.google.source}</span>
              </p>
              <dl className="mt-6 space-y-2 text-sm">
                <div className="flex justify-between gap-4 border-t border-cream/20 pt-3">
                  <dt>Salão</dt>
                  <dd>95 lugares</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-cream/20 pt-3">
                  <dt>Desde</dt>
                  <dd>novembro 2024</dd>
                </div>
                <div className="flex justify-between gap-4 border-t border-cream/20 pt-3">
                  <dt>Chef</dt>
                  <dd>Isabela Honda</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section id="cardapio" className="border-t border-olive/10 bg-cream px-4 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-display text-3xl text-olive-deep">Cardápio</h2>
            <p className="mt-2 max-w-2xl text-sm text-charcoal/70">
              {menu.disclaimer}
              <Placeholder />
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {(
                [
                  ["Padaria e viennoiserie", menu.padaria],
                  ["Brunch", menu.brunch],
                  ["Jantar para compartilhar", menu.jantar],
                ] as const
              ).map(([title, items]) => (
                <div key={title} className="rounded-2xl border border-olive/15 bg-white/50 p-6">
                  <h3 className="font-display text-xl text-olive">{title}</h3>
                  <ul className="mt-4 space-y-4">
                    {items.map((item) => (
                      <li key={item.name} className="flex items-baseline justify-between gap-3">
                        <span>
                          <span className="block text-sm font-medium">{item.name}</span>
                          <span className="text-xs text-charcoal/50">{item.source}</span>
                        </span>
                        <span className="shrink-0 text-sm text-olive">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="border-t border-olive/10 px-4 py-20">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-olive-deep">Sobre a casa</h2>
              <p className="mt-4 leading-relaxed text-charcoal/85">{copy.about.text}</p>
              <p className="mt-4 text-sm italic text-olive">{copy.notThis}</p>
              <ul className="mt-8 space-y-4">
                {reviews.map((review) => (
                  <li key={review.quote} className="border-l-2 border-wood pl-4">
                    <blockquote className="text-sm leading-relaxed">“{review.quote}”</blockquote>
                    <p className="mt-1 text-xs text-charcoal/55">
                      {review.author} · {review.source}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl text-olive">Perguntas</h3>
              <dl className="mt-6 space-y-6">
                {faq.map((item) => (
                  <div key={item.q}>
                    <dt className="font-medium text-olive-deep">{item.q}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-charcoal/80">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="chegar" className="border-t border-olive/10 bg-olive text-cream px-4 py-20">
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl">Como chegar</h2>
              <p className="mt-4 text-lg">
                {site.address.street}
                <br />
                {site.address.neighborhood} · {site.address.city} · {site.address.postalCode}
              </p>
              <p className="mt-4">
                <a className="underline decoration-wood underline-offset-4" href={site.maps}>
                  Abrir no Google Maps
                </a>
              </p>
              <p className="mt-6">
                Instagram{" "}
                <a className="underline decoration-wood underline-offset-4" href={site.instagram}>
                  {site.instagramHandle}
                </a>
              </p>
              <WhatsAppButton className="mt-8 bg-cream text-olive hover:bg-wood" />
            </div>
            <div>
              <h3 className="font-display text-2xl">Horário</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {site.hours.map((row) => (
                  <li key={row.days} className="flex justify-between gap-4 border-b border-cream/15 py-2">
                    <span>{row.days}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-cream/70">{site.hoursNote}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-olive/15 px-4 py-10 text-sm text-charcoal/70">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:justify-between">
          <p>
            {site.name} · {site.address.street}, {site.address.neighborhood}
            <br />
            {site.whatsappDisplay} · {site.instagramHandle}
          </p>
          <p className="max-w-sm">{site.privacy}</p>
        </div>
        <p className="mx-auto mt-6 max-w-5xl text-xs text-charcoal/50">
          Proposta Estúdio Giz. Fotos oficiais da casa não foram republicadas neste standby.
          Copy marcada como placeholder não é texto oficial da Joya.
        </p>
      </footer>
    </>
  );
}
