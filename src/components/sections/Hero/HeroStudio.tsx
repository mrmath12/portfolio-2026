'use client';

import { useLayout } from '@/context/LayoutContext';
import { ROLES_DEV, ROLES_CREATIVE } from '@/data/content';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';

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
  const roles = focus === 'creative' ? ROLES_CREATIVE : ROLES_DEV;

  return (
    <div
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
        className="reveal visible"
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
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
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
          style={{
            fontSize: 'clamp(60px, 7vw, 100px)',
            fontWeight: 800,
            color: 'var(--fg1)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            marginBottom: 28,
          }}
        >
          <span style={{ display: 'block' }}>Dev que</span>
          <span style={{ display: 'block', color: 'var(--brand)' }}>pensa</span>
          <span style={{ display: 'block' }}>em produto.</span>
        </h1>

        <p
          style={{
            fontSize: 16,
            color: 'var(--muted)',
            lineHeight: 1.65,
            maxWidth: 400,
            marginBottom: 36,
          }}
        >
          Desenvolvedor Fullstack com visão de produto e sensibilidade de design. Código
          limpo, interfaces que funcionam — e um background criativo que faz a diferença.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary" href="#projetos">
            Ver Projetos
          </Button>
          <Button variant="ghost" href="#contato">
            Fale comigo
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
        className="reveal visible"
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
