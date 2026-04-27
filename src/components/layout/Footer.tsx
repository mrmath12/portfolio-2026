const socialLinks = ['GitHub', 'LinkedIn', 'Instagram', 'Soundcloud'] as const;

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] px-10 py-[22px] flex items-center justify-between max-w-[1400px] mx-auto">
      <p className="text-[11px] text-[#3a5c4e]">
        © 2026 Matheus. Todos os direitos reservados.
      </p>
      <div className="flex gap-5">
        {socialLinks.map((name) => (
          <a
            key={name}
            href="#"
            className="text-[11px] text-[#3a5c4e] no-underline transition-colors duration-150 hover:text-[var(--muted)]"
          >
            {name}
          </a>
        ))}
      </div>
    </footer>
  );
}
