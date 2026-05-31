import { s3Get, s3List, s3Head } from './s3Client.ts'

export type BlogPost = {
  slug: string
  title: string
  date: string
  content: string
}

export async function listPosts(): Promise<BlogPost[]> {
  const xml = await s3List('blog/')
  const keys = [...xml.matchAll(/<Key>([^<]+)<\/Key>/g)]
    .map((m) => m[1])
    .filter((k) => k.endsWith('.md'))

  const posts = await Promise.all(
    keys.map(async (key) => {
      const [content, meta] = await Promise.all([s3Get(key), s3Head(key)])
      const slug = key.replace('blog/', '').replace('.md', '')
      const titleLine = content.split('\n').find((l) => l.startsWith('# '))
      const title = titleLine ? titleLine.replace('# ', '').trim() : slug
      const date = meta['creation-date']
        ? new Date(Number(meta['creation-date'])).toISOString()
        : (meta['last-modified'] ?? new Date().toISOString())
      return { slug, title, date, content }
    }),
  )

  return posts.sort((a, b) => Number(b.date) - Number(a.date))
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const content = await s3Get(`blog/${slug}.md`)
    const titleLine = content.split('\n').find((l) => l.startsWith('# '))
    const title = titleLine ? titleLine.replace('# ', '').trim() : slug
    return { slug, title, date: '', content }
  } catch {
    return null
  }
}
