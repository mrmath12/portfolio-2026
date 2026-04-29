'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';
import Tag from '@/components/ui/Tag';

type ModalProps = {
  projectId: number | null;
  onClose: () => void;
};

export default function Modal({ projectId, onClose }: ModalProps) {
  const [closeHovered, setCloseHovered] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (projectId === null) return null;
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 500,
        background: 'rgba(10,18,14,0.92)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg2)',
          border: '1px solid var(--border)',
          borderRadius: '18px',
          width: '100%',
          maxWidth: '740px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '40px',
        }}
      >
        {/* 1. Close button */}
        <button
          onClick={onClose}
          onMouseEnter={() => setCloseHovered(true)}
          onMouseLeave={() => setCloseHovered(false)}
          style={{
            float: 'right',
            background: 'var(--bg3)',
            border: `1px solid ${closeHovered ? 'var(--brand)' : 'var(--border)'}`,
            borderRadius: '9999px',
            color: closeHovered ? 'var(--brand)' : 'var(--muted)',
            fontFamily: 'inherit',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '6px 16px',
            transition: 'border-color 150ms ease, color 150ms ease',
          }}
        >
          Fechar ×
        </button>

        {/* 2. Category */}
        <div
          style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--brand)',
            marginBottom: '10px',
          }}
        >
          {project.cat}
        </div>

        {/* 3. Title */}
        <h2
          style={{
            clear: 'both',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            marginBottom: '16px',
          }}
        >
          {project.title}
        </h2>

        {/* 4. Image / placeholder */}
        <div
          style={{
            borderRadius: '10px',
            border: '1px solid var(--border)',
            marginBottom: '24px',
            aspectRatio: '16/9',
            background: 'var(--bg3)',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <span style={{ fontSize: '80px', opacity: 0.15 }}>
              {project.icon ?? '◻'}
            </span>
          )}
        </div>

        {/* 5. Description */}
        <p
          style={{
            fontSize: '15px',
            color: 'var(--muted)',
            lineHeight: 1.7,
            marginBottom: '20px',
            whiteSpace: 'pre-line',
          }}
        >
          {project.desc}{'\n\n'}Este projeto demonstra minha capacidade de trabalhar em múltiplas disciplinas — tecnologia, design e expressão criativa — com o mesmo nível de comprometimento e atenção ao detalhe.
        </p>

        {/* 6. Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.tags.map((tag, i) => (
            <Tag key={tag} variant={i === 0 ? 'brand' : 'default'}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
