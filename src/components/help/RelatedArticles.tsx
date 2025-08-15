import React from 'react';
import Link from 'next/link';
import { RelatedArticlesProps } from '@/types/help';

export default function RelatedArticles({ currentArticle, relatedArticles }: RelatedArticlesProps) {
  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          相關文章
        </h2>
        <p className="text-gray-600">
          這些文章可能也對你有幫助
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <div
            key={article.id}
            className="group border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200 hover:border-blue-300"
          >
            <Link href={`/help/${article.category}/${article.slug}`} className="block">
              {/* Article Category */}
              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded">
                  {getCategoryDisplayName(article.category)}
                </span>
              </div>

              {/* Article Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {article.title}
              </h3>

              {/* Article Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {article.description}
              </p>

              {/* Article Meta */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <i className="fas fa-clock mr-1"></i>
                  <span>{article.readTime}</span>
                </div>
                
                {/* Tags */}
                {article.tags.length > 0 && (
                  <div className="flex items-center">
                    <i className="fas fa-tag mr-1"></i>
                    <span className="truncate">
                      {article.tags.slice(0, 2).join(', ')}
                    </span>
                  </div>
                )}
              </div>

              {/* Arrow Indicator */}
              <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                <span className="mr-2">閱讀文章</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-200"></i>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Show More Button (if needed) */}
      <div className="mt-8 text-center">
        <Link
          href={`/help/category/${currentArticle.category}`}
          className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span>查看更多 {getCategoryDisplayName(currentArticle.category)} 文章</span>
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </section>
  );
}

// 輔助函數
function getCategoryDisplayName(categoryId: string): string {
  const categoryMap: Record<string, string> = {
    'getting-started': '快速上手',
    'core-features': '核心功能',
    'advanced': '進階功能',
    'troubleshooting': '疑難排解'
  };
  return categoryMap[categoryId] || categoryId;
}