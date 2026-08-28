import Image from "next/image";
import { FaixaProposta } from "@/components/faixa-proposta";
import { Dado, Ressalva, Selo } from "@/components/dado";
import { fontesUsadas, negocio } from "@/data/negocio";
import { falarComEstudio } from "@/data/estudio";
import { apenasFato, ehFato } from "@/data/schema";
import { enderecoEmLinha, handleInstagram, urlMaps } from "@/lib/formato";

const { copy, ctaPrimario, ctaSecundario } = negocio;
const endereco = apenasFato(negocio.endereco);
const instagram = apenasFato(negocio.instagram);
const linkEstudio = falarComEstudio(negocio.slug);

/** Checkpoints: só entram os que têm seção de verdade na página. */
const checkpoints = [
  negocio.oferta.length ? { href: "#cardapio", rotulo: "Cardápio" } : null,
  { href: "#sobre", rotulo: "A casa" },
  { href: "#visitar", rotulo: "Como chegar" },
].filter((c): c is { href: string; rotulo: string } => c !== null);

const secoesOferta = [...new Set(negocio.oferta.map((i) => i.secao ?? ""))];

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <FaixaProposta />

      <header className="sticky top-0 z-40 border-b border-texto/10 bg-fundo">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <a href="#topo" className="font-display truncate text-xl sm:text-2xl">
            {copy.wordmark}
          </a>
          <a
            href={ctaPrimario.url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 shrink-0 rounded-full bg-acento px-4 py-2.5 text-sm font-semibold text-fundo sm:px-5"
          >
            {/* Rótulo curto na barra fixa: o longo empurra a linha em 320px. */}
            <span className="sm:hidden">
              {ctaPrimario.rotuloCurto ?? ctaPrimario.rotulo}
            </span>
            <span className="hidden sm:inline">{ctaPrimario.rotulo}</span>
          </a>
        </div>

        {/* Checkpoints visíveis em TODA largura — no celular a faixa rola
            sozinha em vez de o menu desaparecer. */}
        <nav
          aria-label="Seções da página"
          className="mx-auto max-w-6xl overflow-x-auto px-4 pb-2 sm:px-6"
        >
          <ul className="flex gap-4 text-sm whitespace-nowrap">
            {checkpoints.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  className="inline-flex min-h-11 items-center opacity-70 hover:opacity-100"
                >
                  {c.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="topo" className="flex-1">
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="mb-4 text-xs tracking-[0.2em] uppercase opacity-60">
            {copy.chapeu}
          </p>
          <h1 className="font-display mb-6 text-4xl leading-tight sm:text-5xl md:text-6xl">
            <Dado campo={copy.headline}>
              {(linhas) =>
                linhas.map((linha, indice) => (
                  <span key={linha} className="block">
                    {indice === linhas.length - 1 ? (
                      <span className="text-acento">{linha}</span>
                    ) : (
                      linha
                    )}
                  </span>
                ))
              }
            </Dado>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed opacity-80">
            <Dado campo={copy.subheadline}>{(texto) => texto}</Dado>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={ctaPrimario.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-realce px-8 py-4 text-center font-semibold text-white"
            >
              {ctaPrimario.rotulo}
            </a>
            {ctaSecundario ? (
              <a
                href={ctaSecundario.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-texto px-8 py-4 text-center font-medium"
              >
                {ctaSecundario.rotulo}
              </a>
            ) : null}
          </div>

          <div className="relative mt-12 aspect-[4/3] overflow-hidden rounded-2xl bg-fundo-fundo">
            <Dado campo={copy.heroImagem}>
              {(imagem) => (
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              )}
            </Dado>
            {!ehFato(copy.heroImagem) ? (
              <span className="absolute top-4 right-4 rounded bg-fundo px-2 py-1 text-[10px] font-semibold tracking-wide uppercase">
                placeholder
              </span>
            ) : null}
          </div>
        </section>

        {negocio.oferta.length ? (
          <section
            id="cardapio"
            className="scroll-mt-28 border-y border-texto/10 bg-fundo-fundo/40 py-16"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <h2 className="font-display mb-10 text-3xl">Para comer e levar</h2>
              <div className="grid gap-10 md:grid-cols-3">
                {secoesOferta.map((secao) => (
                  <div key={secao || "geral"}>
                    {secao ? (
                      <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-acento uppercase">
                        {secao}
                      </h3>
                    ) : null}
                    <ul className="space-y-5">
                      {negocio.oferta
                        .filter((i) => (i.secao ?? "") === secao)
                        .map((item) => (
                          <li key={item.nome}>
                            <p className="font-display text-lg">{item.nome}</p>
                            <p className="mt-1 text-sm opacity-70">
                              {item.descricao}
                            </p>
                            {item.preco ? (
                              <>
                                <p className="mt-1 text-sm font-medium">
                                  <Dado campo={item.preco}>
                                    {(preco) => preco}
                                  </Dado>
                                </p>
                                <Ressalva campo={item.preco} />
                              </>
                            ) : null}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-sm italic opacity-65">
                Recorte do que a casa e as fichas públicas divulgam — não é o
                cardápio completo. Preço aparece só onde há valor publicado.
              </p>
            </div>
          </section>
        ) : null}

        <section
          id="sobre"
          className="mx-auto max-w-6xl scroll-mt-28 px-4 py-16 sm:px-6"
        >
          <h2 className="font-display mb-6 text-3xl">A casa</h2>
          <p className="max-w-2xl text-lg leading-relaxed opacity-80">
            <Dado campo={copy.sobre}>{(texto) => texto}</Dado>
          </p>
          <p className="mt-6 max-w-2xl text-sm italic opacity-70">{copy.naoEh}</p>

          <Dado campo={negocio.avaliacao}>
            {(avaliacao) => (
              <p className="mt-10 text-sm opacity-70">
                Google {avaliacao.nota.toFixed(1)} · {avaliacao.total} avaliações
              </p>
            )}
          </Dado>

          {negocio.depoimentos.length ? (
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {negocio.depoimentos.map((depoimento) => (
                <li
                  key={depoimento.autor}
                  className="border-l-2 border-destaque pl-4"
                >
                  <blockquote className="text-sm leading-relaxed">
                    “{depoimento.texto}”
                  </blockquote>
                  <p className="mt-2 text-xs opacity-60">
                    {depoimento.autor} · {depoimento.fonte.veiculo}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <section
          id="visitar"
          className="scroll-mt-28 border-t border-texto/10 py-16"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <h2 className="font-display mb-6 text-3xl">Onde estamos</h2>
              <Dado campo={negocio.endereco}>
                {(local) => (
                  <p className="text-lg">
                    {local.logradouro}
                    <br />
                    {local.bairro}, {local.cidade} — {local.uf}
                    <br />
                    {local.cep}
                  </p>
                )}
              </Dado>
              {endereco ? (
                <a
                  href={urlMaps(negocio.nome, endereco)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center text-xs font-semibold tracking-widest text-acento uppercase"
                >
                  Abrir no Google Maps
                </a>
              ) : null}

              <h3 className="mt-10 mb-3 text-xs font-semibold tracking-[0.2em] uppercase opacity-60">
                Horários
              </h3>
              <Dado campo={negocio.horarios}>
                {(horarios) => (
                  <ul className="space-y-2">
                    {horarios.map((linha) => (
                      <li
                        key={linha.dias}
                        className="flex flex-wrap justify-between gap-x-4"
                      >
                        <span className="font-medium">{linha.dias}</span>
                        <span className="opacity-80">{linha.horas}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Dado>
              <Ressalva campo={negocio.horarios} />
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase opacity-60">
                Contato
              </h3>
              <Dado campo={negocio.telefone}>
                {(telefone) => <p className="text-lg">{telefone}</p>}
              </Dado>
              <Ressalva campo={negocio.telefone} />
              {instagram ? (
                <p className="mt-6">
                  Instagram{" "}
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    {handleInstagram(instagram)}
                  </a>
                </p>
              ) : null}

              {negocio.faq.length ? (
                <dl className="mt-10 space-y-5">
                  {negocio.faq.map((item) => (
                    <div key={item.pergunta}>
                      <dt className="font-medium">
                        {item.pergunta}
                        {item.emAberto ? <Selo>em aberto</Selo> : null}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed opacity-75">
                        {item.resposta}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </div>
          </div>
        </section>

        {/* A proposta mostra para quem foi desenhada. O público não é enfeite
            de documento: é o que decidiu tom, ordem das seções e o CTA. */}
        <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
          <div className="rounded-2xl border border-texto/15 p-6">
            <p className="text-xs font-semibold tracking-[0.2em] text-acento uppercase">
              Nota do Estúdio Giz
            </p>
            <h2 className="font-display mt-3 text-2xl">
              Desenhado para {negocio.publico.quem.toLowerCase()}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-80">
              {negocio.publico.porque}
            </p>
            <ul className="mt-4 grid gap-2 text-sm opacity-75 sm:grid-cols-2">
              {negocio.publico.implica.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden className="text-acento">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA de fechamento: quem leu a página inteira não deve ter de rolar
            de volta para agir. */}
        <section className="border-t border-texto/10 bg-acento py-14 text-fundo">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-2xl sm:text-3xl">
              Vai passar na Harmonia?
            </h2>
            <p className="mt-2 max-w-xl opacity-90">
              Peça no delivery oficial ou acompanhe a vitrine no Instagram.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={ctaPrimario.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-fundo px-8 py-4 text-center font-semibold text-texto"
              >
                {ctaPrimario.rotulo}
              </a>
              {ctaSecundario ? (
                <a
                  href={ctaSecundario.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-fundo/60 px-8 py-4 text-center font-medium"
                >
                  {ctaSecundario.rotulo}
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-texto/10 px-4 py-10 text-sm opacity-70 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:justify-between">
          <p>
            {negocio.nome}
            {endereco ? ` · ${enderecoEmLinha(endereco)}` : null}
          </p>
          <p className="max-w-sm">{negocio.proposta.privacidade}</p>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-xs">
          Fontes:{" "}
          {fontesUsadas.map((fonte, indice) => (
            <span key={fonte.url}>
              {indice > 0 ? " · " : null}
              <a
                href={fonte.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                {fonte.veiculo}
              </a>
            </span>
          ))}
        </p>
        {/* Medição da entrega sem analytics: o slug viaja na mensagem. */}
        {linkEstudio ? (
          <p className="mx-auto mt-6 max-w-6xl text-xs">
            <a
              href={linkEstudio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center underline underline-offset-2"
            >
              Falar com o Estúdio Giz sobre esta proposta
            </a>
          </p>
        ) : null}
      </footer>
    </div>
  );
}
