import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Sparkles, Terminal, Activity, RotateCcw, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL } from '../constants/data';

export const HeroSection: React.FC = () => {
  // Step progression for the live hero cognitive agent simulation:
  // 0: Initial prompt
  // 1: Stage 1 reasoning
  // 2: Stage 2 reasoning
  // 3: HERMES answers part 1
  // 4: HERMES answers complete
  const [demoStep, setDemoStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setDemoStep(1), 1600);
    const timer2 = setTimeout(() => setDemoStep(2), 3400);
    const timer3 = setTimeout(() => setDemoStep(3), 5200);
    const timer4 = setTimeout(() => setDemoStep(4), 7200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const resetDemo = () => {
    setDemoStep(0);
    setTimeout(() => setDemoStep(1), 1200);
    setTimeout(() => setDemoStep(2), 2600);
    setTimeout(() => setDemoStep(3), 4200);
    setTimeout(() => setDemoStep(4), 5800);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Cinematic Headline & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] backdrop-blur-md mb-8 group hover:border-white/20 transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-300 font-semibold">
                HERMES AGENT
              </span>
              <span className="text-zinc-600">·</span>
              <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
                BY OMNIA · EVORIAN
              </span>
            </div>

            {/* Massive Headline */}
            <h1 className="font-display text-4xl sm:text-6xl xl:text-[76px] font-bold tracking-[-0.035em] text-white leading-[1.05] mb-7">
              Seu negócio conversa.{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                HERMES entende.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-zinc-400 leading-relaxed font-light mb-10">
              Um agente de inteligência artificial criado para atender clientes, compreender contexto e transformar conversas em ações.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-white text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-zinc-100 hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:scale-[1.01] active:scale-[0.98]"
              >
                <span>Quero conhecer o HERMES</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#o-problema"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/[0.04] text-zinc-300 hover:text-white border border-white/[0.08] hover:border-white/20 font-medium text-sm transition-all duration-300 backdrop-blur-sm hover:bg-white/[0.07]"
              >
                <span>Ver como funciona</span>
                <ChevronDown className="w-4 h-4 text-zinc-400 animate-bounce" />
              </a>
            </div>

            {/* Micro proof points */}
            <div className="mt-12 pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-6 max-w-lg w-full text-left">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-zinc-400">Objetivo</div>
                <div className="font-sans text-sm font-medium text-zinc-200 mt-1">Decisão & Ação</div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-zinc-400">Arquitetura</div>
                <div className="font-sans text-sm font-medium text-zinc-200 mt-1">Multi-Contextual</div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-zinc-400">Implementação</div>
                <div className="font-sans text-sm font-medium text-zinc-200 mt-1">Personalizada</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Cognitive Agent Interface */}
          <div className="lg:col-span-5 w-full relative">
            {/* Ambient Backlight glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-white/[0.08] via-transparent to-white/[0.04] blur-2xl -z-10" />

            {/* Modern OS Window Card */}
            <div className="relative rounded-2xl bg-[#090a0d]/90 border border-white/[0.1] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden">
              
              {/* Window Header / Status Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 border border-zinc-600/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 border border-zinc-600/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 border border-zinc-600/50" />
                  </div>
                  <div className="h-3 w-px bg-white/10 mx-1" />
                  <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium text-white">HERMES Agent</span>
                    <span className="text-zinc-500">|</span>
                    <span className="text-emerald-400/90">Online</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={resetDemo}
                    title="Reiniciar demonstração"
                    className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-[10px] text-zinc-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.05]">
                    RT-9ms
                  </span>
                </div>
              </div>

              {/* Chat Simulation Area */}
              <div className="p-5 sm:p-6 space-y-5 min-h-[380px] flex flex-col justify-start">
                
                {/* User Message */}
                <div className="flex flex-col items-end">
                  <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider mb-1.5">
                    USUÁRIO · EMPRESA
                  </div>
                  <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-white/[0.08] border border-white/[0.1] px-4 py-3 text-sm text-zinc-100 font-normal leading-relaxed">
                    "O que você pode fazer pela minha empresa?"
                  </div>
                </div>

                {/* HERMES Cognitive Processing States */}
                {demoStep >= 1 && (
                  <div className="space-y-2 py-1">
                    {/* Stage 1 */}
                    <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.04] px-3.5 py-2 rounded-xl transition-all duration-300">
                      {demoStep === 1 ? (
                        <Activity className="w-3.5 h-3.5 text-zinc-400 animate-spin" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                      <span className={demoStep === 1 ? "text-zinc-200" : "text-zinc-400"}>
                        Analisando sua necessidade e o contexto do seu negócio...
                      </span>
                    </div>

                    {/* Stage 2 */}
                    {demoStep >= 2 && (
                      <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.04] px-3.5 py-2 rounded-xl transition-all duration-300">
                        {demoStep === 2 ? (
                          <Activity className="w-3.5 h-3.5 text-zinc-400 animate-spin" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                        <span className={demoStep === 2 ? "text-zinc-200" : "text-zinc-400"}>
                          Identificando a melhor forma de transformar isso em ação...
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* HERMES Synthesized Response */}
                {demoStep >= 3 && (
                  <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 uppercase tracking-wider mb-1.5">
                      <div className="w-3.5 h-3.5 rounded bg-white text-black flex items-center justify-center font-bold text-[8px]">
                        H
                      </div>
                      <span className="text-white font-medium">HERMES</span>
                      <span className="text-zinc-400">· COGNIÇÃO CONCLUÍDA</span>
                    </div>

                    <div className="w-full rounded-2xl rounded-tl-sm bg-[#111317]/90 border border-white/[0.12] p-4 text-sm text-zinc-200 space-y-2.5 shadow-lg">
                      <div className="flex items-center gap-2 text-xs font-semibold text-white">
                        <span>"Entendi o cenário."</span>
                        <span className="text-zinc-400">→</span>
                        <span className="text-zinc-300">"Agora, vamos transformar isso em ação."</span>
                      </div>

                      {demoStep >= 4 && (
                        <div className="pt-2 border-t border-white/[0.06] text-xs text-zinc-300 leading-relaxed font-light">
                          "Eu posso fazer mais do que responder. Posso atender seus clientes, organizar conversas e identificar novas oportunidades — <strong className="text-white font-medium">automaticamente</strong>."
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Trigger Preview Badge */}
                {demoStep >= 4 && (
                  <div className="mt-auto pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-white/[0.05] animate-in fade-in duration-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Próxima ação: Encaminhamento operacional
                    </span>
                    <span className="text-zinc-400">Status: Disparado</span>
                  </div>
                )}
              </div>

              {/* Bottom Subtle Bar */}
              <div className="px-5 py-2.5 bg-black/40 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                <span>OMNIA COGNITIVE ENGINE</span>
                <span>ENTERPRISE SPEC v2.4</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
