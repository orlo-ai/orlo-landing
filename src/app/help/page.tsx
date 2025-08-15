import { Metadata } from 'next';
import Link from 'next/link';
import { Layout } from '@/components/layout';
import HelpHero from '@/components/help/HelpHero';
import { getAllHelpCategories, getAllHelpArticles } from '@/lib/help-articles';

export const metadata: Metadata = {
  title: 'Help Center - Orlo | Get Support & Guides',
  description: 'Find comprehensive guides, tutorials, and answers to common questions about using Orlo, your AI time management assistant.',
  keywords: [
    'Orlo help',
    'user guide',
    'AI assistant tutorial',
    'time management guide',
    'TimeBox tutorial',
    'FAQ'
  ],
  openGraph: {
    title: 'Help Center - Orlo | Learn to Master Your AI Time Management Assistant',
    description: 'Complete tutorials and guides to help you master all of Orlo\'s features. From quick start to advanced tips.',
    images: ['https://orlo.cc/img/orlo-help-center.png'],
  },
};

export default function HelpPage() {
  // 在伺服器端讀取所有分類和文章
  const allArticles = getAllHelpArticles();

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* 簡化的 Hero Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Help Center
            </h1>
            <p className="text-base text-gray-600">
              Find the answers you need
            </p>
          </div>
        </div>
        
        {/* 簡潔的文章列表 */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="space-y-3">
            {allArticles.map((article) => (
              <Link
                key={article.id}
                href={`/help/${article.category}/${article.slug}`}
                className="block group border-b border-gray-100 pb-4 pt-4 hover:bg-gray-50 px-4 rounded-lg transition-colors"
              >
                <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>

          {/* 簡化的聯繫區塊 */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">Can&apos;t find what you&apos;re looking for?</p>
            <a
              href="mailto:support@orlo.cc"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}