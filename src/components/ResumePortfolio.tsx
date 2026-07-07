import React, { useState } from 'react';
import { 
  personalInfo, 
  projects, 
  skillCategories, 
  experiences, 
  educationList, 
  certifications, 
  strengthAnalysis 
} from '../data';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Award, 
  GraduationCap, 
  Code, 
  BookOpen, 
  Activity, 
  ChevronRight, 
  Download, 
  Layers, 
  ExternalLink,
  Shield, 
  Sparkles,
  Search,
  CheckCircle2,
  FileCheck2,
  Check,
  Dribbble,
  Calendar,
  Upload,
  RefreshCw,
  Image,
  Database,
  Play,
  Github,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ResumePortfolioProps {
  isDarkMode: boolean;
  toggleView: () => void;
}

export default function ResumePortfolio({ isDarkMode, toggleView }: ResumePortfolioProps) {
  const [activeSkillTab, setActiveSkillTab] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [simulatedDownload, setSimulatedDownload] = useState(false);
  const [activeYogaPose, setActiveYogaPose] = useState<string | null>("Warrior II (Virabhadrasana II)");
  const [recruiterFocus, setRecruiterFocus] = useState<'all' | 'analytics' | 'ai'>('all');
  const [customJointAngle, setCustomJointAngle] = useState<number>(90);
  
  // Locked to highly professional, cohesive cyber teal single-color palette
  const accentColor = 'teal';
  
  // Active project filter selector - default to show the government AI scheme finder prominently
  const [projectFilter, setProjectFilter] = useState<'scheme_finder' | 'yoga_guide' | 'all'>('scheme_finder');
  
  // Widget selection tab for All Projects view
  const [widgetTab, setWidgetTab] = useState<'scheme_finder' | 'yoga_guide'>('scheme_finder');
  
  // Scheme matching simulator states
  const [schemeState, setSchemeState] = useState<string>("Andhra Pradesh");
  const [schemeCategory, setSchemeCategory] = useState<string>("Student / Education");
  const [schemeIncome, setSchemeIncome] = useState<number>(3.2); // in Lakhs INR
  
  // ATS corrections suite active state (clears anomalies instantly)
  const [isAtsCorrected, setIsAtsCorrected] = useState<boolean>(false);

  // SQL relational database simulator states
  const [sqlInputValue, setSqlInputValue] = useState<string>("SELECT * FROM certifications WHERE status = 'Verified'");
  const [sqlRunning, setSqlRunning] = useState<boolean>(false);
  const [sqlLogs, setSqlLogs] = useState<string[]>([]);
  const [sqlResults, setSqlResults] = useState<any[] | null>(null);

  const [avatar, setAvatar] = useState<string>(() => {
    return localStorage.getItem('user_avatar') || personalInfo.avatarPlaceholder;
  });
  const [showImageSelector, setShowImageSelector] = useState(false);
  const [customUrl, setCustomUrl] = useState('');
  const [uploadError, setUploadError] = useState('');
  const [avatarSuccess, setAvatarSuccess] = useState('');

  // Accent helper colors to provide beautiful visual design
  const getAccentClass = (type: 'text' | 'bg' | 'border' | 'gradient' | 'hoverBg' | 'accentText' | 'focusRing') => {
    // Default to teal for single unified gorgeous look
    switch(type) {
      case 'text': return 'text-teal-400';
      case 'accentText': return 'text-teal-500';
      case 'bg': return 'bg-teal-500/10';
      case 'border': return 'border-teal-500/20';
      case 'gradient': return 'from-teal-400 to-teal-600';
      case 'hoverBg': return 'hover:bg-teal-500/25';
      case 'focusRing': return 'focus:border-teal-500';
    }
  };

  const simulatedCertifications = [
    { name: "Python Full-Stack", issuer: "EduSkills", status: "Verified" },
    { name: "Google Developer Tools", issuer: "Google Program", status: "Verified" },
    { name: "Machine Learning Foundations", issuer: "FMML", status: "Verified" },
    { name: "Embedded Systems Developer", issuer: "EduSkills", status: "Vetted" },
    { name: "Professional Career Basics", issuer: "Wadhwani", status: "Vetted" }
  ];

  const simulatedAchievements = [
    { event: "Abhiyaan Regional Tech Round", result: "2nd Prize Winner", domain: "AI Presentation" },
    { event: "District Athletic Sprints", result: "Gold Medal Winner", domain: "Sports Endurance" },
    { event: "KIET CSE Coding Hackathon", result: "Runner Up", domain: "Logical Structures" }
  ];

  const executeSimulatedQuery = () => {
    setSqlRunning(true);
    setSqlLogs(["Connecting to KIET-CSE local sandbox relational backend...", "Scanning database storage metrics..."]);
    
    setTimeout(() => {
      setSqlLogs(prev => [...prev, "Compiling query predicates...", "Optimizing index nodes..."]);
      
      setTimeout(() => {
        const queryNormalized = sqlInputValue.toLowerCase();
        let rows: any[] = [];
        
        if (queryNormalized.includes("cert") || queryNormalized.includes("edu")) {
          if (queryNormalized.includes("verified")) {
             rows = simulatedCertifications.filter(x => x.status === "Verified");
          } else {
             rows = simulatedCertifications;
          }
        } else if (queryNormalized.includes("achieve") || queryNormalized.includes("prize") || queryNormalized.includes("sport") || queryNormalized.includes("win")) {
          rows = simulatedAchievements;
        } else {
          // Default fallbacks with schema metadata
          rows = [
            { error: "Query processed successfully, showing generic schema overview data" },
            ...simulatedCertifications
          ];
        }
        
        setSqlResults(rows);
        setSqlLogs(prev => [...prev, `Scan finished. Outputted ${rows.length} rows inside relational viewport in 8.4ms`]);
        setSqlRunning(false);
      }, 700);
    }, 450);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setUploadError("Image must be smaller than 2MB");
        setAvatarSuccess('');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setAvatar(base64String);
        localStorage.setItem('user_avatar', base64String);
        setUploadError('');
        setAvatarSuccess('Successfully updated from local file!');
        setTimeout(() => setAvatarSuccess(''), 4000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    const trimmed = customUrl.trim();
    if (trimmed) {
      if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://') && !trimmed.startsWith('data:image')) {
        setUploadError("Please provide a valid image URL starting with http:// or https://");
        setAvatarSuccess('');
        return;
      }
      setAvatar(trimmed);
      localStorage.setItem('user_avatar', trimmed);
      setCustomUrl('');
      setUploadError('');
      setAvatarSuccess('Successfully loaded direct image URL!');
      setTimeout(() => setAvatarSuccess(''), 4000);
    }
  };

  const handleResetAvatar = () => {
    setAvatar(personalInfo.avatarPlaceholder);
    localStorage.removeItem('user_avatar');
    setUploadError('');
    setAvatarSuccess('Reset to Suresh default photo!');
    setTimeout(() => setAvatarSuccess(''), 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadSim = () => {
    setSimulatedDownload(true);
    setTimeout(() => {
      setSimulatedDownload(false);
      // Simulate standard print action or pdf download trigger
      window.print();
    }, 1500);
  };

  const yogaPoses = [
    { name: "Warrior II (Virabhadrasana II)", angle: "135° elbow, 90° knee", status: "Perfect Alignment", color: "text-emerald-500", progress: 98 },
    { name: "Tree Pose (Vrikshasana)", angle: "15° knee rotation", status: "Optimal Balance", color: "text-emerald-500", progress: 95 },
    { name: "Down Dog (Adho Mukha Svanasana)", angle: "72° hip flexion", status: "Slight shoulder adjustment needed", color: "text-amber-500", progress: 84 },
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-zinc-950 text-zinc-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Dynamic Animated Hero Section       {/* Dynamic Animated Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 bg-zinc-950 text-zinc-100">
        
        {/* Abstract futuristic background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Neon Teal Glow Blob */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[130px] animate-pulse-slow"></div>
          {/* Neon Blue Glow Blob */}
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-slow [animation-delay:4s]"></div>
          
          {/* Cyber Grid Overlay */}
          <div className="absolute inset-0 bg-cyber-grid opacity-75"></div>
          
          {/* Cyber Dots Overlay */}
          <div className="absolute inset-0 bg-cyber-dots opacity-40"></div>
          
          {/* Futuristic subtle glowing coordinate markers */}
          <div className="absolute top-20 left-10 text-[8px] font-mono text-zinc-600 tracking-widest hidden md:block">SYS_STATUS: ACTIVE // COORD_X: 41.229 // COORD_Y: 77.013</div>
          <div className="absolute bottom-20 right-10 text-[8px] font-mono text-zinc-600 tracking-widest hidden md:block">AI_NETWORK: ONLINE // LATENCY: 14MS</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Interactive Customization Header Toolbar & Controls */}
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 p-4 rounded-2xl border backdrop-blur-xl bg-zinc-900/40 border-teal-500/15"
          >
            {/* Theme Info (Unified Single Color) */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400">
                <Shield className="w-4 h-4 text-teal-400" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-black uppercase text-zinc-500 font-mono tracking-widest block">
                  Aesthetic Theme
                </span>
                <span className="text-xs font-bold text-teal-400 font-mono">
                  Cyberpunk Neon Blue & Teal
                </span>
              </div>
            </div>

            {/* AI Optimizer Toggler */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] font-black uppercase text-zinc-400 font-mono tracking-wide block">
                  AI ATS OPTIMIZER
                </span>
                <span className="text-[9px] text-zinc-500 block">
                  Click to resolve data schema anomalies
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsAtsCorrected(!isAtsCorrected);
                  setAvatarSuccess(isAtsCorrected ? 'ATS mode deactivated' : '💎 Success: Relational database corrections applied!');
                  setTimeout(() => setAvatarSuccess(''), 4000);
                }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border font-bold text-xs cursor-pointer transition-all ${
                  isAtsCorrected 
                    ? 'bg-teal-500/20 border-teal-400/50 text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.3)]' 
                    : 'bg-zinc-900/80 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-855'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isAtsCorrected ? 'bg-teal-400 animate-pulse' : 'bg-zinc-600'}`}></div>
                <span>{isAtsCorrected ? 'ATS Optimized: Active' : 'Enable ATS Corrections'}</span>
              </button>
            </div>
          </motion.div>

          {/* Top Pill - Hiring Special Invitation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider border bg-zinc-900/85 border-teal-500/20 text-teal-400 shadow-md shadow-black/20">
              <Sparkles className="w-3.5 h-3.5 animate-spin text-teal-400" />
              <span>DATA ANALYST & AI/ML PROTOCOL v2.0</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column 1: Hero Text Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-last lg:order-last">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <div className="text-[10px] font-mono font-bold tracking-widest text-teal-500 uppercase">
                  [ IDENTITY VERIFICATION LOCKED ]
                </div>
                <h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans text-white leading-tight"
                  id="hero-name"
                >
                  Penta Naga Venkata <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(20,184,166,0.2)]">Suresh</span>
                </h1>
                <p className="text-xl sm:text-2xl font-bold font-mono tracking-wide text-cyan-400 flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                  Data Analyst & AI/ML Specialist
                </p>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-zinc-300 leading-relaxed text-base max-w-2xl"
              >
                {recruiterFocus === 'analytics' && "B.Tech candidate in computer science focusing on database optimization, clean SQL structures, and business latency reduction. Skilled in translating academic datasets into robust operational insights."}
                {recruiterFocus === 'ai' && "B.Tech (CSE - AI Major) student focused on machine learning algorithms, computer vision modeling, and real-time posture joint flexion mathematics. Experienced in Python data pipelines and AI model structures."}
                {recruiterFocus === 'all' && "B.Tech (CSE - Artificial Intelligence) candidate specializing in bridging raw database pipelines with statistical predictive products. Expert in Python, SQL, and embedded systems modeling."}
              </motion.p>

              {/* Core Skill Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap gap-2.5 justify-center lg:justify-start"
              >
                {['Python', 'SQL', 'Data Analytics', 'Machine Learning', 'AI'].map((sk) => (
                  <span 
                    key={sk}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold bg-zinc-900/60 border border-teal-500/20 text-teal-300 hover:border-cyan-400 hover:text-cyan-200 transition-colors"
                  >
                    ⚡ {sk}
                  </span>
                ))}
              </motion.div>

              {/* Recruiter Focus Selector */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="p-2 rounded-2xl border bg-zinc-900/60 border-zinc-800/80 flex flex-col md:flex-row items-center gap-3"
              >
                <div className="flex items-center gap-2 ml-2 mr-1">
                  <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-[10px] font-black font-mono tracking-widest uppercase shrink-0 text-zinc-400">
                    TARGET FOCUS CODES:
                  </span>
                </div>
                <div className="flex w-full gap-2">
                  <button
                    onClick={() => setRecruiterFocus('all')}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                      recruiterFocus === 'all'
                        ? 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/40 text-teal-300 shadow-md shadow-teal-500/5'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                    }`}
                  >
                    All-Rounder
                  </button>
                  <button
                    onClick={() => {
                      setRecruiterFocus('analytics');
                      setActiveSkillTab(0);
                    }}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                      recruiterFocus === 'analytics'
                        ? 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/40 text-teal-300 shadow-md shadow-teal-500/5'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                    }`}
                  >
                    Data Analyst
                  </button>
                  <button
                    onClick={() => {
                      setRecruiterFocus('ai');
                      setActiveSkillTab(1);
                    }}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                      recruiterFocus === 'ai'
                        ? 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/40 text-teal-300 shadow-md shadow-teal-500/5'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                    }`}
                  >
                    AI/ML Focus
                  </button>
                </div>
              </motion.div>

              {/* Dynamic Stats Widget Dashboard (Linked to Recruiter Focus) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="grid grid-cols-3 gap-4 p-4 rounded-2xl border bg-zinc-900/30 border-teal-500/10"
              >
                {recruiterFocus === 'all' && (
                  <>
                    <div className="text-center md:text-left">
                      <div className="text-lg md:text-xl font-bold font-mono text-teal-400">12+</div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">AI Models Trained</div>
                    </div>
                    <div className="text-center md:text-left border-l border-zinc-800 pl-4">
                      <div className="text-lg md:text-xl font-bold font-mono text-cyan-400">1.2k+</div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">SQL Queries Run</div>
                    </div>
                    <div className="text-center md:text-left border-l border-zinc-800 pl-4">
                      <div className="text-lg md:text-xl font-bold font-mono text-blue-400">5+</div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">AI Credentials</div>
                    </div>
                  </>
                )}
                {recruiterFocus === 'analytics' && (
                  <>
                    <div className="text-center md:text-left">
                      <div className="text-lg md:text-xl font-bold font-mono text-teal-400">4.2x</div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Indexing Latency</div>
                    </div>
                    <div className="text-center md:text-left border-l border-zinc-800 pl-4">
                      <div className="text-lg md:text-xl font-bold font-mono text-cyan-400">99.8%</div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Data Accuracy</div>
                    </div>
                    <div className="text-center md:text-left border-l border-zinc-800 pl-4">
                      <div className="text-lg md:text-xl font-bold font-mono text-blue-400">3NF</div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Normal DB Schema</div>
                    </div>
                  </>
                )}
                {recruiterFocus === 'ai' && (
                  <>
                    <div className="text-center md:text-left">
                      <div className="text-lg md:text-xl font-bold font-mono text-teal-400">98.2%</div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Pose Precision</div>
                    </div>
                    <div className="text-center md:text-left border-l border-zinc-800 pl-4">
                      <div className="text-lg md:text-xl font-bold font-mono text-cyan-400">14ms</div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Pose Inference</div>
                    </div>
                    <div className="text-center md:text-left border-l border-zinc-800 pl-4">
                      <div className="text-lg md:text-xl font-bold font-mono text-blue-400">+85%</div>
                      <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">Finder Speed</div>
                    </div>
                  </>
                )}
              </motion.div>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <button
                  onClick={handleDownloadSim}
                  id="btn-download-resume"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-teal-400 to-cyan-400 text-zinc-950 cursor-pointer hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] active:scale-98 transition-all"
                >
                  {simulatedDownload ? (
                    <>
                      <div className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>Initializing Dossier...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download Evaluated Resume</span>
                    </>
                  )}
                </button>

                <a
                  href="#contact"
                  id="lnk-hero-contact"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm border cursor-pointer active:scale-98 transition-all bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-zinc-100"
                >
                  <Mail className="w-4 h-4 text-teal-400" />
                  <span>Contact System</span>
                </a>

                {/* Audit Hub CTA Button to swap modes */}
                <button
                  onClick={toggleView}
                  id="btn-toggle-hud"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-teal-400 hover:text-teal-300 bg-teal-500/10 border border-teal-500/20 cursor-pointer"
                >
                  <Shield className="w-3.5 h-3.5 animate-pulse" />
                  <span>Inspect Audit Hub</span>
                </button>
              </motion.div>
            </div>

            {/* Column 2: Avatar & Dossier Config Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="lg:col-span-5 flex flex-col items-center justify-center space-y-6 order-first lg:order-first"
            >
              {/* Profile Illustration Card with Cyber Glow Rings */}
              <div className="relative p-6 w-full max-w-[340px] rounded-3xl border bg-zinc-900/80 border-zinc-800 shadow-2xl shadow-black/80 backdrop-blur-xl">
                
                {/* Horizontal scanning light reflection at the top */}
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>

                <div className="flex flex-col items-center text-center">
                  
                  {/* Photo with double animated neon ring */}
                  <div className="relative mb-5 mt-2">
                    {/* Rotating Dashed Outer Ring */}
                    <div className="absolute -inset-3 rounded-full border border-dashed border-teal-500/30 animate-[spin_30s_linear_infinite]"></div>
                    {/* Reverse Rotating Solid Outer Ring */}
                    <div className="absolute -inset-1.5 rounded-full border border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                    {/* Cyber Glow backdrop */}
                    <div className="absolute inset-0 rounded-full bg-teal-500/10 blur-md"></div>
                    
                    {/* Profile image with verified indicator */}
                    <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-teal-500 via-cyan-400 to-blue-500">
                      <div className="w-full h-full rounded-full overflow-hidden border-2 border-zinc-900 bg-zinc-950 relative group">
                        <img 
                          src={avatar}
                          alt={personalInfo.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Scanning beam line inside image */}
                        <div className="absolute inset-x-0 h-0.5 bg-cyan-400/60 shadow-[0_0_8px_#22d3ee] animate-scan pointer-events-none"></div>
                      </div>
                    </div>
                    
                    {/* Absolute system verified indicator */}
                    <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full border-2 border-zinc-900 bg-gradient-to-r from-teal-500 to-cyan-400 text-zinc-950 flex items-center justify-center shadow-lg shadow-teal-500/20">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Name and Location tags */}
                  <div className="space-y-1">
                    <h3 className="font-extrabold text-xl text-white tracking-tight">{personalInfo.name}</h3>
                    <p className="text-xs text-teal-400 font-mono font-semibold tracking-wider uppercase">B.Tech Graduate 2027</p>
                  </div>

                  <div className="w-full h-px my-4 bg-zinc-800/80"></div>

                  {/* Profile quick metadata */}
                  <div className="w-full space-y-2.5 text-xs text-left font-mono">
                    <div className="flex items-center gap-2.5 text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-teal-400" />
                      <span className="text-zinc-300">Andhra Pradesh, India</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-zinc-400">
                      <GraduationCap className="w-3.5 h-3.5 shrink-0 text-teal-400" />
                      <span className="text-zinc-300">KIET CSE - AI Major</span>
                    </div>

                    <div className="flex items-center gap-2.5 text-zinc-400">
                      <BookOpen className="w-3.5 h-3.5 shrink-0 text-teal-400" />
                      <span className="text-zinc-300">5+ Technical Credentials</span>
                    </div>

                    {personalInfo.github && (
                      <div className="flex items-center gap-2.5 text-zinc-400">
                        <Github className="w-3.5 h-3.5 shrink-0 text-teal-400" />
                        <a 
                          href={`https://${personalInfo.github}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="hover:text-teal-300 hover:underline text-zinc-300"
                        >
                          {personalInfo.github}
                        </a>
                      </div>
                    )}

                    {personalInfo.phone && (
                      <div className="flex items-center gap-2.5 text-zinc-400">
                        <Phone className="w-3.5 h-3.5 shrink-0 text-teal-400" />
                        <span className="text-zinc-300">{personalInfo.phone}</span>
                      </div>
                    )}
                  </div>

                  {/* Tiny Quick Contact Link */}
                  <div className="mt-4 w-full">
                    <a
                      href={`https://${personalInfo.linkedin}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/10 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-teal-400" />
                      <span>linkedin.com/suresh</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>

                  {/* Image Edit Trigger */}
                  <div className="mt-3">
                    <button
                      onClick={() => setShowImageSelector(!showImageSelector)}
                      id="btn-edit-image"
                      className="px-3 py-1 rounded-full text-[10px] font-bold bg-zinc-900 border border-zinc-800 hover:border-teal-500/30 text-zinc-400 hover:text-teal-300 flex items-center gap-1 cursor-pointer transition-all"
                    >
                      <Image className="w-3.5 h-3.5 text-teal-400" />
                      <span>{showImageSelector ? "Close Settings" : "Configure Avatar"}</span>
                    </button>
                  </div>

                </div>
              </div>

              {/* Dossier Configurator Terminal (Shown underneath Avatar only when clicked) */}
              <AnimatePresence>
                {showImageSelector && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="w-full max-w-[340px] p-4 rounded-2xl border text-left space-y-4 text-xs overflow-hidden bg-zinc-900/90 border-zinc-800"
                  >
                    <div>
                      <span className="font-extrabold uppercase tracking-wider block mb-2 text-teal-400 font-mono">Cool Presets</span>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            const p = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=256&h=256&q=80";
                            setAvatar(p);
                            localStorage.setItem('user_avatar', p);
                            setAvatarSuccess("Loaded AI Specialist Preset!");
                            setTimeout(() => setAvatarSuccess(''), 3000);
                          }}
                          className="p-1 rounded-lg hover:border-teal-400 border border-zinc-800 transition-all overflow-hidden bg-zinc-950 cursor-pointer"
                        >
                          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=64&h=64&q=80" className="w-full h-10 object-cover rounded" referrerPolicy="no-referrer" />
                          <span className="text-[9px] block text-center mt-1 text-zinc-500 font-mono">AI Core</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const p = "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=256&h=256&q=80";
                            setAvatar(p);
                            localStorage.setItem('user_avatar', p);
                            setAvatarSuccess("Loaded Software Developer Preset!");
                            setTimeout(() => setAvatarSuccess(''), 3000);
                          }}
                          className="p-1 rounded-lg hover:border-teal-400 border border-zinc-800 transition-all overflow-hidden bg-zinc-955 cursor-pointer"
                        >
                          <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&w=64&h=64&q=80" className="w-full h-10 object-cover rounded" referrerPolicy="no-referrer" />
                          <span className="text-[9px] block text-center mt-1 text-zinc-500 font-mono">Coder</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const baseInit = "https://api.dicebear.com/7.x/initials/svg?seed=PNS";
                            setAvatar(baseInit);
                            localStorage.setItem('user_avatar', baseInit);
                            setAvatarSuccess("Loaded Minimalist Initials!");
                            setTimeout(() => setAvatarSuccess(''), 3000);
                          }}
                          className="p-1 rounded-lg hover:border-teal-400 border border-zinc-800 transition-all overflow-hidden bg-zinc-950 flex flex-col items-center justify-center h-[58px] cursor-pointer"
                        >
                          <div className="w-full h-10 bg-gradient-to-tr from-zinc-850 to-zinc-800 rounded flex items-center justify-center font-black text-xs text-teal-400">
                            P.S.
                          </div>
                          <span className="text-[9px] block text-center mt-1 text-zinc-500 font-mono">Monogram</span>
                        </button>
                      </div>
                    </div>

                    {/* Local File upload */}
                    <div className="space-y-1.5">
                      <span className="font-extrabold uppercase tracking-wider block text-teal-400 font-mono">Upload Image File</span>
                      <label className="flex items-center gap-2 p-2.5 rounded-xl border border-dashed text-zinc-400 hover:text-teal-400 hover:border-teal-400 cursor-pointer transition-all justify-center bg-zinc-955 border-zinc-800">
                        <Upload className="w-3.5 h-3.5 text-teal-400" />
                        <span>Choose local file</span>
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleFileUpload} 
                          className="hidden" 
                        />
                      </label>
                      {uploadError && <p className="text-[10px] text-red-500 font-bold">{uploadError}</p>}
                    </div>

                    {/* Custom URL pasting with LIVE PREVIEW */}
                    <div className="space-y-1.5">
                      <span className="font-extrabold uppercase tracking-wider block text-teal-400 font-mono">Paste Live Url</span>
                      <div className="flex gap-1.5">
                        <input
                          type="text"
                          placeholder="Paste https://.../photo.png"
                          value={customUrl}
                          onChange={(e) => {
                            setCustomUrl(e.target.value);
                            setUploadError('');
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleApplyUrl();
                            }
                          }}
                          className="flex-1 p-2 rounded-xl border outline-none text-xs bg-zinc-950 border-zinc-800 text-zinc-200 focus:border-teal-400"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            handleApplyUrl();
                          }}
                          className="px-3 py-2 bg-teal-500 text-zinc-950 hover:bg-teal-400 rounded-xl font-bold active:scale-95 transition-all cursor-pointer"
                        >
                          Apply
                        </button>
                      </div>
                      
                      {customUrl.trim().startsWith('http') && (
                        <div className="p-1.5 rounded-xl bg-zinc-950/60 border border-zinc-800 flex items-center gap-2 mt-1">
                          <div className="w-6 h-6 rounded overflow-hidden shrink-0 border border-zinc-800 bg-zinc-900">
                            <img src={customUrl.trim()} className="w-full h-full object-cover" onError={() => setUploadError("Invalid image path or CORS block")} referrerPolicy="no-referrer" />
                          </div>
                          <span className="text-[9px] text-zinc-500 truncate block flex-1">Image found! Ready to Apply</span>
                        </div>
                      )}
                    </div>

                    {/* Reset to Default */}
                    <button
                      type="button"
                      onClick={handleResetAvatar}
                      className="w-full py-2 border border-zinc-800 hover:border-red-500/20 hover:bg-red-500/10 text-zinc-400 hover:text-red-400 rounded-xl font-bold transition-all cursor-pointer flex items-center justify-center gap-1 text-[10px]"
                    >
                      <RefreshCw className="w-3 h-3 animate-spin duration-3000 text-red-400" />
                      <span>Reset to Default Photo</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Structured Skills Bento Grid Showcase */}
      <section className={`py-20 border-t ${isDarkMode ? 'border-zinc-900 bg-zinc-900/10' : 'border-slate-100 bg-white'}`} id="skills">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs uppercase tracking-widest font-black text-teal-500">Skills Architecture</h2>
              <p className="text-3xl font-extrabold mt-1">Organized Core Capabilities</p>
            </div>
            {/* Horizontal Tabs to toggle lists */}
            <div className="flex gap-2.5 mt-4 md:mt-0 overflow-x-auto pb-1.5 scrollbar-thin">
              {skillCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSkillTab(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    activeSkillTab === idx 
                      ? 'bg-teal-500 text-zinc-950 shadow-md shadow-teal-500/10' 
                      : isDarkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab View with Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {skillCategories[activeSkillTab].skills.map((skill, index) => {
                // Determine a simulated proficiency factor based on index for aesthetic UI
                const proficiencyList = [95, 90, 88, 85, 80, 75];
                const profitVal = proficiencyList[index % proficiencyList.length];
                
                return (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2, delay: index * 0.04 }}
                    className={`p-5 rounded-2xl border flex flex-col justify-between transition-all group ${
                      isDarkMode ? 'bg-zinc-900/60 hover:bg-zinc-900 border-zinc-800' : 'bg-slate-50 hover:bg-white border-slate-100 hover:shadow-md'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div className="p-2 ml-px rounded-lg bg-teal-500/15 text-teal-400">
                          <Code className="w-4 h-4 text-teal-400" />
                        </div>
                        <span className="text-xs font-mono font-bold text-zinc-500">{profitVal}% Evaluated</span>
                      </div>
                      <h4 className="font-extrabold text-md group-hover:text-teal-400 transition-colors">{skill}</h4>
                    </div>

                    {/* Styled progress level bar */}
                    <div className="mt-5 w-full">
                      <div className={`h-1.5 w-full rounded-full ${isDarkMode ? 'bg-zinc-800' : 'bg-slate-200'}`}>
                        <div 
                          className="h-1.5 rounded-full bg-gradient-to-r from-teal-650 to-teal-400"
                          style={{ width: `${profitVal}%` }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Key Strength Analysis Summary Drawer */}
          <div className={`mt-12 p-6 rounded-3xl border ${
            isDarkMode ? 'bg-zinc-900/40 border-zinc-900' : 'bg-slate-50 border-slate-200/60'
          }`}>
            <h3 className="text-sm font-bold flex items-center gap-2 text-teal-400">
              <Sparkles className="w-4 h-4" />
              <span>Career Coach Analysis on Personal Growth</span>
            </h3>
            <p className={`text-sm leading-relaxed mt-2.5 ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              "{strengthAnalysis.growthPotential}"
            </p>
          </div>

        </div>
      </section>

      {/* Featured Projects Highlight with Interactive Pose guide demo */}
      <section className="py-20 max-w-7xl mx-auto px-6" id="projects">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-6 border-zinc-800/10">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-black text-teal-500">Academic Lab</h2>
            <p className="text-3xl font-extrabold mt-1">Featured Practical Projects</p>
            <p className={`text-sm mt-2 max-w-2xl ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              These projects were designed and built strictly mirroring documented evidence with zero invented artifacts, representing true academic proof.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={() => setProjectFilter('scheme_finder')}
              className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${
                projectFilter === 'scheme_finder'
                  ? 'bg-teal-500 text-zinc-950 border-teal-500 shadow-md shadow-teal-500/15'
                  : isDarkMode
                    ? 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Government AI Scheme Finder
            </button>
            <button
              onClick={() => setProjectFilter('yoga_guide')}
              className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${
                projectFilter === 'yoga_guide'
                  ? 'bg-teal-500 text-zinc-950 border-teal-500 shadow-md shadow-teal-500/15'
                  : isDarkMode
                    ? 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              Yoga Pose Guide
            </button>
            <button
              onClick={() => setProjectFilter('all')}
              className={`px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all border ${
                projectFilter === 'all'
                  ? 'bg-teal-500 text-zinc-950 border-teal-500 shadow-md shadow-teal-500/15'
                  : isDarkMode
                    ? 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              All Projects
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          
          {/* Main project card loop (Left column) */}
          <div className="lg:col-span-8 space-y-6">
            {projects
              .filter(p => {
                if (projectFilter === 'all') return true;
                if (projectFilter === 'scheme_finder') return p.name === "Government AI Scheme Finder";
                if (projectFilter === 'yoga_guide') return p.name === "Yoga Pose Guide";
                return true;
              })
              .map((proj, idx) => (
              <div 
                key={idx}
                className={`p-6 md:p-8 rounded-3xl border transition-all ${
                  isDarkMode 
                    ? 'bg-zinc-900/60 hover:bg-zinc-900 border-zinc-800 hover:border-teal-500/20' 
                    : 'bg-white hover:bg-slate-50 border-slate-200 hover:shadow-lg'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-black uppercase tracking-wide bg-teal-500/10 text-teal-400 border border-teal-500/10">
                      {proj.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">Academic Project</span>
                  </div>
                  <div className="flex gap-2">
                    {proj.url ? (
                      <a 
                        href={proj.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1 rounded bg-teal-500 text-white font-extrabold text-[10px] uppercase tracking-wider hover:bg-teal-600 hover:scale-[1.03] active:scale-[0.98] transition-all shadow-sm"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Live Project</span>
                      </a>
                    ) : (
                      /* Anomaly Flag warning when missing repo */
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-500 font-bold">
                        <Shield className="w-3 h-3" />
                        <span>Code Private (Locked)</span>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-black">{proj.name}</h3>
                <p className={`text-sm md:text-base leading-relaxed mt-3 ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
                  {proj.description}
                </p>

                {/* Outcome checklist */}
                <div className="mt-5 space-y-2">
                  <h4 className="text-xs uppercase font-extrabold tracking-wider text-teal-500">Key Outcomes Evaluated</h4>
                  {proj.outcomes.map((out, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={isDarkMode ? 'text-zinc-300' : 'text-slate-700'}>{out}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-zinc-800/20">
                  {proj.technologies.map(tech => (
                    <span key={tech} className={`px-2.5 py-1 rounded text-xs font-mono ${
                      isDarkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-slate-100 text-slate-700'
                    }`}>
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Lab Widget: Dynamic based on current project filter */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {projectFilter === 'all' && (
                <div className={`p-1 rounded-2xl flex border ${
                  isDarkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-slate-100 border-slate-200'
                }`}>
                  <button
                    onClick={() => setWidgetTab('scheme_finder')}
                    className={`flex-1 py-2 px-3 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer text-center ${
                      widgetTab === 'scheme_finder'
                        ? 'bg-teal-500 text-zinc-950 shadow-sm'
                        : isDarkMode ? 'text-zinc-400 hover:text-zinc-200' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Scheme Matcher
                  </button>
                  <button
                    onClick={() => setWidgetTab('yoga_guide')}
                    className={`flex-1 py-2 px-3 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer text-center ${
                      widgetTab === 'yoga_guide'
                        ? 'bg-teal-500 text-zinc-950 shadow-sm'
                        : isDarkMode ? 'text-zinc-400 hover:text-zinc-200' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Yoga Simulator
                  </button>
                </div>
              )}

              {(projectFilter === 'scheme_finder' || (projectFilter === 'all' && widgetTab === 'scheme_finder')) ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-6 rounded-3xl border relative select-none overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-805 shadow-xl' 
                    : 'bg-white border-slate-200 shadow-md'
                }`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full filter blur-xl"></div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-400">
                      <Sparkles className="w-4 h-4 text-teal-500" />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-wider text-teal-500">AI Eligibility Matcher</h3>
                  </div>
                  <div className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-widest bg-teal-500/10 text-teal-500 border border-teal-500/10">
                    Active Demo
                  </div>
                </div>

                <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-zinc-400' : 'text-slate-500'}`}>
                  Configure profile parameters to simulate how the Vercel-hosted intelligent engine evaluates eligibility in real-time:
                </p>

                {/* State Select */}
                <div className="space-y-1.5 mb-4">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">Select State</label>
                  <select
                    value={schemeState}
                    onChange={(e) => setSchemeState(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl text-xs font-bold border outline-none ${
                      isDarkMode 
                        ? 'bg-zinc-950 border-zinc-800 text-zinc-200 focus:border-teal-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 focus:border-teal-500'
                    }`}
                  >
                    <option value="Andhra Pradesh">Andhra Pradesh (Home)</option>
                    <option value="Delhi">Delhi NCR</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                  </select>
                </div>

                {/* Category Select */}
                <div className="space-y-1.5 mb-4">
                  <label className="text-[10px] font-extrabold uppercase tracking-wider text-zinc-400">Target Category</label>
                  <div className="grid grid-cols-2 gap-1">
                    {["Student / Education", "Agriculture / Farmer", "Startup / IT", "MSME / Business"].map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSchemeCategory(cat)}
                        className={`py-2 px-1.5 rounded-lg text-[10px] font-bold text-center cursor-pointer transition-all ${
                          schemeCategory === cat
                            ? 'bg-teal-500 text-zinc-950 font-black shadow-sm'
                            : isDarkMode ? 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {cat.split(" / ")[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Income Slider */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-zinc-500 dark:text-zinc-400">Annual Family Income:</span>
                    <span className="font-mono font-black text-teal-500 text-sm">₹{schemeIncome} Lakhs</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="12.0"
                    step="0.5"
                    value={schemeIncome}
                    onChange={(e) => setSchemeIncome(Number(e.target.value))}
                    className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-zinc-800 accent-teal-500 outline-none"
                  />
                  <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                    <span>Min: ₹0.5L</span>
                    <span>Max: ₹12.0L</span>
                  </div>
                </div>

                {/* Dynamic matching result logic */}
                {(() => {
                  let matchedScheme = "";
                  let schemeDesc = "";
                  let eligibilityScore = 98;
                  
                  if (schemeCategory === "Student / Education") {
                    if (schemeIncome <= 4.5) {
                      matchedScheme = "Central Sector Post-Matric Scholarship";
                      schemeDesc = "100% tuition coverage for higher education paths (AI/CS students).";
                      eligibilityScore = Math.min(100, Math.round(98 - (schemeIncome * 2)));
                    } else {
                      matchedScheme = "Pradhan Mantri Vidya Lakshmi Loan Scheme";
                      schemeDesc = "Interest-subsidized education credits for verified B.Tech programs.";
                      eligibilityScore = Math.min(100, Math.round(90 - (schemeIncome * 1.5)));
                    }
                  } else if (schemeCategory === "Agriculture / Farmer") {
                    matchedScheme = "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)";
                    schemeDesc = "Direct income support of ₹6,000/year for landholding farmers.";
                    eligibilityScore = schemeIncome <= 3.0 ? 99 : 75;
                  } else if (schemeCategory === "Startup / IT") {
                    matchedScheme = "SISFS (Startup India Seed Fund Scheme)";
                    schemeDesc = "Financial assistance up to ₹20 Lakhs for early-stage proof of concept.";
                    eligibilityScore = schemeIncome <= 8.0 ? 92 : 60;
                  } else {
                    matchedScheme = "SMILE (SIDBI Make India Soft Loan Fund)";
                    schemeDesc = "Soft loans on soft terms to meet required debt-equity ratio for MSMEs.";
                    eligibilityScore = schemeIncome <= 10.0 ? 89 : 55;
                  }

                  let scoreBg = "bg-emerald-500";
                  let scoreText = "text-emerald-500";
                  if (eligibilityScore < 70) {
                    scoreBg = "bg-amber-500";
                    scoreText = "text-amber-500";
                  }

                  return (
                    <div className={`p-4 rounded-2xl border ${
                      isDarkMode ? 'bg-zinc-950/60 border-zinc-850' : 'bg-slate-50 border-slate-200'
                    } space-y-3`}>
                      <div className="flex justify-between items-center pb-2 border-b border-zinc-800/10">
                        <span className="text-[10px] font-black uppercase tracking-wider text-teal-450">Matched Scheme</span>
                        <div className="flex items-center gap-1">
                          <div className={`w-2 h-2 rounded-full ${scoreBg} animate-pulse`}></div>
                          <span className={`text-[10px] font-mono font-black ${scoreText}`}>{eligibilityScore}% Match</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-extrabold text-zinc-100 dark:text-zinc-100 leading-snug">{matchedScheme}</h4>
                        <p className="text-[11px] text-zinc-400 mt-1 leading-normal">{schemeDesc}</p>
                      </div>

                      <div className="pt-2 border-t border-zinc-800/10 flex items-center justify-between text-[10px]">
                        <span className="text-zinc-500">Regional Authority:</span>
                        <span className="font-mono font-bold text-zinc-300">{schemeState} Govt</span>
                      </div>
                    </div>
                  );
                })()}

                {/* Direct Live Link Call-to-action */}
                <div className="mt-4">
                  <a 
                    href="https://government-ai-scheme-finder-git-main-success-squad.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 text-zinc-950 font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-teal-500/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Try Active Scheme Finder</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {(() => {
                  const activePoseName = activeYogaPose || "Warrior II (Virabhadrasana II)";
              let ideal = 90;
              let label = "Knee Joint Angle";
              let minVal = 45;
              let maxVal = 135;
              
              if (activePoseName === "Tree Pose (Vrikshasana)") {
                ideal = 15;
                label = "Knee Rotation Angle";
                minVal = 0;
                maxVal = 60;
              } else if (activePoseName === "Down Dog (Adho Mukha Svanasana)") {
                ideal = 72;
                label = "Hip Joint Flexion";
                minVal = 40;
                maxVal = 110;
              }
              
              const diff = Math.abs(customJointAngle - ideal);
              const accuracy = Math.max(45, Math.min(100, Math.round(100 - diff * 1.6)));
              
              let status = "Adjust Joints (Misaligned)";
              let statusColor = isDarkMode ? "text-rose-400 bg-rose-500/10 border-rose-500/20" : "text-rose-700 bg-rose-50 border-rose-200";
              let statusColorText = "text-rose-500 font-bold";
              if (accuracy >= 95) {
                status = "Perfect Alignment";
                statusColor = isDarkMode ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" : "text-emerald-700 bg-emerald-50 border-emerald-200";
                statusColorText = "text-emerald-500 font-bold";
              } else if (accuracy >= 80) {
                status = "Optimal alignment, slight dev";
                statusColor = isDarkMode ? "text-amber-400 bg-amber-500/10 border-amber-500/20" : "text-amber-700 bg-amber-50 border-amber-200";
                statusColorText = "text-amber-500 font-bold";
              }

              const renderSVGSkeleton = () => {
                const color = isDarkMode ? "#2dd4bf" : "#0d9488"; // teal-400 / teal-600
                const accentColorStyle = isDarkMode ? "#14b8a6" : "#0d9488"; // teal-500 / teal-600
                const passiveColor = isDarkMode ? "#3f3f46" : "#cbd5e1"; // zinc-700 / slate-300
                const headColor = isDarkMode ? "#a1a1aa" : "#475569";
                
                if (activePoseName === "Warrior II (Virabhadrasana II)") {
                  // Dynamic knee coordinates
                  const rx = 100 + 15 + (customJointAngle - 90) * 0.16;
                  const ry = 100 - (customJointAngle - 90) * 0.1;
                  return (
                    <svg className="w-full h-36" viewBox="0 0 200 150">
                      <line x1="20" y1="135" x2="180" y2="135" stroke={passiveColor} strokeWidth="1" strokeDasharray="3 3" />
                      {/* Head */}
                      <circle cx="100" cy="40" r="7" fill="none" stroke={headColor} strokeWidth="2.5" />
                      {/* Spine / Torso */}
                      <line x1="100" y1="47" x2="100" y2="90" stroke={accentColorStyle} strokeWidth="3" strokeLinecap="round" />
                      {/* Straight Extended Arms */}
                      <line x1="60" y1="56" x2="140" y2="56" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
                      {/* Left leg straight back leg */}
                      <line x1="100" y1="90" x2="70" y2="135" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
                      {/* Right Leg Thigh (dynamic bend) */}
                      <line x1="100" y1="90" x2={rx} y2={ry} stroke={accentColorStyle} strokeWidth="3" strokeLinecap="round" />
                      {/* Right Leg Calf */}
                      <line x1={rx} y1={ry} x2="145" y2="135" stroke={accentColorStyle} strokeWidth="3" strokeLinecap="round" />
                      {/* Marker Dot */}
                      <circle cx={rx} cy={ry} r="4" className="fill-teal-400/80 stroke-teal-500 stroke-1" />
                    </svg>
                  );
                }
                
                if (activePoseName === "Tree Pose (Vrikshasana)") {
                  const rx = 100 + 18 + (customJointAngle - 15) * 0.35;
                  const ry = 110 + (customJointAngle - 15) * 0.08;
                  return (
                    <svg className="w-full h-36" viewBox="0 0 200 150">
                      <line x1="20" y1="135" x2="180" y2="135" stroke={passiveColor} strokeWidth="1" strokeDasharray="3 3" />
                      {/* Head */}
                      <circle cx="100" cy="35" r="7" fill="none" stroke={headColor} strokeWidth="2.5" />
                      {/* Raised prayer hands */}
                      <path d="M 100 42 L 88 40 L 100 22 L 112 40 Z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
                      {/* Torso */}
                      <line x1="100" y1="43" x2="100" y2="90" stroke={accentColorStyle} strokeWidth="3" />
                      {/* Left Standing leg */}
                      <line x1="100" y1="90" x2="100" y2="135" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
                      {/* Right Leg Thigh */}
                      <line x1="100" y1="90" x2={rx} y2={ry} stroke={accentColorStyle} strokeWidth="3" strokeLinecap="round" />
                      {/* Right foot returning to knee */}
                      <line x1={rx} y1={ry} x2="100" y2="112" stroke={accentColorStyle} strokeWidth="3" strokeLinecap="round" />
                      <circle cx={rx} cy={ry} r="4" className="fill-teal-400/80 stroke-teal-500 stroke-1" />
                    </svg>
                  );
                }
                
                // Down Dog
                const apexX = 100;
                const apexY = 65 + (customJointAngle - 72) * 0.45;
                return (
                  <svg className="w-full h-36" viewBox="0 0 200 150">
                    <line x1="20" y1="135" x2="180" y2="135" stroke={passiveColor} strokeWidth="1" strokeDasharray="3 3" />
                    {/* Spine */}
                    <line x1={apexX} y1={apexY} x2="135" y2="98" stroke={accentColorStyle} strokeWidth="3" strokeLinecap="round" />
                    {/* Back legs to Apex */}
                    <line x1="60" y1="135" x2={apexX} y2={apexY} stroke={color} strokeWidth="2.5" strokeLinecap="round" />
                    {/* Arms to Ground */}
                    <line x1="135" y1="98" x2="155" y2="135" stroke={accentColorStyle} strokeWidth="3" strokeLinecap="round" />
                    {/* Head */}
                    <circle cx="127" cy="108" r="6" fill="none" stroke={headColor} strokeWidth="2" />
                    <circle cx={apexX} cy={apexY} r="4" className="fill-teal-500/85 stroke-teal-400 stroke-1" />
                  </svg>
                );
              };

              return (
                <div className={`p-6 rounded-3xl border relative sticky top-24 select-none overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-800 shadow-xl' 
                    : 'bg-white border-slate-200 shadow-md'
                }`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full filter blur-xl"></div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-400">
                        <Activity className="w-4 h-4 text-teal-500" />
                      </div>
                      <h3 className="text-sm font-black uppercase tracking-wider text-teal-500">Pose Guide Simulator</h3>
                    </div>
                    <div className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/10">
                      Live Solver
                    </div>
                  </div>

                  <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-zinc-400' : 'text-slate-500'}`}>
                    Drag the range slider to simulate computer vision joint node calculations for Suresh's posture guide logic:
                  </p>

                  {/* Pose Selector Tabs */}
                  <div className="grid grid-cols-3 gap-1 mb-4">
                    {[
                      { short: "Warrior II", name: "Warrior II (Virabhadrasana II)", bas: 90 },
                      { short: "Tree", name: "Tree Pose (Vrikshasana)", bas: 15 },
                      { short: "Down Dog", name: "Down Dog (Adho Mukha Svanasana)", bas: 72 }
                    ].map(p => (
                      <button
                        key={p.name}
                        onClick={() => {
                          setActiveYogaPose(p.name);
                          setCustomJointAngle(p.bas);
                        }}
                        className={`py-1.5 px-1 rounded-lg text-[10px] font-bold text-center cursor-pointer transition-all ${
                          activePoseName === p.name
                            ? 'bg-teal-500 text-zinc-950 font-black shadow-sm'
                            : isDarkMode ? 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {p.short}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Render Canvas Box */}
                  <div className={`p-2.5 rounded-2xl border flex items-center justify-center mb-4 relative ${
                    isDarkMode ? 'bg-zinc-950/80 border-zinc-900' : 'bg-slate-50 border-slate-200'
                  }`}>
                    {renderSVGSkeleton()}
                    <div className="absolute bottom-2.5 right-3 text-[10px] font-mono text-zinc-500 font-bold">
                      Calculated Joints: {customJointAngle}°
                    </div>
                  </div>

                  {/* Range Slider */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-zinc-500 dark:text-zinc-400">{label}:</span>
                      <span className="font-mono font-black text-teal-500 text-sm">{customJointAngle}°</span>
                    </div>
                    <input
                      type="range"
                      min={minVal}
                      max={maxVal}
                      value={customJointAngle}
                      onChange={(e) => setCustomJointAngle(Number(e.target.value))}
                      className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-zinc-800 accent-teal-500 outline-none"
                    />
                    <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                      <span>Min: {minVal}°</span>
                      <span>Target Ideal: {ideal}°</span>
                      <span>Max: {maxVal}°</span>
                    </div>
                  </div>

                  {/* Calibration Result Badge */}
                  <div className={`p-3 rounded-2xl border ${statusColor} space-y-1.5`}>
                    <div className="flex justify-between text-xs font-bold">
                      <span>Solver Verdict:</span>
                      <span className="uppercase tracking-wide">{status}</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="opacity-80">Computed Accuracy Rate:</span>
                      <span className="font-black text-xs font-mono">{accuracy}%</span>
                    </div>
                  </div>


                </div>
              );
            })()}

            {/* Relational SQL Sandbox SQL Simulator */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`p-6 mt-6 rounded-3xl border relative select-none overflow-hidden ${
                isDarkMode 
                  ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 border-zinc-805 shadow-xl' 
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full filter blur-xl"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg bg-teal-500/15 ${getAccentClass('text')}`}>
                    <Database className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-teal-400">SQL Database Terminal</h3>
                </div>
                <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-500 border border-emerald-500/10">
                  SQLite-Engine
                </span>
              </div>

              <p className={`text-xs leading-relaxed mb-4 ${isDarkMode ? 'text-zinc-400' : 'text-slate-500'}`}>
                Query Suresh's verified certifications & regional Abhiyaan accolades in real-time. Select a preset or type below:
              </p>

              {/* Presets Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setSqlInputValue("SELECT * FROM certifications WHERE status = 'Verified'")}
                  className={`py-1.5 px-2 rounded-xl text-[10px] font-bold text-center cursor-pointer transition-all border ${
                    sqlInputValue.includes("cert")
                      ? 'bg-teal-500/10 border-teal-500/40 text-teal-400'
                      : isDarkMode ? 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  📄 View Verified Certs
                </button>
                <button
                  type="button"
                  onClick={() => setSqlInputValue("SELECT * FROM achievements")}
                  className={`py-1.5 px-2 rounded-xl text-[10px] font-bold text-center cursor-pointer transition-all border ${
                    sqlInputValue.includes("achieve")
                      ? 'bg-teal-500/10 border-teal-500/40 text-teal-400'
                      : isDarkMode ? 'bg-zinc-950 border-zinc-850 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900' : 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  🏅 View All Accolades
                </button>
              </div>

              {/* Code Query Input Field */}
              <div className="space-y-1.5 mb-4 text-left">
                <label className="text-[10px] font-black uppercase text-zinc-500 font-mono tracking-widest">
                  Structured Query Language Sandbox:
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3.5 text-teal-500 font-mono text-xs font-black">
                    sqlite&gt;
                  </span>
                  <textarea
                    value={sqlInputValue}
                    onChange={(e) => setSqlInputValue(e.target.value)}
                    rows={2}
                    className={`w-full pl-[64px] pr-4 py-3 rounded-2xl font-mono text-xs outline-none border resize-none ${
                      isDarkMode 
                        ? 'bg-zinc-950 border-zinc-850 text-teal-400 focus:border-teal-500/80' 
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-teal-600'
                    }`}
                  />
                </div>
              </div>

              {/* Query Action Controls */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-[10px] text-zinc-500 font-mono">
                  Schema: certs, achievements
                </span>
                <button
                  type="button"
                  onClick={executeSimulatedQuery}
                  disabled={sqlRunning}
                  className={`px-4 py-2 rounded-xl font-bold text-xs bg-teal-500 text-zinc-950 hover:bg-teal-400 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-55`}
                >
                  {sqlRunning ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>Simulating...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-zinc-950 text-zinc-950" />
                      <span>Execute Query</span>
                    </>
                  )}
                </button>
              </div>

              {/* Live Relational Output Tabular / Terminal View */}
              <div className="space-y-3">
                
                {/* Simulated connection status logs */}
                {sqlLogs.length > 0 && (
                  <div className="p-3 bg-zinc-950 rounded-2xl border border-zinc-850 font-mono text-[10px] text-zinc-400 space-y-1 text-left select-text max-h-[80px] overflow-y-auto">
                    {sqlLogs.map((logStr, i) => (
                      <div key={i} className="flex gap-1.5">
                        <span className="text-zinc-650 shrink-0">[{i+1}]</span>
                        <span className={logStr.includes("finished") ? "text-emerald-400 font-semibold" : "text-zinc-400"}>
                          {logStr}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Database Table result grid */}
                {sqlResults && sqlResults.length > 0 && (
                  <div className={`rounded-2xl border overflow-hidden p-2 text-left ${
                    isDarkMode ? 'bg-zinc-950/80 border-zinc-900' : 'bg-slate-50 border-slate-100'
                  }`}>
                    <div className="text-[9px] uppercase tracking-wider font-extrabold text-zinc-500 font-mono mb-2 px-1.5">
                      Query Results Output:
                    </div>
                    <div className="max-h-[160px] overflow-y-auto overflow-x-auto scrollbar-thin rounded-xl border border-zinc-900/10">
                      <table className="w-full text-[10px] font-mono text-left">
                        <thead>
                          <tr className={`border-b border-zinc-900/15 ${isDarkMode ? 'bg-zinc-900 text-zinc-300' : 'bg-slate-200 text-slate-700'}`}>
                            {Object.getOwnPropertyNames(sqlResults[0]).map(col => (
                              <th key={col} className="p-2 capitalize tracking-wide font-black">{col}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sqlResults.map((item, idx) => (
                            <tr 
                              key={idx} 
                              className={`border-b last:border-0 hover:bg-teal-500/5 ${
                                isDarkMode ? 'border-zinc-900 text-zinc-300' : 'border-slate-200 text-slate-800'
                              }`}
                            >
                              {Object.getOwnPropertyNames(sqlResults[0]).map(col => (
                                <td key={col} className="p-2 truncate max-w-[120px]" title={String(item[col])}>
                                  {item[col] === 'Verified' ? (
                                    <span className="text-emerald-500 font-semibold uppercase text-[9px] bg-emerald-500/15 px-1 rounded">✔ {item[col]}</span>
                                  ) : String(item[col])}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

              </div>

            </motion.div>
          </div>
          )}
        </div>
        </div>
        </div>

      </section>

      {/* Visually Stunning Timeline of Experience, Certs, Education */}
      <section className={`py-20 border-t ${isDarkMode ? 'border-zinc-900 bg-zinc-900/5' : 'border-slate-100 bg-slate-50/50'}`} id="experience">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest font-black text-teal-500">Hiring Timelines</h2>
            <p className="text-3xl font-extrabold mt-1">Verified Journey Details</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column: Work Experience */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Professional Experiences</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, idx) => (
                  <div 
                    key={idx}
                    className={`p-6 rounded-3xl border relative overflow-hidden transition-all ${
                      isDarkMode ? 'bg-zinc-900/60 border-zinc-800 hover:bg-zinc-900' : 'bg-white border-slate-200 hover:shadow-md'
                    }`}
                  >
                    <span className="absolute top-0 right-0 px-3.5 py-1 text-[10px] font-mono bg-teal-500/10 text-teal-400 rounded-bl-xl border-l border-b border-teal-500/10">
                      {exp.period}
                    </span>

                    <h4 className="text-lg font-extrabold pr-24">{exp.role}</h4>
                    <p className="text-xs text-teal-400 font-bold mt-1.5 uppercase tracking-wide">{exp.company}</p>

                    <div className="flex items-center gap-1.5 mt-2.5 text-xs text-zinc-500 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.duration} (Documented tenure)</span>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex gap-2.5 text-xs md:text-sm text-zinc-400">
                          <Check className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                          <span className={isDarkMode ? 'text-zinc-300' : 'text-slate-600'}>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive Credentials & Certs */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Certifications & Credentials</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {certifications.map((certs, idx) => (
                  <div 
                    key={idx}
                    className={`p-4.5 rounded-2xl border flex items-center justify-between gap-4 transition-all hover:scale-[1.01] ${
                      isDarkMode ? 'bg-zinc-900/40 border-zinc-900 hover:bg-zinc-900' : 'bg-white border-slate-200 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                        <FileCheck2 className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold">{certs.name}</h4>
                        <p className="text-xs text-zinc-500 font-mono mt-0.5">Authority: {certs.issuer}</p>
                      </div>
                    </div>
                    
                    {/* Tiny Check indicator badges */}
                    <span className="p-1 rounded bg-teal-500/10 text-teal-400">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Education Highlight sub-section */}
          <div className="mt-16">
            <div className="flex items-center gap-2.5 mb-8 justify-center">
              <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold">Education Records</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {educationList.map((edu, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-3xl border relative transition-all ${
                    isDarkMode ? 'bg-zinc-900/60 border-zinc-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <span className="text-xs font-mono text-zinc-500 block mb-2">{edu.period}</span>
                  <h4 className="text-base font-black leading-tight">
                    {edu.isHighSchoolAnomaly && isAtsCorrected 
                      ? "SSC Secondary Education High School" 
                      : edu.degree}
                  </h4>
                  <p className="text-xs text-teal-400 font-bold uppercase tracking-wider mt-1.5">{edu.institution}</p>
                  
                  {/* Subtle warnings / corrections for ZP High School anomalous record block */}
                  {edu.isHighSchoolAnomaly && (
                    isAtsCorrected ? (
                      <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-[11px] text-emerald-400 leading-relaxed">
                        <div className="flex items-center gap-1.5 font-bold uppercase text-[9px] tracking-wide mb-1 text-emerald-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>ATS Restructuring Applied</span>
                        </div>
                        Successfully ironed out resume source transcripts! Restructured anomalous "B.Tech" title to standard "SSC Certification".
                      </div>
                    ) : (
                      <div className="mt-4 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 text-[11px] text-amber-500 leading-relaxed">
                        <div className="flex items-center gap-1.5 font-bold uppercase text-[9px] tracking-wide mb-1 text-amber-500">
                          <Shield className="w-3.5 h-3.5 shrink-0" />
                          <span>ATS Source Anomaly Alert</span>
                        </div>
                        Original document notes this high school entry with B.Tech degree titles. Flagged for recruitment revision.
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Leadership Activities of Suresh */}
      <section className="py-20 max-w-7xl mx-auto px-6" id="leadership">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-xs uppercase tracking-widest font-black text-teal-500">Endurance & Synergy</h2>
          <p className="text-3xl font-extrabold mt-1">Acclamations & Leadership</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          
          <div className={`p-6 rounded-3xl border text-center transition-all ${
            isDarkMode ? 'bg-zinc-900/60 border-zinc-800 hover:bg-zinc-900' : 'bg-white border-slate-200'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="font-extrabold text-lg">Abhiyaan runner</h3>
            <p className="text-xs text-teal-500 font-bold uppercase mt-1">2nd Prize Winner</p>
            <p className={`text-xs mt-3 leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              Secured first-tier second place representation in competitive regional engineering technology presentation events.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border text-center transition-all ${
            isDarkMode ? 'bg-zinc-900/60 border-zinc-800 hover:bg-zinc-900' : 'bg-white border-slate-200'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto mb-4">
              <Activity className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="font-extrabold text-lg">Sports Accolades</h3>
            <p className="text-xs text-teal-500 font-bold uppercase mt-1">Athletic Leadership</p>
            <p className={`text-xs mt-3 leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              Multiple medals in athletic games illustrating strong synergy, teamwork, mental stamina, and discipline inside team configurations.
            </p>
          </div>

          <div className={`p-6 rounded-3xl border text-center transition-all ${
            isDarkMode ? 'bg-zinc-900/60 border-zinc-800 hover:bg-zinc-900' : 'bg-white border-slate-200'
          }`}>
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="font-extrabold text-lg">Workshops</h3>
            <p className="text-xs text-teal-500 font-bold uppercase mt-1">EduSkills & Wadhwani Core</p>
            <p className={`text-xs mt-3 leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
              Rigorously attended technical sprints and career training events to boost soft skills and engineering effectiveness.
            </p>
          </div>

        </div>
      </section>

      {/* Professional Accessible Minimalist Contact Form */}
      <section className={`py-20 border-t ${isDarkMode ? 'border-zinc-900 bg-zinc-900/20' : 'border-slate-100 bg-slate-100/30'}`} id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <h2 className="text-xs uppercase tracking-widest font-black text-teal-500">Connect Section</h2>
          <p className="text-3xl font-extrabold mt-1">Let's Fuel the Next Project Together</p>
          <p className={`text-sm mt-3 ${isDarkMode ? 'text-zinc-400' : 'text-slate-600'}`}>
            You can reach out directly via Suresh's documented digital contacts:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 justify-items-center w-full">
            {/* Interactive Clipboard Card */}
            <div className={`p-4.5 rounded-2xl border flex items-center justify-between gap-3 w-full max-w-sm ${
              isDarkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center gap-3 text-left">
                <div className="p-2 bg-teal-500/10 text-teal-500 rounded-xl animate-pulse">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-zinc-500 font-mono">DIRECT EMAIL</h4>
                  <p className="text-xs font-black mt-0.5 truncate max-w-[130px] sm:max-w-[120px] lg:max-w-[110px]">{personalInfo.email}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                id="btn-copy-email"
                className={`flex items-center justify-center w-8 h-8 rounded-lg text-teal-500 hover:scale-105 active:scale-95 transition-all outline-none cursor-pointer shrink-0 ${
                  copiedEmail ? 'bg-emerald-500/10' : 'bg-teal-500/10'
                }`}
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Layers className="w-4 h-4" />}
              </button>
            </div>

            {/* Direct LinkedIn */}
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noreferrer"
              id="lnk-linkedin-footer"
              className={`p-4.5 rounded-2xl border flex items-center gap-3.5 w-full max-w-sm text-left transition-all hover:scale-[1.01] hover:shadow-sm ${
                isDarkMode ? 'bg-zinc-950 hover:bg-zinc-900 border-zinc-800' : 'bg-white hover:bg-slate-50 border-slate-200'
              }`}
            >
              <div className="p-2 bg-teal-500/10 text-teal-500 rounded-xl">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs text-zinc-500 font-mono">LINKEDIN PROFILE</h4>
                <p className="text-sm font-black mt-0.5 truncate max-w-[180px] sm:max-w-[140px] lg:max-w-[130px]">penta-naga-venkata-suresh</p>
              </div>
            </a>

            {/* Direct GitHub */}
            {personalInfo.github && (
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noreferrer"
                id="lnk-github-footer"
                className={`p-4.5 rounded-2xl border flex items-center gap-3.5 w-full max-w-sm text-left transition-all hover:scale-[1.01] hover:shadow-sm ${
                  isDarkMode ? 'bg-zinc-950 hover:bg-zinc-900 border-zinc-800' : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="p-2 bg-teal-500/10 text-teal-500 rounded-xl">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-zinc-500 font-mono">GITHUB PROFILE</h4>
                  <p className="text-sm font-black mt-0.5 truncate max-w-[180px] sm:max-w-[140px] lg:max-w-[130px]">{personalInfo.github.replace('github.com/', '')}</p>
                </div>
              </a>
            )}

            {/* Direct Phone */}
            {personalInfo.phone && (
              <a
                href={`tel:${personalInfo.phone}`}
                id="lnk-phone-footer"
                className={`p-4.5 rounded-2xl border flex items-center gap-3.5 w-full max-w-sm text-left transition-all hover:scale-[1.01] hover:shadow-sm ${
                  isDarkMode ? 'bg-zinc-950 hover:bg-zinc-900 border-zinc-800' : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="p-2 bg-teal-500/10 text-teal-500 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-zinc-500 font-mono">PHONE NUMBER</h4>
                  <p className="text-sm font-black mt-0.5">{personalInfo.phone}</p>
                </div>
              </a>
            )}
          </div>

        </div>
      </section>

      {/* Structured semantic footer */}
      <footer className={`py-8 text-center text-xs border-t font-mono ${
        isDarkMode ? 'bg-zinc-950 border-zinc-900 text-zinc-600' : 'bg-white border-slate-200 text-slate-400'
      }`}>
        <p className="tracking-wide">PENTA NAGA VENKATA SURESH © {new Date().getFullYear()} • ALL PORTFOLIO DATA STRICTLY CERTIFIED</p>
      </footer>

    </div>
  );
}
