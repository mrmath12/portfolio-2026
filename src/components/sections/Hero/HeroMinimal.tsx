'use client';

import { useLayout } from '@/context/LayoutContext';
import { ROLES_DEV, ROLES_CREATIVE } from '@/data/content';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';

export default function HeroMinimal() {
  const { focus } = useLayout();
  const roles = focus === 'creative' ? ROLES_CREATIVE : ROLES_DEV;

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
        Rio de Janeiro, BR — 2026
      </div>

      <h1
        className="reveal visible"
        style={{
          fontSize: 'clamp(72px, 12vw, 170px)',
          fontWeight: 800,
          color: 'var(--fg1)',
          lineHeight: 0.88,
          letterSpacing: '-0.05em',
        }}
      >
        <span style={{ display: 'block' }}>Matheus</span>
        <span
          style={{
            display: 'block',
            WebkitTextStroke: '1.5px rgba(247,251,249,0.2)',
            color: 'transparent',
          }}
        >
          Fullstack
        </span>
        <span style={{ display: 'block' }}>Dev.</span>
      </h1>

      <div
        className="reveal visible"
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginTop: 48,
          flexWrap: 'wrap',
          gap: 24,
          transitionDelay: '100ms',
        }}
      >
        {/* Left: description + buttons */}
        <div style={{ maxWidth: 400 }}>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 20 }}>
            Desenvolvedor Fullstack, estudante de ADS e criativo múltiplo. Design gráfico,
            música, VJ. Código limpo com sensibilidade estética.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Button variant="primary" href="#projetos">
              Ver Projetos
            </Button>
            <Button variant="ghost" href="#contato">
              Contato
            </Button>
          </div>
        </div>

        {/* Right: role pills */}
        <div
          className="reveal visible"
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            transitionDelay: '200ms',
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
