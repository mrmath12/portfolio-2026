'use client';

import { useEffect, useRef, useState } from 'react';
import { useLayout } from '@/context/LayoutContext';
import { PROJECTS } from '@/data/projects';
import { PROJECT_FILTERS } from '@/data/skills';
import type { Project } from '@/types';
import SectionLabel from '@/components/ui/SectionLabel';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import ProjectFeatured from './ProjectFeatured';
import ProjectRow from './ProjectRow';

function filterProjects(projects: Project[], filter: string): Project[] {
  if (filter === 'Todos') return projects;
  return projects.filter((p) => p.cat === filter);
}

type ProjectsProps = {
  onProjectClick: (id: number) => void;
};

export default function Projects({ onProjectClick }: ProjectsProps) {
  const { layout, activeFilter, featuredIdOverride, setActiveFilter } = useLayout();
  const filtered = filterProjects(PROJECTS, activeFilter);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [seenIds, setSeenIds] = useState<Set<number>>(() => {
    const first = filterProjects(PROJECTS, activeFilter)[0];
    return first ? new Set([first.id]) : new Set();
  });
  const filteredRef = useRef(filtered);
  filteredRef.current = filtered;

  useEffect(() => {
    const first = filtered[0];
    setFeaturedIndex(0);
    setSeenIds(first ? new Set([first.id]) : new Set());
  }, [activeFilter]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (layout !== 'v-studio' || featuredIdOverride != null) return;
    const interval = setInterval(() => {
      setFeaturedIndex(i => {
        const current = filteredRef.current;
        const currentId = current[i % current.length]?.id;
        if (currentId != null) setSeenIds(prev => new Set([...prev, currentId]));
        return (i + 1) % current.length;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [layout, featuredIdOverride]);

  const header = (
    <div
      className="reveal"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: 24,
        marginBottom: 40,
      }}
    >
      <div>
        <SectionLabel>Portfólio</SectionLabel>
        <h2
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            color: 'var(--fg1)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            margin: 0,
          }}
        >
          Projetos
          <br />
          Selecionados
        </h2>
      </div>
      <FilterBar
        filters={PROJECT_FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
    </div>
  );

  if (layout === 'v-editorial') {
    return (
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {header}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: 18,
          }}
        >
          {filtered.map((p, index) => (
            <div key={p.id} className="reveal" style={{ transitionDelay: `${index * 40}ms` }}>
              <ProjectCard project={p} onClick={() => onProjectClick(p.id)} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (layout === 'v-studio') {
    const featured =
      (featuredIdOverride != null ? filtered.find((p) => p.id === featuredIdOverride) : null) ??
      filtered[featuredIndex % filtered.length];
    const remaining = filtered.filter((p) => p.id !== featured?.id);

    return (
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {header}
        {featured && (
          <div className="reveal">
            <ProjectFeatured project={featured} onClick={() => onProjectClick(featured.id)} />
          </div>
        )}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 18,
          }}
        >
          {remaining.map((p, index) => (
            <div key={p.id} className={seenIds.has(p.id) ? 'reveal visible' : 'reveal'} style={{ transitionDelay: `${index * 40}ms` }}>
              <ProjectCard project={p} onClick={() => onProjectClick(p.id)} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // v-minimal
  return (
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>
      {header}
      <div>
        {filtered.map((p, i) => (
          <div key={p.id} className="reveal" style={{ transitionDelay: `${i * 40}ms` }}>
            <ProjectRow project={p} index={i} onClick={() => onProjectClick(p.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}
