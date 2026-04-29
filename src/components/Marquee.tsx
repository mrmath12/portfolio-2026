'use client';

import { useRef } from 'react';
import { MARQUEE_ITEMS } from '@/data/content';

const doubledItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{ overflow: 'hidden' }}>
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marqueeScroll 28s linear infinite',
        }}
        onMouseEnter={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = 'paused';
        }}
        onMouseLeave={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = 'running';
        }}
      >
        {doubledItems.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '0 20px',
              whiteSpace: 'nowrap',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: 'var(--brand)',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
