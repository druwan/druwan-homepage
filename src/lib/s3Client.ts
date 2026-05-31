import { AwsClient } from 'aws4fetch'

export const BUCKET = import.meta.env.S3_BUCKET
export const ENDPOINT = import.meta.env.S3_ENDPOINT
export const REGION = import.meta.env.S3_REGION

const cache = new Map<string, { value: string; expires: number }>()
const TTL = 5 * 60 * 1000 // 5 min

export function getS3Client() {
  const accessKeyId = import.meta.env.S3_ACCESS_KEY_ID!
  const secretAccessKey = import.meta.env.S3_SECRET_ACCESS_KEY!

  if (!accessKeyId || !secretAccessKey) {
    throw new Error('S3 credentials missing')
  }

  return new AwsClient({
    accessKeyId,
    secretAccessKey,
    region: REGION,
    service: 's3',
  })
}

export async function s3Get(key: string): Promise<string> {
  const cached = cache.get(key)
  if (cached && cached.expires > Date.now()) return cached.value

  const client = getS3Client()
  const response = await client.fetch(`${ENDPOINT}/${BUCKET}/${key}`)
  if (!response.ok) throw new Error(`S3 fetch failed: ${response.status} ${key}`)
  const value = await response.text()
  cache.set(key, { value, expires: Date.now() + TTL })
  return value
}

export async function s3List(prefix: string): Promise<string> {
  const cacheKey = `__list__${prefix}`
  const cached = cache.get(cacheKey)
  if (cached && cached.expires > Date.now()) return cached.value

  const client = getS3Client()
  const url = `${ENDPOINT}/${BUCKET}?list-type=2&prefix=${encodeURIComponent(prefix)}`
  const response = await client.fetch(url)
  if (!response.ok) throw new Error(`S3 list failed: ${response.status}`)
  const xml = await response.text()
  cache.set(cacheKey, { value: xml, expires: Date.now() + TTL })
  return xml
}

export async function s3Head(key: string): Promise<Record<string, string>> {
  const cacheKey = `__head__${key}`
  const cached = cache.get(cacheKey)
  if (cached && cached.expires > Date.now()) return JSON.parse(cached.value)

  const client = getS3Client()
  const response = await client.fetch(`${ENDPOINT}/${BUCKET}/${key}`, { method: 'HEAD' })
  if (!response.ok) throw new Error(`S3 head failed: ${response.status} ${key}`)

  const meta: Record<string, string> = {}
  response.headers.forEach((value, key) => {
    if (key.startsWith('x-amz-meta-')) {
      meta[key.replace('x-amz-meta-', '')] = value
    }
  })

  cache.set(cacheKey, { value: JSON.stringify(meta), expires: Date.now() + TTL })
  return meta
}
