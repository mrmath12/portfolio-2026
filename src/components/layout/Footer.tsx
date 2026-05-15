'use client';

import { useTranslation } from '@/hooks/useTranslation';

const socialLinks = [
  { name: 'GitHub',     href: 'https://github.com/mrmath12' },
  { name: 'LinkedIn',   href: 'https://linkedin.com/in/matheus-carvalho-465a00288/' },
  { name: 'Instagram',  href: 'https://instagram.com/matheuscarvalho212' },
  { name: 'Soundcloud', href: 'https://soundcloud.com/slowsensemusic' },
] as const;

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full border-t border-[var(--border-soft)]">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="text-4 text-[var(--muted)] opacity-50">
          {t.footer.copyright}
        </p>

        <div className="flex gap-5">
          {socialLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4 text-[var(--muted)] opacity-50 no-underline transition-[color,opacity] duration-150 hover:opacity-100 hover:text-[var(--fg1)]"
            >
              {name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
