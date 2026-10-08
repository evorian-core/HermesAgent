import React, { useState } from 'react';
import { ADAPTATION_SECTORS } from '../constants/data';
import { Sliders, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Terminal } from 'lucide-react';

export const AdaptationSection: React.FC = () => {
  const [activeSectorId, setActiveSectorId] = useState<string>('vendas');

  const activeSector = ADAPTATION_SECTORS.find((s) => s.id === activeSectorId) || ADAPTATION_SECTORS[0];

  return (
    <section id="adaptacao" className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] bg-[#07070a]">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Headline */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-6">
            ARQUITETURA CONFIGURÁVEL
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Você não se adapta ao HERMES.{' '}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              O HERMES se adapta a você.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            Cada departamento possui seus próprios objetivos, dados e vocabulário. O HERMES reconfigura seus pesos cognitivos para responder com precisão cirúrgica em cada setor.
          </p>
        </div>

        {/* Sector Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {ADAPTATION_SECTORS.map((sector) => {
            const isSelected = activeSector.id === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSectorId(sector.id)}
                className={`px-5 py-3 rounded-xl font-mono text-xs tracking-wider transition-all duration-200 border ${
                  isSelected
                    ? 'bg-white text-black font-semibold border-white shadow-[0_0_25px_rgba(255,255,255,0.2)]'
                    : 'bg-white/[0.03] text-zinc-400 border-white/[0.06] hover:text-white hover:border-white/15'
                }`}
              >
                {sector.title}
              </button>
            );
          })}
        </div>

        {/* Dynamic Multi-Sector Configuration Matrix */}
        <div className="rounded-3xl bg-[#0a0c10] border border-white/[0.1] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl -z-10" />

          {/* Matrix Top Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-white/[0.07] gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 mb-1">
                <Sliders className="w-3.5 h-3.5 text-zinc-300" />
                <span>PERFIL ATIVO: {activeSector.title}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeSector.subtitle}
              </h3>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] font-mono text-xs text-zinc-400 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Agente Ajustado</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: What HERMES Identifies */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4">
                  O HERMES IDENTIFICA NESTE CENÁRIO:
                </h4>
                <div className="space-y-3">
                  {activeSector.identifies.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] transition-colors hover:border-white/15"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-200 font-light leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action output summary */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="font-mono text-[11px] text-zinc-400 uppercase tracking-wider mb-1">
                  AÇÃO OPERACIONAL DISPARADA
                </div>
                <div className="text-sm text-zinc-100 font-normal">
                  {activeSector.action}
                </div>
              </div>
            </div>

            {/* Right: Live Interactive Cognitive Simulation */}
            <div className="lg:col-span-7 bg-[#050608] rounded-2xl border border-white/[0.08] p-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] font-mono text-xs text-zinc-400">
                <span>SIMULAÇÃO DE ENTRADA & SÍNTESE</span>
                <span>SETOR: {activeSector.title}</span>
              </div>

              {/* Incoming Customer Input */}
              <div className="space-y-2">
                <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                  MENSAGEM DO CLIENTE
                </div>
                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.07] text-sm text-zinc-200 font-light italic">
                  "{activeSector.sampleInput}"
                </div>
              </div>

              {/* Internal Cognitive Synthesis */}
              <div className="p-4 rounded-xl bg-[#0f1118] border border-white/[0.1] space-y-3">
                <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
                  <span className="flex items-center gap-1.5 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    RESPOSTA E ESTRUTURAÇÃO GERADA
                  </span>
                  <span>TEMPO: 0.14s</span>
                </div>

                <div className="text-sm text-zinc-100 font-medium leading-relaxed">
                  {activeSector.sampleOutput}
                </div>
              </div>

              {/* Parameter bars */}
              <div className="pt-2 border-t border-white/[0.05] grid grid-cols-2 gap-4 text-[11px] font-mono text-zinc-400">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Aderência às regras</span>
                    <span className="text-white">99.8%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[99.8%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>Assertividade</span>
                    <span className="text-white">100%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[100%]" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
