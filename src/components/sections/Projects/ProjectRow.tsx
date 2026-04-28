'use client';

import { useRef } from 'react';
import type { Project } from '@/types';
import Tag from '@/components/ui/Tag';

type ProjectRowProps = {
  project: Project;
  index: number;
  onClick: () => void;
};

export default function ProjectRow({ project: p, index, onClick }: ProjectRowProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (overlayRef.current) overlayRef.current.style.opacity = '1';
    if (arrowRef.current) {
      arrowRef.current.style.transform = 'translateX(4px)';
      arrowRef.current.style.color = 'var(--brand)';
    }
  };

  const handleMouseLeave = () => {
    if (overlayRef.current) overlayRef.current.style.opacity = '0';
    if (arrowRef.current) {
      arrowRef.current.style.transform = '';
      arrowRef.current.style.color = '#3a5c4e';
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'grid',
        gridTemplateColumns: '56px 1fr auto auto',
        alignItems: 'center',
        gap: 20,
        padding: '20px 0',
        borderBottom: '1px solid var(--border-soft)',
        borderTop: index === 0 ? '1px solid var(--border-soft)' : undefined,
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* Hover overlay */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: -40,
          right: -40,
          background: 'var(--bg3)',
          opacity: 0,
          zIndex: -1,
          transition: 'opacity 200ms ease',
          pointerEvents: 'none',
        }}
      />

      {/* Number */}
      <div style={{ fontSize: 13, fontWeight: 700, color: '#3a5c4e', letterSpacing: '0.04em' }}>
        0{index + 1}
      </div>

      {/* Title + category */}
      <div>
        <div
          style={{
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            fontWeight: 600,
            color: 'var(--fg1)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
        >
          {p.title}
        </div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginTop: 2,
          }}
        >
          {p.cat}
        </div>
      </div>

      {/* Tags (first 2) */}
      <div style={{ display: 'flex', gap: 5, justifyContent: 'flex-end' }}>
        {p.tags.slice(0, 2).map((t, i) => (
          <Tag key={t} variant={i === 0 ? 'brand' : 'default'}>
            {t}
          </Tag>
        ))}
      </div>

      {/* Year + arrow */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            fontSize: 12,
            color: '#3a5c4e',
            fontWeight: 500,
            minWidth: 36,
            textAlign: 'right',
          }}
        >
          {p.year}
        </div>
        <div
          ref={arrowRef}
          style={{ color: '#3a5c4e', transition: 'transform 200ms ease, color 200ms ease' }}
        >
          →
        </div>
      </div>
    </div>
  );
}
