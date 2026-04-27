export type LayoutVariant = 'v-editorial' | 'v-studio' | 'v-minimal';
export type FocusMode = 'dev' | 'creative';
export type TagVariant = 'default' | 'brand' | 'accent';

export interface Project {
  id: number;
  title: string;
  cat: string;
  year: string;
  desc: string;
  tags: string[];
  bg?: string;
  icon?: string;
  image?: string;
  featured?: boolean;
}

export type SkillsData = Record<string, string[]>;
