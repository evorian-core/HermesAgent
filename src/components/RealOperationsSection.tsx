import React, { useState } from 'react';
import { Users, Bot, Layers, Target, Briefcase, Zap, ArrowDown, ArrowRight } from 'lucide-react';

export const RealOperationsSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(1);

  const flowNodes = [
    {
      title: 'CLIENTE',
      role: 'Ponto de Origem',
      description: 'Chegada contínua de dúvidas, demandas, orçamentos e solicitações a qualquer hora.',
      icon: Users,
    },
    {
      title: 'HERMES',
      role: 'Cognição Imediata',
      description: 'Atendimento instantâneo, acolhimento sem fricção e escuta ativa orientada ao negócio.',
      icon: Bot,
    },
    {
      title: 'CONTEXTO',
      role: 'Interpretação',
      description: 'Extração da intenção real, histórico, dores e urgência por trás das palavras.',
      icon: Layers,
    },
    {
      title: 'OPORTUNIDADE',
      role: 'Qualificação',
      description: 'Filtro de perfil de cliente ideal (ICP) e pontuação de prioridade de atendimento.',
      icon: Target,
    },
    {
      title: 'EQUIPE',
      role: 'Especialistas',
      description: 'Seus consultores e analistas recebem contatos prontos, sem perder tempo com triagem vazia.',
      icon: Briefcase,
    },
    {
      title: 'AÇÃO',
      role: 'Fechamento & Valor',
      description: 'Reunião agendada, contrato assinado, chamado resolvido ou processo concluído.',
      icon: Zap,
    },
  ];

  return (
    <section className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] bg-[#050507]">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-5">
            SINERGIA HUMANA & ARTIFICIAL
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Criado para se encaixar na operação real.
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="font-display text-xl sm:text-2xl text-zinc-200 font-semibold leading-relaxed">
              HERMES não precisa substituir sua equipe.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Ele pode ampliar a capacidade dela.
              </span>
            </p>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Elimine o desgaste das tarefas repetitivas. Enquanto o agente absorve o primeiro impacto e organiza os dados, seus colaboradores concentram talento onde a decisão humana é insubstituível.
            </p>
          </div>
        </div>

        {/* Unified Flow Pipeline: CLIENTE ↓ HERMES ↓ CONTEXTO ↓ OPORTUNIDADE ↓ EQUIPE ↓ AÇÃO */}
        <div className="relative mb-20">
          
          {/* Connector line for desktop */}
          <div className="hidden xl:block absolute top-1/2 left-4 right-4 h-px bg-gradient-to-r from-white/[0.05] via-white/[0.2] to-white/[0.05] -translate-y-1/2 z-0" />

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 relative z-10">
            {flowNodes.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = activeNode === idx;
              return (
                <div
                  key={node.title}
                  onClick={() => setActiveNode(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border text-center transition-all duration-300 flex flex-col items-center justify-between min-h-[190px] ${
                    isSelected
                      ? 'bg-[#12141c] border-white/30 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(255,255,255,0.06)]'
                      : 'bg-[#090a0d]/80 border-white/[0.06] hover:border-white/20 hover:bg-[#0c0d12]'
                  }`}
                >
                  <div className="w-full flex items-center justify-between mb-3 text-zinc-500 font-mono text-[10px]">
                    <span>0{idx + 1}</span>
                    <span className="text-zinc-600">PASSO</span>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 my-1 ${
                      isSelected ? 'bg-white text-black' : 'bg-white/[0.04] text-zinc-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="font-display font-bold text-sm tracking-wide text-white">
                      {node.title}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 mt-0.5">
                      {node.role}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Node Deep-Dive Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0c10] border border-white/[0.08] backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-zinc-500">ETAPA 0{activeNode + 1}</span>
              <span className="text-zinc-700">|</span>
              <span className="font-display text-xl font-bold text-white">
                {flowNodes[activeNode].title}
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                {flowNodes[activeNode].role}
              </span>
            </div>
            <div className="text-xs font-mono text-zinc-500">
              Conexão com a operação: Fluida & Automática
            </div>
          </div>

          <p className="text-base text-zinc-300 font-light leading-relaxed max-w-3xl">
            {flowNodes[activeNode].description}
          </p>
        </div>

      </div>
    </section>
  );
};
