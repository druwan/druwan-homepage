import { useState, useEffect } from 'preact/hooks'
import { Menu, X } from 'lucide-preact'

interface Chapter {
  id: string
  label: string
  href: string
}

interface Props {
  locale: string
  chapters: Chapter[]
}

export default function MobileNav({ chapters }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        class="flex items-center justify-center w-10 h-10 text-burgundy dark:text-ochre"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu size={24} />
      </button>

      {open && (
        <div
          class="fixed inset-0 z-50 bg-anti-flash-white dark:bg-night flex flex-col p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div class="flex items-center justify-between mb-8">
            <span class="text-xl font-medium text-burgundy dark:text-ochre">
              Menu
            </span>
            <button
              onClick={() => setOpen(false)}
              class="flex items-center justify-center w-10 h-10 text-burgundy dark:text-ochre"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <ul class="space-y-6 text-lg text-burgundy dark:text-ochre">
            {chapters.map((c) => (
              <li key={c.id}>
                <a href={c.href} onClick={() => setOpen(false)}>
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
