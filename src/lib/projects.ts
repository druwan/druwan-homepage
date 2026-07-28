import { s3Get } from './s3Client'

export interface Project {
  title: string
  image_url: string
  live_url: string | null
  repo_url: string
  description: string
  stack: { name: string; url: string }[]
  completed: boolean
  publish: boolean
  featured: boolean
}

export async function getProjects(): Promise<Project[]> {
  try {
    const json = await s3Get('projects/projects.json')
    const all: Project[] = JSON.parse(json)
    return all.filter((p) => p.publish)
  } catch {
    return []
  }
}
