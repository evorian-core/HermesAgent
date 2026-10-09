// ============================================================
// HERMES Agent — conteúdo do site
// Regra: nada de métricas, latências, percentagens, versões,
// integrações ou garantias que não estejam confirmadas.
// ============================================================

// Contato comercial oficial (WhatsApp) — preservado integralmente.
export const WHATSAPP_URL =
  "https://wa.me/5542998209502?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20HERMES%20Agent%20e%20saber%20como%20ele%20pode%20ser%20utilizado%20na%20minha%20empresa.";

export const WHATSAPP_TIER_URL = (planName: string) =>
  `https://wa.me/5542998209502?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20plano%20${encodeURIComponent(planName)}%20do%20HERMES%20Agent%20para%20minha%20empresa.`;

export const BRAND = {
  product: "HERMES Agent",
  company: "OMNIA",
  parent: "EVORIAN",
  location: "Ipiranga, Brasil",
  taglineLead: "Seu negócio conversa.",
  taglineTail: "HERMES entende.",
};

// ---------- COMPREENSÃO: ciclo Mensagem → Contexto → Decisão → Ação ----------
export interface UnderstandingStep {
  id: string;
  index: string;
  title: string;
  summary: string;
}

export const UNDERSTANDING_STEPS: UnderstandingStep[] = [
  { id: "mensagem", index: "01", title: "Mensagem", summary: "Perguntas, pedidos e oportunidades chegam a todo momento, em qualquer horário." },
  { id: "contexto", index: "02", title: "Contexto", summary: "O agente interpreta a intenção, o tom e a urgência por trás de cada conversa." },
  { id: "decisao", index: "03", title: "Decisão", summary: "Com base nas regras do negócio, define a melhor rota para cada interação." },
  { id: "acao", index: "04", title: "Ação", summary: "A conversa se transforma em informação organizada e no próximo passo certo." },
];

// Capacidades documentadas do produto (sem métricas).
export const CAPABILITIES: { title: string; description: string }[] = [
  { title: "Atender", description: "Responde clientes com contexto e consistência, no tom da sua marca." },
  { title: "Compreender", description: "Interpreta a intenção e o momento do cliente, não palavras isoladas." },
  { title: "Qualificar", description: "Identifica interesses e oportunidades antes do contato com a equipe." },
  { title: "Organizar", description: "Transforma cada diálogo em informação estruturada e fácil de consultar." },
  { title: "Encaminhar", description: "Entrega à pessoa certa o próximo passo, sem perder o contexto." },
];

// ---------- DEMONSTRAÇÃO ilustrativa ----------
// Sequência conceitual: CONVERSA → CONTEXTO → OPORTUNIDADE → PRÓXIMO PASSO.
export interface DemoBeat {
  from: "cliente" | "hermes";
  text: string;
}

export const DEMO_BEATS: DemoBeat[] = [
  { from: "cliente", text: "Olá, gostaria de saber mais sobre uma solução para automatizar o atendimento da minha empresa." },
  { from: "hermes", text: "Claro. Para eu entender melhor: qual o porte da sua operação e o que você resolveria primeiro?" },
  { from: "cliente", text: "Temos uma equipe de vendas e perdemos contatos quando ninguém responde rápido." },
  { from: "hermes", text: "Entendi. Vou organizar essas informações e preparar o próximo passo com a equipe responsável." },
];

export const DEMO_MARKERS = ["Contexto identificado", "Interesse detectado", "Oportunidade qualificada"];

export const DEMO_RECORD = {
  title: "Registro organizado",
  fields: [
    { label: "Interesse", value: "Automatizar o atendimento" },
    { label: "Contexto", value: "Equipe de vendas · perda de contatos por demora na resposta" },
    { label: "Próximo passo", value: "Encaminhar para a equipe responsável" },
  ],
};

// ---------- APLICAÇÕES (setores) ----------
export interface Application {
  id: string;
  title: string;
  subtitle: string;
  scenario: string;
  outcome: string;
}

export const APPLICATIONS: Application[] = [
  { id: "vendas", title: "Vendas", subtitle: "Reconhecer a demanda e preparar o contato", scenario: "Preciso de uma solução para a minha equipe de 15 pessoas até o fim do mês.", outcome: "Interesse e prazo identificados · encaminhado ao time comercial." },
  { id: "suporte", title: "Suporte", subtitle: "Contextualizar antes de acionar a equipe", scenario: "O sistema não está respondendo desde cedo e ninguém me deu retorno.", outcome: "Situação resumida e organizada para o suporte avançar com contexto." },
  { id: "atendimento", title: "Atendimento", subtitle: "Acolher com consistência em qualquer horário", scenario: "Vocês têm horário disponível para conversar nesta semana?", outcome: "Dúvida acolhida e respondida com base nas informações da empresa." },
  { id: "pre-vendas", title: "Pré-vendas", subtitle: "Entender o perfil antes do vendedor", scenario: "Somos uma empresa em crescimento e queremos organizar o atendimento.", outcome: "Perfil compreendido · próximo passo sugerido ao time." },
  { id: "operacoes", title: "Operações", subtitle: "Conectar a conversa à rotina interna", scenario: "Gostaria de saber como está o andamento de um processo meu.", outcome: "Informação localizada e organizada para a equipe responsável." },
];

