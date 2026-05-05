'use client';

import Image from 'next/image';
import AboutStudio from './AboutStudio';

export default function About() {
  return (
    <section id="sobre" style={{ padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
      <Image
        src="/photo-04.jpg"
        alt=""
        fill
        style={{ objectFit: 'cover', objectPosition: 'top center', opacity: 0.2 }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, var(--bg1) 0%, transparent 25%, transparent 75%, var(--bg1) 100%)',
        }}
      />
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <AboutStudio />
      </div>
    </section>
  );
}
