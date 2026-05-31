import { AwsClient } from 'aws4fetch'

export const BUCKET = import.meta.env.S3_BUCKET
export const ENDPOINT = import.meta.env.S3_ENDPOINT
export const REGION = import.meta.env.S3_REGION

export function getS3Client() {
  return new AwsClient({
    accessKeyId: import.meta.env.S3_ACCESS_KEY_ID!,
    secretAccessKey: import.meta.env.S3_SECRET_ACCESS_KEY!,
    region: REGION,
    service: 's3',
  })
}

export async function s3Get(key: string): Promise<string> {
  const client = getS3Client()
  const url = `${ENDPOINT}/${BUCKET}/${key}`
  const response = await client.fetch(url)
  if (!response.ok) throw new Error(`S3 fetch failed: ${response.status} ${key}`)
  return response.text()
}

export async function s3List(prefix: string): Promise<string[]> {
  const client = getS3Client()
  const url = `${ENDPOINT}/${BUCKET}?list-type=2&prefix=${encodeURIComponent(prefix)}`
  const response = await client.fetch(url)
  if (!response.ok) throw new Error(`S3 list failed: ${response.status}`)
  const xml = await response.text()
  const keys = [...xml.matchAll(/<Key>([^<]+)<\/Key>/g)].map(m => m[1])
  return keys
}
