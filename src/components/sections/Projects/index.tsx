'use client';

import { useEffect, useRef, useState } from 'react';
import { useLayout } from '@/context/LayoutContext';
import { useTranslation } from '@/hooks/useTranslation';
import { PROJECTS } from '@/data/projects';
import { PROJECT_FILTERS } from '@/data/skills';
import type { Project } from '@/types';
import SectionLabel from '@/components/ui/SectionLabel';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import ProjectFeatured from './ProjectFeatured';

function filterProjects(projects: Project[], filter: string): Project[] {
  if (filter === 'Todos') return projects;
  return projects.filter((p) => p.cat === filter);
}

type ProjectsProps = {
  onProjectClick: (id: number) => void;
};

export default function Projects({ onProjectClick }: ProjectsProps) {
  const { activeFilter, featuredIdOverride, setActiveFilter } = useLayout();
  const { t } = useTranslation();
  const p = t.projects;
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
    if (featuredIdOverride != null) return;
    const id = setInterval(() => {
      setFeaturedIndex((prev) => {
        const next = (prev + 1) % filteredRef.current.length;
        const nextProject = filteredRef.current[next];
        if (nextProject) setSeenIds((s) => new Set([...s, nextProject.id]));
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, [featuredIdOverride]);

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
        <SectionLabel>{p.sectionLabel}</SectionLabel>
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
          {p.headline1}
          <br />
          {p.headline2}
        </h2>
      </div>
      <FilterBar
        filters={PROJECT_FILTERS}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
    </div>
  );

  const featured =
    (featuredIdOverride != null ? filtered.find((proj) => proj.id === featuredIdOverride) : null) ??
    filtered[featuredIndex % filtered.length];
  const remaining = filtered.filter((proj) => proj.id !== featured?.id);

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto' }}>
      {header}
      {featured && (
        <div className="reveal">
          <div key={featured.id} className="featured-anim">
            <ProjectFeatured project={featured} onClick={() => onProjectClick(featured.id)} />
          </div>
        </div>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 18,
        }}
      >
        {remaining.map((proj, index) => (
          <div key={proj.id} className={seenIds.has(proj.id) ? 'reveal visible' : 'reveal'} style={{ transitionDelay: `${index * 40}ms` }}>
            <ProjectCard project={proj} onClick={() => onProjectClick(proj.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}
