'use client'

import { useEditable } from '@/lib/editor/use-editable'

export function SiteFooter() {
  const copyright = useEditable('footer.copyright')
  const backToTop = useEditable('footer.back-to-top')

  return (
    <footer className="border-t-2">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm font-medium text-muted-foreground sm:flex-row">
        <p {...copyright.editorProps}>{copyright.get('text')}</p>
        <a
          href={backToTop.get('href') as string}
          className="rounded-full border-2 border-foreground bg-sun px-4 py-1.5 font-bold text-foreground"
          {...backToTop.editorProps}
        >
          {backToTop.get('text')}
        </a>
      </div>
    </footer>
  )
}
