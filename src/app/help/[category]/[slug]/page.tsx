import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Layout } from '@/components/layout';
import { marked } from 'marked';
import ViewTracker from '@/components/help/ViewTracker';
import { 
  getHelpArticle, 
  generateStaticParams as getStaticParams,
  validateArticlePath,
  getRelatedArticles,
  getBreadcrumbs
} from '@/lib/help-articles';
import { parseMarkdownToHTML } from '@/lib/content-utils';

// 生成靜態路由
export async function generateStaticParams() {
  return getStaticParams();
}

// 生成 metadata
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}): Promise<Metadata> {
  const { category, slug } = await params;
  
  // 驗證路徑是否存在
  if (!validateArticlePath(category, slug)) {
    return {
      title: 'Article Not Found - Orlo Help Center',
      description: 'The requested article could not be found.'
    };
  }

  const article = getHelpArticle(category, slug);
  
  if (!article) {
    return {
      title: 'Article Not Found - Orlo Help Center',
      description: 'The requested article could not be found.'
    };
  }
  
  return {
    title: `${article.title} - Orlo Help Center`,
    description: article.description,
    keywords: [...article.tags, 'Orlo', 'help', 'tutorial'],
    openGraph: {
      title: `${article.title} - Orlo Help Center`,
      description: article.description,
      images: ['https://orlo.cc/img/orlo-help-article.png'],
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: ['Orlo Team'],
      tags: article.tags
    },
    other: {
      'article:published_time': article.publishedAt,
      'article:modified_time': article.updatedAt,
      'article:author': 'Orlo Team',
      'article:section': category,
      'article:tag': article.tags.join(',')
    }
  };
}

interface ArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  
  // 驗證文章路徑
  if (!validateArticlePath(category, slug)) {
    notFound();
  }

  const article = getHelpArticle(category, slug);
  
  if (!article) {
    notFound();
  }

  // 獲取相關文章
  const { content, ...articleMetadata } = article;
  const relatedArticles = getRelatedArticles(articleMetadata, 3);
  
  // 獲取麵包屑
  const breadcrumbs = getBreadcrumbs(category, slug);
  
  // 將 MDX 內容轉換為 HTML
  const htmlContent = parseMarkdownToHTML(content);

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* View Tracker - 追蹤瀏覽次數 */}
        <ViewTracker articleId={article.id} />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* 簡化的麵包屑 */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/help" className="hover:text-blue-600">Help Center</Link>
              <span>/</span>
              <span className="text-gray-900">{article.title}</span>
            </div>
          </nav>

          {/* 文章標題 */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              {article.title}
            </h1>
          </div>

          {/* 文章內容 */}
          <div className="mb-12">
            <div 
              className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </div>

          {/* 簡化的頁腳 */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-gray-500 mb-4 sm:mb-0">
                Updated: {new Date(article.updatedAt).toLocaleDateString('en-US')}
              </div>
              <div className="flex items-center space-x-4">
                <Link 
                  href="/help"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  ← Back to Help Center
                </Link>
                <a
                  href="mailto:support@orlo.cc"
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                >
                  Need Help?
                </a>
              </div>
            </div>
          </div>

          {/* 相關文章（如果有的話） */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-3">
                {relatedArticles.slice(0, 3).map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    href={`/help/${relatedArticle.category}/${relatedArticle.slug}`}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-sm font-medium text-gray-900 hover:text-blue-600">
                      {relatedArticle.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {relatedArticle.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}