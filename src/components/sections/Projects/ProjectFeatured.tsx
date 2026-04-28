'use client';

import Image from 'next/image';
import type { Project } from '@/types';
import Tag from '@/components/ui/Tag';

type ProjectFeaturedProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectFeatured({ project: p, onClick }: ProjectFeaturedProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        border: '1px solid var(--border)',
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 20,
        cursor: 'pointer',
        transition: 'border-color 250ms ease, box-shadow 300ms ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(117,176,156,0.25)';
        el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.5)';
        const inner = el.querySelector<HTMLElement>('.feat-img-inner');
        if (inner) inner.style.transform = 'scale(1.04)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = '';
        el.style.boxShadow = '';
        const inner = el.querySelector<HTMLElement>('.feat-img-inner');
        if (inner) inner.style.transform = '';
      }}
    >
      {/* Left: image */}
      <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
        {p.image ? (
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="feat-img-inner"
            style={{ objectFit: 'cover', transition: 'transform 500ms var(--ease)' }}
          />
        ) : (
          <div
            style={{
              background: p.bg ?? 'var(--bg2)',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              className="feat-img-inner"
              style={{ fontSize: 80, opacity: 0.15, transition: 'transform 500ms var(--ease)' }}
            >
              {p.icon ?? '◻'}
            </div>
          </div>
        )}
      </div>

      {/* Right: body */}
      <div
        style={{
          background: 'var(--bg3)',
          padding: 40,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 16,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--brand)',
          }}
        >
          {p.cat} · Em destaque
        </div>
        <div
          style={{
            fontSize: 'clamp(28px, 3vw, 42px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--fg1)',
          }}
        >
          {p.title}
        </div>
        <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
          {p.desc}
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
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
