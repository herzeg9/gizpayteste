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
      className={`bg-gold/20 text-olive text-[10px] px-2 py-1 rounded-sm italic border border-gold/50 ${className}`}
    >
      {children ?? "placeholder copy"}
    </span>
  );
}

function AlertIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start bg-cream">
      <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-center gap-2 bg-charcoal px-4 py-2 text-center text-sm font-medium tracking-wide text-cream">
        <AlertIcon />
        {site.proposalBanner}
      </div>

      <nav className="z-40 mt-10 flex w-full max-w-[1440px] items-center justify-between px-6 py-8">
        <a
          href="#topo"
          className="font-display text-4xl font-medium tracking-tight text-olive"
        >
          {copy.wordmark}
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-charcoal md:flex">
          <a href="#menu" className="transition-colors hover:text-olive">
            Cardápio
          </a>
          <a href="#about" className="transition-colors hover:text-olive">
            Sobre
          </a>
          <a href="#visit" className="transition-colors hover:text-olive">
            Como chegar
          </a>
        </div>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-olive px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-charcoal"
        >
          <CalendarIcon />
          {copy.navCta}
        </a>
      </nav>

      <main id="topo" className="w-full flex-1">
        <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-16 px-6 py-12 md:flex-row md:py-24">
          <div className="flex flex-1 flex-col items-start gap-6">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-wood">
              {copy.kicker}
            </span>
            <div className="relative">
              <h1 className="font-display text-5xl leading-tight text-charcoal md:text-7xl">
                {copy.headline.line1}
                <br />
                {copy.headline.line2}
              </h1>
              {copy.headline.placeholder ? (
                <Placeholder className="absolute -top-4 -right-4">
                  placeholder copy
                </Placeholder>
              ) : null}
            </div>
            <div className="relative max-w-lg">
              <p className="text-lg leading-relaxed font-light text-charcoal/80">
                {copy.subheadline.text}
              </p>
              {copy.subheadline.placeholder ? (
                <Placeholder className="absolute -bottom-6 left-0">
                  placeholder copy
                </Placeholder>
              ) : null}
            </div>
            <div className="mt-8">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-olive px-8 py-4 text-base font-medium text-cream transition-colors hover:bg-charcoal"
              >
                <WhatsAppIcon className="size-[1.125rem]" />
                {copy.cta}
              </a>
            </div>
          </div>
          <div className="relative w-full flex-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
              <Image
                src={copy.heroImage.src}
                alt={copy.heroImage.alt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-olive/10 mix-blend-multiply" />
            </div>
            {copy.heroImage.placeholder ? (
              <span className="absolute top-4 right-4 rounded-sm bg-white/90 px-2 py-1 text-[10px] text-olive italic shadow-sm">
                placeholder image
              </span>
            ) : null}
          </div>
        </section>

        <section id="menu" className="w-full px-6 py-20 md:py-24">
          <div className="mx-auto max-w-[1440px]">
            <span className="text-xs font-semibold uppercase tracking-widest text-wood">
              Recorte publicado
            </span>
            <h2 className="mt-3 font-display text-4xl text-charcoal md:text-5xl">
              Cardápio
            </h2>
            <p className="relative mt-4 max-w-2xl text-sm leading-relaxed text-charcoal/70">
              {menu.disclaimer}
              <Placeholder className="ml-2 align-middle">placeholder</Placeholder>
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {(
                [
                  ["Padaria e viennoiserie", menu.padaria],
                  ["Brunch", menu.brunch],
                  ["Jantar para compartilhar", menu.jantar],
                ] as const
              ).map(([title, items]) => (
                <div
                  key={title}
                  className="rounded-lg border border-olive/15 bg-white/40 p-8"
                >
                  <h3 className="font-display text-2xl text-olive">{title}</h3>
                  <ul className="mt-6 space-y-5">
                    {items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <span>
                          <span className="block text-sm font-medium">
                            {item.name}
                          </span>
                          <span className="text-xs text-charcoal/50">
                            {item.source}
                          </span>
                        </span>
                        <span className="shrink-0 text-sm text-olive">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="w-full px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-wood">
                A casa
              </span>
              <h2 className="mt-3 font-display text-4xl text-charcoal md:text-5xl">
                Sobre
              </h2>
              <p className="mt-6 leading-relaxed text-charcoal/85">
                {copy.about.text}
              </p>
              <p className="mt-4 text-sm text-olive italic">{copy.notThis}</p>
              <div className="mt-10 rounded-lg bg-olive px-6 py-8 text-cream">
                <p className="font-display text-5xl">
                  {site.google.rating.toFixed(1)}
                </p>
                <p className="mt-1 text-sm text-cream/80">
                  {site.google.count} avaliações no Google
                  <span className="mt-1 block text-cream/60">
                    {site.google.source}
                  </span>
                </p>
              </div>
              <ul className="mt-10 space-y-6">
                {reviews.map((review) => (
                  <li key={review.quote} className="border-l-2 border-wood pl-4">
                    <blockquote className="text-sm leading-relaxed">
                      “{review.quote}”
                    </blockquote>
                    <p className="mt-1 text-xs text-charcoal/55">
                      {review.author} · {review.source}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-3xl text-charcoal">Perguntas</h3>
              <dl className="mt-8 space-y-8">
                {faq.map((item) => (
                  <div key={item.q}>
                    <dt className="font-medium text-olive">{item.q}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-charcoal/80">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="visit" className="w-full bg-olive px-6 py-20 text-cream md:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-wood">
                Vila Madalena
              </span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                Como chegar
              </h2>
              <p className="mt-6 text-lg">
                {site.address.street}
                <br />
                {site.address.neighborhood} · {site.address.city} ·{" "}
                {site.address.postalCode}
              </p>
              <p className="mt-4">
                <a
                  className="underline decoration-wood underline-offset-4"
                  href={site.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir no Google Maps
                </a>
              </p>
              <p className="mt-6">
                Instagram{" "}
                <a
                  className="underline decoration-wood underline-offset-4"
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.instagramHandle}
                </a>
              </p>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cream px-8 py-4 text-base font-medium text-olive transition-colors hover:bg-wood"
              >
                <WhatsAppIcon className="size-[1.125rem]" />
                {copy.cta}
              </a>
            </div>
            <div>
              <h3 className="font-display text-3xl">Horário</h3>
              <ul className="mt-6 space-y-2 text-sm">
                {site.hours.map((row) => (
                  <li
                    key={row.days}
                    className="flex justify-between gap-4 border-b border-cream/15 py-3"
                  >
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

      <footer className="w-full px-6 py-10 text-sm text-charcoal/70">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 sm:flex-row sm:justify-between">
          <p>
            {site.name} · {site.address.street}, {site.address.neighborhood}
            <br />
            {site.whatsappDisplay} · {site.instagramHandle}
          </p>
          <p className="max-w-sm">{site.privacy}</p>
        </div>
        <p className="mx-auto mt-6 max-w-[1440px] text-xs text-charcoal/50">
          Proposta Estúdio Giz. Fotos oficiais da casa não foram republicadas
          neste standby. Copy marcada como placeholder não é texto oficial da
          Joya.
        </p>
      </footer>
    </div>
  );
}
