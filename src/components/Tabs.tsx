import { useState } from 'preact/hooks'
import { ChevronDown, Rocket, Globe, User, BookOpen, ExternalLink, ArrowRight, Code2 } from 'lucide-preact'

const icons = { rocket: Rocket, globe: Globe, user: User, book: BookOpen }

interface LinkItem {
  label: string
  href: string
  icon?: 'code' | 'external' | 'arrow'
  external?: boolean
}

interface TabItem {
  id: string
  label: string
  icon?: keyof typeof icons
  title: string
  body: string
  media?: { image: string; href: string }
  meta?: string
  links?: LinkItem[]
  extraLinks?: { label: string; href: string }[]
}

interface Props {
  items: TabItem[]
}

const linkIcons = { code: Code2, external: ExternalLink, arrow: ArrowRight }

export default function Tabs({ items }: Props) {
  const [active, setActive] = useState(0)
  const current = items[active]
  if (!current) return null

  return (
    <div class="w-full">
      <div class="mb-6 border-b border-night/10 dark:border-anti-flash-white/10">
        {/* Mobile: dropdown */}
        <div class="relative sm:hidden">
          <select
            class="w-full py-2 pr-8 text-sm bg-transparent text-burgundy dark:text-ochre font-medium border-none focus:outline-none focus:ring-0 appearance-none"
            value={active}
            onChange={(e) => setActive(Number((e.target as HTMLSelectElement).value))}
          >
            {items.map((item, i) => (
              <option value={i}>{item.label}</option>
            ))}
          </select>
          <ChevronDown
            size={16}
            class="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-burgundy dark:text-ochre"
          />
        </div>

        {/* Desktop: horizontal tabs */}
        <ul class="hidden sm:flex gap-1">
          {items.map((item, i) => {
            const Icon = item.icon ? icons[item.icon] : null
            const isActive = i === active
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActive(i)}
                  class={`flex items-center gap-2 whitespace-nowrap px-3 py-2 text-sm transition-colors border-b-2 -mb-px ${isActive
                    ? 'border-burgundy dark:border-ochre text-burgundy dark:text-ochre font-medium'
                    : 'border-transparent text-night/50 dark:text-anti-flash-white/50 hover:text-night dark:hover:text-anti-flash-white'
                    }`}
                >
                  {Icon && <Icon size={16} />}
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        {current.media && (
          <a
            href={current.media.href}
            class="relative flex flex-col justify-end w-full overflow-hidden rounded-xl mb-3"
            style="aspect-ratio: 21/9; max-height: 340px;"
          >
            <img
              src={current.media.image}
              alt={`Preview of ${current.title}`}
              class="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div
              class="absolute inset-0"
              style="background: linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.5) 45%, transparent 100%);"
            />
            <div class="relative p-5">
              <h4 class="text-lg sm:text-xl font-medium text-anti-flash-white mb-1">
                {current.title}
              </h4>
              <p class="text-sm text-anti-flash-white/70 leading-relaxed truncate">
                {current.body}
              </p>
            </div>
          </a>
        )}

        {!current.media && (
          <>
            <h3 class="text-lg sm:text-xl font-medium tracking-tight text-night dark:text-anti-flash-white mb-2">
              {current.title}
            </h3>
            <p class="text-sm text-night/60 dark:text-anti-flash-white/60 leading-relaxed">
              {current.body}
            </p>
          </>
        )}

        {current.meta && (
          <p class="text-xs text-night/40 dark:text-anti-flash-white/35 tracking-wide mt-3">
            {current.meta}
          </p>
        )}

        {current.extraLinks && current.extraLinks.length > 0 && (
          <div class="flex flex-col gap-1 mt-3">
            {current.extraLinks.map((e) => (
              <a
                href={e.href}
                class="text-sm text-night dark:text-anti-flash-white hover:text-burgundy dark:hover:text-ochre transition-colors truncate"
              >
                {e.label}
              </a>
            ))}
          </div>
        )}

        {current.links && current.links.length > 0 && (
          <div class="flex items-center gap-4 mt-3">
            {current.links.map((link) => {
              const LinkIcon = link.icon ? linkIcons[link.icon] : null
              return (
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  class="inline-flex items-center gap-1.5 text-sm text-burgundy dark:text-ochre"
                >
                  {LinkIcon && <LinkIcon size={14} />} {link.label}
                </a>
              )
            })}
          </div>
        )}
      </div>
    </div >
  )
}
