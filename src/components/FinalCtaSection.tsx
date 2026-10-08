import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WHATSAPP_URL } from '../constants/data';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative py-40 sm:py-52 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#030305] overflow-hidden text-center">
      {/* Cinematic subtle spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-4xl relative z-10">
        
        {/* Brand Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>HERMES AGENT</span>
        </div>

        {/* Massive Headline */}
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-8">
          Pronto para colocar um agente trabalhando pelo seu negócio?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Converse com nossa equipe e descubra como o HERMES pode ser configurado para sua operação.
        </p>

        {/* Enormous CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white text-black font-semibold text-base tracking-wide transition-all duration-300 hover:bg-zinc-100 hover:shadow-[0_0_50px_rgba(255,255,255,0.35)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Quero conhecer o HERMES</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
        </div>

        {/* Attribution division info */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-display font-bold tracking-[0.2em] text-white text-sm">OMNIA</span>
          </div>
          <span className="font-mono text-[11px] tracking-widest text-zinc-400 uppercase">
            A division of EVORIAN
          </span>
        </div>

      </div>
    </section>
  );
};
