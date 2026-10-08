import React, { useState } from 'react';
import { Send, Sparkles, Terminal, Activity, CheckCircle2, RotateCcw } from 'lucide-react';

interface ResponseData {
  thought: string;
  response: string;
  actionPreview: string;
}

export const InteractiveAgentSection: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [activeDialog, setActiveDialog] = useState<{ query: string; data: ResponseData } | null>({
    query: "Como você poderia ajudar minha empresa?",
    data: {
      thought: "Mapeando gargalos típicos de triagem, perda de leads em horários não comerciais e tempo de resposta.",
      response: "Eu posso assumir a linha de frente do seu negócio 24 horas por dia: recebo cada cliente sem filas, compreendo o que ele precisa, tiro dúvidas com base nas suas diretrizes e categorizo a conversa para que sua equipe atue apenas onde há valor real.",
      actionPreview: "Diagnóstico operacional mapeado · Triagem automática ativada"
    }
  });

  const promptSuggestions = [
    "Como você poderia ajudar minha empresa?",
    "Como funcionaria para vendas?",
    "Como você qualificaria um cliente?",
    "Como transformar uma conversa em oportunidade?",
  ];

  const getKnowledgeResponse = (query: string): ResponseData => {
    const q = query.toLowerCase();
    if (q.includes("vendas")) {
      return {
        thought: "Analisando funil de aquisição comercial e perfil de cliente ideal (ICP).",
        response: "Em vendas, eu identifico imediatamente se quem entrou em contato tem intenção de compra, se cabe no perfil da sua empresa e qual a urgência. Em vez de um formulário chato, conduzo uma conversa natural e já entrego o contato agendado ou distribuído para o consultor certo.",
        actionPreview: "Lead P1 qualificado · Notificação imediata para o consultor comercial"
      };
    } else if (q.includes("qualificaria") || q.includes("qualificar")) {
      return {
        thought: "Avaliando critérios de pontuação: autoridade, necessidade, orçamento e timing (BANT/ICP).",
        response: "A qualificação acontece no fluxo natural do diálogo. Eu descubro o porte da empresa, o objetivo principal e a maturidade sem parecer uma entrevista engessada. Se o perfil for compatível com suas regras, crio um registro completo com pontuação de relevância.",
        actionPreview: "Score ICP: 94/100 · Perfil validado para avanço comercial"
      };
    } else if (q.includes("oportunidade") || q.includes("transformar")) {
      return {
        thought: "Conectando camada conversacional à camada de dados corporativa (CRM/Webhooks).",
        response: "Transformo conversa em oportunidade extraindo os dados cruciais (quem é o cliente, o que precisa, quando precisa) e disparando gatilhos instantâneos: alimento seu CRM, gero um resumo executivo e aviso seu time em tempo real.",
        actionPreview: "Conversa sintetizada → Objeto de Oportunidade registrado no CRM"
      };
    } else {
      return {
        thought: "Processando contexto geral da operação e diretrizes de inteligência de negócios.",
        response: "Eu posso transformar sua operação de comunicação em um ativo produtivo: atendo clientes com contexto humano e velocidade de máquina, elimino tempo de espera, organizo dados e garanto que nenhuma oportunidade seja esquecida.",
        actionPreview: "Eficiência ampliada · Continuidade garantida para a equipe"
      };
    }
  };

  const handleAsk = (queryText: string) => {
    if (!queryText.trim()) return;
    setIsThinking(true);
    setInputVal('');

    setTimeout(() => {
      setActiveDialog({
        query: queryText,
        data: getKnowledgeResponse(queryText)
      });
      setIsThinking(false);
    }, 900);
  };

  return (
    <section className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] bg-[#07070a]">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-5">
            EXPERIÊNCIA INTERATIVA
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Converse com o HERMES.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-xl mx-auto">
            Quer entender como ele pensa sobre uma operação? Experimente fazer uma pergunta abaixo e veja sua linha de raciocínio.
          </p>
        </div>

        {/* Interactive Console Card */}
        <div className="rounded-3xl bg-[#090b0f] border border-white/[0.1] shadow-2xl p-6 sm:p-10 space-y-8">
          
          {/* Quick suggestions pills */}
          <div className="space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
              SUGESTÕES DE PERGUNTAS RÁPIDAS:
            </div>
            <div className="flex flex-wrap gap-2">
              {promptSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleAsk(suggestion)}
                  disabled={isThinking}
                  className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.07] text-xs text-zinc-300 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 text-left disabled:opacity-50"
                >
                  "{suggestion}"
                </button>
              ))}
            </div>
          </div>

          {/* User Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk(inputVal);
            }}
            className="relative flex items-center"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Digite uma pergunta sobre sua operação..."
              disabled={isThinking}
              className="w-full py-4 pl-5 pr-14 rounded-2xl bg-black/60 border border-white/[0.1] text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
            />
            <button
              type="submit"
              disabled={isThinking || !inputVal.trim()}
              className="absolute right-2.5 p-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 disabled:opacity-30 disabled:hover:bg-white transition-all shadow-md"
              title="Enviar"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Dialog & Agent Reasoning Display */}
          <div className="rounded-2xl bg-[#040507] border border-white/[0.07] p-6 sm:p-8 min-h-[260px] flex flex-col justify-start space-y-6">
            
            {isThinking ? (
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 py-10 justify-center">
                <Activity className="w-4 h-4 animate-spin text-zinc-200" />
                <span>Processando contexto operacional do HERMES Agent...</span>
              </div>
            ) : activeDialog ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* User Query */}
                <div className="flex items-start justify-end">
                  <div className="max-w-[85%] p-4 rounded-2xl rounded-tr-sm bg-white/[0.06] border border-white/[0.08] text-sm text-zinc-200 font-light">
                    "{activeDialog.query}"
                  </div>
                </div>

                {/* Cognitive Reasoning Trace */}
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-zinc-400">
                  <Sparkles className="w-3.5 h-3.5 text-zinc-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-400">LINHA DE RACIOCÍNIO: </span>
                    <span className="text-zinc-300">{activeDialog.data.thought}</span>
                  </div>
                </div>

                {/* HERMES Synthesized Answer */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white text-black flex items-center justify-center font-bold text-xs shrink-0 shadow-md">
                    H
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="text-sm text-zinc-100 font-normal leading-relaxed p-5 rounded-2xl rounded-tl-sm bg-[#12141c] border border-white/[0.1] shadow-lg">
                      {activeDialog.data.response}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {activeDialog.data.actionPreview}
                      </span>
                      <span>Latência: 112ms</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

          </div>

          {/* Legal / Transparency Disclaimer */}
          <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-white/[0.05]">
            <span>* Simulação de demonstração baseada na arquitetura operacional do HERMES Agent.</span>
            <span className="text-zinc-400">OMNIA Intelligence</span>
          </div>

        </div>

      </div>
    </section>
  );
};
