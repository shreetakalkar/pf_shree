export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Full Stack' | 'Distributed Systems' | 'AI & Web';
  techStack: string[];
  features: string[];
  architectureHighlights?: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor: string;
  systemDiagramType?: 'distributed-storage' | 'ai-pipeline' | 'ecom-sync';
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  duration: string;
  type: string;
  location: string;
  bullets: string[];
  metrics: string[];
  technologies: string[];
  badge?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    isPrimary?: boolean;
    icon?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  organizer: string;
  year?: string;
  badgeType: 'winner' | 'runner-up' | 'finalist' | 'participant';
  description: string;
}

