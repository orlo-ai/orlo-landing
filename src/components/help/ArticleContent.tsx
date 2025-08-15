import React from 'react';

interface ArticleContentProps {
  children: React.ReactNode;
}

export default function ArticleContent({ children }: ArticleContentProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </article>
  );
}