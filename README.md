# Shrey Patel — Portfolio

> AI · Machine Learning · Full Stack Engineer

A premium, production-grade portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and custom animations. Designed to rival portfolios at OpenAI, Stripe, Vercel, and Linear.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx          # Main portfolio page (all sections)
│   ├── layout.tsx        # Root layout + SEO metadata
│   └── globals.css       # Design system, CSS variables, animations
├── public/
│   ├── resume.pdf        # ← REPLACE THIS with your actual resume
│   ├── robots.txt
│   └── sitemap.xml
├── netlify.toml          # Netlify deployment config
├── vercel.json           # Vercel deployment config
└── next.config.ts        # Static export config
```

---

## 🔧 Customization

### 1. Replace Resume
Drop your PDF at `public/resume.pdf`. The download button is already wired up.

### 2. Update Metadata
In `app/layout.tsx`, update the `metadata` object with your live URL once deployed.

### 3. Update Sitemap
In `public/sitemap.xml`, replace `https://shreypatel.dev/` with your actual domain.

### 4. Contact Form
The contact form uses **FormSubmit** (completely free, no account needed).

- It's pre-configured to send to `shreyp574@gmail.com`
- **First submission will require email confirmation** — check your inbox after deploying
- No setup, no API keys required

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Netlify
1. Push to GitHub
2. Connect repo on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy

### Netlify CLI
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=out
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 | Framework (static export) |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | (available, use in future) |
| Lucide React | Icons |
| FormSubmit | Contact form (free, no backend) |

---

## 🎨 Design System

CSS variables are defined in `globals.css`:

```css
--bg-primary: #0A0F1E       /* Main background */
--accent-violet: #7C3AED    /* Primary accent */
--accent-cyan: #06B6D4      /* Secondary accent */
--text-primary: #F9FAFB     /* Main text */
--text-secondary: #9CA3AF   /* Secondary text */
```

Typography: **Space Grotesk** (display) + **Inter** (body)

---

## 📊 Performance
- Static export → instant loading
- No JavaScript required for initial render
- Lighthouse score target: 95+

---

## 📝 Maintenance

**Adding a new project:** Edit the `PROJECTS` array in `app/page.tsx`

**Adding a skill:** Edit the `SKILLS` array in `app/page.tsx`

**Updating education:** Edit the `EDUCATION` array in `app/page.tsx`
