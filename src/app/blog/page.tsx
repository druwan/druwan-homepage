'use client';

import { useEffect, useState } from 'react';

export default function BlogPosts() {
  const [posts, setPosts] = useState();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        const { data, error } = await response.json();
        if (error) {
          setError(error);
        } else {
          setPosts(data);
        }
      } catch (err) {
        setError(`Failed to fetch posts: ${err.message}`);
      }
    };
    fetchPosts();
  }, []);

  return <>posts</>;
}
