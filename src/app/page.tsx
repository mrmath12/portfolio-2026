'use client';

import { useLayout } from '@/context/LayoutContext';

export default function Home() {
  const { layout } = useLayout();
  return <main style={{ color: 'var(--fg1)', padding: 40 }}>Layout ativo: {layout}</main>;
}
