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
    <ul className='list-none flex flex-col items-center mx-auto text-center w-full max-w-2xl'>
      {!error &&
        blogPosts
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((blogPost) => (
            <li key={blogPost.id} className='w-full'>
              <Link key={blogPost.id} href={`/blog/${blogPost.title}`}>
                <div className='w-full flex flex-col md:flex-row space-x-0 md:space-x-2 justify-center'>
                  <p className='w-[100px] tabular-nums'>
                    {String(blogPost.date).split('T')[0]}
                  </p>
                  <p className='tracking-tight'>
                    {String(blogPost.title).replace('_', ' ').slice(0)}
                  </p>
                </div>
              </Link>
            </li>
          ))}
    </ul>
  );
}
