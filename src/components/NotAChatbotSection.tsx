import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, Check, X, ArrowRight, BrainCircuit, Network, Zap, Workflow } from 'lucide-react';

export const NotAChatbotSection: React.FC = () => {
  const [headlineState, setHeadlineState] = useState<'chatbot' | 'agent'>('agent');
  const [activeStage, setActiveStage] = useState<number>(0);

  // Auto toggle headline every few seconds to highlight the transition
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineState((prev) => (prev === 'chatbot' ? 'agent' : 'chatbot'));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const stages = [
    {
      title: 'ENTENDER',
      subtitle: 'Semântica & Intenção',
      description: 'Capta nuances da linguagem natural, gírias, dúvidas implícitas e o contexto histórico do cliente sem depender de palavras-chave rígidas.',
      icon: BrainCircuit,
      status: 'Contexto Mapeado'
    },
    {
      title: 'ANALISAR',
      subtitle: 'Raciocínio Operacional',
      description: 'Cruza a necessidade do usuário com a base de conhecimento e as diretrizes do negócio para calcular a relevância e prioridade da interação.',
      icon: Workflow,
      status: 'Prioridade Avaliada'
    },
    {
      title: 'AGIR',
      subtitle: 'Execução de Fluxos',
      description: 'Dispara ações estruturadas: agenda reuniões, atualiza status no CRM, cria tickets internos ou fornece orientações ricas e precisas.',
      icon: Zap,
      status: 'Processo Executado'
    },
    {
      title: 'CONECTAR',
      subtitle: 'Sinergia com a Equipe',
      description: 'Entrega contatos qualificados e mastigados nas mãos dos consultores e operadores humanos, eliminando atrito e tempo morto.',
      icon: Network,
      status: 'Equipe Acionada'
    }
  ];

  return (
    <section id="diferencial" className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] bg-[#07070a]">
      <div className="mx-auto max-w-6xl">
        
        {/* Animated Headline Transition */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-5">
            PARADIGMA OPERACIONAL
          </div>

          <div className="min-h-[110px] flex items-center justify-center">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              {headlineState === 'chatbot' ? (
                <span className="text-zinc-400 line-through decoration-zinc-500/50 transition-all duration-700 animate-in fade-in">
                  Não é apenas um chatbot.
                </span>
              ) : (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 transition-all duration-700 animate-in fade-in">
                  É um agente.
                </span>
              )}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto mt-4">
            A era das respostas prontas acabou. Descubra a diferença estrutural entre um script que apenas fala e uma inteligência que age pelo seu negócio.
          </p>
        </div>

        {/* Dynamic Comparison: Traditional Chatbot vs HERMES Agent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          
          {/* Chatbot Convencional (Subdued / Rigid) */}
          <div className="relative rounded-3xl bg-[#0a0b0e]/70 border border-white/[0.06] p-8 sm:p-10 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.02] rounded-full blur-3xl -z-10" />

            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.05]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-zinc-400">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                      CHATBOT CONVENCIONAL
                    </h3>
                    <div className="text-[11px] text-zinc-500">Modelo reativo de primeira geração</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                  ESTÁTICO
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { text: 'Responde perguntas isoladas sem entender o contexto amplo', fail: true },
                  { text: 'Segue scripts pré-programados e rígidos', fail: true },
                  { text: 'Espera comandos específicos ou opções numéricas', fail: true },
                  { text: 'Termina na conversa, gerando um beco sem saída operacional', fail: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.015] border border-white/[0.03]">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                      <X className="w-2.5 h-2.5 text-zinc-500" />
                    </div>
                    <span className="text-sm text-zinc-400 font-light leading-snug">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-4 border-t border-white/[0.04] text-xs font-mono text-zinc-400">
              Resultado: Frustração do cliente e dados perdidos sem continuidade.
            </div>
          </div>

          {/* HERMES Agent (Luminous / Systemic) */}
          <div className="relative rounded-3xl bg-[#0f1117] border border-white/[0.15] p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,255,255,0.03)] overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.04] rounded-full blur-3xl -z-10" />

            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-xs shadow-md">
                    H
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-white font-semibold">
                      HERMES AGENT
                    </h3>
                    <div className="text-[11px] text-zinc-400">Arquitetura de cognição e execução autônoma</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                  ATIVO · PRODUTIVO
                </span>
              </div>

              <div className="space-y-3.5">
                {[
                  'Entende contexto profundo e intenção de negócio',
                  'Analisa necessidades reais em tempo de execução',
                  'Qualifica oportunidades e categoriza clientes',
                  'Organiza informações em registros claros e úteis',
                  'Executa fluxos definidos conforme a operação',
                  'Conecta pessoas certas a ações imediatas',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-all duration-200">
                    <div className="mt-0.5 w-4 h-4 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-sm text-zinc-200 font-normal leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.08] text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span>Resultado: Eficiência mensurável e continuidade real.</span>
              <span className="text-white font-semibold">OMNIA Core</span>
            </div>
          </div>

        </div>

        {/* Dynamic Stage Traversal: ENTENDER → ANALISAR → AGIR → CONECTAR */}
        <div className="rounded-3xl bg-[#090a0d] border border-white/[0.09] p-8 sm:p-10 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.06]">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                O CICLO COGNITIVO
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                Como o HERMES atravessa cada estágio
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span>Interativo</span>
              <span>· Clique nos estágios</span>
            </div>
          </div>

          {/* Step selector tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStage === idx;
              return (
                <button
                  key={stage.title}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between gap-3 ${
                    isSelected
                      ? 'bg-white text-black border-white shadow-lg'
                      : 'bg-white/[0.02] text-zinc-400 border-white/[0.05] hover:border-white/15 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-mono text-[11px] tracking-wider font-semibold">
                      0{idx + 1}
                    </span>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm tracking-wide">
                      {stage.title}
                    </div>
                    <div className={`text-[10px] truncate ${isSelected ? 'text-zinc-700' : 'text-zinc-500'}`}>
                      {stage.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Panel */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Estágio Ativo: {stages[activeStage].title}</span>
                <span className="text-zinc-600">|</span>
                <span>{stages[activeStage].status}</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
                {stages[activeStage].description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-zinc-300">
              <span>Etapa 0{activeStage + 1} de 04</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
