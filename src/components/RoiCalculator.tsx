import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, AlertTriangle, CheckCircle2, ArrowRight, DollarSign, Users, Target } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDiagnostic: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDiagnostic }) => {
  const [adBudget, setAdBudget] = useState<number>(2000);
  const [costPerLead, setCostPerLead] = useState<number>(10);
  const [averageTicket, setAverageTicket] = useState<number>(800);

  // Without CRM/Sales training: ~3% closing rate, 40% lost leads due to delay
  // With CRM/Sales training: ~10% closing rate, <5% lost leads
  const totalLeads = Math.floor(adBudget / (costPerLead || 1));
  
  // Traditional scenario (only traffic, no CRM, slow sales)
  const traditionalCloseRate = 0.03;
  const traditionalSales = Math.max(1, Math.round(totalLeads * traditionalCloseRate));
  const traditionalRevenue = traditionalSales * averageTicket;

  // Santos Tráfego Ecosystem (Traffic + CRM + Sales Training)
  const optimizedCloseRate = 0.09; // 9% close rate
  const optimizedSales = Math.max(2, Math.round(totalLeads * optimizedCloseRate));
  const optimizedRevenue = optimizedSales * averageTicket;

  const extraRevenue = optimizedRevenue - traditionalRevenue;
  const roiMultiplier = ((optimizedRevenue - adBudget) / adBudget).toFixed(1);

  return (
    <section id="calculadora" className="py-24 bg-[#0a0d14] relative border-t border-white/5 overflow-hidden">
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
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Escala</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-6">
            Quanto Dinheiro Seu Negócio Deixa na Mesa <br />
            <span className="text-blue-500">Sem Processo Comercial?</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto font-medium">
            Ajuste os valores abaixo para ver a diferença entre rodar anúncios comuns vs implementar o ecossistema completo de aquisição da Santos Estratégia:
          </p>
        </motion.div>

        {/* Interactive Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Controls Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-[#0c1018] border border-blue-500/20 rounded-3xl p-7 sm:p-8 space-y-8 shadow-xl shadow-blue-500/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
            
            {/* Ad Budget Input */}
            <div className="relative z-10">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
                <span className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Investimento em Anúncios
                </span>
                <span className="font-['Space_Grotesk',sans-serif] font-black text-xl text-white">
                  R$ {adBudget.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="30000"
                step="500"
                value={adBudget}
                onChange={(e) => setAdBudget(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/40 mt-3">
                <span>R$ 500</span>
                <span>R$ 15k</span>
                <span>R$ 30k+</span>
              </div>
            </div>

            {/* Cost Per Lead Input */}
            <div className="relative z-10">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
                <span className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Custo Estimado por Lead
                </span>
                <span className="font-['Space_Grotesk',sans-serif] font-black text-xl text-white">
                  R$ {costPerLead}
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="50"
                step="1"
                value={costPerLead}
                onChange={(e) => setCostPerLead(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/40 mt-3">
                <span>R$ 2</span>
                <span>R$ 25</span>
                <span>R$ 50</span>
              </div>
            </div>

            {/* Average Ticket Input */}
            <div className="relative z-10">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Ticket Médio
                </span>
                <span className="font-['Space_Grotesk',sans-serif] font-black text-xl text-white">
                  R$ {averageTicket.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={averageTicket}
                onChange={(e) => setAverageTicket(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-white/40 mt-3">
                <span>R$ 100</span>
                <span>R$ 5.000</span>
                <span>R$ 10.000+</span>
              </div>
            </div>

            <div className="relative z-10 p-5 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-white/60 flex items-center justify-between mt-8">
              <span>Leads gerados no mês:</span>
              <span className="text-lg font-['Space_Grotesk',sans-serif] font-black text-white">
                ~{totalLeads} contatos
              </span>
            </div>

          </motion.div>

          {/* Results Comparison Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Traditional (Without CRM/Script) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-[#0f172a] p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Sem Processo (~3%)
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 bg-white/5 px-2 py-1 rounded-md">{traditionalSales} vendas</span>
              </div>
              <div className="text-3xl font-['Space_Grotesk',sans-serif] font-black text-white/40">
                R$ {traditionalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <p className="text-xs text-white/40 mt-4 leading-relaxed font-medium">
                Muitos leads perdidos por demora no WhatsApp e objeções não tratadas.
              </p>
            </motion.div>

            {/* Santos Tráfego Solution (Ecosystem) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-3xl bg-blue-600 text-white p-8 shadow-2xl shadow-blue-500/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <TrendingUp className="w-24 h-24" />
              </div>
              
              <div className="relative z-10 flex items-center justify-between text-xs font-black uppercase tracking-wider mb-6">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-200" />
                  Com O Método
                </span>
                <span className="bg-white/20 text-white px-3 py-1.5 rounded-lg">
                  ~9% conversão
                </span>
              </div>

              <div className="relative z-10 text-5xl sm:text-6xl font-['Space_Grotesk',sans-serif] font-black my-8 tracking-tight">
                R$ {optimizedRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>

              <div className="relative z-10 pt-6 border-t border-white/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-blue-100">Faturamento adicional:</span>
                <span className="text-sm font-black bg-white text-blue-600 px-3 py-1 rounded-md">
                  +R$ {extraRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenDiagnostic}
              className="w-full py-5 px-6 rounded-2xl bg-[#1e293b] border border-blue-500/30 hover:bg-blue-600 hover:border-transparent text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-3 group"
            >
              <span>Quero Acelerar Minhas Vendas</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

          </div>

        </div>

      </div>
    </section>
  );
};
