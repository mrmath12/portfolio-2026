import SectionLabel from '@/components/ui/SectionLabel';
import StatCard from '@/components/ui/StatCard';

export default function AboutStudio() {
  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
      <div className="reveal">
        <SectionLabel variant="accent">Sobre</SectionLabel>
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
        Fullstack dev
        <br />
        com olho em
        <br />
        <em style={{ fontStyle: 'normal', color: 'var(--brand)' }}>produto.</em>
      </h2>

      <p
        className="reveal"
        style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '14px', transitionDelay: '120ms' }}
      >
        Sou Matheus, desenvolvedor Fullstack e estudante de Análise e Desenvolvimento de Sistemas.
        Construo aplicações web e mobile com foco em qualidade de código, performance e experiência do usuário.
      </p>
      <p
        className="reveal"
        style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.7, transitionDelay: '160ms' }}
      >
        O que me diferencia: um background em design gráfico, produção musical e artes visuais que me dá uma leitura
        de produto fora do comum. Entendo de interface porque faço arte. Entendo de narrativa porque crio música.
      </p>

      <div style={{ height: '1px', background: 'var(--border)', margin: '32px 0' }} />

      <div
        className="reveal about-studio-stats"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          marginTop: '32px',
          transitionDelay: '200ms',
        }}
      >
        <StatCard variant="default" num="+6" label="Projetos entregues" />
        <StatCard variant="accent" num="3+" label="Anos de experiência" />
        <StatCard variant="accent" num="∞" label="Curiosidade" />
        <StatCard variant="default" num="BR" label="Brasil" />
      </div>

    </div>
  );
}
