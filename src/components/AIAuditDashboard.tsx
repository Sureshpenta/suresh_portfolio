import React, { useState } from 'react';
import { 
  personalInfo, 
  auditReport, 
  strengthAnalysis, 
  personalBrandStrategy, 
  atsAnalysis, 
  portfolioReadiness 
} from '../data';
import { 
  ShieldAlert, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  BarChart4, 
  UserCheck, 
  Layers, 
  Compass, 
  ArrowUpRight, 
  Activity, 
  Bookmark, 
  ChevronRight,
  TrendingUp,
  Award,
  Zap,
  Cpu,
  BookOpen,
  Check
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

interface AIAuditDashboardProps {
  isDarkMode: boolean;
}

export default function AIAuditDashboard({ isDarkMode }: AIAuditDashboardProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'ats' | 'strategy' | 'gaps'>('profile');

  // Prepare simple mock data for Recharts compatibility
  const atsMetricData = atsAnalysis.scores.map(s => ({
    subject: s.category,
    sureshScore: s.score,
    benchmarkScore: s.benchmark,
    fullMark: 100
  }));

  const readinessData = portfolioReadiness.scores.map(s => ({
    name: s.metric.replace(" Quality", "").replace(" Rate", "").replace(" Compatibility", ""),
    score: s.score,
    full: 10
  }));

  // Map of scores for indicators
  const statsCards = [
    { label: "Overall Readiness", value: `${portfolioReadiness.overallScore}/10`, desc: "Good potential", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "ATS Compatibility", value: "6.5/10", desc: "Requires structural fix", color: "text-amber-500", bg: "bg-amber-500/10" },
    { label: "Technical Blueprint", value: "8.0/10", desc: "Top 15% academic", color: "text-teal-500", bg: "bg-teal-500/10" },
    { label: "Differentiators Vetted", value: "3 Definite", desc: "Proven achievements", color: "text-indigo-500", bg: "bg-indigo-500/10" },
  ];

  return (
    <div className={`p-6 max-w-7xl mx-auto space-y-8 transition-colors duration-300 ${
      isDarkMode ? 'text-zinc-100 bg-zinc-950' : 'text-slate-900 bg-slate-50'
    }`} id="audit-dashboard">
      
      {/* Upper header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6 border-zinc-800/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-full font-black uppercase">
              AI EXPERT REPORT HUB (2026 EDITION)
            </span>
          </div>
          <h1 className="text-3xl font-black tracking-tight mt-1">CV Audit & Brand Analysis Suite</h1>
          <p className="text-sm text-zinc-500 mt-1">
            Vetted by 13 independent recruitment, technical hiring, and creative consultancy agents.
          </p>
        </div>

        {/* Diagnostic Status */}
        <div className={`p-3.5 rounded-2xl border flex items-center gap-3 ${
          isDarkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-slate-200'
        }`}>
          <div className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </div>
          <div className="text-left text-xs">
            <div className="font-extrabold text-zinc-400">AUDIT TELEMETRY STATUS</div>
            <div className={`font-mono ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>100% EXTRAC COMPLETED</div>
          </div>
        </div>
      </div>

      {/* Grid of Key Diagnostic Metrics (Bento Style) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((card, idx) => (
          <div 
            key={idx}
            className={`p-5 rounded-2xl border transition-all ${
              isDarkMode ? 'bg-zinc-900/40 border-zinc-900/80 hover:bg-zinc-900' : 'bg-white border-slate-200 hover:shadow-sm'
            }`}
          >
            <div className="text-xs text-zinc-500 font-mono tracking-wide uppercase">{card.label}</div>
            <div className="flex items-baseline gap-2 mt-2">
              <span className={`text-2xl md:text-3xl font-black ${card.color}`}>{card.value}</span>
            </div>
            <span className="text-[11px] text-zinc-400 block mt-1.5">{card.desc}</span>
          </div>
        ))}
      </div>

      {/* Main Interactive Dual Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Dynamic Data Visualization & Report Selector */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Inner tab selectors */}
          <div className={`p-1.5 rounded-2xl flex flex-wrap gap-1 border ${
            isDarkMode ? 'bg-zinc-900/50 border-zinc-900' : 'bg-white border-slate-200'
          }`}>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'profile' 
                  ? 'bg-teal-500 text-zinc-950 shadow-md shadow-teal-500/10' 
                  : isDarkMode ? 'bg-transparent text-zinc-400 hover:bg-zinc-900' : 'bg-transparent text-slate-600 hover:bg-slate-50'
              }`}
            >
              Identity & Strength
            </button>
            <button
              onClick={() => setActiveTab('ats')}
              className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'ats' 
                  ? 'bg-teal-500 text-zinc-950 shadow-md shadow-teal-500/10' 
                  : isDarkMode ? 'bg-transparent text-zinc-400 hover:bg-zinc-900' : 'bg-transparent text-slate-600 hover:bg-slate-50'
              }`}
            >
              ATS Scoring Core
            </button>
            <button
              onClick={() => setActiveTab('strategy')}
              className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'strategy' 
                  ? 'bg-teal-500 text-zinc-950 shadow-md shadow-teal-500/10' 
                  : isDarkMode ? 'bg-transparent text-zinc-400 hover:bg-zinc-900' : 'bg-transparent text-slate-600 hover:bg-slate-50'
              }`}
            >
              Strategic Positioning
            </button>
            <button
              onClick={() => setActiveTab('gaps')}
              className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs font-black transition-all cursor-pointer ${
                activeTab === 'gaps' 
                  ? 'bg-teal-500 text-zinc-950 shadow-md shadow-teal-500/10' 
                  : isDarkMode ? 'bg-transparent text-zinc-400 hover:bg-zinc-900' : 'bg-transparent text-slate-600 hover:bg-slate-50'
              }`}
            >
              Conflicts & Gaps
            </button>
          </div>

          {/* Dynamic Tab Body Panel */}
          <div className={`p-6 rounded-3xl border ${
            isDarkMode ? 'bg-zinc-900/20 border-zinc-900' : 'bg-white border-slate-200'
          }`}>
            
            {/* Identity & Strength View */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-black flex items-center gap-2">
                    <Compass className="w-5 h-5 text-teal-400" />
                    <span>Identity Profile: {personalBrandStrategy.professionalPosition}</span>
                  </h3>
                  <p className="text-zinc-500 text-xs tracking-wide uppercase mt-1">Compiled by Career Coach Agent & Recruiter</p>
                </div>

                <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-zinc-900/30 border-zinc-900' : 'bg-slate-50 border-slate-100'}`}>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-teal-500">Brand Statement</h4>
                  <p className="text-sm md:text-base italic leading-relaxed mt-1 text-zinc-300">
                    "{personalBrandStrategy.brandStatement}"
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-teal-500">Core Assets List</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-zinc-900/60 border-zinc-900' : 'bg-slate-50 border-slate-100'}`}>
                      <h5 className="text-xs font-extrabold uppercase text-indigo-400 flex items-center gap-1">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>Technical Strengths</span>
                      </h5>
                      <ul className="mt-2 space-y-1.5 text-xs">
                        {strengthAnalysis.technicalStrengths.map((str, sIdx) => (
                          <li key={sIdx} className="flex gap-1.5 text-zinc-400">
                            <span className="text-teal-400 shrink-0">•</span>
                            <span>{str}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-zinc-900/60 border-zinc-900' : 'bg-slate-50 border-slate-100'}`}>
                      <h5 className="text-xs font-extrabold uppercase text-indigo-400 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5" />
                        <span>Leadership Proof</span>
                      </h5>
                      <ul className="mt-2 space-y-1.5 text-xs">
                        {strengthAnalysis.leadershipEvidence.map((lead, lIdx) => (
                          <li key={lIdx} className="flex gap-1.5 text-zinc-400">
                            <span className="text-teal-400 shrink-0">•</span>
                            <span>{lead}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/10">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-teal-500 mb-3">Vetted Achievements</h4>
                  <div className="space-y-2">
                    {strengthAnalysis.strongestAchievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-zinc-400">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ATS Metric Breakdown View */}
            {activeTab === 'ats' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-black flex items-center gap-2">
                    <BarChart4 className="w-5 h-5 text-teal-400" />
                    <span>ATS Algorithmic Optimizer Engine</span>
                  </h3>
                  <p className="text-zinc-500 text-xs tracking-wide uppercase mt-1">Analysis compared with standard enterprise recruiters</p>
                </div>

                {/* Score Chart rendering using Recharts */}
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={atsMetricData}
                      margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="subject" stroke="#71717a" fontSize={10} tickLine={false} />
                      <YAxis stroke="#71717a" fontSize={10} tickLine={false} domain={[0, 100]} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: isDarkMode ? '#18181b' : '#ffffff', 
                          borderColor: isDarkMode ? '#27272a' : '#e2e8f0',
                          borderRadius: '12px'
                        }} 
                      />
                      <Legend verticalAlign="top" height={36} />
                      <Bar name="Suresh's Verified Resume" dataKey="sureshScore" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                      <Bar name="Global Benchmark" dataKey="benchmarkScore" fill="#6366f1" radius={[4, 4, 0, 0]} opacity={0.5} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-800/10">
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-teal-500 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Parser Advantages</span>
                    </h4>
                    <ul className="space-y-2 text-xs">
                      {atsAnalysis.strengths.map((str, idx) => (
                        <li key={idx} className="text-zinc-400 pl-4 relative">
                          <span className="absolute left-0 text-emerald-500">•</span>
                          {str}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-teal-500 flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <span>Parser Blockers / Warning areas</span>
                    </h4>
                    <ul className="space-y-2 text-xs">
                      {atsAnalysis.weaknesses.map((weak, idx) => (
                        <li key={idx} className="text-zinc-400 pl-4 relative">
                          <span className="absolute left-0 text-amber-500">•</span>
                          {weak}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Strategic positioning Details */}
            {activeTab === 'strategy' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-black flex items-center gap-2">
                    <Compass className="w-5 h-5 text-indigo-400" />
                    <span>Hiring Manager's Differentiators Strategy</span>
                  </h3>
                  <p className="text-zinc-500 text-xs tracking-wide uppercase mt-1">Core selling proposition blueprints</p>
                </div>

                <div className={`p-4 rounded-2xl border ${
                  isDarkMode ? 'bg-indigo-500/5 border-indigo-500/10' : 'bg-indigo-500/5 border-slate-200'
                }`}>
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-indigo-400">Unique Value Proposition (UVP)</h4>
                  <p className={`text-sm mt-1.5 font-semibold ${isDarkMode ? 'text-zinc-200' : 'text-slate-800'}`}>
                    {personalBrandStrategy.uniqueValueProposition}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-teal-500">Top 3 Strategic Differentiators</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {personalBrandStrategy.topDifferentiators.map((diff, idx) => (
                      <div 
                        key={idx}
                        className={`p-4 rounded-2xl border ${
                          isDarkMode ? 'bg-zinc-950 border-zinc-900' : 'bg-slate-50 border-slate-100'
                        }`}
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded bg-teal-500/10 text-teal-500 font-bold font-mono text-xs mb-3">
                          0{idx + 1}
                        </div>
                        <h4 className="font-extrabold text-xs">{diff.title}</h4>
                        <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">{diff.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Conflict extraction audit & anomalies */}
            {activeTab === 'gaps' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-black flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-amber-500" />
                    <span>Transcription Anomalies & Verification Audit</span>
                  </h3>
                  <p className="text-zinc-500 text-xs tracking-wide uppercase mt-1">Cross-referencing logic constraints in source doc</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wide">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Major Structural Gaps Vetted</span>
                  </div>
                  
                  <div className="space-y-3">
                    {auditReport.gapsIdentified.map((gap, idx) => (
                      <div 
                        key={idx}
                        className={`p-4 rounded-xl border flex gap-3 ${
                          isDarkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="p-1 h-5 w-5 rounded bg-amber-500/10 text-amber-500 shrink-0 font-bold text-xs flex items-center justify-center">
                          !
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-amber-500 hover:underline">Anomaly #{idx+1}</h4>
                          <p className="text-[11.5px] text-zinc-400 mt-1.5 leading-relaxed">{gap}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/10">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-teal-500 mb-3">Skills Gaps Identified</h4>
                  <div className="flex flex-wrap gap-2">
                    {atsAnalysis.missingSkillsGaps.map(g => (
                      <span key={g} className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-zinc-800 text-amber-400 border border-zinc-700">
                        -{g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Right Side Status Panel: Blueprint Portfolio Validation scorecard */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Main Card: Portfolio Readiness Verification scorecard */}
          <div className={`p-6 rounded-3xl border ${
            isDarkMode ? 'bg-zinc-900/80 border-zinc-900' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-500 flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4" />
              <span>Readiness Validation Report</span>
            </h3>

            {/* Dial chart / visual representation */}
            <div className="text-center py-4 relative">
              <div className="text-xs text-zinc-500 font-mono">PORTFOLIO READINESS INDEX</div>
              <div className="text-5xl font-black mt-2 text-teal-400">{portfolioReadiness.overallScore}/10</div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-500/10 text-teal-400 border border-teal-500/20 block w-max mx-auto mt-2">
                RECRUIT PROTOCOL PASS
              </span>
            </div>

            <div className="space-y-4 mt-6">
              {portfolioReadiness.scores.map((sc, scIdx) => (
                <div key={scIdx} className="space-y-1 text-xs">
                  <div className="flex justify-between font-bold text-[11px]">
                    <span className="text-zinc-300">{sc.metric}</span>
                    <span className="text-teal-400">{sc.score}/10</span>
                  </div>
                  
                  {/* Slider bar */}
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full">
                    <div className="h-1.5 rounded-full bg-teal-500" style={{ width: `${sc.score * 10}%` }}></div>
                  </div>
                  <p className="text-[10px] text-zinc-500 leading-normal">{sc.description}</p>
                </div>
              ))}
            </div>

            <div className={`mt-6 p-4 rounded-2xl border text-xs leading-relaxed ${
              isDarkMode ? 'bg-zinc-950 border-zinc-900 text-zinc-400' : 'bg-slate-50 border-slate-150 text-slate-600'
            }`}>
              <div className="font-bold flex items-center gap-1 text-teal-500 mb-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Expert Verdict</span>
              </div>
              "{portfolioReadiness.verdict}"
            </div>
          </div>

          {/* Action roadmap for candidates */}
          <div className={`p-6 rounded-3xl border ${
            isDarkMode ? 'bg-zinc-900/30 border-zinc-900' : 'bg-slate-55 border-slate-200'
          }`}>
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-indigo-400 flex items-center gap-2 mb-4">
              <UserCheck className="w-4 h-4" />
              <span>Recommended Optimization Plan</span>
            </h3>

            <div className="space-y-3">
              {atsAnalysis.improvements.map((imp, idx) => (
                <div key={idx} className="flex gap-2 text-xs">
                  <div className="p-1 h-5 w-5 bg-teal-500/15 text-teal-400 shrink-0 font-bold rounded-lg flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <span className={isDarkMode ? 'text-zinc-300' : 'text-slate-600'}>{imp}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
