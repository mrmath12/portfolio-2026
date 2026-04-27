import React from 'react';
import type { TagVariant } from '@/types';

type TagProps = {
  variant?: TagVariant;
  children: React.ReactNode;
  className?: string;
};

const variantStyle: Record<TagVariant, React.CSSProperties> = {
  default: {
    background: 'rgba(27,46,38,0.6)',
    color: 'var(--muted)',
    border: '1px solid var(--border)',
  },
  brand: {
    background: 'rgba(117,176,156,0.1)',
    color: 'var(--brand)',
    border: '1px solid rgba(117,176,156,0.3)',
  },
  accent: {
    background: 'rgba(126,116,175,0.12)',
    color: 'var(--accent-lt)',
    border: '1px solid rgba(126,116,175,0.3)',
  },
};

const baseStyle: React.CSSProperties = {
  padding: '4px 12px',
  borderRadius: '9999px',
  fontSize: '11px',
  fontWeight: 500,
  display: 'inline-block',
};

export default function Tag({ variant = 'default', children, className = '' }: TagProps) {
  return (
    <span style={{ ...baseStyle, ...variantStyle[variant] }} className={className}>
      {children}
    </span>
  );
}
