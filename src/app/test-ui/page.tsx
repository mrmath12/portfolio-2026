'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import StatCard from '@/components/ui/StatCard';
import SkillTag from '@/components/ui/SkillTag';
import SectionLabel from '@/components/ui/SectionLabel';
import FilterButton from '@/components/ui/FilterButton';

export default function TestUI() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const filters = ['Todos', 'Web', 'Mobile', 'Design'];

  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '800px' }}>

      <section>
        <h2 style={{ color: 'var(--fg1)', marginBottom: '16px', fontSize: '18px' }}>Buttons</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="primary" href="#">Primary Link</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="ghost" href="#">Ghost Link</Button>
        </div>
      </section>

      <section>
        <h2 style={{ color: 'var(--fg1)', marginBottom: '16px', fontSize: '18px' }}>Tags</h2>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Tag>Default</Tag>
          <Tag variant="brand">Brand</Tag>
          <Tag variant="accent">Accent</Tag>
        </div>
      </section>

      <section>
        <h2 style={{ color: 'var(--fg1)', marginBottom: '16px', fontSize: '18px' }}>StatCard</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          <StatCard num="3+" label="Anos de exp." />
          <StatCard num="12" label="Projetos" />
          <StatCard num="8" label="Tecnologias" variant="accent" />
          <StatCard num="∞" label="Curiosidade" variant="accent" />
        </div>
      </section>

      <section>
        <h2 style={{ color: 'var(--fg1)', marginBottom: '16px', fontSize: '18px' }}>SkillTag</h2>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <SkillTag>React</SkillTag>
          <SkillTag>TypeScript</SkillTag>
          <SkillTag variant="accent">Figma</SkillTag>
          <SkillTag variant="accent">Ableton</SkillTag>
        </div>
      </section>

      <section>
        <h2 style={{ color: 'var(--fg1)', marginBottom: '16px', fontSize: '18px' }}>SectionLabel</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <SectionLabel>Portfólio</SectionLabel>
          <SectionLabel variant="accent">Sobre</SectionLabel>
        </div>
      </section>

      <section>
        <h2 style={{ color: 'var(--fg1)', marginBottom: '16px', fontSize: '18px' }}>FilterButton</h2>
        <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
          {filters.map((f) => (
            <FilterButton key={f} active={activeFilter === f} onClick={() => setActiveFilter(f)}>
              {f}
            </FilterButton>
          ))}
        </div>
        <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--muted)' }}>
          Ativo: {activeFilter}
        </p>
      </section>

    </div>
  );
}
