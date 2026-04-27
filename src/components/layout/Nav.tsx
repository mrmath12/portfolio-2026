'use client';

import { useEffect, useState } from 'react';

const NAV_SECTIONS = ['projetos', 'skills', 'sobre', 'contato'] as const;

const links = [
  { label: 'Projetos',    section: 'projetos' },
  { label: 'Habilidades', section: 'skills' },
  { label: 'Sobre',       section: 'sobre' },
  { label: 'Contato',     section: 'contato' },
] as const;

export default function Nav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 },
    );

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200] backdrop-blur-[16px] border-b border-[rgba(42,60,53,0.5)]"
      style={{ background: 'rgba(16,27,23,0.88)' }}
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-center max-w-[1400px] mx-auto">
        <a
          href="#hero"
          className="text-[20px] font-bold text-[var(--fg1)] tracking-[-0.03em] no-underline px-10 py-[18px]"
        >
          M<span className="text-[var(--brand)]">.</span>
        </a>

        <div className="flex">
          {links.map(({ label, section }) => (
            <a
              key={section}
              href={`#${section}`}
              data-section={section}
              className={[
                'text-[14px] font-medium no-underline tracking-[0.04em]',
                'px-[18px] py-[18px] transition-colors duration-200',
                'hover:text-[var(--fg1)]',
                activeSection === section
                  ? 'text-[var(--brand)]'
                  : 'text-[var(--muted)]',
              ].join(' ')}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contato"
          className="border-l border-[rgba(42,60,53,0.5)] text-[var(--brand)] px-10 py-[18px] text-[13px] font-semibold uppercase tracking-[0.06em] no-underline transition-colors duration-200 hover:text-[var(--brand-lt)]"
        >
          Fale comigo
        </a>
      </div>
    </nav>
  );
}
