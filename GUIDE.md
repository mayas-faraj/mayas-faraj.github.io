# Portfolio Deployment & Content Guide

## Stack
- **Framework**: Next.js 14 (App Router, static export)
- **Styling**: CSS Modules
- **Language**: TypeScript
- **Deployment**: GitHub Pages via GitHub Actions
- **Languages**: English + Arabic (RTL auto-switch)

---

## 1. First-time setup (local)

```bash
# Clone or initialize the repo
git clone https://github.com/mayas-faraj/mayas-faraj.github.io.git
cd mayas-faraj.github.io

# Copy all project files here
# Then install dependencies
npm install

# Run locally
npm run dev
# Visit http://localhost:3000
```

---

## 2. Create the GitHub repository

1. Go to https://github.com/new
2. **Repository name must be exactly**: `mayas-faraj.github.io`
3. Set visibility: **Public**
4. Do NOT initialize with README (you already have files)
5. Click **Create repository**

---

## 3. Push code to GitHub

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/mayas-faraj/mayas-faraj.github.io.git
git push -u origin main
```

---

## 4. Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

The workflow in `.github/workflows/deploy.yml` will auto-run on every push to `main`.

**Live URL**: https://mayas-faraj.github.io  
**First deploy takes ~2 min**. Subsequent deploys: ~1 min.

---

## 5. Verify deployment

After the first push:
- Go to **Actions** tab in your repo
- Watch the `Deploy Portfolio to GitHub Pages` workflow
- Green checkmark = live

---

## 6. How to add your photo

Replace the placeholder circle in the Hero section:

1. Add your photo to `/public/photo.jpg` (recommended: 400×400px, square)
2. Open `src/components/Hero/Hero.tsx`
3. Replace the `<div className={styles.photoPlaceholder}>` block with:

```tsx
import Image from 'next/image';

// In the JSX:
<div className={styles.photoWrap}>
  <Image
    src="/photo.jpg"
    alt="Mayas Faraj"
    width={240}
    height={240}
    className={styles.photo}
    priority
  />
  <div className={styles.photoRing} />
</div>
```

4. In `Hero.module.css`, add:

```css
.photo {
  border-radius: 50%;
  border: 2px solid var(--border-accent);
  object-fit: cover;
}
```

---

## 7. How to add portfolio projects

Open `src/i18n/en.ts` and `src/i18n/ar.ts`.

Replace placeholder items in `portfolio.placeholder`:

```ts
portfolio: {
  placeholder: [
    {
      title: 'Microservice Platform',
      description: 'A federated GraphQL platform with NestJS, Pothos, and Cosmo Router.',
      tags: ['NestJS', 'GraphQL', 'Docker', 'PostgreSQL'],
      link: 'https://github.com/mayas-faraj/...',
    },
    // ...
  ],
},
```

To add a **live link** and **source link**, open `src/components/Portfolio/Portfolio.tsx` and replace:

```tsx
<div className={styles.links}>
  <span className={styles.linkPlaceholder}>{t.portfolio.viewProject}</span>
```

with:

```tsx
<div className={styles.links}>
  {item.link && (
    <a href={item.link} className={styles.link} target="_blank" rel="noopener noreferrer">
      {t.portfolio.viewProject} →
    </a>
  )}
```

---

## 8. How to add certificates

Open `src/i18n/en.ts` — find `certificates.placeholder` and update each entry:

```ts
placeholder: [
  {
    title: 'Google Cybersecurity Certificate',
    issuer: 'Google / Coursera',
    date: '2023',
    link: 'https://coursera.org/share/2be63053670f438bd1ad688a96fbf9de',
  },
  // ...
],
```

To add a badge image, place it in `/public/certs/cert-google.png` and update `Certificates.tsx` to render it via `<Image>`.

---

## 9. SEO & AI agent visibility

The following are already implemented:

| Feature | File |
|---|---|
| JSON-LD Person schema | `src/app/layout.tsx` |
| JSON-LD WebSite + ProfilePage schema | `src/app/layout.tsx` |
| Open Graph meta tags | `src/app/layout.tsx` |
| Twitter Card meta tags | `src/app/layout.tsx` |
| hreflang EN + AR | `src/app/layout.tsx` + `sitemap.xml` |
| robots.txt (AI bots allowed) | `public/robots.txt` |
| Sitemap | `public/sitemap.xml` |
| Semantic HTML (section, article, header, main) | All components |
| Proper heading hierarchy h1→h2→h3 | All components |
| PWA manifest | `public/manifest.json` |

**Update sitemap.xml** `<lastmod>` date after each content update.

---

## 10. Updating the sitemap date

Each time you add new content, update `public/sitemap.xml`:

```xml
<lastmod>2024-06-15</lastmod>
```

---

## 11. Adding skills

Edit `src/i18n/en.ts` → `skills.categories`. Each category has a `name` and `items` array. Add/remove items freely.

---

## 12. Local build test before pushing

```bash
npm run build
# Should complete with no errors
# Output goes to ./out/
```

---

## 13. Environment summary

| Item | Value |
|---|---|
| Node version | ≥ 18 |
| Deploy branch | `main` |
| Build output | `./out/` |
| Live URL | https://mayas-faraj.github.io |
| Repo name | `mayas-faraj.github.io` |

---

## 14. Common issues

**Build error: `useContext` in Server Component**  
→ Make sure any component using `useLang()` has `'use client'` at the top.

**Images not loading after deploy**  
→ `next.config.mjs` already has `images: { unoptimized: true }` — required for static export.

**Arabic text not RTL**  
→ Click the language toggle. RTL is applied dynamically to `document.documentElement.dir`.

**GitHub Pages shows 404**  
→ Check that your repo name is exactly `mayas-faraj.github.io` (all lowercase). Check the Actions tab for errors.
