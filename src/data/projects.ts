export interface Project {
  title: string;
  slug: string;
  description: string;
  badges: string[];
}

export const projects: Project[] = [
  {
    title: 'Cartini',
    slug: 'cartini',
    description: 'A Chrome extension and web app for wishlists and price tracking. Designed, built, and launched end-to-end.',
    badges: ['Product', 'Design', 'Development', 'Launch'],
  },
  {
    title: 'Summ',
    slug: 'summ',
    description: 'Operating system reset for a scaling crypto tax startup. Strategy, systems, and AI-augmented workflows across finance, support, and ops.',
    badges: ['Strategy', 'Operations', 'AI'],
  },
  {
    title: 'Dayzie',
    slug: 'dayzie',
    description: 'iOS countdown timer app. Designed and built in SwiftUI — from concept through App Store.',
    badges: ['Product', 'SwiftUI', 'Design'],
  },
  {
    title: 'Junction',
    slug: 'junction',
    description: 'macOS capture and AI organisation tool. Supabase backend, Claude API integration, native SwiftUI interface.',
    badges: ['Product', 'AI', 'macOS'],
  },
  {
    title: 'Nomi',
    slug: 'nomi',
    description: 'macOS AI desktop companion with animated avatar. Native speech, transparent floating window, always-on assistant.',
    badges: ['Product', 'AI', 'SwiftUI'],
  },
];
