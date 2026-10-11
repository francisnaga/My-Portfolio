# Naga — Portfolio Design System & Brand Specification

> **Version:** 2.1 (Architectural Monogram & Clean Brutalism)  
> **Brand Name:** Strictly **Naga** (NO "Naga Digital")  
> **Target Production URL:** [https://www.francisnaga.site/](https://www.francisnaga.site/)  
> **Repository:** [https://github.com/francisnaga/My-Portfolio](https://github.com/francisnaga/My-Portfolio)  
> **Author & Builder:** Efobi Francis Chibundo (Naga / Francis Efobi)  
> **Last Updated:** October 2026

---

## 1. Identity & Brand Philosophy

### 1.1 Brand Voice & Persona
- **Role:** Software Developer & Student Builder.
- **Core Stance:** Practical digital products across web, mobile, AI, and automation—without bloated templates, drag-and-drop builders, or generic buzzwords. Raw, performant code that solves real business problems.
- **Visual Style:** **Clean High-Contrast Neo-Brutalism**. 
  - Sharp geometric boundaries (0px border radius on major containers, 2px borders).
  - High-contrast tactile drop shadows (`4px 4px 0px 0px #111111` or `8px 8px 0px 0px #111111`).
  - Monospaced technical identifiers (`// Selected Works`, `[01]`, `EST. 2023`).
  - Subtle analog grain/noise texture overlay (`.noise-bg`) to combat sterile "AI-generated" aesthetics.
- **Theme Mode:** **Permanent Light Mode**.
  - High-contrast off-white canvas with deep charcoal foreground and International Klein Blue accent.
  - (Dark mode was evaluated and permanently discarded per design review to maintain consistent brand identity).

### 1.2 Brand Monogram & Vector Logo System
- **Design Philosophy:** Inspired by mechanical engineering chamfers and HANCORE's faceted monogram language. Built on an 88x80 Cartesian grid with strict 45-degree angled cuts and 180° rotational symmetry.
- **Geometry Structure:**
  - **Primary Blade (Left):** Vertical stem from `(0, 14)` with top-left 45° chamfer to `(14, 0)`, transitioning into a diagonal tongue at `(64, 80)`.
  - **Secondary Blade (Right):** Rotated 180° counterpart starting at `(88, 66)` with bottom-right 45° chamfer to `(74, 80)`, gliding along the diagonal with a uniform negative space channel.
- **Available Assets in Project:**
  - `src/components/Logo.jsx`: Reusable React component with props `size`, `className`, `variant` (`'duotone'`, `'mono'`, `'white'`, `'sand'`), and `type` (`'n'` or `'ng'`).
  - `public/favicon.svg`: Dynamic SVG favicon with `@media (prefers-color-scheme: dark)` support.
  - `public/logo.svg`: Standalone 2-tone vector (Charcoal + Klein Blue).
  - `public/logo-white.svg`: Standalone white vector for dark backgrounds.
  - `public/logo-sand.svg`: Standalone sand/bone vector in exact HANCORE palette (`#C9C7B6` & `#EAE8DA`).
  - `public/logo-ng.svg`: Interlocking NG alternative vector.
- **Copy-Paste Raw SVG for External Projects:**
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 80" fill="none" role="img" aria-label="Naga Logo">
  <path d="M0 14L14 0H22V36L64 80H44L18 46V80H0Z" fill="#111111" />
  <path d="M88 66L74 80H66V44L24 0H44L70 34V0H88Z" fill="#002FA7" />
</svg>
```

---

## 2. Design Tokens & Visual Specs

### 2.1 Color Palette
Configured in `src/index.css` via CSS variables and mapped in `tailwind.config.js`:

| Token | HSL Value | Hex Equivalent | Role & Application |
| :--- | :--- | :--- | :--- |
| `--background` | `0 0% 97%` | `#F8F8F8` | Primary page canvas, light card backgrounds |
| `--foreground` | `0 0% 7%` | `#111111` | Primary typography, borders, dark cards, footer |
| `--accent` | `223 100% 33%` | `#002FA7` | International Klein Blue — focal CTAs, hero block, active states |
| `--ring` | `223 100% 33%` | `#002FA7` | Keyboard focus indicator rings (`focus-visible:ring-2`) |
| Selection | — | `#002FA7` bg / `#FFFFFF` text | Global text selection styling |

### 2.2 Typography Hierarchy
- **Primary Sans Font:** `Plus Jakarta Sans`, sans-serif (Google Fonts: 400, 500, 700, 900).
- **Secondary Monospace Font:** System Monospace (`font-mono` / ui-monospace, Menlo, Monaco, Consolas).
- **Text Styles:**
  - **Hero Display:** `text-[11vw] sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] md:leading-[1]`
  - **Section Titles (Mono):** `text-xs uppercase tracking-widest text-foreground/50 font-mono` (`// Section Name`)
  - **Component Headers:** `font-mono text-2xl md:text-3xl lg:text-4xl uppercase font-bold`
  - **Body Text:** `font-sans text-base md:text-lg text-foreground/80 leading-relaxed`
  - **Tags / Metadata:** `font-mono text-[10px] md:text-xs uppercase tracking-wider`

### 2.3 Noise Texture (`.noise-bg`)
An inline SVG fractal noise pseudo-element applied across sections:
```css
.noise-bg {
  position: relative;
}
.noise-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 50;
  opacity: 0.25;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
```

### 2.4 Brutalist Shadows & Spring Physics
- **Default Card Shadow:** `shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]`
- **Elevated Hover Shadow:** `hover:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]`
- **Accent Hover Shadow:** `hover:shadow-[6px_6px_0px_0px_rgba(0,47,167,1)]`
- **Spring Parameters (Framer Motion):** `type: "spring", stiffness: 300, damping: 24`

---

## 3. Structural Component Breakdown

### 3.1 Sticky Navigation (`src/components/Nav.jsx`)
- **Container:** `fixed top-0 left-0 w-full z-[100] border-b border-foreground/10 bg-background/70 backdrop-blur-md`
- **Height:** 80px (`h-20`).
- **Branding:** Architectural Monogram (`<Logo size={24} />`) + `NAGA` in bold monospaced uppercase.
- **Desktop Links:** `Home`, `Projects`, `About`, `Services`, `Contact` + `Let's Talk` primary button.
- **Mobile Drawer:**
  - Full viewport drawer (`h-[100dvh] fixed inset-0 z-[200] bg-background`).
  - Animates from right (`x: '100%'` to `x: 0`) via Framer Motion.
  - Dynamically locks body scroll (`document.body.style.overflow = 'hidden'`) while active.
  - Placed outside `overflow-x-hidden` in `App.jsx` to prevent iOS/Android sticky clipping.

### 3.2 Hero Section (`src/components/Hero.jsx`)
- **Layout:** Asymmetric split screen (60% Left / 40% Right) on desktop (`min-h-[100svh]`).
- **Left 60%:**
  - Staggered entrance animation for headline and copy.
  - Big headline: `I BUILD IT. / I LAUNCH IT. / I HELP YOU / GROW IT.`
  - Bio paragraph: "Hey, I'm Naga, a software developer and student builder..."
- **Right 40%:**
  - Solid International Klein Blue canvas (`bg-accent`).
  - Monospace location timestamp: `LAGOS, NG / EST. 2023`.

### 3.3 Services & Pricing Bento Grid (`src/components/Services.jsx`)
- **Layout:** 4-column responsive Bento Grid with varying row and column spans.
- **Interactive State:** Hover and click reveal detailed card flip / breakdown with WhatsApp and Email CTAs.
- **Catalog:**
  1. `[01] Mobile App Development`: ₦500k+ (Range: ₦500k - 3.5M+)
  2. `[02] Website Development`: ₦100k+ (Range: ₦100k - 800k)
  3. `[03] AI Tools & Chatbots`: ₦150k+ (Range: ₦150k - 1.5M)
  4. `[04] Python Automation`: ₦30k+ (Range: ₦30k - 300k)
  5. `[05] Facebook & Social Ads`: ₦100k/mo (Range: ₦100k - 400k/month)
  6. `[06] Google Business`: ₦20k+ (Range: ₦20k - 80k)
  7. `[07] Business Launch Package`: ₦250k+ (Range: ₦250k - 900k)

### 3.4 Selected Works Grid & Modal (`src/components/Work.jsx`)
- **Layout:** 3-column responsive card grid with interactive hover lifts.
- **Projects Data (Strictly Maintained):**
  - **NCB Finance (`[01]`):** Invoicing and payments platform for Nigerian freelancers and CAC businesses. FIRS/NRS compliance, Paystack.
  - **Vantage (`[02]`):** Minimalist job application tracker with SaaS aesthetic.
  - **NairaLens (`[03]`):** Nigerian financial transparency platform (BNPL comparison, vendor legitimacy, remittance rates).
  - **Classync (`[04]`):** Edtech PWA for university students with multi-role approval workflow.
  - **Inkto (`[05]`):** AI legal document scanner and transcription platform (Gemini AI, Kotlin, React Native) built for a practicing Nigerian lawyer.
- **Brutalist Modal Inspector:**
  - Full backdrop blur (`bg-foreground/90 backdrop-blur-sm`).
  - Framer motion spring entrance (`scale: 0.95 -> 1.0`).
  - Locks body scroll on open.
  - Dual action buttons: `Live Demo` and `GitHub`.

### 3.5 The Builder Section (`src/components/About.jsx`)
- **Main Column:**
  - Name: `Efobi Francis Chibundo`.
  - Professional narrative combining software engineering with product thinking.
  - **Verified Proof Metric:** `₦80M+ Enterprise Lead Pipeline` (Architected and executed a high-conversion digital marketing campaign that successfully generated an ₦80M enterprise business opportunity).
- **Sidebar Specs:**
  - **Education:** B.Eng. Marine Engineering, Nigeria Maritime University (NMU), 2024–2029.
  - **Certifications:** NIIT Web Development, NIIT Python Programming.
  - **Location:** Live ping status indicator (Nigeria).

### 3.6 Contact & Footer (`src/components/Contact.jsx`)
- **Theme:** Inverted dark block (`bg-foreground text-background`).
- **Heading:** `Let's Talk Code.`
- **Direct Mail:** `hello@francisnaga.site`.
- **Social Ecosystem:** GitHub, LinkedIn, TikTok (`@efobi_naga`), X/Twitter (`@francisnaga`).

### 3.7 Floating Brutalist WhatsApp CTA (`src/App.jsx`)
- Positioned `fixed bottom-6 right-6 md:bottom-12 md:right-12 z-50`.
- Brutalist box shadow (`shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]`).
- Turns Klein Blue on hover with translation lift.

---

## 4. Engineering & Deployment Guidelines

- **Framework:** React 19 + Vite 8.
- **Styling:** Tailwind CSS 3.4 + PostCSS + Autoprefixer.
- **Animation Engine:** Framer Motion 14.
- **Icons:** React Icons 5 (`fa`, `fa6`, `bs`).
- **Linting:** Oxlint (`npm run lint`).
- **Deploy Pipeline:** Connected via GitHub to Vercel (`vercel.json` with SPA rewrites).
