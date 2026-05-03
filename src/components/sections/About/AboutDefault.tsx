// ─── SEÇÃO: Imports ──────────────────────────────────────────────
// Dependências externas e componentes internos da seção About
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import SkillTag from '@/components/ui/SkillTag';
import StatCard from '@/components/ui/StatCard';

// ─── SEÇÃO: Types ────────────────────────────────────────────────
// Tipagem dos dados estáticos dos cards de estatísticas
type StatCardData = {
  variant: 'default' | 'accent';
  num: string;
  label: string;
};

// ─── SEÇÃO: Constants ────────────────────────────────────────────
// Tags que descrevem as áreas de atuação e características do desenvolvedor
const PROFILE_SKILL_TAGS = [
  'Fullstack Dev',
  'ADS',
  'Design Gráfico',
  'DJ',
  'VJ',
  'Produção Musical',
  'Perfeccionista',
  'Muito Curioso',
];

// Dados das estatísticas exibidas abaixo da foto de perfil
const PROFILE_STATS: StatCardData[] = [
  { variant: 'default', num: '+6', label: 'Projetos' },
  { variant: 'accent',  num: '3+', label: 'Anos' },
  { variant: 'accent',  num: '∞',  label: 'Curiosidade' },
  { variant: 'default', num: 'BR', label: 'Brasil' },
];

// ─── SEÇÃO: Helpers ──────────────────────────────────────────────
// A cada grupo de 3 tags, a do meio (índice % 3 === 1) recebe destaque visual
function resolveSkillTagVariant(index: number): 'accent' | 'default' {
  return index % 3 === 1 ? 'accent' : 'default';
}

// ─── SEÇÃO: Sub-components ───────────────────────────────────────

// Parágrafos de apresentação pessoal — quem é e o que o move
function ProfileDescription() {
  return (
    <>
      <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '16px' }}>
        Sou Matheus, desenvolvedor Fullstack e estudante de Análise e Desenvolvimento de Sistemas.
        Faço código limpo e interfaces que funcionam — e tenho obsessão por ambos.
      </p>
      <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7 }}>
        Design gráfico, produção musical, DJ, VJ ao vivo. A mesma curiosidade perfeccionista que me faz
        revisar um PR três vezes me faz afinar um kick por horas.
      </p>
    </>
  );
}

// Separador visual + label + lista de tags de habilidades e características
function ProfileSkillTags() {
  return (
    <>
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
        {PROFILE_SKILL_TAGS.map((tag, index) => (
          <SkillTag key={tag} variant={resolveSkillTagVariant(index)}>
            {tag}
          </SkillTag>
        ))}
      </div>
    </>
  );
}

// Coluna esquerda: título, descrição e tags — narrativa do perfil
function ProfileContent() {
  return (
    <div className="reveal">
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

      <ProfileDescription />
      <ProfileSkillTags />
    </div>
  );
}

// Foto de perfil com proporção 4/5 e foco no topo da imagem
function ProfileImage() {
  return (
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
  );
}

// Grid 2×2 com os cards de estatísticas gerados a partir de PROFILE_STATS
function ProfileStats() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px' }}>
      {PROFILE_STATS.map(({ variant, num, label }) => (
        <StatCard key={label} variant={variant} num={num} label={label} />
      ))}
    </div>
  );
}

// Coluna direita: foto + estatísticas — representação visual do perfil
// transitionDelay garante que a animação de reveal ocorra após a coluna esquerda
function ProfileVisuals() {
  return (
    <div className="reveal" style={{ transitionDelay: '120ms' }}>
      <ProfileImage />
      <ProfileStats />
    </div>
  );
}

// ─── SEÇÃO: Main Component ───────────────────────────────────────
// Orquestra o layout de duas colunas da seção About
export default function AboutDefault() {
  return (
    <div
      className="about-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
      }}
    >
      <ProfileContent />
      <ProfileVisuals />
    </div>
  );
}
