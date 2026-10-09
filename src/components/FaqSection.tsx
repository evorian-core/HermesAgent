import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../constants/data";
import { SectionHeading } from "./SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FaqSection() {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => setOpenIndex((cur) => (cur === idx ? null : idx));

  return (
    <section
      id="faq"
      className="relative border-t border-white/[0.05] bg-[#07070a] px-4 py-28 sm:px-6 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          align="center"
          eyebrow="Dúvidas frequentes"
          title="Perguntas & Respostas."
          intro="Entenda como o HERMES opera, como é implementado e qual o impacto na rotina da sua equipe."
        />

        <div className="mt-14 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    id={`faq-button-${idx}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${idx}`}
                    onClick={() => toggle(idx)}
                    className="group flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-medium text-white transition-colors group-hover:text-zinc-300 sm:text-xl">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isOpen
                          ? "rotate-180 border-white bg-white text-black"
                          : "border-white/10 bg-white/[0.02] text-zinc-400"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-button-${idx}`}
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pr-12 pb-6 text-sm font-light leading-relaxed text-zinc-400 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
