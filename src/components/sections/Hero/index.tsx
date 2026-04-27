'use client';

import { useLayout } from '@/context/LayoutContext';
import HeroEditorial from './HeroEditorial';
import HeroStudio from './HeroStudio';
import HeroMinimal from './HeroMinimal';

export default function Hero() {
  const { layout } = useLayout();

  if (layout === 'v-editorial') return <HeroEditorial />;
  if (layout === 'v-minimal') return <HeroMinimal />;
  return <HeroStudio />;
}
