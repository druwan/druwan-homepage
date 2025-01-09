import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import { supabase } from './supabaseClient';

const markdownDir = process.env.MARKDOWNFILESDIR;
export async function processMarkdownFiles() {
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

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    const { error } = await supabase.from('blogposts').upsert({
      date: fileCreationDate,
      title,
      content: contentHtml,
    });

    if (error) {
      console.error(`Error inserting ${title}`, error.message);
    } else {
      console.log(`Successfully inserted/updated post: ${title}`);
    }
  }
}
