import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '@/components/layout';
import { getBlogPost, getRelatedPosts, getAllBlogPosts, blogCategories } from '@/lib/blog-articles';
import { formatDate } from '@/lib/content-utils';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Orlo',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} - Orlo Blog`,
    description: post.description,
    keywords: [
      ...post.tags,
      ...(post.seoKeywords || []),
      'time management',
      'productivity',
      'AI tools',
    ],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : ['https://orlo.cc/img/orlo-blog-og.png'],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    other: {
      'article:published_time': post.publishedAt,
      'article:modified_time': post.updatedAt,
      'article:author': post.author.name,
      'article:section': blogCategories.find(cat => cat.id === post.category)?.title || post.category,
    }
  };
}

export async function generateStaticParams() {
  const allPosts = getAllBlogPosts();
  return allPosts.map(post => ({
    slug: post.slug
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);
  const categoryInfo = blogCategories.find(cat => cat.id === post.category);

  return (
    <Layout>
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">›</span>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Article Header */}
          <header className="mb-8">
            
            <div className="flex items-center mb-4">
              <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                categoryInfo?.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                categoryInfo?.color === 'green' ? 'bg-green-100 text-green-800' :
                categoryInfo?.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                categoryInfo?.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                categoryInfo?.color === 'red' ? 'bg-red-100 text-red-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {categoryInfo?.title || post.category}
              </span>
              <span className="mx-3 text-gray-300">•</span>
              <span className="text-gray-600">{post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center text-sm text-gray-500 mb-8">
              <div>Published {formatDate(post.publishedAt, 'en-US')}</div>
              {post.updatedAt !== post.publishedAt && (
                <>
                  <span className="mx-3">•</span>
                  <div>Updated {formatDate(post.updatedAt, 'en-US')}</div>
                </>
              )}
            </div>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="mb-8">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full rounded-lg shadow-sm"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none 
              prose-headings:text-gray-900 prose-headings:tracking-tight
              prose-h1:text-3xl prose-h1:mt-12 prose-h1:mb-6 prose-h1:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5 prose-h2:font-semibold
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-medium
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-gray-900 prose-strong:font-medium
              prose-ul:my-6 prose-li:mb-3
              prose-a:text-blue-600 prose-a:font-medium hover:prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline
              prose-code:text-sm prose-code:text-blue-700 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-medium
              prose-blockquote:border-l-4 prose-blockquote:border-blue-200 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                          {blogCategories.find(cat => cat.id === relatedPost.category)?.title || relatedPost.category}
                        </span>
                        <span className="mx-2 text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{relatedPost.readTime}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}