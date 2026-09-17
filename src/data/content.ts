export const personalInfo = {
  name: 'Gannamani Sandeep',
  firstName: 'Sandeep',
  logo: 'SANDEEP',
  role: 'Senior Automation Engineer / SDET',
  location: 'Hyderabad, India',
  email: 'sandeepgannamani55@gmail.com',
  phone: '+91-9502228584',
  linkedin: 'https://linkedin.com/in/sandeepgannamani',
  github: 'https://github.com/sandeep-automation',
  experienceYears: '4+',
  resumePath: '/resume.pdf',
  seoTitle: 'Gannamani Sandeep — Senior Automation Engineer / SDET',
  seoDescription:
    'Senior Automation Engineer building premium test frameworks, interactive quality pipelines and reliable digital products.',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  kicker: "HI, I'M SANDEEP",
  title: ['AUTOMATION', 'ENGINEER'] as const,
  supportEyebrow: 'I TURN TESTS INTO TRUST',
  support: 'Playwright frameworks, reliable pipelines and quality that holds in production.',
}

export const aboutSummary = `Automation Test Engineer with ${personalInfo.experienceYears} years specializing in Playwright (TypeScript/JavaScript). I design E2E frameworks serving 100K+ users with 95% automation coverage and zero critical production defects.`

export const aboutPills = [
  { title: 'Playwright', detail: 'E2E & API' },
  { title: 'CI / CD', detail: 'Jenkins · GHA' },
  { title: 'Quality', detail: 'SDET' },
]

export const stats = [
  { label: 'Automation Coverage', value: 95, suffix: '%' },
  { label: 'Test Cases Executed', value: 1500, suffix: '+' },
  { label: 'Flakiness Reduced', value: 40, suffix: '%' },
  { label: 'Faster Regression', value: 50, suffix: '%' },
]

export const skillGroups = [
  {
    label: 'Playwright',
    items: [
      'Playwright',
      'E2E Testing',
      'API Testing',
      'Page Object Model',
      'Fixtures & Hooks',
      'Parallel Sharding',
      'Visual Regression',
      'Trace Viewer',
      'Allure Reports',
      'Mobile Emulation',
    ],
  },
  {
    label: 'Languages & Runtime',
    items: ['TypeScript', 'JavaScript', 'Node.js', 'npm', 'SQL'],
  },
  {
    label: 'Automation & Testing',
    items: ['BDD/Gherkin', 'Data-Driven Frameworks', 'Contract Testing', 'axe-core', 'WCAG 2.1', 'UAT', 'Exploratory Testing'],
  },
  {
    label: 'API & Quality',
    items: ['Postman', 'REST APIs', 'JSON', 'XML'],
  },
  {
    label: 'CI/CD & DevOps',
    items: ['Jenkins', 'GitHub Actions', 'Docker', 'Maven', 'Git', 'Linux'],
  },
  {
    label: 'Cloud, Data & Tools',
    items: ['Google Cloud', 'MySQL', 'Jira', 'Redmine', 'Agile/Scrum'],
  },
]

export const techStack = [...new Set(skillGroups.flatMap((group) => group.items))]

export const marqueeItems = techStack

export const experience = [
  {
    title: 'Automation Test Engineer',
    company: 'Tata Consultancy Services (TCS)',
    location: 'Hyderabad, India',
    period: 'March 2022 – Present',
    achievements: [
      'Architected a scalable Playwright (TypeScript) E2E framework with POM, Fixtures, parallel sharding, and Docker — reducing manual effort 30+ hrs/sprint',
      'Integrated Playwright suites into Jenkins CI/CD and GitHub Actions across 3+ environments — 95% automation coverage',
      'Reduced test flakiness by 40% using auto-wait, smart locators, and retry logic',
      'Implemented a11y testing with Playwright + axe-core for WCAG 2.1 compliance across 100K+ user surfaces',
      'Designed and executed 1500+ test cases; resolved 150+ defects via JIRA with zero critical production defects',
      'Mentored 2 junior SDETs on BDD/Gherkin and framework architecture — 20% team productivity boost',
    ],
  },
]

