import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Ticker } from './Ticker';

interface NavbarProps {
  currentPage: 'home' | 'solutions';
  onNavigate: (page: 'home' | 'solutions') => void;
  onOpenMandate: (pillar?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenMandate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: 'home' | 'solutions', hash?: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-obsidian-950/80 backdrop-blur-xl border-b border-brand/10">
      <Ticker />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleNav('home')} 
            className="group flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-obsidian-850 border border-brand/30 shadow-[0_0_15px_rgba(170,209,213,0.2)] group-hover:border-brand group-hover:shadow-[0_0_25px_rgba(170,209,213,0.4)] transition-all">
              {/* Minimal geometric GHC monogram */}
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand animate-pulse" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-brand transition-colors">
                  GHC
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand px-1.5 py-0.5 rounded bg-brand/10 border border-brand/20">
                  GROWTH LAB
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 hidden sm:block">
                Capital Architecture & Strategic Advisory
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => handleNav('home')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all ${
                currentPage === 'home'
                  ? 'text-brand bg-brand/10 border border-brand/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Overview
            </button>

            <button
              onClick={() => handleNav('solutions')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all flex items-center gap-1 ${
                currentPage === 'solutions'
                  ? 'text-brand bg-brand/10 border border-brand/20'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Solutions & Capital
              <span className="px-1.5 py-0.2 rounded bg-brand/15 text-brand text-[9px] font-mono">SUBPAGE</span>
            </button>

            <button
              onClick={() => handleNav(currentPage, 'pillars')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Strategic Pillars
            </button>

            <button
              onClick={() => handleNav(currentPage, 'readiness-tool')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Diagnostic Tool
            </button>

            <button
              onClick={() => handleNav(currentPage, 'case-studies')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Case Studies
            </button>

            <button
              onClick={() => handleNav(currentPage, 'signals')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              Signals
            </button>
          </nav>

          {/* Desktop Action & Status */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full border border-brand/20 bg-obsidian-900/90 px-3 py-1 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="font-mono text-[11px] text-brand font-medium">Q3 Intake Active</span>
            </div>

            <button
              onClick={() => onOpenMandate()}
              className="group relative inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 font-medium text-obsidian-950 text-xs tracking-wider uppercase transition-all duration-300 hover:bg-brand-light hover:shadow-[0_0_25px_rgba(170,209,213,0.45)] active:scale-95"
            >
              <span>Talk to GHC</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenMandate()}
              className="px-3 py-1.5 rounded-lg bg-brand text-obsidian-950 font-semibold text-xs tracking-wide"
            >
              Talk to GHC
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-brand/20 bg-obsidian-900 text-brand"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-brand/20 bg-obsidian-950/95 px-6 py-6 space-y-4 backdrop-blur-2xl">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNav('home')}
              className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium ${
                currentPage === 'home' ? 'text-brand bg-brand/10' : 'text-slate-300'
              }`}
            >
              Overview (Home)
            </button>
            <button
              onClick={() => handleNav('solutions')}
              className={`text-left py-2.5 px-3 rounded-lg text-sm font-medium flex items-center justify-between ${
                currentPage === 'solutions' ? 'text-brand bg-brand/10' : 'text-slate-300'
              }`}
            >
              <span>Solutions & Capital Advisory</span>
              <span className="px-2 py-0.5 text-[10px] font-mono bg-brand/20 text-brand rounded">SUBPAGE</span>
            </button>
            <button
              onClick={() => handleNav(currentPage, 'pillars')}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-slate-300"
            >
              Strategic Pillars (Build • Grow • Raise • Scale)
            </button>
            <button
              onClick={() => handleNav(currentPage, 'readiness-tool')}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-slate-300"
            >
              Capital Readiness Diagnostic Tool
            </button>
            <button
              onClick={() => handleNav(currentPage, 'case-studies')}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-slate-300"
            >
              Verified Case Studies
            </button>
            <button
              onClick={() => handleNav(currentPage, 'signals')}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-slate-300"
            >
              Field Notes & Signals
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>MANDATE STATUS</span>
              <span className="text-brand">PARTNER-LED ACTIVE</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMandate();
              }}
              className="w-full py-3 rounded-lg bg-brand text-obsidian-950 font-semibold text-xs tracking-wider uppercase text-center shadow-[0_0_20px_rgba(170,209,213,0.3)]"
            >
              Start Mandate Intake
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
