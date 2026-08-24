import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Checklist } from "@/components/checklist";
import { track5 } from "@/content/track-5-projeto";

export const metadata: Metadata = {
  title: "Projeto Giz Pay",
  description:
    "Diagnóstico do site atual, plano de repaginamento e checklist de execução do projeto Giz Pay 2.0.",
};

const DIAGNOSTICO: { dimensao: string; nota: number; nota_texto: string }[] = [
  { dimensao: "Clareza da proposta de valor", nota: 5, nota_texto: "Passa no teste dos 5 segundos. Manter." },
  { dimensao: "Prova e credibilidade", nota: 2, nota_texto: "Sem depoimento, sem logo, números sem origem." },
  { dimensao: "Interatividade", nota: 3, nota_texto: "A calculadora existe, mas está enterrada." },
  { dimensao: "Hierarquia visual", nota: 3, nota_texto: "Seções com densidade uniforme; rolagem monótona." },
  { dimensao: "Conversão", nota: 3, nota_texto: "Um único formulário, no fim, sem CTA fixo no mobile." },
  { dimensao: "Fundação técnica", nota: 2, nota_texto: "HTML único com Tailwind via CDN, sem componentes." },
  { dimensao: "Mobile", nota: 3, nota_texto: "Tabela e mockup sofrem em telas estreitas." },
  { dimensao: "SEO e metadados", nota: 4, nota_texto: "Bem configurado; falta dado estruturado de FAQ." },
];

const PRIORIDADES = [
  {
    tag: "P1",
    titulo: "Criar prova social",
    texto:
      "Depoimento nominal com número antes/depois e logos de escolas clientes. É o bloqueio decisivo para quem vai confiar o caixa da escola a um fornecedor.",
  },
  {
    tag: "P2",
    titulo: "Dar lastro aos números",
    texto:
      "Toda métrica publicada precisa de base de cálculo declarada. Sem isso, sai da página.",
  },
  {
    tag: "P3",
    titulo: "Promover a calculadora",
    texto:
      "Do fim da página para o meio, logo depois de “Como funciona”, com atalho já no hero.",
  },
  {
    tag: "P4",
    titulo: "Tornar a página ativa",
    texto:
      "Painel que demonstra sozinho, etapas navegáveis e portal do responsável com o Pix copia-e-cola funcionando.",
  },
  {
    tag: "P5",
    titulo: "Distribuir a conversão",
    texto:
      "CTA fixo no mobile e pontos de ação no hero, no fim da calculadora e no comparativo.",
  },
];

const CHECKLIST = [
  {
    title: "Descobrir e definir",
    items: [
      "Auditoria heurística do site atual, com nota por dimensão",
      "Teste dos 5 segundos com três pessoas de fora",
      "Entrevistas com clientes e com o time comercial",
      "Base de cálculo de todos os números que hoje estão no site",
      "Briefing de uma página aprovado por escrito",
      "Métrica primária e métricas de apoio definidas",
    ],
  },
  {
    title: "Estruturar e desenhar",
    items: [
      "Arquitetura das 13 seções, com a pergunta que cada uma responde",
      "Wireframe desktop em baixa fidelidade",
      "Wireframe mobile a 390px",
      "Color Styles e Text Styles criados no Framer",
      "Contraste verificado par a par (mínimo 4,5:1)",
      "Dez componentes construídos com variantes e estados",
    ],
  },
  {
    title: "Escrever",
    items: [
      "Título, apoio e microcópia do hero",
      "Copy das quatro dores, com número em cada uma",
      "Copy das quatro etapas de funcionamento",
      "Depoimento aprovado pela escola cliente",
      "Todos os CTAs completando a frase “eu quero…”",
      "Microcópia de erro e de confirmação do formulário",
    ],
  },
  {
    title: "Construir",
    items: [
      "Navegação e rodapé",
      "Hero com painel demonstrando sozinho",
      "Seções de conteúdo, de cima para baixo",
      "Calculadora como Code Component",
      "Formulário de 5 campos com destino por webhook",
      "Página de confirmação dizendo o que acontece agora",
      "Movimento aplicado (apenas depois da estrutura fechada)",
      "Ajustes nos três breakpoints",
    ],
  },
  {
    title: "Publicar e medir",
    items: [
      "Favicon e imagem social 1200×630",
      "Title e description únicos por página",
      "Dado estruturado de FAQ",
      "Publicação no subdomínio do Framer e teste em celular real",
      "Domínio conectado e HTTPS ativo",
      "GA4 com eventos de calculadora, início e envio do formulário",
      "Sitemap enviado ao Search Console",
      "Revisão de dados agendada para 30 dias depois",
    ],
  },
];

