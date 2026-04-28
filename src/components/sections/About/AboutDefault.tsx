import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import SkillTag from '@/components/ui/SkillTag';
import StatCard from '@/components/ui/StatCard';

const SKILL_TAGS = [
  'Fullstack Dev',
  'ADS',
  'Design Gráfico',
  'DJ',
  'VJ',
  'Produção Musical',
  'Perfeccionista',
  'Muito Curioso',
];

export default function AboutDefault() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
      }}
    >
      {/* Left column */}
      <div>
        <SectionLabel variant="accent">Sobre</SectionLabel>

        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 50px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '22px',
          }}
        >
          Dev Fullstack
          <br />
          com alma
          <br />
          de criativo.
        </h2>

        <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '16px' }}>
          Sou Matheus, desenvolvedor Fullstack e estudante de Análise e Desenvolvimento de Sistemas.
          Faço código limpo e interfaces que funcionam — e tenho obsessão por ambos.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7 }}>
          Design gráfico, produção musical, DJ, VJ ao vivo. A mesma curiosidade perfeccionista que me faz
          revisar um PR três vezes me faz afinar um kick por horas.
        </p>

        <div style={{ height: '1px', background: 'var(--border)', margin: '24px 0' }} />

        <div
          style={{
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#4a6a5c',
            marginBottom: '12px',
          }}
        >
          O que me define
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
          {SKILL_TAGS.map((tag, i) => (
            <SkillTag key={tag} variant={i % 3 === 1 ? 'accent' : 'default'}>
              {tag}
            </SkillTag>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div>
        <div
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            aspectRatio: '4/5',
            marginBottom: '14px',
            position: 'relative',
          }}
        >
          <Image
            src="/photo-01.jpg"
            alt="Matheus"
            fill
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '9px',
          }}
        >
          <StatCard variant="default" num="+6" label="Projetos" />
          <StatCard variant="accent" num="3+" label="Anos" />
          <StatCard variant="accent" num="∞" label="Curiosidade" />
          <StatCard variant="default" num="BR" label="Brasil" />
        </div>
      </div>
    </div>
  );
}
