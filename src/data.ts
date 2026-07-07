import {
  PersonalInfo,
  Experience,
  Education,
  Project,
  Certification,
  SkillCategory,
  AuditReport,
  StrengthAnalysis,
  BrandStrategy,
  ATSAnalysis,
  PortfolioReadiness
} from './types';
import sureshAvatar from './assets/images/suresh_profile_1780550724246.png';

export const personalInfo: PersonalInfo = {
  name: "Penta Naga Venkata Suresh",
  title: "Data Analyst & AI Specialist",
  email: "sureshpenta69@gmail.com",
  location: "Tallarevu, Andhra Pradesh, India",
  linkedin: "linkedin.com/in/penta-naga-venkata-suresh",
  github: "github.com/sureshpenta69",
  phone: "+91 91775 83648",
  githubMissing: false,
  portfolioMissing: false,
  avatarPlaceholder: sureshAvatar,
  summary: "B.Tech student in CSE (Artificial Intelligence) focused on building a career in Data Analytics. Experienced in Python, SQL, Excel, Power BI, Python libraries, and machine learning foundations to analyze data, solve complex problems, and build practical technology-driven solutions with a strong analytical approach."
};

export const experiences: Experience[] = [
  {
    company: "Kakinada Institute of Engineering and Technology",
    role: "Student Software Engineer & Analytics Leader",
    period: "August 2023 - Present",
    duration: "2 years 10 months",
    responsibilities: [
      "Led academic project initiatives and analytics tasks with fellow B.Tech candidates to organize, manage, and analyze project-related data for optimizing usability and performance.",
      "Engineered clean database schemas using SQL and wrote computational scripts in Python to analyze data and solve academic problems.",
      "Delivered academic solutions focusing on logical thinking, algorithmic excellence, and user-friendly implementations.",
      "Pioneered development of interactive tools while combining Python, SQL, and embedded systems paradigms."
    ]
  }
];

export const educationList: Education[] = [
  {
    institution: "Kakinada Institute of Engineering and Technology",
    degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
    period: "2023 - 2027",
    location: "Kakinada, Andhra Pradesh, India"
  },
  {
    institution: "Pragati Junior College",
    degree: "Intermediate Education (Maths, Physics, Chemistry)",
    period: "2021 - 2023",
    location: "Andhra Pradesh, India"
  },
  {
    institution: "ZP High School",
    degree: "Bachelor of Technology - BTech, Computer Science (Listed Academic Path)",
    period: "2023 - 2027",
    location: "Tallarevu, Andhra Pradesh, India",
    isHighSchoolAnomaly: true
  }
];

export const projects: Project[] = [
  {
    name: "Government AI Scheme Finder",
    description: "An AI-enabled intelligent discovery platform designed to help citizens and businesses identify, navigate, and match with relevant government schemes, grants, and subsidies based on personalized eligibility profiling.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "AI Search Algorithms", "Vercel"],
    outcomes: [
      "Designed and deployed a highly responsive client-side intelligence engine that analyzes multi-faceted criteria (age, state, income, industry) to instantly filter matching public benefits.",
      "Embedded intelligent natural-language guidelines parsing to simplify complex administrative jargon into digestible summaries.",
      "Constructed a clean, fully accessible user interface following modern design principles, achieving fluid layouts and performance."
    ],
    type: "Full Stack",
    url: "https://government-ai-scheme-finder-git-main-success-squad.vercel.app"
  },
  {
    name: "Yoga Pose Guide",
    description: "An intuitive technology-driven system designed to guide users into proper, structured yoga postures. Solves the challenge of incorrect posture in self-training through accessible computational support.",
    technologies: ["Python", "Computer Vision Concepts", "Data Modeling"],
    outcomes: [
      "Successfully translated standard anatomical coordinates into structured visual posture validation.",
      "Provided user-friendly physical corrective feedback based on mathematical angles between bone joints.",
      "Proved capabilities in integrating engineering concepts with user-friendly wellness applications."
    ],
    type: "AI/ML"
  },
  {
    name: "Project-Related Data Analytics System",
    description: "Built private relational database frameworks to structure, index, and analyze software project performance metrics and experimental datasets.",
    technologies: ["SQL", "Python", "Data Structure Analysis"],
    outcomes: [
      "Removed redundancies in data records, significantly improving dataset performance.",
      "Created structured reporting queries allowing swift extraction of key performance metrics.",
      "Improved performance and data handling efficiency across multiple academic projects."
    ],
    type: "Data Analytics"
  }
];

export const certifications: Certification[] = [
  {
    name: "Python Full-Stack Developer Certification (EduSkills)",
    issuer: "EduSkills Program"
  },
  {
    name: "Google Developer Certification Basics",
    issuer: "Google Developers Program"
  },
  {
    name: "Machine Learning Foundations Certification (FMML)",
    issuer: "Foundations of My Machine Learning"
  },
  {
    name: "Embedded Systems Developer Certificate",
    issuer: "EduSkills / Partner Institutions"
  },
  {
    name: "Professional Career Foundations Certificate",
    issuer: "Wadhwani Foundation"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Analytical Tools",
    skills: ["Python", "SQL", "Excel", "Power BI", "Python Libraries (Pandas, NumPy)"]
  },
  {
    category: "Specialized Domains",
    skills: ["Data Analytics", "Artificial Intelligence (AI)", "Machine Learning Foundations", "Embedded Systems", "Data Handling"]
  },
  {
    category: "Problem Solving & Analytical",
    skills: ["Algorithm Design", "Logical Thinking", "Problem Solving", "Data Management", "Performance Optimization"]
  },
  {
    category: "Professional & Soft Skills",
    skills: ["Technical Communication", "Team Collaboration", "Analytical Thinking", "New Business Development", "Project Management"]
  }
];

