'use client'

import { Coffee, Heart, Rocket, Zap, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { useEditable } from '@/lib/editor/use-editable'

const factMeta: { icon: LucideIcon; color: string }[] = [
  { icon: Rocket, color: 'bg-sun' },
  { icon: Heart, color: 'bg-coral' },
  { icon: Zap, color: 'bg-mint' },
  { icon: Coffee, color: 'bg-sky' },
]

export function About() {
  const eyebrow = useEditable('about.eyebrow')
  const title = useEditable('about.title')
  const para0 = useEditable('about.paragraph-0')
  const para1 = useEditable('about.paragraph-1')
  const facts = [0, 1, 2, 3].map((i) => useEditable(`about.fact-${i}`))

  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <div className="flex flex-col gap-14 lg:flex-row lg:gap-20">
        <div className="flex flex-1 flex-col gap-8">
          <SectionHeading
            id="about-title"
            eyebrow={eyebrow.get('text') as string}
            tagClassName="bg-mint"
            title={title.get('text')}
            eyebrowEditor={eyebrow.editorProps}
            titleEditor={title.editorProps}
          />
          <div className="flex max-w-xl flex-col gap-5 text-lg leading-relaxed text-pretty text-muted-foreground">
            <p {...para0.editorProps}>{para0.get('text')}</p>
            <p {...para1.editorProps}>{para1.get('text')}</p>
          </div>
        </div>

        <ul className="grid flex-1 grid-cols-1 gap-5 self-center sm:grid-cols-2">
          {facts.map((fact, i) => {
            const meta = factMeta[i]
            const Icon = meta.icon
            return (
              <li
                key={fact.get('label') as string}
                className={`flex flex-col gap-3 rounded-3xl border-2 p-6 shadow-pop ${meta.color} ${
                  i % 2 === 0 ? '-rotate-2' : 'rotate-2 sm:translate-y-6'
                }`}
                {...fact.editorProps}
              >
                <span className="flex size-11 items-center justify-center rounded-xl border-2 bg-card">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-extrabold">{fact.get('label')}</h3>
                <p className="text-foreground/75">{fact.get('text')}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
