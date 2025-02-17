import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { supabase } from '../lib/supabaseClient';

const markdownDir = process.env.MARKDOWNFILESDIR;

if (!markdownDir) {
  console.error('No MARKDOWNFILESDIR found!');
  process.exit(1);
}

interface BlogPost {
  filename: string;
  date: string;
  title: string;
  content: string;
  last_modified: string;
}

async function processMarkdownFiles(): Promise<void> {
  const files = fs
    .readdirSync(markdownDir)
    .filter((file) => file.endsWith('.md'));

  for (const file of files) {
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

    // Check if file exists
    const { data: existingPosts, error: fetchError } = await supabase
      .from('blogposts')
      .select('filename, last_modified')
      .eq('filename', file)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error(`Error fetching ${title}`, fetchError);
    }

    // If file exist & unmodified --> Skip
    if (existingPosts && existingPosts.last_modified === lastModifiedDate) {
      console.log(`Skipping unchanged post: ${title}`);
      continue;
    }

    // Insert or update blog post
    const { error } = await supabase.from('blogposts').upsert(blogPost, {
      onConflict: 'filename',
    });

    if (error) {
      console.error(`Error inserting/updating ${title}:`, error);
    } else {
      console.log(`Successfully processed post: ${title}`);
    }
  }
}

processMarkdownFiles()
  .then(() => console.log('MarkdownSync complete'))
  .catch((err) => {
    console.error('Error processing markdown files:', err);
    process.exit(1);
  });
