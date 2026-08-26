import type { ReactNode } from "react";
import Image from "next/image";
import { copy, faq, menu, reviews, site } from "@/content";

function Placeholder({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`ml-1 inline-block border border-current px-1 py-px align-middle text-[10px] tracking-wide italic ${className}`}
    >
      {children ?? "placeholder"}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-paper">
      <div className="z-50 w-full bg-charcoal px-4 py-2 text-center text-[10px] tracking-[0.2em] text-paper uppercase sm:text-xs">
        {site.proposalBanner}
      </div>

      <nav className="sticky top-0 z-40 border-b border-charcoal/10 bg-paper">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#topo" className="font-display text-4xl tracking-tighter">
            {copy.wordmark}
          </a>
          <div className="hidden items-center gap-10 text-sm font-medium tracking-wider uppercase md:flex">
            <a href="#cardapio" className="hover:text-crust">
              Cardápio
            </a>
            <a href="#sobre" className="hover:text-crust">
              Sobre
            </a>
            <a href="#visitar" className="hover:text-crust">
              Como chegar
            </a>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-charcoal px-6 py-3 text-xs font-bold tracking-widest text-paper uppercase transition-colors hover:bg-crust"
          >
            {copy.navCta}
          </a>
        </div>
      </nav>

      <main id="topo" className="flex-1">
        <section className="mx-auto max-w-7xl px-6 py-12 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="mb-4 block text-[10px] font-bold tracking-[0.2em] text-crust uppercase">
                {copy.kicker}
              </span>
              <h1 className="font-display relative mb-8 text-6xl leading-[0.9] md:text-8xl">
                {copy.headline.line1}
                <br />
                <span className="text-crust">{copy.headline.line2}</span>
                {copy.headline.placeholder ? (
                  <Placeholder className="absolute -top-3 right-0">
                    placeholder copy
                  </Placeholder>
                ) : null}
              </h1>
              <p className="font-serif-body relative mb-10 max-w-lg text-xl leading-relaxed text-charcoal/80 md:text-2xl">
                {copy.subheadline.text}
                {copy.subheadline.placeholder ? (
                  <Placeholder>placeholder copy</Placeholder>
                ) : null}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-charcoal px-8 py-5 text-center text-sm font-bold tracking-widest text-paper uppercase transition-colors hover:bg-crust"
                >
                  {copy.cta}
                </a>
                <a
                  href="#visitar"
                  className="border border-charcoal px-8 py-5 text-center text-sm font-bold tracking-widest uppercase transition-colors hover:bg-charcoal hover:text-paper"
                >
                  {copy.ctaHours}
                </a>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-butter/20">
                <Image
                  src={copy.heroImage.src}
                  alt={copy.heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                {copy.heroImage.placeholder ? (
                  <span className="absolute top-4 right-4 border border-charcoal bg-paper px-2 py-1 text-[10px] font-bold tracking-tighter uppercase">
                    placeholder image
                  </span>
                ) : null}
              </div>
              <div className="absolute -bottom-4 -left-4 h-12 w-12 border-b-2 border-l-2 border-rust" />
            </div>
          </div>
        </section>

        <section className="border-y border-charcoal/10 bg-paper-deep/30 py-12">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
            <div>
              <h3 className="font-display text-2xl italic">
                “Melhores folhados de SP”
              </h3>
              <p className="mt-1 text-xs tracking-widest text-crust uppercase">
                Júri Folha 2025/2026
              </p>
            </div>
            <div className="md:text-center">
              <p className="font-display text-4xl italic">
                {site.google.rating.toFixed(1)}
              </p>
              <p className="mt-1 text-xs tracking-widest text-crust uppercase">
                {site.google.count} avaliações no Google
              </p>
            </div>
            <div className="md:text-right">
              <h3 className="font-display text-2xl italic">
                “Delícia e crocante”
              </h3>
              <p className="mt-1 text-xs tracking-widest text-crust uppercase">
                Marco Catto, Google
              </p>
            </div>
          </div>
        </section>

        <section id="cardapio" className="mx-auto max-w-7xl px-6 py-24">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.2em] text-crust uppercase">
            Recorte publicado
          </span>
          <h2 className="font-display mb-4 text-5xl italic md:text-6xl">
            Viennoiserie
          </h2>
          <p className="mb-16 text-sm text-charcoal/60 italic">
            {menu.disclaimer}
            <Placeholder>placeholder</Placeholder>
          </p>
          <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {menu.items.map((item) => (
              <li key={item.name}>
                <div className="mb-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl">{item.name}</h3>
                  <span className="shrink-0 text-sm">{item.price}</span>
                </div>
                <p className="text-sm leading-relaxed text-charcoal/70">
                  {item.note}
                  {item.placeholder ? <Placeholder /> : null}
                </p>
                <p className="mt-2 text-xs text-charcoal/45">{item.source}</p>
              </li>
            ))}
          </ul>
          <div className="mt-16 flex flex-col items-center justify-between gap-8 bg-charcoal p-8 text-paper md:flex-row">
            <p className="font-serif-body text-lg">
              Consulte o balcão — e o Instagram — para o que saiu do forno hoje.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-paper/40 pb-1 text-sm tracking-widest uppercase hover:border-paper"
            >
              {site.instagramHandle}
            </a>
          </div>
        </section>

        <section id="sobre" className="bg-charcoal py-24 text-paper">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-butter uppercase">
                A casa
              </span>
              <h2 className="font-display mt-4 text-5xl leading-tight md:text-7xl">
                Do Top Chef
                <br />
                para a vitrine.
              </h2>
              <p className="font-serif-body mt-8 max-w-lg text-lg text-paper/80">
                {copy.about.text}
              </p>
              <p className="mt-6 max-w-lg text-sm text-butter italic">
                {copy.notThis}
              </p>
              <blockquote className="mt-10 max-w-lg border-l-2 border-rust pl-6 italic">
                “{copy.quote.text}”
                <footer className="mt-2 text-xs not-italic tracking-widest text-paper/50 uppercase">
                  {copy.quote.author} · {copy.quote.source}
                </footer>
              </blockquote>
            </div>
            <div>
              <p className="font-display text-5xl">{site.google.rating.toFixed(1)}</p>
              <p className="mt-1 text-sm text-paper/70">
                {site.google.count} avaliações · {site.google.source}
              </p>
              <ul className="mt-10 space-y-6">
                {reviews.map((review) => (
                  <li key={review.quote} className="border-l border-butter/40 pl-4">
                    <blockquote className="text-sm leading-relaxed">
                      “{review.quote}”
                    </blockquote>
                    <p className="mt-1 text-xs text-paper/50">
                      {review.author} · {review.source}
                    </p>
                  </li>
                ))}
              </ul>
              <dl className="mt-12 space-y-6">
                {faq.map((item) => (
                  <div key={item.q}>
                    <dt className="font-medium text-butter">{item.q}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-paper/75">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="visitar" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="font-display mb-12 text-5xl italic">
                Onde nos encontrar
              </h2>
              <p className="font-serif-body text-2xl">
                {site.address.street}
                <br />
                {site.address.neighborhood}, {site.address.city} —{" "}
                {site.address.region}
                <br />
                {site.address.postalCode}
              </p>
              <a
                href={site.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs font-bold tracking-widest text-rust uppercase hover:underline"
              >
                Abrir no Google Maps
              </a>
              <h3 className="mt-12 mb-4 text-[10px] font-bold tracking-[0.2em] text-crust uppercase">
                Horários
              </h3>
              <ul className="font-serif-body space-y-3 text-lg">
                {site.hours.map((row) => (
                  <li key={row.days} className="flex justify-between gap-4">
                    <span className="font-bold">{row.days}</span>
                    <span>{row.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border border-charcoal/10 bg-paper-deep/20 p-4 text-xs italic">
                {site.hoursNote}
                <Placeholder />
              </p>
              <p className="mt-4 text-sm text-charcoal/60">{site.ifoodNote}</p>
            </div>
            <div>
              <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-crust uppercase">
                Contato
              </p>
              <p className="font-serif-body text-2xl">{site.phoneDisplay}</p>
              <p className="mt-2 text-xs text-charcoal/50 italic">
                {site.phoneNote}
              </p>
              <p className="mt-8">
                Instagram{" "}
                <a
                  className="underline decoration-crust underline-offset-4"
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.instagramHandle}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-charcoal/10 px-6 py-10 text-sm text-charcoal/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:justify-between">
          <p>
            {site.name} · {site.address.street}, {site.address.neighborhood}
            <br />
            {site.phoneDisplay} · {site.instagramHandle}
          </p>
          <p className="max-w-sm">{site.privacy}</p>
        </div>
        <p className="mx-auto mt-6 max-w-7xl text-xs text-charcoal/50">
          Proposta Estúdio Giz. Fotos oficiais da casa não foram republicadas
          neste standby. Copy marcada como placeholder não é texto oficial da
          Kio.
        </p>
      </footer>
    </div>
  );
}
