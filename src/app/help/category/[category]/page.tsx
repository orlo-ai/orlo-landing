import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Layout } from '@/components/layout';
import { 
  getAllHelpCategories, 
  getCategoryMeta, 
  getArticlesInCategory,
  getBreadcrumbs
} from '@/lib/help-articles';

// 生成靜態路由參數
export async function generateStaticParams() {
  const categories = getAllHelpCategories();
  return categories.map(category => ({
    category: category.id
  }));
}

// 生成 metadata
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}): Promise<Metadata> {
  const { category } = await params;
  
  try {
    const categoryMeta = getCategoryMeta(category);
    const articles = getArticlesInCategory(category);
    
    return {
      title: `${categoryMeta.title} - Orlo Help Center`,
      description: `${categoryMeta.description}。共 ${articles.length} 篇文章。`,
      keywords: [categoryMeta.title, 'Orlo', '幫助', '教學', '指南'],
      openGraph: {
        title: `${categoryMeta.title} - Orlo 幫助中心`,
        description: categoryMeta.description,
        images: ['https://orlo.cc/img/orlo-help-category.png'],
      },
    };
  } catch (error) {
    return {
      title: '分類不存在 - Orlo Help Center'
    };
  }
}

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  
  // 驗證分類是否存在
  const categories = getAllHelpCategories();
  const currentCategory = categories.find(cat => cat.id === category);
  
  if (!currentCategory) {
    notFound();
  }
  
  const articles = getArticlesInCategory(category);
  const breadcrumbs = getBreadcrumbs(category);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((item, index) => (
                <li key={item.href} className="flex items-center">
                  {index > 0 && (
                    <i className="fas fa-chevron-right text-gray-400 mx-2 text-xs"></i>
                  )}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-gray-900 font-medium">{item.title}</span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Category Header */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-6">
                <i className={`${currentCategory.icon} text-blue-600 text-2xl`}></i>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  {currentCategory.title}
                </h1>
                <p className="text-base text-gray-600 mb-4">
                  {currentCategory.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <i className="fas fa-file-alt mr-2"></i>
                  <span>{articles.length} 篇文章</span>
                </div>
              </div>
            </div>
          </div>

          {/* Articles List */}
          <div className="space-y-4">
            {articles.length > 0 ? (
              articles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-blue-300"
                >
                  <Link href={`/help/${category}/${article.slug}`} className="block p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {article.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <i className="fas fa-clock mr-1"></i>
                            <span>{article.readTime}</span>
                          </div>
                          
                          <div className="flex items-center">
                            <i className="fas fa-calendar mr-1"></i>
                            <span>Updated {new Date(article.updatedAt).toLocaleDateString('en-US')}</span>
                          </div>
                          
                          {article.tags.length > 0 && (
                            <div className="flex items-center">
                              <i className="fas fa-tags mr-1"></i>
                              <div className="flex gap-1">
                                {article.tags.slice(0, 3).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="ml-6 flex items-center text-blue-600">
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-file-alt text-gray-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  尚無文章
                </h3>
                <p className="text-gray-600">
                  這個分類還沒有文章，請稍後再來查看
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link
              href="/help"
              className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              返回幫助中心
            </Link>
            
            <div className="text-sm text-gray-500">
              共 {articles.length} 篇文章
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}