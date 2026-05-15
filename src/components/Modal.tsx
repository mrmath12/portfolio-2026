'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/data/projects';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';

type ModalProps = {
  projectId: number | null;
  onClose: () => void;
};

export default function Modal({ projectId, onClose }: ModalProps) {
  const [closeHovered, setCloseHovered] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const lastProjectId = useRef<number | null>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (projectId !== null) {
      lastProjectId.current = projectId;
      setIsExiting(false);
      setLightboxOpen(false);
    }
  }, [projectId]);

  useEffect(() => {
    if (lightboxOpen) lightboxCloseRef.current?.focus();
  }, [lightboxOpen]);

  useEffect(() => {
    if (projectId !== null) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [projectId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (lightboxOpen) {
        setLightboxOpen(false);
      } else {
        setIsExiting(true);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const activeProjectId = isExiting ? lastProjectId.current : projectId;
  if (activeProjectId === null) return null;
  const project = PROJECTS.find(p => p.id === activeProjectId);
  if (!project) return null;

  return (
    <>
      {/* Lightbox */}
      {lightboxOpen && project.image && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} — tela cheia`}
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 600,
            background: 'rgba(6,10,8,0.97)',
            animation: 'lightboxIn 180ms cubic-bezier(0.16,1,0.3,1) forwards',
            cursor: 'zoom-out',
          }}
        >
          {/* Image area — click doesn't bubble to backdrop */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              inset: '60px',
              cursor: 'default',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'contain' }}
                sizes="100vw"
              />
            </div>
          </div>

          {/* Close button */}
          <button
            ref={lightboxCloseRef}
            onClick={() => setLightboxOpen(false)}
            style={{
              position: 'absolute',
              top: '16px',
              right: '20px',
              background: 'rgba(27,46,38,0.85)',
              border: '1px solid var(--border)',
              borderRadius: '9999px',
              color: 'var(--muted)',
              fontFamily: 'inherit',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              padding: '6px 16px',
              backdropFilter: 'blur(8px)',
              transition: 'border-color 150ms ease, color 150ms ease',
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--brand)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--brand)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)';
              (e.currentTarget as HTMLButtonElement).style.color = 'var(--muted)';
            }}
          >
            Fechar
          </button>
        </div>
      )}

      {/* Modal backdrop */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => { if (e.target === e.currentTarget) setIsExiting(true); }}
        onAnimationEnd={(e) => {
          if (isExiting && e.animationName === 'modalBackdropOut') {
            setIsExiting(false);
            onClose();
          }
        }}
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
          animation: isExiting
            ? 'modalBackdropOut 220ms cubic-bezier(0.16,1,0.3,1) forwards'
            : 'modalBackdropIn 280ms cubic-bezier(0.16,1,0.3,1) forwards',
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
            maxWidth: '920px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '40px 48px',
            willChange: 'transform, opacity',
            animation: isExiting
              ? 'modalBoxOut 170ms cubic-bezier(0.16,1,0.3,1) forwards'
              : 'modalBoxIn 360ms cubic-bezier(0.16,1,0.3,1) forwards',
          }}
        >
          {/* Close */}
          <button
            onClick={() => setIsExiting(true)}
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
            Fechar
          </button>

          {/* Category */}
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

          {/* Title */}
          <h2
            style={{
              clear: 'both',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              marginBottom: '24px',
            }}
          >
            {project.title}
          </h2>

          {/* Image */}
          <div
            className="modal-img-wrap"
            onClick={() => project.image && setLightboxOpen(true)}
            style={{
              borderRadius: '10px',
              border: '1px solid var(--border)',
              marginBottom: '28px',
              aspectRatio: '16/9',
              background: 'var(--bg3)',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: project.image ? 'zoom-in' : 'default',
              transition: 'border-color 200ms ease',
            }}
            onMouseEnter={(e) => {
              if (project.image) (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--brand)';
            }}
            onMouseLeave={(e) => {
              if (project.image) (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
            }}
          >
            {project.image ? (
              <>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 920px) 100vw, 920px"
                />
                <span
                  className="zoom-hint"
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(10,18,14,0.75)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '11px',
                    letterSpacing: '0.02em',
                    color: 'var(--muted)',
                    pointerEvents: 'none',
                  }}
                >
                  clique para ampliar
                </span>
              </>
            ) : (
              <span style={{ fontSize: '80px', opacity: 0.15 }}>
                {project.icon ?? '◻'}
              </span>
            )}
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '15px',
              color: 'var(--muted)',
              lineHeight: 1.75,
              marginBottom: '24px',
              whiteSpace: 'pre-line',
              maxWidth: '65ch',
            }}
          >
            {project.desc}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
            {project.tags.map((tag, i) => (
              <Tag key={tag} variant={i === 0 ? 'brand' : 'default'}>
                {tag}
              </Tag>
            ))}
          </div>

          {/* CTA */}
          {project.url ? (
            <Button variant="primary" href={project.url} target="_blank">
              Acessar projeto →
            </Button>
          ) : (
            <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500 }}>Em breve</span>
          )}
        </div>
      </div>
    </>
  );
}
