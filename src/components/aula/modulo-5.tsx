import {
  Callout,
  CheckList,
  Exercicio,
  H3,
  Modulo,
  P,
  TabelaSimples,
} from "./lesson";

export function Modulo5() {
  return (
    <Modulo
      id="modulo-5"
      numero="5"
      titulo="UX que converte: a anatomia de uma landing page"
      descricao="O objetivo do repaginamento não é só ficar bonito — é captar mais clientes. Este módulo é sobre transformar visita em contato."
    >
      <H3>Uma página, um objetivo</H3>
      <P>
        Toda landing page de alta conversão tem <strong>uma única ação principal</strong> — a
        conversão. Para a GizPay, é <em>agendar uma demonstração</em>. Cada seção da página ou
        empurra o visitante nessa direção ou está atrapalhando. Esse é o critério para decidir o
        que entra e o que sai.
      </P>

      <H3>A sequência que funciona</H3>
      <P>
        A ordem das seções segue a conversa que acontece na cabeça do visitante. É exatamente a
        estrutura do redesign:
      </P>
      <TabelaSimples
        colunas={["Seção", "Pergunta do visitante", "Como o redesign responde"]}
        linhas={[
          [
            "1. Hero",
            "“O que é isso e por que me importa?”",
            "Promessa em uma frase + subtítulo com os 3 benefícios + CTA + números de prova (0%, -80%, <3s).",
          ],
          [
            "2. Problema",
            "“Eles entendem a minha dor?”",
            "4 dores reais de quem gerencia escola: repasse atrasado, taxa, cobrança manual, cegueira do caixa.",
          ],
          [
            "3. Como funciona",
            "“Isso é complicado de adotar?”",
            "4 passos numerados, do cadastro ao painel — reduz o medo da troca.",
          ],
          [
            "4. Módulos / solução",
            "“O que exatamente eu levo?”",
            "6 cards de recursos concretos, cada um com o benefício no texto.",
          ],
          [
            "5. Comparativo",
            "“Por que vocês e não o que eu já uso?”",
            "Toggle interativo ‘com intermediário vs. com a Giz Pay’ + tabela lado a lado.",
          ],
          [
            "6. Calculadora",
            "“Quanto isso vale em dinheiro?”",
            "O visitante coloca os números da escola dele e vê o custo anual do intermediário — personalização é a prova mais forte.",
          ],
          [
            "7. Objeções (FAQ)",
            "“E se…?”",
            "As 5 dúvidas que travam a decisão, respondidas sem rodeio.",
          ],
          [
            "8. CTA final + formulário",
            "“Ok, o que eu faço agora?”",
            "Formulário curto + WhatsApp para quem prefere conversar.",
          ],
        ]}
      />

      <H3>Copywriting: escreva benefício, não recurso</H3>
      <CheckList
        items={[
          <>
            Recurso: “Conciliação bancária automática”. Benefício: “<strong>Fechamento do mês em
            minutos, não em dias de planilha</strong>”. Sempre a segunda forma no título; o
            recurso pode vir no corpo.
          </>,
          <>
            <strong>Use a voz do cliente:</strong> “secretaria”, “inadimplência”, “D+30”,
            “mensalidade” — palavras que a diretora usa, não jargão de fintech.
          </>,
          <>
            <strong>Números batem argumento:</strong> “repasse imediato” é bom; “baixa de Pix em
            menos de 3 segundos” é melhor.
          </>,
          <>
            <strong>Título curto, subtítulo explicativo:</strong> o H1 promete em até 10
            palavras; o parágrafo abaixo detalha.
          </>,
        ]}
      />

      <H3>CTAs e formulários que não espantam</H3>
      <CheckList
        items={[
          <>
            <strong>Um CTA primário por tela</strong>, sempre com o mesmo texto (“Agendar
            demonstração”) — repetição gera memorização, textos diferentes geram dúvida.
          </>,
          <>
            <strong>Verbo + resultado:</strong> “Calcular minha economia” supera “Saiba mais” em
            qualquer teste.
          </>,
          <>
            <strong>Peça o mínimo:</strong> cada campo a mais derruba a conversão. Nome, escola,
            contato e porte — o resto se pergunta na reunião.
          </>,
          <>
            <strong>Reduza o risco percebido</strong> ao lado do botão: “gratuita”, “30 minutos”,
            “sem compromisso”, “seus dados não são compartilhados”.
          </>,
          <>
            <strong>Confirme o envio</strong> com próxima etapa clara: “entramos em contato em
            até 1 dia útil pelo WhatsApp”.
          </>,
        ]}
      />

      <Callout tone="tip" title="Prova social: use o que você tem">
        <p>
          Depoimentos com nome, foto e escola são o ouro da conversão B2B — mas só use
          depoimentos reais. Enquanto a GizPay não os tiver, números concretos (0% de retenção,
          implantação em 15 dias) e uma seção de segurança/LGPD bem-feita cumprem o papel de
          gerar confiança sem inventar nada.
        </p>
      </Callout>

      <H3>Medir para melhorar</H3>
      <P>
        Publicou? O trabalho continua. Instale um analytics (a Framer tem um embutido; Google
        Analytics 4 e Microsoft Clarity são grátis) e acompanhe: quantos visitantes chegam,{" "}
        <strong>até onde rolam</strong>, quantos clicam no CTA e quantos enviam o formulário. Se
        muita gente rola até a calculadora mas não converte, o problema está entre a calculadora
        e o formulário. Teste uma mudança por vez — título, ordem de seção, texto do botão — e
        compare os números.
      </P>

      <Exercicio titulo="Auditoria de conversão">
        <p>
          Volte às anotações do exercício do módulo 1 sobre o gizpay.com.br atual. Para cada
          seção do site, classifique: ela responde a qual pergunta do visitante? Existe alguma
          pergunta da tabela acima sem resposta? Existe seção que não empurra para a conversão?
          Essa auditoria é o insumo do diagnóstico no módulo 6.
        </p>
      </Exercicio>
    </Modulo>
  );
}
