'use client';
import Link from 'next/link';
import { ModeToggle } from './ui/mode-toggle';

const navItems = {
  '/': {
    name: 'Christopher Vestman',
  },
  '/blog': {
    name: 'blog',
  },
};

export function Navbar() {
  return (
    <aside className='-ml-[8px] mb-2 tracking-tight'>
      <div className='lg:sticky lg:top-20'>
        <nav
          className='flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
          id='nav'
        >
          <div className='flex flex-row space-x-0 pr-10'>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 text-2xl'
                >
                  {name}
                </Link>
              );
            })}
          </div>

          <div className='ml-auto transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1'>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
