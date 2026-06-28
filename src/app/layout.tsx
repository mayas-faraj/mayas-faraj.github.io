import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mayas-faraj.github.io'),
  title: {
    default: 'Mayas Faraj | مياس فرج — Senior Software Engineer & Cyber Security Officer',
    template: '%s | Mayas Faraj',
  },
  description:
    'Portfolio of Mayas Faraj (مياس فرج) — Senior Software Engineer and Cyber Security Officer. Expert in NestJS, GraphQL, microservices, DevOps, and cybersecurity. Based in Syria, working with the Eurikatech.',
  keywords: [
    'Mayas Faraj',
    'مياس فرج',
    'Senior Software Engineer',
    'Cyber Security Officer',
    'مهندس برمجيات',
    'NestJS',
    'GraphQL',
    'Microservices',
    'DevOps',
    'Kali Linux',
    'Ministry of Information Syria',
    'eurikatech',
  ],
  authors: [{ name: 'Mayas Faraj', url: 'https://mayas-faraj.github.io' }],
  creator: 'Mayas Faraj',
  openGraph: {
    type: 'website',
    url: 'https://mayas-faraj.github.io',
    title: 'Mayas Faraj | Senior Software Engineer & Cyber Security Officer',
    description:
      'Portfolio of Mayas Faraj — Senior Software Engineer and Cyber Security Officer specializing in microservices, GraphQL, NestJS, and cybersecurity.',
    siteName: 'Mayas Faraj Portfolio',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayas Faraj | Senior Software Engineer & Cyber Security Officer',
    description:
      'Portfolio of Mayas Faraj — microservices architect, GraphQL engineer, and Cyber Security Officer.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://mayas-faraj.github.io',
    languages: {
      en: 'https://mayas-faraj.github.io',
      ar: 'https://mayas-faraj.github.io',
    },
  },
};

/* ─── Structured Data (JSON-LD) ─────────────────────────────── */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mayas Faraj',
    alternateName: 'مياس فرج',
    jobTitle: ['Senior Software Engineer', 'Cyber Security Officer'],
    worksFor: {
      '@type': 'GovernmentOrganization',
      name: 'Ministry of Information',
    },
    url: 'https://mayas-faraj.github.io',
    email: 'mayas.creativework@protonmail.com',
    knowsAbout: [
      'NestJS',
      'GraphQL',
      'Microservices Architecture',
      'Cyber Security',
      'Penetration Testing',
      'DevOps',
      'PostgreSQL',
      'Docker',
      'Linux',
      'MODBUS RTU',
    ],
    knowsLanguage: ['en', 'ar'],
    sameAs: [
      'https://github.com/mayas-faraj',
      'https://www.linkedin.com/in/mayas-faraj',
      'https://www.facebook.com/lord.kievanrus',
      'https://coursera.org/share/2be63053670f438bd1ad688a96fbf9de',
      'https://eurikatech.com',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Mayas Faraj Portfolio',
    url: 'https://mayas-faraj.github.io',
    description:
      'Professional portfolio of Mayas Faraj, Senior Software Engineer and Cyber Security Officer.',
    inLanguage: ['en', 'ar'],
    author: {
      '@type': 'Person',
      name: 'Mayas Faraj',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Mayas Faraj — Senior Software Engineer Portfolio',
    url: 'https://mayas-faraj.github.io',
    mainEntity: {
      '@type': 'Person',
      name: 'Mayas Faraj',
    },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4b7cf7" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://mayas-faraj.github.io" />
        <link rel="alternate" hrefLang="en" href="https://mayas-faraj.github.io" />
        <link rel="alternate" hrefLang="ar" href="https://mayas-faraj.github.io" />
        <link rel="alternate" hrefLang="x-default" href="https://mayas-faraj.github.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
