import type { ElementSchema } from './types'

export const ELEMENT_SCHEMAS: Record<string, ElementSchema> = {
  // ===== HEADER =====
  'header.logo': {
    id: 'header.logo',
    name: 'Logo Text',
    type: 'link',
    section: 'Header',
    sectionId: 'header',
    properties: [
      { key: 'text', label: 'Logo Text', type: 'text', group: 'Content' },
      { key: 'href', label: 'Link URL', type: 'link', group: 'Content' },
    ],
  },
  'header.cta': {
    id: 'header.cta',
    name: 'Header CTA Button',
    type: 'button',
    section: 'Header',
    sectionId: 'header',
    properties: [
      { key: 'text', label: 'Button Label', type: 'text', group: 'Content' },
      { key: 'href', label: 'Link URL', type: 'link', group: 'Content' },
    ],
  },
  'header.nav-0': { id: 'header.nav-0', name: 'Nav: Services', type: 'nav-item', section: 'Header', sectionId: 'header', properties: [
    { key: 'text', label: 'Label', type: 'text', group: 'Content' },
    { key: 'href', label: 'Link URL', type: 'link', group: 'Content' },
  ]},
  'header.nav-1': { id: 'header.nav-1', name: 'Nav: Work', type: 'nav-item', section: 'Header', sectionId: 'header', properties: [
    { key: 'text', label: 'Label', type: 'text', group: 'Content' },
    { key: 'href', label: 'Link URL', type: 'link', group: 'Content' },
  ]},
  'header.nav-2': { id: 'header.nav-2', name: 'Nav: About', type: 'nav-item', section: 'Header', sectionId: 'header', properties: [
    { key: 'text', label: 'Label', type: 'text', group: 'Content' },
    { key: 'href', label: 'Link URL', type: 'link', group: 'Content' },
  ]},
  'header.nav-3': { id: 'header.nav-3', name: 'Nav: Process', type: 'nav-item', section: 'Header', sectionId: 'header', properties: [
    { key: 'text', label: 'Label', type: 'text', group: 'Content' },
    { key: 'href', label: 'Link URL', type: 'link', group: 'Content' },
  ]},

  // ===== HERO =====
  'hero.badge': {
    id: 'hero.badge',
    name: 'Availability Badge',
    type: 'text',
    section: 'Hero',
    sectionId: 'hero',
    properties: [
      { key: 'text', label: 'Badge Text', type: 'text', group: 'Content' },
    ],
  },
  'hero.title': {
    id: 'hero.title',
    name: 'Hero Heading',
    type: 'heading',
    section: 'Hero',
    sectionId: 'hero',
    properties: [
      { key: 'text', label: 'Heading Text', type: 'text', group: 'Content' },
    ],
  },
  'hero.subtitle': {
    id: 'hero.subtitle',
    name: 'Hero Description',
    type: 'paragraph',
    section: 'Hero',
    sectionId: 'hero',
    properties: [
      { key: 'text', label: 'Description', type: 'text', group: 'Content' },
    ],
  },
  'hero.cta-primary': {
    id: 'hero.cta-primary',
    name: 'Primary CTA Button',
    type: 'button',
    section: 'Hero',
    sectionId: 'hero',
    properties: [
      { key: 'text', label: 'Button Label', type: 'text', group: 'Content' },
      { key: 'href', label: 'Link URL', type: 'link', group: 'Content' },
    ],
  },
  'hero.cta-secondary': {
    id: 'hero.cta-secondary',
    name: 'Secondary CTA Button',
    type: 'button',
    section: 'Hero',
    sectionId: 'hero',
    properties: [
      { key: 'text', label: 'Button Label', type: 'text', group: 'Content' },
      { key: 'href', label: 'Link URL', type: 'link', group: 'Content' },
    ],
  },
  'hero.stat-0': { id: 'hero.stat-0', name: 'Stat 1 Value', type: 'stat', section: 'Hero', sectionId: 'hero', properties: [
    { key: 'value', label: 'Value', type: 'text', group: 'Content' },
    { key: 'label', label: 'Label', type: 'text', group: 'Content' },
  ]},
  'hero.stat-1': { id: 'hero.stat-1', name: 'Stat 2 Value', type: 'stat', section: 'Hero', sectionId: 'hero', properties: [
    { key: 'value', label: 'Value', type: 'text', group: 'Content' },
    { key: 'label', label: 'Label', type: 'text', group: 'Content' },
  ]},
  'hero.stat-2': { id: 'hero.stat-2', name: 'Stat 3 Value', type: 'stat', section: 'Hero', sectionId: 'hero', properties: [
    { key: 'value', label: 'Value', type: 'text', group: 'Content' },
    { key: 'label', label: 'Label', type: 'text', group: 'Content' },
  ]},
  'hero.portrait': {
    id: 'hero.portrait',
    name: 'Portrait Image',
    type: 'image',
    section: 'Hero',
    sectionId: 'hero',
    properties: [
      { key: 'src', label: 'Image Source', type: 'image', group: 'Media' },
      { key: 'alt', label: 'Alt Text', type: 'text', group: 'Media' },
      { key: 'width', label: 'Width', type: 'number', group: 'Media', unit: 'px' },
      { key: 'height', label: 'Height', type: 'number', group: 'Media', unit: 'px' },
    ],
  },
  'hero.sticker-0': { id: 'hero.sticker-0', name: 'Sticker: Game dev', type: 'sticker', section: 'Hero', sectionId: 'hero', properties: [
    { key: 'text', label: 'Label', type: 'text', group: 'Content' },
  ]},
  'hero.sticker-1': { id: 'hero.sticker-1', name: 'Sticker: AI magic', type: 'sticker', section: 'Hero', sectionId: 'hero', properties: [
    { key: 'text', label: 'Label', type: 'text', group: 'Content' },
  ]},
  'hero.sticker-2': { id: 'hero.sticker-2', name: 'Sticker: Mobile-first', type: 'sticker', section: 'Hero', sectionId: 'hero', properties: [
    { key: 'text', label: 'Label', type: 'text', group: 'Content' },
  ]},

  // ===== SKILL MARQUEE =====
  'skills.text': {
    id: 'skills.text',
    name: 'Skills List',
    type: 'text',
    section: 'Skills Marquee',
    sectionId: 'skills',
    properties: [
      { key: 'text', label: 'Skills (comma-separated)', type: 'text', group: 'Content' },
    ],
  },

  // ===== SERVICES =====
  'services.eyebrow': {
    id: 'services.eyebrow',
    name: 'Services Eyebrow',
    type: 'text',
    section: 'Services',
    sectionId: 'services',
    properties: [{ key: 'text', label: 'Eyebrow Text', type: 'text', group: 'Content' }],
  },
  'services.title': {
    id: 'services.title',
    name: 'Services Heading',
    type: 'heading',
    section: 'Services',
    sectionId: 'services',
    properties: [{ key: 'text', label: 'Heading Text', type: 'text', group: 'Content' }],
  },
  'services.description': {
    id: 'services.description',
    name: 'Services Description',
    type: 'paragraph',
    section: 'Services',
    sectionId: 'services',
    properties: [{ key: 'text', label: 'Description', type: 'text', group: 'Content' }],
  },
  'services.card-0': { id: 'services.card-0', name: 'Service: Apps', type: 'card', section: 'Services', sectionId: 'services', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'description', label: 'Description', type: 'text', group: 'Content' },
    { key: 'tags', label: 'Tags (comma-separated)', type: 'text', group: 'Content' },
  ]},
  'services.card-1': { id: 'services.card-1', name: 'Service: AI integrations', type: 'card', section: 'Services', sectionId: 'services', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'description', label: 'Description', type: 'text', group: 'Content' },
    { key: 'tags', label: 'Tags (comma-separated)', type: 'text', group: 'Content' },
  ]},
  'services.card-2': { id: 'services.card-2', name: 'Service: Websites', type: 'card', section: 'Services', sectionId: 'services', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'description', label: 'Description', type: 'text', group: 'Content' },
    { key: 'tags', label: 'Tags (comma-separated)', type: 'text', group: 'Content' },
  ]},
  'services.card-3': { id: 'services.card-3', name: 'Service: Responsive design', type: 'card', section: 'Services', sectionId: 'services', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'description', label: 'Description', type: 'text', group: 'Content' },
    { key: 'tags', label: 'Tags (comma-separated)', type: 'text', group: 'Content' },
  ]},
  'services.card-4': { id: 'services.card-4', name: 'Service: Games', type: 'card', section: 'Services', sectionId: 'services', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'description', label: 'Description', type: 'text', group: 'Content' },
    { key: 'tags', label: 'Tags (comma-separated)', type: 'text', group: 'Content' },
  ]},

  // ===== SELECTED WORK =====
  'work.eyebrow': { id: 'work.eyebrow', name: 'Work Eyebrow', type: 'text', section: 'Selected Work', sectionId: 'work', properties: [
    { key: 'text', label: 'Eyebrow Text', type: 'text', group: 'Content' },
  ]},
  'work.title': { id: 'work.title', name: 'Work Heading', type: 'heading', section: 'Selected Work', sectionId: 'work', properties: [
    { key: 'text', label: 'Heading Text', type: 'text', group: 'Content' },
  ]},
  'work.description': { id: 'work.description', name: 'Work Description', type: 'paragraph', section: 'Selected Work', sectionId: 'work', properties: [
    { key: 'text', label: 'Description', type: 'text', group: 'Content' },
  ]},
  'work.project-0': { id: 'work.project-0', name: 'Project: Quill AI', type: 'project', section: 'Selected Work', sectionId: 'work', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'category', label: 'Category', type: 'text', group: 'Content' },
    { key: 'year', label: 'Year', type: 'text', group: 'Content' },
    { key: 'description', label: 'Description', type: 'text', group: 'Content' },
    { key: 'result', label: 'Result Badge', type: 'text', group: 'Content' },
    { key: 'stack', label: 'Stack (comma-separated)', type: 'text', group: 'Content' },
    { key: 'image', label: 'Project Image', type: 'image', group: 'Media' },
    { key: 'alt', label: 'Alt Text', type: 'text', group: 'Media' },
  ]},
  'work.project-1': { id: 'work.project-1', name: 'Project: Hop Hero', type: 'project', section: 'Selected Work', sectionId: 'work', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'category', label: 'Category', type: 'text', group: 'Content' },
    { key: 'year', label: 'Year', type: 'text', group: 'Content' },
    { key: 'description', label: 'Description', type: 'text', group: 'Content' },
    { key: 'result', label: 'Result Badge', type: 'text', group: 'Content' },
    { key: 'stack', label: 'Stack (comma-separated)', type: 'text', group: 'Content' },
    { key: 'image', label: 'Project Image', type: 'image', group: 'Media' },
    { key: 'alt', label: 'Alt Text', type: 'text', group: 'Media' },
  ]},
  'work.project-2': { id: 'work.project-2', name: 'Project: Atlas Trips', type: 'project', section: 'Selected Work', sectionId: 'work', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'category', label: 'Category', type: 'text', group: 'Content' },
    { key: 'year', label: 'Year', type: 'text', group: 'Content' },
    { key: 'description', label: 'Description', type: 'text', group: 'Content' },
    { key: 'result', label: 'Result Badge', type: 'text', group: 'Content' },
    { key: 'stack', label: 'Stack (comma-separated)', type: 'text', group: 'Content' },
    { key: 'image', label: 'Project Image', type: 'image', group: 'Media' },
    { key: 'alt', label: 'Alt Text', type: 'text', group: 'Media' },
  ]},
  'work.project-3': { id: 'work.project-3', name: 'Project: Verde Studio', type: 'project', section: 'Selected Work', sectionId: 'work', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'category', label: 'Category', type: 'text', group: 'Content' },
    { key: 'year', label: 'Year', type: 'text', group: 'Content' },
    { key: 'description', label: 'Description', type: 'text', group: 'Content' },
    { key: 'result', label: 'Result Badge', type: 'text', group: 'Content' },
    { key: 'stack', label: 'Stack (comma-separated)', type: 'text', group: 'Content' },
    { key: 'image', label: 'Project Image', type: 'image', group: 'Media' },
    { key: 'alt', label: 'Alt Text', type: 'text', group: 'Media' },
  ]},

  // ===== ABOUT =====
  'about.eyebrow': { id: 'about.eyebrow', name: 'About Eyebrow', type: 'text', section: 'About', sectionId: 'about', properties: [
    { key: 'text', label: 'Eyebrow Text', type: 'text', group: 'Content' },
  ]},
  'about.title': { id: 'about.title', name: 'About Heading', type: 'heading', section: 'About', sectionId: 'about', properties: [
    { key: 'text', label: 'Heading Text', type: 'text', group: 'Content' },
  ]},
  'about.paragraph-0': { id: 'about.paragraph-0', name: 'About Paragraph 1', type: 'paragraph', section: 'About', sectionId: 'about', properties: [
    { key: 'text', label: 'Paragraph Text', type: 'text', group: 'Content' },
  ]},
  'about.paragraph-1': { id: 'about.paragraph-1', name: 'About Paragraph 2', type: 'paragraph', section: 'About', sectionId: 'about', properties: [
    { key: 'text', label: 'Paragraph Text', type: 'text', group: 'Content' },
  ]},
  'about.fact-0': { id: 'about.fact-0', name: 'Fact: Ships fast', type: 'fact', section: 'About', sectionId: 'about', properties: [
    { key: 'label', label: 'Label', type: 'text', group: 'Content' },
    { key: 'text', label: 'Description', type: 'text', group: 'Content' },
  ]},
  'about.fact-1': { id: 'about.fact-1', name: 'Fact: Sweats details', type: 'fact', section: 'About', sectionId: 'about', properties: [
    { key: 'label', label: 'Label', type: 'text', group: 'Content' },
    { key: 'text', label: 'Description', type: 'text', group: 'Content' },
  ]},
  'about.fact-2': { id: 'about.fact-2', name: 'Fact: Performance nerd', type: 'fact', section: 'About', sectionId: 'about', properties: [
    { key: 'label', label: 'Label', type: 'text', group: 'Content' },
    { key: 'text', label: 'Description', type: 'text', group: 'Content' },
  ]},
  'about.fact-3': { id: 'about.fact-3', name: 'Fact: Easy to work with', type: 'fact', section: 'About', sectionId: 'about', properties: [
    { key: 'label', label: 'Label', type: 'text', group: 'Content' },
    { key: 'text', label: 'Description', type: 'text', group: 'Content' },
  ]},

  // ===== PROCESS =====
  'process.eyebrow': { id: 'process.eyebrow', name: 'Process Eyebrow', type: 'text', section: 'Process', sectionId: 'process', properties: [
    { key: 'text', label: 'Eyebrow Text', type: 'text', group: 'Content' },
  ]},
  'process.title': { id: 'process.title', name: 'Process Heading', type: 'heading', section: 'Process', sectionId: 'process', properties: [
    { key: 'text', label: 'Heading Text', type: 'text', group: 'Content' },
  ]},
  'process.description': { id: 'process.description', name: 'Process Description', type: 'paragraph', section: 'Process', sectionId: 'process', properties: [
    { key: 'text', label: 'Description', type: 'text', group: 'Content' },
  ]},
  'process.step-0': { id: 'process.step-0', name: 'Step: Discover', type: 'step', section: 'Process', sectionId: 'process', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'text', label: 'Description', type: 'text', group: 'Content' },
  ]},
  'process.step-1': { id: 'process.step-1', name: 'Step: Design', type: 'step', section: 'Process', sectionId: 'process', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'text', label: 'Description', type: 'text', group: 'Content' },
  ]},
  'process.step-2': { id: 'process.step-2', name: 'Step: Build', type: 'step', section: 'Process', sectionId: 'process', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'text', label: 'Description', type: 'text', group: 'Content' },
  ]},
  'process.step-3': { id: 'process.step-3', name: 'Step: Launch & grow', type: 'step', section: 'Process', sectionId: 'process', properties: [
    { key: 'title', label: 'Title', type: 'text', group: 'Content' },
    { key: 'text', label: 'Description', type: 'text', group: 'Content' },
  ]},

  // ===== CONTACT =====
  'contact.badge': { id: 'contact.badge', name: 'Contact Badge', type: 'text', section: 'Contact', sectionId: 'contact', properties: [
    { key: 'text', label: 'Badge Text', type: 'text', group: 'Content' },
  ]},
  'contact.title': { id: 'contact.title', name: 'Contact Heading', type: 'heading', section: 'Contact', sectionId: 'contact', properties: [
    { key: 'text', label: 'Heading Text', type: 'text', group: 'Content' },
  ]},
  'contact.description': { id: 'contact.description', name: 'Contact Description', type: 'paragraph', section: 'Contact', sectionId: 'contact', properties: [
    { key: 'text', label: 'Description', type: 'text', group: 'Content' },
  ]},
  'contact.email': { id: 'contact.email', name: 'Email Button', type: 'button', section: 'Contact', sectionId: 'contact', properties: [
    { key: 'text', label: 'Email Address', type: 'text', group: 'Content' },
    { key: 'href', label: 'Mailto Link', type: 'link', group: 'Content' },
  ]},
  'contact.social-0': { id: 'contact.social-0', name: 'Social: GitHub', type: 'link', section: 'Contact', sectionId: 'contact', properties: [
    { key: 'text', label: 'Label', type: 'text', group: 'Content' },
    { key: 'href', label: 'URL', type: 'link', group: 'Content' },
  ]},
  'contact.social-1': { id: 'contact.social-1', name: 'Social: LinkedIn', type: 'link', section: 'Contact', sectionId: 'contact', properties: [
    { key: 'text', label: 'Label', type: 'text', group: 'Content' },
    { key: 'href', label: 'URL', type: 'link', group: 'Content' },
  ]},
  'contact.social-2': { id: 'contact.social-2', name: 'Social: X / Twitter', type: 'link', section: 'Contact', sectionId: 'contact', properties: [
    { key: 'text', label: 'Label', type: 'text', group: 'Content' },
    { key: 'href', label: 'URL', type: 'link', group: 'Content' },
  ]},
  'contact.social-3': { id: 'contact.social-3', name: 'Social: itch.io', type: 'link', section: 'Contact', sectionId: 'contact', properties: [
    { key: 'text', label: 'Label', type: 'text', group: 'Content' },
    { key: 'href', label: 'URL', type: 'link', group: 'Content' },
  ]},

  // ===== FOOTER =====
  'footer.copyright': { id: 'footer.copyright', name: 'Footer Copyright', type: 'text', section: 'Footer', sectionId: 'footer', properties: [
    { key: 'text', label: 'Copyright Text', type: 'text', group: 'Content' },
  ]},
  'footer.back-to-top': { id: 'footer.back-to-top', name: 'Back to Top Button', type: 'button', section: 'Footer', sectionId: 'footer', properties: [
    { key: 'text', label: 'Button Label', type: 'text', group: 'Content' },
    { key: 'href', label: 'Link URL', type: 'link', group: 'Content' },
  ]},
}

export const SECTION_ORDER = [
  'header',
  'hero',
  'skills',
  'services',
  'work',
  'about',
  'process',
  'contact',
  'footer',
]

export const SECTION_NAMES: Record<string, string> = {
  header: 'Header',
  hero: 'Hero',
  skills: 'Skills Marquee',
  services: 'Services',
  work: 'Selected Work',
  about: 'About',
  process: 'Process',
  contact: 'Contact',
  footer: 'Footer',
}

export function getElementsBySection(sectionId: string): ElementSchema[] {
  return Object.values(ELEMENT_SCHEMAS).filter((s) => s.sectionId === sectionId)
}

export function getAllElements(): ElementSchema[] {
  return Object.values(ELEMENT_SCHEMAS)
}
