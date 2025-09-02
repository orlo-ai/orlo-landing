import { Metadata } from 'next';
import Link from 'next/link';
import { Layout } from '@/components/layout';
import { getAllBlogPosts, blogCategories } from '@/lib/blog-articles';
import { formatDate } from '@/lib/content-utils';
import {
  BoltIcon,
  ClockIcon,
  CpuChipIcon,
  ChartBarIcon,
  LightBulbIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Blog - Orlo | Time Management & Productivity Insights',
  description: 'Explore the latest trends in time management, AI tools, and productivity strategies. Practical insights and tips from the Orlo team.',
  keywords: [
    'time management',
    'productivity',
    'AI tools',
    'efficiency',
    'work techniques',
    'TimeBox',
    'deep work'
  ],
  openGraph: {
    title: 'Blog - Orlo | Time Management & Productivity Insights',
    description: 'Discover the latest strategies for time management and productivity to make your work more efficient.',
    images: ['https://orlo.cc/img/orlo-blog-og.png'],
    type: 'website',
  },
  other: {
    'robots': 'index, follow',
    'author': 'Orlo Team',
  }
};

export default function BlogPage() {
  const allPosts = getAllBlogPosts();

  // 分類圖標映射
  const categoryIcons = {
    'productivity': BoltIcon,
    'time-management': ClockIcon,
    'ai-tools': CpuChipIcon,
    'case-study': ChartBarIcon,
    'insights': LightBulbIcon,
    'default': DocumentTextIcon
  } as const;

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Time Management & Productivity Insights
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the latest time management strategies, AI tools, and productivity tips to make your work and life more efficient.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {allPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Great content coming soon!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {allPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden"
                >
                  {/* Desktop: Horizontal Layout */}
                  <div className="hidden sm:flex items-center space-x-6 p-6">
                    {/* Desktop Image */}
                    <div className="flex-shrink-0">
                      {post.coverImage ? (
                        <div className="w-72 h-48 rounded-lg overflow-hidden bg-gray-100">
                          <img 
                            src={post.coverImage} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ) : (
                        <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                          post.category === 'productivity' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                          post.category === 'time-management' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                          post.category === 'ai-tools' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                          post.category === 'case-study' ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                          post.category === 'insights' ? 'bg-gradient-to-br from-red-500 to-red-600' :
                          'bg-gradient-to-br from-gray-500 to-gray-600'
                        }`}>
                          {(() => {
                            const IconComponent = categoryIcons[post.category as keyof typeof categoryIcons] || categoryIcons.default;
                            return <IconComponent className="w-8 h-8 text-white" />;
                          })()}
                        </div>
                      )}
                    </div>

                    {/* Desktop Content */}
                    <div className="flex-1 min-w-0">
                    <div className="flex items-center mb-2">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                        post.category === 'productivity' ? 'bg-blue-100 text-blue-800' :
                        post.category === 'time-management' ? 'bg-green-100 text-green-800' :
                        post.category === 'ai-tools' ? 'bg-purple-100 text-purple-800' :
                        post.category === 'case-study' ? 'bg-orange-100 text-orange-800' :
                        post.category === 'insights' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {blogCategories.find(cat => cat.id === post.category)?.title || post.category}
                      </span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{formatDate(post.publishedAt, 'en-US')}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile: Vertical Layout */}
                  <div className="sm:hidden">
                    {/* Mobile Image */}
                    {post.coverImage ? (
                      <div className="w-full aspect-[3/2] bg-gray-100">
                        <img 
                          src={post.coverImage} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-32 flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                          post.category === 'productivity' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                          post.category === 'time-management' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                          post.category === 'ai-tools' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                          post.category === 'case-study' ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                          post.category === 'insights' ? 'bg-gradient-to-br from-red-500 to-red-600' :
                          'bg-gradient-to-br from-gray-500 to-gray-600'
                        }`}>
                          {(() => {
                            const IconComponent = categoryIcons[post.category as keyof typeof categoryIcons] || categoryIcons.default;
                            return <IconComponent className="w-8 h-8 text-white" />;
                          })()}
                        </div>
                      </div>
                    )}

                    {/* Mobile Content */}
                    <div className="p-4">
                      <div className="flex items-center mb-2">
                        <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                          post.category === 'productivity' ? 'bg-blue-100 text-blue-800' :
                          post.category === 'time-management' ? 'bg-green-100 text-green-800' :
                          post.category === 'ai-tools' ? 'bg-purple-100 text-purple-800' :
                          post.category === 'case-study' ? 'bg-orange-100 text-orange-800' :
                          post.category === 'insights' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {blogCategories.find(cat => cat.id === post.category)?.title || post.category}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{formatDate(post.publishedAt, 'en-US')}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-3 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}