'use client';

import { useState } from 'react';
import { useLang } from '@/context/LanguageContext';
import styles from './About.module.css';

export default function About() {
  const { t } = useLang();
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section id="about" className={`section section-alt`} aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.about.sectionLabel}</span>
          <h2 className="section-title" id="about-heading">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {/* Bio */}
          <div className={styles.bio}>
            <p className={styles.bioPara}>{t.about.bio1}</p>
            <p className={styles.bioPara}>{t.about.bio2}</p>
          </div>

          {/* Info card */}
          <aside className={styles.card} aria-label="Contact details">
            {[
              {
                key: 'email',
                label: t.about.emailLabel,
                value: t.about.emailValue,
                href: `mailto:${t.about.emailValue}`,
                copyable: true,
              },
              {
                key: 'telegram',
                label: t.about.telegramLabel,
                value: t.about.telegramValue,
                href: 'https://t.me/uniqueprogrammer',
                copyable: false,
              },
              {
                key: 'location',
                label: t.about.locationLabel,
                value: t.about.locationValue,
                href: null,
                copyable: false,
              },
              {
                key: 'org',
                label: t.about.orgLabel,
                value: t.about.orgValue,
                href: null,
                copyable: false,
              },
            ].map(({ key, label, value, href, copyable }) => (
              <div key={key} className={styles.infoRow}>
                <span className={styles.infoLabel}>{label}</span>
                <div className={styles.infoValue}>
                  {href ? (
                    <a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer">
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                  {copyable && (
                    <button
                      className={styles.copyBtn}
                      onClick={() => copyToClipboard(value, key)}
                      aria-label={`Copy ${label}`}
                    >
                      {copied === key ? (
                        <span className={styles.copied}>{t.about.copySuccess}</span>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                        </svg>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
