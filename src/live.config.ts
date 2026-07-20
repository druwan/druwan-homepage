import { defineLiveCollection } from 'astro:content'
import { s3BlogLoader } from './loaders/s3BlogLoader'
import { s3ProjectsLoader } from './loaders/s3ProjectsLoader'

export const blog = defineLiveCollection({
  loader: s3BlogLoader(),
})

export const projects = defineLiveCollection({
  loader: s3ProjectsLoader(),
})

export const collections = { blog, projects }
