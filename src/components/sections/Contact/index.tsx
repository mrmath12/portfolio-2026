'use client';

import { useTranslation } from '@/hooks/useTranslation';
import SectionLabel from '@/components/ui/SectionLabel';
import ContactForm from './ContactForm';

const SOCIAL_LINKS = [
  { key: 'Email',    value: 'matheus_psilveira@hotmail.com', href: 'mailto:matheus_psilveira@hotmail.com' },
  { key: 'GitHub',   value: 'github.com/mrmath12',           href: 'https://github.com/mrmath12' },
  { key: 'LinkedIn', value: 'linkedin.com/in/matheus-carvalho-465a00288', href: 'https://linkedin.com/in/matheus-carvalho-465a00288/' },
] as const;

export default function Contact() {
  const { t } = useTranslation();
  const c = t.contact;

  return (
    <div
      className="contact-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '80px',
        maxWidth: '1400px',
        margin: '0 auto',
        alignItems: 'start',
      }}
    >
      {/* Left column */}
      <div className="reveal">
        <SectionLabel variant="accent">{c.sectionLabel}</SectionLabel>

        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 50px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '18px',
          }}
        >
          {c.headline1}
          <br />
          {c.headline2}
        </h2>

        <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '30px' }}>
          {c.bio}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {SOCIAL_LINKS.map(({ key, value, href }) => (
            <div key={key}>
              <div
                style={{
                  fontSize: '9px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#4a6a5c',
                  marginBottom: '2px',
                }}
              >
                {key}
              </div>
              <a
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  fontSize: '15px',
                  color: 'var(--fg2)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'color 150ms ease, transform 180ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--brand)';
                  el.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--fg2)';
                  el.style.transform = '';
                }}
              >
                {value}
              </a>
            </div>
          ))}

          {/* Tipo de projeto */}
          <div>
            <div
              style={{
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#4a6a5c',
                marginBottom: '2px',
              }}
            >
              {c.infoTipoLabel}
            </div>
            <div style={{ fontSize: '15px', color: 'var(--fg2)' }}>
              {c.infoTipoValue}
            </div>
          </div>

          {/* Disponibilidade */}
          <div>
            <div
              style={{
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#4a6a5c',
                marginBottom: '2px',
              }}
            >
              {c.infoDisponLabel}
            </div>
            <div style={{ fontSize: '15px', color: 'var(--brand)' }}>
              {c.infoDisponValue}
            </div>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="reveal" style={{ transitionDelay: '120ms' }}>
        <ContactForm />
      </div>
    </div>
  );
}
