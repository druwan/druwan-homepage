'use client';
import Link from 'next/link';
import { ModeToggle } from '@/components/ui/mode-toggle';
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
    <nav className='flex items-center justify-between px-6 py-4'>
      <Link href={'/'} className='text-2xl font-semibold'>
        Christopher Vestman
      </Link>

      {/* Mobile */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost' className='md:hidden'>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side='top' className='p-6'>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <ul className='space-y-4 text-lg'>
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
            <li>
              <ModeToggle />
            </li>
          </ul>
        </SheetContent>
      </Sheet>

      {/* Desktop */}

      <div className='hidden md:flex items-center space-x-4'>
        <Link href={'/blog'}>blog</Link>
        <ModeToggle />
      </div>
    </nav>
  );
}
