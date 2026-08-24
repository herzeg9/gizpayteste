import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Checklist } from "@/components/checklist";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Glossário, atalhos do Framer, escalas de referência, checklist de qualidade e links úteis para consulta rápida.",
};

const ATALHOS = [
  ["F", "Criar um Frame"],
  ["T", "Criar um texto"],
  ["R", "Criar um retângulo"],
  ["Shift + A", "Envolver a seleção em um Stack"],
  ["Cmd/Ctrl + D", "Duplicar"],
  ["Cmd/Ctrl + P", "Abrir o preview"],
  ["Space + arrastar", "Mover o canvas"],
  ["Cmd/Ctrl + scroll", "Zoom"],
  ["Esc, Esc", "Sair da edição de texto e desmarcar"],
];

const ESCALAS = [
  {
    titulo: "Espaçamento (8pt)",
    valores: "4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128",
    nota: "Use apenas estes valores. Padding de seção: 96 no desktop, 64 no mobile.",
  },
  {
    titulo: "Tipografia (base 16 · razão 1,25)",
    valores: "13 · 16 · 20 · 25 · 31 · 39 · 49 · 61 · 76",
    nota: "Entrelinha inversa ao tamanho: 1,05 no display, 1,6 no corpo.",
  },
  {
    titulo: "Contraste (WCAG)",
    valores: "4,5:1 texto normal · 3:1 texto grande · 7:1 para AAA",
    nota: "Ícones e bordas de componentes também precisam de 3:1.",
  },
  {
    titulo: "Movimento",
    valores: "140ms hover · 220ms estado · 520ms entrada · 60ms escalonamento",
    nota: "Curva ease out. Anime apenas transform e opacity.",
  },
  {
    titulo: "Core Web Vitals",
    valores: "LCP < 2,5s · INP < 200ms · CLS < 0,1",
    nota: "Meça sempre no relatório mobile, não no desktop.",
  },
  {
    titulo: "Alvos de toque",
    valores: "mínimo 44 × 44 px",
    nota: "Vale para botões, sliders, itens de menu e ícones clicáveis.",
  },
];

const GLOSSARIO = [
  {
    termo: "Above the fold / dobra",
    def: "O que aparece na tela sem rolar. É onde a proposta de valor precisa estar resolvida.",
  },
  {
    termo: "Auto Layout / Stack",
    def: "Container que organiza filhos automaticamente em linha ou coluna com espaçamento constante. No código, é Flexbox.",
  },
  {
    termo: "Breakpoint",
    def: "Largura de tela em que o layout muda de comportamento. No Framer: Desktop, Tablet e Phone.",
  },
  {
    termo: "CDN",
    def: "Rede de servidores distribuídos que entrega os arquivos do site a partir do ponto mais próximo do visitante.",
  },
  {
    termo: "CMS",
    def: "Sistema de conteúdo. No Framer: Collections (a base), Fields (os dados) e Collection Pages (o modelo de exibição).",
  },
  {
    termo: "CTA",
    def: "Call to action, a chamada para ação. Um bom CTA completa a frase “eu quero…”.",
  },
  {
    termo: "Fill / Fit / Fixed",
    def: "Modos de dimensionamento. Fill ocupa o espaço disponível, Fit encolhe até o conteúdo e Fixed trava um valor em pixels.",
  },
  {
    termo: "Hero",
    def: "A primeira seção da página, com o título principal, o apoio e a ação primária.",
  },
  {
    termo: "JTBD",
    def: "Jobs to Be Done. Modelo que descreve o progresso que a pessoa quer alcançar, não o produto que ela compra.",
  },
  {
    termo: "Open Graph",
    def: "Metadados que definem como o link aparece quando compartilhado. Sem og:image, o card no WhatsApp fica sem imagem.",
  },
  {
    termo: "Token",
    def: "Valor nomeado por papel (--primary, --space-4) que serve de fonte única de verdade para o design system.",
  },
  {
    termo: "Variante vs. estado",
    def: "Variante é uma versão intencional (primário, secundário). Estado é uma reação à interação (hover, foco, desabilitado).",
  },
  {
    termo: "Wireframe",
    def: "Esquema em baixa fidelidade que resolve ordem e proporção antes de qualquer decisão de cor ou fonte.",
  },
  {
    termo: "WCAG",
    def: "Diretrizes internacionais de acessibilidade. Definem, entre outras coisas, as razões mínimas de contraste.",
  },
];

