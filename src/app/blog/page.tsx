import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '@/components/layout';
import { getAllBlogPosts, getFeaturedPosts, blogCategories } from '@/lib/blog-articles';
import { formatDate } from '@/lib/content-utils';

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
  const featuredPosts = getFeaturedPosts(2);
  const recentPosts = allPosts.slice(0, 6);

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Time Management & Productivity Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the latest time management strategies, AI tools, and productivity tips to make your work and life more efficient.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Posts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
                  >
                    {post.coverImage && (
                      <div className="aspect-video bg-gray-200 relative">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                          {blogCategories.find(cat => cat.id === post.category)?.title || post.category}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {post.author.avatar && (
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              width={32}
                              height={32}
                              className="rounded-full mr-3"
                            />
                          )}
                          <span className="text-sm text-gray-700">{post.author.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {formatDate(post.publishedAt, 'zh-TW')}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {blogCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.id}`}
                  className="group p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Recent Posts */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Latest Posts</h2>
              {allPosts.length > 6 && (
                <Link href="/blog/all" className="text-blue-600 hover:text-blue-700 font-medium">
                  View All →
                </Link>
              )}
            </div>
            
            {recentPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Great content coming soon!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                          {blogCategories.find(cat => cat.id === post.category)?.title || post.category}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{post.author.name}</span>
                        <span className="text-sm text-gray-500">
                          {formatDate(post.publishedAt, 'zh-TW')}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </section>

        </div>
      </div>
    </Layout>
  );
}