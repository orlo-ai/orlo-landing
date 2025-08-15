import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { HelpArticle, HelpArticleMetadata, HelpCategory, CategoryMeta } from '@/types/help';
import { parseMarkdownFile, formatReadingTime } from './content-utils';

const helpContentPath = join(process.cwd(), 'content/help');

/**
 * 讀取分類的 metadata
 */
export function getCategoryMeta(categoryPath: string): CategoryMeta {
  try {
    const metaPath = join(helpContentPath, categoryPath, '_meta.json');
    const metaContent = readFileSync(metaPath, 'utf8');
    return JSON.parse(metaContent);
  } catch (error) {
    console.warn(`無法讀取分類 metadata: ${categoryPath}`, error);
    return {
      title: categoryPath.charAt(0).toUpperCase() + categoryPath.slice(1),
      description: '',
      icon: 'fas fa-question-circle',
      order: 999
    };
  }
}

/**
 * 讀取所有分類目錄
 */
export function getCategoryDirectories(): string[] {
  try {
    return readdirSync(helpContentPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .filter(name => !name.startsWith('.'));
  } catch (error) {
    console.error('讀取分類目錄失敗:', error);
    return [];
  }
}

/**
 * 讀取單個 MDX 文章
 */
export function getHelpArticle(category: string, slug: string): HelpArticle | null {
  try {
    const fullPath = join(helpContentPath, category, `${slug}.mdx`);
    const parsed = parseMarkdownFile(fullPath);
    
    if (!parsed) {
      return null;
    }
    
    const { frontmatter: data, content } = parsed;
    
    return {
      id: `${category}-${slug}`,
      slug,
      title: data.title || slug,
      description: data.description || '',
      category,
      tags: data.tags || [],
      order: data.order || 999,
      publishedAt: data.publishedAt || new Date().toISOString(),
      updatedAt: data.updatedAt || new Date().toISOString(),
      readTime: data.readTime || formatReadingTime(content, 'en'),
      draft: data.draft || false,
      content
    };
  } catch (error) {
    console.error(`讀取文章失敗: ${category}/${slug}`, error);
    return null;
  }
}

/**
 * 讀取分類下的所有文章 metadata
 */
export function getArticlesInCategory(category: string): HelpArticleMetadata[] {
  try {
    const categoryPath = join(helpContentPath, category);
    const files = readdirSync(categoryPath)
      .filter(name => name.endsWith('.mdx'))
      .map(name => name.replace(/\.mdx$/, ''));

    const articles = files
      .map(slug => {
        const article = getHelpArticle(category, slug);
        if (!article) {
          return null;
        }
        
        // 移除 content 以減少記憶體使用
        const { content, ...metadata } = article;
        return metadata;
      })
      .filter((article): article is HelpArticleMetadata => article !== null);

    // 按照 order 排序
    return articles.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error(`讀取分類文章失敗: ${category}`, error);
    return [];
  }
}

/**
 * 讀取所有分類和文章
 */
export function getAllHelpCategories(): HelpCategory[] {
  const categoryDirs = getCategoryDirectories();
  
  const categories = categoryDirs
    .map(categoryDir => {
      const meta = getCategoryMeta(categoryDir);
      const articles = getArticlesInCategory(categoryDir);
      
      return {
        id: categoryDir,
        title: meta.title,
        description: meta.description,
        icon: meta.icon,
        order: meta.order,
        articleCount: articles.length,
        articles
      };
    })
    .sort((a, b) => a.order - b.order);

  return categories;
}

/**
 * 讀取所有文章 metadata（用於搜尋和統計）
 */
export function getAllHelpArticles(): HelpArticleMetadata[] {
  const categories = getAllHelpCategories();
  return categories.flatMap(category => category.articles);
}

/**
 * 根據 ID 查找文章
 */
export function findArticleById(articleId: string): HelpArticleMetadata | null {
  const allArticles = getAllHelpArticles();
  return allArticles.find(article => article.id === articleId) || null;
}

/**
 * 根據標籤找相關文章
 */
export function getRelatedArticles(
  currentArticle: HelpArticleMetadata,
  limit: number = 4
): HelpArticleMetadata[] {
  const allArticles = getAllHelpArticles();
  
  // 計算文章相似度分數
  const scoredArticles = allArticles
    .filter(article => article.id !== currentArticle.id)
    .map(article => {
      let score = 0;
      
      // 相同分類加分
      if (article.category === currentArticle.category) {
        score += 10;
      }
      
      // 共同標籤加分
      const commonTags = article.tags.filter(tag => 
        currentArticle.tags.includes(tag)
      );
      score += commonTags.length * 5;
      
      // 標題關鍵字相似度（簡單實作）
      const currentWords = currentArticle.title.toLowerCase().split(/\s+/);
      const articleWords = article.title.toLowerCase().split(/\s+/);
      const commonWords = currentWords.filter(word => 
        articleWords.includes(word) && word.length > 2
      );
      score += commonWords.length * 2;
      
      return { article, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scoredArticles.map(item => item.article);
}

/**
 * 搜尋文章（簡單的標題和標籤搜尋）
 */
export function searchArticles(
  query: string,
  options: {
    category?: string;
    limit?: number;
  } = {}
): HelpArticleMetadata[] {
  const allArticles = getAllHelpArticles();
  const searchTerms = query.toLowerCase().split(/\s+/);
  const { category, limit = 20 } = options;
  
  let filteredArticles = allArticles;
  
  // 分類篩選
  if (category) {
    filteredArticles = filteredArticles.filter(article => 
      article.category === category
    );
  }
  
  // 搜尋匹配
  const scoredArticles = filteredArticles
    .map(article => {
      let score = 0;
      const title = article.title.toLowerCase();
      const description = article.description.toLowerCase();
      const tags = article.tags.map(tag => tag.toLowerCase()).join(' ');
      
      searchTerms.forEach(term => {
        if (title.includes(term)) score += 10;
        if (description.includes(term)) score += 5;
        if (tags.includes(term)) score += 3;
      });
      
      return { article, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scoredArticles.map(item => item.article);
}

/**
 * 生成靜態路由參數
 */
export function generateStaticParams() {
  const categories = getAllHelpCategories();
  const params: Array<{ category: string; slug: string }> = [];
  
  categories.forEach(category => {
    category.articles.forEach(article => {
      params.push({
        category: category.id,
        slug: article.slug
      });
    });
  });
  
  return params;
}

/**
 * 驗證文章路徑是否存在
 */
export function validateArticlePath(category: string, slug: string): boolean {
  try {
    const fullPath = join(helpContentPath, category, `${slug}.mdx`);
    readFileSync(fullPath, 'utf8');
    return true;
  } catch {
    return false;
  }
}

/**
 * 獲取麵包屑導航資料
 */
export function getBreadcrumbs(category: string, slug?: string) {
  const categoryMeta = getCategoryMeta(category);
  const breadcrumbs = [
    { title: '幫助中心', href: '/help' },
    { title: categoryMeta.title, href: `/help/category/${category}` }
  ];
  
  if (slug) {
    const article = getHelpArticle(category, slug);
    if (article) {
      breadcrumbs.push({ 
        title: article.title, 
        href: `/help/${category}/${slug}` 
      });
    }
  }
  
  return breadcrumbs;
}

/**
 * 獲取熱門標籤
 */
export function getPopularTags(limit: number = 10): Array<{ tag: string; count: number }> {
  const allArticles = getAllHelpArticles();
  const tagCounts = new Map<string, number>();
  
  allArticles.forEach(article => {
    article.tags.forEach(tag => {
      tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
    });
  });
  
  return Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}