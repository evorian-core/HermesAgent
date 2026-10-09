import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cx } from "../lib/cx";
import { CONFIGURATION } from "../constants/data";
import { SectionHeading } from "./SectionHeading";

export function ConfigurationSection() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(CONFIGURATION[0].id);
  const active = CONFIGURATION.find((c) => c.id === activeId) ?? CONFIGURATION[0];

  return (
    <section
      id="configuracao"
      className="relative border-t border-white/[0.05] bg-[#07070a] px-4 py-28 sm:px-6 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Configuração"
          title={
            <>
              Você não se adapta ao HERMES.{" "}
              <span className="text-metallic">O HERMES se adapta a você.</span>
            </>
          }
          intro="Cada empresa opera do seu jeito. O HERMES é configurado para respeitar o tom, as informações e as regras do seu negócio."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-2">
              {CONFIGURATION.map((c, i) => {
                const selected = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveId(c.id)}
                    aria-pressed={selected}
                    className={cx(
                      "group flex items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all duration-200",
                      selected
                        ? "border-white/25 bg-white/[0.04]"
                        : "border-white/[0.06] hover:border-white/15 hover:bg-white/[0.02]",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-zinc-600">
                        0{i + 1}
                      </span>
                      <span
                        className={cx(
                          "font-display text-sm font-semibold tracking-wide",
                          selected ? "text-white" : "text-zinc-300 group-hover:text-white",
                        )}
                      >
                        {c.name}
                      </span>
                    </span>
                    <span
                      className={cx(
                        "h-1.5 w-1.5 rounded-full transition-colors",
                        selected ? "bg-wa" : "bg-white/10",
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="h-full rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0f1118]/80 to-[#08090c]/80 p-7 sm:p-9"
            >
              <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                {active.name}
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">{active.name}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-zinc-400">
                {active.description}
              </p>
              <ul className="mt-7 space-y-3">
                {active.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-zinc-200">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-wa" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
