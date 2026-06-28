'use client';

import { useLang } from '@/context/LanguageContext';
import styles from './Certificates.module.css';

export default function Certificates() {
  const { t } = useLang();

  return (
    <section id="certificates" className="section" aria-labelledby="certificates-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.certificates.sectionLabel}</span>
          <h2 className="section-title" id="certificates-heading">{t.certificates.title}</h2>
          <p className="section-subtitle">{t.certificates.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.certificates.placeholder.map((cert, i) => (
            <article key={i} className={styles.card} aria-label={cert.title}>
              {/* Badge area */}
              <div className={styles.badge} aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>

              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{cert.title}</h3>
                <p className={styles.cardIssuer}>{cert.issuer}</p>
                <span className={styles.cardDate}>{cert.date}</span>
              </div>

              <div className={styles.placeholder}>
                <span>—</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
