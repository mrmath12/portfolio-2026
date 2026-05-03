'use client';

// ─── SEÇÃO: Imports ────────────────────────────────────────────────────────────
// Hooks do React necessários para estado reativo e efeitos colaterais
import { useEffect, useState } from 'react';

// ─── SEÇÃO: Constants ──────────────────────────────────────────────────────────
// IDs das seções da página usados tanto para observação quanto para tipagem
const SECTION_IDS = ['projetos', 'skills', 'sobre', 'contato'] as const;

// Percentual mínimo de visibilidade de uma seção para ela ser considerada "ativa"
// Valor de 35% evita trocas de estado prematuras ao scrollar entre seções
const SECTION_VISIBILITY_THRESHOLD = 0.35;

// Definição dos links de navegação com label exibido e ID da seção correspondente
const NAV_LINKS = [
  { label: 'Projetos',    sectionId: 'projetos' },
  { label: 'Habilidades', sectionId: 'skills'   },
  { label: 'Sobre',       sectionId: 'sobre'    },
  { label: 'Contato',     sectionId: 'contato'  },
] as const;

// ─── SEÇÃO: Types ──────────────────────────────────────────────────────────────
// Tipo derivado do array de IDs para garantir consistência sem duplicação
type SectionId = (typeof SECTION_IDS)[number];

// ─── SEÇÃO: Hook — Active Section Tracker ─────────────────────────────────────
// Rastreia qual seção da página está atualmente visível na viewport do usuário
// usando a IntersectionObserver API para máxima performance (sem scroll events)
function useActiveSectionTracker(): SectionId | '' {
  const [activeSectionId, setActiveSectionId] = useState<SectionId | ''>('');

  useEffect(() => {
    // Marca a seção como ativa assim que ela atinge o threshold de visibilidade
    function handleIntersection(entries: IntersectionObserverEntry[]): void {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id as SectionId);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: SECTION_VISIBILITY_THRESHOLD,
    });

    // Registra o observer apenas nas seções que existem no DOM no momento da montagem
    SECTION_IDS.forEach((id) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) observer.observe(sectionElement);
    });

    // Cleanup: desconecta todos os observers ao desmontar o componente
    return () => observer.disconnect();
  }, []);

  return activeSectionId;
}

// ─── SEÇÃO: Helper — Class Builder ────────────────────────────────────────────
// Gera a string de classes CSS de um link de navegação com base no seu estado ativo
function buildNavLinkClassName(isActive: boolean): string {
  const baseClasses = [
    'text-6 font-medium no-underline tracking-[0.04em]',
    'px-[18px] py-[18px] transition-colors duration-200',
    'hover:text-[var(--fg1)]',
  ];

  // Aplica a cor de destaque da marca ao link ativo; cor atenuada para os demais
  const stateClass = isActive
    ? 'text-[var(--brand)]'
    : 'text-[var(--muted)]';

  return [...baseClasses, stateClass].join(' ');
}

// ─── SEÇÃO: Component — Nav ───────────────────────────────────────────────────
// Barra de navegação fixa no topo com rastreamento automático da seção visível
export default function Nav() {
  const activeSectionId = useActiveSectionTracker();

  return (
    <nav
      className="fixed flex h-14 justify-center top-0 left-0 right-0 z-[200] backdrop-blur-[16px] border-b border-[rgba(42,60,53,0.5)]"
      style={{ background: 'rgba(16,27,23,0.88)' }}
    >
      {/* Layout em três colunas: logo | links centralizados | CTA */}
      <div className="grid grid-cols-[auto_1fr_auto] items-center justify-self-center w-full max-w-[1400px]">

        {/* Logo — ancora para o topo da página */}
        <a
          href="#hero"
          className="text-7 font-bold text-[var(--fg1)] tracking-[-0.03em] no-underline px-10 py-[18px]"
        >
          M<span className="text-[var(--brand)]">.</span>
        </a>

        {/* Links de navegação — gerados dinamicamente a partir de NAV_LINKS */}
        <div className="flex stick justify-center nav-links gap-4">
          {NAV_LINKS.map(({ label, sectionId }) => (
            <a
              key={sectionId}
              href={`#${sectionId}`}
              data-section={sectionId}
              className={buildNavLinkClassName(activeSectionId === sectionId)}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA — ação primária da nav, separada visualmente por borda lateral */}
        <a
          href="#contato"
          className="nav-cta border-l border-[rgba(42,60,53,0.5)] text-[var(--brand)] px-10 py-[18px] text-6 font-semibold uppercase tracking-[0.06em] no-underline transition-colors duration-200 hover:text-[var(--brand-lt)]"
        >
          Fale comigo
        </a>

      </div>
    </nav>
  );
}