// ---------- CONFIGURAÇÃO (dimensões configuráveis, sem especificações inventadas) ----------
export interface ConfigDimension {
  id: string;
  name: string;
  description: string;
  points: string[];
}

export const CONFIGURATION: ConfigDimension[] = [
  { id: "personalidade", name: "Personalidade", description: "O tom e a forma como o agente conversa com cada pessoa.", points: ["Tom de voz", "Nível de formalidade", "Vocabulário da marca"] },
  { id: "conhecimento", name: "Conhecimento", description: "As informações que o agente utiliza para responder.", points: ["Base de informações da empresa", "Produtos e serviços", "Perguntas frequentes"] },
  { id: "objetivos", name: "Objetivos", description: "O que o agente prioriza em cada conversa.", points: ["Responder dúvidas", "Reconhecer interesses", "Preparar o próximo passo"] },
  { id: "fluxos", name: "Fluxos", description: "Como a conversa se encaminha conforme as respostas.", points: ["Ramificações por assunto", "Transbordo para a equipe", "Regras de continuidade"] },
  { id: "regras", name: "Regras", description: "Os limites dentro dos quais o agente atua.", points: ["Horários de atuação", "Políticas da empresa", "Privacidade e governança"] },
  { id: "integracoes", name: "Integrações", description: "Conexões definidas conforme o escopo de cada projeto.", points: ["Ferramentas já usadas pela equipe", "Escopo definido em conjunto"] },
  { id: "permissoes", name: "Permissões", description: "Quem acompanha e opera o agente no dia a dia.", points: ["Acesso da equipe", "Níveis de acompanhamento"] },
];

// ---------- PLANOS (dados confirmados; sem preços e sem selos de popularidade) ----------
export interface PlanItem {
  id: string;
  name: string;
  description: string;
  features: string[];
  ctaText: string;
}

export const PLANS: PlanItem[] = [
  {
    id: "start",
    name: "HERMES START",
    description: "Para empresas que querem começar a organizar o atendimento com consistência.",
    features: [
      "Agente inteligente pré-configurado",
      "Atendimento automatizado",
      "Base de conhecimento da empresa",
      "Painel operacional essencial",
      "Registro e organização das conversas",
    ],
    ctaText: "Falar com a equipe",
  },
  {
    id: "business",
    name: "HERMES BUSINESS",
    description: "Para operações em crescimento que precisam qualificar e automatizar processos.",
    features: [
      "Agentes personalizados por área",
      "Reconhecimento de oportunidades",
      "Automação de fluxos e notificações",
      "Múltiplos fluxos de atendimento",
      "Painel com métricas de conversas",
      "Integrações definidas conforme o projeto",
    ],
    ctaText: "Quero conhecer o HERMES",
  },
  {
    id: "enterprise",
    name: "HERMES ENTERPRISE",
    description: "Para grandes operações, demandas complexas de escala e arquiteturas sob medida.",
    features: [
      "Múltiplos agentes por operação",
      "Engenharia de fluxos sob medida",
      "Integrações corporativas sob demanda",
      "Operação de alto volume",
      "Políticas de segurança e governança",
      "Suporte prioritário e acompanhamento",
    ],
    ctaText: "Falar com especialista",
  },
];

// ---------- FAQ ----------
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  { question: "O HERMES é um chatbot?", answer: "Não. Chatbots tradicionais seguem roteiros rígidos e terminam na resposta. O HERMES é um agente que interpreta a intenção do cliente, considera o contexto e encaminha a conversa para o próximo passo da sua operação." },
  { question: "O HERMES pode ser personalizado?", answer: "Sim. Cada empresa tem seu tom de voz, suas regras e suas informações. O HERMES se adapta à sua base de conhecimento e atua dentro das diretrizes definidas para a sua marca." },
  { question: "Para quais tipos de empresas ele pode ser usado?", answer: "Para empresas com fluxo frequente de interações que exigem agilidade e precisão: vendas consultivas, clínicas, escritórios, serviços, tecnologia, e-commerce e indústrias, entre outras." },
  { question: "Ele pode atender clientes?", answer: "Sim. Ele acolhe clientes em tempo real, compreende dúvidas mesmo com linguagem informal, responde de forma consistente e mantém o alinhamento com as diretrizes da empresa em cada diálogo." },
  { question: "Ele pode qualificar oportunidades?", answer: "Sim. Em vez de apenas responder, o HERMES identifica o momento de contato, reconhece o interesse e a urgência, extrai as informações essenciais e organiza a oportunidade antes de encaminhá-la à equipe." },
  { question: "É possível integrar o HERMES aos meus processos?", answer: "Sim. As integrações são definidas conforme o escopo e a configuração de cada projeto, para que as informações cheguem organizadas onde a sua equipe já trabalha." },
  { question: "Minha equipe continua participando da operação?", answer: "Sim. O objetivo não é substituir a equipe, e sim potencializá-la. O HERMES assume o atendimento inicial e a organização dos dados, entregando à equipe interações já contextualizadas." },
  { question: "Como contratar o HERMES?", answer: "Começamos com um diagnóstico rápido. Clique em qualquer botão de contato para conversar com a nossa equipe pelo WhatsApp. Vamos entender o seu modelo de negócio e apresentar a melhor configuração." },
];


