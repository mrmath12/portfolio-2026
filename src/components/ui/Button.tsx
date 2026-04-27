import React from 'react';

type ButtonVariant = 'primary' | 'ghost';

type ButtonProps = {
  variant: ButtonVariant;
  href?: string;
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
        style={style}
        className={className}
        onMouseEnter={(e) => {
          if (variant === 'primary') {
            (e.currentTarget as HTMLElement).style.background = 'var(--brand-lt)';
          } else {
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand)';
            (e.currentTarget as HTMLElement).style.color = 'var(--brand)';
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'primary') {
            (e.currentTarget as HTMLElement).style.background = 'var(--brand)';
          } else {
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
            (e.currentTarget as HTMLElement).style.color = 'var(--fg2)';
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
      className={className}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          (e.currentTarget as HTMLElement).style.background = 'var(--brand-lt)';
        } else {
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--brand)';
          (e.currentTarget as HTMLElement).style.color = 'var(--brand)';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          (e.currentTarget as HTMLElement).style.background = 'var(--brand)';
        } else {
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
          (e.currentTarget as HTMLElement).style.color = 'var(--fg2)';
        }
      }}
    >
      {children}
    </button>
  );
}
