import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/blog-articles';

// 強制靜態生成 (配合 output: 'export')
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://orlo.cc';

  // 獲取所有 blog 文章
  let blogPosts: ReturnType<typeof getAllBlogPosts> = [];
  try {
    blogPosts = getAllBlogPosts();
  } catch (error) {
    console.error('Error loading blog posts for sitemap:', error);
    // 如果讀取失敗,繼續使用空陣列,確保 sitemap 仍能生成
  }

  // 靜態頁面 (排除 pricing、example、privacy-policy、terms)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/install-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/release-notes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Blog 文章頁面
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
