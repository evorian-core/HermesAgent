import React from 'react';
import { PLANS, WHATSAPP_TIER_URL } from '../constants/data';
import { Check, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section id="planos" className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] bg-[#050507]">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-5">
            DIMENSIONAMENTO DE PROJETO
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Comece no seu ritmo.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-xl mx-auto">
            Planos desenhados para acompanhar o amadurecimento tecnológico da sua empresa, desde a primeira automação até grandes arquiteturas corporativas.
          </p>
        </div>

        {/* 3 Luxury Architectural Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 border ${
                  isPopular
                    ? 'bg-[#0f1118] border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.06)] -translate-y-2'
                    : 'bg-[#090a0d]/80 border-white/[0.08] hover:border-white/20 hover:bg-[#0c0d12]'
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>MAIS ESCOLHIDO</span>
                  </div>
                )}

                <div>
                  {/* Plan Top */}
                  <div className="pb-6 mb-6 border-b border-white/[0.07]">
                    <h3 className="font-display text-2xl font-bold text-white tracking-wide mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed min-h-[36px]">
                      {plan.description}
                    </p>

                    {/* Consultation Pricing Label */}
                    <div className="mt-6 pt-4 border-t border-white/[0.05]">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                        INVESTIMENTO
                      </div>
                      <div className="font-display text-2xl font-bold text-white tracking-tight mt-1">
                        Consulte nossa equipe
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">
                        Dimensionado por volume e escopo
                      </div>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest mb-2">
                      INCLUI NESTA CONFIGURAÇÃO:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          isPopular ? 'bg-white text-black' : 'bg-white/[0.08] text-zinc-300'
                        }`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-xs text-zinc-200 font-light leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <a
                    href={WHATSAPP_TIER_URL(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-semibold text-xs tracking-wider transition-all duration-300 ${
                      isPopular
                        ? 'bg-white text-black hover:bg-zinc-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]'
                        : 'bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/[0.1]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Subtext & Security */}
        <div className="text-center font-mono text-xs text-zinc-400 max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-zinc-400" />
          <span>Projetos com acompanhamento e engenharia de inteligência contínua pela OMNIA.</span>
        </div>

      </div>
    </section>
  );
};
