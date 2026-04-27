import React from 'react';

type SkillTagProps = {
  variant?: 'default' | 'accent';
  children: React.ReactNode;
};

const variantStyle: Record<'default' | 'accent', React.CSSProperties> = {
  default: {
    background: 'rgba(27,46,38,0.4)',
    color: 'var(--fg2)',
    border: '1px solid var(--border)',
  },
  accent: {
    background: 'rgba(126,116,175,0.1)',
    color: 'var(--accent-lt)',
    border: '1px solid rgba(126,116,175,0.28)',
  },
};

const baseStyle: React.CSSProperties = {
  padding: '6px 14px',
  borderRadius: '9999px',
  fontSize: '13px',
  fontWeight: 500,
  display: 'inline-block',
};

export default function SkillTag({ variant = 'default', children }: SkillTagProps) {
  return (
    <span style={{ ...baseStyle, ...variantStyle[variant] }}>
      {children}
    </span>
  );
}
