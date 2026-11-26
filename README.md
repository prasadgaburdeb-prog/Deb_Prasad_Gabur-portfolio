# Data Analyst & Machine Learning Portfolio — V2

A high-performance, responsive React + Vite portfolio engineered with a dark, cyber-analytical visual identity, subtle telemetry aesthetic, and crimson red accents.

Designed specifically for **Data Analyst** and **Machine Learning internship recruiters**, technical teams, and potential collaborators.

---

## Key Features in V2

- **Telemetry Hero Section:** High-precision data nucleus with orbit rings, status chips (`SYS // 2026.V2`), and clear value proposition.
- **Dynamic 21st.dev Spotlight Glow:** Zero-dependency pointer tracking (`--mouse-x`, `--mouse-y`) that casts a subtle radial crimson light sheen across cards on hover.
- **Restructured Skills Taxonomy:** Categorized into **Data Analytics**, **Machine Learning**, and **Development & Tools** with functional role tags instead of deceptive percentage meters.
- **Flagship Project Architecture:**
  - **ClassPulse AI** prioritized as a featured flagship project with full-width presence, repository links, and highlights.
  - **Wellness App** & **MedZrya** presented with honest collaboration status badges and schema frames.
  - Native support for screenshots (`screenshot` path) with technical blueprint fallbacks.
- **Scroll-Triggered Reveals:** Hardware-accelerated entrance animations with `IntersectionObserver`.
- **Accessible & Responsive:** Meets WCAG 2.1 AA contrast standards, keyboard accessible with `:focus-visible`, 44px touch targets on mobile, and strict `prefers-reduced-motion` compliance.
- **Complete SEO Suite:** Open Graph, Twitter cards, meta tags, and SVG favicon.

---

## Run Locally

1. Ensure **Node.js** (LTS) is installed.
2. Open your terminal in this repository folder.
3. Install dependencies:

```bash
npm install
```

4. Start the local Vite development server:

```bash
npm run dev
```

5. Open the displayed local URL in your browser (typically `http://localhost:5173`).

---

## Personalize Before Deploying

Open `src/App.jsx` and customize the `PROFILE` object:
- `name`: Your full name
- `location`: Your current city/state
- `linkedin`: Your verified LinkedIn URL
- `email`: Your professional email address
- `github`: Your GitHub profile URL

Add your resume PDF as `public/resume.pdf` to activate resume downloads.

---

## Build for Production

```bash
npm run build
```

The optimized, production-ready static assets are compiled into the `dist/` directory.

---

## Deploy to Vercel / Netlify / GitHub Pages

### Deploying to Vercel:
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.
