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

export function Modulo3() {
  return (
    <Modulo
      id="modulo-3"
      numero="3"
      titulo="Front-end na prática: componentes, tokens e estados"
      descricao="Como profissionais organizam interfaces para que tudo pareça — e continue — consistente, mesmo com o site crescendo."
    >
      <H3>Pense em componentes, não em páginas</H3>
      <P>
        Olhe a página inicial do redesign: ela não é um bloco único, é uma pilha de peças
        reutilizáveis — botão, card, badge, campo de formulário, cabeçalho de seção. Cada peça é
        um <strong>componente</strong>: você a desenha uma vez e a reutiliza em todo lugar.
        Mudou o componente, mudou o site inteiro de uma vez. É assim no código (React), e é
        exatamente assim na Framer (Components + Variants).
      </P>

      <H3>Design tokens: o DNA visual do projeto</H3>
      <P>
        Antes de desenhar telas, defina as variáveis que todo o site vai respeitar. São os{" "}
        <strong>tokens</strong> — e estes são os do nosso redesign da GizPay:
      </P>
      <TabelaSimples
        colunas={["Token", "Valor no redesign", "Uso"]}
        linhas={[
          ["Cor primária", "Verde-quadro (≈ #0D5C46)", "Botões principais, ícones, marca"],
          ["Cor de destaque", "Âmbar-giz (≈ #F2B84B)", "Sublinhados, selos, CTA sobre fundo escuro"],
          ["Fundo", "Papel (≈ #FAF7F2)", "Fundo geral, quente e acolhedor"],
          ["Tinta escura", "Verde-preto (≈ #1C2B26)", "Rodapé e seções de contraste"],
          ["Fonte de título", "Fraunces (serifada)", "H1–H3, números de destaque"],
          ["Fonte de texto", "Inter (sem serifa)", "Parágrafos, botões, rótulos"],
          ["Raio de borda", "12–16px", "Cards, botões, campos"],
          ["Escala de espaço", "4, 8, 12, 16, 24, 32, 48, 64, 96px", "Todos os espaçamentos saem daqui"],
        ]}
      />
      <Callout tone="tip" title="Por que uma escala de espaçamento?">
        <p>
          Se cada espaçamento é um número aleatório (13px aqui, 22px ali), nada parece alinhado.
          Com uma escala fixa de múltiplos, tudo se encaixa naturalmente — e você decide mais
          rápido, porque só existem 8 opções em vez de infinitas.
        </p>
      </Callout>

      <H3>Todo elemento interativo tem estados</H3>
      <P>
        Um botão não é uma imagem estática: ele responde. Esquecer estados é a diferença mais
        visível entre um layout de iniciante e uma interface profissional.
      </P>
      <Termos
        items={[
          {
            termo: "Hover / Focus / Pressed",
            def: "O que acontece ao passar o mouse, navegar por teclado e clicar. No redesign, os cards sobem 4px com sombra no hover; botões escurecem levemente.",
          },
          {
            termo: "Disabled / Loading",
            def: "Botão desabilitado fica esmaecido; ao enviar um formulário, mostre um indicador de progresso para a pessoa saber que algo está acontecendo.",
          },
          {
            termo: "Empty / Error / Success",
            def: "O que o usuário vê quando não há dados, quando algo falha e quando dá certo. O formulário da GizPay troca para uma tela de confirmação ao enviar — nunca deixe a pessoa no vácuo.",
          },
        ]}
      />

      <H3>Microinterações e animação com propósito</H3>
      <P>
        Animação boa comunica; animação ruim distrai. As regras que usamos no redesign (e que
        valem para a Framer):
      </P>
      <CheckList
        items={[
          <>
            <strong>Rápida:</strong> 150–300ms para hover e cliques; 400–600ms para entradas de
            seção. Mais que isso parece lento.
          </>,
          <>
            <strong>Com easing:</strong> movimento natural desacelera no final (ease-out). Nada
            de velocidade constante, que parece robótico.
          </>,
          <>
            <strong>Sutil:</strong> deslocamentos de 16–32px e fade são suficientes. Elementos
            girando e pulando gritam “template de 2012”.
          </>,
          <>
            <strong>Com significado:</strong> a animação deve responder a uma pergunta do
            usuário (“meu clique funcionou?”, “o que é novo nesta tela?”) — não existir por
            existir.
          </>,
          <>
            <strong>Uma vez só:</strong> anime a entrada dos blocos na primeira rolagem e pare.
            Animação em loop compete com o conteúdo.
          </>,
        ]}
      />

      <H3>O ecossistema, em um parágrafo</H3>
      <P>
        Para você situar os nomes que vai encontrar: <strong>React</strong> é a biblioteca mais
        usada para construir interfaces por componentes; <strong>Next.js</strong> é o framework
        que empacota React para sites completos (este redesign é Next.js);{" "}
        <strong>Tailwind CSS</strong> é uma forma de escrever CSS por classes utilitárias; e a{" "}
        <strong>Framer</strong> é, na prática, um editor visual que gera um site React por baixo
        — por isso os conceitos são os mesmos e nada do que você aprender ali se perde se um dia
        migrar para código.
      </P>

      <Exercicio titulo="Caçador de estados">
        <p>
          Na página inicial do redesign, encontre e liste: 2 efeitos de hover diferentes, 1
          estado de sucesso, 1 animação de entrada e 1 animação contínua discreta. Depois
          responda: qual pergunta do usuário cada uma responde?
        </p>
      </Exercicio>
    </Modulo>
  );
}
