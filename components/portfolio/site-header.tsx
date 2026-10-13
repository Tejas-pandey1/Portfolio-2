'use client'

import { useEditable } from '@/lib/editor/use-editable'

export function SiteHeader() {
  const logo = useEditable('header.logo')
  const cta = useEditable('header.cta')
  const nav0 = useEditable('header.nav-0')
  const nav1 = useEditable('header.nav-1')
  const nav2 = useEditable('header.nav-2')
  const nav3 = useEditable('header.nav-3')

  const navItems = [
    { editor: nav0, href: nav0.get('href') as string, label: nav0.get('text') as string },
    { editor: nav1, href: nav1.get('href') as string, label: nav1.get('text') as string },
    { editor: nav2, href: nav2.get('href') as string, label: nav2.get('text') as string },
    { editor: nav3, href: nav3.get('href') as string, label: nav3.get('text') as string },
  ]

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border-2 bg-card/90 py-2 pr-2 pl-5 shadow-pop-sm backdrop-blur">
        <a href={logo.get('href') as string} className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight" {...logo.editorProps}>
          <span aria-hidden="true" className="flex size-7 items-center justify-center rounded-full border-2 bg-coral text-xs">
            A
          </span>
          {logo.get('text')}
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-sun"
                  {...item.editor.editorProps}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={cta.get('href') as string}
          className="rounded-full border-2 bg-grape px-5 py-2 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
          {...cta.editorProps}
        >
          {cta.get('text')}
        </a>
      </div>
    </header>
  )
}
