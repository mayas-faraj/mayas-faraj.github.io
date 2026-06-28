'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Portfolio from '@/components/Portfolio/Portfolio';
import Achievements from '@/components/Achievements/Achievements';
import Certificates from '@/components/Certificates/Certificates';
import Skills from '@/components/Skills/Skills';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Page() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
