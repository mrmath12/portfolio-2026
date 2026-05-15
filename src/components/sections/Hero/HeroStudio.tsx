'use client';

import { useLayout } from '@/context/LayoutContext';
import { useTranslation } from '@/hooks/useTranslation';
import Button from '@/components/ui/Button';

const Placeholder = () => (
  <div
    style={{
      background: 'var(--bg2)',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 64,
      opacity: 0.15,
    }}
  >
    ◈
  </div>
);

export default function HeroStudio() {
  const { focus } = useLayout();
  const { t } = useTranslation();
  const roles = focus === 'creative' ? t.rolesCreative : t.rolesDev;
  const h = t.heroStudio;

  return (
    <div
      className="hero-studio-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '55% 45%',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Left column */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 120,
          paddingRight: 60,
          paddingBottom: 80,
          paddingLeft: 'max(40px, calc((100vw - 1400px) / 2 + 40px))',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Kicker pills */}
        <div
          className="reveal"
          style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32, transitionDelay: '0ms' }}
        >
          {roles.map((r, i) => (
            <span
              key={r}
              style={{
                padding: '4px 12px',
                borderRadius: 9999,
                border:
                  i < 2
                    ? '1px solid rgba(117,176,156,0.3)'
                    : '1px solid rgba(126,116,175,0.3)',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: i < 2 ? 'var(--brand)' : 'var(--accent-lt)',
              }}
            >
              {r}
            </span>
          ))}
        </div>

        <h1
          className="reveal"
          style={{
            fontSize: 'clamp(60px, 7vw, 100px)',
            fontWeight: 800,
            color: 'var(--fg1)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            marginBottom: 28,
            transitionDelay: '100ms',
          }}
        >
          <span style={{ display: 'block' }}>{h.headline1}</span>
          <span style={{ display: 'block', color: 'var(--brand)' }}>{h.headline2}</span>
          <span style={{ display: 'block' }}>{h.headline3}</span>
        </h1>

        <p
          className="reveal"
          style={{
            fontSize: 16,
            color: 'var(--muted)',
            lineHeight: 1.65,
            maxWidth: 400,
            marginBottom: 36,
            transitionDelay: '220ms',
          }}
        >
          {h.bio}
        </p>

        <div
          className="reveal"
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', transitionDelay: '310ms' }}
        >
          <Button variant="primary" href="#projetos">
            {h.ctaPrimary}
          </Button>
          <Button variant="ghost" href="#contato">
            {h.ctaSecondary}
          </Button>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            left: 'max(40px, calc((100vw - 1400px) / 2 + 40px))',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            zIndex: 3,
          }}
        >
          <div style={{ width: 36, height: 1, background: 'var(--border)' }} />
          <span
            style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#3a5c4e',
            }}
          >
            SCROLL
          </span>
        </div>
      </div>

      {/* Right column — photo */}
      <div
        className="reveal hero-studio-right"
        style={{
          position: 'relative',
          overflow: 'hidden',
          transitionDelay: '100ms',
        }}
      >
        {/* Gradient overlay (replaces ::before pseudo-element) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background: 'linear-gradient(to right, var(--bg1) 0%, transparent 35%)',
          }}
        />
        <Placeholder />
      </div>
    </div>
  );
}
