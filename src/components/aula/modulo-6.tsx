import {
  Callout,
  CheckList,
  H3,
  Modulo,
  P,
  Passo,
  TabelaSimples,
} from "./lesson";

export function Modulo6() {
  return (
    <Modulo
      id="modulo-6"
      numero="6"
      titulo="Projeto prático: repaginando a GizPay do zero"
      descricao="Hora de aplicar tudo. Nove passos, do diagnóstico à publicação, para reconstruir o gizpay.com.br na Framer — usando este redesign como referência."
    >
      <Passo numero="1" titulo="Diagnóstico do site atual">
        <P>
          Antes de mexer em qualquer pixel, entenda o que existe. O gizpay.com.br atual tem uma
          base sólida: proposta de valor clara (“o dinheiro da sua escola, no controle de quem
          ensina”), calculadora de economia, comparativo com intermediários e FAQ. O conteúdo é
          bom — a oportunidade do repaginamento está em outra frente:
        </P>
        <CheckList
          items={[
            <>
              <strong>Identidade memorável:</strong> criar uma direção visual própria, que
              ninguém confunda com outro SaaS genérico.
            </>,
            <>
              <strong>Interatividade com propósito:</strong> transformar leitura passiva em
              exploração (calculadora mais visual, comparativo em toggle, painel “vivo” no hero).
            </>,
            <>
              <strong>Ritmo de conversão:</strong> reforçar o caminho até o agendamento com CTAs
              consistentes e um formulário mais convidativo.
            </>,
          ]}
        />
      </Passo>

      <Passo numero="2" titulo="Briefing: uma frase que decide tudo">
        <P>
          Escreva e cole na parede: <strong>“Fazer diretores e mantenedores de escolas
          particulares agendarem uma demonstração, mostrando em menos de 2 minutos que a Giz Pay
          devolve o controle do caixa à escola.”</strong> Toda decisão do projeto — cor, seção,
          animação — será julgada contra essa frase. Público: direção e tesouraria de escolas
          (não os pais). Tom: confiante, próximo da sala dos professores, zero “tecniquês”.
        </P>
      </Passo>

      <Passo numero="3" titulo="Direção visual: o conceito 'giz e papel'">
        <P>
          O nome da empresa é um presente: <strong>Giz</strong>. Nosso conceito une o universo
          escolar (quadro verde, giz, papel) à seriedade de uma fintech. Isso vira decisões
          concretas: fundo cor de papel (quente, não branco-hospital), verde-quadro como cor de
          marca, âmbar-giz para destaques, títulos numa serifada com personalidade (Fraunces) e
          o detalhe assinatura: <strong>o sublinhado de giz</strong> desenhado sob as
          palavras-chave dos títulos. Um único elemento repetido com consistência cria
          identidade.
        </P>
        <Callout tone="tip" title="Monte um moodboard primeiro">
          <p>
            Colete 10–15 referências (sites, pôsteres, materiais escolares) num quadro do Figma,
            FigJam ou Pinterest. Você não vai copiar nenhuma — vai extrair a temperatura: quanto
            de lúdico, quanto de sóbrio. Se ficar na dúvida entre duas direções, escolha a que o
            concorrente não teria coragem de usar.
          </p>
        </Callout>
      </Passo>

      <Passo numero="4" titulo="Style guide na Framer (tokens)">
        <P>
          Abra um projeto novo na Framer e, antes de qualquer seção, cadastre os Styles — é o
          exercício do módulo 4 expandido:
        </P>
        <TabelaSimples
          colunas={["Style", "Valor"]}
          linhas={[
            ["Color · Primária", "#0D5C46 (verde-quadro)"],
            ["Color · Destaque", "#F2B84B (âmbar-giz)"],
            ["Color · Fundo", "#FAF7F2 (papel)"],
            ["Color · Tinta", "#1C2B26 (rodapé e CTA final)"],
            ["Color · Texto secundário", "#5C6B64"],
            ["Text · H1", "Fraunces SemiBold 56/64px (Phone: 36px)"],
            ["Text · H2", "Fraunces SemiBold 36/44px (Phone: 28px)"],
            ["Text · Corpo", "Inter Regular 17/28px"],
            ["Text · Rótulo", "Inter SemiBold 12px, caps, +5% tracking"],
          ]}
        />
        <P>
          Crie também os componentes base: botão (variants: primário, contorno, sobre-escuro +
          hover em cada), card com hover, badge de seção e campo de formulário.
        </P>
      </Passo>

      <Passo numero="5" titulo="Wireframe: a página em blocos cinza">
        <P>
          Ainda sem cor nem foto, monte a ordem das seções em retângulos cinza com os títulos
          reais (a estrutura veio da tabela do módulo 5): Hero → faixa de recursos → Problema →
          Como funciona → Módulos → Comparativo → Calculadora → Portal do responsável → Na
          prática → Segurança → FAQ → Formulário → Rodapé. Leia a página em voz alta como se
          fosse a conversa com um diretor de escola. Se alguma transição soar brusca, reordene
          agora — mover retângulo cinza é grátis, mover seção pronta custa caro.
        </P>
      </Passo>

      <Passo numero="6" titulo="Construção seção a seção">
        <P>Com tokens e wireframe prontos, construa de cima para baixo. Roteiro das principais:</P>
        <CheckList
          items={[
            <>
              <strong>Hero (2 colunas no desktop):</strong> à esquerda, badge de urgência
              (“matrículas 2027…”), H1 com o sublinhado de giz (um SVG posicionado sob a
              palavra), parágrafo, 2 botões e a régua de 3 números. À direita, um mock do painel:
              frame com “janela de navegador”, número grande, 3 mini-cards de status e a lista de
              pagamentos. Na Framer, anime a lista com um componente de loop de variants para o
              efeito “painel vivo”.
            </>,
            <>
              <strong>Faixa marquee:</strong> os 8 recursos rolando horizontalmente (na Framer,
              use o componente Ticker, nativo). Pausa no hover; discrição no mobile.
            </>,
            <>
              <strong>Problema:</strong> grade de 4 cards com ícone em tom de alerta. É a única
              seção onde o vermelho aparece — cor com significado.
            </>,
            <>
              <strong>Como funciona:</strong> 4 passos numerados ligados por uma linha
              tracejada; no phone, o Stack vira vertical automaticamente.
            </>,
            <>
              <strong>Comparativo interativo:</strong> toggle de 2 opções (2 variants de um
              componente: “com intermediário” mostra a linha do tempo em dias e tom vermelho;
              “com a Giz Pay” mostra segundos e tom verde) + tabela de 5 critérios.
            </>,
            <>
              <strong>Calculadora:</strong> 3 sliders (alunos, mensalidade, taxa) e o resultado
              gigante em âmbar sobre a tinta escura. Na Framer, sliders com cálculo pedem um Code
              Component (a IA da própria Framer gera a partir de um prompt descrevendo a fórmula)
              — ou simplifique para 3 cenários pré-calculados em variants (escola pequena, média
              e grande).
            </>,
            <>
              <strong>Portal do responsável:</strong> texto + mock de celular construído com
              frames (moldura escura arredondada, tela com cards). Nada de screenshot esticado.
            </>,
            <>
              <strong>FAQ:</strong> acordeão (componente nativo da Framer) com as 5 perguntas.
            </>,
            <>
              <strong>Formulário final:</strong> fundo tinta escura para marcar o fim da jornada,
              5 campos, botão largo e o cartão de WhatsApp ao lado. Configure a mensagem de
              sucesso — na Framer, em Form → Success State.
            </>,
          ]}
        />
      </Passo>

      <Passo numero="7" titulo="Interações e animações">
        <CheckList
          items={[
            <>
              <strong>Entrada das seções:</strong> efeito Scroll (Appear on scroll) com fade +
              deslocamento de 24px para cima, 500ms, ease-out, <em>uma vez só</em>. Nos grids,
              escalone os cards com 80ms de atraso entre eles.
            </>,
            <>
              <strong>Hovers:</strong> cards sobem 4px com sombra suave; botões escurecem 8%.
              Sempre 200–300ms.
            </>,
            <>
              <strong>Navbar:</strong> fixa no topo; ao rolar, ganha fundo translúcido com blur
              (na Framer: 2 variants do componente de navbar + interação de scroll).
            </>,
            <>
              <strong>Números que contam:</strong> o valor da calculadora e o “recebido no mês”
              do hero sobem do zero ao entrar na tela — a Framer tem componente de contagem
              nativo (Number Counter).
            </>,
          ]}
        />
      </Passo>

      <Passo numero="8" titulo="Responsivo de verdade">
        <P>
          Percorra os 3 breakpoints seção por seção. No phone: grades viram coluna única, o mock
          do painel desce para baixo do texto do hero, os botões ocupam a largura toda, a tabela
          do comparativo esconde a coluna do intermediário (ou vira cards empilhados) e a
          marquee fica mais lenta. Teste num celular de verdade — o preview da Framer gera um QR
          code para isso.
        </P>
      </Passo>

      <Passo numero="9" titulo="Checklist de lançamento">
        <CheckList
          items={[
            <>Title e meta description da página configurados (Settings → SEO).</>,
            <>Um único H1; H2 nos títulos de seção (defina a tag no painel de texto).</>,
            <>Alt text nas imagens; contraste conferido no WebAIM.</>,
            <>Formulário testado de ponta a ponta, com mensagem de sucesso.</>,
            <>PageSpeed Insights com nota verde no mobile.</>,
            <>Domínio gizpay.com.br conectado e redirecionamento www ativo.</>,
            <>Analytics ligado e metas definidas (envio de formulário, clique no WhatsApp).</>,
          ]}
        />
      </Passo>

      <H3>O resultado de referência</H3>
      <P>
        A página inicial deste projeto é o redesign completo seguindo exatamente esses 9 passos —
        com o conceito “giz e papel”, as seções na ordem da jornada de conversão e todas as
        interações descritas acima. Compare cada seção com o site atual da GizPay e com a sua
        versão na Framer: o objetivo não é copiar, é entender a decisão por trás de cada bloco e
        chegar na sua própria versão melhor.
      </P>
    </Modulo>
  );
}
