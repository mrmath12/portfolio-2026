import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import SectionDivider from '@/components/layout/SectionDivider';

export default function Home() {
  return (
    <>
      <Nav />
      <section id="hero" style={{ minHeight: '100vh' }} />
      <div id="marquee-placeholder" /> {/* Marquee – implemented in prompt 11 */}
      <SectionDivider id="div1" />
      <section id="projetos" style={{ minHeight: 400, padding: '100px 40px' }} />
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
