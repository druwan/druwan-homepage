import { s3Get } from './s3Client'

export type Project = {
  title: string
  image_url: string
  live_url: string | null
  repo_url: string
  description: string
  stack: { name: string; url: string }[]
  completed: boolean
  publish: boolean
}

export async function getProjects(): Promise<Project[]> {
  try {
    const json = await s3Get('projects/projects.json')
    const projects: Project[] = JSON.parse(json)
    return projects.filter(p => p.publish)
  } catch {
    return []
  }
}
