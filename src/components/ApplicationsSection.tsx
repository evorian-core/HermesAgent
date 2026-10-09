import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cx } from "../lib/cx";
import { APPLICATIONS } from "../constants/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ApplicationsSection() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(APPLICATIONS[0].id);
  const active = APPLICATIONS.find((a) => a.id === activeId) ?? APPLICATIONS[0];

  return (
    <section
      id="aplicacoes"
      className="relative border-t border-white/[0.05] px-4 py-28 sm:px-6 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Aplicações"
          title={
            <>
              Feito para a operação <span className="text-metallic">do dia a dia.</span>
            </>
          }
          intro="Situações concretas em que um agente configurável apoia o time. Os exemplos abaixo são ilustrativos do que o HERMES pode organizar em cada contexto."
        />

        <Reveal className="mt-14">
          <div role="tablist" aria-label="Setores de aplicação" className="flex flex-wrap gap-2">
            {APPLICATIONS.map((a) => {
              const selected = a.id === activeId;
              return (
                <button
                  key={a.id}
                  type="button"
                  role="tab"
                  id={`tab-${a.id}`}
                  aria-selected={selected}
                  aria-controls="sector-panel"
                  onClick={() => setActiveId(a.id)}
                  className={cx(
                    "rounded-full border px-4 py-2 font-mono text-xs tracking-wider transition-all duration-200",
                    selected
                      ? "border-white bg-white text-black"
                      : "border-white/[0.1] bg-white/[0.02] text-zinc-400 hover:border-white/25 hover:text-white",
                  )}
                >
                  {a.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        <motion.div
          key={active.id}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          id="sector-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7">
            <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
              Mensagem do cliente
            </div>
            <p className="mt-4 text-lg font-light leading-relaxed text-zinc-200">“{active.scenario}”</p>
            <div className="mt-6 border-t border-white/[0.06] pt-4 text-sm text-zinc-400">
              {active.subtitle}
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.12] bg-[#0f1118] p-7">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-wa" /> Como o HERMES organiza
            </div>
            <p className="mt-4 text-base leading-relaxed text-zinc-100">{active.outcome}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
