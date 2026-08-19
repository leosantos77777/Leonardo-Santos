import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, MessageCircle, Phone, Building, DollarSign } from 'lucide-react';
import { LeadFormData } from '../types';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedPlan?: string;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
  preSelectedPlan,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    businessName: '',
    businessNiche: '',
    currentMonthlyRevenue: 'R$ 20.000 a R$ 50.000',
    monthlyAdBudget: 'R$ 1.500 a R$ 3.000',
    primaryGoal: 'Tráfego Pago + CRM + Vendas (Combo Completo)',
    hasCrm: 'Não, uso apenas WhatsApp/Planilha',
    hasSalesTeam: 'Eu mesmo atendo / 1 a 2 pessoas',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message to (31) 99653-6567
    const planText = preSelectedPlan ? `\n• *Interesse no Plano:* ${preSelectedPlan.toUpperCase()}` : '';
    const message = `🚀 *SOLICITAÇÃO DE CONSULTORIA ESTRATÉGICA TÁTICA*
----------------------------------------
• *Nome:* ${formData.name}
• *WhatsApp:* ${formData.phone}
• *Empresa / Marca:* ${formData.businessName}
• *Segmento / Nicho:* ${formData.businessNiche}
• *Faturamento Atual:* ${formData.currentMonthlyRevenue}
• *Verba de Anúncios:* ${formData.monthlyAdBudget}
• *Objetivo Principal:* ${formData.primaryGoal}
• *Usa CRM hoje?:* ${formData.hasCrm}
• *Equipe Comercial:* ${formData.hasSalesTeam}${planText}
${formData.notes ? `• *Maior Desafio:* ${formData.notes}` : ''}
----------------------------------------
Olá Leonardo, acabei de preencher o dossiê no seu site e gostaria de agendar meu diagnóstico gratuito para escalar minhas vendas!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/553175239649?text=${encoded}`;

    setSubmitted(true);

    // Give a smooth 1s feedback then open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div
      id="diagnostic-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07090e]/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="diagnostic-modal-content"
        className="relative w-full max-w-2xl bg-[#0c1018] border border-blue-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-blue-500/20 text-white my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-diagnostic-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-xl shadow-blue-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black font-['Space_Grotesk',sans-serif] text-white">
              Dossiê Recebido!
            </h3>
            <p className="text-sm text-white/60 font-medium max-w-md mx-auto">
              Iniciando redirecionamento seguro para o WhatsApp oficial do Leonardo Santos...
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-8 border-b border-white/5 pb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Auditoria Estratégica Gratuita</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black font-['Space_Grotesk',sans-serif] tracking-tight text-white mb-2 leading-tight">
                Qualifique sua Empresa
              </h3>
              <p className="text-sm text-white/60 font-medium">
                Preencha os dados abaixo com exatidão. Essas informações serão usadas para mapear os gargalos da sua operação antes mesmo da nossa primeira reunião.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-white/80 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-blue-500 focus:bg-white/10 transition-all focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/80 mb-1">
                    Seu WhatsApp (com DDD) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (31) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-blue-500 focus:bg-white/10 transition-all focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-white/80 mb-1">
                    Nome da Empresa / Projeto *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Clínica Alpha / Minha Loja"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-blue-500 focus:bg-white/10 transition-all focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/80 mb-1">
                    Nicho / Segmento de Atuação *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Odontologia, Estética, E-commerce, B2B..."
                    value={formData.businessNiche}
                    onChange={(e) => setFormData({ ...formData, businessNiche: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-blue-500 focus:bg-white/10 transition-all focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-white/80 mb-1">
                    Faturamento Mensal Atual
                  </label>
                  <select
                    value={formData.currentMonthlyRevenue}
                    onChange={(e) => setFormData({ ...formData, currentMonthlyRevenue: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white text-sm focus:border-blue-500 transition-all focus:outline-none"
                  >
                    <option>Até R$ 10.000 / mês</option>
                    <option>R$ 10.000 a R$ 30.000 / mês</option>
                    <option>R$ 30.000 a R$ 70.000 / mês</option>
                    <option>R$ 70.000 a R$ 150.000 / mês</option>
                    <option>Acima de R$ 150.000 / mês</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/80 mb-1">
                    Verba de "Guerra" para Anúncios
                  </label>
                  <select
                    value={formData.monthlyAdBudget}
                    onChange={(e) => setFormData({ ...formData, monthlyAdBudget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white text-sm focus:border-blue-500 transition-all focus:outline-none"
                  >
                    <option>R$ 600 a R$ 1.500 / mês (Iniciante)</option>
                    <option>R$ 1.500 a R$ 3.500 / mês</option>
                    <option>R$ 3.500 a R$ 8.000 / mês</option>
                    <option>Acima de R$ 8.000 / mês</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-white/80 mb-1">
                    Você já possui um CRM (Kommo/Pipefy)?
                  </label>
                  <select
                    value={formData.hasCrm}
                    onChange={(e) => setFormData({ ...formData, hasCrm: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white text-sm focus:border-blue-500 transition-all focus:outline-none"
                  >
                    <option>Não, perco vendas no WhatsApp / Papel</option>
                    <option>Tento me organizar com Excel / Planilhas</option>
                    <option>Sim, tenho CRM mas é bagunçado</option>
                    <option>Sim, tenho um CRM rodando liso</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/80 mb-1">
                    Qual o tamanho da sua Tropa de Vendas?
                  </label>
                  <select
                    value={formData.hasSalesTeam}
                    onChange={(e) => setFormData({ ...formData, hasSalesTeam: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white text-sm focus:border-blue-500 transition-all focus:outline-none"
                  >
                    <option>Exército de 1 (Eu faço tudo)</option>
                    <option>1 a 2 Atendentes / Secretária</option>
                    <option>Esquadrão Tático (2 a 5 vendedores)</option>
                    <option>Tropa de Elite (Mais de 5 vendedores)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/80 mb-1">
                  Qual o seu maior gargalo de vendas hoje? (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Leads muito desqualificados, minha equipe não sabe quebrar objeção, não consigo escalar o tráfego..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-blue-500 focus:bg-white/10 transition-all focus:outline-none"
                />
              </div>

              <div className="pt-6 border-t border-white/5">
                <button
                  type="submit"
                  id="submit-diagnostic-btn"
                  className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                >
                  <span>Iniciar Auditoria (Abrir WhatsApp)</span>
                  <Send className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-white/40 font-bold mt-4 uppercase tracking-wider">
                  Contato rigorosamente sigiloso. Atendimento direto e exclusivo por Leonardo Santos.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
