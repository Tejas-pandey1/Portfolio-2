'use client'

import { AppWindow, Bot, Gamepad2, Globe, MonitorSmartphone, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { cn } from '@/lib/utils'
import { useEditable } from '@/lib/editor/use-editable'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  color: string
  className?: string
}

const iconMap: Record<string, LucideIcon> = {
  Apps: AppWindow,
  'AI integrations': Bot,
  Websites: Globe,
  'Responsive design': MonitorSmartphone,
  Games: Gamepad2,
}

const baselineServices: Omit<Service, 'title' | 'description' | 'tags'>[] = [
  { icon: AppWindow, color: 'bg-sun', className: 'md:col-span-2' },
  { icon: Bot, color: 'bg-mint' },
  { icon: Globe, color: 'bg-sky' },
  { icon: MonitorSmartphone, color: 'bg-card' },
  { icon: Gamepad2, color: 'bg-coral' },
]

export function Services() {
  const eyebrow = useEditable('services.eyebrow')
  const title = useEditable('services.title')
  const description = useEditable('services.description')
  const cards = [0, 1, 2, 3, 4].map((i) => useEditable(`services.card-${i}`))

  const services: Service[] = cards.map((card, i) => {
    const cardTitle = card.get('title') as string
    const Icon = iconMap[cardTitle] ?? baselineServices[i].icon
    return {
      icon: Icon,
      title: cardTitle,
      description: card.get('description') as string,
      tags: (card.get('tags') as string).split(',').map((t) => t.trim()).filter(Boolean),
      color: baselineServices[i].color,
      className: baselineServices[i].className,
    }
  })

  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-6xl px-4 py-24 md:py-32">
      <SectionHeading
        id="services-title"
        eyebrow={eyebrow.get('text') as string}
        title={title.get('text')}
        description={description.get('text') as string}
        eyebrowEditor={eyebrow.editorProps}
        titleEditor={title.editorProps}
        descriptionEditor={description.editorProps}
      />

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((service, i) => (
          <li
            key={service.title}
            className={cn(
              'group flex flex-col gap-6 rounded-3xl border-2 p-7 shadow-pop transition-transform hover:-translate-y-1 hover:-rotate-1',
              service.color,
              service.className,
            )}
            {...cards[i].editorProps}
          >
            <div className="flex items-center justify-between">
              <span className="flex size-14 items-center justify-center rounded-2xl border-2 bg-card transition-transform group-hover:rotate-12">
                <service.icon className="size-7" aria-hidden="true" />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-2xl font-extrabold">{service.title}</h3>
              <p className="leading-relaxed text-pretty text-foreground/75">{service.description}</p>
            </div>
            <ul className="mt-auto flex flex-wrap gap-2" aria-label={`${service.title} tools`}>
              {service.tags.map((tag) => (
                <li key={tag} className="rounded-full border-2 bg-card/70 px-3 py-0.5 text-xs font-bold">
                  {tag}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
