import { Callout, Modulo, P, TabelaSimples } from "./lesson";

export function Modulo7() {
  return (
    <Modulo
      id="modulo-7"
      numero="7"
      titulo="Para continuar evoluindo"
      descricao="O caminho depois desta aula: onde estudar, onde buscar referência e como transformar prática em repertório."
    >
      <TabelaSimples
        colunas={["Recurso", "Por quê"]}
        linhas={[
          [
            "Refactoring UI (livro, Adam Wathan & Steve Schoger)",
            "O melhor material prático de UI para quem não é designer. Curto, visual, aplicável no dia seguinte.",
          ],
          [
            "Laws of UX (lawsofux.com)",
            "As leis do módulo 1 (e outras 20), cada uma com pôster e explicação de 2 minutos.",
          ],
          [
            "Nielsen Norman Group (nngroup.com)",
            "Artigos de pesquisa séria sobre UX — a fonte por trás de quase todo conselho bom que circula.",
          ],
          [
            "Framer Academy (framer.com/academy)",
            "Cursos oficiais e gratuitos, em vídeo, do básico ao CMS e code components.",
          ],
          [
            "Land-book, Mobbin e Godly",
            "Galerias de sites e apps reais bem projetados. 10 minutos por dia constroem o seu repertório visual.",
          ],
          [
            "PageSpeed Insights e WebAIM Contrast Checker",
            "As duas ferramentas gratuitas de auditoria que você deve rodar antes de qualquer entrega.",
          ],
        ]}
      />

      <Callout tone="tip" title="O hábito que mais acelera">
        <p>
          Uma vez por semana, escolha um site bom e refaça uma seção dele na Framer, do zero, em
          uma hora. Não para publicar — para treinar a mão. Em três meses de repetição você terá
          mais critério visual do que a maioria dos profissionais que só leem sobre design.
        </p>
      </Callout>

      <P>
        E o passo mais importante: publique. Coloque a sua versão do repaginamento da GizPay no
        ar (mesmo num subdomínio gratuito da Framer), mostre para pessoas reais, observe onde
        elas travam e itere. Nenhum site nasce pronto — o deste projeto incluído.
      </P>
    </Modulo>
  );
}
