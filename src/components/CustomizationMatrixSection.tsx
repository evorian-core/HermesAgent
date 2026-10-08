import React, { useState } from 'react';
import { Sliders, BookOpen, Target, GitFork, Shield, Cable, KeyRound, Check, Sparkles } from 'lucide-react';

export const CustomizationMatrixSection: React.FC = () => {
  const [selectedParam, setSelectedParam] = useState<string>('personalidade');

  const parameters = [
    {
      id: 'personalidade',
      name: 'PERSONALIDADE',
      icon: Sliders,
      badge: 'Linguagem',
      description: 'Definição da persona do agente: nível de formalidade, vocabulário corporativo, empatia e alinhamento com os valores da sua marca.',
      controls: [
        { label: 'Tom de Voz', value: 'Consultivo & Institucional' },
        { label: 'Nível de Formalidade', value: '85% (Equilibrado / Executivo)' },
        { label: 'Empatia & Acolhimento', value: 'Ativo com escuta atenta' },
      ],
    },
    {
      id: 'conhecimento',
      name: 'CONHECIMENTO',
      icon: BookOpen,
      badge: 'Dados',
      description: 'Ingestão da base técnica da empresa: manuais de produtos, políticas comerciais, tabelas de preço, materiais de suporte e FAQs.',
      controls: [
        { label: 'Base Documental', value: 'Manuais técnicos e diretrizes de vendas' },
        { label: 'Indexação Vetorial', value: 'Sincronizada em tempo real' },
        { label: 'Controle de Alucinação', value: 'Estrito (Zero inventividade)' },
      ],
    },
    {
      id: 'objetivos',
      name: 'OBJETIVOS',
      icon: Target,
      badge: 'Metas',
      description: 'Diretrizes de conversão do agente: qualificar leads, agendar demonstrações, sanar dúvidas técnicas ou guiar pagamentos.',
      controls: [
        { label: 'Prioridade Primária', value: 'Qualificação de Oportunidades ICP' },
        { label: 'Prioridade Secundária', value: 'Agendamento em agenda executiva' },
        { label: 'Métrica de Sucesso', value: 'Taxa de conversão de leads qualificados' },
      ],
    },
    {
      id: 'fluxos',
      name: 'FLUXOS',
      icon: GitFork,
      badge: 'Lógica',
      description: 'Árvores de decisão e ramificações operacionais sob medida para o roteiro comercial e de suporte da sua organização.',
      controls: [
        { label: 'Roteamento Condicional', value: 'Ativado por setor e urgência' },
        { label: 'Gatilho de Transbordo', value: 'Encaminhamento a consultor humano' },
        { label: 'Reserva de Fallback', value: 'Protocolo de segurança ativo' },
      ],
    },
    {
      id: 'regras',
      name: 'REGRAS',
      icon: Shield,
      badge: 'Governança',
      description: 'Limites éticos, políticas de privacidade (LGPD), horários de funcionamento e SLAs estritos de atendimento.',
      controls: [
        { label: 'Privacidade LGPD', value: 'Anonimização de dados sensíveis' },
        { label: 'SLA de Resposta', value: '< 2.0 segundos garantido' },
        { label: 'Filtro Regulatório', value: 'Conformidade setorial contínua' },
      ],
    },
    {
      id: 'integracoes',
      name: 'INTEGRAÇÕES',
      icon: Cable,
      badge: 'Conectividade',
      description: 'Pontos de contato com ferramentas de mercado: CRM, ERPs internos, mensageria e webhooks customizados.',
      controls: [
        { label: 'Pipeline de Dados', value: 'Webhooks bidirecionais' },
        { label: 'Alimentação CRM', value: 'Lead enriquecido em tempo real' },
        { label: 'Protocolo de Comunicação', value: 'REST API & WebSockets' },
      ],
    },
    {
      id: 'permissoes',
      name: 'PERMISSÕES',
      icon: KeyRound,
      badge: 'Acesso',
      description: 'Níveis de acesso de operadores, visualização de conversas, mascaramento de informações e trilha de auditoria completa.',
      controls: [
        { label: 'Trilha de Auditoria', value: 'Log completo com hash de segurança' },
        { label: 'Níveis de Acesso', value: 'Administrador / Gestor / Operador' },
        { label: 'Criptografia', value: 'AES-256 em trânsito e em repouso' },
      ],
    },
  ];

  const currentParam = parameters.find((p) => p.id === selectedParam) || parameters[0];

  return (
    <section className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 border-t border-white/[0.05] bg-[#07070a]">
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400 mb-5">
            PERSONALIZAÇÃO PROFUNDA
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Cada empresa tem uma conversa diferente.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto">
            Por isso, cada HERMES pode ser configurado de acordo com o negócio, seus objetivos, sua linguagem, suas informações e seus fluxos.
          </p>
        </div>

        {/* Fictional High-Tech Configuration Console */}
        <div className="rounded-3xl bg-[#090b0f] border border-white/[0.1] shadow-2xl overflow-hidden">
          
          {/* Console Top Titlebar */}
          <div className="px-6 py-4 bg-white/[0.02] border-b border-white/[0.07] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="font-mono text-xs text-zinc-300 font-medium">
                HERMES // CONSOLE DE PARÂMETROS OPERACIONAIS
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Ambiente: Produção Corporativa</span>
            </div>
          </div>

          {/* Console Body: Parameter Selectors + Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.07]">
            
            {/* Left Parameters Nav List */}
            <div className="lg:col-span-5 p-4 sm:p-6 space-y-2">
              <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest px-3 mb-3">
                PARÂMETROS DE GOVERNANÇA
              </div>

              {parameters.map((param) => {
                const Icon = param.icon;
                const isSelected = selectedParam === param.id;
                return (
                  <button
                    key={param.id}
                    onClick={() => setSelectedParam(param.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all duration-200 border ${
                      isSelected
                        ? 'bg-white text-black border-white shadow-md'
                        : 'bg-white/[0.015] text-zinc-400 border-white/[0.04] hover:border-white/15 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="font-display font-semibold text-xs tracking-wider">
                        {param.name}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isSelected ? 'bg-black/10 text-black' : 'bg-white/[0.04] text-zinc-400'
                      }`}
                    >
                      {param.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Active Parameter Inspector Panel */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-black/40">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-zinc-400">
                    INSPECTOR // {currentParam.name}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                    Sincronizado
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Configuração de {currentParam.name}
                </h3>

                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-8">
                  {currentParam.description}
                </p>

                <div className="space-y-4">
                  {currentParam.controls.map((ctrl, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <span className="font-mono text-xs text-zinc-400">
                        {ctrl.label}
                      </span>
                      <span className="font-sans text-xs font-semibold text-white bg-white/[0.06] px-3 py-1 rounded-lg border border-white/[0.08]">
                        {ctrl.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Modificações aplicadas sem reiniciar o agente</span>
                <span className="text-zinc-300">Latência zero de atualização</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
