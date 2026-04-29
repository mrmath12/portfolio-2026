import { useEffect } from 'react';
import type { DependencyList } from 'react';
import { useLayout } from '@/context/LayoutContext';

export default function useScrollReveal(deps: DependencyList = []): void {
  const { revealEnabled } = useLayout();

  useEffect(() => {
    if (!revealEnabled) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll<Element>('.reveal:not(.visible)').forEach((el) => obs.observe(el));

    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revealEnabled, ...deps]);
}
