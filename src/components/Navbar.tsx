import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cx } from "../lib/cx";
import { Logo } from "./Logo";
import { WhatsAppCta } from "./WhatsAppCta";

const LINKS = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Aplicações", href: "#aplicacoes" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Navegação principal"
          className={cx(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5",
            scrolled
              ? "border border-white/[0.08] bg-[#0a0a0d]/80 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              : "border border-transparent bg-transparent",
          )}
        >
          <a href="#inicio" className="flex items-center" aria-label="HERMES Agent — início">
            <Logo variant="lockup" iconClassName="h-7 w-7" wordmarkClassName="h-4" />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-[13px] text-zinc-400 transition-colors duration-200 hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <WhatsAppCta variant="light" size="md" icon={false} className="px-4 py-2 text-xs">
              Quero conhecer
            </WhatsAppCta>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/[0.08] bg-[#0a0a0d]/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden">
            <div className="flex flex-col">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <WhatsAppCta
                  variant="wa"
                  size="md"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Quero conhecer o HERMES
                </WhatsAppCta>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
