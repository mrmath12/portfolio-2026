'use client';

import { useState } from 'react';
import { useLayout } from '@/context/LayoutContext';
import useScrollReveal from '@/hooks/useScrollReveal';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import SectionDivider from '@/components/layout/SectionDivider';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Modal from '@/components/Modal';
import Marquee from '@/components/Marquee';

export default function Home() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const { layout, activeFilter } = useLayout();
  useScrollReveal([layout, activeFilter]);

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(id);
  };

  return (
    <>
      <Nav />
      <section id="hero">
        <Hero />
      </section>
      {layout === 'v-studio' && (
        <div
          style={{
            borderTop: '1px solid var(--border-soft)',
            borderBottom: '1px solid var(--border-soft)',
            background: 'var(--bg2)',
            padding: '18px 0',
          }}
        >
          <Marquee />
        </div>
      )}
      <SectionDivider id="div1" />
      <section id="projetos" style={{ padding: '100px 40px' }}>
        <Projects onProjectClick={handleProjectClick} />
      </section>
      <SectionDivider id="div2" />
      <section id="skills" style={{ padding: '100px 40px' }}>
        <Skills />
      </section>
      <SectionDivider id="div3" />
      <About />
      <SectionDivider id="div4" />
      <section id="contato">
        <Contact />
      </section>
      <Footer />
      <Modal projectId={selectedProjectId} onClose={() => setSelectedProjectId(null)} />
    </>
  );
}
