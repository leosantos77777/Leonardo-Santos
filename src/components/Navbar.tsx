import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Instagram, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenDiagnostic: (planId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDiagnostic }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-xl'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          id="brand-logo-link"
          className="group flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-500 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <img 
              src="/leonardo-profile.png" 
              alt="Leonardo Santos" 
              className="w-full h-full object-cover bg-blue-600"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col items-start leading-none tracking-tight">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-1">
              Estratégia Comercial
            </span>
            <span className="text-xl font-['Space_Grotesk',sans-serif] font-black text-white group-hover:opacity-80 transition-opacity">
              Leonardo Santos
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-white/60">
          <a
            href="#solucao"
            className="hover:text-blue-400 transition-colors"
          >
            O Método
          </a>
          <a
            href="#sobre"
            className="hover:text-blue-400 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#nichos"
            className="hover:text-blue-400 transition-colors"
          >
            Nichos
          </a>
          <a
            href="#planos"
            className="hover:text-blue-400 transition-colors"
          >
            Consultoria
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://instagram.com/oleosantooss"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-instagram-btn"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-white/60 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
            title="@oleosantooss no Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <button
            id="nav-cta-btn"
            onClick={() => onOpenDiagnostic()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>Agendar Diagnóstico</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-[#0c1018] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-3">
            <a
              href="#solucao"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-blue-400 py-2"
            >
              O Método
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-blue-400 py-2"
            >
              Sobre o Leonardo
            </a>
            <a
              href="#nichos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-blue-400 py-2"
            >
              Nichos Atendidos
            </a>
            <a
              href="#resultados"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-blue-400 py-2"
            >
              Resultados
            </a>
            <a
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-blue-400 py-2"
            >
              Planos de Consultoria
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-white/80 hover:text-blue-400 py-2"
            >
              Dúvidas
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              id="mobile-drawer-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostic();
              }}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-blue-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Diagnóstico</span>
            </button>
            <a
              href="https://wa.me/553175239649"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-transparent border border-white/10 text-white font-bold text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
