import { ArrowUpRight } from "lucide-react";
import { BRAND, WHATSAPP_URL } from "../constants/data";
import { Logo } from "./Logo";

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#040406] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 border-b border-white/[0.06] pb-10 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <Logo variant="lockup" iconClassName="h-7 w-7" wordmarkClassName="h-4" />
            <p className="max-w-sm text-sm font-light leading-relaxed text-zinc-500">
              Plataforma de agentes de inteligência artificial configuráveis para empresas.
              Não apenas respondemos — entendemos e agimos.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#como-funciona"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Como funciona
            </a>
            <a
              href="#planos"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Planos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Falar no WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 font-mono text-[11px] text-zinc-600 sm:flex-row">
          <span>
            © {YEAR} {BRAND.parent}. Todos os direitos reservados.
          </span>
          <span>
            {BRAND.company} · {BRAND.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
