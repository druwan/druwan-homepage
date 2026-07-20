import type { LiveLoader } from 'astro:content'
import { s3Get } from '../lib/s3Client'

export interface Project {
  title: string
  image_url: string
  live_url: string | null
  repo_url: string
  description: string
  stack: { name: string; url: string }[]
  completed: boolean
  publish: boolean
}

export function s3ProjectsLoader(): LiveLoader<Project> {
  return {
    loadCollection: async () => {
      try {
        const json = await s3Get('projects/projects.json')
        const all: Project[] = JSON.parse(json)
        return {
          entries: all
            .filter((p) => p.publish)
            .map((p) => ({ id: p.repo_url, data: p })),
        }
      } catch (error) {
        return {
          error:
            error instanceof Error
              ? error
              : new Error('Failed to load projects'),
        }
      }
    },
    loadEntry: async () => ({ entry: null }), // not needed for projects
  }
}
