# Open Source Systems Contributor Portfolio 🚀

[![Stars](https://img.shields.io/github/stars/mrhapile/Portfolio?style=social)](https://github.com/mrhapile/Portfolio/stargazers) [![Forks](https://img.shields.io/github/forks/mrhapile/Portfolio?style=social)](https://github.com/mrhapile/Portfolio/network/members) [![License](https://img.shields.io/github/license/mrhapile/Portfolio)](https://github.com/mrhapile/Portfolio/blob/main/LICENSE) [![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-brightgreen)](https://vercel.com/new/git/external?repository-url=https://github.com/mrhapile/Portfolio)

A modern **Open Source Systems Contributor portfolio** built with **Vite**, **Tailwind CSS**, **GSAP**, and **Lenis** for smooth animations. Designed for developers focused on **cloud-native infrastructure**, **runtime systems**, and **Bitcoin protocol engineering**. Perfect for showcasing open source contributions, engineering principles, and technical expertise. **100% free, open-source, and customizable** – deploy in minutes!

<div align="center">

### 📸 Site Preview

![Portfolio Preview Screenshot](https://github.com/dnuzi/mova-npm-media/blob/main/Screenshot%202026-01-21%20194857.png)
<em>*(Full-site preview: Hero, works, skills, and chronometer in action. Replace with your actual screenshot for live vibes!)*</em>

</div>

<div align="center">
  <img src="https://github.com/dnuzi/mova-npm-media/blob/main/movanest.gif" alt="Hero Animation" width="100%" />
  <p><em>Live Demo: <a href="https://portfolio-site-rosy-nine.vercel.app/"></a>portfolio-site-rosy-nine.vercel.app</em></p>
</div>

## ✨ Features

- **Hero Section**: Magnetic cursor, typewriter effect showcasing Cloud Native · Runtime Systems · Bitcoin Infrastructure.
- **Smooth Scrolling**: Powered by Lenis + GSAP ScrollTrigger – no jank, just flow.
- **Horizontal Work Scroll**: Showcase areas like Kubernetes Ecosystem, WasmEdge Runtime, Bitcoin Core, and CI/CD Tooling.
- **Open Source Contributions Section**: Detailed contribution cards for kubebuilder, kube-rs, WasmEdge with PR highlights.
- **Bitcoin Infrastructure Section**: Terminal-style display with bitcoin-cli output, node status indicators.
- **Engineering Principles**: Six core principles (Determinism, Idempotency, Observability, Fault Tolerance, Reproducibility, Security First).
- **Timeline Journey**: Career progression from Systems Programming to Open Source Contributor.
- **Live Chronometer**: Real-time stats with years/months/days/hours/minutes/seconds counters.
- **Marquee & Badges**: Tech stack badges (Linux, C++, Go, Docker, Kubernetes, Bitcoin Core).
- **Responsive & Accessible**: Mobile-first, with semantic HTML and accessibility features.

| Feature | Tech | Why? |
|---------|------|------|
| Animations | GSAP + ScrollTrigger | Pixel-perfect, performant timelines. |
| Styling | Tailwind CSS | Rapid, utility-first design. |
| Bundling | Vite + SingleFile | Lightning-fast builds & deploys. |
| Obfuscation | JS Obfuscator Plugin | "Encrypted" code for security flair. |
| Smooth Scroll | Lenis | Native-feel scrolling without libraries. |

## 🛠 Quick Start

### Prerequisites
- Node.js (v18+)
- Git

### Installation
1. **Clone the Repo**:
   ```bash
   git clone https://github.com/mrhapile/Portfolio.git
   cd Portfolio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) – watch the magic unfold!

4. **Build for Production**:
   ```bash
   npm run build
   ```
   Outputs a single `dist/index.html` (obfuscated & minified).

5. **Preview Build**:
   ```bash
   npm run preview
   ```

### Customization
- **Images**: Swap files in `/public/` (e.g., `kelum-viduranga-portrait.jpeg` for hero).
- **Personal Info**: Edit `index.html` – name, tagline, GitHub/social links in hero and contact sections.
- **Open Source Contributions**: Update contribution cards in the `#opensource` section with your repos and PRs.
- **Bitcoin Section**: Customize the terminal output and focus areas in `#bitcoin` section.
- **Engineering Principles**: Modify the six principles in `#principles` to match your philosophy.
- **Timeline**: Update the journey milestones in `#about` section.
- **Colors/Themes**: Tweak CSS variables in `src/main.css`.
- **Animations**: Adjust GSAP timelines in `src/main.js`.

For a full guide, see [CUSTOMIZATION.md](CUSTOMIZATION.md).

## ☁️ Deployment

### Vercel (Recommended – Free & Instant)
1. Push to GitHub.
2. Import repo at [vercel.com](https://vercel.com/import).
3. Set `vercel.json` (auto-detected for Vite).
4. Deploy – Custom domain optional!

### Other Options
- **Netlify**: Drag `/dist` or link GitHub.
- **GitHub Pages**: Use `gh-pages` branch.
- **Self-Host**: Serve `dist/` via Apache/Nginx.

## 📚 Tech Stack

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-000?style=for-the-badge&logo=studio-freight&logoColor=white)
![Remix Icon](https://img.shields.io/badge/Remix_Icon-18191A?style=for-the-badge&logo=remixicon&logoColor=white)

- **Build Tools**: Vite, PostCSS, Tailwind.
- **Animations**: GSAP (3.12.5), ScrollTrigger, TextPlugin.
- **Icons**: Remix Icon (4.1.0).
- **Fonts**: Inter & Space Mono (Google Fonts).
- **CDNs**: Minimal – GSAP/Lenis for speed.

## 🤝 Contributing

Love it? Fork, tweak, and PR! Ideas for features like dark mode or React integration? Open an issue.

1. Fork the repo.
2. Create your branch (`git checkout -b feature/awesome`).
3. Commit (`git commit -m 'Add awesome feature'`).
4. Push (`git push origin feature/awesome`).
5. Open a Pull Request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is [MIT](LICENSE) licensed – use it freely, even commercially. Built with ❤️ from the sunny shores of Sri Lanka (Negombo vibes!).

<div align="center">
  <img src="https://github.com/dnuzi/mova-npm-media/blob/main/mova.gif" alt="Hero Animation" width="100%" />
</div>

---

**Made by [Akash Anand](https://github.com/mrhapile) – Open Source Systems Contributor.**  
*February 2026 Edition* | [GitHub](https://github.com/mrhapile)  

> "Deterministic systems, reproducible builds, decentralized infrastructure." ⚙️💻
