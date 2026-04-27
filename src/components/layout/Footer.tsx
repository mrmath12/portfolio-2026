const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/mrmath12' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/matheus-carvalho-465a00288/' },
  { name: 'Instagram', href: 'https://instagram.com/matheuscarvalho212' },
  { name: 'Soundcloud', href: 'https://soundcloud.com/slowsensemusic' },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] px-10 py-[22px] flex items-center justify-between max-w-[1400px] mx-auto">
      <p className="text-[11px] text-[#3a5c4e]">
        © 2026 Matheus. Todos os direitos reservados.
      </p>
      <div className="flex gap-5">
        {socialLinks.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#3a5c4e] no-underline transition-colors duration-150 hover:text-[var(--muted)]"
          >
            {name}
          </a>
        ))}
      </div>
    </footer>
  );
}
