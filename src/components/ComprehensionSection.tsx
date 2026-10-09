import { CAPABILITIES, UNDERSTANDING_STEPS } from "../constants/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ComprehensionSection() {
  return (
    <section
      id="como-funciona"
      className="relative border-t border-white/[0.05] px-4 py-28 sm:px-6 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Como o HERMES entende"
          title={
            <>
              Uma conversa não deveria terminar{" "}
              <span className="text-metallic">em uma resposta.</span>
            </>
          }
          intro="Todos os dias chegam perguntas, pedidos e oportunidades. O desafio não é apenas responder — é compreender o que fazer em seguida. O HERMES percorre esse caminho:"
        />

        {/* Ciclo: Mensagem → Contexto → Decisão → Ação */}
        <div className="relative mt-20">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[13px] hidden h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent lg:block"
          />
          <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {UNDERSTANDING_STEPS.map((step, i) => (
              <Reveal key={step.id} delay={i * 0.08}>
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-[#050507]">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    </span>
                    <span className="font-mono text-xs text-zinc-600">{step.index}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm font-light leading-relaxed text-zinc-400">
                    {step.summary}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Capacidades — lista tipográfica, não cartões */}
        <div className="mt-24">
          <Reveal>
            <div className="mb-8 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">
              O que o agente faz
            </div>
          </Reveal>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.05] sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.05}>
                <div className="h-full bg-[#08090c] p-7">
                  <dt className="font-display text-lg font-semibold text-white">{cap.title}</dt>
                  <dd className="mt-2 text-sm font-light leading-relaxed text-zinc-400">
                    {cap.description}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
