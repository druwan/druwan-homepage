import type { APIRoute } from 'astro'
import { s3Stream } from '../../lib/s3Client'

export const GET: APIRoute = async ({ params, request }) => {
  const id = params.id
  if (!id || !/^[0-9a-f-]{36}$/.test(id))
    return new Response('Not found', { status: 404 })

  const upstream = await s3Stream(`media/${id}`, request.headers.get('range'))
  if (!upstream.ok) return new Response('Not found', { status: 404 })

  const headers = new Headers()
  for (const h of [
    'content-type',
    'conent-length',
    'content-range',
    'etag',
    'last-modified',
  ]) {
    const v = upstream.headers.get(h)
    if (v) headers.set(h, v)
  }
  headers.set('accept-ranges', 'bytes')
  headers.set('cache-control', 'public, max-age=31536000, immutable')

  return new Response(upstream.body, { status: upstream.status, headers })
}
