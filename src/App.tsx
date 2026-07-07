import React, { useState, useEffect } from 'react';
import ResumePortfolio from './components/ResumePortfolio';
import AIAuditDashboard from './components/AIAuditDashboard';
import { 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  Moon, 
  Sun, 
  Briefcase, 
  Code, 
  FileText,
  AlertCircle
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'audit'>('portfolio');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [notification, setNotification] = useState<string | null>(
    "Welcome! Switch between Candidate Website and AI Audit Hub using the floating control."
  );

  useEffect(() => {
    // Automatically close system alert message after 6 seconds
    const timer = setTimeout(() => {
      setNotification(null);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Dynamic Notification Bar */}
      {notification && (
        <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 p-3.5 max-w-md w-[90%] rounded-2xl border text-xs leading-relaxed flex items-center justify-between gap-3 shadow-xl backdrop-blur-md animate-bounce ${
          isDarkMode 
            ? 'bg-zinc-900/90 border-teal-500/30 text-teal-400' 
            : 'bg-white/95 border-teal-500/20 text-teal-700'
        }`}>
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-teal-500 animate-pulse shrink-0" />
            <span>{notification}</span>
          </div>
          <button 
            onClick={() => setNotification(null)}
            className="text-[10px] uppercase font-black tracking-widest text-zinc-500 hover:text-teal-400"
          >
            DISMISS
          </button>
        </div>
      )}

      {/* Floating Header controller (Stripe & Linear Inspired) */}
      <nav className={`fixed top-0 inset-x-0 z-40 border-b backdrop-blur-md ${
        isDarkMode ? 'bg-zinc-950/85 border-zinc-900' : 'bg-white/85 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('portfolio')}>
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-zinc-950 font-black text-sm">
              S
            </div>
            <div className="text-left leading-none">
              <span className="font-extrabold text-sm tracking-tight">SURESH</span>
              <span className="text-[10px] font-mono text-zinc-500 block uppercase font-bold">PORTFOLIO v1.0</span>
            </div>
          </div>

          {/* Interactive Navigation Toggle between Candidates Portfolio & Strategic Hub */}
          <div className={`p-1 rounded-xl flex items-center border ${
            isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={() => setActiveTab('portfolio')}
              id="nav-btn-portfolio"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                activeTab === 'portfolio'
                  ? isDarkMode ? 'bg-zinc-850 text-teal-400 shadow-sm shadow-teal-500/10' : 'bg-white text-teal-600 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Recruiter Website</span>
            </button>

            <button
              onClick={() => setActiveTab('audit')}
              id="nav-btn-audit"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                activeTab === 'audit'
                  ? isDarkMode ? 'bg-zinc-850 text-teal-400 shadow-sm shadow-teal-500/10' : 'bg-white text-teal-600 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-400'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>AI Analyst Audits</span>
            </button>
          </div>

          {/* Theme Switch & Print controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleTheme}
              id="nav-toggle-theme"
              className={`p-2 rounded-xl border cursor-pointer outline-none transition-colors duration-150 ${
                isDarkMode ? 'bg-zinc-900 border-zinc-800 text-teal-400 hover:bg-zinc-850' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
              title={isDarkMode ? "Toggle Light Theme" : "Toggle Dark Theme"}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            {/* Tiny print command alias for recruiter convenience */}
            <span className="hidden lg:inline text-[10px] font-mono text-zinc-500 font-bold px-2 py-1 rounded bg-zinc-800/10 border border-zinc-800/25">
              Press Ctrl+P to Print Profile
            </span>
          </div>

        </div>
      </nav>

      {/* Main Container Content */}
      <main className="pt-6">
        {activeTab === 'portfolio' ? (
          <ResumePortfolio isDarkMode={isDarkMode} toggleView={() => setActiveTab('audit')} />
        ) : (
          <div className="pt-24 pb-16">
            <AIAuditDashboard isDarkMode={isDarkMode} />
          </div>
        )}
      </main>

    </div>
  );
}