export const projects = [
  {
    id: 'nokia',
    title: 'Nokia – Telecom OSS/BSS',
    category: 'Carrier-Grade Infrastructure',
    period: 'Dec 2023 – Present',
    description:
      'Production-grade Playwright (TypeScript) E2E suite for carrier-grade OSS/BSS infrastructure serving millions of subscribers.',
    technologies: ['Playwright', 'TypeScript', 'Docker', 'Node.js', 'Jenkins', 'GitHub Actions'],
    image: '/work/nokia.png?v=2',
    link: 'https://github.com/sandeepgannamani',
    realtimeTitle: 'How it runs in real time',
    realtimeIntro:
      'When a carrier order is placed, OSS/BSS systems provision network services for millions of subscribers. Quality has to keep up with that live flow — not inspect it after the fact.',
    realtime: [
      {
        title: 'A live order hits the stack',
        text: 'Create, modify and cease journeys move through OSS/BSS screens. The Playwright suite follows the same path a network operator takes, against real environments.',
      },
      {
        title: 'Framework takes the journey',
        text: 'POM pages, reusable Fixtures and smart locators drive the flow. Auto-wait and retries keep the run stable while the UI and APIs settle.',
      },
      {
        title: 'Shards run in parallel',
        text: 'Dockerized workers fan out across 10+ Jenkins nodes and GitHub Actions. Regression that used to take eight hours now finishes in about two.',
      },
      {
        title: 'Signals come back immediately',
        text: 'Allure + HTML reports, traces and a11y (axe-core) results land in CI. Failures are visible before a release can reach production.',
      },
    ],
    outcomes: ['200+ E2E tests', 'Coverage 60% → 85%', 'Zero critical production defects'],
  },
  {
    id: 'gulftainer',
    title: 'Gulftainer Port & Cargo System',
    category: 'UAE Logistics Platform',
    period: 'June 2022 – Nov 2023',
    description:
      'Quality engineering for a port and cargo management system handling high-volume daily transactions across major releases.',
    technologies: ['API Testing', 'Postman', 'SQL', 'JIRA', 'REST APIs'],
    image: '/work/gulftainer.png?v=2',
    link: 'https://github.com/sandeepgannamani',
    realtimeTitle: 'How it runs in real time',
    realtimeIntro:
      'Every container move is a transaction: gate-in, yard, vessel, invoice. The quality loop has to prove those events stay consistent while the port is still running.',
    realtime: [
      {
        title: 'Cargo events fire all day',
        text: 'The platform handles 50K+ SQL transactions and 10K+ API calls daily. Test cycles follow the same create → move → settle path used on the terminal.',
      },
      {
        title: 'APIs and data are checked together',
        text: 'REST payloads are validated in Postman (JSON/XML). SQL checks confirm the yard and billing tables match what the service just wrote.',
      },
      {
        title: 'Release gates stay human-readable',
        text: 'Functional, regression, integration and UAT packs run against each major release, with full traceability from requirement to defect in JIRA.',
      },
      {
        title: 'The terminal stays up',
        text: 'Eight major releases shipped at a 99.5% uptime SLA with zero critical defects — quality sitting inside the live operation, not beside it.',
      },
    ],
    outcomes: ['300+ test cases', '99.5% uptime SLA', 'Zero critical defects across releases'],
  },
]

export const services = [
  {
    title: 'Test Automation Frameworks',
    description: 'Playwright architectures with POM, fixtures, reporting and parallel execution built to last.',
    tech: 'Playwright · TypeScript · Docker',
  },
  {
    title: 'CI/CD Quality Pipelines',
    description: 'Reliable gated pipelines that make quality a release habit, not a late-stage event.',
    tech: 'Jenkins · GitHub Actions · Linux',
  },
  {
    title: 'API & Integration Testing',
    description: 'Contract-aware API coverage for high-volume services, with data integrity you can trust.',
    tech: 'REST · Postman · SQL',
  },
  {
    title: 'Accessibility Testing',
    description: 'WCAG-aligned a11y checks woven into automation so every surface stays inclusive.',
    tech: 'Playwright · axe-core · WCAG 2.1',
  },
  {
    title: 'Playwright Enablement',
    description: 'Hands-on mentoring for teams adopting modern E2E — from locators to architecture.',
    tech: 'BDD · Fixtures · Trace Viewer',
  },
  {
    title: 'Quality Engineering Consulting',
    description: 'Shift-left strategy, coverage models and flakiness reduction for products that cannot fail quietly.',
    tech: 'SDET · Strategy · Mentoring',
  },
]

export const whyWork = [
  { title: 'Engineering + Quality', text: 'Design and automation treated as one craft, not two handoffs.' },
  { title: 'Built around your product', text: 'Frameworks shaped to your domain, not a generic template.' },
  { title: 'Reliable by default', text: 'Stable locators, retries and isolation so suites stay trustworthy.' },
  { title: 'Performance focused', text: 'Parallel sharding and containers that shrink regression from hours to minutes.' },
  { title: 'Interactive when it matters', text: 'Traces, reports and signals that help people act — not just observe.' },
  { title: 'Made for a strong first impression', text: 'Releases that feel finished because quality was never optional.' },
]

export const achievements = [
  { title: 'Triple Star Performer — TCS 2025', detail: 'Recognized in May, October and December' },
  { title: 'ISTQB Certified — Foundation Level', detail: 'International Software Testing Qualifications Board' },
  { title: 'Google Cloud — Associate Cloud Engineer', detail: 'Google Cloud Platform' },
  { title: 'M.Sc. Computer Science — 8.1/10', detail: 'A.B.N & P.R.R College of Science, Kovvur' },
  { title: 'B.Sc. Computer Science — 7.8/10', detail: 'A.B.N & P.R.R College of Science, Kovvur' },
  { title: 'Mentored junior SDETs', detail: '20% team productivity lift through architecture coaching' },
]

export const projectTypes = [
  'Test Automation',
  'Quality Consulting',
  'Framework Design',
  'CI/CD Pipelines',
  'Something else',
]
