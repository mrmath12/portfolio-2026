'use client';

import { useState } from 'react';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import SectionDivider from '@/components/layout/SectionDivider';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

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
    </>
  );
}
