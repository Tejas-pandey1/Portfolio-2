'use client'

import Image from 'next/image'
import { ArrowDownRight, Gamepad2, Smartphone, Sparkles } from 'lucide-react'
import { useEditable } from '@/lib/editor/use-editable'

export function Hero() {
  const badge = useEditable('hero.badge')
  const title = useEditable('hero.title')
  const subtitle = useEditable('hero.subtitle')
  const ctaPrimary = useEditable('hero.cta-primary')
  const ctaSecondary = useEditable('hero.cta-secondary')
  const stat0 = useEditable('hero.stat-0')
  const stat1 = useEditable('hero.stat-1')
  const stat2 = useEditable('hero.stat-2')
  const portrait = useEditable('hero.portrait')
  const sticker0 = useEditable('hero.sticker-0')
  const sticker1 = useEditable('hero.sticker-1')
  const sticker2 = useEditable('hero.sticker-2')

  const stats = [
    { editor: stat0, value: stat0.get('value') as string, label: stat0.get('label') as string },
    { editor: stat1, value: stat1.get('value') as string, label: stat1.get('label') as string },
    { editor: stat2, value: stat2.get('value') as string, label: stat2.get('label') as string },
  ]

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-dots">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 px-4 pt-16 pb-20 md:pt-24 lg:flex-row lg:gap-10">
        <div className="flex flex-1 flex-col gap-8">
          <p className="flex w-fit items-center gap-2 rounded-full border-2 bg-card px-4 py-1.5 text-sm font-semibold shadow-pop-sm" {...badge.editorProps}>
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-mint" />
              <span className="relative inline-flex size-2.5 rounded-full border border-foreground bg-mint" />
            </span>
            {badge.get('text')}
          </p>

          <h1
            id="hero-title"
            className="font-display text-5xl leading-[0.95] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl"
            {...title.editorProps}
          >
            {title.get('text')}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground" {...subtitle.editorProps}>
            {subtitle.get('text')}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={ctaPrimary.get('href') as string}
              className="group inline-flex items-center gap-2 rounded-full border-2 bg-grape px-6 py-3 font-bold text-primary-foreground shadow-pop transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-pop-sm"
              {...ctaPrimary.editorProps}
            >
              {ctaPrimary.get('text')}
              <ArrowDownRight className="size-5 transition-transform group-hover:rotate-45" aria-hidden="true" />
            </a>
            <a
              href={ctaSecondary.get('href') as string}
              className="inline-flex items-center gap-2 rounded-full border-2 bg-card px-6 py-3 font-bold shadow-pop transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-pop-sm"
              {...ctaSecondary.editorProps}
            >
              {ctaSecondary.get('text')}
            </a>
          </div>

          <dl className="flex flex-wrap gap-8 pt-2">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col" {...stat.editor.editorProps}>
                <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="order-1 font-display text-3xl font-extrabold">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative w-full max-w-sm flex-1 lg:max-w-md">
          <div
            aria-hidden="true"
            className="absolute -top-6 -left-6 size-28 animate-spin-slow rounded-full border-2 border-dashed bg-sky/40"
          />
          <div className="relative rotate-2 overflow-hidden rounded-[2rem] border-2 bg-grape shadow-pop" {...portrait.editorProps}>
            <Image
              src={portrait.get('src') as string}
              alt={portrait.get('alt') as string}
              width={portrait.get('width') as number}
              height={portrait.get('height') as number}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div
            style={{ '--tilt': '-6deg' } as React.CSSProperties}
            className="absolute -bottom-6 -left-4 flex animate-float items-center gap-2 rounded-2xl border-2 bg-sun px-4 py-3 font-bold shadow-pop-sm"
            {...sticker0.editorProps}
          >
            <Gamepad2 className="size-5" aria-hidden="true" />
            {sticker0.get('text')}
          </div>
          <div
            style={{ '--tilt': '5deg', animationDelay: '1.5s' } as React.CSSProperties}
            className="absolute top-10 -right-4 flex animate-float items-center gap-2 rounded-2xl border-2 bg-mint px-4 py-3 font-bold shadow-pop-sm"
            {...sticker1.editorProps}
          >
            <Sparkles className="size-5" aria-hidden="true" />
            {sticker1.get('text')}
          </div>
          <div
            style={{ '--tilt': '-3deg', animationDelay: '3s' } as React.CSSProperties}
            className="absolute -right-2 bottom-20 flex animate-float items-center gap-2 rounded-2xl border-2 bg-coral px-4 py-3 font-bold shadow-pop-sm"
            {...sticker2.editorProps}
          >
            <Smartphone className="size-5" aria-hidden="true" />
            {sticker2.get('text')}
          </div>
        </div>
      </div>
    </section>
  )
}
