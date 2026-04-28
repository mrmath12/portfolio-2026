'use client';

import Image from 'next/image';
import type { Project } from '@/types';
import Tag from '@/components/ui/Tag';

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project: p, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--bg3)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 350ms var(--ease), box-shadow 350ms ease, border-color 250ms ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.5), 0 0 20px rgba(117,176,156,0.07)';
        el.style.borderColor = 'rgba(117,176,156,0.2)';
        const inner = el.querySelector<HTMLElement>('.card-img-inner');
        if (inner) inner.style.transform = 'scale(1.04)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = '';
        el.style.boxShadow = '';
        el.style.borderColor = '';
        const inner = el.querySelector<HTMLElement>('.card-img-inner');
        if (inner) inner.style.transform = '';
      }}
    >
      <div
        style={{
          height: 200,
          background: p.bg ?? 'var(--bg2)',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="card-img-inner"
            style={{ objectFit: 'cover', transition: 'transform 400ms var(--ease)' }}
          />
        ) : (
          <div
            className="card-img-inner"
            style={{ fontSize: 52, opacity: 0.15, transition: 'transform 400ms var(--ease)' }}
          >
            {p.icon ?? '◻'}
          </div>
        )}
        <div
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            background: 'rgba(16,27,23,0.85)',
            color: 'var(--brand)',
            padding: '3px 9px',
            borderRadius: 9999,
            fontSize: 10,
            fontWeight: 600,
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(117,176,156,0.2)',
            zIndex: 1,
          }}
        >
          {p.year}
        </div>
      </div>

      <div style={{ padding: '18px 20px' }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--brand)',
            marginBottom: 5,
          }}
        >
          {p.cat}
        </div>
        <div
          style={{
            fontSize: 19,
            fontWeight: 600,
            color: 'var(--fg1)',
            lineHeight: 1.2,
            marginBottom: 7,
          }}
        >
          {p.title}
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.55 }}>
          {p.desc}
        </div>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 12 }}>
          {p.tags.map((t, i) => (
            <Tag key={t} variant={i === 0 ? 'brand' : 'default'}>
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
