import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, ShieldCheck } from 'lucide-react';
import { WHATSAPP_URL } from '../constants/data';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Problema', href: '#o-problema' },
    { label: 'Diferencial', href: '#diferencial' },
    { label: 'Capacidades', href: '#capacidades' },
    { label: 'Adaptação', href: '#adaptacao' },
    { label: 'Em Ação', href: '#em-acao' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
        <nav
          className={`mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 border ${
            scrolled
              ? 'bg-[#0a0a0d]/85 backdrop-blur-xl border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
              : 'bg-[#0d0e12]/50 backdrop-blur-md border-white/[0.04]'
          }`}
          aria-label="Navegação principal"
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-black/80 border border-white/15 overflow-hidden transition-all duration-300 group-hover:border-white/40">
              <img
                src="/hermes-icon.png"
                alt="HERMES Icon"
                className="w-5 h-5 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold tracking-[0.22em] text-sm text-white uppercase">
                  HERMES
                </span>
                <span className="text-[10px] tracking-widest px-1.5 py-0.5 rounded bg-white/[0.07] text-zinc-300 font-mono font-medium border border-white/[0.06]">
                  AGENT
                </span>
              </div>
              <span className="text-[9px] tracking-wider text-zinc-400 font-mono uppercase">
                by OMNIA · EVORIAN
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 text-[13px] text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action & Status */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
              </span>
              <span>Online · v2.4</span>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black text-xs font-semibold tracking-wide transition-all duration-200 hover:bg-zinc-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-[0.98]"
            >
              <span>Quero conhecer</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white text-black text-xs font-semibold"
            >
              Contato
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#0d0e12]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  HERMES Agent Online
                </span>
                <span className="text-[10px] text-zinc-500">OMNIA · EVORIAN</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/[0.06]">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-colors"
                >
                  <span>Quero conhecer o HERMES</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
