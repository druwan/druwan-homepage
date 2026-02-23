'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from 'src/app/lib/supabaseClient';

type BlogPost = {
  id: number;
  date: EpochTimeStamp;
  title: string;
  content: string;
};

export default function BlogPosts() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const { data, error } = await supabase.from('blogposts').select('*');
        if (error) {
          if (error instanceof Error) setError(error.message);
        } else {
          setBlogPosts(data || []);
        }
      } catch (error) {
        if (error instanceof Error)
          setError(`Failed to fetch posts: ${error.message}`);
      }
    };
    fetchBlogPosts();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <p className='mb-8 font-medium tracking-tight'>
        Some notes from my life, mainly writing for tracking my progress of
        learning <span className='text-burgundy dark:text-ochre'>Sinhala</span>.
      </p>
      <hr className='my-3 h-0.5 border-t-0 bg-burgundy/30 dark:bg-ochre/40' />
      <div>
        {blogPosts
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .map((blogPost) => (
            <Link
              key={blogPost.id}
              className='flex flex-col space-y-0.5 mb-1 transition-opacity duration-200 hover:opacity-80'
              href={`/blog/${blogPost.title}`}
            >
              <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2'>
                <p className='text-lg text-burgundy dark:text-ochre'>
                  {String(blogPost.title).split('_').length > 1
                    ? String(blogPost.title).split('_')[1]
                    : String(blogPost.title).split('_')[0]}
                </p>
                <p className='text-night/60 dark:text-antiFlashWhite/60 tabular-nums text-sm'>
                  {String(blogPost.date).split('T')[0]}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
