'use client';

import ReactMarkdown from 'react-markdown';

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className='w-full max-w-full prose dark:prose-invert'>{content}</div>
  );
}
