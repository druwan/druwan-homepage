import { useEffect, useRef, useState } from 'preact/hooks'

interface LocaleItem {
  code: string
  label: string
  href: string
  active: boolean
}

export default function LanguageSwitcherIsland({ items }: { items: LocaleItem[] }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const current = items.find((i) => i.active)

  return (
    <div class="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        class="flex items-center justify-center gap-1 h-10 px-2 transition-all text-burgundy dark:text-ochre hover:text-burgundy/80 dark:hover:text-ochre/60"
        aria-label="Change language"
        aria-expanded={open}
      >
        <span class="text-xs font-medium uppercase">{current?.code}</span>
      </button>

      {open && (
        <div class="absolute right-0 mt-1 min-w-[8rem] rounded-lg border border-burgundy/20 dark:border-ochre/20 bg-anti-flash-white dark:bg-night shadow-lg overflow-hidden z-50">
          {items.map((item) => (
            <a
              href={item.href}
              class={`block px-3 py-2 text-sm transition-colors ${item.active
                ? 'text-burgundy dark:text-ochre font-medium bg-burgundy/5 dark:bg-ochre/10'
                : 'text-night dark:text-anti-flash-white hover:bg-burgundy/5 dark:hover:bg-ochre/10'
                }`}
            >
              {item.label}{' '}
            </a>
          ))}
        </div>
      )
      }
    </div >
  )
}
