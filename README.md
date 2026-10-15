<div align="center">
  <a href="https://francisnaga.site/">
    <img src="assets/readme-banner.gif" alt="Animated Naga portfolio banner: Francis Naga, product-minded software developer in Lagos, Nigeria" width="100%" />
  </a>

  <h1>Francis Naga · Product-minded software developer</h1>

  <p><strong>I turn complex problems into software people trust.</strong><br />
  Web products, mobile apps, and practical AI — from a clear idea to a polished release.</p>

  <p>
    <a href="https://francisnaga.site/"><img alt="Visit portfolio" src="https://img.shields.io/badge/Portfolio-francisnaga.site-002FA7?style=for-the-badge&logo=vercel&logoColor=white" /></a>
    <a href="https://github.com/francisnaga"><img alt="GitHub profile" src="https://img.shields.io/badge/GitHub-francisnaga-111827?style=for-the-badge&logo=github&logoColor=white" /></a>
    <a href="mailto:hello@francisnaga.site"><img alt="Email Francis" src="https://img.shields.io/badge/Email-Let's%20talk-334155?style=for-the-badge&logo=gmail&logoColor=white" /></a>
    <a href="https://www.linkedin.com/in/francisnaga/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  </p>

  <p>
    <img alt="Repository stars" src="https://img.shields.io/github/stars/francisnaga/My-Portfolio?style=flat-square&color=4f73ff" />
    <img alt="Latest commit" src="https://img.shields.io/github/last-commit/francisnaga/My-Portfolio?style=flat-square&color=64748b" />
    <img alt="Built with React" src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=111827" />
    <img alt="Built with Vite" src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" />
  </p>

  <p><a href="#selected-work">Selected work</a> · <a href="#inside-the-build">Inside the build</a> · <a href="#run-locally">Run locally</a> · <a href="#connect">Connect</a></p>
</div>

---

## The portfolio

This repository powers [francisnaga.site](https://francisnaga.site/), the personal portfolio of **Efobi Francis Chibundo (Naga)** — a product-minded software developer based in Lagos, Nigeria, and a Marine Engineering student at Nigeria Maritime University.

The site is designed for two conversations: joining a thoughtful engineering team, or helping a founder turn a product idea into a dependable release. It leads with selected work, explains the engineering behind it, and makes the next step clear.

## Selected work

| Product | What it does | Explore |
| --- | --- | --- |
| **NCB Finance** | Invoicing and payments for Nigerian freelancers and businesses. | [Source](https://github.com/francisnaga/NCB-Finance) |
| **Vantage** | A focused workspace for moving job applications from shortlist to offer. | [Source](https://github.com/francisnaga/Vantage) |
| **NairaLens** | Financial product, remittance-rate, and provider comparison tools. | [Source](https://github.com/francisnaga/NairaLens) |
| **Classync** | A student-first campus PWA with role-based approvals. | [Source](https://github.com/francisnaga/Classync) |
| **Inkto** | Mobile legal-document scanning, transcription, and DOCX output. | [Google Play developer page](https://play.google.com/store/apps/dev?id=7500831168663512287) |

> **Preview note:** The NCB Finance, Vantage, NairaLens, and Classync subdomains currently have missing DNS records. Their project dialogs link to source code while those preview domains are repaired.

## Inside the build

- **Clear product story:** the hero, project details, background, and contact paths speak to both hiring teams and product partners.
- **Useful project evidence:** each project includes its purpose, stack, and a concise architecture summary.
- **Real public GitHub activity:** the site fetches repository, star, and follower counts from GitHub's public API. It caches the response in the visitor's browser for 15 minutes and shows saved data if GitHub is unavailable.
- **Accessible interactions:** responsive navigation, keyboard-operable project dialogs, Escape close, focus handling, and reduced-motion support.
- **Personal brand system:** a custom two-tone monogram, International Klein Blue accents, and a clean technical visual language.
- **Built for static deployment:** Vite outputs the production site to `dist/`, with Vercel configuration included.

GitHub profile figures describe public repository activity. They are not portfolio visits, customer counts, revenue, or app installs. The site does not collect visitor analytics.

## The stack

<p>
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=111827" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-14-0055FF?style=flat-square&logo=framer&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=flat-square&logo=javascript&logoColor=111827" />
  <img alt="Oxlint" src="https://img.shields.io/badge/Oxlint-checked-64748B?style=flat-square" />
</p>

The GitHub stats cards below are generated by [GitHub Readme Stats](https://github.com/anuraghazra/github-readme-stats). They summarize public GitHub activity, can be cached, and do not measure site traffic or hiring interest.

<div align="center">
  <img height="165" alt="Public GitHub profile statistics for Francis Naga" src="https://github-readme-stats.vercel.app/api?username=francisnaga&show_icons=true&hide_border=true&rank_icon=github&bg_color=0b0f18&title_color=92a8ff&icon_color=4f73ff&text_color=e2e7f2" />
  <img height="165" alt="Most-used languages across Francis Naga's public repositories" src="https://github-readme-stats.vercel.app/api/top-langs/?username=francisnaga&layout=compact&hide_border=true&langs_count=6&bg_color=0b0f18&title_color=92a8ff&text_color=e2e7f2" />
</div>

## Run locally

Requires Node.js `20.19+` or `22.12+` and npm.

```bash
git clone https://github.com/francisnaga/My-Portfolio.git
cd My-Portfolio
npm ci
npm run dev
```

Vite prints the local development URL after the server starts.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Build the production site in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Check source with Oxlint. |

## Brand assets

- `assets/readme-banner.gif` — original, restrained animated README banner; regenerate with `python scripts/generate_readme_banner.py`.
- `public/logo.svg` and `public/logo-white.svg` — two-tone and white Naga marks.
- `public/favicon.svg` — browser icon with a dark-mode color variant.
- `public/og-image.png` — social-sharing preview image.
- `src/components/Logo.jsx` — reusable React mark.

## Connect

- **Website:** [francisnaga.site](https://francisnaga.site/)
- **Email:** [hello@francisnaga.site](mailto:hello@francisnaga.site)
- **GitHub:** [github.com/francisnaga](https://github.com/francisnaga)
- **LinkedIn:** [linkedin.com/in/francisnaga](https://www.linkedin.com/in/francisnaga/)

The repository has no license file. Please contact the author before reusing the source or brand assets.
