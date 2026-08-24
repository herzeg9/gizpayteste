export type Role = "direcao" | "tesouraria" | "secretaria";

export const roles: Record<
  Role,
  { label: string; kicker: string; headline: string; sub: string }
> = {
  direcao: {
    label: "Direção",
    kicker: "Caixa no CNPJ da escola",
    headline: "O dinheiro da sua escola, no controle de quem ensina.",
    sub: "Cobrança automática, inadimplência visível e liquidação direto na conta da instituição. Sem intermediário retendo o caixa — e sem planilha no fim do mês.",
  },
  tesouraria: {
    label: "Tesouraria",
    kicker: "Baixa em segundos, fechamento em minutos",
    headline: "Pix, boleto e cartão conciliados sem extrato no domingo.",
    sub: "Cada pagamento casa com a cobrança. Multa e juros na data certa. Relatório pronto para o conselho e para a contabilidade.",
  },
  secretaria: {
    label: "Secretaria",
    kicker: "A família resolve sozinha",
    headline: "Segunda via, Pix e informe de IR — sem a fila na secretaria.",
    sub: "Régua educada no WhatsApp e no e-mail, portal com a marca da escola, e o responsável paga em poucos toques. Sem app para instalar.",
  },
};

export const payments = [
  { initials: "MC", name: "Maria Clara", klass: "7º ano", method: "Pix", status: "pago", time: "agora" },
  { initials: "JP", name: "João Pedro", klass: "3º ano", method: "Boleto", status: "compensado", time: "1 min" },
  { initials: "AL", name: "Ana Lúcia", klass: "1º ano", method: "Pix", status: "pago", time: "3 min" },
  { initials: "RT", name: "Rafael Tavares", klass: "9º ano", method: "Cartão", status: "recorrente", time: "6 min" },
  { initials: "BV", name: "Beatriz Vaz", klass: "5º ano", method: "Pix", status: "pago", time: "8 min" },
  { initials: "GS", name: "Gabriel Santos", klass: "2º ano", method: "Boleto", status: "atraso", time: "4 dias" },
];

export const modules = [
  {
    code: "Pix",
    title: "Pix com baixa instantânea",
    body: "O responsável paga e o sistema confirma em segundos. Sem esperar compensação, sem conferir extrato no dia seguinte.",
  },
  {
    code: "Régua",
    title: "Régua de cobrança",
    body: "Lembrete antes do vencimento, aviso no atraso e encargos automáticos. Comunicação padronizada, sem constranger a família.",
  },
  {
    code: "Inad.",
    title: "Painel de inadimplência",
    body: "Em dia, em aberto e atrasado em tempo real. Filtre por turma, série, competência ou responsável e aja antes de crescer.",
  },
  {
    code: "Conc.",
    title: "Conciliação bancária",
    body: "Cada entrada casada com a cobrança. Fechamento do mês em minutos, não em dias de planilha e extrato.",
  },
  {
    code: "Portal",
    title: "Portal do responsável",
    body: "Segunda via, Pix copia-e-cola, histórico e informe para o Imposto de Renda — com a marca da sua escola.",
  },
  {
    code: "Rede",
    title: "Multi-unidade e white label",
    body: "Um login, várias unidades, dados isolados. Logo e cores da instituição no painel e nas comunicações.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Cadastro dos alunos",
    body: "Importe a planilha de matrículas. As 12 mensalidades do ano nascem com valor, vencimento, desconto e responsável financeiro.",
  },
  {
    n: "02",
    title: "Cobrança automática",
    body: "Pix, boleto e cartão saem antes do vencimento. Régua por e-mail e WhatsApp, multa e juros na data certa.",
  },
  {
    n: "03",
    title: "Recebimento direto",
    body: "O pagamento cai na conta da escola. O sistema dá baixa em segundos, concilia e atualiza a inadimplência.",
  },
  {
    n: "04",
    title: "Visão em tempo real",
    body: "Painel com entradas, atrasos e rentabilidade por turma. Relatórios prontos para a contabilidade e o conselho.",
  },
];

export const compareRows = [
  { criterion: "Onde o dinheiro cai", giz: "Conta da escola, no CNPJ dela", other: "Conta do intermediário, com repasse depois" },
  { criterion: "Prazo de repasse", giz: "Imediato no Pix · D+1 no boleto", other: "D+15 a D+60" },
  { criterion: "Modelo de cobrança", giz: "Assinatura por aluno ativo, previsível", other: "Percentual sobre todo o faturamento" },
  { criterion: "Régua de cobrança", giz: "Automática e configurável pela escola", other: "Padrão do fornecedor, pouco ajustável" },
  { criterion: "Relação com a família", giz: "A escola fala, na marca dela", other: "Um terceiro cobra em nome da escola" },
];

