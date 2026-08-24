import {
  Callout,
  CheckList,
  Exercicio,
  H3,
  Modulo,
  P,
  TabelaSimples,
  Termos,
} from "./lesson";

export function Modulo4() {
  return (
    <Modulo
      id="modulo-4"
      numero="4"
      titulo="Framer na prática"
      descricao="O mapa completo da ferramenta: os conceitos que importam, na ordem em que você vai usá-los."
    >
      <H3>O que é a Framer e por que ela serve para este projeto</H3>
      <P>
        A Framer é um editor visual que publica <strong>sites reais e rápidos</strong>, com
        hospedagem, domínio, formulários, CMS e animações inclusos — sem escrever código. Para
        uma landing page de captação como a da GizPay, ela cobre 100% do necessário. Crie uma
        conta gratuita em framer.com e abra um projeto em branco para acompanhar.
      </P>

      <H3>Os 8 conceitos que sustentam tudo</H3>
      <Termos
        items={[
          {
            termo: "1 · Canvas e Frames",
            def: (
              <>
                O canvas é a sua prancheta infinita. Um <strong>Frame</strong> é qualquer
                retângulo que agrupa conteúdo — uma seção, um card, uma página inteira. Tecle{" "}
                <strong>F</strong> para criar um. Páginas são frames especiais conectados à
                navegação.
              </>
            ),
          },
          {
            termo: "2 · Stacks (auto-layout)",
            def: (
              <>
                O recurso mais importante da ferramenta. Um Stack empilha os filhos vertical ou
                horizontalmente com espaçamento fixo — como caixas que se reorganizam sozinhas
                quando você adiciona, remove ou redimensiona algo. Layout profissional na Framer
                = tudo dentro de Stacks, nada solto em posição absoluta.
              </>
            ),
          },
          {
            termo: "3 · Breakpoints",
            def: (
              <>
                No topo de cada página você adiciona os breakpoints Desktop (1200px), Tablet
                (810px) e Phone (390px). O conteúdo é o mesmo; o layout se adapta em cada um.
                Edite sempre do desktop para o mobile, conferindo os três a cada seção concluída.
              </>
            ),
          },
          {
            termo: "4 · Components e Variants",
            def: (
              <>
                Selecione qualquer bloco e tecle <strong>Ctrl/Cmd+K</strong> para transformá-lo
                em componente. <strong>Variants</strong> são versões do mesmo componente (botão
                primário/secundário, card normal/hover) — e é entre variants que você cria as
                animações de interação.
              </>
            ),
          },
          {
            termo: "5 · Styles (cores e tipografia)",
            def: (
              <>
                Registre seus tokens como <strong>Color Styles</strong> e{" "}
                <strong>Text Styles</strong> no painel direito. Depois disso, mudar o tom de
                verde da marca atualiza o site inteiro em um clique. Nunca aplique cor “solta”.
              </>
            ),
          },
          {
            termo: "6 · Efeitos e interações",
            def: (
              <>
                <strong>Appear</strong> (anima ao carregar), <strong>Scroll</strong> (anima
                quando o bloco entra na tela — o efeito de “revelar ao rolar” do redesign),{" "}
                <strong>Hover/Press</strong> (troca de variant) e <strong>Scroll Speed/Sticky</strong>{" "}
                para paralaxe e elementos fixos. Todos configuráveis com spring ou duração/easing.
              </>
            ),
          },
          {
            termo: "7 · CMS",
            def: (
              <>
                Coleções de conteúdo (posts, perguntas de FAQ, casos de sucesso) que alimentam
                páginas automaticamente. Para a GizPay, o FAQ e um futuro blog de conteúdo para
                diretores de escola são candidatos perfeitos.
              </>
            ),
          },
          {
            termo: "8 · Publicação",
            def: (
              <>
                O botão <strong>Publish</strong> coloca o site no ar num subdomínio .framer.website;
                nas configurações do site você conecta o domínio próprio (gizpay.com.br), edita
                title/description de SEO e ativa o redirecionamento www.
              </>
            ),
          },
        ]}
      />

      <H3>Fluxo de trabalho recomendado</H3>
      <P>Na Framer, a ordem importa. Este é o fluxo que evita retrabalho:</P>
      <CheckList
        items={[
          <>
            <strong>1. Tokens primeiro:</strong> cadastre Color Styles e Text Styles antes de
            desenhar qualquer seção.
          </>,
          <>
            <strong>2. Componentes base:</strong> botão (com variants primário/secundário +
            hover), card, badge e campo de formulário.
          </>,
          <>
            <strong>3. Seções de cima para baixo:</strong> cada seção é um Stack vertical dentro
            de um frame de largura cheia, com o conteúdo limitado a ~1200px.
          </>,
          <>
            <strong>4. Responsivo a cada seção</strong> — não deixe para “arrumar o mobile no
            final”: acumula problema.
          </>,
          <>
            <strong>5. Animações por último</strong>, quando o layout estiver aprovado.
          </>,
        ]}
      />

      <TabelaSimples
        colunas={["Atalho", "Ação"]}
        linhas={[
          ["F", "Criar frame"],
          ["T", "Ferramenta de texto"],
          ["Ctrl/Cmd + K", "Criar componente"],
          ["Ctrl/Cmd + Enter", "Preview do site"],
          ["Ctrl/Cmd + P", "Publicar"],
          ["Segurar Alt", "Ver distâncias entre elementos"],
        ]}
      />

      <Callout tone="warn" title="O erro clássico de iniciante na Framer">
        <p>
          Arrastar elementos soltos e posicioná-los “no olho”, sem Stacks. Parece mais rápido,
          mas quebra no primeiro breakpoint e vira um pesadelo de manutenção. Regra de ouro: se
          você moveu algo com as setas do teclado para “encaixar”, provavelmente faltou um Stack.
        </p>
      </Callout>

      <Exercicio titulo="Primeiro contato com o canvas">
        <p>
          Na sua conta da Framer, crie: (1) dois Color Styles — verde #0D5C46 e âmbar #F2B84B;
          (2) um Text Style de título com a fonte Fraunces em 48px; (3) um componente de botão
          com variant de hover que escurece o fundo em 200ms. Esses três artefatos já são o
          começo do design system do módulo 6.
        </p>
      </Exercicio>
    </Modulo>
  );
}
