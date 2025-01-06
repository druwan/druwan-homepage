'use client';
import Link from 'next/link';
import { ModeToggle } from './ui/mode-toggle';

export function Navbar() {
  return (
    <nav className='flex items-center justify-between pb-4 text-2xl' id='nav'>
      <div>
        <Link href={'/'}>Christopher Vestman</Link>
      </div>

      <div className='flex items-center space-x-4'>
        <Link href={'/blog'}>blog</Link>
        <Link href={'/projects'}>projects</Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
