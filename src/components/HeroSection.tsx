import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cx } from "../lib/cx";
import { Logo } from "./Logo";
import { WhatsAppCta } from "./WhatsAppCta";
import { BRAND, DEMO_BEATS, DEMO_MARKERS } from "../constants/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  // Autoplay da conversa ilustrativa. Em movimento reduzido, mostra tudo.
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setStep((s) => (s >= DEMO_BEATS.length ? 0 : s + 1));
    }, 2000);
    return () => window.clearInterval(id);
  }, [reduce]);

  const count = reduce ? DEMO_BEATS.length : step;
  const visible = DEMO_BEATS.slice(0, count);
  const showMarkers = count >= 3;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pb-32 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[560px] w-[960px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[150px]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
        {/* ---------- Coluna editorial ---------- */}
        <div className="lg:col-span-7">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-9"
          >
            <Logo variant="wordmark" wordmarkClassName="h-6" />
          </motion.div>

          <h1 className="font-display text-[2.6rem] font-bold leading-[1.03] tracking-[-0.035em] text-white sm:text-6xl xl:text-[4.6rem]">
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="block"
            >
              {BRAND.taglineLead}
            </motion.span>
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
              className="text-metallic mt-1 block"
            >
              {BRAND.taglineTail}
            </motion.span>
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: EASE }}
            className="mt-7 max-w-xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg"
          >
            Um agente de inteligência artificial que atende seus clientes, compreende o contexto
            de cada conversa e organiza as informações para a sua equipe agir.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <WhatsAppCta variant="wa" size="lg">
              Conversar no WhatsApp
            </WhatsAppCta>
            <a
              href="#como-funciona"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-6 py-4 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              <span>Ver como funciona</span>
              <ChevronDown className="h-4 w-4 text-zinc-500 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-zinc-300" />
            </a>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-600"
          >
            {BRAND.company} · divisão da {BRAND.parent}
          </motion.p>
        </div>

        {/* ---------- Demonstração viva (ilustrativa) ---------- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-2 -z-10 rounded-[28px] bg-gradient-to-tr from-white/[0.07] via-transparent to-white/[0.03] blur-2xl"
            />
            <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#12141c]/90 to-[#08090c]/90 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <Logo variant="mark" iconClassName="h-5 w-5" />
                  <span className="text-[13px] font-semibold text-white">HERMES Agent</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Demonstração ilustrativa
                </span>
              </div>

              <div
                aria-live="polite"
                className="flex min-h-[300px] flex-col justify-end gap-3.5 p-5 sm:min-h-[330px]"
              >
                {visible.map((beat, i) => (
                  <motion.div
                    key={`${beat.from}-${i}`}
                    initial={reduce ? false : { opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className={cx(
                      "flex max-w-[86%] flex-col",
                      beat.from === "hermes" ? "self-end items-end" : "self-start items-start",
                    )}
                  >
                    {beat.from === "hermes" ? (
                      <div className="rounded-2xl rounded-tr-sm border border-white/[0.14] bg-[#181b24] px-4 py-2.5 text-sm leading-relaxed text-zinc-100 shadow-md">
                        {beat.text}
                      </div>
                    ) : (
                      <div className="rounded-2xl rounded-tl-sm border border-white/[0.08] bg-white/[0.05] px-4 py-2.5 text-sm font-light leading-relaxed text-zinc-300">
                        {beat.text}
                      </div>
                    )}
                  </motion.div>
                ))}

                {showMarkers && (
                  <motion.div
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mt-1 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-3"
                  >
                    {DEMO_MARKERS.map((m) => (
                      <span
                        key={m}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] text-zinc-400"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-wa" />
                        {m}
                      </span>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
