import Image from "next/image";
import { FaixaProposta } from "@/components/faixa-proposta";
import { Dado, Lacuna, Ressalva, Selo } from "@/components/dado";
import { fontesUsadas, negocio } from "@/data/negocio";
import { apenasFato, ehFato } from "@/data/schema";
import { enderecoEmLinha, handleInstagram, urlMaps } from "@/lib/formato";

const { copy, ctaPrimario, ctaSecundario } = negocio;
const endereco = apenasFato(negocio.endereco);
const instagram = apenasFato(negocio.instagram);

const secoes = ["Padaria", "Brunch", "Jantar"] as const;

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-cream">
      <FaixaProposta />

      <nav className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#topo" className="font-display text-3xl tracking-tight">
            {copy.wordmark}
          </a>
          <div className="hidden items-center gap-8 text-sm tracking-wider uppercase md:flex">
            <a href="#cardapio" className="hover:text-olive">
              Cardápio
            </a>
            <a href="#sobre" className="hover:text-olive">
              Sobre
            </a>
            <a href="#visitar" className="hover:text-olive">
              Como chegar
            </a>
          </div>
          <a
            href={ctaPrimario.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-olive px-5 py-3 text-xs font-bold tracking-widest text-cream uppercase transition-colors hover:bg-olive-deep"
          >
            Reservar
          </a>
        </div>
      </nav>

      <main id="topo" className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-[10px] font-bold tracking-[0.2em] text-olive uppercase">
                {copy.chapeu}
              </p>
              <h1 className="font-display mb-8 text-5xl leading-[1.05] md:text-7xl">
                <Dado campo={copy.headline}>
                  {(linhas) => (
                    <>
                      {linhas[0]}
                      <br />
                      <span className="text-olive">{linhas[1]}</span>
                    </>
                  )}
                </Dado>
              </h1>
              <p className="mb-10 max-w-lg text-lg leading-relaxed text-charcoal/80">
                <Dado campo={copy.subheadline}>{(texto) => texto}</Dado>
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={ctaPrimario.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm bg-olive px-8 py-4 text-center text-sm font-bold tracking-widest text-cream uppercase transition-colors hover:bg-olive-deep"
                >
                  {ctaPrimario.rotulo}
                </a>
                {ctaSecundario ? (
                  <a
                    href={ctaSecundario.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm border border-charcoal px-8 py-4 text-center text-sm font-bold tracking-widest uppercase transition-colors hover:bg-charcoal hover:text-cream"
                  >
                    {ctaSecundario.rotulo}
                  </a>
                ) : null}
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-wood/20">
              <Dado campo={copy.heroImagem}>
                {(imagem) => (
                  <Image
                    src={imagem.src}
                    alt={imagem.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </Dado>
              {!ehFato(copy.heroImagem) ? (
                <span className="absolute top-4 right-4 rounded-sm border border-gold/50 bg-gold/20 px-2 py-1 text-[10px] text-olive italic">
                  placeholder
                </span>
              ) : null}
            </div>
          </div>
        </section>

        <section id="cardapio" className="border-y border-charcoal/10 bg-cream py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display mb-4 text-4xl md:text-5xl">
              Da manhã ao jantar
            </h2>
            <p className="mb-14 text-sm text-charcoal/60 italic">
              Recorte de preços publicados na imprensa — não é o cardápio
              completo nem necessariamente o da semana.
            </p>
            <div className="grid gap-12 md:grid-cols-3">
              {secoes.map((secao) => {
                const itens = negocio.cardapio.filter(
                  (item) => item.secao === secao,
                );
                if (!itens.length) return null;
                return (
                  <div key={secao}>
                    <h3 className="mb-6 text-[10px] font-bold tracking-[0.2em] text-olive uppercase">
                      {secao}
                    </h3>
                    <ul className="space-y-6">
                      {itens.map((item) => (
                        <li key={item.nome}>
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="font-display text-lg">
                              {item.nome}
                            </span>
                            <span className="shrink-0 text-sm">
                              <Dado
                                campo={item.preco}
                                aoFaltar={(motivo) => <Lacuna motivo={motivo} />}
                              >
                                {(preco) => preco}
                              </Dado>
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-charcoal/65">
                            {item.descricao}
                          </p>
                          {ehFato(item.preco) ? (
                            <p className="mt-1 text-xs text-charcoal/45">
                              {item.preco.fonte.veiculo}
                            </p>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-olive py-20 text-cream">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                A casa
              </p>
              <h2 className="font-display mt-4 text-4xl leading-tight md:text-6xl">
                Padaria de chef,
                <br />
                jantar de salão.
              </h2>
              <p className="mt-8 max-w-lg text-lg text-cream/85">
                <Dado campo={copy.sobre}>{(texto) => texto}</Dado>
              </p>
              <p className="mt-6 max-w-lg text-sm text-gold italic">
                {copy.naoEh}
              </p>
            </div>
            <div>
              <Dado campo={negocio.avaliacao}>
                {(avaliacao) => (
                  <>
                    <p className="font-display text-5xl">
                      {avaliacao.nota.toFixed(1)}
                    </p>
                    <p className="mt-1 text-sm text-cream/70">
                      {avaliacao.total} avaliações ·{" "}
                      {ehFato(negocio.avaliacao)
                        ? negocio.avaliacao.fonte.veiculo
                        : null}
                    </p>
                  </>
                )}
              </Dado>
              <ul className="mt-10 space-y-6">
                {negocio.depoimentos.map((depoimento) => (
                  <li
                    key={depoimento.autor}
                    className="border-l border-gold/40 pl-4"
                  >
                    <blockquote className="text-sm leading-relaxed">
                      “{depoimento.texto}”
                    </blockquote>
                    <p className="mt-1 text-xs text-cream/55">
                      {depoimento.autor} · {depoimento.fonte.veiculo}
                    </p>
                  </li>
                ))}
              </ul>
              <dl className="mt-12 space-y-6">
                {negocio.faq.map((item) => (
                  <div key={item.pergunta}>
                    <dt className="font-medium text-gold">
                      {item.pergunta}
                      {item.emAberto ? <Selo>em aberto</Selo> : null}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-cream/80">
                      {item.resposta}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="visitar" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display mb-10 text-4xl">Onde nos encontrar</h2>
              <Dado campo={negocio.endereco}>
                {(local) => (
                  <p className="text-xl">
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
                  className="mt-4 inline-block text-xs font-bold tracking-widest text-olive uppercase hover:underline"
                >
                  Abrir no Google Maps
                </a>
              ) : null}

              <h3 className="mt-12 mb-4 text-[10px] font-bold tracking-[0.2em] text-olive uppercase">
                Horários
              </h3>
              <Dado campo={negocio.horarios}>
                {(horarios) => (
                  <ul className="space-y-3 text-lg">
                    {horarios.map((linha) => (
                      <li key={linha.dias} className="flex justify-between gap-4">
                        <span className="font-medium">{linha.dias}</span>
                        <span>{linha.horas}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Dado>
              <div className="mt-6 rounded-sm border border-charcoal/10 bg-wood/10 p-4">
                <Ressalva campo={negocio.horarios} />
              </div>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-olive uppercase">
                Reservas
              </p>
              <Dado campo={negocio.telefone}>
                {(telefone) => <p className="text-xl">{telefone}</p>}
              </Dado>
              <Ressalva campo={negocio.telefone} />
              {instagram ? (
                <p className="mt-8">
                  Instagram{" "}
                  <a
                    className="underline decoration-olive underline-offset-4"
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {handleInstagram(instagram)}
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-charcoal/10 px-6 py-10 text-sm text-charcoal/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:justify-between">
          <p>
            {negocio.nome}
            {endereco ? ` · ${enderecoEmLinha(endereco)}` : null}
            <br />
            {apenasFato(negocio.telefone)}
            {instagram ? ` · ${handleInstagram(instagram)}` : null}
          </p>
          <p className="max-w-sm">{negocio.proposta.privacidade}</p>
        </div>
        <div className="mx-auto mt-6 max-w-6xl text-xs text-charcoal/50">
          <p>
            Proposta Estúdio Giz. Fotos oficiais da casa não foram republicadas
            neste standby. Copy marcada como placeholder não é texto oficial da
            Joya.
          </p>
          <p className="mt-2">
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
        </div>
      </footer>
    </div>
  );
}
