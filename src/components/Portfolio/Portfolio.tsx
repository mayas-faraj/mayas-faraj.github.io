'use client';

import { useLang } from '@/context/LanguageContext';
import styles from './Portfolio.module.css';

export default function Portfolio() {
  const { t } = useLang();

  return (
    <section id="portfolio" className="section" aria-labelledby="portfolio-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.portfolio.sectionLabel}</span>
          <h2 className="section-title" id="portfolio-heading">{t.portfolio.title}</h2>
          <p className="section-subtitle">{t.portfolio.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.portfolio.placeholder.map((item, i) => (
            <article key={i} className={styles.card} aria-label={item.title}>
              {/* Placeholder image area */}
              <div className={styles.thumbnail} aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <span className={styles.comingSoon}>{t.portfolio.comingSoon}</span>
              </div>

              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>

                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  <span className={styles.linkPlaceholder}>{t.portfolio.viewProject}</span>
                  <span className={styles.linkPlaceholder}>{t.portfolio.viewCode}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
