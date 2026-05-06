'use client';

import React, { useEffect, useState } from 'react';

// ─── Constants ────────────────────────────────────────────────────────────────

const SECTION_IDS = ['projetos', 'skills', 'sobre', 'contato'] as const;
type SectionId = (typeof SECTION_IDS)[number];

// Desktop links — Contato removido; o CTA é o único ponto de entrada para contato
const NAV_LINKS = [
  { label: 'Projetos',    sectionId: 'projetos' },
  { label: 'Habilidades', sectionId: 'skills'   },
  { label: 'Sobre',       sectionId: 'sobre'    },
] as const;

// Bottom tab bar mobile — todas as quatro seções
const TAB_ITEMS = [
  { label: 'Projetos', sectionId: 'projetos' },
  { label: 'Skills',   sectionId: 'skills'   },
  { label: 'Sobre',    sectionId: 'sobre'    },
  { label: 'Contato',  sectionId: 'contato'  },
] as const;

const SECTION_VISIBILITY_THRESHOLD = 0.35;

// ─── Hook — Active Section Tracker ───────────────────────────────────────────

function useActiveSectionTracker(): SectionId | '' {
  // Inicializa em 'projetos' para que o primeiro link já apareça ativo no load
  const [activeSectionId, setActiveSectionId] = useState<SectionId | ''>('projetos');

  useEffect(() => {
    function handleIntersection(entries: IntersectionObserverEntry[]): void {
      const intersecting = entries.filter((e) => e.isIntersecting);
      if (intersecting.length === 0) return;
      // Escolhe a seção com maior área visível no batch — evita misfires em scroll rápido
      const best = intersecting.reduce((a, b) =>
        b.intersectionRatio > a.intersectionRatio ? b : a
      );
      setActiveSectionId(best.target.id as SectionId);
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: SECTION_VISIBILITY_THRESHOLD,
      // Desconta a altura da nav fixa para seções curtas não perderem o threshold
      rootMargin: '-56px 0px 0px 0px',
    });

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSectionId;
}

// ─── Helper — Nav Link Classes ────────────────────────────────────────────────

function buildNavLinkClassName(isActive: boolean): string {
  const base = [
    'text-6 font-medium no-underline tracking-[0.04em]',
    'px-[18px] py-[18px] transition-colors duration-150',
    'hover:text-[var(--fg1)]',
  ];
  return [...base, isActive ? 'text-[var(--brand)]' : 'text-[var(--muted)]'].join(' ');
}

// ─── Icons — Mobile Tab Bar ───────────────────────────────────────────────────

function IconProjetos() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  );
}

function IconSkills() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}

function IconSobre() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6"/>
    </svg>
  );
}

function IconContato() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-10 7L2 7"/>
    </svg>
  );
}

const TAB_ICONS: Record<string, React.ComponentType> = {
  projetos: IconProjetos,
  skills:   IconSkills,
  sobre:    IconSobre,
  contato:  IconContato,
};

// ─── Component — Mobile Tab Bar ───────────────────────────────────────────────

function MobileTabBar({ activeSectionId }: { activeSectionId: SectionId | '' }) {
  return (
    <nav
      aria-label="Navegação móvel"
      className="fixed bottom-0 left-0 right-0 z-[200] flex md:hidden border-t border-[var(--border)]"
      style={{ background: 'rgba(16,27,23,0.96)' }}
    >
      {TAB_ITEMS.map(({ label, sectionId }) => {
        const isActive = activeSectionId === sectionId;
        const Icon = TAB_ICONS[sectionId];
        return (
          <a
            key={sectionId}
            href={`#${sectionId}`}
            aria-current={isActive ? 'true' : undefined}
            className={[
              'flex flex-1 flex-col items-center justify-center gap-1.5 no-underline transition-colors duration-150',
              isActive ? 'text-[var(--brand)]' : 'text-[var(--muted)]',
            ].join(' ')}
            style={{ padding: '12px 0', paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
          >
            <Icon />
            <span className="text-[10px] font-medium tracking-[0.04em] uppercase">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}

// ─── Component — Nav ──────────────────────────────────────────────────────────

export default function Nav() {
  const activeSectionId = useActiveSectionTracker();

  return (
    <>
      <nav
        aria-label="Navegação principal"
        className="fixed hidden md:flex h-14 justify-center top-0 left-0 right-0 z-[200] backdrop-blur-[16px] border-b border-[var(--border)]"
        style={{ background: 'rgba(16,27,23,0.88)' }}
      >
        <div className="grid grid-cols-[auto_1fr_auto] items-center w-full max-w-[1400px]">

          {/* Logo — ancora para o topo da página */}
          <a
            href="#hero"
            aria-label="Matheus — voltar ao início"
            className="text-7 font-bold text-[var(--fg1)] tracking-[-0.03em] no-underline px-10 py-[18px]"
          >
            M<span className="text-[var(--brand)]">.</span>
          </a>

          {/* Links de navegação — visíveis apenas no desktop */}
          <div className="hidden md:flex justify-center gap-4">
            {NAV_LINKS.map(({ label, sectionId }) => (
              <a
                key={sectionId}
                href={`#${sectionId}`}
                data-section={sectionId}
                aria-current={activeSectionId === sectionId ? 'true' : undefined}
                className={buildNavLinkClassName(activeSectionId === sectionId)}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA — único ponto de entrada para contato no desktop */}
          <a
            href="#contato"
            className="hidden md:flex items-center self-stretch border-l border-[var(--border-soft)] px-10 text-6 font-semibold uppercase tracking-[0.06em] no-underline transition-colors duration-150 text-[var(--brand)] hover:text-[var(--brand-lt)]"
          >
            Fale comigo
          </a>

        </div>
      </nav>

      {/* Bottom tab bar — navegação mobile */}
      <MobileTabBar activeSectionId={activeSectionId} />
    </>
  );
}
