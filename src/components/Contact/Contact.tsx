'use client';

import { useLang } from '@/context/LanguageContext';
import styles from './Contact.module.css';

const contactLinks = (t: ReturnType<typeof useLang>['t']) => [
  {
    label: t.contact.emailLabel,
    value: t.contact.emailValue,
    href: `mailto:${t.contact.emailValue}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: t.contact.telegramLabel,
    value: t.contact.telegramValue,
    href: 'https://t.me/uniqueprogrammer',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.248 13.801l-2.95-.924c-.642-.2-.654-.642.136-.953l11.525-4.445c.535-.194 1.002.131.603.769z"/>
      </svg>
    ),
  },
  {
    label: t.contact.githubLabel,
    value: t.contact.githubValue,
    href: 'https://github.com/mayas-faraj',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    label: t.contact.linkedinLabel,
    value: t.contact.linkedinValue,
    href: 'https://www.linkedin.com/in/mayas-faraj',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const { t } = useLang();
  const links = contactLinks(t);

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.contact.sectionLabel}</span>
          <h2 className="section-title" id="contact-heading">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {/* Contact info */}
          <div className={styles.info}>
            {links.map(({ label, value, href, icon }) => (
              <a key={label} href={href} className={styles.infoItem} target="_blank" rel="noopener noreferrer">
                <span className={styles.infoIcon}>{icon}</span>
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>{label}</span>
                  <span className={styles.infoValue}>{value}</span>
                </div>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </a>
            ))}
          </div>

          {/* Form (display only) */}
          <div className={styles.formWrap}>
            <h3 className={styles.formTitle}>{t.contact.formTitle}</h3>

            <div className={styles.field}>
              <label className={styles.label}>{t.contact.formName}</label>
              <div className={styles.input} aria-hidden="true" />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>{t.contact.formEmail}</label>
              <div className={styles.input} aria-hidden="true" />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>{t.contact.formMessage}</label>
              <div className={`${styles.input} ${styles.textarea}`} aria-hidden="true" />
            </div>

            <button className={`btn-primary ${styles.sendBtn}`} disabled aria-disabled="true">
              {t.contact.formSend}
            </button>

            <p className={styles.note}>{t.contact.formNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
