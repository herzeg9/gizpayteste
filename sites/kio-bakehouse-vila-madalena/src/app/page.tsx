import Image from "next/image";
import { FaixaProposta } from "@/components/faixa-proposta";
import { Dado, Lacuna, Ressalva, Selo } from "@/components/dado";
import { fontesUsadas, negocio } from "@/data/negocio";
import { apenasFato, ehFato } from "@/data/schema";
import { enderecoEmLinha, handleInstagram, urlMaps } from "@/lib/formato";

const { copy, ctaPrimario } = negocio;
const handle = handleInstagram(ctaPrimario.url);
const endereco = apenasFato(negocio.endereco);

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-paper">
      <FaixaProposta />

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
            href={ctaPrimario.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-charcoal px-6 py-3 text-xs font-bold tracking-widest text-paper uppercase transition-colors hover:bg-crust"
          >
            Instagram
          </a>
        </div>
      </nav>

      <main id="topo" className="flex-1">
        <section className="mx-auto max-w-7xl px-6 py-12 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <span className="mb-4 block text-[10px] font-bold tracking-[0.2em] text-crust uppercase">
                {copy.chapeu}
              </span>
              <h1 className="font-display relative mb-8 text-6xl leading-[0.9] md:text-8xl">
                <Dado campo={copy.headline}>
                  {(linhas) => (
                    <>
                      {linhas[0]}
                      <br />
                      <span className="text-crust">{linhas[1]}</span>
                    </>
                  )}
                </Dado>
              </h1>
              <p className="font-serif-body relative mb-10 max-w-lg text-xl leading-relaxed text-charcoal/80 md:text-2xl">
                <Dado campo={copy.subheadline}>{(texto) => texto}</Dado>
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={ctaPrimario.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-charcoal px-8 py-5 text-center text-sm font-bold tracking-widest text-paper uppercase transition-colors hover:bg-crust"
                >
                  {ctaPrimario.rotulo}
                </a>
                <a
                  href="#visitar"
                  className="border border-charcoal px-8 py-5 text-center text-sm font-bold tracking-widest uppercase transition-colors hover:bg-charcoal hover:text-paper"
                >
                  Ver horários
                </a>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-butter/20">
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
            {negocio.depoimentos.slice(0, 2).map((depoimento) => (
              <div key={depoimento.autor}>
                <h3 className="font-display text-2xl italic">
                  “{depoimento.texto}”
                </h3>
                <p className="mt-1 text-xs tracking-widest text-crust uppercase">
                  {depoimento.autor}
                </p>
              </div>
            ))}
            <div className="md:text-right">
              <Dado campo={negocio.avaliacao}>
                {(avaliacao) => (
                  <>
                    <p className="font-display text-4xl italic">
                      {avaliacao.nota.toFixed(1)}
                    </p>
                    <p className="mt-1 text-xs tracking-widest text-crust uppercase">
                      {avaliacao.total} avaliações no Google
                    </p>
                  </>
                )}
              </Dado>
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
            Recorte de preços publicados na imprensa — não é o cardápio completo
            nem necessariamente o da semana.
          </p>
          <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {negocio.cardapio.map((item) => (
              <li key={item.nome}>
                <div className="mb-4 flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl">{item.nome}</h3>
                  <span className="shrink-0 text-sm">
                    <Dado
                      campo={item.preco}
                      aoFaltar={(motivo) => <Lacuna motivo={motivo} />}
                    >
                      {(preco) => preco}
                    </Dado>
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-charcoal/70">
                  {item.descricao}
                </p>
                {ehFato(item.preco) ? (
                  <p className="mt-2 text-xs text-charcoal/45">
                    {item.preco.fonte.veiculo}
                  </p>
                ) : null}
                <Ressalva campo={item.preco} />
              </li>
            ))}
          </ul>
          <div className="mt-16 flex flex-col items-center justify-between gap-8 bg-charcoal p-8 text-paper md:flex-row">
            <p className="font-serif-body text-lg">
              Consulte o balcão — e o Instagram — para o que saiu do forno hoje.
            </p>
            <a
              href={ctaPrimario.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-paper/40 pb-1 text-sm tracking-widest uppercase hover:border-paper"
            >
              {handle}
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
                <Dado campo={copy.sobre}>{(texto) => texto}</Dado>
              </p>
              <p className="mt-6 max-w-lg text-sm text-butter italic">
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
                    <p className="mt-1 text-sm text-paper/70">
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
                    className="border-l border-butter/40 pl-4"
                  >
                    <blockquote className="text-sm leading-relaxed">
                      “{depoimento.texto}”
                    </blockquote>
                    <p className="mt-1 text-xs text-paper/50">
                      {depoimento.autor} · {depoimento.fonte.veiculo}
                    </p>
                  </li>
                ))}
              </ul>
              <dl className="mt-12 space-y-6">
                {negocio.faq.map((item) => (
                  <div key={item.pergunta}>
                    <dt className="font-medium text-butter">
                      {item.pergunta}
                      {item.emAberto ? <Selo>em aberto</Selo> : null}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-paper/75">
                      {item.resposta}
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
              <Dado campo={negocio.endereco}>
                {(local) => (
                  <p className="font-serif-body text-2xl">
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
                  className="mt-4 inline-block text-xs font-bold tracking-widest text-rust uppercase hover:underline"
                >
                  Abrir no Google Maps
                </a>
              ) : null}
              <h3 className="mt-12 mb-4 text-[10px] font-bold tracking-[0.2em] text-crust uppercase">
                Horários
              </h3>
              <Dado campo={negocio.horarios}>
                {(horarios) => (
                  <ul className="font-serif-body space-y-3 text-lg">
                    {horarios.map((linha) => (
                      <li
                        key={linha.dias}
                        className="flex justify-between gap-4"
                      >
                        <span className="font-bold">{linha.dias}</span>
                        <span>{linha.horas}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Dado>
              <div className="mt-6 border border-charcoal/10 bg-paper-deep/20 p-4">
                <Ressalva campo={negocio.horarios} />
              </div>
            </div>
            <div>
              <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-crust uppercase">
                Contato
              </p>
              <Dado campo={negocio.telefone}>
                {(telefone) => (
                  <p className="font-serif-body text-2xl">{telefone}</p>
                )}
              </Dado>
              <Ressalva campo={negocio.telefone} />
              <p className="mt-8">
                Instagram{" "}
                <a
                  className="underline decoration-crust underline-offset-4"
                  href={ctaPrimario.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {handle}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-charcoal/10 px-6 py-10 text-sm text-charcoal/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:justify-between">
          <p>
            {negocio.nome}
            {endereco ? ` · ${enderecoEmLinha(endereco)}` : null}
            <br />
            {apenasFato(negocio.telefone)} · {handle}
          </p>
          <p className="max-w-sm">{negocio.proposta.privacidade}</p>
        </div>
        <div className="mx-auto mt-6 max-w-7xl text-xs text-charcoal/50">
          <p>
            Proposta Estúdio Giz. Fotos oficiais da casa não foram republicadas
            neste standby. Copy marcada como placeholder não é texto oficial da
            Kio.
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
