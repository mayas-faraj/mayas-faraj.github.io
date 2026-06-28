export const en = {
  lang: 'en' as 'en' | 'ar',
  dir: 'ltr' as 'ltr' | 'rtl',
  switchLang: 'العربية',

  nav: {
    about: 'About',
    portfolio: 'Portfolio',
    achievements: 'Achievements',
    certificates: 'Certificates',
    skills: 'Skills',
    contact: 'Contact',
  },

  hero: {
    prompt: '> identify user',
    greeting: 'Hello, I am',
    name: 'Mayas Faraj',
    altName: 'مياس فرج',
    title: 'Senior Software Engineer',
    separator: '&',
    title2: 'Cyber Security Officer',
    subtitle:
      'Architecting resilient microservice platforms and securing critical digital infrastructure — across government ministries and commercial enterprises.',
    viewWork: 'View My Work',
    contact: 'Get In Touch',
  },

  about: {
    sectionLabel: 'ABOUT',
    title: 'About Me',
    subtitle: 'Engineer, educator, and builder of resilient systems',
    bio1:
      'I am a Senior Software Engineer and Cyber Security Officer with a background in Communications and Electronics Engineering. With over a decade of hands-on experience, I design and implement scalable microservice architectures, federated GraphQL platforms, and secure infrastructure for government bodies and commercial enterprises.',
    bio2:
      'My work spans backend systems, DevOps, cybersecurity, and hardware/IoT protocols — from self-hosted Linux infrastructure to low-level serial communication via MODBUS RTU. I am equally committed to knowledge transfer, having delivered cybersecurity and programming courses to both technical and non-technical audiences.',
    emailLabel: 'Email',
    emailValue: 'mayas.creativework@protonmail.com',
    telegramLabel: 'Telegram',
    telegramValue: '@uniqueprogrammer',
    locationLabel: 'Location',
    locationValue: 'Syria',
    orgLabel: 'Organization',
    orgValue: 'Eurikatech',
    copySuccess: 'Copied!',
  },

  portfolio: {
    sectionLabel: 'PORTFOLIO',
    title: 'Portfolio',
    subtitle: 'Selected systems and projects — content will be added here',
    comingSoon: 'Projects coming soon',
    viewProject: 'View Project',
    viewCode: 'Source Code',
    placeholder: [
      { title: 'Project One', description: 'Description coming soon.', tags: ['Tag A', 'Tag B'] },
      { title: 'Project Two', description: 'Description coming soon.', tags: ['Tag C', 'Tag D'] },
      { title: 'Project Three', description: 'Description coming soon.', tags: ['Tag E', 'Tag F'] },
    ],
  },

  achievements: {
    sectionLabel: 'ACHIEVEMENTS',
    title: 'Achievements',
    subtitle: 'Key projects and contributions spanning engineering, security, and education',
    items: [
      {
        id: 'pump-firmware',
        icon: '⚙️',
        category: 'Industrial / IoT',
        title: 'Pump Firmware & Station Management',
        description:
          'Designed and built a fuel pump definition and station management system after the original German vendor refused to reprogram the hardware. The system reads data from liquid-level sensors and compares it against pump flow measurements to verify operational transparency. All hardware communication uses the MODBUS RTU serial protocol.',
        tags: ['MODBUS RTU', 'IoT', 'Industrial', 'Firmware', 'Serial Protocol'],
      },
      {
        id: 'emergency-report',
        icon: '🚨',
        category: 'High-Throughput Systems',
        title: 'Emergency Report System',
        description:
          'Built an emergency reporting platform with multi-format data output including geographic coordinate mapping. To support high data throughput, the Lambda architecture was adopted alongside the open-source XMPP protocol (used by WhatsApp) and HBase — the highly scalable distributed database previously used by Google.',
        tags: ['Lambda Architecture', 'XMPP', 'HBase', 'Geo Mapping', 'High Throughput'],
      },
      {
        id: 'odoo-platform',
        icon: '🏗️',
        category: 'Microservices / SaaS',
        title: 'Odoo-like Platform Core',
        description:
          'Developing a high-throughput, OAuth2-secured enterprise platform modeled after Odoo. The system is built from loosely-coupled microservices coordinated via a gateway layer, using the latest evaluated technologies. The platform targets enterprise-grade scalability, multi-tenant isolation, and robust security across commercial deployments.',
        tags: ['Microservices', 'OAuth2', 'NestJS', 'GraphQL', 'Multi-tenant', 'API Gateway'],
      },
      {
        id: 'cyber-security-course',
        icon: '🔐',
        category: 'Education / Cybersecurity',
        title: 'Cyber Security Courses',
        description:
          'Delivered two cybersecurity courses — one at a general awareness level and one at a specialized practitioner level. Topics include information security principles, network fundamentals, operating system security, and hands-on penetration testing using Kali Linux. Both general and technical audiences were covered.',
        tags: ['Kali Linux', 'Penetration Testing', 'Network Security', 'InfoSec', 'Training'],
      },
      {
        id: 'programming-course',
        icon: '💻',
        category: 'Education / Programming',
        title: 'Programming Fundamentals Course',
        description:
          'Delivered an introductory C# programming course targeting non-IT specialists, focused on developing Windows desktop applications. The curriculum was deliberately accessible, with a practical application-first approach designed for learners without a prior technical background.',
        tags: ['C#', '.NET', 'Windows', 'Desktop Apps', 'Beginner Level'],
      },
      {
        id: 'microservices-course',
        icon: '🧩',
        category: 'Education / Architecture',
        title: 'Microservices Architecture Course',
        description:
          'Developed and delivered a comprehensive theoretical and practical curriculum on microservices. Content covers the leading architectural patterns, trade-off analysis, construction approaches, and a fully working reference implementation demonstrating real-world service interconnection.',
        tags: ['Microservices', 'Architecture', 'Docker', 'API Gateway', 'Event-Driven'],
      },
      {
        id: 'software-structures',
        icon: '📐',
        category: 'Education / Architecture',
        title: 'Software Architecture Patterns',
        description:
          'Delivered a detailed exploration of the most prevalent software structures — Monolith, MVC, and Clean Architecture — with practical implementation exercises for each pattern. Designed to build lasting architectural decision-making skills applicable across project types and scales.',
        tags: ['Clean Architecture', 'MVC', 'Monolith', 'Design Patterns', 'Best Practices'],
      },
    ],
  },

  certificates: {
    sectionLabel: 'CERTIFICATES',
    title: 'Certificates',
    subtitle: 'Professional certifications and completed training programs',
    comingSoon: 'Certificate gallery coming soon.',
    placeholder: [
      { title: 'Certificate One', issuer: 'Issuer Name', date: '2024' },
      { title: 'Certificate Two', issuer: 'Issuer Name', date: '2024' },
      { title: 'Certificate Three', issuer: 'Issuer Name', date: '2024' },
      { title: 'Certificate Four', issuer: 'Issuer Name', date: '2024' },
    ],
  },

  skills: {
    sectionLabel: 'SKILLS',
    title: 'Skills & Technologies',
    subtitle: 'Technologies and domains I work with at a professional level',
    categories: [
      {
        name: 'Backend & APIs',
        items: ['NestJS', 'GraphQL', 'Pothos', 'Apollo', 'Yoga', 'Prisma', 'REST', 'Node.js'],
      },
      {
        name: 'Infrastructure & DevOps',
        items: ['Docker', 'Linux (Ubuntu)', 'Nginx', 'GitHub Actions', 'Nx Monorepo', 'pnpm', 'Self-hosted'],
      },
      {
        name: 'Cyber Security',
        items: ['Kali Linux', 'Penetration Testing', 'OWASP', 'Network Security', 'OAuth2 / OIDC', 'Zero Trust'],
      },
      {
        name: 'Databases & Storage',
        items: ['PostgreSQL', 'Redis', 'HBase', 'MinIO', 'pgvector', 'BullMQ'],
      },
      {
        name: 'Protocols & IoT',
        items: ['MODBUS RTU', 'XMPP', 'MQTT', 'Serial Communication'],
      },
      {
        name: 'Frontend',
        items: ['React', 'Next.js', 'React Admin', 'TypeScript', 'RTL / i18n'],
      },
    ],
  },

  contact: {
    sectionLabel: 'CONTACT',
    title: 'Get In Touch',
    subtitle: 'Open to technical collaboration, consulting engagements, and professional discussion',
    emailLabel: 'Email',
    emailValue: 'mayas.creativework@protonmail.com',
    telegramLabel: 'Telegram',
    telegramValue: '@uniqueprogrammer',
    githubLabel: 'GitHub',
    githubValue: 'github.com/mayas-faraj',
    linkedinLabel: 'LinkedIn',
    linkedinValue: 'linkedin.com/in/mayas-faraj',
    formTitle: 'Send a Message',
    formName: 'Your Name',
    formEmail: 'Your Email',
    formMessage: 'Your Message',
    formSend: 'Send Message',
    formNote: 'Note: contact directly via email or Telegram for the fastest response.',
  },

  footer: {
    rights: '© 2024 Mayas Faraj. All rights reserved.',
    builtWith: 'Built with Next.js · Deployed on GitHub Pages',
    backToTop: 'Back to top ↑',
  },
};

export type Translations = typeof en;