export const WHATSAPP_URL = "https://wa.me/5542998209502?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20HERMES%20Agent%20e%20saber%20como%20ele%20pode%20ser%20utilizado%20na%20minha%20empresa.";

export const WHATSAPP_TIER_URL = (planName: string) => 
  `https://wa.me/5542998209502?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20plano%20${encodeURIComponent(planName)}%20do%20HERMES%20Agent%20para%20minha%20empresa.`;

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export const PLANS: PlanItem[] = [
  {
    id: "start",
    name: "HERMES START",
    description: "Para empresas que querem começar a automatizar o atendimento com consistência e agilidade.",
    features: [
      "Agente inteligente pré-configurado",
      "Atendimento automatizado 24/7",
      "Base de conhecimento corporativa unificada",
      "Painel operacional essencial",
      "Métricas e registros de conversas"
    ],
    ctaText: "Falar com a equipe"
  },
  {
    id: "business",
    name: "HERMES BUSINESS",
    badge: "MAIS ESCOLHIDO",
    isPopular: true,
    description: "Para operações em crescimento que precisam de qualificação contínua e automação de processos.",
    features: [
      "Agentes personalizados por departamento",
      "Qualificação autônoma de oportunidades comerciais",
      "Automação de fluxos e gatilhos de equipe",
      "Múltiplos fluxos e ramificações de atendimento",
      "Painel com métricas avançadas e SLAs",
      "Integrações definidas conforme o projeto"
    ],
    ctaText: "Quero conhecer o HERMES"
  },
  {
    id: "enterprise",
    name: "HERMES ENTERPRISE",
    description: "Para grandes operações, demandas complexas de escala e arquiteturas sob medida.",
    features: [
      "Arquitetura de múltiplos agentes orquestrados",
      "Engenharia de fluxos e regras sob medida",
      "Integrações corporativas avançadas (ERP/CRM)",
      "Ambiente de alta volumetria e baixa latência",
      "Políticas estritas de segurança e governança",
      "Suporte prioritário e acompanhamento dedicado"
    ],
    ctaText: "Falar com especialista"
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "O HERMES é um chatbot?",
    answer: "Não. Chatbots tradicionais seguem árvores de decisão rígidas, esperam comandos mecânicos e terminam na resposta. O HERMES é um agente autônomo com compreensão semântica profunda: ele interpreta a intenção do cliente, analisa o contexto operacional, decide a melhor rota e conecta o resultado diretamente à próxima ação da sua equipe."
  },
  {
    question: "O HERMES pode ser personalizado?",
    answer: "Sim, integralmente. Cada empresa opera com seu próprio tom de voz, regras de negócio, dados proprietários e metas. O HERMES adapta sua personalidade, absorve sua base de conhecimento e atua exatamente dentro dos limites e diretrizes estabelecidos para sua marca."
  },
  {
    question: "Para quais tipos de empresas ele pode ser usado?",
    answer: "O HERMES foi desenhado para empresas com fluxo frequente de interações que exigem agilidade e precisão: operações de vendas consultivas, clínicas, escritórios, empresas de serviços, tecnologia, e-commerce e indústrias que buscam transformar contatos em resultados operacionais mensuráveis."
  },
  {
    question: "Ele pode atender clientes?",
    answer: "Sim. Ele acolhe clientes em tempo real, compreende dúvidas complexas mesmo com linguagem informal ou erros de digitação, responde de forma humanizada e precisa, mantendo a consistência institucional em cada diálogo."
  },
  {
    question: "Ele pode qualificar oportunidades?",
    answer: "Com absoluta precisão. Em vez de simplesmente responder perguntas, o HERMES identifica o momento de compra, analisa o perfil e a urgência do lead, extrai dados essenciais e categoriza a oportunidade antes de repassá-la aos consultores certos."
  },
  {
    question: "É possível integrar o HERMES aos meus processos?",
    answer: "Sim. O HERMES se conecta a ferramentas de CRM, bancos de dados, planilhas e canais de mensageria de acordo com a configuração e escopo de cada projeto, garantindo que as informações cheguem organizadas onde sua equipe já trabalha."
  },
  {
    question: "Minha equipe continua participando da operação?",
    answer: "Sim. O objetivo do HERMES não é substituir a equipe humana, mas potencializá-la. Ele assume a triagem repetitiva, o acolhimento imediato e a organização dos dados, entregando aos seus especialistas oportunidades já qualificadas e prontas para fechamento."
  },
  {
    question: "Como contratar o HERMES?",
    answer: "Iniciamos com um diagnóstico operacional rápido. Clique em qualquer um dos botões de contato para conversar diretamente com nossa equipe via WhatsApp. Analisaremos seu modelo de negócio e apresentaremos a melhor configuração para sua operação."
  }
];

export interface AdaptationSector {
  id: string;
  title: string;
  subtitle: string;
  identifies: string[];
  action: string;
  sampleInput: string;
  sampleOutput: string;
}

