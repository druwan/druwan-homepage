'use client';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full flex items-center justify-between mb-6'>
      <Link href={'/'} className='text-2xl font-medium tracking-tight'>
        Christopher Vestman
      </Link>

      {/* Mobile */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost' className='md:hidden'>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='top'
          className='p-6 bg-antiFlashWhite dark:bg-night'
        >
          <SheetHeader>
            <SheetTitle className='text-burgundy dark:text-ochre'>
              Menu
            </SheetTitle>
          </SheetHeader>
          <ul className='space-y-4 text-lg text-burgundy dark:text-ochre'>
            <li>
              <Link href={'/'} onClick={() => setIsOpen(false)}>
                home
              </Link>
            </li>
            <li>
              <Link href={'/blog'} onClick={() => setIsOpen(false)}>
                blog
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>

      {/* Desktop */}
      <div className='hidden md:flex text-xl space-x-4 text-burgundy dark:text-ochre'>
        <Link href={'/blog'}>blog</Link>
      </div>
    </nav>
  );
}
