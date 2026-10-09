import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { cx } from "../lib/cx";
import { Logo } from "./Logo";
import { DEMO_BEATS, DEMO_MARKERS, DEMO_RECORD } from "../constants/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const EASE = [0.16, 1, 0.3, 1] as const;
const STAGES = ["Conversa", "Contexto", "Oportunidade", "Próximo passo"];
const BEATS_VISIBLE = [1, 3, 4, 4];
const FINAL = STAGES.length - 1;

export function DemonstrationSection() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    if (step >= FINAL) return;
    const id = window.setTimeout(() => setStep((s) => s + 1), 2600);
    return () => window.clearTimeout(id);
  }, [step, reduce]);

  const current = reduce ? FINAL : step;
  const beats = DEMO_BEATS.slice(0, BEATS_VISIBLE[current]);
  const showMarkers = current >= 2;

  return (
    <section
      id="demonstracao"
      className="relative overflow-hidden border-t border-white/[0.05] bg-[#07070a] px-4 py-28 sm:px-6 lg:px-8 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[150px]"
      />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Demonstração"
          title={
            <>
              Veja uma conversa se tornar <span className="text-metallic">um próximo passo.</span>
            </>
          }
          intro="Uma sequência ilustrativa de como o HERMES compreende o contexto, reconhece a oportunidade e organiza as informações para a equipe."
        />

        <Reveal className="mt-14">
          <ol className="mx-auto flex max-w-2xl items-center justify-between">
            {STAGES.map((label, i) => {
              const active = i === current;
              const done = i < current;
              return (
                <li key={label} className="flex flex-1 flex-col items-center gap-2">
                  <span
                    className={cx(
                      "h-1.5 w-1.5 rounded-full transition-colors duration-500",
                      done || active ? "bg-wa" : "bg-white/15",
                    )}
                  />
                  <span
                    className={cx(
                      "font-mono text-[10px] uppercase tracking-wider transition-colors duration-500 sm:text-[11px]",
                      active ? "text-white" : done ? "text-zinc-400" : "text-zinc-600",
                    )}
                  >
                    {label}
                  </span>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Conversa */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0f1118]/90 to-[#08090c]/90">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
                <div className="flex items-center gap-2.5">
                  <Logo variant="mark" iconClassName="h-5 w-5" />
                  <span className="text-[13px] font-semibold text-white">Atendimento</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Ilustrativo
                </span>
              </div>
              <div
                aria-live="polite"
                className="flex min-h-[360px] flex-col justify-end gap-3.5 p-5 sm:p-6"
              >
                {beats.map((beat, i) => (
                  <motion.div
                    key={`${beat.from}-${i}`}
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className={cx(
                      "flex max-w-[88%] flex-col",
                      beat.from === "hermes" ? "self-end items-end" : "self-start items-start",
                    )}
                  >
                    <span className="mb-1 font-mono text-[10px] uppercase tracking-wider text-zinc-600">
                      {beat.from === "hermes" ? "HERMES" : "Cliente"}
                    </span>
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

          {/* Registro organizado */}
          <div className="lg:col-span-5">
            <div
              className={cx(
                "rounded-2xl border p-6 transition-colors duration-500 sm:p-7",
                current >= FINAL
                  ? "border-white/25 bg-[#0f1118]"
                  : "border-white/[0.08] bg-[#0a0b0f]/70",
              )}
            >
              <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                  {DEMO_RECORD.title}
                </span>
                <span
                  className={cx(
                    "h-2 w-2 rounded-full transition-colors duration-500",
                    current >= FINAL ? "bg-wa" : "bg-white/15",
                  )}
                />
              </div>
              <div className="space-y-4">
                {DEMO_RECORD.fields.map((field, i) => {
                  const visible = current >= i + 1;
                  return (
                    <motion.div
                      key={field.label}
                      initial={false}
                      animate={{ opacity: visible ? 1 : 0.25 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                        {field.label}
                      </div>
                      <div className="mt-1 text-sm font-medium text-zinc-100">{field.value}</div>
                    </motion.div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setStep(0)}
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 font-mono text-xs text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Repetir demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
