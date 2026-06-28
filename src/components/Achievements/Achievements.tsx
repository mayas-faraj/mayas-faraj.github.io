'use client';

import { useLang } from '@/context/LanguageContext';
import styles from './Achievements.module.css';

export default function Achievements() {
  const { t } = useLang();

  return (
    <section id="achievements" className="section section-alt" aria-labelledby="achievements-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.achievements.sectionLabel}</span>
          <h2 className="section-title" id="achievements-heading">{t.achievements.title}</h2>
          <p className="section-subtitle">{t.achievements.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.achievements.items.map((item) => (
            <article key={item.id} className={styles.card} id={`achievement-${item.id}`}>
              <header className={styles.cardHeader}>
                <span className={styles.icon} aria-hidden="true">{item.icon}</span>
                <span className={styles.category}>{item.category}</span>
              </header>

              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>

              <footer className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
