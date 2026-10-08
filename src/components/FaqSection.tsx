import React, { useState } from 'react';
import { FAQS } from '../constants/data';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] bg-[#07070a]">
      <div className="mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-5">
            DÚVIDAS FREQUENTES
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Perguntas & Respostas.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-xl mx-auto">
            Entenda como o HERMES opera, como é implementado e qual o impacto direto na rotina da sua equipe.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 sm:py-8 transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-6 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-medium text-white group-hover:text-zinc-300 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-white text-black border-white' : 'bg-white/[0.02] text-zinc-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-12 animate-in fade-in slide-in-from-top-1 duration-200">
                    <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
