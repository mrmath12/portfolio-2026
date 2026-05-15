'use client';

import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import type { Project } from '@/types';
import Tag from '@/components/ui/Tag';

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project: p, onClick }: ProjectCardProps) {
  const { t } = useTranslation();
  const filterLabels = t.projects.filterLabels as Record<string, string>;
  const descs = t.projects.descs as Record<number, string>;

  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--bg3)',
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 350ms var(--ease), box-shadow 350ms ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'translateY(-4px)';
        el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.5), 0 0 20px rgba(117,176,156,0.07)';
        const inner = el.querySelector<HTMLElement>('.card-img-inner');
        if (inner) inner.style.transform = 'scale(1.04)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = '';
        el.style.boxShadow = '';
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
          {filterLabels[p.cat] ?? p.cat}
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
        <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.55, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {descs[p.id] ?? p.desc}
        </div>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 12 }}>
          {p.tags.slice(0, 3).map((tag, i) => (
            <Tag key={tag} variant={i === 0 ? 'brand' : 'default'}>
              {tag}
            </Tag>
          ))}
          {p.tags.length > 3 && (
            <Tag variant="default">+{p.tags.length - 3}</Tag>
          )}
        </div>
      </div>
    </div>
  );
}
