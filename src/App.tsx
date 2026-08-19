import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LeonardoStory } from './components/LeonardoStory';
import { ThreePillars } from './components/ThreePillars';
import { NichesSection } from './components/NichesSection';
import { MetricsShowcase } from './components/MetricsShowcase';
import { RoiCalculator } from './components/RoiCalculator';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { FinalContact } from './components/FinalContact';
import { DiagnosticModal } from './components/DiagnosticModal';
import { Phone } from 'lucide-react';

const RevealWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpenDiagnostic = (planId?: string) => {
    setSelectedPlan(planId);
    setDiagnosticOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-white flex flex-col selection:bg-blue-500/30 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <Navbar onOpenDiagnostic={handleOpenDiagnostic} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Slide 1 - Hero Brand Display */}
        <Hero onOpenDiagnostic={handleOpenDiagnostic} />

        {/* The 3 Pillars of Acquisition: Tráfego + CRM + Treinamento de Vendas */}
        <RevealWrapper>
          <ThreePillars onOpenDiagnostic={handleOpenDiagnostic} />
        </RevealWrapper>

        {/* Slide 2 - Sobre Leonardo, Cases Shark Tank e LogSchool */}
        <RevealWrapper>
          <LeonardoStory onOpenDiagnostic={handleOpenDiagnostic} />
        </RevealWrapper>

        {/* Slide 3 - Experiências em Nichos */}
        <RevealWrapper>
          <NichesSection onOpenDiagnostic={handleOpenDiagnostic} />
        </RevealWrapper>

        {/* Slide 3 & 4 - Métricas Reais & Gerenciador de Anúncios */}
        <RevealWrapper>
          <MetricsShowcase onOpenDiagnostic={handleOpenDiagnostic} />
        </RevealWrapper>

        {/* Interactive ROI & Lost Revenue Simulator */}
        <RevealWrapper>
          <RoiCalculator onOpenDiagnostic={handleOpenDiagnostic} />
        </RevealWrapper>

        {/* Slide 6 - Planos: Essencial, Avançado, Premium */}
        <RevealWrapper>
          <PricingSection onSelectPlan={handleOpenDiagnostic} />
        </RevealWrapper>

        {/* FAQ Section */}
        <RevealWrapper>
          <FAQSection />
        </RevealWrapper>

        {/* Slide 7 - "Vamos começar?", Contatos & Rodapé */}
        <RevealWrapper>
          <FinalContact onOpenDiagnostic={handleOpenDiagnostic} />
        </RevealWrapper>
      </main>

      {/* Interactive Modal for Strategic Diagnostic */}
      <AnimatePresence>
        {diagnosticOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            <DiagnosticModal
              isOpen={diagnosticOpen}
              onClose={() => setDiagnosticOpen(false)}
              preSelectedPlan={selectedPlan}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Floating WhatsApp Button */}
      <motion.aside
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        aria-label="Ações rápidas"
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
      >
        <a
          href="https://wa.me/553175239649?text=Ol%C3%A1%20Leonardo,%20estou%20no%20seu%20site%20e%20gostaria%20de%20agendar%20meu%20diagn%C3%B3stico!"
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="group flex items-center gap-2.5 px-6 py-4 rounded-full bg-blue-600 text-white hover:bg-blue-500 font-bold text-xs uppercase tracking-widest shadow-xl shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
          title="Falar no WhatsApp com Leonardo"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Falar com Leonardo</span>
        </a>
      </motion.aside>
    </div>
  );
}
