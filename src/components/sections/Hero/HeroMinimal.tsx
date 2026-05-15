'use client';

import { useLayout } from '@/context/LayoutContext';
import { useTranslation } from '@/hooks/useTranslation';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';

export default function HeroMinimal() {
  const { focus } = useLayout();
  const { t } = useTranslation();
  const roles = focus === 'creative' ? t.rolesCreative : t.rolesDev;
  const h = t.heroMinimal;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: '100vh',
        overflow: 'hidden',
        paddingTop: 120,
        paddingRight: 'max(40px, calc((100vw - 1400px) / 2 + 40px))',
        paddingBottom: 80,
        paddingLeft: 'max(40px, calc((100vw - 1400px) / 2 + 40px))',
        position: 'relative',
      }}
    >
      <div
        style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#3a5c4e',
          marginBottom: 20,
        }}
      >
        {h.location}
      </div>

      <h1
        style={{
          fontSize: 'clamp(72px, 12vw, 170px)',
          fontWeight: 800,
          color: 'var(--fg1)',
          lineHeight: 0.88,
          letterSpacing: '-0.05em',
        }}
      >
        <span className="reveal" style={{ display: 'block', transitionDelay: '0ms' }}>Matheus</span>
        <span
          className="reveal"
          style={{
            display: 'block',
            WebkitTextStroke: '1.5px rgba(247,251,249,0.2)',
            color: 'transparent',
            transitionDelay: '80ms',
          }}
        >
          Fullstack
        </span>
        <span className="reveal" style={{ display: 'block', transitionDelay: '160ms' }}>Dev.</span>
      </h1>

      <div
        className="reveal"
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginTop: 48,
          flexWrap: 'wrap',
          gap: 24,
          transitionDelay: '280ms',
        }}
      >
        {/* Left: description + buttons */}
        <div style={{ maxWidth: 400 }}>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 20 }}>
            {h.bio}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Button variant="primary" href="#projetos">
              {h.ctaPrimary}
            </Button>
            <Button variant="ghost" href="#contato">
              {h.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Right: role pills */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            transitionDelay: '380ms',
          }}
        >
          {roles.map((r, i) => (
            <Tag key={r} variant={i % 2 === 0 ? 'brand' : 'accent'}>
              {r}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
