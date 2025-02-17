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
  date: string;
  title: string;
  content: string;
}

async function processMarkdownFiles(): Promise<void> {
  const files = fs
    .readdirSync(markdownDir)
    .filter((file) => file.endsWith('.md'));

  for (const file of files) {
    const filePath = path.join(markdownDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const fileStats = fs.statSync(filePath);
    const fileCreationDate = fileStats.birthtime.toISOString();
    const { data, content } = matter(fileContent);

    const title = data.title || path.basename(file, '.md');

    const blogPost: BlogPost = {
      date: fileCreationDate,
      title,
      content,
    };

    const { error } = await supabase.from('blogposts').upsert(blogPost);

    if (error) {
      console.error(`Error inserting ${title}`, error.message);
    } else {
      console.log(`Successfully inserted/updated post: ${title}`);
    }
  }
}

processMarkdownFiles()
  .then(() => console.log('MarkdownSync complete'))
  .catch((err) => {
    console.error('Error processing markdown files:', err);
    process.exit(1);
  });
