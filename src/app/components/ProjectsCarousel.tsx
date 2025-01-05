'use client';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  image_url: string;
  live_url: string;
  repo_url: string;
  short_summary: string;
  stack: string[];
};

export function ProjectCarousel() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/projects');
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <Carousel plugins={[Autoplay({ delay: 3500, stopOnMouseEnter: false })]}>
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id}>
            <div className='flex aspect-video items-center justify-center'>
              <Card>
                <CardHeader className='text-2xl font-semibold tracking-tighter pb-2'>
                  {project.title}
                </CardHeader>
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '300px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    alt={`Image of ${project.title}`}
                    src={project.image_url}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <CardContent className='justify-normal'>
                  {project.short_summary}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
