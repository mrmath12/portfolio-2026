import SectionLabel from '@/components/ui/SectionLabel';
import SkillTag from '@/components/ui/SkillTag';
import { SKILLS_DATA, CREATIVE_CATEGORIES } from '@/data/skills';

export default function Skills() {
  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start',
      }}
    >
      {/* Left column */}
      <div>
        <SectionLabel>Stack</SectionLabel>
        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '20px',
          }}
          dangerouslySetInnerHTML={{ __html: 'Tecnologia<br>que entrega.' }}
        />
        <p
          style={{
            fontSize: '16px',
            color: 'var(--muted)',
            lineHeight: 1.65,
            marginBottom: '28px',
          }}
        >
          Stack focado em React, Node.js e TypeScript. Conforto no front,
          no back e no mobile — do MVP ao deploy em produção.
        </p>
        <div
          style={{
            background: 'rgba(126,116,175,0.07)',
            border: '1px solid rgba(126,116,175,0.22)',
            borderRadius: '10px',
            padding: '16px 20px',
          }}
        >
          <div
            style={{
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--accent-lt)',
              marginBottom: '8px',
            }}
          >
            Diferencial criativo
          </div>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--muted)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Design gráfico, VJ e produção musical me dão uma leitura de interface,
            narrativa visual e UX que a maioria dos devs não tem.
          </p>
        </div>
      </div>

      {/* Right column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {Object.entries(SKILLS_DATA).map(([cat, skills]) => {
          const isCreative = CREATIVE_CATEGORIES.includes(cat);
          return (
            <div key={cat}>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: isCreative ? 'var(--accent-lt)' : 'var(--brand)',
                  marginBottom: '10px',
                }}
              >
                {cat}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.map((skill) => (
                  <SkillTag key={skill} variant={isCreative ? 'accent' : 'default'}>
                    {skill}
                  </SkillTag>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
