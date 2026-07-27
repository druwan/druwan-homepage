import { useState } from 'preact/hooks'
import { Rocket, Globe, User, BookOpen, ExternalLink, ArrowRight } from 'lucide-preact'

const icons = { rocket: Rocket, globe: Globe, user: User, book: BookOpen }

interface TabItem {
  id: string
  icon: keyof typeof icons
  title: string
  body: string
  href?: string
  linkLabel?: string
  external?: boolean
  extra?: { label: string; href: string }[]
}

interface Props {
  items: TabItem[]
}

export default function ExploreTabs({ items }: Props) {
  const [active, setActive] = useState(0)
  const current = items[active]

  return (
    <div class="flex flex-col sm:flex-row gap-6 sm:gap-10 w-full">
      <ul class="flex sm:flex-col gap-1 overflow-x-auto sm:overflow-visible sm:min-w-[160px] shrink-0">
        {items.map((item, i) => {
          const Icon = icons[item.icon]
          const isActive = i === active
          return (
            <li key={item.id}>
              <button
                onClick={() => setActive(i)}
                class={`flex items-center gap-2 w-full text-left px-3 py-2 text-sm whitespace-nowrap transition-colors border-l-2 ${isActive
                  ? 'border-burgundy dark:border-ochre text-burgundy dark:text-ochre font-medium'
                  : 'border-transparent text-night/50 dark:text-anti-flash-white/50 hover:text-night dark:hover:text-anti-flash-white'
                  }`}
              >
                <Icon size={16} />
                {item.title}
              </button>
            </li>
          )
        })}
      </ul>

      <div class="flex-1">
        <h3 class="text-lg sm:text-xl font-medium tracking-tight text-night dark:text-anti-flash-white mb-2">
          {current.title}
        </h3>
        <p class="text-sm text-night/60 dark:text-anti-flash-white/60 leading-relaxed max-w-xl">
          {current.body}
        </p>

        {current.extra && current.extra.length > 0 && (
          <div class="flex flex-col gap-1 mt-3">
            {current.extra.map((e) => (
              <a href={e.href}
                class="text-sm text-night dark:text-anti-flash-white hover:text-burgundy dark:hover:text-ochre transition-colors truncate"
              >
                {e.label}
              </a>
            ))}
          </div>
        )}

        {current.href && (
          <a href={current.href}
            target={current.external ? '_blank' : undefined}
            rel={current.external ? 'noopener noreferrer' : undefined}
            class="inline-flex items-center gap-1 text-sm text-burgundy dark:text-ochre mt-3"
          >
            {current.linkLabel}
            {current.external ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
          </a>
        )}
      </div>
    </div >
  )
}