export const ADAPTATION_SECTORS: AdaptationSector[] = [
  {
    id: "vendas",
    title: "VENDAS",
    subtitle: "Identificação instantânea de demanda com tração comercial",
    identifies: [
      "Intenção de compra clara vs. curiosidade",
      "Interesse específico em linhas de produtos/serviços",
      "Orçamento estimado e timing de decisão",
      "Prioridade comercial de atendimento (P1, P2, P3)"
    ],
    action: "Criação de lead qualificado e distribuição imediata para o consultor com o perfil ideal.",
    sampleInput: "Preciso de uma solução de automação para minha equipe de 15 pessoas até o fim do mês.",
    sampleOutput: "Lead P1 qualificado: 15 usuários · Prazo imediato · Encaminhado para o time comercial sênior."
  },
  {
    id: "suporte",
    title: "SUPORTE",
    subtitle: "Resolução inteligente com contextualização prévia",
    identifies: [
      "Natureza do problema e criticidade operacional",
      "Contexto do cliente e histórico de interações",
      "Nível de urgência e impacto no negócio",
      "Necessidade de intervenção técnica especializada"
    ],
    action: "Triagem com diagnóstico preliminar e abertura de chamado técnico com logs resumidos.",
    sampleInput: "O painel não está sincronizando com nosso sistema interno desde as 14h.",
    sampleOutput: "Chamado urgente categorizado como 'Sincronização API' · Resumo técnico estruturado para o suporte N2."
  },
  {
    id: "atendimento",
    title: "ATENDIMENTO",
    subtitle: "Acolhimento humanizado, consistente e ágil em todos os horários",
    identifies: [
      "Dúvidas frequentes sobre serviços e políticas",
      "Disponibilidade de horários ou agendamentos",
      "Tom de voz do usuário (frustração, urgência, cortesia)",
      "Informações cadastrais essenciais"
    ],
    action: "Resolução direta baseada na base de conhecimento ou encaminhamento caloroso ao setor responsável.",
    sampleInput: "Vocês atendem aos sábados e emitem nota fiscal para pessoa jurídica?",
    sampleOutput: "Confirmação de horários e políticas fiscais fornecida com precisão institucional imediata."
  },
  {
    id: "pre-vendas",
    title: "PRÉ-VENDAS",
    subtitle: "Filtro analítico de perfil (ICP) antes do tempo do vendedor",
    identifies: [
      "Perfil da empresa (tamanho, segmento, faturamento)",
      "Dores operacionais e objetivos de curto prazo",
      "Potencial de expansão da conta (LTV estimado)",
      "Próximo passo ideal (demonstração, proposta, diagnóstico)"
    ],
    action: "Agendamento autônomo na agenda do executivo ou descarte educado de perfis fora do ICP.",
    sampleInput: "Somos uma indústria com 200 colaboradores buscando digitalizar nossa comunicação.",
    sampleOutput: "Perfil ICP Aprovado · Agendamento de reunião executiva sugerido e link sincronizado."
  },
  {
    id: "operacoes",
    title: "OPERAÇÕES",
    subtitle: "Conexão fluida entre conversas e rotinas internas da empresa",
    identifies: [
      "Status de pedidos, ordens de serviço e entregas",
      "Cumprimento de SLAs contratuais",
      "Disponibilidade de inventário ou agenda",
      "Gatilhos de notificação para times internos"
    ],
    action: "Atualização de status em tempo real e acionamento de alertas para operadores de campo.",
    sampleInput: "Gostaria de saber se o lote #4829 já foi despachado para a unidade de Curitiba.",
    sampleOutput: "Consulta executada no sistema interno: Lote despachado às 11:20 com código de rastreamento enviado."
  }
];

export const CAPABILITIES = [
  {
    number: "01",
    tag: "ATENDIMENTO",
    title: "Responda clientes com rapidez, contexto e consistência.",
    description: "Elimine o tempo de espera sem recorrer a robôs mecânicos. O HERMES mantém diálogos naturais, contextuais e alinhados às diretrizes da empresa em qualquer horário do dia.",
    badge: "Tempo real",
    metric: "< 1.2s",
    metricLabel: "Latência média de interpretação"
  },
  {
    number: "02",
    tag: "QUALIFICAÇÃO",
    title: "Identifique necessidades, interesses e oportunidades.",
    description: "O agente faz as perguntas certas no ritmo natural da conversa, detecta momento de compra e analisa se o cliente possui o perfil adequado para sua equipe avançar.",
    badge: "Inteligência Ativa",
    metric: "98.4%",
    metricLabel: "Acurácia de detecção de ICP"
  },
  {
    number: "03",
    tag: "ORGANIZAÇÃO",
    title: "Transforme conversas em informações úteis para sua equipe.",
    description: "Cada diálogo é sintetizado em dados estruturados: intenção, urgência, histórico e resumo executivo pronto para ser consultado sem perda de tempo.",
    badge: "Síntese Estruturada",
    metric: "100%",
    metricLabel: "Dados padronizados"
  },
  {
    number: "04",
    tag: "AUTOMAÇÃO",
    title: "Conecte conversas a fluxos e ações definidos pelo seu negócio.",
    description: "A conversa não é um ponto final. O HERMES dispara atualizações, agenda reuniões, notifica responsáveis e aciona etapas operacionais em tempo hábil.",
    badge: "Gatilhos Operacionais",
    metric: "Zero",
    metricLabel: "Ruído de comunicação"
  },
  {
    number: "05",
    tag: "OPERAÇÃO COMERCIAL",
    title: "Transforme interações em oportunidades reais para sua equipe.",
    description: "Aumente a taxa de conversão entregando contatos prontos para fechamento direto nas mãos dos seus melhores consultores.",
    badge: "Tração de Vendas",
    metric: "+3.8x",
    metricLabel: "Velocidade de contato inicial"
  }
];
