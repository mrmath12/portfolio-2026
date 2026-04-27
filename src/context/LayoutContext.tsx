'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type { FocusMode, LayoutVariant } from '@/types';

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
  const [focus, setFocusState] = useState<FocusMode>('dev');
  const [revealEnabled, setRevealEnabledState] = useState(true);
  const [activeFilter, setActiveFilterState] = useState('Todos');
  const [featuredIdOverride, setFeaturedIdOverride] = useState<number | null>(null);

  // Hydrate from localStorage on mount (client-only)
  useEffect(() => {
    const storedFocus = localStorage.getItem('mth-focus') as FocusMode | null;
    const storedReveal = localStorage.getItem('mth-reveal');
    const storedFilter = localStorage.getItem('mth-filter');

    if (storedFocus === 'dev' || storedFocus === 'creative') {
      setFocusState(storedFocus);
    }
    if (storedReveal !== null) {
      setRevealEnabledState(storedReveal !== 'false');
    }
    if (storedFilter) {
      setActiveFilterState(storedFilter);
    }
  }, []);

  // Persist to localStorage whenever values change
  useEffect(() => {
    localStorage.setItem('mth-focus', focus);
  }, [focus]);

  useEffect(() => {
    localStorage.setItem('mth-reveal', String(revealEnabled));
  }, [revealEnabled]);

  useEffect(() => {
    localStorage.setItem('mth-filter', activeFilter);
  }, [activeFilter]);

  const setFocus = (v: FocusMode) => setFocusState(v);
  const setRevealEnabled = (v: boolean) => setRevealEnabledState(v);
  const setActiveFilter = (v: string) => setActiveFilterState(v);

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
  const ctx = useContext(LayoutContext);
  if (!ctx) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return ctx;
}
