'use client';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardImage,
  CardImageContainer,
} from '@/components/ui/card';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

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
      className='pb-3'
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
                <CardHeader className='text-lg font-semibold tracking-tighter pb-2'>
                  {project.title}
                </CardHeader>
                <Link key={project.id} href={project.repo_url}>
                  <CardImageContainer>
                    <CardImage
                      src={project.image_url}
                      style={{ borderRadius: '15px' }}
                    />
                  </CardImageContainer>
                </Link>
                <CardContent className='text-md line-clamp-2'>
                  {project.description}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
