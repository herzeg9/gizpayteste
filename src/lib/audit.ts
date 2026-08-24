export const audit = {
  url: "https://gizpay.com.br",
  date: "Agosto 2026",
  summary:
    "Landing B2B já bem argumentada: oferta clara, prova numérica, comparativo, calculadora e FAQ. O redesign não inventa o produto — dá cara, ritmo e interação para a diretora sentir o caixa e marcar a demo.",
  keep: [
    {
      title: "Promessa sem intermediário",
      detail:
        "Liquidação no CNPJ da escola, 0% de repasse retido. É o motivo de existir. Permanece na dobra.",
    },
    {
      title: "Dois CTAs com intenções diferentes",
      detail:
        "Demonstração (compromisso) e calculadora (micro-sim). Hierarquia certa.",
    },
    {
      title: "Números 0% / −80% / <3s",
      detail: "Prova rápida acima da dobra. Recalibrar visual, não o dado.",
    },
    {
      title: "Comparativo vs intermediário",
      detail:
        "Onde cai o dinheiro, prazo, modelo por aluno. Tirar do modal e deixar seção.",
    },
    {
      title: "Calculadora de economia",
      detail: "Transforma taxa em reais/ano. Trazer para cima e teatralizar.",
    },
    {
      title: "Portal do responsável",
      detail: "Reduz o medo “a família vai reclamar”. Precisa ser clicável.",
    },
    {
      title: "FAQ honesto",
      detail:
        "Dinheiro na conta, não troca o acadêmico, 7–15 dias, assinatura por aluno, white label.",
    },
  ],
  cut: [
    {
      title: "Prova escondida em modal",
      detail:
        "Comparativo completo e LGPD atrás de overlay. Quem fecha, esquece. Vira seção.",
    },
    {
      title: "Painel estático",
      detail:
        "O mock existe, mas não se comporta. Sem Pix entrando, não há reconhecimento do produto.",
    },
    {
      title: "Uma dobra para três papéis",
      detail:
        "Direção, tesouraria e secretaria chegam. O texto atual privilegia a direção e não se ajusta.",
    },
    {
      title: "Formulário sem depois",
      detail:
        "Não fica visível o que acontece após enviar. A Carla precisa saber que o WhatsApp vem.",
    },
  ],
  invent: [
    {
      title: "Seletor de papel",
      detail: "Muda headline e prova. Reconhecimento imediato.",
    },
    {
      title: "Feed de Pix ao vivo",
      detail: "Motion com ofício: baixa em segundos, não logo girando.",
    },
    {
      title: "Linha do tempo de 15 dias",
      detail: "Mata a objeção de migração no meio do ano.",
    },
    {
      title: "Portal clicável",
      detail: "Pagar com Pix no mock. A secretaria entende na hora.",
    },
    {
      title: "Sticky CTA + sucesso de form",
      detail: "Captura em qualquer scroll. Continuidade depois do clique.",
    },
  ],
  heuristics: [
    {
      name: "Visibilidade do estado",
      score: "médio",
      note: "Form e calculadora não narram o depois. Painel não se atualiza.",
    },
    {
      name: "Linguagem da escola",
      score: "alto",
      note: "Repasse, inadimplência, segunda via — vocabulário certo. Manter.",
    },
    {
      name: "Controle e liberdade",
      score: "médio",
      note: "Modais. Calculadora pouco evidente no mobile.",
    },
    {
      name: "Consistência",
      score: "alto",
      note: "Dois CTAs consistentes ao longo da página.",
    },
    {
      name: "Prevenção de erro",
      score: "médio",
      note: "Form padrão. Falta máscara de WhatsApp e estado de erro visível nesta auditoria.",
    },
    {
      name: "Reconhecimento do produto",
      score: "baixo",
      note: "Mock estático. Visitante não “usa” a Giz Pay na homepage.",
    },
  ],
  personas: [
    {
      name: "Carla · Direção",
      school: "Colégio de 480 alunos, Campinas",
      trigger: "Taxa do intermediário subiu e o repasse atrasou a folha.",
      fear: "Migrar no meio do ano e quebrar a cobrança.",
      job: "Ver o caixa no CNPJ da escola e agendar 30 minutos.",
    },
    {
      name: "Paulo · Tesouraria",
      school: "Mesma rede, duas unidades",
      trigger: "Fechamento do mês ainda é planilha + extrato.",
      fear: "Conciliação errada e boleto duplicado.",
      job: "Baixa automática, conciliação e relatório para o conselho.",
    },
    {
      name: "Neide · Secretaria",
      school: "Atende responsáveis o dia inteiro",
      trigger: "Fila de segunda via e “cadê o boleto”.",
      fear: "Família achar que um terceiro está cobrando no nome da escola.",
      job: "Portal com a marca da escola e régua educada.",
    },
  ],
};
