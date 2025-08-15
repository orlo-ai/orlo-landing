import React from 'react';
import { HelpArticleMetadata } from '@/types/help';

interface ArticleHeaderProps {
  article: HelpArticleMetadata;
  breadcrumbs: Array<{ title: string; href: string }>;
}

export default function ArticleHeader({ article, breadcrumbs }: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      {/* Breadcrumbs */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <i className="fas fa-chevron-right text-gray-400 mx-2 text-xs"></i>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.title}</span>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
          {getCategoryDisplayName(article.category)}
        </span>
      </div>

      {/* Article Title & Meta */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>
        
        {article.description && (
          <p className="text-xl text-gray-600 leading-relaxed">
            {article.description}
          </p>
        )}
      </div>

      {/* Article Meta Information */}
      <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-gray-200">
        <div className="flex items-center text-sm text-gray-600">
          <i className="fas fa-clock mr-2"></i>
          <span>{article.readTime}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <i className="fas fa-calendar mr-2"></i>
          <span>Updated {new Date(article.updatedAt).toLocaleDateString('en-US')}</span>
        </div>
        
        {article.tags.length > 0 && (
          <div className="flex items-center gap-2">
            <i className="fas fa-tags text-gray-400 text-sm"></i>
            <div className="flex flex-wrap gap-1">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
              {article.tags.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{article.tags.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions Bar */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
            <i className="fas fa-bookmark"></i>
            <span>收藏文章</span>
          </button>
          
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
            <i className="fas fa-share-alt"></i>
            <span>分享</span>
          </button>
          
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
            <i className="fas fa-print"></i>
            <span>列印</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <i className="fas fa-eye"></i>
          <span className="help-view-count">-- 次瀏覽</span>
        </div>
      </div>
    </header>
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