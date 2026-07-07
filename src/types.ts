export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  linkedin: string;
  githubMissing: boolean;
  portfolioMissing: boolean;
  avatarPlaceholder: string;
  summary: string;
  github?: string;
  phone?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  isHighSchoolAnomaly?: boolean;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  outcomes: string[];
  type: 'AI/ML' | 'Data Analytics' | 'Full Stack';
  url?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface AuditReport {
  extractionCompleted: boolean;
  recordsVerified: number;
  gapsIdentified: string[];
}

export interface StrengthAnalysis {
  strongestAchievements: string[];
  valuableProjects: string[];
  technicalStrengths: string[];
  leadershipEvidence: string[];
  growthPotential: string;
}

export interface BrandStrategy {
  professionalPosition: string;
  brandStatement: string;
  uniqueValueProposition: string;
  topDifferentiators: {
    title: string;
    description: string;
  }[];
}

export interface ATSAnalysis {
  strengths: string[];
  weaknesses: string[];
  missingSkillsGaps: string[];
  improvements: string[];
  scores: {
    category: string;
    score: number;
    benchmark: number;
  }[];
}

export interface PortfolioReadiness {
  scores: {
    metric: string;
    score: number;
    description: string;
  }[];
  overallScore: number;
  verdict: string;
}
