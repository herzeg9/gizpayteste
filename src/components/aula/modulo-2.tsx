import {
  Callout,
  CheckList,
  Codigo,
  Exercicio,
  H3,
  Modulo,
  P,
  Termos,
} from "./lesson";

export function Modulo2() {
  return (
    <Modulo
      id="modulo-2"
      numero="2"
      titulo="Como um site funciona por dentro"
      descricao="Mesmo trabalhando numa ferramenta visual como a Framer, entender o que existe por baixo faz você tomar decisões muito melhores."
    >
      <H3>O caminho de um site até a tela</H3>
      <P>
        Quando alguém digita <strong>gizpay.com.br</strong>, acontece o seguinte, em menos de um
        segundo: o navegador consulta o <strong>DNS</strong> (a “agenda de contatos” da
        internet) para descobrir em qual servidor o site mora; o servidor de{" "}
        <strong>hospedagem</strong> devolve os arquivos; e o navegador monta a página a partir de
        três linguagens que trabalham juntas.
      </P>

      <Termos
        items={[
          {
            termo: "HTML — a estrutura",
            def: (
              <>
                Define <em>o que existe</em> na página: títulos, parágrafos, imagens, botões,
                formulários. É o esqueleto. Sem CSS, todo site parece um documento de texto de
                1995.
              </>
            ),
          },
          {
            termo: "CSS — o estilo",
            def: (
              <>
                Define <em>como as coisas aparecem</em>: cores, fontes, tamanhos, posições,
                animações. Tudo o que você ajusta nos painéis da Framer vira CSS por baixo.
              </>
            ),
          },
          {
            termo: "JavaScript — o comportamento",
            def: (
              <>
                Define <em>o que acontece quando o usuário interage</em>: abrir menu, calcular a
                economia nos sliders, validar formulário, animar ao rolar. As interações da
                Framer viram JavaScript (React) por baixo.
              </>
            ),
          },
        ]}
      />

      <P>Um exemplo mínimo das três camadas juntas — o botão principal da GizPay:</P>
      <Codigo>{`<!-- HTML: o que existe -->
<a href="#demonstracao" class="botao">Agendar demonstração</a>

/* CSS: como aparece */
.botao {
  background: #0d5c46;   /* verde-quadro */
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
}
.botao:hover { background: #0a4a38; }  /* estado de hover */

// JavaScript: o que acontece
botao.addEventListener("click", () => {
  rolarSuavementeAte("#demonstracao");
});`}</Codigo>

      <H3>Design responsivo: o site que se adapta</H3>
      <P>
        Mais da metade do tráfego brasileiro é mobile — em sites de escolas, com pais acessando
        pelo WhatsApp, costuma passar de 70%. Design responsivo significa que o mesmo site se
        reorganiza para cada tamanho de tela, usando <strong>breakpoints</strong> (pontos de
        quebra): larguras em que o layout muda.
      </P>
      <CheckList
        items={[
          <>
            <strong>Mobile (até ~810px):</strong> tudo em 1 coluna, menu vira hambúrguer, botões
            ocupam a largura toda.
          </>,
          <>
            <strong>Tablet (~810–1200px):</strong> grades de 2 colunas, espaçamentos
            intermediários.
          </>,
          <>
            <strong>Desktop (1200px+):</strong> grades de 3–4 colunas, conteúdo limitado a
            ~1100–1200px de largura para as linhas de texto não ficarem longas demais.
          </>,
        ]}
      />
      <Callout tone="tip" title="Pense mobile primeiro">
        <p>
          Desenhe a versão de celular antes da de desktop. Se a página funciona num tubinho de
          390px de largura — hierarquia clara, botões alcançáveis, texto legível — expandi-la
          para desktop é fácil. O contrário costuma gerar remendo.
        </p>
      </Callout>

      <H3>Performance e SEO: o design invisível</H3>
      <P>
        De nada adianta uma página linda que demora 8 segundos para abrir — a cada segundo de
        espera, uma fatia dos visitantes desiste. E o Google usa a velocidade como critério de
        ranking. O essencial:
      </P>
      <CheckList
        items={[
          <>
            <strong>Imagens leves:</strong> use WebP/AVIF, com o tamanho real de exibição. Uma
            foto de 4MB é o erro nº 1 de site lento.
          </>,
          <>
            <strong>No máximo 2 famílias de fonte</strong> (cada peso extra é um download a
            mais).
          </>,
          <>
            <strong>Um único H1 por página</strong>, com a promessa principal; H2 para títulos de
            seção — o Google lê essa hierarquia.
          </>,
          <>
            <strong>Title e meta description</strong> bem escritos: são o seu anúncio gratuito na
            página de resultados.
          </>,
          <>
            <strong>Teste no PageSpeed Insights</strong> (pagespeed.web.dev) antes e depois de
            publicar.
          </>,
        ]}
      />

      <Exercicio titulo="Raio-X de um site real">
        <p>
          Abra o gizpay.com.br no Chrome, clique com o botão direito e escolha “Inspecionar”. Na
          aba Elements, passe o mouse pelos blocos e veja o HTML por trás de cada seção. Depois
          aperte Ctrl+Shift+M (modo responsivo) e simule um iPhone: o que quebra? O que melhora?
          Anote — você vai resolver isso no módulo 6.
        </p>
      </Exercicio>
    </Modulo>
  );
}
