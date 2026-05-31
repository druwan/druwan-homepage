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
      class='flex items-center justify-center w-10 h-10 transition-all text-burgundy dark:text-ochre hover:text-burgundy/80 dark:hover:text-ochre/60'
      aria-label='Toggle theme'
    >
      {dark ? <Sun size={20} /> : <MoonIcon size={20} />}
    </button>
  );
}
