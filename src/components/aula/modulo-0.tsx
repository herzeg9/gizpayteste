import { Callout, CheckList, Modulo, P } from "./lesson";

export function Modulo0() {
  return (
    <Modulo
      id="modulo-0"
      numero="0"
      titulo="Antes de começar: a ferramenta certa"
      descricao="Um alinhamento rápido sobre a ferramenta que vamos usar e como tirar o máximo desta aula."
    >
      <Callout tone="info" title="Figma + Framer — o fluxo completo">
        <p>
          Use o <strong>Figma</strong> para wireframe, design system e protótipo clicável. Use a{" "}
          <strong>Framer</strong> (framer.com) para publicar o site interativo com animações,
          formulários e domínio. O script completo (~90 min) está em{" "}
          <a href="/aula/figma-framer" className="font-medium text-primary underline">
            /aula/figma-framer
          </a>
          .
        </p>
      </Callout>

      <Callout tone="warn" title="Frame.io não é Framer">
        <p>
          Você mencionou o <strong>Frame.io</strong>, mas ele é uma plataforma da Adobe para{" "}
          <em>revisão e aprovação de vídeos</em> (equipes de audiovisual comentam sobre cortes,
          aprovam versões etc.). Ele não cria sites.
        </p>
        <p>
          A ferramenta que você quer é a <strong>Framer</strong> (framer.com): um editor visual
          que publica sites reais, com animações, CMS e hospedagem inclusos — perfeita para o
          nosso repaginamento da GizPay. Toda esta aula se baseia nela.
        </p>
      </Callout>

      <P>
        A aula está dividida em sete módulos, do fundamento à prática. Os módulos 1 a 5 formam a
        base teórica; o módulo 6 é o projeto guiado, em que repaginamos o site{" "}
        <strong>gizpay.com.br</strong> passo a passo dentro da Framer. O site que você está
        navegando agora é o resultado desse projeto — use-o como referência viva: role a página
        inicial, repare nas seções, nas animações e nos botões, e volte aqui para entender o
        porquê de cada decisão.
      </P>

      <P>Como estudar esta aula:</P>
      <CheckList
        items={[
          <>
            <strong>Leia com o site aberto do lado.</strong> Cada conceito teórico aparece
            aplicado em alguma seção da página inicial.
          </>,
          <>
            <strong>Faça os exercícios.</strong> São curtos e transformam leitura em repertório.
            Design se aprende olhando e fazendo, não decorando.
          </>,
          <>
            <strong>Crie uma conta gratuita na Framer</strong> antes do módulo 4, para praticar
            no canvas enquanto lê.
          </>,
          <>
            <strong>No módulo 6, construa junto.</strong> Siga os passos na sua conta da Framer e
            compare o seu resultado com o redesign de referência.
          </>,
        ]}
      />
    </Modulo>
  );
}
