/**
 * Projects shown on the homepage.
 *
 * To add a new project, copy the Inkto object below, change the values and
 * drop its screenshots into /public/projects/<id>/. Projects render in the
 * order they appear in this array. Leave `screens` empty if you have no
 * screenshots yet; the card will still look complete.
 */
export const PROJECTS = [
  {
    id: 'inkto',
    name: 'Inkto',
    wordmark: 'inkto',
    status: 'Live on Google Play',
    platform: 'Android',
    year: '2026',
    summary:
      'The transcription engine for legal minds. Inkto turns paper documents, handwritten notes and voice dictation into clean, structured text you can review, edit and export in seconds.',
    built: [
      'Native Android app written in Kotlin with Jetpack Compose',
      'Document scanning with ML Kit, plus audio recording and file upload',
      'AI transcription that flags uncertain words for a human to review',
      'Export to PDF, DOCX and plain text, organised into matters',
      'Google Sign-In, Supabase auth and credits through Play Billing',
    ],
    stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Hilt', 'WorkManager', 'Supabase', 'ML Kit'],
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
