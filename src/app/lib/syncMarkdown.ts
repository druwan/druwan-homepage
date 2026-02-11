import { supabase } from './supabaseClient.ts';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface BlogPost {
  filename: string;
  date: string;
  title: string;
  content: string;
  last_modified: string;
}

const log = {
  info: (msg: string) =>
    console.log(`[${new Date().toISOString()}] INFO ${msg}`),
  warn: (msg: string) =>
    console.warn(`[${new Date().toISOString()}] WARN ${msg}`),
  error: (msg: string, err?: unknown) =>
    console.error(`[${new Date().toISOString()}] ERROR ${msg}`, err ?? ''),
};

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

  log.info(`Starting MD sync from: ${markdownDir}`);

  const files = fs
    .readdirSync(markdownDir)
    .filter((file) => file.endsWith('.md'));

  log.info(`Found ${files.length} markdown files`);

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
        log.error(`Error fetching ${title}`, fetchError);
        continue;
      }

      // If file exist & unmodified --> Skip
      if (existingPosts && existingPosts.last_modified === lastModifiedDate) {
        skipped++;
        log.info(`Skipping unchanged: ${title}`);
        continue;
      }

      // Insert or update blog post
      const { error } = await supabase.from('blogposts').upsert(blogPost, {
        onConflict: 'filename',
      });

      if (error) {
        failed++;
        log.error(`Upsert failed for: ${title}:`, error);
      } else {
        processed++;
        log.info(`Synced: ${title}`);
      }
    } catch (error) {
      failed++;
      log.error(`Unexpected failure processing file: "${file}"`, error);
    }
  }

  const duration = ((Date.now() - start) / 1000).toFixed(2);
  log.info(
    `Sync complete in ${duration}s | processed=${processed} skipped=${skipped} failed=${failed}`,
  );
}

processMarkdownFiles().catch((err) => {
  log.error('Fata error during markdown sync', err);
  process.exit(1);
});
