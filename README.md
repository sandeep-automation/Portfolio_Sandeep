# Gannamani Sandeep — Portfolio

Editorial dark single-page portfolio for **Gannamani Sandeep**, Senior Automation Engineer / SDET.

This repository is the source of truth for the live site. Rebuild and content work should follow [`PROMPT.md`](./PROMPT.md).

## What this site is

- Text-only full-screen hero (`HI, I'M SANDEEP` / `AUTOMATION ENGINEER`)
- Grouped Skills pills (no Java, no Python)
- Nokia and Gulftainer work with live walkthrough overlays
- 1500+ test cases in About stats
- Contact Name field left empty
- Custom cursor on fine pointers only

## What this site is not

- No portraits, 360 spins, canvas, or hero video
- No background music player
- No placeholder identity (never Sri, Sushmita, Aisha Rao, or LeetCode copy)

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Lenis (smooth scroll)
- GSAP + ScrollTrigger (`[data-reveal]`)
- Framer Motion (loading screen only)
- Lucide React (project overlay icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

For GitHub Pages, set the source to `Deploy from a branch`, choose `main`, and choose `/docs` as the folder. The site is published at [https://sandeep-automation.github.io/Portfolio_Sandeep/](https://sandeep-automation.github.io/Portfolio_Sandeep/).

## Build

```bash
npm run build
npm run preview
```

## Customization

- **Copy, skills, work, stats**: `src/data/content.ts`
- **Resume**: `public/resume.pdf`
- **Work images**: `public/work/nokia.png`, `public/work/gulftainer.png`

Page order is fixed in `src/App.tsx`. Nav is Home · About · Skills · Work · Contact. Services, Why Work, Achievements, and Community sit on the page but are not in the nav.
