import type { SkillsData } from '@/types';
import { PROJECTS } from '@/data/projects';

export const SKILLS_DATA: SkillsData = {
  'Front-end': ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Tailwind', 'Figma'],
  'Back-end & Infra': ['Node.js', 'PostgreSQL', 'REST APIs', 'Supabase', 'Vercel'],
  'Mobile': ['React Native', 'Expo'],
  'Diferenciais criativos': ['Design Gráfico', 'Identidade Visual', 'Branding'],
};

export const CREATIVE_CATEGORIES: string[] = ['Diferenciais criativos'];

export const PROJECT_FILTERS: string[] = [
  'Todos',
  ...Array.from(new Set(PROJECTS.map(p => p.cat))),
];
