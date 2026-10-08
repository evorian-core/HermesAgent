import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, CheckCircle2, User, Sparkles, Building2, Clock, ShieldAlert, ArrowRight, UserCheck } from 'lucide-react';

export const ActionSimulationSection: React.FC = () => {
  // Steps:
  // 0: Initial customer greeting
  // 1: HERMES initial contextual response
  // 2: Customer specifies need
  // 3: HERMES analyzes (Contexto, Interesse, Oportunidade)
  // 4: HERMES final routing response
  // 5: CRM Lead created & displayed on the side
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < 5) return prev + 1;
        return 5;
      });
    }, 2800);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const resetSimulation = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  return (
    <section id="em-acao" className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] bg-[#050507]">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-5">
            DEMONSTRAÇÃO DE PRODUTO
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Veja um agente trabalhando.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            Acompanhe o momento exato em que um diálogo aparentemente simples é compreendido, qualificado e convertido em uma ação comercial estruturada.
          </p>

          {/* Controls Bar */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pausar Simulação' : 'Continuar'}</span>
            </button>

            <button
              onClick={resetSimulation}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar</span>
            </button>
          </div>
        </div>

        {/* Dual Panel Simulation Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Live Chat & Cognitive States */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0a0c10] border border-white/[0.1] p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white">Canal: WhatsApp Integrado</span>
              </div>
              <div className="font-mono text-[11px] text-zinc-500">
                Fluxo: Qualificação Ativa
              </div>
            </div>

            {/* Conversation Flow */}
            <div className="space-y-4 min-h-[420px] flex flex-col justify-start">
              
              {/* Message 1: Cliente */}
              {currentStep >= 0 && (
                <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-1">CLIENTE</span>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.08] px-4 py-3 text-sm text-zinc-200 font-light">
                    "Olá, gostaria de saber se vocês têm alguém disponível para falar comigo sobre uma solução."
                  </div>
                </div>
              )}

              {/* Message 2: HERMES */}
              {currentStep >= 1 && (
                <div className="flex flex-col items-end animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> HERMES AGENT
                  </span>
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#161820] border border-white/[0.15] px-4 py-3 text-sm text-zinc-100 font-normal shadow-md">
                    "Claro. Antes de encaminhar, posso entender rapidamente o que você procura?"
                  </div>
                </div>
              )}

              {/* Message 3: Cliente */}
              {currentStep >= 2 && (
                <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-1">CLIENTE</span>
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.08] px-4 py-3 text-sm text-zinc-200 font-light">
                    "Estou procurando uma solução para automatizar o atendimento da minha empresa."
                  </div>
                </div>
              )}

              {/* Cognitive Analysis Pills */}
              {currentStep >= 3 && (
                <div className="py-2 space-y-2 animate-in fade-in duration-500">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-zinc-300" />
                    <span>HERMES · Processamento Operacional</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3" /> CONTEXTO IDENTIFICADO
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3" /> INTERESSE DETECTADO
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3" /> OPORTUNIDADE QUALIFICADA
                    </span>
                  </div>
                </div>
              )}

              {/* Message 4: HERMES final response */}
              {currentStep >= 4 && (
                <div className="flex flex-col items-end animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> HERMES AGENT
                  </span>
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#161820] border border-white/[0.15] px-4 py-3 text-sm text-zinc-100 font-normal shadow-md">
                    "Entendi. Vou encaminhar essas informações para a equipe responsável."
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Progress Bar */}
            <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between font-mono text-xs text-zinc-500">
              <span>Etapa {Math.min(currentStep + 1, 5)} de 5</span>
              <span className="text-zinc-400">Latência do agente: 120ms</span>
            </div>
          </div>

          {/* Right Column: Live Generated Opportunity Object */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* The Generated Opportunity Card */}
            <div className={`rounded-3xl p-8 transition-all duration-500 border relative overflow-hidden ${
              currentStep >= 5
                ? 'bg-[#0f1118] border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(255,255,255,0.08)]'
                : 'bg-[#08090c]/70 border-white/[0.06] opacity-75'
            }`}>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-bold">
                    NOVO LEAD GERADO
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.06] text-zinc-300 border border-white/[0.06]">
                  ID #H-9402
                </span>
              </div>

              {/* Data fields */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">
                    INTERESSE PRINCIPAL
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    Automação de atendimento
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">
                      PRIORIDADE
                    </div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">
                      Alta (P1)
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">
                      STATUS
                    </div>
                    <div className="text-sm font-medium text-zinc-200 mt-0.5">
                      Qualificado
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">
                    PRÓXIMA AÇÃO DA EQUIPE
                  </div>
                  <div className="text-sm font-semibold text-zinc-100 mt-0.5 flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    Contato comercial imediato
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Destino: CRM & Notificação Equipe</span>
                <span className="text-white font-medium">Sincronizado</span>
              </div>
            </div>

            {/* Closing statement */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] text-center">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mb-1">
                O IMPACTO
              </div>
              <div className="font-display text-2xl font-bold text-white tracking-tight">
                "Da conversa para a ação."
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-light">
                O cliente foi atendido em segundos, a intenção foi destrinchada e a equipe recebeu a oportunidade pronta para conversão.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
