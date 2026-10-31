/**
 * Projects shown on the homepage.
 *
 * Direct, minimal, and focused on production software built by Francis Naga.
 */
export const PROJECTS = [
  {
    id: 'jetty',
    name: 'Jetty',
    status: 'Campus Platform',
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
        label: 'View Source on GitHub',
        url: 'https://github.com/francisnaga/Island-Hub',
        primary: true,
      },
    ],
    screens: [
      {
        src: '/projects/jetty/jetty-home.webp',
        alt: 'Jetty home screen showing NMU campus marketplace and categories',
        statusLight: true,
      },
      {
        src: '/projects/jetty/jetty-lodge.webp',
        alt: 'Jetty student lodge screen showing off-campus room listings and WhatsApp inspection',
        statusLight: true,
      },
    ],
  },
  {
    id: 'inkto',
    name: 'Inkto',
    wordmark: 'inkto',
    status: 'Live on Google Play',
    platform: 'Android',
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
        label: 'Get it on Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.inkto.app',
        primary: true,
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
        statusLight: true,
      },
    ],
  },
];
