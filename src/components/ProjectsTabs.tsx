import { useState } from 'preact/hooks'
import { ExternalLink, Code2, ArrowRight } from 'lucide-preact'

interface Project {
  title: string
  image_url: string
  live_url: string | null
  repo_url: string
  description: string
  stack: { name: string; url: string }[]
}

interface Props {
  items: Project[]
  labels: { code: string; live: string; viewProject: string }
}

export default function ProjectsTabs({ items, labels }: Props) {
  const [active, setActive] = useState(0)
  const current = items[active]

  if (!current) return null

  return (
    <div class="w-full">
      <ul class="flex gap-1 overflow-x-auto border-b border-night/10 dark:border-anti-flash-white/10 mb-6">
        {items.map((item, i) => {
          const isActive = i === active
          return (
            <li key={item.title}>
              <button
                onClick={() => setActive(i)}
                class={`block whitespace-nowrap px-3 py-2 text-sm transition-colors border-b-2 -mb-px ${isActive
                  ? 'border-burgundy dark:border-ochre text-burgundy dark:text-ochre font-medium'
                  : 'border-transparent text-night/50 dark:text-anti-flash-white/50 hover:text-night dark:hover:text-anti-flash-white'
                  }`}
              >
                {item.title}
              </button>
            </li>
          )
        })}
      </ul>

      <div>
        <a
          href={current.repo_url}
          class="relative flex flex-col justify-end w-full overflow-hidden rounded-xl"
          style="aspect-ratio: 21/9; max-height: 340px;"
        >
          <img
            src={current.image_url}
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
            <p class="text-sm text-anti-flash-white/70 leading-relaxed max-w-md">
              {current.description}
            </p>
          </div>
        </a>

        {current.stack.length > 0 && (
          <p class="text-xs text-night/40 dark:text-anti-flash-white/35 tracking-wide mt-3">
            {current.stack.map((s) => s.name).join(' · ')}
          </p>
        )}

        <div class="flex items-center gap-4 mt-3">
          <a
            href={current.repo_url}
            class="inline-flex items-center gap-1.5 text-sm text-burgundy dark:text-ochre"
          >
            <Code2 size={14} /> {labels.code}
          </a>
          {current.live_url && (
            <a
              href={current.live_url}
              class="inline-flex items-center gap-1.5 text-sm text-burgundy dark:text-ochre"
            >
              <ExternalLink size={14} /> {labels.live}
            </a>
          )}
        </div>
      </div>
    </div >
  )
}
