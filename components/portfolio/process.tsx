'use client'

import { SectionHeading } from './section-heading'
import { useEditable } from '@/lib/editor/use-editable'

const stepColors = ['bg-sun', 'bg-coral', 'bg-mint', 'bg-sky']

export function Process() {
  const eyebrow = useEditable('process.eyebrow')
  const title = useEditable('process.title')
  const description = useEditable('process.description')
  const steps = [0, 1, 2, 3].map((i) => useEditable(`process.step-${i}`))

  return (
    <section id="process" aria-labelledby="process-title" className="border-y-2 bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="[&_p]:text-background/70">
          <SectionHeading
            id="process-title"
            eyebrow={eyebrow.get('text') as string}
            tagClassName="bg-sun text-foreground border-background"
            title={title.get('text')}
            description={description.get('text') as string}
            eyebrowEditor={eyebrow.editorProps}
            titleEditor={title.editorProps}
            descriptionEditor={description.editorProps}
          />
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.get('title') as string}
              className="flex flex-col gap-4 rounded-3xl border-2 border-background/20 bg-background/5 p-6 transition-colors hover:bg-background/10"
              {...step.editorProps}
            >
              <span
                className={`flex size-12 items-center justify-center rounded-full border-2 border-background font-display text-xl font-extrabold text-foreground ${stepColors[i]}`}
              >
                {i + 1}
              </span>
              <h3 className="font-display text-2xl font-extrabold">{step.get('title')}</h3>
              <p className="leading-relaxed text-background/70">{step.get('text')}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
