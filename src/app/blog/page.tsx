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
          setError(error.message);
        } else {
          setBlogPosts(data || []);
        }
      } catch (err) {
        setError(`Failed to fetch posts: ${err.message}`);
      }
    };
    fetchBlogPosts();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      <h1 className='mb-8 text-2xl font-medium tracking-tight'>Some posts</h1>
      <div>
        {blogPosts
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((blogPost) => (
            <Link
              key={blogPost.id}
              className='flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80'
              href={`/blog/${blogPost.title}`}
            >
              <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2'>
                <h2 className='text-black dark:text-white'>
                  {String(blogPost.title).split('_').length > 1
                    ? String(blogPost.title).split('_')[1]
                    : String(blogPost.title).split('_')[0]}
                </h2>
                <p className='text-neutral-600 dark:text-neutral-400 tabular-nums text-sm'>
                  {String(blogPost.date).split('T')[0]}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
