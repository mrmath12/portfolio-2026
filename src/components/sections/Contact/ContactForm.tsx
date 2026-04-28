'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

const fieldBase: React.CSSProperties = {
  background: 'var(--bg3)',
  border: '1.5px solid var(--border)',
  borderRadius: '8px',
  color: 'var(--fg1)',
  fontFamily: 'inherit',
  fontSize: '15px',
  padding: '10px 14px',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  fontSize: '10px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--brand)',
  marginBottom: '6px',
  display: 'block',
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const inputStyle = (name: string): React.CSSProperties => ({
    ...fieldBase,
    borderColor: focused === name ? 'var(--brand)' : 'var(--border)',
  });

  if (submitted) {
    return (
      <div
        style={{
          background: 'rgba(117,176,156,0.07)',
          border: '1px solid rgba(117,176,156,0.2)',
          borderRadius: '12px',
          padding: '40px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--brand)', marginBottom: '8px' }}>
          Mensagem enviada!
        </div>
        <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
          Obrigado pelo contato. Retorno em até 48h.
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <Field label="Nome">
          <input
            type="text"
            placeholder="Seu nome"
            required
            className="contact-field"
            style={inputStyle('nome')}
            onFocus={() => setFocused('nome')}
            onBlur={() => setFocused(null)}
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            placeholder="seu@email.com"
            required
            className="contact-field"
            style={inputStyle('email')}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
          />
        </Field>
      </div>

      <Field label="Tipo de projeto">
        <input
          type="text"
          placeholder="Ex: Web App, API, Mobile, Landing Page…"
          className="contact-field"
          style={inputStyle('tipo')}
          onFocus={() => setFocused('tipo')}
          onBlur={() => setFocused(null)}
        />
      </Field>

      <Field label="Mensagem">
        <textarea
          required
          placeholder="Conta mais sobre o projeto…"
          className="contact-field"
          style={{
            ...inputStyle('mensagem'),
            height: '110px',
            resize: 'none',
          }}
          onFocus={() => setFocused('mensagem')}
          onBlur={() => setFocused(null)}
        />
      </Field>

      <div>
        <Button variant="primary" type="submit">
          Enviar mensagem
        </Button>
      </div>
    </form>
  );
}
