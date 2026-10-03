# Master prompt — Gannamani Sandeep portfolio

Use this file as the rebuild spec. The live site in this repo is the source of truth. Match it. Do not restore older experiments and do not invent new sections.

## Identity (hard rules)

- Person: **Gannamani Sandeep**
- Role: **Senior Automation Engineer / SDET**
- Logo / wordmark: `SANDEEP`
- Location: Hyderabad, India
- Email: `sandeepgannamani55@gmail.com`
- Phone: `+91-9502228584`
- LinkedIn: `https://www.linkedin.com/in/sandeep-gannamani-5ab26a1ba`
- GitHub: `https://github.com/sandeep-automation`
- Experience: 4+ years at Tata Consultancy Services (TCS), Hyderabad — March 2022 – Present

Never use Sri, Sushmita, Aisha Rao, LeetCode, or any other placeholder persona. Never swap this into a designer / frontend-dev portfolio.

## Visual system

Editorial dark, not neon, not glassmorphism, not a 3D scene.

- Background (void): `#0b0d12` with a soft indigo wash (top) and warm gold dust (bottom)
- Text (ink): `#f3efe8`
- Muted: `#9a958c`
- Hairlines: `rgba(243, 239, 232, 0.12)` / strong `0.28`
- Display type: Instrument Serif
- UI type: Inter
- Tracking: eyebrows and pills use wide uppercase tracking
- Buttons: ink-filled primary, hairline secondary
- Section padding: generous (`py-24` / `lg:py-32`)
- No portraits anywhere — hero, about, loading, and overlays are text-only
- No 360, no canvas, no WebGL, no hero video, no blink frames
- No music player
- Honor `prefers-reduced-motion`. Native OS cursor — no custom circle cursor.

## Stack

React 19, TypeScript, Vite 8, Tailwind CSS 4, Lenis, GSAP ScrollTrigger, Framer Motion (loading only), Lucide.

All copy and lists live in `src/data/content.ts`. Do not scatter resume facts across components.

## Page order

Loading screen → Navbar → main:

1. Hero (`#home`)
2. Tech-stack marquee
3. About (`#about`)
4. Experience
5. Selected Work (`#work`)
6. Skills (`#skills`)
7. On a product team (`#services`, on page, **not** in nav)
8. Why work with me — pipeline, a11y, JIRA trail, mentoring. Do **not** repeat About numbers.
9. Achievements
10. Contact (`#contact`) — contact info + Download Resume
11. Let's work together (`#together`) — inquiry form
12. Final CTA

Footer.

Nav links (desktop + mobile): **Home · About · Skills · Work · Resume · Contact**. Resume downloads the **newest PDF** in `public/resume/` (resolved at Vite / GitHub Pages build). Not a page section. Navbar CTA: `Let's Work Together` scrolls to `#together`, not `#contact`.

## Loading

Full-screen void. Eyebrow `Quality before the first click`, headline `Proof before the product` (no name/wordmark), cycling STATUS lines at ~700ms (`Compiling coverage` / `Sharding the suite` / `Cutting flakiness` / `Giving hours back`), thin ink progress bar. Minimum ~2.2s (shorter if reduced motion). No asset preload required.

## Hero

Full viewport, void background, **text only**.

- Top-left kicker: `HI, I'M SANDEEP`
- Display title stacked: `AUTOMATION` / `ENGINEER`
- Desktop right support: eyebrow `I TURN TESTS INTO TRUST` + one sentence about Playwright frameworks and production quality
- Same support copy under the title on viewports smaller than `lg`
- Bottom-left: `Scroll to explore`
- Bottom-right: `View My Work` (`#work`), filled `Contact Me` (`#contact`), `Resume` (downloads the PDF in `public/resume/`)
- Screen-reader h1: name + role

Do not add photos, spin frames, cycling headlines, or scroll-scrubbed 360.

## Marquee

Infinite uppercase loop of the flattened `skillGroups` list. Same items as Skills, including Maven, excluding Java and Python.

## About

No section eyebrow. Display heading `What the work` / `returns.` — do not repeat the hero name or `AUTOMATION ENGINEER`. Summary: Playwright (TypeScript/JavaScript), E2E frameworks for 100K+ users, 95% coverage, 30+ hours saved, zero critical production defects. Eight impact highlights (30+ hrs, 8h→2h, 60%→85%, Zero, 10+ nodes, 150+ defects, 50K+ daily transactions, 99.5% SLA) then stats. All figures must already exist in experience / work — do not invent metrics.

Three pills: Playwright (E2E & API), CI / CD (Jenkins · GHA), Quality (SDET).

Stats grid (animated counters):

- 95% Automation Coverage
- **1500+ Test Cases Executed**
- 40% Flakiness Reduced
- 50% Faster Regression

## Experience

Single role: Automation Test Engineer, TCS, Hyderabad, March 2022 – Present. Keep the six achievement bullets from `content.ts` (Playwright POM/fixtures/Docker, Jenkins + GitHub Actions, 40% flakiness, axe-core / WCAG 2.1, **1500+ test cases**, mentoring).

## Selected Work

Two case studies with large 16:9 images (`/work/nokia.png`, `/work/gulftainer.png`). Clicking the image or `Explore real time` opens a solid void overlay with a numbered real-time walkthrough, outcomes, tech, and a GitHub link to `sandeep-automation`. Escape and backdrop click close it.

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

## On a product team / Why work / Achievements / Contact / CTA

Match existing headings and copy in `content.ts` / the components.

On a product team (`#services`): heading `What I bring` / `to the squad.` Capabilities, not a freelance menu.

Why work with me: pipeline gates, a11y, JIRA/trace trail, mentoring. Do not repeat About hours/coverage/zero-critical cards.

Contact (`#contact`): heading `How to reach me.` Email, LinkedIn slug, GitHub, phone. Primary button `Download Resume`. No form.

Let's work together (`#together`): heading `Have an idea? Let's build it.` Form is Name, Email, Message only — **no Project Type select**. Name placeholder is empty (do not prefill Aisha Rao or any name). Submit opens a `mailto:` draft.

Final CTA: `Your next release could feel like this.`

Footer: `SANDEEP` · `Built with curiosity + code` · Resume download · LinkedIn · GitHub · © 2026.

## Motion

- Lenis smooth scroll after loading
- GSAP `[data-reveal="up"]` and `[data-reveal="stagger"]` / `[data-stagger-item]`
- Marquee paused when reduced motion is on

## Do not add back

Music player, Scene3D, ProfileAvatar, 360/blink hero, Certifications as its own section (certs already live under Achievements), Card3D, ScrollProgress, AutoTour, cycling hero stages, glassmorphism, dummy designer copy, Community as its own section, custom circle cursor.

## Done when

The page reads as Sandeep’s SDET site: text hero, grouped skills without Java/Python, Nokia/Gulftainer walkthroughs, 1500+ cases, empty Name field, and a repo whose leftover files and this prompt describe that same site.
