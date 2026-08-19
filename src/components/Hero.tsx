import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Target, ShieldCheck, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: (planId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic }) => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content - Left Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center relative z-10"
          >
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8 w-fit">
              Estrategista de Vendas e Escala
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-black font-['Space_Grotesk',sans-serif] tracking-tight leading-[1.1] mb-8 text-white">
              Sua máquina de <br />
              <span className="text-blue-500">vendas imparável.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl leading-relaxed text-white/70 max-w-xl mb-12">
              Eu não vendo "curtidas". Eu construo <strong className="text-white">ecossistemas de lucro</strong> unindo tráfego agressivo, CRM tático e treinamento comercial. Transforme cliques em faturamento real.
            </motion.p>

            {/* Direct CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                id="hero-primary-cta"
                onClick={() => onOpenDiagnostic()}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-black text-sm uppercase tracking-wider hover:bg-blue-500 shadow-xl shadow-blue-500/20 transition-all"
              >
                <span>Agendar Diagnóstico</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-16 flex items-center gap-6 text-[10px] uppercase tracking-widest text-white/40 font-bold">
              <a href="https://instagram.com/oleosantooss" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                @oleosantooss
              </a>
              <div className="w-1 h-1 rounded-full bg-blue-500/50" />
              <span>Leonardo Santos</span>
            </motion.div>
          </motion.div>

          {/* Leonardo Profile Image - Right Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center lg:justify-end"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
            
            {/* Increased max-width from 450px to 550px for a larger presence */}
            <div className="relative w-full max-w-[550px]">
              {/* Profile Image with stylistic edits (dark mode blend, gradient mask) */}
              <img 
                src="/leonardo-profile.png" 
                alt="Leonardo Santos" 
                className="relative z-10 w-full h-auto object-contain grayscale-[20%] contrast-[1.1] brightness-[0.9] drop-shadow-2xl transition-all duration-700 hover:grayscale-0 scale-110 origin-bottom"
                style={{ 
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)', 
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 95%)' 
                }}
              />

              {/* Floating Badge 1 - Moved further out to the right and slightly lower */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-[35%] -right-8 sm:-right-12 lg:-right-20 z-20 bg-[#0c1018]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Tráfego Agressivo</div>
                    <div className="text-white/50 text-xs">Foco 100% em ROAS</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Moved lower to avoid hands/face */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="absolute bottom-[20%] -left-8 sm:-left-12 lg:-left-20 z-20 bg-[#0c1018]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Vendas Implacáveis</div>
                    <div className="text-white/50 text-xs">Conversão Previsível</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 3 Key Stats Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/5 relative z-10"
        >
          <div className="flex flex-col gap-2">
            <div className="text-4xl font-['Space_Grotesk',sans-serif] font-black text-white">+5 Milhões</div>
            <div className="text-xs uppercase font-bold tracking-wider text-blue-400">Em receita faturada</div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-4xl font-['Space_Grotesk',sans-serif] font-black text-white">+50 Negócios</div>
            <div className="text-xs uppercase font-bold tracking-wider text-blue-400">Escalados mundialmente</div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-4xl font-['Space_Grotesk',sans-serif] font-black text-white">+2 Milhões</div>
            <div className="text-xs uppercase font-bold tracking-wider text-blue-400">De verba auditada</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
