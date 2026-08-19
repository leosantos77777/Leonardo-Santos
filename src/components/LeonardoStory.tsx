import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Target, Zap, Shield, Sparkles, Building, Video } from 'lucide-react';

interface LeonardoStoryProps {
  onOpenDiagnostic: () => void;
}

export const LeonardoStory: React.FC<LeonardoStoryProps> = ({ onOpenDiagnostic }) => {
  return (
    <section id="sobre" className="py-24 bg-[#07090e] relative border-y border-white/5 overflow-hidden">
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
            <Award className="w-3.5 h-3.5" />
            <span>Quem é Leonardo Santos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-6">
            Estratégia validada <br />
            <span className="text-blue-500">no campo de batalha.</span>
          </h2>
        </motion.div>

        {/* Slide 2 Faithful Re-Creation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0c1018] text-white shadow-xl border border-white/5 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <p className="text-xl sm:text-2xl font-black font-['Space_Grotesk',sans-serif] leading-tight text-white/90">
                  Mais de 5 anos transformando verba de anúncios em <span className="text-blue-400">lucro previsível e escalável</span>.
                </p>

                <p className="text-base font-medium leading-relaxed text-white/60">
                  Já injetei mais de 5 milhões em receitas no caixa de clientes ao redor do mundo. Minha abordagem não tem espaço para amadores: se uma campanha não traz retorno financeiro claro, nós cortamos. Eu não entrego métricas de vaidade, eu entrego processos de vendas que convertem desconhecidos em clientes de alto valor.
                </p>
              </div>
            </motion.div>

            {/* Case Highlight Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-5 rounded-2xl bg-[#0f172a] border border-blue-500/20 flex items-start gap-4 hover:bg-blue-900/20 transition-all duration-300"
              >
                <div className="text-blue-400 shrink-0 mt-1">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black font-['Space_Grotesk',sans-serif] text-white mb-1">Plena Pausa (Shark Tank)</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-medium">
                    Estratégia de tração e conversão para marca acelerada em rede nacional com validação dos tubarões.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-5 rounded-2xl bg-[#0f172a] border border-blue-500/20 flex items-start gap-4 hover:bg-blue-900/20 transition-all duration-300"
              >
                <div className="text-blue-400 shrink-0 mt-1">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black font-['Space_Grotesk',sans-serif] text-white mb-1">LogSchool</h4>
                  <p className="text-xs text-white/50 leading-relaxed font-medium">
                    Escala de alunos e aquisição contínua para uma das maiores referências educacionais de logística do Brasil.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Leonardo Profile / Method Guarantee Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl bg-[#0c1018] border border-white/5 p-8 shadow-xl">

              {/* Profile Badge representation */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-600 shadow-xl shadow-blue-500/20">
                    <img 
                      src="/leonardo-profile.png" 
                      alt="Leonardo Santos" 
                      className="w-full h-full object-cover bg-blue-600"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-black font-['Space_Grotesk',sans-serif] text-white">Leonardo Santos</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-400 mt-1">Estrategista Comercial</div>
                </div>
              </div>

              <h3 className="font-['Space_Grotesk',sans-serif] font-black text-xl text-white mb-6">
                Meu Plano de Ação Tático
              </h3>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70 leading-relaxed font-medium">
                    <strong className="text-white">Auditoria Severa:</strong> Identificação imediata de onde seu caixa está sangrando.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70 leading-relaxed font-medium">
                    <strong className="text-white">Tráfego Cirúrgico:</strong> Campanhas letais focadas em atrair quem já está pronto para comprar.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70 leading-relaxed font-medium">
                    <strong className="text-white">Equipe Blindada:</strong> Treinamento de scripts e contorno de objeções para fechar qualquer negócio.
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenDiagnostic}
                className="w-full py-4 px-6 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-wider transition-all shadow-xl"
              >
                Falar Diretamente Comigo
              </motion.button>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
