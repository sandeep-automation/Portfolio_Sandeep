import { resumeFileName, resumePublicPath } from 'virtual:resume'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const personalInfo = {
  name: 'Gannamani Sandeep',
  firstName: 'Sandeep',
  logo: 'SANDEEP',
  role: 'Senior Automation Engineer / SDET',
  location: 'Hyderabad, India',
  email: 'sandeepgannamani55@gmail.com',
  phone: '+91-9502228584',
  linkedin: 'https://www.linkedin.com/in/sandeep-gannamani-5ab26a1ba',
  github: 'https://github.com/sandeep-automation',
  experienceYears: '4+',
  resumePath: asset(resumePublicPath),
  resumeFileName,
  seoTitle: 'Gannamani Sandeep — Senior Automation Engineer / SDET',
  seoDescription:
    'Senior Automation Engineer building premium test frameworks, interactive quality pipelines and reliable digital products.',
}

export const navLinks: Array<{ label: string; href: string; download?: string }> = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Resume', href: personalInfo.resumePath, download: personalInfo.resumeFileName },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  kicker: "HI, I'M SANDEEP",
  title: ['AUTOMATION', 'ENGINEER'] as const,
  supportEyebrow: 'I TURN TESTS INTO TRUST',
  support:
    'Playwright frameworks that cut 30+ hours of manual work a sprint, shrink regression from hours to minutes, and hold in production.',
}

export const about = {
  title: ['What the work', 'returns.'] as const,
}

export const aboutSummary = `${personalInfo.experienceYears} years in Playwright (TypeScript/JavaScript). E2E frameworks serving 100K+ users — 95% automation coverage, 30+ hours saved every sprint, and zero critical production defects.`

export const aboutPills = [
  { title: 'Playwright', detail: 'E2E & API' },
  { title: 'CI / CD', detail: 'Jenkins · GHA' },
  { title: 'Quality', detail: 'SDET' },
]

export const impactHighlights = [
  { kicker: '30+ hrs', text: 'Manual testing effort removed from every sprint — people ship, they do not retest the same path.' },
  { kicker: '8h → 2h', text: 'Carrier regression while the network is still live. Parallel shards, not overnight waits.' },
  { kicker: '60% → 85%', text: 'Nokia OSS/BSS coverage without extra headcount. Quality scaled with the product.' },
  { kicker: 'Zero', text: 'Critical production defects across live releases. Failures die in CI, not in front of users.' },
  { kicker: '10+ nodes', text: 'Dockerized Playwright shards across Jenkins and GitHub Actions. The suite scales with the release, not the headcount.' },
  { kicker: '150+', text: 'Defects caught in JIRA before 100K+ users ever saw them. The operator path that failed is the one engineering opens.' },
  { kicker: '50K+', text: 'SQL transactions a day on Gulftainer, plus 10K+ API calls. Gate, yard and invoice stay one story while cargo is still moving.' },
  { kicker: '99.5%', text: 'Uptime SLA across 8 major port releases. Quality sat inside the live operation, not beside it.' },
]

