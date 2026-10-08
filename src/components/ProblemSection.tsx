import React, { useState } from 'react';
import { MessageSquare, Cpu, GitBranch, Zap, ArrowRight, Check } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 0,
      title: 'Mensagem',
      eyebrow: '01 · ENTRADA',
      icon: MessageSquare,
      summary: 'Perguntas, pedidos, oportunidades e informações que chegam a todo momento.',
      detail: 'O fluxo de mensagens diário não para. Clientes querem respostas imediatas, mas o dado isolado não gera valor por si só.'
    },
    {
      id: 1,
      title: 'Contexto',
      eyebrow: '02 · INTERPRETAÇÃO',
      icon: Cpu,
      summary: 'Compreensão real do cenário, momento do cliente e intenção de compra.',
      detail: 'Não basta ler palavras-chave. O HERMES analisa o tom, a urgência, o histórico e o momento exato em que a empresa se encontra.'
    },
    {
      id: 2,
      title: 'Decisão',
      eyebrow: '03 · INTELIGÊNCIA',
      icon: GitBranch,
      summary: 'Avaliação da rota ideal com base nas regras do negócio.',
      detail: 'Qualificar o lead? Acionar o especialista N2? Agendar uma reunião executiva? O agente decide a melhor próxima etapa.'
    },
    {
      id: 3,
      title: 'Ação',
      eyebrow: '04 · RESULTADO',
      icon: Zap,
      summary: 'Execução instantânea: dados no CRM, alertas para a equipe e processos disparados.',
      detail: 'A conversa não é um beco sem saída. Ela se desdobra em valor palpável e continuidade na operação da sua empresa.'
    }
  ];

  return (
    <section id="o-problema" className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] bg-[#050507]">
      <div className="mx-auto max-w-6xl">
        
        {/* Minimalist Editorial Headline */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-6">
            O PROBLEMA DA COMUNICAÇÃO CORPORATIVA
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-tight mb-8">
            Conversas não deveriam terminar em respostas.
          </h2>
          
          <p className="text-base sm:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
            Todos os dias, empresas recebem perguntas, pedidos, oportunidades e informações importantes. O problema não é apenas responder. É saber o que fazer depois.
          </p>
        </div>

        {/* Visual Pipeline Sequence: Mensagem → Contexto → Decisão → Ação */}
        <div className="relative mb-20">
          
          {/* Desktop Flow Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={`group relative cursor-pointer p-6 rounded-2xl transition-all duration-300 border text-left ${
                    isActive
                      ? 'bg-[#0f1015] border-white/30 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.05)]'
                      : 'bg-[#0a0a0d]/70 border-white/[0.07] hover:border-white/20 hover:bg-[#0c0d11]'
                  }`}
                >
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] tracking-widest text-zinc-400 font-medium">
                      {step.eyebrow}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-white text-black shadow-md'
                          : 'bg-white/[0.04] text-zinc-400 group-hover:text-white group-hover:bg-white/[0.08]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-white tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light mb-4">
                    {step.summary}
                  </p>

                  <div className={`pt-3 border-t border-white/[0.06] text-[11px] font-mono transition-colors ${
                    isActive ? 'text-zinc-300' : 'text-zinc-400'
                  }`}>
                    {step.detail}
                  </div>

                  {/* Flow arrow on right for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#050507] border border-white/20 items-center justify-center text-zinc-400 text-xs">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Central Connecting Statement */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent p-10 sm:p-14 border border-white/[0.1] text-center backdrop-blur-xl">
          <div className="absolute inset-0 bg-radial-gradient opacity-50" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              O ELO QUE FALTAVA NA SUA EMPRESA
            </span>
            <div className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              HERMES conecta tudo isso.
            </div>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Sem pontas soltas. Sem informações perdidas em conversas intermináveis. Cada interação se torna um catalisador de eficiência operacional.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
