import React from 'react';

type StatCardProps = {
  num: string;
  label: string;
  variant?: 'default' | 'accent';
  className?: string;
};

const cardStyle: Record<'default' | 'accent', React.CSSProperties> = {
  default: {
    background: 'var(--bg3)',
    border: '1px solid var(--border)',
  },
  accent: {
    background: 'rgba(126,116,175,0.07)',
    border: '1px solid rgba(126,116,175,0.22)',
  },
};

const numStyle: Record<'default' | 'accent', React.CSSProperties> = {
  default: { color: 'var(--brand)' },
  accent: { color: 'var(--accent-lt)' },
};

export default function StatCard({ num, label, variant = 'default', className = '' }: StatCardProps) {
  return (
    <div
      style={{
        ...cardStyle[variant],
        borderRadius: '10px',
        padding: '16px',
      }}
      className={className}
    >
      <div
        style={{
          ...numStyle[variant],
          fontSize: '28px',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.03em',
        }}
      >
        {num}
      </div>
      <div
        style={{
          fontSize: '12px',
          color: 'var(--muted)',
          marginTop: '3px',
        }}
      >
        {label}
      </div>
    </div>
  );
}