const QA = [
  {
    title: "Conteúdo",
    items: [
      "Todo número tem base de cálculo declarada",
      "Nenhum texto de exemplo sobrou na página",
      "Todos os links funcionam e abrem onde deveriam",
      "Um único H1, com a mensagem principal",
    ],
  },
  {
    title: "Mobile",
    items: [
      "Página percorrida inteira a 390px",
      "Nada transborda e não há rolagem horizontal",
      "Alvos de toque com no mínimo 44 × 44 px",
      "Teclado correto por tipo de campo (email, tel)",
      "CTA principal alcançável pelo polegar",
    ],
  },
  {
    title: "Acessibilidade",
    items: [
      "Tab percorre a página com foco visível em tudo",
      "Contraste de 4,5:1 em todos os pares texto/fundo",
      "Alt descritivo nas imagens informativas",
      "Label visível em todos os campos de formulário",
      "prefers-reduced-motion respeitado",
    ],
  },
  {
    title: "Performance e SEO",
    items: [
      "LCP abaixo de 2,5s no relatório mobile",
      "Imagens em WebP com largura e altura declaradas",
      "Title e description únicos por página",
      "Favicon e imagem social 1200×630 configurados",
      "Link testado no WhatsApp, com card correto",
    ],
  },
  {
    title: "Conversão",
    items: [
      "Formulário testado de ponta a ponta por você mesmo",
      "Confirmação diz o que acontece agora e em quanto tempo",
      "Eventos de conversão disparando no analytics",
      "Teste dos 5 segundos com três pessoas de fora",
    ],
  },
];

const LINKS = [
  ["Framer — Academy", "https://www.framer.com/academy/", "Trilhas oficiais da ferramenta"],
  ["Framer — Atalhos", "https://www.framer.com/shortcuts", "Lista completa e atualizada"],
  ["Framer — Marketplace", "https://www.framer.com/community/marketplace/templates/", "Templates para desmontar e aprender"],
  ["PageSpeed Insights", "https://pagespeed.web.dev/", "Medir Core Web Vitals do site real"],
  ["WebAIM Contrast Checker", "https://webaim.org/resources/contrastchecker/", "Verificação de contraste WCAG"],
  ["Type Scale", "https://typescale.com/", "Gerar escalas tipográficas"],
  ["Squoosh", "https://squoosh.app/", "Comprimir imagens para WebP e AVIF"],
  ["Google Search Console", "https://search.google.com/search-console", "Enviar sitemap e acompanhar indexação"],
];

export default function RecursosPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-6 sm:py-20">
      <Reveal>
        <header className="max-w-[60ch]">
          <span className="text-[11px] uppercase tracking-[0.16em] text-primary">
            Consulta rápida
          </span>
          <h1 className="mt-3 font-display text-[38px] font-semibold leading-[1.06] tracking-tight sm:text-[54px]">
            Recursos
          </h1>
          <p className="mt-5 text-lg leading-[1.65] text-muted-foreground">
            Atalhos, escalas de referência, glossário, checklist de qualidade e
            os links que valem a pena manter abertos enquanto você trabalha.
          </p>
        </header>
      </Reveal>

      <div className="mt-14 grid gap-14">
        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Escalas de referência
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ESCALAS.map((escala) => (
                <article
                  key={escala.titulo}
                  className="grid content-start gap-2 rounded-[16px] border border-border bg-card p-5"
                >
                  <h3 className="text-[15px] font-semibold">{escala.titulo}</h3>
                  <p className="font-mono text-[13px] leading-relaxed text-primary">
                    {escala.valores}
                  </p>
                  <p className="text-[13.5px] leading-relaxed text-muted-foreground">
                    {escala.nota}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Atalhos do Framer
            </h2>
            <div className="mt-6 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
              {ATALHOS.map(([atalho, acao]) => (
                <div
                  key={atalho}
                  className="flex items-center gap-3 rounded-[10px] border border-border bg-card px-4 py-3"
                >
                  <kbd className="shrink-0 rounded-md border border-border bg-secondary px-2 py-1 font-mono text-[11px] text-primary">
                    {atalho}
                  </kbd>
                  <span className="text-sm text-muted-foreground">{acao}</span>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Checklist de qualidade
            </h2>
            <p className="mt-2 max-w-[62ch] text-[16px] leading-[1.65] text-muted-foreground">
              Rode esta lista antes de conectar o domínio. Vale para qualquer
              site, não só para o projeto da Giz Pay.
            </p>
            <div className="mt-6">
              <Checklist storageKey="qa-lancamento" groups={QA} />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Glossário
            </h2>
            <Accordion type="single" collapsible className="mt-6">
              {GLOSSARIO.map((item) => (
                <AccordionItem key={item.termo} value={item.termo}>
                  <AccordionTrigger className="text-left text-[15px]">
                    {item.termo}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-[64ch] text-[15px] leading-[1.7] text-muted-foreground">
                    {item.def}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </Reveal>

        <Reveal>
          <section>
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Links úteis
            </h2>
            <div className="mt-6 grid gap-1.5 sm:grid-cols-2">
              {LINKS.map(([titulo, href, nota]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 rounded-[12px] border border-border bg-card px-4 py-3.5 transition-colors hover:border-primary/30"
                >
                  <span className="flex-1">
                    <span className="block text-[15px] font-medium transition-colors group-hover:text-primary">
                      {titulo}
                    </span>
                    <span className="block text-[13.5px] text-muted-foreground">
                      {nota}
                    </span>
                  </span>
                  <ExternalLink className="mt-1 size-3.5 shrink-0 text-muted-foreground" />
                </a>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
