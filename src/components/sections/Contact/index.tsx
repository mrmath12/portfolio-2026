'use client';

import SectionLabel from '@/components/ui/SectionLabel';
import ContactForm from './ContactForm';

const INFO_ITEMS = [
  { key: 'Email', value: 'matheus_psilveira@hotmail.com', href: 'mailto:matheus_psilveira@hotmail.com', highlight: false },
  { key: 'GitHub', value: 'github.com/mrmath12', href: 'https://github.com/mrmath12', highlight: false },
  { key: 'LinkedIn', value: 'linkedin.com/in/matheus-carvalho-465a00288', href: 'https://linkedin.com/in/matheus-carvalho-465a00288/', highlight: false },
  { key: 'Tipo de projeto', value: 'Web App · Mobile · Front-end · Back-end', href: null, highlight: false },
  { key: 'Disponibilidade', value: 'Disponível agora', href: null, highlight: true },
];

export default function Contact() {
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
        <SectionLabel variant="accent">Contato</SectionLabel>

        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 50px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '18px',
          }}
        >
          Vamos construir
          <br />
          algo juntos.
        </h2>

        <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '30px' }}>
          Estou disponível para projetos de desenvolvimento web e mobile — MVPs, sistemas, interfaces, APIs.
          Me conta o que você precisa.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {INFO_ITEMS.map(({ key, value, href, highlight }) => (
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
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '15px',
                    color: highlight ? 'var(--brand)' : 'var(--fg2)',
                    textDecoration: 'none',
                    transition: 'color 150ms ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--brand)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = highlight ? 'var(--brand)' : 'var(--fg2)'; }}
                >
                  {value}
                </a>
              ) : (
                <div style={{ fontSize: '15px', color: highlight ? 'var(--brand)' : 'var(--fg2)' }}>
                  {value}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div className="reveal" style={{ transitionDelay: '120ms' }}>
        <ContactForm />
      </div>
    </div>
  );
}
