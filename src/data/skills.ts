import type { SkillsData } from '@/types';
import { PROJECTS } from '@/data/projects';

export const SKILLS_DATA: SkillsData = {
  'Front-end': ['React', 'Next.js', 'TypeScript', 'HTML/CSS', 'Tailwind', 'Figma'],
  'Back-end & Infra': ['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'Docker', 'Git & CI/CD'],
  'Mobile': ['React Native', 'Firebase', 'Expo'],
  'Diferenciais criativos': ['Design Gráfico', 'Identidade Visual', 'Ableton Live', 'VJ (Resolume)'],
};

export const CREATIVE_CATEGORIES: string[] = ['Diferenciais criativos'];

export const PROJECT_FILTERS: string[] = [
  'Todos',
  ...Array.from(new Set(PROJECTS.map(p => p.cat))),
];
