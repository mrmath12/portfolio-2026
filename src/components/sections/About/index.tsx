'use client';

import { useLayout } from '@/context/LayoutContext';
import AboutStudio from './AboutStudio';
import AboutDefault from './AboutDefault';

export default function About() {
  const { layout } = useLayout();

  return (
    <section
      id="sobre"
      style={{
        padding: '100px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      {layout === 'v-studio' ? <AboutStudio /> : <AboutDefault />}
    </section>
  );
}
