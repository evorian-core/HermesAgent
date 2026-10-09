import { Check } from "lucide-react";
import { cx } from "../lib/cx";
import { PLANS, WHATSAPP_TIER_URL } from "../constants/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { WhatsAppCta } from "./WhatsAppCta";

export function PricingSection() {
  return (
    <section
      id="planos"
      className="relative border-t border-white/[0.05] px-4 py-28 sm:px-6 lg:px-8 lg:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow="Planos"
          title="Comece no seu ritmo."
          intro="Configurações que acompanham o amadurecimento da sua operação, da primeira automação a arquiteturas sob medida. O investimento é dimensionado por volume e escopo."
        />

        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const featured = plan.id === "business";
            return (
              <Reveal key={plan.id} delay={i * 0.08} className="h-full">
                <div
                  className={cx(
                    "flex h-full flex-col justify-between rounded-2xl p-7 transition-colors duration-300 sm:p-8",
                    featured
                      ? "border border-white/25 bg-[#0f1118] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)]"
                      : "border border-white/[0.08] bg-[#090a0d]/70 hover:border-white/15",
                  )}
                >
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-wide text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-2.5 text-sm font-light leading-relaxed text-zinc-400">
                      {plan.description}
                    </p>

                    <div className="mt-6 border-t border-white/[0.06] pt-5">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                        Investimento
                      </div>
                      <div className="mt-1 font-display text-lg font-semibold text-white">
                        Sob consulta
                      </div>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span
                            className={cx(
                              "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                              featured ? "bg-white text-black" : "bg-white/[0.08] text-zinc-300",
                            )}
                          >
                            <Check className="h-2.5 w-2.5" />
                          </span>
                          <span className="text-sm font-light leading-snug text-zinc-300">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-white/[0.06] pt-6">
                    {featured ? (
                      <WhatsAppCta
                        href={WHATSAPP_TIER_URL(plan.name)}
                        variant="wa"
                        size="md"
                        className="w-full"
                      >
                        {plan.ctaText}
                      </WhatsAppCta>
                    ) : (
                      <WhatsAppCta
                        href={WHATSAPP_TIER_URL(plan.name)}
                        variant="ghost"
                        size="md"
                        icon={false}
                        className="w-full"
                      >
                        {plan.ctaText}
                      </WhatsAppCta>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
