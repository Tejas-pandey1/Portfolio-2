import type { EditorState } from './types'

export const BASELINE_CONTENT: Record<string, Record<string, string | number>> = {
  // HEADER
  'header.logo': { text: 'alex.dev', href: '#top' },
  'header.cta': { text: "Let's talk", href: '#contact' },
  'header.nav-0': { text: 'Services', href: '#services' },
  'header.nav-1': { text: 'Work', href: '#work' },
  'header.nav-2': { text: 'About', href: '#about' },
  'header.nav-3': { text: 'Process', href: '#process' },

  // HERO
  'hero.badge': { text: 'Open for new projects — Nov 2026' },
  'hero.title': {
    text: "I build apps, AI tools, websites & games people love.",
  },
  'hero.subtitle': {
    text: "Hey, I'm Alex Morgan — an indie developer who takes ideas from napkin sketch to shipped product. Fast, responsive, and with a little bit of delight baked into every pixel.",
  },
  'hero.cta-primary': { text: 'See my work', href: '#work' },
  'hero.cta-secondary': { text: 'Start a project', href: '#contact' },
  'hero.stat-0': { value: '40+', label: 'Projects shipped' },
  'hero.stat-1': { value: '6 yrs', label: 'Building solo' },
  'hero.stat-2': { value: '250k', label: 'Players & users' },
  'hero.portrait': {
    src: '/images/portrait.png',
    alt: 'Portrait of Alex Morgan',
    width: 640,
    height: 760,
  },
  'hero.sticker-0': { text: 'Game dev' },
  'hero.sticker-1': { text: 'AI magic' },
  'hero.sticker-2': { text: 'Mobile-first' },

  // SKILLS
  'skills.text': {
    text: 'React, Next.js, TypeScript, React Native, OpenAI & LLMs, Node.js, Tailwind CSS, Unity, Phaser, Three.js, PostgreSQL, Figma',
  },

  // SERVICES
  'services.eyebrow': { text: 'What I do' },
  'services.title': { text: 'One dev. Five superpowers.' },
  'services.description': {
    text: 'Whether you need a product, a smart feature, or something just for fun — I design, build, and ship it end to end.',
  },
  'services.card-0': {
    title: 'Apps',
    description: 'Web and mobile apps with clean architecture, real-time data, and interfaces that feel effortless.',
    tags: 'React Native, Next.js, Supabase',
  },
  'services.card-1': {
    title: 'AI integrations',
    description: 'Chatbots, copilots, and smart automations that plug LLMs into your product the right way.',
    tags: 'LLMs, RAG, Agents',
  },
  'services.card-2': {
    title: 'Websites',
    description: 'Fast, SEO-friendly marketing sites and landing pages that turn visitors into customers.',
    tags: 'SEO, CMS, Analytics',
  },
  'services.card-3': {
    title: 'Responsive design',
    description: 'Pixel-tight layouts that look and work beautifully on every screen, from watch to widescreen.',
    tags: 'Mobile-first, A11y, Performance',
  },
  'services.card-4': {
    title: 'Games',
    description: 'Browser and mobile games with juicy game feel, tight controls, and a whole lot of fun.',
    tags: 'Phaser, Unity, Three.js',
  },

  // WORK
  'work.eyebrow': { text: 'Selected work' },
  'work.title': { text: "Things I've shipped lately." },
  'work.description': {
    text: 'A handful of favorite projects — each one a mix of solid engineering, thoughtful design, and a dash of fun.',
  },
  'work.project-0': {
    title: 'Quill AI',
    category: 'AI integration',
    year: '2026',
    description: 'A writing copilot that suggests edits in context, summarizes docs, and learns your tone.',
    result: '12k weekly users',
    stack: 'Next.js, AI SDK, Postgres',
    image: '/images/project-ai.png',
    alt: 'Screenshot of Quill AI',
  },
  'work.project-1': {
    title: 'Hop Hero',
    category: 'Browser game',
    year: '2025',
    description: 'A bouncy platformer with 40 hand-built levels, leaderboards, and buttery 60fps on mobile.',
    result: '180k plays',
    stack: 'Phaser, TypeScript, Supabase',
    image: '/images/project-game.png',
    alt: 'Screenshot of Hop Hero',
  },
  'work.project-2': {
    title: 'Atlas Trips',
    category: 'Mobile app',
    year: '2025',
    description: 'Collaborative trip planner with live maps, shared itineraries, and offline mode.',
    result: '4.8 App Store rating',
    stack: 'React Native, Mapbox, Node',
    image: '/images/project-atlas.png',
    alt: 'Screenshot of Atlas Trips',
  },
  'work.project-3': {
    title: 'Verde Studio',
    category: 'Responsive website',
    year: '2024',
    description: 'E-commerce site for a plant shop — mobile-first, lightning fast, and a joy to browse.',
    result: '+62% conversions',
    stack: 'Next.js, Shopify, Tailwind',
    image: '/images/project-verde.png',
    alt: 'Screenshot of Verde Studio',
  },

  // ABOUT
  'about.eyebrow': { text: 'About me' },
  'about.title': { text: 'Part engineer, part designer, all builder.' },
  'about.paragraph-0': {
    text: "I started making games in my bedroom at 14 and never really stopped building. Today I'm an independent developer helping startups, creators, and small teams turn ideas into products people actually use.",
  },
  'about.paragraph-1': {
    text: "Because I work solo, you get one person who owns the whole thing — design, code, AI, deployment — with no hand-offs and nothing lost in translation. I care about clean code, smooth UX, and building things that last.",
  },
  'about.fact-0': { label: 'Ships fast', text: 'MVPs in weeks, not months.' },
  'about.fact-1': { label: 'Sweats details', text: 'Micro-interactions matter.' },
  'about.fact-2': { label: 'Performance nerd', text: '95+ Lighthouse by default.' },
  'about.fact-3': { label: 'Easy to work with', text: 'Clear updates, zero drama.' },

  // PROCESS
  'process.eyebrow': { text: 'How it works' },
  'process.title': { text: 'From idea to launch in four steps.' },
  'process.description': {
    text: "No black boxes. You always know what's happening, what's next, and what it costs.",
  },
  'process.step-0': {
    title: 'Discover',
    text: 'We chat about goals, users, and what success looks like. I come back with a clear plan and quote.',
  },
  'process.step-1': {
    title: 'Design',
    text: 'Wireframes and clickable prototypes so you can see and feel it before a line of code ships.',
  },
  'process.step-2': {
    title: 'Build',
    text: 'Weekly demos, a live preview link, and steady progress you can track from day one.',
  },
  'process.step-3': {
    title: 'Launch & grow',
    text: 'Deploy, measure, iterate. I stick around to tune, fix, and add the next big thing.',
  },

  // CONTACT
  'contact.badge': { text: "Let's build" },
  'contact.title': { text: "Got an idea? Let's make it real." },
  'contact.description': {
    text: "Apps, AI features, websites, or a game you've always wanted to make — tell me about it. I reply within 24 hours.",
  },
  'contact.email': { text: 'hello@alexmorgan.dev', href: 'mailto:hello@alexmorgan.dev' },
  'contact.social-0': { text: 'GitHub', href: 'https://github.com' },
  'contact.social-1': { text: 'LinkedIn', href: 'https://linkedin.com' },
  'contact.social-2': { text: 'X / Twitter', href: 'https://x.com' },
  'contact.social-3': { text: 'itch.io', href: 'https://itch.io' },

  // FOOTER
  'footer.copyright': { text: '© 2026 Alex Morgan. Built with care (and too much coffee).' },
  'footer.back-to-top': { text: 'Back to top', href: '#top' },
}

export const PROJECT_ASSETS = [
  { name: 'portrait.png', path: '/images/portrait.png' },
  { name: 'project-ai.png', path: '/images/project-ai.png' },
  { name: 'project-atlas.png', path: '/images/project-atlas.png' },
  { name: 'project-game.png', path: '/images/project-game.png' },
  { name: 'project-ledger.png', path: '/images/project-ledger.png' },
  { name: 'project-pulse.png', path: '/images/project-pulse.png' },
  { name: 'project-verde.png', path: '/images/project-verde.png' },
  { name: 'placeholder.jpg', path: '/placeholder.jpg' },
  { name: 'placeholder-user.jpg', path: '/placeholder-user.jpg' },
  { name: 'placeholder-logo.png', path: '/placeholder-logo.png' },
  { name: 'apple-icon.png', path: '/apple-icon.png' },
  { name: 'icon-light-32x32.png', path: '/icon-light-32x32.png' },
  { name: 'icon-dark-32x32.png', path: '/icon-dark-32x32.png' },
]

export function createBaselineState(): EditorState {
  return {
    version: 1,
    content: JSON.parse(JSON.stringify(BASELINE_CONTENT)),
    assets: [],
    customCss: {},
  }
}
