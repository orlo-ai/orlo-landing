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

  // 靜態頁面 - 省略 lastModified (變動不頻繁,省略比不準確更好)
  // 移除已棄用的 changeFrequency 和 priority (Google/Bing 已忽略)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
    },
    {
      url: `${baseUrl}/blog/`,
    },
    {
      url: `${baseUrl}/features/`,
    },
    {
      url: `${baseUrl}/install-guide/`,
    },
    {
      url: `${baseUrl}/support/`,
    },
    {
      url: `${baseUrl}/release-notes/`,
    },
  ];

  // Blog 文章頁面 - 使用實際的更新時間
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    // 使用簡化的日期格式 (YYYY-MM-DD)
    lastModified: new Date(post.updatedAt || post.publishedAt)
      .toISOString()
      .split('T')[0],
  }));

  return [...staticPages, ...blogPages];
}
