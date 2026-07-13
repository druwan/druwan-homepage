import { s3Get, s3List, s3Head } from './s3Client.ts'

export type BlogPost = {
  slug: string
  title: string
  date: string
  content: string
}

export async function listPosts(): Promise<BlogPost[]> {
  const xml = await s3List('blog/')
  const keyMatches = [...xml.matchAll(/<Key>([^<]+)<\/Key>/g)]
  const dateMatches = [...xml.matchAll(/<LastModified>([^<]+)<\/LastModified>/g)]

  const mdEntries = keyMatches
    .map((k, i) => ({ key: k[1], date: dateMatches[i]?.[1] ?? '' }))
    .filter((e) => e.key.endsWith('.md'))


  const posts = await Promise.all(
    mdEntries.map(async ({ key, date }) => {
      const [content, meta] = await Promise.all([s3Get(key), s3Head(key)])
      const slug = key.replace('blog/', '').replace('.md', '')
      const titleLine = content.split('\n').find((l) => l.startsWith('# '))
      const title = titleLine ? titleLine.replace('# ', '').trim() : slug
      const creationMs = meta['creation-date']
      const ts = creationMs
        ? Number(creationMs)
        : date
          ? new Date(date).getTime()
          : Date.now()
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
    const creationMs = meta['creation-date']
    const ts = creationMs ? Number(creationMs) : Date.now()
    return { slug, title, date: ts.toString(), content }
  } catch {
    return null
  }
}
