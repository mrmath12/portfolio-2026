'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import type { LayoutVariant, FocusMode } from '@/types';

interface LayoutContextValue {
  layout: LayoutVariant;
  focus: FocusMode;
  revealEnabled: boolean;
  activeFilter: string;
  featuredIdOverride: number | null;
  setLayout: (v: LayoutVariant) => void;
  setFocus: (v: FocusMode) => void;
  setRevealEnabled: (v: boolean) => void;
  setActiveFilter: (v: string) => void;
  setFeaturedIdOverride: (v: number | null) => void;
}

const LayoutContext = createContext<LayoutContextValue | null>(null);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [layout, setLayout] = useState<LayoutVariant>('v-studio');
  const [focus, setFocus] = useState<FocusMode>('dev');
  const [revealEnabled, setRevealEnabled] = useState(true);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [featuredIdOverride, setFeaturedIdOverride] = useState<number | null>(null);

  useEffect(() => {
    const savedFocus = localStorage.getItem('mth-focus');
    const savedReveal = localStorage.getItem('mth-reveal');
    const savedFilter = localStorage.getItem('mth-filter');

    if (savedFocus === 'dev' || savedFocus === 'creative') setFocus(savedFocus);
    if (savedReveal !== null) setRevealEnabled(savedReveal !== 'false');
    if (savedFilter) setActiveFilter(savedFilter);
  }, []);

  useEffect(() => {
    localStorage.setItem('mth-focus', focus);
  }, [focus]);

  useEffect(() => {
    localStorage.setItem('mth-reveal', String(revealEnabled));
  }, [revealEnabled]);

  useEffect(() => {
    localStorage.setItem('mth-filter', activeFilter);
  }, [activeFilter]);

  return (
    <LayoutContext.Provider
      value={{
        layout,
        focus,
        revealEnabled,
        activeFilter,
        featuredIdOverride,
        setLayout,
        setFocus,
        setRevealEnabled,
        setActiveFilter,
        setFeaturedIdOverride,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout(): LayoutContextValue {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}