export default function ProjetoPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-6 sm:py-20">
      <Reveal>
        <header className="max-w-[62ch]">
          <span className="text-[11px] uppercase tracking-[0.16em] text-primary">
            Trilha 05 · projeto guiado
          </span>
          <h1 className="mt-3 font-display text-[38px] font-semibold leading-[1.06] tracking-tight sm:text-[54px]">
            Repaginar a Giz Pay, do zero.
          </h1>
          <p className="mt-5 text-lg leading-[1.65] text-muted-foreground">
            Esta é a página de comando do projeto: o diagnóstico do site atual,
            as prioridades por impacto na conversão, o plano de execução e a
            checklist que acompanha o trabalho até o lançamento.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href={`/aula/${track5.lessons[0].slug}`}>
                Começar pela aula 5.1
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/prototipo">Ver o protótipo pronto</Link>
            </Button>
            <Button asChild variant="ghost">
              <a href="https://gizpay.com.br" target="_blank" rel="noreferrer">
                Site atual
                <ExternalLink className="size-3.5" />
              </a>
            </Button>
          </div>
        </header>
      </Reveal>

      <Reveal delay={80}>
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Diagnóstico do site atual
          </h2>
          <p className="mt-2 max-w-[62ch] text-[16px] leading-[1.65] text-muted-foreground">
            Nota de 1 a 5 por dimensão. A leitura resumida: a estratégia está
            certa e a execução é que precisa subir de nível — principalmente em
            prova e em interatividade.
          </p>

          <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {DIAGNOSTICO.map((item) => (
              <div
                key={item.dimensao}
                className="rounded-[14px] border border-border bg-card p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[15px] font-medium">{item.dimensao}</span>
                  <span
                    className="flex gap-0.5"
                    aria-label={`Nota ${item.nota} de 5`}
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={
                          i < item.nota
                            ? "size-1.5 rounded-full bg-primary"
                            : "size-1.5 rounded-full bg-border"
                        }
                      />
                    ))}
                  </span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.nota_texto}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Prioridades, por impacto na conversão
          </h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PRIORIDADES.map((item) => (
              <article
                key={item.tag}
                className="grid content-start gap-2 rounded-[16px] border border-border bg-card p-5"
              >
                <span className="w-fit rounded-full border border-primary/30 px-2 py-0.5 font-mono text-[10px] text-primary">
                  {item.tag}
                </span>
                <h3 className="text-[16px] font-semibold leading-snug">
                  {item.titulo}
                </h3>
                <p className="text-[14.5px] leading-[1.65] text-muted-foreground">
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            As seis etapas do projeto
          </h2>
          <ol className="mt-7 grid gap-2">
            {track5.lessons.map((lesson) => (
              <li key={lesson.slug}>
                <Link
                  href={`/aula/${lesson.slug}`}
                  className="group flex flex-wrap items-center gap-x-4 gap-y-1 rounded-[14px] border border-border bg-card px-5 py-4 transition-colors hover:border-primary/30"
                >
                  <span className="font-mono text-sm tabular-nums text-primary">
                    {lesson.number}
                  </span>
                  <span className="flex-1 text-[16px] font-medium transition-colors group-hover:text-primary">
                    {lesson.title}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {lesson.minutes} min
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  <span className="w-full text-sm leading-relaxed text-muted-foreground">
                    {lesson.subtitle}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Checklist de execução
          </h2>
          <p className="mt-2 max-w-[62ch] text-[16px] leading-[1.65] text-muted-foreground">
            Trinta e quatro itens, do briefing ao pós-lançamento. Marque
            conforme avançar — fica salvo neste navegador.
          </p>
          <div className="mt-7">
            <Checklist storageKey="projeto-gizpay" groups={CHECKLIST} />
          </div>
        </section>
      </Reveal>
    </div>
  );
}
