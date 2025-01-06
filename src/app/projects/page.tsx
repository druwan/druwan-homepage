'use client';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../components/ui/carousel';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
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
        const response = await fetch('/api/projects');
        const { data, error } = await response.json();
        if (error) {
          setError(error);
        } else {
          setProjects(data);
        }
      } catch (err) {
        setError(`Failed to fetch projects: ${err.message}`);
      }
    };
    fetchProjects();
  }, []);

  return (
    <Carousel plugins={[Autoplay({ delay: 3500, stopOnMouseEnter: false })]}>
      <CarouselContent>
        {!error &&
          projects.map((project) => (
            <CarouselItem key={project.id}>
              <Card>
                <CardHeader className='text-xl font-semibold tracking-tighter pb-2'>
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
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw'
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <CardContent>{project.description}</CardContent>
              </Card>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
