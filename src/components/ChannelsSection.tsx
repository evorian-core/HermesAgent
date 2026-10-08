import React from 'react';
import { MessageCircle, Globe, Smartphone, Database, Terminal, SlidersHorizontal, Info } from 'lucide-react';

export const ChannelsSection: React.FC = () => {
  const channels = [
    {
      title: 'WhatsApp',
      category: 'MENSAGERIA DIRETA',
      description: 'Onde o cliente já conversa todos os dias. Atendimento imediato, formal ou descontraído, sem filas.',
      icon: MessageCircle,
      status: 'Canal Primário',
    },
    {
      title: 'Website',
      category: 'EXPERIÊNCIA EMBUTIDA',
      description: 'Widgets flutuantes ou interfaces conversacionais integradas nativamente à navegação da sua página.',
      icon: Globe,
      status: 'Web Embed',
    },
    {
      title: 'Canais Digitais',
      category: 'PONTOS DE CONTATO',
      description: 'Presença unificada em pontos de diálogo digital onde seu público procura respostas sobre sua marca.',
      icon: Smartphone,
      status: 'Multicanal',
    },
    {
      title: 'CRM',
      category: 'GESTÃO COMERCIAL',
      description: 'Alimentação contínua de leads, enriquecimento de contatos e atualização de estágios no funil.',
      icon: Database,
      status: 'Sincronização',
    },
    {
      title: 'Ferramentas Internas',
      category: 'ROTINA DE EQUIPE',
      description: 'Notificações estruturadas para operadores, gerentes e consultores em seus canais de trabalho diário.',
      icon: Terminal,
      status: 'Fluxo Operacional',
    },
    {
      title: 'Outros Canais Configuráveis',
      category: 'EXPANSÃO SOB DEMANDA',
      description: 'Pontos de conexão desenvolvidos e adaptados conforme as particularidades arquiteturais da sua empresa.',
      icon: SlidersHorizontal,
      status: 'Sob Medida',
    },
  ];

  return (
    <section className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] bg-[#07070a]">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-5">
            CONECTIVIDADE MULTICANIS
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Seus clientes já estão conversando.{' '}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              O HERMES pode estar lá.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            Esteja presente nos pontos de contato onde o diálogo já acontece, unificando a inteligência e a velocidade de resposta da sua marca.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.title}
                className="group relative rounded-3xl bg-[#0a0c10]/80 border border-white/[0.07] p-8 hover:border-white/20 hover:bg-[#0f1118] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.05]">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                      {channel.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] text-zinc-300 group-hover:bg-white group-hover:text-black flex items-center justify-center transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white tracking-tight mb-2">
                    {channel.title}
                  </h3>

                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {channel.status}
                  </span>
                  <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    Integrável
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Critical Disclaimer Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3 text-xs font-mono text-zinc-400 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>
            * Integrações e canais são definidos de acordo com o escopo e a configuração técnica de cada projeto.
          </span>
        </div>

      </div>
    </section>
  );
};
