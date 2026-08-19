import React from 'react';
import { motion } from 'motion/react';
import { PLANS } from '../data/portfolioData';
import { Check, Star, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="planos" className="py-24 bg-[#0a0d14] relative border-t border-white/5 overflow-hidden">
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
            <span>Investimento & Escala</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-6 leading-tight">
            O Método de Atuação Para o <br className="hidden sm:block" />
            <span className="text-blue-500">Seu Momento Atual.</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Não existe fórmula mágica. Existe estratégia cirúrgica para o tamanho da sua operação. Escolha o diagnóstico que faz mais sentido para acelerar suas vendas hoje.
          </p>
        </motion.div>

        {/* Slide 6 Faithful Re-creation: 3-column Pricing Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto"
        >
          {PLANS.map((plan) => {
            const isPopular = plan.isPopular;

            return (
              <motion.div
                variants={cardVariants}
                key={plan.id}
                id={`plan-card-${plan.id}`}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative shadow-2xl border ${
                  isPopular
                    ? 'bg-[#0f172a] border-blue-500/50 scale-105 z-10 shadow-blue-500/10'
                    : 'bg-[#0c1018] border-white/5 hover:border-blue-500/30 hover:-translate-y-1'
                }`}
              >
                {/* Popular Recommended Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-xl flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3 h-3 fill-white" />
                    <span>O Mais Agressivo</span>
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <h3
                    className="text-2xl font-black font-['Space_Grotesk',sans-serif] text-white mb-4"
                  >
                    {plan.name}
                  </h3>

                  {/* Price Block verbatim from Slide 6 */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-blue-400 mb-2">
                      Modelo
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black font-['Space_Grotesk',sans-serif] text-white">
                        {plan.price}
                      </span>
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-white/50 mt-1 font-bold">{plan.period}</div>
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed mb-8">
                    {plan.description}
                  </p>

                  {/* Feature Checklist verbatim from Slide 6 */}
                  <div className="space-y-4 mb-10">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                        <span className="text-sm text-white/80 leading-snug font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  id={`select-plan-${plan.id}`}
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20'
                      : 'bg-white/5 text-white border border-white/10'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Custom / Enterprise Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-3xl bg-[#0f172a] border border-blue-500/20 shadow-xl"
        >
          <div className="flex items-center justify-center gap-2 text-lg font-black font-['Space_Grotesk',sans-serif] text-white mb-2">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <span>Precisa de uma blindagem sob medida para sua operação?</span>
          </div>
          <p className="text-sm text-white/70 mb-6">
            Desenhamos engrenagens personalizadas para empresas com foco em domínio absoluto de mercado ou que precisam de treinamento tático in-company para a equipe de vendas.
          </p>
          <button
            onClick={() => onSelectPlan('custom')}
            className="text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 group"
          >
            Conversar sobre projeto avançado <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
