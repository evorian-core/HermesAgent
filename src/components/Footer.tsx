import React from 'react';
import { WHATSAPP_URL } from '../constants/data';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#040406] border-t border-white/[0.06] text-zinc-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-black border border-white/20 flex items-center justify-center">
                <img src="/hermes-icon.png" alt="HERMES" className="w-4 h-4 object-contain" />
              </div>
              <span className="font-display font-bold text-white tracking-[0.2em] text-sm">
                HERMES AGENT
              </span>
            </div>

            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Plataforma de agentes de inteligência artificial configuráveis para empresas. Não apenas respondemos. Nós entendemos e agimos.
            </p>

            <div className="font-mono text-[11px] text-zinc-400">
              by OMNIA · EVORIAN
            </div>
          </div>

          {/* Links 1 */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-medium">
              Navegação
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#capacidades" className="hover:text-white transition-colors">Produto</a></li>
              <li><a href="#adaptacao" className="hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#o-problema" className="hover:text-white transition-colors">Como funciona</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-medium">
              Conexão
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Links 3: Legal */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-medium">
              Conformidade
            </div>
            <ul className="space-y-2 text-xs">
              <li><span className="cursor-default hover:text-white transition-colors">Termos de Uso</span></li>
              <li><span className="cursor-default hover:text-white transition-colors">Privacidade & LGPD</span></li>
              <li><span className="text-zinc-400">Ambiente auditável & criptografado</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-400 gap-4">
          <div>
            Copyright © 2026 EVORIAN. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>OMNIA Intelligence Division</span>
            <span>·</span>
            <span>Curitiba, Brasil</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
