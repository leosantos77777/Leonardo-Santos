import React, { useState } from 'react';
import { motion } from 'motion/react';
import { REAL_METRICS } from '../data/portfolioData';
import { TrendingDown, CheckCircle, BarChart3, ArrowUpRight, Award, Zap, ArrowRight } from 'lucide-react';

interface MetricsShowcaseProps {
  onOpenDiagnostic: () => void;
}

export const MetricsShowcase: React.FC<MetricsShowcaseProps> = ({ onOpenDiagnostic }) => {
  const [filter, setFilter] = useState<'all' | 'meta-ads' | 'leads' | 'engagement'>('all');

  const filteredMetrics = REAL_METRICS; // We removed the filters since it's just 4 key numbers

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="resultados" className="py-24 bg-[#0a0d14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Transparência Absoluta</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight leading-tight mb-6">
            O impacto de uma <br className="hidden sm:block" />
            <span className="text-blue-500">Operação Tática.</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Não coleciono prints falsos. Eu construo estruturas robustas de aquisição que injetam previsibilidade e escala no caixa das empresas.
          </p>
        </motion.div>

        {/* We removed the Featured Benchmark Card and Filters entirely */}
        
        {/* Grid of 4 Key Metrics */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredMetrics.map((card) => (
            <motion.div
              variants={cardVariants}
              key={card.id}
              id={`metric-card-${card.id}`}
              className="rounded-3xl bg-[#0c1018] border border-white/5 p-6 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden group"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {card.statusText}
                  </span>
                  {card.badge && (
                    <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 text-[9px] uppercase tracking-wider font-bold">
                      {card.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-['Space_Grotesk',sans-serif] font-black text-2xl text-white mb-2">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="text-xs text-white/60 mb-6">
                    {card.subtitle}
                  </p>
                )}

                {/* Metrics Breakdown */}
                <div className="space-y-4 my-6 pt-4 border-t border-white/10">
                  {card.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="text-xs text-white/50 font-medium">{m.label}</span>
                      <span className={`font-['Space_Grotesk',sans-serif] font-bold ${m.highlight ? 'text-3xl text-blue-400' : 'text-lg text-white/90'}`}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenDiagnostic}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-black text-sm uppercase tracking-wider transition-all hover:bg-blue-500 shadow-xl shadow-blue-500/20"
          >
            <span>Auditar Meus Números Agora</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
