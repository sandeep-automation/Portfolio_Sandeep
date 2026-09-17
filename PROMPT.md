# Master prompt — Gannamani Sandeep portfolio

Use this file as the rebuild spec. The live site in this repo is the source of truth. Match it. Do not restore older experiments and do not invent new sections.

## Identity (hard rules)

- Person: **Gannamani Sandeep**
- Role: **Senior Automation Engineer / SDET**
- Logo / wordmark: `SANDEEP`
- Location: Hyderabad, India
- Email: `sandeepgannamani55@gmail.com`
- Phone: `+91-9502228584`
- LinkedIn: `https://linkedin.com/in/sandeepgannamani`
- GitHub: `https://github.com/sandeepgannamani`
- Experience: 4+ years at Tata Consultancy Services (TCS), Hyderabad — March 2022 – Present

Never use Sri, Sushmita, Aisha Rao, LeetCode, or any other placeholder persona. Never swap this into a designer / frontend-dev portfolio.

## Visual system

Editorial dark, not neon, not glassmorphism, not a 3D scene.

- Background (void): `#050505`
- Text (ink): `#f3efe8`
- Muted: `#8a857c`
- Hairlines: `rgba(243, 239, 232, 0.12)` / strong `0.28`
- Display type: Instrument Serif
- UI type: Inter
- Tracking: eyebrows and pills use wide uppercase tracking
- Buttons: ink-filled primary, hairline secondary
- Section padding: generous (`py-24` / `lg:py-32`)
- No portraits anywhere — hero, about, loading, and overlays are text-only
- No 360, no canvas, no WebGL, no hero video, no blink frames
- No music player
- Custom cursor only when `(hover: hover) and (pointer: fine)`; otherwise native cursor
- Honor `prefers-reduced-motion`

## Stack

React 19, TypeScript, Vite 8, Tailwind CSS 4, Lenis, GSAP ScrollTrigger, Framer Motion (loading only), Lucide.

All copy and lists live in `src/data/content.ts`. Do not scatter resume facts across components.

## Page order

Loading screen → Custom cursor → Navbar → main:

1. Hero (`#home`)
2. Tech-stack marquee
3. About (`#about`)
4. Experience
5. Selected Work (`#work`)
6. Skills (`#skills`)
7. Services (`#services`, on page, **not** in nav)
8. Why work with me
9. Achievements
10. Community
11. Contact (`#contact`)
12. Final CTA

Footer.

Nav links (desktop + mobile): **Home · About · Skills · Work · Contact**. Navbar CTA: `Let's Work Together`.

## Loading

Full-screen void. Display wordmark `SANDEEP`, `Loading experience...`, thin ink progress bar. Minimum ~900ms (shorter if reduced motion). No asset preload required.

## Hero

Full viewport, void background, **text only**.

- Top-left kicker: `HI, I'M SANDEEP`
- Display title stacked: `AUTOMATION` / `ENGINEER`
- Desktop right support: eyebrow `I TURN TESTS INTO TRUST` + one sentence about Playwright frameworks and production quality
- Bottom-left: `Scroll to explore`
- Bottom-right: `View My Work` (`#work`) and filled `Contact Me` (`#contact`)
- Screen-reader h1: name + role

Do not add photos, spin frames, cycling headlines, or scroll-scrubbed 360.

## Marquee

Infinite uppercase loop of the flattened `skillGroups` list. Same items as Skills, including Maven, excluding Java and Python.

## About

Eyebrow `// System profile`. Display heading `Hello, I'm` / `Gannamani Sandeep`. Summary: Playwright (TypeScript/JavaScript), E2E frameworks for 100K+ users, 95% coverage, zero critical production defects.

Three pills: Playwright (E2E & API), CI / CD (Jenkins · GHA), Quality (SDET).

Stats grid (animated counters):

- 95% Automation Coverage
- **1500+ Test Cases Executed**
- 40% Flakiness Reduced
- 50% Faster Regression

## Experience

Single role: Automation Test Engineer, TCS, Hyderabad, March 2022 – Present. Keep the six achievement bullets from `content.ts` (Playwright POM/fixtures/Docker, Jenkins + GitHub Actions, 40% flakiness, axe-core / WCAG 2.1, **1500+ test cases**, mentoring).

## Selected Work

Two case studies with large 16:9 images (`/work/nokia.png`, `/work/gulftainer.png`). Clicking the image or `How it works` opens a solid `#050505` overlay (not transparent) with a numbered real-time walkthrough, outcomes, and tech. Escape and backdrop click close it. Cursor hints: `explore` on image, `view` on the link.

Keep the Nokia OSS/BSS and Gulftainer port/cargo walkthrough copy as written in `content.ts`. Do not replace with generic project cards.

## Skills

Eyebrow `Tech Stack`. Heading `Technologies I work with.` Grouped uppercase hairline pills:

1. **Playwright** — Playwright, E2E Testing, API Testing, Page Object Model, Fixtures & Hooks, Parallel Sharding, Visual Regression, Trace Viewer, Allure Reports, Mobile Emulation
2. **Languages & Runtime** — TypeScript, JavaScript, Node.js, npm, SQL (**no Java, no Python**)
3. **Automation & Testing** — BDD/Gherkin, Data-Driven Frameworks, Contract Testing, axe-core, WCAG 2.1, UAT, Exploratory Testing
4. **API & Quality** — Postman, REST APIs, JSON, XML
5. **CI/CD & DevOps** — Jenkins, GitHub Actions, Docker, Maven, Git, Linux
6. **Cloud, Data & Tools** — Google Cloud, MySQL, Jira, Redmine, Agile/Scrum

Maven stays even without Java. Do not flatten into one ungrouped cloud unless asked.

## Services / Why work / Achievements / Community / Contact / CTA

Match existing headings and copy in `content.ts` / the components.

Contact form: Name, Email, Project Type, Message. **Name placeholder is empty** (do not prefill Aisha Rao or any name). Submit opens a `mailto:` draft. Show email, LinkedIn, GitHub — phone is identity data, not required on the form.

Final CTA: `Your next release could feel like this.`

Footer: `SANDEEP` · `Built with curiosity + code` · LinkedIn · GitHub · © 2026.

## Motion

- Lenis smooth scroll after loading
- GSAP `[data-reveal="up"]` and `[data-reveal="stagger"]` / `[data-stagger-item]`
- Custom cursor states: default, hover, view, explore
- Marquee paused when reduced motion is on

## Do not add back

Music player, Scene3D, ProfileAvatar, 360/blink hero, Certifications as its own section (certs already live under Achievements), Card3D, ScrollProgress, AutoTour, cycling hero stages, glassmorphism, dummy designer copy.

## Done when

The page reads as Sandeep’s SDET site: text hero, grouped skills without Java/Python, Nokia/Gulftainer walkthroughs, 1500+ cases, empty Name field, and a repo whose leftover files and this prompt describe that same site.
