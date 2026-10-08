import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Sparkles, Terminal, Cpu } from 'lucide-react';

export const DisappearingTechSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'simple' | 'complex'>('simple');

  // Automatically pulse or allow manual toggle
  return (
    <section className="relative py-36 sm:py-48 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] bg-[#050507] overflow-hidden">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-5">
            CONCEITO & EXPERIÊNCIA
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            A melhor tecnologia é aquela que simplesmente funciona.
          </h2>

          <div className="space-y-2 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            <p>O cliente não precisa saber como o HERMES funciona.</p>
            <p className="text-zinc-200 font-normal">Ele simplesmente conversa.</p>
            <p>E o HERMES transforma essa conversa em contexto, informação e ação.</p>
          </div>

          {/* Toggle button */}
          <div className="mt-8 flex items-center justify-center">
            <button
              onClick={() => setViewMode(viewMode === 'simple' ? 'complex' : 'simple')}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300 shadow-lg"
            >
              {viewMode === 'simple' ? (
                <>
                  <Eye className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Ver complexidade interna (Sob o Capô)</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Ver a experiência do cliente (Simplicidade)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Visual Transformation Frame */}
        <div className="relative min-h-[380px] sm:min-h-[420px] rounded-3xl bg-[#08090c] border border-white/[0.08] p-8 sm:p-14 flex items-center justify-center shadow-2xl transition-all duration-700 overflow-hidden">
          
          {viewMode === 'complex' ? (
            /* Complex Technical Engine View */
            <div className="w-full space-y-4 animate-in fade-in duration-500 font-mono text-xs text-zinc-400">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-zinc-400">
                <span>[ENGINE TRACE] :: EMBEDDINGS & NEURAL GRAPH PIPELINE</span>
                <span className="text-emerald-400">STATUS: ACTIVE COMPILATION</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="text-zinc-400 text-[10px]">VECTOR INDEX</div>
                  <div className="text-zinc-200">dim: 1536 · cosine similarity: 0.9412</div>
                  <div className="text-zinc-400 text-[10px]">tokens_processed: 8,421</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="text-zinc-400 text-[10px]">INTENT CLASSIFIER</div>
                  <div className="text-emerald-400">intent: "b2b_sales_qualify" (0.98)</div>
                  <div className="text-zinc-400 text-[10px]">fallbacks_active: 0</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="text-zinc-400 text-[10px]">EXECUTION RUNTIME</div>
                  <div className="text-zinc-200">latency: 114ms · tps: 94.2</div>
                  <div className="text-zinc-400 text-[10px]">memory_footprint: 42MB</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/[0.05] text-[11px] text-zinc-400 overflow-x-auto space-y-1">
                <div>{`{ "agent_id": "hermes-enterprise-v2", "context_window": 128000, "state": "converging" }`}</div>
                <div className="text-zinc-400">{`>>> Routing: Contextual semantic router -> CRM webhook trigger -> Human handoff scheduler`}</div>
              </div>

              <div className="text-center pt-2 text-[11px] text-zinc-400">
                Clique no botão acima para ver como o cliente percebe essa tecnologia.
              </div>
            </div>
          ) : (
            /* Pristine Simple Customer View */
            <div className="text-center space-y-6 animate-in fade-in zoom-in-95 duration-700">
              <div className="relative inline-flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center font-bold text-2xl shadow-[0_0_40px_rgba(255,255,255,0.25)]">
                  H
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-display text-4xl sm:text-6xl font-medium tracking-tight text-white">
                  "Olá. Como posso ajudar?"
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 pt-2">
                  Toda a complexidade resolvida em uma fração de segundo.
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
