# Gannamani Sandeep — Portfolio

Editorial dark single-page portfolio for **Gannamani Sandeep**, Senior Automation Engineer / SDET.

This repository is the source of truth for the live site. Rebuild and content work should follow [`PROMPT.md`](./PROMPT.md).

## What this site is

- Text-only full-screen hero (`HI, I'M SANDEEP` / `AUTOMATION ENGINEER`)
- Grouped Skills pills (no Java, no Python)
- Nokia and Gulftainer work with live walkthrough overlays
- 1500+ test cases in About stats
- Contact Name field left empty
- Resume download in nav, hero, contact, and footer (`public/resume/`)

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

## Live site

After GitHub Pages deploys: [https://sandeep-automation.github.io/Portfolio_Sandeep/](https://sandeep-automation.github.io/Portfolio_Sandeep/)

`https://sandeepgannamani.github.io` 404s until the GitHub username is `sandeepgannamani` and a matching `sandeepgannamani.github.io` repo exists.

## Build

```bash
npm run build
npm run preview
```

## Customization

- **Copy, skills, work, stats**: `src/data/content.ts`
- **Resume**: drop any PDF in `public/resume/`. After a GitHub push, Pages builds and Resume downloads the newest file in that folder.
- **Work images**: `public/work/nokia.png`, `public/work/gulftainer.png`

Page order is fixed in `src/App.tsx`. Nav is Home · About · Skills · Work · Resume · Contact. Resume downloads the PDF. Services, Why Work, and Achievements sit on the page but are not in the nav.
