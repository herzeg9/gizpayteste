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

export function Modulo1() {
  return (
    <Modulo
      id="modulo-1"
      numero="1"
      titulo="Fundamentos de UI e UX"
      descricao="O vocabulário e os princípios que separam um site amador de um site profissional — e que você vai aplicar em tudo daqui para frente."
    >
      <H3>UI e UX não são a mesma coisa</H3>
      <Termos
        items={[
          {
            termo: "UX — User Experience (experiência do usuário)",
            def: (
              <>
                É o <strong>caminho completo</strong> que a pessoa percorre: ela entendeu o que o
                site oferece? Achou o que procurava? Conseguiu concluir a ação (comprar, agendar,
                assinar) sem fricção? UX é estratégia: pesquisa, estrutura da informação, fluxo
                de navegação e texto.
              </>
            ),
          },
          {
            termo: "UI — User Interface (interface do usuário)",
            def: (
              <>
                É a <strong>camada visível</strong> dessa experiência: cores, tipografia,
                espaçamentos, botões, ícones, animações. UI é execução visual — ela materializa
                as decisões de UX.
              </>
            ),
          },
        ]}
      />
      <P>
        Um jeito simples de memorizar: <strong>UX é o trajeto, UI é a paisagem</strong>. Um site
        pode ser bonito (boa UI) e ainda assim confuso (má UX) — e vice-versa. O nosso objetivo
        no repaginamento da GizPay é acertar os dois.
      </P>

      <H3>Os 7 princípios visuais que resolvem 90% dos problemas</H3>

      <TabelaSimples
        colunas={["Princípio", "O que significa", "Onde ver no redesign da GizPay"]}
        linhas={[
          [
            "1. Hierarquia visual",
            "O olho deve saber para onde ir primeiro. Tamanho, peso e cor definem a ordem de leitura.",
            "No hero, o título enorme vem antes de tudo; o botão verde-escuro é o segundo ponto de atenção.",
          ],
          [
            "2. Contraste",
            "Elementos importantes se destacam do fundo e do restante. Contraste fraco = texto ilegível e botão invisível.",
            "O CTA da calculadora é âmbar sobre fundo verde-escuro: impossível não ver.",
          ],
          [
            "3. Espaço em branco",
            "Respiro entre os elementos. Amadores lotam a tela; profissionais deixam o conteúdo respirar.",
            "Cada seção tem ~100px de respiro vertical e os cards têm padding generoso.",
          ],
          [
            "4. Alinhamento e grid",
            "Tudo se alinha a linhas invisíveis. Um único elemento fora do grid parece erro.",
            "Todo o conteúdo vive numa coluna central de 1152px, com grades de 2, 3 ou 4 colunas.",
          ],
          [
            "5. Tipografia",
            "No máximo 2 famílias, com escala clara de tamanhos (e não 8 tamanhos aleatórios).",
            "Fraunces (serifada, personalidade) para títulos + Inter (neutra, legível) para texto.",
          ],
          [
            "6. Cor com propósito",
            "1 cor primária, 1 de destaque, neutros — e significado consistente (verde = ok, vermelho = problema).",
            "Verde-quadro é a marca; âmbar só aparece em destaques; vermelho só na dor/atraso.",
          ],
          [
            "7. Consistência",
            "Mesmos raios de borda, mesmas sombras, mesmos espaçamentos em todo o site.",
            "Todos os cards usam o mesmo raio (16px), a mesma borda e o mesmo hover.",
          ],
        ]}
      />

      <Callout tone="tip" title="A regra do aperto de olhos">
        <p>
          Aperte os olhos até a tela ficar borrada. O que continua visível é a sua hierarquia
          real. Se tudo vira uma mancha uniforme, não há hierarquia; se o elemento mais visível
          não é o mais importante, a hierarquia está errada.
        </p>
      </Callout>

      <H3>4 leis de UX que você vai usar toda semana</H3>
      <Termos
        items={[
          {
            termo: "Lei de Hick — menos opções, decisão mais rápida",
            def: (
              <>
                Quanto mais escolhas, mais lento (ou paralisado) o usuário. Por isso o hero da
                GizPay tem <strong>apenas 2 botões</strong>, e um deles é claramente o principal.
              </>
            ),
          },
          {
            termo: "Lei de Fitts — alvos importantes devem ser grandes e próximos",
            def: (
              <>
                O tempo para clicar depende do tamanho e da distância do alvo. CTAs grandes,
                áreas de toque de no mínimo 44px no celular, botão de WhatsApp sempre à mão.
              </>
            ),
          },
          {
            termo: "Lei de Jakob — as pessoas esperam o padrão dos outros sites",
            def: (
              <>
                Usuários passam a maior parte do tempo em <em>outros</em> sites. Logo no canto
                superior esquerdo, menu no topo, CTA à direita: não reinvente convenções — gaste
                criatividade no conteúdo, não na navegação.
              </>
            ),
          },
          {
            termo: "Lei de Miller — agrupe em blocos pequenos",
            def: (
              <>
                A memória de trabalho segura ±7 itens, e o conforto real fica em 3 a 5. Por isso
                as seções do redesign têm 3, 4 ou 6 cards — nunca 11 tópicos soltos.
              </>
            ),
          },
        ]}
      />

      <H3>Acessibilidade não é opcional</H3>
      <P>
        Um site acessível funciona para todo mundo — inclusive para quem enxerga pouco, navega
        pelo teclado ou está com o celular sob sol forte. O básico que você deve garantir sempre:
      </P>
      <CheckList
        items={[
          <>
            <strong>Contraste mínimo de 4,5:1</strong> entre texto e fundo (teste grátis no site
            WebAIM Contrast Checker).
          </>,
          <>
            <strong>Texto de corpo com pelo menos 16px</strong> — e ninguém nunca reclamou de
            texto legível demais.
          </>,
          <>
            <strong>Todo botão e link com nome claro</strong>: “Agendar demonstração”, nunca
            “Clique aqui”.
          </>,
          <>
            <strong>Imagens com texto alternativo</strong> e formulários com rótulos visíveis.
          </>,
          <>
            <strong>Animações que respeitam</strong> a preferência do sistema por menos movimento
            (a Framer faz isso quase sozinha; neste redesign, o código também respeita).
          </>,
        ]}
      />

      <Exercicio titulo="Treine o olhar">
        <p>
          Abra 3 sites que você admira (sugestões: stripe.com, linear.app, nubank.com.br) e, para
          cada um, anote: qual é a primeira coisa que o olho vê? Quantas fontes e cores existem?
          Qual é a ação principal que a página quer que você tome? Depois abra o gizpay.com.br
          atual e responda às mesmas perguntas — guarde as anotações para o módulo 6.
        </p>
      </Exercicio>
    </Modulo>
  );
}
