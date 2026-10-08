import React, { useState } from 'react';
import { CAPABILITIES } from '../constants/data';
import { MessagesSquare, Sparkles, FolderKanban, Network, TrendingUp, CheckCircle, ArrowUpRight } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  const getMicroDemo = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="mt-4 p-3.5 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-[11px] space-y-2">
            <div className="flex items-center justify-between text-zinc-400">
              <span>CANAL: WhatsApp API</span>
              <span className="text-emerald-400">LATÊNCIA: 180ms</span>
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-400">"Olá! Nosso time atende projetos personalizados. Posso entender sua demanda?"</span>
            </div>
            <div className="flex items-center gap-2 pt-1.5 border-t border-white/[0.05] text-[10px] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Consistência institucional: 100%</span>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="mt-4 p-3.5 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-[11px] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">SCORE ICP</span>
              <span className="text-white font-bold">96 / 100 · ALTO POTENCIAL</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[10px] text-zinc-400">
              <div>Urgência: Imediata</div>
              <div>Porte: 50+ colaboradores</div>
            </div>
            <div className="pt-1.5 border-t border-white/[0.05] text-[10px] text-emerald-400">
              ✓ Critérios de qualificação validados
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mt-4 p-3.5 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-[11px] space-y-1.5">
            <div className="text-zinc-400 text-[10px]">// REGISTRO SINTETIZADO</div>
            <div className="text-zinc-300">
              <span className="text-zinc-400">Demanda:</span> Implantação de agentes para SAC
            </div>
            <div className="text-zinc-300">
              <span className="text-zinc-400">Responsável:</span> Diretoria de Operações
            </div>
            <div className="text-[10px] text-zinc-400 pt-1">
              Sincronizado automaticamente com a base de dados
            </div>
          </div>
        );
      case 3:
        return (
          <div className="mt-4 p-3.5 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-[11px] space-y-2">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Pipeline de automação disparado:</span>
            </div>
            <div className="space-y-1 text-[10px] text-zinc-400 pl-3 border-l border-white/10">
              <div>1. Webhook emitido → CRM</div>
              <div>2. Notificação interna enviada</div>
              <div>3. Link de agendamento reservado</div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="mt-4 p-3.5 rounded-xl bg-black/60 border border-white/[0.08] font-mono text-[11px] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-emerald-400 font-semibold">OPORTUNIDADE QUENTE</span>
              <span className="text-zinc-400">VALOR ESTIMADO: B2B</span>
            </div>
            <div className="text-zinc-300 text-xs">
              Distribuído para: Consultor Especialista (SDR)
            </div>
            <div className="text-[10px] text-zinc-400">
              Tempo de resposta da equipe reduzido em 85%
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const icons = [MessagesSquare, Sparkles, FolderKanban, Network, TrendingUp];

  return (
    <section id="capacidades" className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] bg-[#050507]">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-4">
            CAPACIDADES OPERACIONAIS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-white leading-tight mb-6">
            Um agente para muito mais do que atendimento.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Desenvolvido pela OMNIA para atuar como um membro estratégico da sua operação: analisando cada interação com rigor, contexto e velocidade.
          </p>
        </div>

        {/* 5 Sophisticated Feature Cards with Microinteractions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = icons[idx];
            const isHovered = hoveredIdx === idx;
            const isWide = idx === 3 || idx === 4;

            return (
              <div
                key={cap.number}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`group relative rounded-3xl p-8 transition-all duration-300 border flex flex-col justify-between ${
                  isWide ? 'lg:col-span-1' : ''
                } ${
                  isHovered
                    ? 'bg-[#0f1117] border-white/25 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.03)] -translate-y-1'
                    : 'bg-[#0a0a0d]/80 border-white/[0.07] hover:border-white/15'
                }`}
              >
                <div>
                  {/* Top card bar */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.06]">
                    <span className="font-mono text-xs font-bold text-zinc-400 tracking-wider">
                      {cap.number} · {cap.tag}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isHovered ? 'bg-white text-black' : 'bg-white/[0.04] text-zinc-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                {/* Micro-interaction visual demonstration */}
                <div className="mt-8 pt-4 border-t border-white/[0.05]">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
                    <span>{cap.metricLabel}</span>
                    <span className="text-white font-semibold">{cap.metric}</span>
                  </div>
                  {getMicroDemo(idx)}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
