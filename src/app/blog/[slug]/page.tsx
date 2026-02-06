import MarkdownRenderer from '@/components/MarkdownRenderer';
import { supabase } from 'src/app/lib/supabaseClient';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data, error } = await supabase
    .from('blogposts')
    .select('*')
    .eq('title', slug)
    .single();

  if (error || !data || !data.content) {
    return <div>Post not found: {error?.message}.</div>;
  }

  return <MarkdownRenderer content={data.content} />;
}
