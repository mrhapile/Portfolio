import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Roadmap } from './components/Roadmap';
import { Dashboard } from './components/Dashboard';
import { Projects } from './components/Projects';
import { TerminalMode } from './components/TerminalMode';
import { ViewMode } from './types';
import { Terminal } from 'lucide-react';

const App: React.FC = () => {
  const [mode, setMode] = useState<ViewMode>(ViewMode.GUI);

  // Keyboard shortcut to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === '`') {
        setMode((prev) => (prev === ViewMode.GUI ? ViewMode.TERMINAL : ViewMode.GUI));
      }
      if (e.key === 'Escape' && mode === ViewMode.TERMINAL) {
        setMode(ViewMode.GUI);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode]);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-200 font-sans selection:bg-gold-500 selection:text-black">
      <Helmet>
        <title>Grand Line Infrastructure | DevOps Portfolio</title>
        <meta
          name="description"
          content="A production-grade DevOps portfolio showcasing infrastructure as code, CI/CD pipelines, Bitcoin node infrastructure, and Kubernetes orchestration."
        />
        <meta name="theme-color" content="#050A10" />
      </Helmet>

      {/* Floating Terminal Toggle */}
      {mode === ViewMode.GUI && (
        <button
          onClick={() => setMode(ViewMode.TERMINAL)}
          className="fixed bottom-6 right-6 z-50 bg-navy-900/90 backdrop-blur-sm border border-gold-500/60 text-gold-500 p-3 rounded-full shadow-[0_0_25px_rgba(212,160,23,0.25)] hover:shadow-[0_0_35px_rgba(212,160,23,0.5)] hover:bg-gold-500 hover:text-black hover:border-gold-400 transition-all duration-300 group"
          title="Toggle Terminal Mode (Ctrl + `)"
          aria-label="Open Terminal Mode"
        >
          <Terminal size={24} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-navy-900/95 backdrop-blur-sm text-gold-400 text-xs font-mono px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-navy-700/50 shadow-lg">
            Enter CLI Mode
          </span>
        </button>
      )}

      {mode === ViewMode.TERMINAL ? (
        <TerminalMode onExit={() => setMode(ViewMode.GUI)} />
      ) : (
        <main className="w-full relative">
          <Hero />
          <Philosophy />
          <Roadmap />
          <Dashboard />
          <Projects />

          <footer className="py-16 bg-navy-950 border-t border-navy-800/30 text-center relative">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold-600/40 to-transparent mx-auto mb-6" />
            <p className="text-slate-600 font-serif italic text-sm">
              &copy; {new Date().getFullYear()} Grand Line Infrastructure. Built on the High Seas.
            </p>
            <p className="text-slate-700 font-mono text-xs mt-2 tracking-wider">
              CTRL + ` &middot; TERMINAL MODE
            </p>
          </footer>
        </main>
      )}
    </div>
  );
};

export default App;