import Markdown from 'react-markdown';
import { supabase } from 'src/app/lib/supabaseClient';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { data, error } = await supabase
    .from('blogposts')
    .select('*')
    .eq('title', `${slug}`);

  if (error) {
    return (
      <div>
        Post not found: {error instanceof Error ? error.message : error}.
      </div>
    );
  }

  return (
    <Markdown className='w-full max-w-full prose dark:prose-invert prose-h1:text-2xl prose-a:text-carribeanCurrent dark:prose-a:text-ochre'>
      {data[0].content}
    </Markdown>
  );
}
