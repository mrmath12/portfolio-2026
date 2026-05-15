'use client';

import { useLayout } from '@/context/LayoutContext';
import { useTranslation } from '@/hooks/useTranslation';
import Tag from '@/components/ui/Tag';

export default function HeroEditorial() {
  const { focus } = useLayout();
  const { t } = useTranslation();
  const roles = focus === 'creative' ? t.rolesCreative : t.rolesDev;
  const h = t.heroEditorial;

  return (
    <div
      className="hero-editorial-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 380px',
        gap: 60,
        alignItems: 'center',
        padding: '120px 40px 80px',
        maxWidth: 1400,
        margin: '0 auto',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Left column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
        <div
          className="reveal"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--brand)',
          }}
        >
          <span
            className="available-dot"
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--brand)',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          {h.available}
        </div>

        <h1
          className="reveal"
          style={{
            fontSize: 'clamp(64px, 8vw, 108px)',
            fontWeight: 700,
            color: 'var(--fg1)',
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
            transitionDelay: '100ms',
          }}
        >
          {h.headline1}
          <br />
          <em style={{ fontStyle: 'normal', color: 'var(--brand)' }}>{h.headline2}</em>
          <br />
          {h.headline3}
        </h1>

        <div
          className="reveal"
          style={{ display: 'flex', gap: 16, alignItems: 'stretch', transitionDelay: '220ms' }}
        >
          <div
            style={{
              width: 3,
              background: 'var(--accent)',
              borderRadius: 2,
              opacity: 0.7,
              flexShrink: 0,
            }}
          />
          <p style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.65 }}>
            {h.bio}
          </p>
        </div>

        <div
          className="reveal"
          style={{ display: 'flex', flexWrap: 'wrap', gap: 7, paddingTop: 4, transitionDelay: '320ms' }}
        >
          {roles.map((r, i) => (
            <Tag key={r} variant={i % 2 === 0 ? 'brand' : 'accent'}>
              {r}
            </Tag>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div
        className="reveal hero-editorial-right"
        style={{ position: 'relative', transitionDelay: '150ms' }}
      >
        <div
          style={{
            borderRadius: 14,
            overflow: 'hidden',
            border: '1px solid var(--border)',
            aspectRatio: '3 / 4',
          }}
        >
          <img className='object-cover h-full' src="/photo-01.jpg" alt="Matheus" />
        </div>

        {/* Badge bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -16,
            left: -24,
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '12px 16px',
            minWidth: 160,
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#4a6a5c',
              marginBottom: 3,
            }}
          >
            {h.basedInLabel}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg1)' }}>
            {h.basedInValue}
          </div>
        </div>

        {/* Badge top-right */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            right: -20,
            background: 'rgba(27,46,38,0.92)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '10px 14px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--brand)',
              marginBottom: 2,
            }}
          >
            {h.statusLabel}
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg1)' }}>
            {h.statusValue}
          </div>
        </div>
      </div>
    </div>
  );
}
