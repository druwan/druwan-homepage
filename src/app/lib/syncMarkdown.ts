import { supabase } from './supabaseClient.ts';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { logger } from './serverLogger.ts';
import type { Database } from '../../../database.types'

type BlogPost = Database["public"]["Tables"]["blogposts"]["Insert"]

const isDryRun = process.argv.includes('--dry-run');

function getMarkdownDir(): string {
  const markdownDir = process.env.MARKDOWNFILESDIR;
  if (!markdownDir) {
    throw new Error('No MARKDOWNFILESDIR found!');
  }
  return markdownDir;
}

function createSlug(filename: string): string {
  return path.basename(filename, '.md').toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
}

async function processMarkdownFiles(): Promise<void> {
  const start = Date.now();
  const markdownDir = getMarkdownDir();

  let processed = 0;
  let skipped = 0;
  let failed = 0;

  logger.info(`Starting markdown sync | dry-run=${isDryRun}`);

  const files = fs
    .readdirSync(markdownDir)
    .filter((file) => file.endsWith('.md'));

  logger.info(`Found ${files.length} markdown files`);

  for (const file of files) {
    try {
      const filePath = path.join(markdownDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const fileStats = fs.statSync(filePath);

      const lastModifiedDate = fileStats.mtime.toISOString();
      const fileCreationDate = fileStats.birthtime.toISOString();

      const { data, content } = matter(fileContent);
      const slug = createSlug(file)
      const title = data.title || slug

      const blogPost: BlogPost = {
        slug,
        date: fileCreationDate,
        title,
        content,
        last_modified: lastModifiedDate,
      };

      // Check if post exists
      const { data: existingPosts, error: fetchError } = await supabase
        .from('blogposts')
        .select('slug, last_modified')
        .eq('slug', slug)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        failed++;
        logger.error(`Fetch failed for "${title}"`, { error: fetchError });
        continue;
      }

      // If file exist & unmodified --> Skip
      const existingModified = existingPosts?.last_modified
        ? new Date(existingPosts.last_modified).getTime()
        : null;
      const currentModified = new Date(lastModifiedDate).getTime();

      if (existingModified && existingModified === currentModified) {
        skipped++;
        logger.info(
          `Skipping unchanged post: "${title}"${isDryRun ? ' (dry-run)' : ''}`,
        );
        continue;
      }

      // Dry-run: log without writing
      if (isDryRun) {
        processed++;
        logger.info(`DRY RUN: would upsert post "${title}"`);
        continue;
      }

      // Insert or update blog post
      const { error } = await supabase.from('blogposts').upsert(blogPost, {
        onConflict: 'slug',
      });

      if (error) {
        failed++;
        logger.error(`Upsert failed for "${title}"`, { error });
      } else {
        processed++;
        logger.info(`Post synced: "${title}"`);
      }
    } catch (error) {
      failed++;
      if (error instanceof Error) {
        logger.error(`Unexpected failure processing file "${file}"`, {
          message: error.message,
          stack: error.stack
        });
      } else {
        logger.error(`Unexpected failure processing file "${file}"`, {
          error
        });
      }
    }
  }

  const duration = ((Date.now() - start) / 1000).toFixed(2);
  logger.info(
    `Markdown sync complete | processed=${processed} skipped=${skipped} failed=${failed} | duration=${duration}s`,
  );
}

processMarkdownFiles().catch((err) => {
  logger.error('Fatal error during markdown sync', { error: err });
  process.exit(1);
});
