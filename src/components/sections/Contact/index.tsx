import SectionLabel from '@/components/ui/SectionLabel';
import ContactForm from './ContactForm';

const INFO_ITEMS = [
  { key: 'Email', value: 'oi@matheus.dev', highlight: false },
  { key: 'Tipo de projeto', value: 'Web App · Mobile · Front-end · Back-end', highlight: false },
  { key: 'Disponibilidade', value: 'Disponível agora', highlight: true },
];

export default function Contact() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '80px',
        padding: '100px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        alignItems: 'start',
      }}
    >
      {/* Left column */}
      <div>
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
          {INFO_ITEMS.map(({ key, value, highlight }) => (
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
              <div style={{ fontSize: '15px', color: highlight ? 'var(--brand)' : 'var(--fg2)' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <ContactForm />
    </div>
  );
}
