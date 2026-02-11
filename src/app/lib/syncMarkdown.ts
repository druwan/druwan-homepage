import { supabase } from './supabaseClient.ts';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { logger } from './utils.ts';

interface BlogPost {
  filename: string;
  date: string;
  title: string;
  content: string;
  last_modified: string;
}

const isDryRun = process.argv.includes('--dry-run');

function getMarkdownDir(): string {
  const markdownDir = process.env.MARKDOWNFILESDIR;
  if (!markdownDir) {
    throw new Error('No MARKDOWNFILESDIR found!');
  }
  return markdownDir;
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
      const title = data.title || path.basename(file, '.md');

      const blogPost: BlogPost = {
        filename: file,
        date: fileCreationDate,
        title,
        content,
        last_modified: lastModifiedDate,
      };

      // Check if post exists
      const { data: existingPosts, error: fetchError } = await supabase
        .from('blogposts')
        .select('filename, last_modified')
        .eq('filename', file)
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
        onConflict: 'filename',
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
      logger.error(`Unexpected failure processing file "${file}"`, {
        error: error,
      });
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
