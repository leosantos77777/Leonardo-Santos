import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Instagram, ArrowRight, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

interface FinalContactProps {
  onOpenDiagnostic: () => void;
}

export const FinalContact: React.FC<FinalContactProps> = ({ onOpenDiagnostic }) => {
  return (
    <footer id="contato" className="bg-[#07090e] relative pt-24 pb-12 border-t border-white/5 text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Slide 7 Faithful Re-creation: Grand Contact Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-br from-blue-900/20 to-transparent p-8 sm:p-14 lg:p-16 border border-blue-500/20 shadow-2xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-[#0c1018] opacity-90 pointer-events-none z-0" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Big Brand Statement & Call */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-wider"
              >
                <span>Sua Próxima Decisão Determina Seu Faturamento</span>
              </motion.div>

              {/* Title verbatim from Slide 7 */}
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black font-['Space_Grotesk',sans-serif] tracking-tight text-white mb-6"
              >
                Pronto para <br />
                <span className="text-blue-500">dominar?</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-white/70 max-w-lg leading-relaxed mb-8"
              >
                Agende agora uma consultoria estratégica com o Leonardo. Vamos realizar uma auditoria agressiva nas suas campanhas atuais, estancar a perda de leads e traçar o plano tático para escalar suas vendas com previsibilidade militar.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-4 flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  id="final-cta-diagnostic-btn"
                  onClick={onOpenDiagnostic}
                  className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-black text-sm uppercase tracking-wider hover:bg-blue-500 shadow-xl shadow-blue-500/30 transition-all flex items-center justify-center gap-3 w-fit"
                >
                  <span>Agendar Diagnóstico</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Column: Direct Contact Info (verbatim from Slide 7) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5 space-y-4"
            >
              <div className="bg-[#0f172a] border border-blue-500/20 rounded-3xl p-8 space-y-6 shadow-xl">
                <h3 className="text-xs uppercase font-black text-blue-500 tracking-wider pb-4 border-b border-white/5">
                  Linha Direta
                </h3>

                {/* WhatsApp / Phone */}
                <a
                  href="https://wa.me/553175239649?text=Ol%C3%A1%20Leonardo,%20vi%20seu%20portfolio%20e%20gostaria%20de%20agendar%20meu%20diagn%C3%B3stico"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-phone-link"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-white/50 mb-1">WhatsApp Exclusivo</div>
                    <div className="font-['Space_Grotesk',sans-serif] font-black text-white text-xl">
                      (31) 7523-9649
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:leonardocastelopro@gmail.com"
                  id="contact-email-link"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl border border-white/10 text-white flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-white/50 mb-1">E-mail Profissional</div>
                    <div className="font-['Space_Grotesk',sans-serif] font-bold text-white text-base truncate">
                      leonardocastelopro@gmail.com
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/oleosantooss"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-instagram-link"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl border border-white/10 text-white flex items-center justify-center shrink-0 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-white/50 mb-1">Bastidores & Resultados</div>
                    <div className="font-['Space_Grotesk',sans-serif] font-bold text-white text-lg">
                      @oleosantooss
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

          </div>

        </motion.div>

        {/* Bottom Sub-footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-white/50 font-medium">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">Santos Estratégia</strong> • Leonardo Santos. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <a href="#solucao" className="hover:text-blue-400 transition-colors">O Método</a>
            <a href="#resultados" className="hover:text-blue-400 transition-colors">Auditoria de Resultados</a>
            <a href="#planos" className="hover:text-blue-400 transition-colors">Consultoria Tática</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
