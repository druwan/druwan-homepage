import * as React from 'react';

import { useTheme } from 'next-themes';

import { Button } from './button';
import { MoonIcon, Sun } from 'lucide-react';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      onClick={toggleTheme}
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
