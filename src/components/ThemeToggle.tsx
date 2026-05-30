import { useEffect, useState } from 'preact/hooks';
import { MoonIcon, Sun } from 'lucide-preact';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)


  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, []);

  function toggle() {
    const isDark = !dark
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      class='flex items-center justify-center w-10 h-10 transition-all text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100'
      aria-label='Toggle theme'
    >
      {dark ? <Sun size={24} /> : <MoonIcon size={24} />}
    </button>
  );
}
