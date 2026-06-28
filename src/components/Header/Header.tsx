'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLang } from '@/context/LanguageContext';
import styles from './Header.module.css';

const NAV_KEYS = ['about', 'portfolio', 'achievements', 'certificates', 'skills', 'contact'] as const;

export default function Header() {
  const { t, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_KEYS.map((k) => document.getElementById(k)).filter(Boolean) as HTMLElement[];
      let current = '';
      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - 100) current = section.id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          <span className={styles.logoBracket}>&gt;</span>
          <span className={styles.logoName}>Mayas Faraj</span>
          <span className={styles.logoCursor}>_</span>
        </button>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_KEYS.map((key) => (
            <button
              key={key}
              className={`${styles.navLink} ${activeSection === key ? styles.active : ''}`}
              onClick={() => scrollTo(key)}
            >
              {t.nav[key]}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <button className={styles.langToggle} onClick={toggleLang} aria-label="Switch language">
            {t.switchLang}
          </button>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {NAV_KEYS.map((key) => (
            <button
              key={key}
              className={`${styles.mobileLink} ${activeSection === key ? styles.active : ''}`}
              onClick={() => scrollTo(key)}
            >
              {t.nav[key]}
            </button>
          ))}
          <button className={styles.mobileLang} onClick={() => { toggleLang(); setMenuOpen(false); }}>
            {t.switchLang}
          </button>
        </nav>
      )}
    </header>
  );
}
