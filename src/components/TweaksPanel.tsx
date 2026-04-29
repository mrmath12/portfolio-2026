'use client';

import { useState } from 'react';
import { useLayout } from '@/context/LayoutContext';
import { PROJECTS } from '@/data/projects';
import type { LayoutVariant, FocusMode } from '@/types';

const FEATURED_IDS = [1, 3, 4];
const FEATURED_PROJECTS = PROJECTS.filter(p => FEATURED_IDS.includes(p.id));

const LAYOUT_OPTIONS: { label: string; value: LayoutVariant }[] = [
  { label: 'Editorial', value: 'v-editorial' },
  { label: 'Studio',    value: 'v-studio'    },
  { label: 'Minimal',   value: 'v-minimal'   },
];

const FOCUS_OPTIONS: { label: string; value: FocusMode }[] = [
  { label: 'Dev em foco',      value: 'dev'      },
  { label: 'Multi-disciplinar', value: 'creative' },
];

const btnBase: React.CSSProperties = {
  padding: '8px 12px',
  borderRadius: 7,
  border: '1px solid',
  fontFamily: 'inherit',
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'all 150ms ease',
  background: 'transparent',
  width: '100%',
};

const btnActive: React.CSSProperties = {
  ...btnBase,
  background: 'rgba(117,176,156,0.1)',
  borderColor: 'var(--brand)',
  color: 'var(--brand)',
};

const btnInactive: React.CSSProperties = {
  ...btnBase,
  borderColor: 'var(--border)',
  color: 'var(--muted)',
};

const sectionLabel: React.CSSProperties = {
  fontSize: 9,
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#4a6a5c',
  marginBottom: 8,
};

export default function TweaksPanel() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const {
    layout, focus, revealEnabled, featuredIdOverride,
    setLayout, setFocus, setRevealEnabled, setFeaturedIdOverride,
  } = useLayout();

  const handleToggleReveal = () => {
    const next = !revealEnabled;
    setRevealEnabled(next);
    if (!next) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsPanelOpen(v => !v)}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
          background: 'var(--bg3)',
          border: '1px solid var(--border)',
          borderRadius: 9999,
          color: 'var(--muted)',
          fontFamily: 'inherit',
          fontSize: 12,
          fontWeight: 600,
          cursor: 'pointer',
          padding: '6px 14px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        Tweaks
      </button>

      {/* Panel */}
      {isPanelOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 64,
            right: 24,
            zIndex: 9998,
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            padding: '20px 22px',
            width: 270,
            boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: 16,
            }}
          >
            TWEAKS
          </div>

          {/* Layout */}
          <div style={{ marginBottom: 16 }}>
            <div style={sectionLabel}>Layout</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {LAYOUT_OPTIONS.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setLayout(value)}
                  style={layout === value ? btnActive : btnInactive}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Animações */}
          <div style={{ marginBottom: 16 }}>
            <div style={sectionLabel}>Animações</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>Scroll reveal</span>
              <button
                onClick={handleToggleReveal}
                style={{
                  width: 34,
                  height: 18,
                  borderRadius: 9999,
                  position: 'relative',
                  background: revealEnabled ? 'rgba(117,176,156,0.3)' : 'var(--border)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'background 150ms ease',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: 3,
                    left: 3,
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: revealEnabled ? 'var(--brand)' : 'var(--muted)',
                    transform: revealEnabled ? 'translateX(16px)' : 'translateX(0)',
                    transition: 'transform 150ms ease, background 150ms ease',
                    display: 'block',
                  }}
                />
              </button>
            </div>
          </div>

          {/* Pills do Hero */}
          <div style={{ marginBottom: layout === 'v-studio' ? 16 : 0 }}>
            <div style={sectionLabel}>Pills do Hero</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {FOCUS_OPTIONS.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setFocus(value)}
                  style={focus === value ? btnActive : btnInactive}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Projeto em Destaque — só no Studio */}
          {layout === 'v-studio' && (
            <div>
              <div style={sectionLabel}>Projeto em Destaque</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {FEATURED_PROJECTS.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setFeaturedIdOverride(project.id)}
                    style={featuredIdOverride === project.id ? btnActive : btnInactive}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
