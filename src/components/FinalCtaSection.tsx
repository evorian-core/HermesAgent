import { motion, useReducedMotion } from "framer-motion";
import { BRAND } from "../constants/data";
import { Logo } from "./Logo";
import { WhatsAppCta } from "./WhatsAppCta";

const EASE = [0.16, 1, 0.3, 1] as const;

export function FinalCtaSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-white/[0.05] bg-[#030304] px-4 py-32 text-center sm:px-6 lg:px-8 lg:py-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[150px]"
      />
      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 flex justify-center"
        >
          <Logo variant="wordmark" wordmarkClassName="h-7" />
        </motion.div>

        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-white text-balance sm:text-5xl lg:text-6xl"
        >
          Pronto para colocar um agente trabalhando pelo seu negócio?
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg"
        >
          Converse com a nossa equipe e descubra como o HERMES pode ser configurado para a sua
          operação.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-10 flex justify-center"
        >
          <WhatsAppCta variant="wa" size="lg">
            Conversar no WhatsApp
          </WhatsAppCta>
        </motion.div>

        <div className="mt-16 flex flex-col items-center gap-1.5">
          <span className="font-display text-sm font-bold tracking-[0.2em] text-white">
            {BRAND.company}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            divisão da {BRAND.parent}
          </span>
        </div>
      </div>
    </section>
  );
}
