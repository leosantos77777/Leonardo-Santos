import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NICHES } from '../data/portfolioData';
import { ShoppingBag, Sparkles, Smile, Car, Scale, GraduationCap, HeartHandshake, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface NichesSectionProps {
  onOpenDiagnostic: (nicheName?: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  ShoppingBag,
  Sparkles,
  Smile,
  Car,
  Scale,
  GraduationCap,
  HeartHandshake,
  Building2,
};

export const NichesSection: React.FC<NichesSectionProps> = ({ onOpenDiagnostic }) => {
  const [selectedNiche, setSelectedNiche] = useState(NICHES[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="nichos" className="py-24 bg-[#0a0d14] relative border-t border-white/5 overflow-hidden">
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
            <span>Experiência Comprovada</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-6">
            Estratégia Validada em <br />
            <span className="text-blue-500">Múltiplos Mercados.</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Cada mercado exige uma linguagem própria e uma engenharia de funil agressiva. Não trabalhamos com achismos. Selecione seu segmento e veja nossa estrutura de ataque:
          </p>
        </motion.div>

        {/* Slide 3 Layout: Grid of Niches + Interactive Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Niches List (Slide 3 verbatim reproduction) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {NICHES.map((niche) => {
              const Icon = ICON_MAP[niche.icon] || Sparkles;
              const isSelected = selectedNiche.id === niche.id;

              return (
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  key={niche.id}
                  id={`niche-btn-${niche.id}`}
                  onClick={() => setSelectedNiche(niche)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 border ${
                    isSelected
                      ? 'bg-blue-600/10 border-blue-500/50 text-white shadow-xl shadow-blue-500/10 scale-[1.02]'
                      : 'bg-[#0f172a] border-white/5 hover:border-blue-500/30 text-white/60 hover:text-white/90 hover:-translate-y-0.5'
                  }`}
                >
                  <div
                    className={`shrink-0 mt-1 ${
                      isSelected
                        ? 'text-blue-400'
                        : 'text-white/40'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black font-['Space_Grotesk',sans-serif] mb-1">
                      {niche.name}
                    </h3>
                    <p className={`text-xs font-bold ${isSelected ? 'text-blue-300' : 'text-white/40'} line-clamp-1`}>
                      {niche.typicalResult}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Detailed Niche Strategy Display */}
          <div className="lg:col-span-5 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedNiche.id}
                initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-[#0c1018] border border-blue-500/20 p-8 shadow-xl shadow-blue-500/10 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400">
                      {React.createElement(ICON_MAP[selectedNiche.icon] || Sparkles, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-blue-500 block mb-1">
                        Auditoria de Mercado
                      </span>
                      <h4 className="text-2xl font-black font-['Space_Grotesk',sans-serif] text-white">
                        {selectedNiche.name}
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-6 mb-10">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-white/50 mb-2">
                        Como Operamos no Segmento
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed font-medium">
                        {selectedNiche.description}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-[10px] uppercase tracking-wider font-bold text-blue-400 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Estrutura Tática de Funil:</span>
                      </div>
                      <p className="text-sm text-white/70 font-medium">
                        {selectedNiche.strategyHighlight}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/40 to-blue-800/20 border border-blue-500/30">
                      <div className="text-[10px] uppercase tracking-wider font-bold text-blue-300 mb-2">
                        🎯 Resultado Comprovado:
                      </div>
                      <div className="text-xl font-black font-['Space_Grotesk',sans-serif] text-white">
                        {selectedNiche.typicalResult}
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onOpenDiagnostic(selectedNiche.name)}
                    className="w-full py-4 px-6 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-blue-500/20 flex items-center justify-center"
                  >
                    Quero Dominar Este Mercado
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
