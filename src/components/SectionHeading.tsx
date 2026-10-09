import type { ReactNode } from "react";
import { cx } from "../lib/cx";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cx("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-white text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base font-light leading-relaxed text-zinc-400 sm:text-lg">{intro}</p>
      )}
    </Reveal>
  );
}
