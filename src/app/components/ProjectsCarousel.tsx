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
  id: number;
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
      } catch (err) {
        setError(`Failed to fetch projects: ${err.message}`);
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
            <CarouselItem key={project.id}>
              <Card>
                <CardHeader className='text-xl text-night dark:text-antiFlashWhite tracking-tighter'>
                  {project.title}
                </CardHeader>
                <Link
                  key={project.id}
                  href={project.repo_url}
                  className='block'
                >
                  <AspectRatio ratio={16 / 9} className='m-0 p-0'>
                    <Image
                      src={project.image_url}
                      alt={`Preview image of ${project.title}`}
                      sizes='100vw'
                      className='object-contain rounded-3xl border-2 border-burgundy dark:border-ochre my-0'
                      style={{ width: '100%', height: 'auto' }}
                      width={500}
                      height={300}
                    />
                  </AspectRatio>
                </Link>
                <CardContent className='text-md text:night dark:text-antiFlashWhite line-clamp-2'>
                  {project.description}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