export const timeline = [
  { d: "Dia 1–2", t: "Kickoff e acesso", dtl: "Conta, papéis, importação da planilha-piloto." },
  { d: "Dia 3–7", t: "Base e régua", dtl: "Alunos, valores, descontos, textos de cobrança na marca da escola." },
  { d: "Dia 8–12", t: "Conciliação e portal", dtl: "Conta bancária, testes de Pix e boleto, portal do responsável." },
  { d: "Dia 13–15", t: "Treino e go-live", dtl: "Secretaria e tesouraria treinadas. Matrículas 2027 já com cobrança." },
];

export const faqs = [
  {
    q: "O dinheiro cai mesmo direto na conta da escola?",
    a: "Sim. A liquidação acontece na conta da própria escola, no CNPJ dela. A Giz Pay não retém valores nem intermedia repasse.",
  },
  {
    q: "Preciso trocar o sistema acadêmico que já uso?",
    a: "Não. A Giz Pay cuida da camada financeira e convive com o pedagógico atual, importando a base por planilha ou integração.",
  },
  {
    q: "Quanto tempo leva a implantação?",
    a: "De 7 a 15 dias em média, incluindo importação da base, configuração da régua e treinamento da equipe.",
  },
  {
    q: "Como a Giz Pay cobra?",
    a: "Assinatura mensal por aluno ativo, com valor previsível. Não cobramos percentual sobre o faturamento da escola.",
  },
  {
    q: "A plataforma usa a identidade visual da escola?",
    a: "Sim. Painel e portal do responsável são white label: logo, cores e comunicações saem com a marca da instituição.",
  },
  {
    q: "E se a família não quiser instalar um app?",
    a: "Não precisa. O portal abre no celular do responsável, no navegador. Pix copia-e-cola e boleto, sem loja de aplicativos.",
  },
];

export const schools = [
  "Colégio São Bento · exemplo",
  "Escola Horizonte · exemplo",
  "Instituto Santa Rita · exemplo",
  "Colégio Farol · exemplo",
  "Centro Educacional Ipiranga · exemplo",
  "Colégio Vila Nova · exemplo",
];

export type DesignNote = {
  id: string;
  n: number;
  title: string;
  lesson: string;
  body: string;
};

export const designNotes: DesignNote[] = [
  {
    id: "hero",
    n: 1,
    title: "Dobra de 12 segundos",
    lesson: "Aula 02",
    body: "Headline, sub, dois CTAs e o produto visível. O seletor de papel faz três personas se reconhecerem sem três homepages.",
  },
  {
    id: "painel",
    n: 2,
    title: "Reconhecimento do produto",
    lesson: "Aula 03 · heurística 6",
    body: "O painel se comporta: Pix entra, atrasado em tijolo, pago em giz. Motion explica caixa, não enfeita o logo.",
  },
  {
    id: "problema",
    n: 3,
    title: "Objeção cedo",
    lesson: "Aula 02",
    body: "Antes de módulos, o visitante vê o custo do intermediário. Desejo nasce de prejuízo sentido, não de feature list.",
  },
  {
    id: "comparativo",
    n: 4,
    title: "Prova fora do modal",
    lesson: "Aula 06",
    body: "O comparativo era overlay. Agora é seção permanente: a Carla não precisa caçar a resposta “onde cai o dinheiro”.",
  },
  {
    id: "calculadora",
    n: 5,
    title: "Micro-sim",
    lesson: "Aula 02 e 05",
    body: "CTA secundário vira teatro de número. 3,5% deixa de ser taxa e vira reais por ano — ponte para a demo.",
  },
  {
    id: "portal",
    n: 6,
    title: "A secretaria se vê",
    lesson: "Aula 03",
    body: "Portal clicável mata “a família vai reclamar” e “vão ter que instalar app”. White label visível no mock.",
  },
  {
    id: "form",
    n: 7,
    title: "Estado de sucesso",
    lesson: "Aula 05",
    body: "Enviar não pode ser um beco. O form diz o próximo passo: WhatsApp comercial, 30 minutos, sem compromisso.",
  },
];
