/**
 * Projects shown on the portfolio.
 *
 * 3 Main Flagship Projects (Featured Tier with full live device mockups)
 * + Secondary Archive (Expandable "See More Work" grid).
 */

export const FEATURED_PROJECTS = [
  {
    id: 'jetty',
    name: 'Jetty',
    status: 'Live in Production',
    platform: 'Web · Mobile First',
    year: '2026',
    summary:
      'Campus marketplace, housing directory, and services platform built for Nigeria Maritime University students.',
    built: [
      'Off-campus student lodge directory with direct caretaker WhatsApp verification',
      'Student marketplace for cadet action rigs, boots, and hostel supplies',
      'Campus service booking for uniform alterations, laundry, and grooming',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    links: [
      {
        label: 'Visit Jetty',
        url: 'https://jetty.francisnaga.site',
        primary: true,
      },
      {
        label: 'GitHub',
        url: 'https://github.com/francisnaga/Island-Hub',
      },
    ],
    screens: [
      {
        src: '/projects/jetty/jetty-nmu-marketplace.webp',
        alt: 'Jetty live mobile marketplace screen with student listings and search',
      },
      {
        src: '/projects/jetty/jetty-nmu-vendor.webp',
        alt: 'Jetty verified vendor storefront with direct WhatsApp messaging button',
      },
    ],
  },
  {
    id: 'inkto',
    name: 'Inkto',
    wordmark: 'inkto',
    status: 'Live on Google Play',
    platform: 'Android · Native Kotlin',
    year: '2026',
    summary:
      'Mobile utility that scans physical documents, records voice dictation, and generates structured editable text.',
    built: [
      'On-device document scanning with perspective edge correction and OCR',
      'Voice note recording with speech transcription and uncertainty review',
      'Matter filing system with one-tap export to PDF and DOCX',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'ML Kit', 'Supabase'],
    links: [
      {
        label: 'Get on Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.inkto.app',
        primary: true,
      },
      {
        label: 'GitHub',
        url: 'https://github.com/francisnaga/Inkto-app',
      },
    ],
    screens: [
      {
        src: '/projects/inkto/inkto-welcome.webp',
        alt: 'Inkto welcome screen: The transcription engine for legal minds',
      },
      {
        src: '/projects/inkto/inkto-workspace.webp',
        alt: 'Inkto workspace sign-in and note transcription view',
      },
    ],
  },
  {
    id: 'cemguard',
    name: 'CemGuard',
    status: 'Industrial IoT Prototype',
    platform: 'Web · Physics Simulation',
    year: '2026',
    summary:
      'Predictive maintenance and reliability decision-support platform for heavy continuous-process plants and marine engineering.',
    built: [
      'Physics-engine driven 3D SVG digital twins mathematically bound to live sensor telemetry',
      'Weibull failure distribution modeling linking mechanical stress to failure probability',
      'Dynamic financial risk translation quantifying plant downtime exposure at ₦54M/hour',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Zustand', 'Supabase'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/francisnaga/CemGuard',
        primary: true,
      },
    ],
    screens: [
      {
        src: '/projects/cemguard/cemguard-dashboard.webp',
        alt: 'CemGuard fleet health, OEE monitoring, and active risk telemetry',
      },
      {
        src: '/projects/cemguard/cemguard-simulator.webp',
        alt: 'CemGuard physics simulation engine, live mass flow, and throughput dynamics',
      },
    ],
  },
];

export const OTHER_PROJECTS = [
  {
    id: 'invoiceflow',
    name: 'InvoiceFlow (NCB)',
    category: 'Fintech & Invoicing',
    year: '2026',
    summary:
      'Automated invoicing and client management suite built for Nigerian freelancers and small businesses.',
    highlights:
      'Integrated Paystack checkout, automated VAT/WHT tax compliance, and instant WhatsApp invoice delivery.',
    stack: ['Next.js', 'TypeScript', 'Paystack API', 'Tailwind CSS'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/francisnaga/INVOICEFLOW',
      },
    ],
  },
  {
    id: 'civictrack',
    name: 'CivicTrack',
    category: 'Civic Tech & Public Works',
    year: '2026',
    summary:
      'Smart municipal complaint and issue reporting platform connecting citizens directly with response teams.',
    highlights:
      'Geotagged infrastructure issue submission, automated severity ranking, and public resolution timelines.',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    links: [
      {
        label: 'Source Code',
        url: 'https://github.com/francisnaga',
      },
    ],
  },
  {
    id: 'recall',
    name: 'Recall',
    category: 'EdTech & Learning',
    year: '2026',
    summary:
      'Offline-first learning and engineering exam revision platform built for students.',
    highlights:
      'FastAPI backend with Next.js PWA, active recall revision decks, and client-side caching for low-connectivity environments.',
    stack: ['Next.js PWA', 'FastAPI', 'Python', 'PostgreSQL'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/BuildItt-Inc/definam-pwa',
      },
    ],
  },
  {
    id: 'metamask-sim',
    name: 'Metamask Simulator',
    category: 'Web3 & Simulation',
    year: '2026',
    summary:
      'Mobile-first crypto wallet simulator with multi-chain asset and treasury management.',
    highlights:
      'Multi-chain wallet address generator, ERC-20 internal transfer sandbox, and realistic gas fee estimation.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/francisnaga/Metamask-Simulator',
      },
    ],
  },
  {
    id: 'coursemate',
    name: 'Coursemate',
    category: 'Academic Companion',
    year: '2026',
    summary:
      'Lecture notes, timetable organizer, and academic companion built for engineering students at NMU.',
    highlights:
      'Offline semester syllabus organizer, GPA calculator, and course material distribution repository.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/francisnaga/Coursemate',
      },
    ],
  },
];

export const CAPABILITIES = [
  {
    num: '01',
    title: 'Production Software Engineering',
    desc: 'Native Android applications (Kotlin, Jetpack Compose, Room DB, ML Kit) and high-performance full-stack web platforms (Next.js 16, React 19, TypeScript, Supabase). Engineered for sub-second load times and production reliability.',
    tags: ['Android Native', 'Next.js 16', 'TypeScript', 'Supabase', 'Room DB', 'Turbopack'],
  },
  {
    num: '02',
    title: 'Brand Identity & Visual Packaging',
    desc: 'Distinctive brand marks, bespoke logos, design tokens, typography systems, and marketing collateral. Creating cohesive, high-trust visual packaging that makes emerging businesses look established, premium, and authoritative.',
    tags: ['Logo Design', 'Visual Systems', 'Design Tokens', 'Brand Packaging', 'Figma'],
  },
  {
    num: '03',
    title: 'Search & Local Discovery',
    desc: 'Technical SEO, structured JSON-LD schema markup, Google Search Console indexing, and verified Google Business Profile infrastructure designed to dominate local search results and Google Maps.',
    tags: ['Google Business Profile', 'Technical SEO', 'Schema Markup', 'Search Console', 'Local SEO'],
  },
  {
    num: '04',
    title: 'Customer Acquisition & Ad Funnels',
    desc: 'Direct-response paid advertising campaigns (Meta & Google Ads), conversion-focused landing pages, server-side CAPI tracking, and automated WhatsApp sales qualification pipelines built to drive revenue, not vanity traffic.',
    tags: ['Meta & Google Ads', 'Conversion Funnels', 'WhatsApp Routing', 'Ad Attribution', 'CRO'],
  },
];

export const PROJECTS = FEATURED_PROJECTS;
