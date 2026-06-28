'use client';

import { useLang } from '@/context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLang();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.brandAccent}>&gt;</span>
          <span> Mayas Faraj</span>
          <span className={styles.brandAccent}>_</span>
        </div>

        <p className={styles.built}>{t.footer.builtWith}</p>

        <p className={styles.rights}>{t.footer.rights}</p>

        <button className={styles.backTop} onClick={scrollTop} aria-label="Back to top">
          {t.footer.backToTop}
        </button>
      </div>
    </footer>
  );
}
