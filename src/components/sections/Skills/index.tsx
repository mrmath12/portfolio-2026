'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { SKILLS_DATA, CREATIVE_CATEGORIES } from '@/data/skills';
import SectionLabel from '@/components/ui/SectionLabel';
import SkillTag from '@/components/ui/SkillTag';

export default function Skills() {
  const { t } = useTranslation();
  const s = t.skills;
  const categoryLabels = s.categoryLabels as Record<string, string>;

  return (
    <div
      className="skills-grid"
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
      <div className="reveal">
        <SectionLabel>{s.sectionLabel}</SectionLabel>
        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '20px',
          }}
          dangerouslySetInnerHTML={{ __html: s.headline }}
        />
        <p
          style={{
            fontSize: '16px',
            color: 'var(--muted)',
            lineHeight: 1.65,
            marginBottom: '28px',
          }}
        >
          {s.bio}
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
            {s.creativeLabel}
          </div>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--muted)',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {s.creativeBio}
          </p>
        </div>
      </div>

      {/* Right column */}
      <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '24px', transitionDelay: '120ms' }}>
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
                {categoryLabels[cat] ?? cat}
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
