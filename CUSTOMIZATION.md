# Customization Guide for Open Source Systems Contributor Portfolio

Welcome to the customization guide! ⚙️💻 This portfolio template is designed for developers showcasing their open source contributions, systems engineering expertise, and technical focus areas. Whether you're contributing to cloud-native infrastructure, runtime systems, or Bitcoin protocol development, this guide will help you personalize the portfolio to reflect your journey.

This guide covers **beginner-friendly edits** to **pro-level hacks**. Fork the repo, fire up `npm run dev`, and let's dive in. Changes are live-reloadable in dev mode!

## 🎨 Quick Wins: Basic Customizations

Start here to personalize without touching code. All edits are in `index.html` unless noted.

### 1. **Hero Section: Your Intro Spotlight**
   - **Name & Tagline**: Swap "AKASH ANAND" in `<h1>` with your name. Update the subtitle "Open Source Systems Contributor" and the typewriter text in `src/main.js`.
   - **Profile Image**: Replace `/public/kelum-viduranga-portrait.jpeg` with your photo (aspect 4:5, <500KB). Update `src` in `<img>`.
   - **Tech Badges**: Update the technology badges (LINUX, C++, GO, DOCKER, KUBERNETES, BITCOIN CORE) to match your stack.
   - **Badge**: Edit the floating "OPEN SOURCE" spinning badge for your specialty.

### 2. **About Section (Timeline Journey)**
   - **Timeline Items**: Update the four timeline milestones in `#about` section with your career progression.
   - **Chronometer**: The live counter shows system uptime – customize the base dates in `src/main.js`.
   - **Career Stats**: Update "YEARS EXPERIENCE" and "CONTRIBUTIONS" counters to reflect your journey.

### 3. **Open Source Contributions Section**
   - **Contribution Cards**: Update the cards in `#opensource` section for your repositories:
     - Repository name and organization (e.g., `kubernetes-sigs/kubebuilder`)
     - Description and key contributions list
     - Technology tags (Go, Rust, C++, etc.)
   - **Stats Row**: Update PR count, Issues Resolved, and Repository counts.
   - **PR Highlights**: Add terminal-style PR blocks showcasing merged contributions.
   - **Categories**: Organize by area (Cloud Native, Runtime Systems, Infrastructure Tooling).

### 4. **Bitcoin Infrastructure Section**
   - **Terminal Display**: Customize the bitcoin-cli output to show your node's info.
   - **Focus Areas**: Update the four focus areas (Bitcoin Core Operations, Reproducible Builds, Lightning Architecture, Protocol Engineering).
   - **Status Indicators**: Modify the "NODE SYNCED" status indicator.

### 5. **Engineering Principles Section**
   - **Six Principles**: Update the principles cards in `#principles` to reflect your engineering philosophy.
   - **Each Card**: Number, title, and mono-font description.

### 6. **Contact Section**
   - **Social Links**: Update GitHub, LinkedIn, Email, and Twitter/X links with your profiles.
   - **Bio Text**: Customize the "Open to open-source collaboration..." paragraph.
   - **System Status Footer**: Update the three status indicators (SYSTEM STATUS, CONTRIBUTIONS, BITCOIN NODE).
   - **Footer**: Change copyright year/name.

| Quick Edit | File | Pro Tip |
|------------|------|---------|
| Personal Info | `index.html` | Update name, tagline, social links throughout. |
| Images | `/public/` | Optimize with TinyPNG (<100KB each). |
| OSS Contributions | `index.html` | Add your repos, PRs, and contribution stats. |
| Bitcoin Section | `index.html` | Customize terminal output and focus areas. |
| Colors | `src/main.css` (CSS vars) | Accent colors: green (OSS), orange (Bitcoin), purple (Runtime). |

## ⚡ Advanced: Level Up Your Template

For those who love diving deep – edit JS/CSS for magic.

### 1. **Themes & Dark Mode**
   - Add a toggle in nav: `<button id="theme-toggle">🌙</button>`.
   - In `src/main.js`: 
     ```js
     const toggle = document.getElementById('theme-toggle');
     toggle.addEventListener('click', () => {
       document.body.classList.toggle('dark');
       // GSAP for smooth transition
       gsap.to('body', { backgroundColor: document.body.classList.contains('dark') ? '#111' : '#fff', duration: 0.5 });
     });
     ```
   - In `src/main.css`: Add dark variants (e.g., `@media (prefers-color-scheme: dark) { ... }`).

### 2. **Custom Animations**
   - **Hero Reveal**: In `src/main.js`, extend the loader timeline (`tl.to(...)`) for new staggers.
   - **Magnetic Elements**: Add class `magnetic-btn` to any interactive (e.g., social icons).
   - **Parallax**: Duplicate `.parallax-element` with custom `data-speed` (e.g., -0.3 for upward float).
   - **Clip-Path Morphs**: Tweak `.hero-img-container` polygon for unique shapes.

### 3. **Performance Tweaks**
   - **Bundle Size**: In `vite.config.js`, up `maxSizeInKb` if adding assets.
   - **Lazy Load**: Add `loading="lazy"` to work images.
   - **Obfuscation**: Dial down `controlFlowFlattening` in config if GSAP breaks.

### 4. **Integrations**
   - **Blog Feed**: Add RSS via JS fetch in a new section.
   - **Form**: Replace contact links with Netlify Forms (add `netlify` attribute to `<form>`).
   - **Analytics**: Drop GA script in `<head>`.

## 🔧 Troubleshooting Common Hiccups

| Issue | Cause | Fix |
|-------|-------|-----|
| **Build Fails (PostCSS)** | Missing Tailwind directives | Add `@tailwind base; @tailwind components; @tailwind utilities;` to `src/main.css`. |
| **Animations Lag** | GSAP/Lenis conflict | Refresh ScrollTrigger: `ScrollTrigger.refresh()` after loader. |
| **Images 404** | Wrong path | Ensure `/public/filename.jpg`; use absolute `/`. |
| **Mobile Scroll Jumps** | Lenis touch | Set `smoothTouch: true` in Lenis init. |
| **Obfuscation Breaks JS** | Heavy flattening | Set `controlFlowFlattening: false` in `vite.config.js`. |

Run `npm run build` after changes – check console for errors. Still stuck? [Open an issue](https://github.com/mrhapile/Portfolio/issues/new) with your setup details.

## 📚 Resources & Inspiration

- **GSAP Docs**: [greensock.com/docs](https://greensock.com/docs) – Timeline mastery.
- **Tailwind Playground**: [play.tailwindcss.com](https://play.tailwindcss.com) – Utility experiments.
- **Vite Guide**: [vitejs.dev/guide](https://vitejs.dev/guide) – Build configuration.
- **Bitcoin Core**: [bitcoincore.org](https://bitcoincore.org) – Node documentation.
- **Kubernetes Docs**: [kubernetes.io/docs](https://kubernetes.io/docs) – Cloud native reference.

## 🌟 Final Touches

Your portfolio isn't just code – it's your digital handshake. Test on real devices, get feedback from peers, and iterate with precision and purpose.

---

**Crafted by [Akash Anand](https://github.com/mrhapile)**  
*February 2026 Edition* | [GitHub](https://github.com/mrhapile)  

[Back to README](README.md) | [Contribute](CONTRIBUTING.md)  

> "Build deterministic systems, contribute to open source, verify everything." ⚙️
