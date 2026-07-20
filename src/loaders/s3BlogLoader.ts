import type { LiveLoader } from 'astro:content'
import { s3Get, s3List, s3Head } from '../lib/s3Client'

export interface BlogPost {
  title: string
  date: string
  content: string
}

export function s3BlogLoader(): LiveLoader<BlogPost> {
  return {
    loadCollection: async () => {
      try {
        const xml = await s3List('blog/')
        const keyMatches = [...xml.matchAll(/<Key>([^<]+)<\/Key>/g)]
        const mdKeys = keyMatches
          .map((m) => m[1])
          .filter((k) => k.endsWith('.md'))

        const entries = await Promise.all(
          mdKeys.map(async (key) => {
            const [content, meta] = await Promise.all([s3Get(key), s3Head(key)])
            const slug = key.replace('blog/', '').replace('.md', '')
            const titleLine = content
              .split('\n')
              .find((l) => l.startsWith('# '))
            const title = titleLine ? titleLine.replace('# ', '').trim() : slug
            const ts = meta['creation-date']
              ? Number(meta['creation-date'])
              : Date.now()
            return {
              id: slug,
              data: { title, date: ts.toString(), content },
            }
          }),
        )

        return {
          entries: entries.sort(
            (a, b) => Number(b.data.date) - Number(a.data.date),
          ),
        }
      } catch (error) {
        return {
          error:
            error instanceof Error ? error : new Error('Failed to load blog'),
        }
      }
    },

    loadEntry: async (slug) => {
      try {
        const [content, meta] = await Promise.all([
          s3Get(`blog/${slug}.md`),
          s3Head(`blog/${slug}.md`),
        ])
        const titleLine = content.split('\n').find((l) => l.startsWith('# '))
        const title = titleLine ? titleLine.replace('# ', '').trim() : slug
        const ts = meta['creation-date']
          ? Number(meta['creation-date'])
          : Date.now()
        return {
          entry: { id: slug, data: { title, date: ts.toString(), content } },
        }
      } catch {
        return { entry: null }
      }
    },
  }
}
