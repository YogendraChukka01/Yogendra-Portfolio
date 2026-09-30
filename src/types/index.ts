export type ProjectCategory = 'Flagship' | 'Major' | 'Infrastructure' | 'Full-Stack' | 'Early / Experiment';

export type ArchitectureNode = {
  id: string;
  name: string;
  category: 'input' | 'process' | 'retrieval' | 'agent' | 'eval' | 'output';
  description: string;
  tech: string;
  details: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  maturity: 'Flagship' | 'Major' | 'Early';
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  featured: boolean;
  architectureNodes?: ArchitectureNode[];
  architectureDiagram?: string;
  metrics?: { label: string; value: string }[];
  caseStudy: {
    overview: string;
    problemStatement: string;
    keyDecisions: { title: string; explanation: string }[];
    pipelineSteps?: { step: string; description: string; tech: string }[];
    evaluationMetrics?: { metric: string; score: string; explanation: string }[];
    challenges: string[];
  };
};

export type EngineeringPillar = {
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  projects: string[];
  icon: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  stage: string;
  project: string;
  description: string;
  impact: string;
  tech: string[];
};

export type StackCategory = {
  category: string;
  items: {
    name: string;
    role: string;
    usedIn: string[];
    description: string;
  }[];
};
