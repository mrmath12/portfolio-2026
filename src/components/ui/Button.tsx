import React from 'react';

type ButtonVariant = 'primary' | 'ghost';

type ButtonProps = {
  variant: ButtonVariant;
  href?: string;
  target?: string;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const baseStyle: React.CSSProperties = {
  display: 'inline-block',
  fontFamily: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
  borderRadius: '9999px',
  transition: 'all 200ms ease',
};

const variantStyle: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--bg1)',
    padding: '12px 30px',
    fontSize: '15px',
    fontWeight: 600,
    border: 'none',
    letterSpacing: '0.02em',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--fg2)',
    padding: '12px 26px',
    fontSize: '14px',
    fontWeight: 500,
    border: '1.5px solid var(--border)',
  },
};

export default function Button({
  variant,
  href,
  target,
  children,
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const style = { ...baseStyle, ...variantStyle[variant] };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        style={style}
        className={`btn ${className}`}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = 'scale(1.025)';
          if (variant === 'primary') {
            el.style.background = 'var(--brand-lt)';
          } else {
            el.style.borderColor = 'var(--brand)';
            el.style.color = 'var(--brand)';
          }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = '';
          if (variant === 'primary') {
            el.style.background = 'var(--brand)';
          } else {
            el.style.borderColor = 'var(--border)';
            el.style.color = 'var(--fg2)';
          }
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      style={style}
      className={`btn ${className}`}
      onClick={onClick}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = 'scale(1.025)';
        if (variant === 'primary') {
          el.style.background = 'var(--brand-lt)';
        } else {
          el.style.borderColor = 'var(--brand)';
          el.style.color = 'var(--brand)';
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = '';
        if (variant === 'primary') {
          el.style.background = 'var(--brand)';
        } else {
          el.style.borderColor = 'var(--border)';
          el.style.color = 'var(--fg2)';
        }
      }}
    >
      {children}
    </button>
  );
}
