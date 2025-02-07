import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
    <Markdown
      className='markdown prose prose-lg dark:prose-invert px-6'
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ ...props }) => (
          <a
            {...props}
            className='text-blue-500 hover:underline font-semibold'
            target='_blank'
            rel='noopener noreferrer'
          />
        ),
      }}
    >
      {data[0].content}
    </Markdown>
  );
}