export const auditReport: AuditReport = {
  extractionCompleted: true,
  recordsVerified: 12,
  gapsIdentified: [
    "Missing public GitHub repository URL link for Yoga Pose Guide.",
    "Missing public deployed portfolio URL details in the default profile.",
    "B.Tech timeline overlap: Source document lists both 'Kakinada Institute' and 'ZP High School' as offering B.Tech in CSE with identical August 2023 - May/June 2027 timelines. High school degree entry is highly likely a transcription anomaly from LinkedIn."
  ]
};

export const strengthAnalysis: StrengthAnalysis = {
  strongestAchievements: [
    "Winning the 2nd prize at regional Abhiyaan technology competition.",
    "Earning professional validations through recognized entities such as Google, Wadhwani, FMML, and EduSkills.",
    "Maintaining an active leadership presence in sports alongside high engineering academic credits."
  ],
  valuableProjects: [
    "The Yoga Pose Guide, which demonstrates real-world application of artificial intelligence to personal health.",
    "SQL/Python Data Analytics, which directly proves data modeling, database design, and optimization skills."
  ],
  technicalStrengths: [
    "Robust analytical profile consisting of Python, SQL, Excel, Power BI, and Python Libraries.",
    "Dual focus on core data mining/analytics and high-level AI/ML frameworks.",
    "Academically demonstrated optimization mindset."
  ],
  leadershipEvidence: [
    "Multiple sports achievements showing strong team dynamics and leadership.",
    "Organized team structures during academic projects and competition rounds."
  ],
  growthPotential: "Exceptionally high. Since Suresh is a student who will graduate in 2027, he has already secured essential Python and Google certifications which place him ahead of 90% of comparable peers. With 1-2 corporate internships in core ML/Analytics, he will become highly qualified for mid-tier engineering roles."
};

export const personalBrandStrategy: BrandStrategy = {
  professionalPosition: "AI-Augmented Data Intelligence Engineer",
  brandStatement: "Bridging the gap between raw database pipelines and predictive analysis using advanced AI algorithms and low-level engineering efficiency.",
  uniqueValueProposition: "A B.Tech AI candidate who combines deep structural database manipulation (SQL) with user-friendly computer vision systems (Yoga Pose Guide) and embedded machine learning capabilities.",
  topDifferentiators: [
    {
      title: "Full-Stack + AI Machine Learning Dual Core",
      description: "Equipped with certified full-stack competencies from EduSkills alongside FMML Machine Learning Foundations, enabling full lifecycle product ownership."
    },
    {
      title: "Certified by Global Tech Leaders",
      description: "Credentials vetted and certified by Google developer teams, Wadhwani Foundation, and national skill hubs."
    },
    {
      title: "High Performance Under Competitive Pressure",
      description: "Validated by technical achievements (Abhiyaan 2nd Prize Winner) coupled with athletic endurance and team-centric leadership."
    }
  ]
};

export const atsAnalysis: ATSAnalysis = {
  strengths: [
    "Highly clear skill listings for keywords like 'Python', 'SQL', 'Excel', 'Power BI', and 'Data Analytics'.",
    "Certification records are explicitly detailed with names and issuing authorities.",
    "Excellent timeline integrity (August 2023 - Present) matching standard recruiter duration frameworks."
  ],
  weaknesses: [
    "Major educational path collision: ZP High School lists 'Bachelor of Technology' which will fail strict algorithmic validation systems as schools do not issue higher-ed bachelor degrees.",
    "No external hyperlinks or portfolio URLs to prove project validity in automated resume indexing systems.",
    "Soft-skills section contains a few repetitive elements."
  ],
  missingSkillsGaps: [
    "Cloud infrastructure metrics (AWS/GCP/Azure) required for enterprise ML serving.",
    "Big Data tooling keywords (such as Spark, Pandas, numpy, or dbt) for core analytics.",
    "Git and Github version control documentation."
  ],
  improvements: [
    "Remove B.Tech reference from ZP High School entry. Change is to 'High School Certificate / Secondary Education'.",
    "Embed valid hyperlinks to GitHub repositories for all core projects.",
    "Augment project bullet points with quantified business metrics (e.g., 'Structured queries in SQL to decrease extraction latency by 15%')."
  ],
  scores: [
    { category: "Keyword Optimization", score: 85, benchmark: 75 },
    { category: "Structural Layout", score: 70, benchmark: 80 },
    { category: "Quantifiable Impact", score: 55, benchmark: 70 },
    { category: "Clarity & Conciseness", score: 90, benchmark: 85 },
    { category: "Dynamic Credentialing", score: 88, benchmark: 72 }
  ]
};

export const portfolioReadiness: PortfolioReadiness = {
  scores: [
    { metric: "Technical Blueprint Quality", score: 8.0, description: "Strong conceptual skills in Python and SQL with modern academic projects." },
    { metric: "Core Project Viability", score: 7.5, description: "Excellent design (Yoga Guide), but missing hosted deployment and GitHub references." },
    { metric: "Recruiter Appeal Rate", score: 8.5, description: "High appeal due to Google and ML certifications for entry-level roles." },
    { metric: "ATS Parser Compatibility", score: 6.5, description: "Hindered by educational formatting duplication/B.Tech high school typo." },
    { metric: "Personal Digital Branding", score: 8.0, description: "Clear path. Needs to transition from static physical formats to a live responsive portfolio." }
  ],
  overallScore: 7.7,
  verdict: "Suresh's profile exhibits excellent core promise in analytical thinking, Python, and SQL database management. By applying minor structural corrections to his CV (such as the high school level fix) and publishing interactive web demos of his Yoga Pose Guide project, he is poised to successfully land entry-tier Data Analytics or Associate AI Engineer roles."
};
