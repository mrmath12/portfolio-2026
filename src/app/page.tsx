'use client';

import { useState } from 'react';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import SectionDivider from '@/components/layout/SectionDivider';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';

export default function Home() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(id);
    console.log('Project clicked:', id);
  };

  return (
    <>
      <Nav />
      <section id="hero">
        <Hero />
      </section>
      <div id="marquee-placeholder" /> {/* Marquee – implemented in prompt 11 */}
      <SectionDivider id="div1" />
      <section id="projetos" style={{ padding: '100px 40px' }}>
        <Projects onProjectClick={handleProjectClick} />
      </section>
      <SectionDivider id="div2" />
      <section id="skills" style={{ minHeight: 400, padding: '100px 40px' }} />
      <SectionDivider id="div3" />
      <section id="sobre" style={{ minHeight: 400, padding: '100px 40px' }} />
      <SectionDivider id="div4" />
      <section id="contato" style={{ minHeight: 400, padding: '100px 40px' }} />
      <Footer />
    </>
  );
}
