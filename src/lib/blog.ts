import { s3Get, s3List } from './s3Client.ts'

export type BlogPost = {
  slug: string
  title: string
  date: string
  content: string
}

export async function listPosts(): Promise<BlogPost[]> {
  const keys = await s3List('blog/')
  const mdKeys = keys.filter(k => k.endsWith('.md'))

  const posts = await Promise.all(mdKeys.map(async key => {
    const content = await s3Get(key)
    const slug = key.replace('blog/', '').replace('.md', '')
    const titleLine = content.split('\n').find(l => l.startsWith('# '))
    const title = titleLine ? titleLine.replace('# ', '').trim() : slug
    return { slug, title, date: '', content }
  }))

  return posts
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const content = await s3Get(`blog/${slug}.md`)
    const titleLine = content.split('\n').find(l => l.startsWith('# '))
    const title = titleLine ? titleLine.replace('# ', '').trim() : slug
    return { slug, title, date: '', content }
  } catch {
    return null
  }
}
