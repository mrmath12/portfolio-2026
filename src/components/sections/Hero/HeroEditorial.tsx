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

export default function HeroEditorial() {
  const { focus } = useLayout();
  const roles = focus === 'creative' ? ROLES_CREATIVE : ROLES_DEV;

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
      <div
        className="reveal"
        style={{ display: 'flex', flexDirection: 'column', gap: 26 }}
      >
        <div
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
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: 'var(--brand)',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          Disponível para projetos · 2026
        </div>

        <h1
          style={{
            fontSize: 'clamp(64px, 8vw, 108px)',
            fontWeight: 700,
            color: 'var(--fg1)',
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
          }}
        >
          Dev que
          <br />
          <em style={{ fontStyle: 'normal', color: 'var(--brand)' }}>entende</em>
          <br />
          design.
        </h1>

        <div style={{ display: 'flex', gap: 16, alignItems: 'stretch' }}>
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
            Desenvolvedor Fullstack, estudante de ADS, e criativo múltiplo — design gráfico,
            música, VJ. Código limpo e sensibilidade estética no mesmo pacote.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, paddingTop: 4 }}>
          {roles.map((r, i) => (
            <Tag key={r} variant={i % 2 === 0 ? 'brand' : 'accent'}>
              {r}
            </Tag>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="primary" href="#projetos">
            Ver Projetos
          </Button>
          <Button variant="ghost" href="#sobre">
            Sobre mim
          </Button>
        </div>
      </div>

      {/* Right column */}
      <div
        className="reveal"
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
          <Placeholder />
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
            Baseado em
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg1)' }}>
            Brasil 🇧🇷
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
            Status
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg1)' }}>
            Disponível
          </div>
        </div>
      </div>
    </div>
  );
}
