import Image from "next/image";
import { FaixaProposta } from "@/components/faixa-proposta";
import { Dado, Lacuna, Ressalva, Selo } from "@/components/dado";
import { fontesUsadas, negocio } from "@/data/negocio";
import { apenasFato, ehFato } from "@/data/schema";
import { enderecoEmLinha, handleInstagram, urlMaps } from "@/lib/formato";

const { copy, ctaPrimario, ctaSecundario } = negocio;
const endereco = apenasFato(negocio.endereco);
const instagram = apenasFato(negocio.instagram);

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <FaixaProposta />

      <nav className="sticky top-0 z-40 border-b border-texto/10 bg-fundo">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#topo" className="font-display text-2xl">
            {copy.wordmark}
          </a>
          <a
            href={ctaPrimario.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-acento px-5 py-2.5 text-sm font-semibold text-fundo"
          >
            {ctaPrimario.rotulo}
          </a>
        </div>
      </nav>

      <main id="topo" className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-xs tracking-[0.2em] uppercase opacity-60">
            {copy.chapeu}
          </p>
          <h1 className="font-display mb-6 text-5xl leading-tight md:text-6xl">
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

        {negocio.cardapio.length ? (
          <section id="cardapio" className="border-y border-texto/10 bg-fundo-fundo/40 py-16">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="font-display mb-10 text-3xl">Para comer e levar</h2>
              <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {negocio.cardapio.map((item) => (
                  <li key={item.nome}>
                    <div className="mb-2 flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-lg">{item.nome}</h3>
                      <span className="shrink-0 text-sm">
                        <Dado
                          campo={item.preco}
                          aoFaltar={(motivo) => <Lacuna motivo={motivo} />}
                        >
                          {(preco) => preco}
                        </Dado>
                      </span>
                    </div>
                    <p className="text-sm opacity-70">{item.descricao}</p>
                    <Ressalva campo={item.preco} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section id="sobre" className="mx-auto max-w-6xl px-6 py-16">
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
                <li key={depoimento.autor} className="border-l-2 border-destaque pl-4">
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

        <section id="visitar" className="border-t border-texto/10 py-16">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
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
                  className="mt-4 inline-block text-xs font-semibold tracking-widest text-acento uppercase"
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
                      <li key={linha.dias} className="flex justify-between gap-4">
                        <span className="font-medium">{linha.dias}</span>
                        <span>{linha.horas}</span>
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
      </main>

      <footer className="border-t border-texto/10 px-6 py-10 text-sm opacity-70">
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
      </footer>
    </div>
  );
}
