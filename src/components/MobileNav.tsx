import { useState } from 'preact/hooks'
import { Menu, X } from 'lucide-preact'
import { getRelativeLocaleUrl } from 'astro:i18n'

interface Props {
  locale: string
}

export default function MobileNav({ locale }: Props) {
  const [open, setOpen] = useState(false)
  const homeUrl = getRelativeLocaleUrl(locale, '')
  const blogUrl = getRelativeLocaleUrl(locale, 'blog')
  const aboutUrl = getRelativeLocaleUrl(locale, 'about')

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        class="flex items-center justify-center w-10 h-10 text-burgundy dark:text-ochre"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {open && (
        <div class="fixed inset-0 z-50 bg-anti-flash-white dark:bg-night flex flex-col p-6">
          <div class="flex items-center justify-between mb-8">
            <span class="text-xl font-medium text-burgundy dark:text-ochre">Menu</span>
            <button
              onClick={() => setOpen(false)}
              class="flex items-center justify-center w-10 h-10 text-burgundy dark:text-ochre"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <ul class="space-y-6 text-lg text-burgundy dark:text-ochre">
            <li>
              <a href={homeUrl} onClick={() => setOpen(false)}>home</a>
            </li>
            <li>
              <a href={blogUrl} onClick={() => setOpen(false)}>blog</a>
            </li>
            <li>
              <a href={aboutUrl} onClick={() => setOpen(false)}>about</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
