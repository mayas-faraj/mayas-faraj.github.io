'use client';

import { useLang } from '@/context/LanguageContext';
import styles from './Skills.module.css';

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.skills.sectionLabel}</span>
          <h2 className="section-title" id="skills-heading">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.skills.categories.map((cat) => (
            <div key={cat.name} className={styles.group}>
              <h3 className={styles.groupName}>{cat.name}</h3>
              <div className={styles.pills}>
                {cat.items.map((item) => (
                  <span key={item} className={styles.pill}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
