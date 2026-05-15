'use client';

import { useTranslation } from '@/hooks/useTranslation';
import SectionLabel from '@/components/ui/SectionLabel';
import StatCard from '@/components/ui/StatCard';

export default function AboutStudio() {
  const { t } = useTranslation();
  const a = t.about;

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
      <div className="reveal">
        <SectionLabel variant="accent">{a.sectionLabel}</SectionLabel>
      </div>

      <h2
        className="reveal"
        style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          marginBottom: '24px',
          transitionDelay: '60ms',
        }}
      >
        {a.headline1}
        <br />
        {a.headline2}
        <br />
        <em style={{ fontStyle: 'normal', color: 'var(--brand)' }}>{a.headline3}</em>
      </h2>

      <p
        className="reveal"
        style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '14px', transitionDelay: '120ms' }}
      >
        {a.bio1}
      </p>
      <p
        className="reveal"
        style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7, transitionDelay: '160ms' }}
      >
        {a.bio2}
      </p>

      <div style={{ height: '1px', background: 'var(--border)', margin: '32px 0' }} />

      <div
        className="about-studio-stats"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          marginTop: '32px',
        }}
      >
        <div className="reveal" style={{ transitionDelay: '200ms' }}><StatCard variant="default" num="+6" label={a.stat1Label} /></div>
        <div className="reveal" style={{ transitionDelay: '260ms' }}><StatCard variant="accent" num="3+" label={a.stat2Label} /></div>
        <div className="reveal" style={{ transitionDelay: '320ms' }}><StatCard variant="accent" num="∞" label={a.stat3Label} /></div>
        <div className="reveal" style={{ transitionDelay: '380ms' }}><StatCard variant="default" num="BR" label={a.stat4Label} /></div>
      </div>

    </div>
  );
}
