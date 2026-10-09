import { cx } from "../lib/cx";

/**
 * Marca oficial do HERMES.
 * Usa exclusivamente os assets oficiais preservados:
 *  - /hermes-icon-transparent.png  (isotipo geométrico)
 *  - /hermes-logo-transparent.png  (logotipo horizontal)
 * Nunca redesenha nem distorce o símbolo.
 */
type LogoVariant = "mark" | "wordmark" | "lockup";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
  title?: string;
}

export function Logo({
  variant = "lockup",
  className,
  iconClassName,
  wordmarkClassName,
  title = "HERMES Agent",
}: LogoProps) {
  if (variant === "mark") {
    return (
      <img
        src="/hermes-icon-transparent.png"
        alt={title}
        className={cx("object-contain", iconClassName ?? "h-8 w-8", className)}
        draggable={false}
      />
    );
  }

  if (variant === "wordmark") {
    return (
      <img
        src="/hermes-logo-transparent.png"
        alt={title}
        className={cx("object-contain", wordmarkClassName ?? "h-6", className)}
        draggable={false}
      />
    );
  }

  return (
    <span className={cx("inline-flex items-center gap-2.5", className)}>
      <img
        src="/hermes-icon-transparent.png"
        alt=""
        aria-hidden="true"
        className={cx("object-contain", iconClassName ?? "h-7 w-7")}
        draggable={false}
      />
      <img
        src="/hermes-logo-transparent.png"
        alt={title}
        className={cx("object-contain", wordmarkClassName ?? "h-5")}
        draggable={false}
      />
    </span>
  );
}