export const stats = [
  { label: 'Automation Coverage', value: 95, suffix: '%' },
  { label: 'Test Cases Executed', value: 1500, suffix: '+' },
  { label: 'Manual Hours Saved / Sprint', value: 30, suffix: '+' },
  { label: 'Flakiness Reduced', value: 40, suffix: '%' },
  { label: 'Faster Regression', value: 50, suffix: '%' },
  { label: 'Critical Prod Defects', value: 0, suffix: '' },
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
      'Cut carrier-grade regression from ~8 hours to ~2 hours with Dockerized parallel shards across 10+ Jenkins nodes',
      'Integrated Playwright suites into Jenkins CI/CD and GitHub Actions across 3+ environments — 95% automation coverage',
      'Reduced test flakiness by 40% using auto-wait, smart locators, and retry logic — red builds mean real defects',
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
    image: `${asset('work/nokia.png')}?v=2`,
    link: personalInfo.github,
    realtimeTitle: 'How it runs in real time',
    realtimeIntro:
      'When a carrier order is placed, OSS/BSS systems provision network services for millions of subscribers. Quality has to keep up with that live flow — not inspect it after the fact.',
    realtime: [
      {
        moment: 'On the live stack',
        title: 'A live order hits OSS/BSS',
        text: 'Create, modify and cease journeys move through the same screens a network operator uses. The Playwright suite starts from that real order, against real environments — not a mock.',
      },
      {
        moment: 'Seconds later',
        title: 'The framework takes the same journey',
        text: 'POM pages, reusable Fixtures and smart locators drive the flow. Auto-wait and retries keep the run stable while the UI and APIs finish provisioning.',
      },
      {
        moment: 'On the same order',
        title: 'UI and APIs are proven together',
        text: 'The suite does not stop at the screen. REST calls behind create / modify / cease are asserted in the same run, so the UI and the service layer cannot drift apart.',
      },
      {
        moment: 'On those live surfaces',
        title: 'Accessibility is checked in the flow',
        text: 'Playwright + axe-core scans the operator screens for WCAG 2.1 while the journey is still moving. Inclusion is a release signal, not a later audit.',
      },
      {
        moment: 'While the network is still moving',
        title: 'Shards run in parallel',
        text: 'Dockerized workers fan out across 10+ Jenkins nodes and GitHub Actions. Regression that used to take eight hours now finishes in about two — while the carrier stack is still live.',
      },
      {
        moment: 'If a step blinks',
        title: 'Flakes are absorbed, not ignored',
        text: 'Smart locators, auto-wait and retry logic hold the run when the UI settles late. Flakiness dropped 40%, so a red build still means a real defect.',
      },
      {
        moment: 'Before a release can ship',
        title: 'Signals come back immediately',
        text: 'Allure + HTML reports, traces and a11y results land in CI. Failures are visible before that order’s change can reach production.',
      },
      {
        moment: 'If something is actually broken',
        title: 'The defect is in JIRA before production',
        text: 'Traces, screenshots and environment tags travel with the ticket. The operator path that failed is the one engineering opens — not a reconstructed guess.',
      },
    ],
    outcomes: ['200+ E2E tests', 'Coverage 60% → 85%', '30+ hrs saved / sprint', '8h → 2h regression', 'Zero critical production defects'],
  },
  {
    id: 'gulftainer',
    title: 'Gulftainer Port & Cargo System',
    category: 'UAE Logistics Platform',
    period: 'June 2022 – Nov 2023',
    description:
      'Quality engineering for a port and cargo management system handling high-volume daily transactions across major releases.',
    technologies: ['API Testing', 'Postman', 'SQL', 'JIRA', 'REST APIs'],
    image: `${asset('work/gulftainer.png')}?v=2`,
    link: personalInfo.github,
    realtimeTitle: 'How it runs in real time',
    realtimeIntro:
      'Every container move is a transaction: gate-in, yard, vessel, invoice. The quality loop has to prove those events stay consistent while the port is still running.',
    realtime: [
      {
        moment: 'On the terminal',
        title: 'Cargo events fire all day',
        text: 'The platform handles 50K+ SQL transactions and 10K+ API calls daily. Test cycles follow the same create → move → settle path used at the gate, not a staged copy of it.',
      },
      {
        moment: 'As the box is handled',
        title: 'Gate-in, yard, vessel, invoice stay one story',
        text: 'Each move is a live transaction. The quality loop follows that chain in order, so a container cannot be “in the yard” on the screen and missing from billing.',
      },
      {
        moment: 'As the data is written',
        title: 'APIs and tables are checked together',
        text: 'REST payloads are validated in Postman (JSON/XML). SQL checks confirm the yard and billing tables match what the service just wrote — in the same moment the cargo moved.',
      },
      {
        moment: 'Across services',
        title: 'Integration is proven while the port is open',
        text: 'Functional and integration packs run against the live contracts between gate, yard and invoice. A break in one service cannot hide behind a green screen in another.',
      },
      {
        moment: 'At each release gate',
        title: 'Humans can still read the trail',
        text: 'Functional, regression, integration and UAT packs run against each major release, with full traceability from requirement to defect in JIRA.',
      },
      {
        moment: 'When a check fails',
        title: 'The live event is attached to the ticket',
        text: 'JIRA gets the payload, the SQL mismatch and the journey that produced it. Engineering debugs the same container move the terminal just ran.',
      },
      {
        moment: 'While cargo keeps moving',
        title: 'The terminal stays up',
        text: 'Eight major releases shipped at a 99.5% uptime SLA with zero critical defects — quality sitting inside the live operation, not beside it.',
      },
    ],
    outcomes: ['300+ test cases', '99.5% uptime SLA', 'Manual cycles replaced by API + SQL gates', 'Zero critical defects across releases'],
  },
]

export const servicesSection = {
  eyebrow: 'On a product team',
  title: ['What I bring', 'to the squad.'] as const,
}

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
  {
    title: 'Quality sits in the pipeline',
    text: 'Playwright suites gate Jenkins and GitHub Actions across 3+ environments. A release does not move until the suite has spoken.',
  },
  {
    title: 'Accessibility on the live path',
    text: 'Playwright + axe-core for WCAG 2.1 across 100K+ user surfaces. Inclusion is a release signal, not a later audit.',
  },
  {
    title: 'The failed path is the ticket',
    text: 'Allure, HTML reports and traces land in JIRA with the operator journey that broke. Engineering opens the same path — not a reconstructed guess.',
  },
  {
    title: 'People get better too',
    text: 'Mentored 2 junior SDETs on architecture and BDD — 20% more team throughput.',
  },
]

export const achievements = [
  { title: 'Triple Star Performer — TCS 2025', detail: 'Recognized in May, October and December' },
  { title: 'ISTQB Certified — Foundation Level', detail: 'International Software Testing Qualifications Board' },
  { title: 'Google Cloud — Associate Cloud Engineer', detail: 'Google Cloud Platform' },
  { title: 'M.Sc. Computer Science — 8.1/10', detail: 'A.B.N & P.R.R College of Science, Kovvur' },
  { title: 'B.Sc. Computer Science — 7.8/10', detail: 'A.B.N & P.R.R College of Science, Kovvur' },
  { title: '99.5% uptime SLA — 8 major releases', detail: 'Gulftainer port & cargo stayed live. Quality sat inside the operation, not beside it.' },
]

