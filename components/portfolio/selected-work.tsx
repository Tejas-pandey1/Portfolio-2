'use client'

import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'
import { useEditable } from '@/lib/editor/use-editable'

const projectColors = ['bg-mint', 'bg-coral', 'bg-sky', 'bg-sun']

export function SelectedWork() {
  const eyebrow = useEditable('work.eyebrow')
  const title = useEditable('work.title')
  const description = useEditable('work.description')
  const projects = [0, 1, 2, 3].map((i) => useEditable(`work.project-${i}`))

  return (
    <section id="work" aria-labelledby="work-title" className="border-y-2 bg-card">
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <SectionHeading
          id="work-title"
          eyebrow={eyebrow.get('text') as string}
          tagClassName="bg-coral"
          title={title.get('text')}
          description={description.get('text') as string}
          eyebrowEditor={eyebrow.editorProps}
          titleEditor={title.editorProps}
          descriptionEditor={description.editorProps}
        />

        <ul className="mt-14 grid gap-10 md:grid-cols-2">
          {projects.map((project, i) => {
            const projTitle = project.get('title') as string
            const projCategory = project.get('category') as string
            const projYear = project.get('year') as string
            const projDescription = project.get('description') as string
            const projResult = project.get('result') as string
            const projStack = (project.get('stack') as string).split(',').map((s) => s.trim()).filter(Boolean)
            const projImage = project.get('image') as string
            const projAlt = project.get('alt') as string

            return (
              <li key={projTitle} className={cn(i % 2 === 1 && 'md:mt-16')}>
                <article className="group flex flex-col gap-5" {...project.editorProps}>
                  <a
                    href="#contact"
                    className={cn(
                      'relative block overflow-hidden rounded-3xl border-2 p-4 shadow-pop transition-transform group-hover:-translate-y-1',
                      projectColors[i],
                    )}
                  >
                    <span className="sr-only">{`Ask about ${projTitle}`}</span>
                    <Image
                      src={projImage || '/placeholder.svg'}
                      alt={projAlt}
                      width={1200}
                      height={750}
                      className="aspect-[16/10] w-full rounded-2xl border-2 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute top-7 right-7 rotate-3 rounded-full border-2 bg-card px-3 py-1 text-xs font-bold shadow-pop-sm">
                      {projResult}
                    </span>
                  </a>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-semibold text-muted-foreground">
                        {projCategory} · {projYear}
                      </p>
                      <h3 className="font-display text-3xl font-extrabold tracking-tight">{projTitle}</h3>
                      <p className="max-w-md leading-relaxed text-pretty text-muted-foreground">{projDescription}</p>
                      <ul className="mt-2 flex flex-wrap gap-2" aria-label={`${projTitle} stack`}>
                        {projStack.map((tech) => (
                          <li key={tech} className="rounded-full border-2 px-3 py-0.5 text-xs font-bold">
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span
                      aria-hidden="true"
                      className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 bg-sun transition-transform group-hover:rotate-45"
                    >
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
