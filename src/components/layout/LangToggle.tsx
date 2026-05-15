'use client';

import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import type { Lang } from '@/data/translations';

function LangButton({ target, active }: { target: Lang; active: boolean }) {
  const { setLang } = useContext(LanguageContext);
  return (
    <button
      onClick={() => setLang(target)}
      className={[
        'text-[0.6875rem] font-semibold tracking-[0.08em] uppercase transition-colors duration-150 bg-transparent border-0 cursor-pointer px-1.5 py-1',
        active ? 'text-[var(--fg1)]' : 'text-[var(--muted)] hover:text-[var(--fg2)]',
      ].join(' ')}
    >
      {target.toUpperCase()}
    </button>
  );
}

export default function LangToggle() {
  const { lang } = useContext(LanguageContext);
  return (
    <div
      className="fixed z-[201] flex items-center rounded-full border border-[var(--border)] px-3 py-1.5 left-5"
      style={{
        bottom: 'var(--floating-bottom)',
        background: 'rgba(16,27,23,0.92)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <LangButton target="pt" active={lang === 'pt'} />
      <span className="text-[var(--muted)] opacity-50 text-[0.6875rem] select-none leading-none">/</span>
      <LangButton target="en" active={lang === 'en'} />
    </div>
  );
}
