import { useTheme } from 'next-themes';
import { Button } from './button';
import { MoonIcon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className='w-8 h-8' />;

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      variant='ghost'
      size='icon'
      aria-label='Toggle Theme'
    >
      {theme === 'dark' ? (
        <Sun className='h-[1.2rem] w-[1.2rem]' />
      ) : (
        <MoonIcon className='absolute h-[1.2rem] w-[1.2rem]' />
      )}
    </Button>
  );
}
