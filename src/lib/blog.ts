import { s3Get, s3List, s3Head } from './s3Client'

export interface BlogPost {
  slug: string
  title: string
  date: string
  content: string
}

export async function listPosts(): Promise<BlogPost[]> {
  const xml = await s3List('blog/')
  const keyMatches = [...xml.matchAll(/<Key>([^<]+)<\/Key>/g)]
  const mdKeys = keyMatches.map((m) => m[1]).filter((k) => k.endsWith('.md'))

  const posts = await Promise.all(
    mdKeys.map(async (key) => {
      const [content, meta] = await Promise.all([s3Get(key), s3Head(key)])
      const slug = key.replace('blog/', '').replace('.md', '')
      const titleLine = content.split('\n').find((l) => l.startsWith('# '))
      const title = titleLine ? titleLine.replace('# ', '').trim() : slug
      const ts = meta['creation-date'] ? Number(meta['creation-date']) : Date.now()
      return { slug, title, date: ts.toString(), content }
    }),
  )

  return posts.sort((a, b) => Number(b.date) - Number(a.date))
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const [content, meta] = await Promise.all([
      s3Get(`blog/${slug}.md`),
      s3Head(`blog/${slug}.md`),
    ])
    const titleLine = content.split('\n').find((l) => l.startsWith('# '))
    const title = titleLine ? titleLine.replace('# ', '').trim() : slug
    const ts = meta['creation-date'] ? Number(meta['creation-date']) : Date.now()
    return { slug, title, date: ts.toString(), content }
  } catch {
    return null
  }
}
