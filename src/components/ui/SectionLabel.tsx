import React from 'react';

type SectionLabelProps = {
  variant?: 'default' | 'accent';
  children: React.ReactNode;
};

const variantColor: Record<'default' | 'accent', string> = {
  default: 'var(--brand)',
  accent: 'var(--accent-lt)',
};

export default function SectionLabel({ variant = 'default', children }: SectionLabelProps) {
  return (
    <div
      style={{
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: variantColor[variant],
        marginBottom: '10px',
      }}
    >
      {children}
    </div>
  );
}
