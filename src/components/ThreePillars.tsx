import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Target, Database, PhoneCall, ArrowRight, Check, Zap, Layers, Sparkles, Filter, Users, DollarSign } from 'lucide-react';

interface ThreePillarsProps {
  onOpenDiagnostic: (planId?: string) => void;
}

export const ThreePillars: React.FC<ThreePillarsProps> = ({ onOpenDiagnostic }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'trafego' | 'crm' | 'vendas'>('all');

  const pillars = [
    {
      id: 'trafego',
      number: '01',
      title: 'Tráfego Pago Agressivo',
      subtitle: 'Meta Ads & Google Ads de Alta Performance',
      description: 'Chega de curtidas. Desenhamos máquinas de atração focadas em conversão imediata, encontrando o público certo no exato momento da decisão de compra.',
      tag: 'Atração',
      icon: Target,
      bullets: [
        'Segmentação cirúrgica por alta intenção de compra',
        'Domínio em Meta Ads & Google Ads',
        'Otimização brutal focada em redução de CAC',
        'Remarketing agressivo para recuperação de vendas',
        'Auditoria e escala semanal de ROI'
      ]
    },
    {
      id: 'crm',
      number: '02',
      title: 'Máquina de CRM',
      subtitle: 'Estruturação de Funil & Automação Inteligente',
      description: 'Acabe com o vazamento de leads. Estruturamos a fundação do seu comercial (Kommo, Pipefy, RD Station) para rastrear cada centavo e cada contato.',
      tag: 'Gestão',
      icon: Database,
      bullets: [
        'Engenharia de Pipeline visual (Kanban)',
        'Automações letais de primeiro contato (WhatsApp)',
        'Roteamento instantâneo de leads qualificados',
        'Histórico imutável de interações comerciais',
        'Monitoramento rígido de tempo de resposta'
      ]
    },
    {
      id: 'vendas',
      number: '03',
      title: 'Tropa de Elite Comercial',
      subtitle: 'Playbooks, Scripts de WhatsApp & Fechamento',
      description: 'Tráfego sem fechamento é prejuízo. Transformamos atendentes em closers táticos com scripts validados, blindando seu comercial contra objeções.',
      tag: 'Conversão',
      icon: PhoneCall,
      bullets: [
        'Playbooks e Roteiros de combate validados',
        'Protocolo de resposta imediata (< 5 minutos)',
        'Arsenal para quebra de objeções clássicas (preço/tempo)',
        'Cadência de Follow-up incansável',
        'Sinergia absoluta entre Marketing e Vendas'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="solucao" className="py-24 bg-[#07090e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
            <Layers className="w-3.5 h-3.5" />
            <span>Ecossistema Completo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-6">
            Por que pagar apenas por tráfego <br />
            <span className="text-blue-500">é jogar dinheiro no lixo?</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            A maioria das empresas sangra caixa contratando gestores que apenas "apertam botões". Eles trazem 100 leads, você perde 80 pela demora e não fecha os 20 por falta de roteiro. <strong className="text-white">Nós blindamos o seu funil de ponta a ponta.</strong>
          </p>
        </motion.div>

        {/* The 3 Pillars Flow Diagram */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                variants={itemVariants}
                id={`pillar-card-${pillar.id}`}
                className="group relative rounded-3xl bg-[#0c1018] border border-white/5 p-8 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                <div className="relative z-10">
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-blue-500 bg-blue-500/10 p-3 rounded-xl transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black font-['Space_Grotesk',sans-serif] text-white/5 group-hover:text-white/10 transition-colors duration-300">
                      {pillar.number}
                    </span>
                  </div>

                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold uppercase tracking-wider text-blue-400 mb-4">
                    {pillar.tag}
                  </span>

                  <h3 className="font-['Space_Grotesk',sans-serif] font-black text-2xl text-white mb-2">
                    {pillar.title}
                  </h3>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-6">
                    {pillar.subtitle}
                  </div>

                  <p className="text-sm text-white/60 leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  <div className="w-full h-px bg-white/5 mb-8" />

                  {/* Feature Bullets */}
                  <ul className="space-y-4 mb-10">
                    {pillar.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80 leading-snug font-medium">
                        <Check className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenDiagnostic(pillar.id)}
                  className="relative z-10 w-full py-4 px-4 rounded-2xl bg-white/5 hover:bg-blue-600 text-white border border-white/10 hover:border-blue-500 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Incluir no Diagnóstico</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Synergy Banner: Tráfego + CRM + Comercial */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-3xl bg-gradient-to-r from-blue-900/20 to-indigo-900/20 p-8 sm:p-10 border border-blue-500/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 mt-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 border border-blue-500/40 rounded-full text-xs font-bold uppercase tracking-wider mb-2 text-blue-300">
              <Zap className="w-3.5 h-3.5" />
              <span>O Resultado do Ecossistema</span>
            </div>
            <h3 className="text-3xl font-['Space_Grotesk',sans-serif] font-black text-white">
              Máquina de Vendas Validada e Escalável
            </h3>
            <p className="text-sm text-white/70 leading-relaxed font-medium">
              Ao invés de tentar resolver o problema em partes, implementamos o fluxo completo. O custo por aquisição despenca e a conversão do time comercial atinge níveis que você nunca viu.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenDiagnostic('premium')}
              className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-wider hover:bg-blue-500 shadow-xl shadow-blue-500/30 transition-all"
            >
              Agendar Diagnóstico
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
