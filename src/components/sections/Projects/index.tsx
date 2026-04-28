'use client';

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

  const header = (
    <div
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
      <div>
        {header}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: 18,
          }}
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={() => onProjectClick(p.id)} />
          ))}
        </div>
      </div>
    );
  }

  if (layout === 'v-studio') {
    const featured =
      filtered.find((p) => p.id === (featuredIdOverride ?? 1)) ??
      filtered.find((p) => p.featured) ??
      filtered[0];
    const remaining = filtered.filter((p) => p.id !== featured?.id);

    return (
      <div>
        {header}
        {featured && (
          <ProjectFeatured project={featured} onClick={() => onProjectClick(featured.id)} />
        )}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 18,
          }}
        >
          {remaining.map((p) => (
            <ProjectCard key={p.id} project={p} onClick={() => onProjectClick(p.id)} />
          ))}
        </div>
      </div>
    );
  }

  // v-minimal
  return (
    <div>
      {header}
      <div>
        {filtered.map((p, i) => (
          <ProjectRow
            key={p.id}
            project={p}
            index={i}
            onClick={() => onProjectClick(p.id)}
          />
        ))}
      </div>
    </div>
  );
}
