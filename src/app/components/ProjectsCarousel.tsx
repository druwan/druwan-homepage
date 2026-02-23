'use client';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import { AspectRatio } from './ui/aspect-ratio';
import Image from 'next/image';

type Project = {
  id?: string;
  title: string;
  image_url: string;
  live_url: string;
  repo_url: string;
  description: string;
  stack: string[];
};

export default function ProjectCarousel() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase.from('projects').select('*');
        if (error) {
          setError(error.message);
        } else {
          setProjects(data || []);
        }
      } catch (error) {
        if (error instanceof Error)
          setError(`Failed to fetch projects: ${error.message}`);
      }
    };
    fetchProjects();
  }, []);

  return (
    <Carousel
      className=''
      plugins={[
        Autoplay({
          delay: 2500,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {!error &&
          projects.map((project) => (
            <CarouselItem key={project.id} className='flex'>
              <Card className='flex flex-col h-full w-full'>
                <CardHeader className='text-xl text-night dark:text-antiFlashWhite tracking-tighter line-clamp-2 min-h-[3rem]'>
                  {project.title}
                </CardHeader>
                <Link
                  key={project.id}
                  href={project.repo_url}
                  className='block'
                >
                  <AspectRatio ratio={16 / 9} className='w-full'>
                    <div className='relative w-full h-full overflow-hidden rounded-3xl border-2 border-burgundy dark:border-ochre bg-white dark:bg-neutral-900'>
                      <Image
                        src={project.image_url}
                        alt={`Preview image of ${project.title}`}
                        fill
                        className='object-cover'
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </AspectRatio>
                </Link>
                <CardContent className='text-md text-night dark:text-antiFlashWhite line-clamp-2 min-h-[3rem]'>
                  {project.description}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel >
  );
}
