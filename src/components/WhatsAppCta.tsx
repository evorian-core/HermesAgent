import type { ReactNode } from "react";
import { cx } from "../lib/cx";
import { WHATSAPP_URL } from "../constants/data";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.115-.198.057-.371-.058-.52-.115-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

type Variant = "wa" | "light" | "ghost";

interface WhatsAppCtaProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: "md" | "lg";
  className?: string;
  icon?: boolean;
  onClick?: () => void;
}

const BASE =
  "group inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold tracking-wide transition-all duration-300 active:scale-[0.98]";

const SIZES = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
} as const;

const VARIANTS: Record<Variant, string> = {
  wa: "bg-wa text-[#04140a] hover:bg-[#2fe172] hover:shadow-[0_0_34px_-4px_rgba(37,211,102,0.5)]",
  light:
    "bg-white text-black hover:bg-zinc-100 hover:shadow-[0_0_34px_-6px_rgba(255,255,255,0.35)]",
  ghost:
    "bg-white/[0.04] text-zinc-200 border border-white/[0.1] hover:text-white hover:bg-white/[0.07] hover:border-white/20 backdrop-blur-sm",
};

export function WhatsAppCta({
  children,
  href = WHATSAPP_URL,
  variant = "wa",
  size = "md",
  className,
  icon = true,
  onClick,
}: WhatsAppCtaProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cx(BASE, SIZES[size], VARIANTS[variant], className)}
    >
      {icon && variant === "wa" && <WhatsAppGlyph className="h-4 w-4 shrink-0" />}
      <span>{children}</span>
    </a>
  );
}
