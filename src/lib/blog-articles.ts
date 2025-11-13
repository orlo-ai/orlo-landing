import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostMetadata, BlogCategory } from '@/types/blog';
import { parseMarkdownToHTML, estimateReadingTime, formatDate } from '@/lib/content-utils';

const blogContentPath = join(process.cwd(), 'content/blog');

// 預設封面圖片映射表
const DEFAULT_COVER_IMAGES: Record<string, string> = {
  'productivity': '/img/blog/default/productivity.jpg',
  'time-management': '/img/blog/default/time-management.jpg',
  'ai-tools': '/img/blog/default/ai-tools.jpg',
  'case-study': '/img/blog/default/case-study.jpg',
  'insights': '/img/blog/default/insights.jpg',
};
const FALLBACK_IMAGE = '/img/blog/default/default.jpg';

// Blog categories definition
export const blogCategories: BlogCategory[] = [
  {
    id: 'productivity',
    title: 'Productivity',
    description: 'Time management & efficiency tips',
    color: 'blue',
  },
  {
    id: 'time-management',
    title: 'Time Management',
    description: 'Scientific methods for mastering time',
    color: 'green',
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    description: 'Latest trends in AI-assisted work',
    color: 'purple',
  },
  {
    id: 'case-study',
    title: 'Case Studies',
    description: 'Real user success stories',
    color: 'orange',
  },
  {
    id: 'insights',
    title: 'Insights',
    description: 'Deep thinking & industry analysis',
    color: 'red',
  },
];

// Get all blog posts
export function getAllBlogPosts(): BlogPostMetadata[] {
  const posts: BlogPostMetadata[] = [];
  
  try {
    // 讀取 blog 目錄下的所有 MDX 檔案
    const files = readdirSync(blogContentPath).filter(file => 
      file.endsWith('.mdx') && statSync(join(blogContentPath, file)).isFile()
    );
    
    files.forEach(file => {
      const filePath = join(blogContentPath, file);
      const slug = file.replace('.mdx', '');
      
      try {
        const fileContent = readFileSync(filePath, 'utf8');
        const { data: frontmatter, content } = matter(fileContent);
        
        // 驗證必要欄位
        if (!frontmatter.title || !frontmatter.description) {
          console.warn(`Missing required fields in ${filePath}`);
          return;
        }
        
        // 生成摘要
        const excerpt = frontmatter.excerpt || content.substring(0, 200) + '...';
        
        const post: BlogPostMetadata = {
          id: slug,
          title: frontmatter.title,
          description: frontmatter.description,
          author: frontmatter.author || {
            name: 'Orlo Team',
            avatar: '/img/orlo-team-avatar.png'
          },
          publishedAt: frontmatter.publishedAt || new Date().toISOString().split('T')[0],
          updatedAt: frontmatter.updatedAt || frontmatter.publishedAt || new Date().toISOString().split('T')[0],
          tags: frontmatter.tags || [],
          category: frontmatter.category || 'insights',
          slug: slug,
          readTime: frontmatter.readTime || `${estimateReadingTime(content)} min read`,
          featured: frontmatter.featured || false,
          excerpt,
          coverImage: frontmatter.coverImage ||
                      DEFAULT_COVER_IMAGES[frontmatter.category || 'insights'] ||
                      FALLBACK_IMAGE,
        };
        
        posts.push(post);
      } catch (error) {
        console.error(`Error reading blog post: ${filePath}`, error);
      }
    });
    
    // 按發布日期排序（最新的在前）
    return posts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// 獲取單篇 Blog 文章
export function getBlogPost(slug: string): BlogPost | null {
  try {
    const filePath = join(blogContentPath, `${slug}.mdx`);
    const fileContent = readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    
    if (!frontmatter.title || !frontmatter.description) {
      return null;
    }
    
    const htmlContent = parseMarkdownToHTML(content);
    const excerpt = frontmatter.excerpt || content.substring(0, 200) + '...';
    
    const post: BlogPost = {
      id: slug,
      title: frontmatter.title,
      description: frontmatter.description,
      content: htmlContent,
      author: frontmatter.author || {
        name: 'Orlo Team',
        avatar: '/img/orlo-team-avatar.png',
        bio: 'The Orlo team is dedicated to helping you achieve better time management through AI technology.'
      },
      publishedAt: frontmatter.publishedAt || new Date().toISOString().split('T')[0],
      updatedAt: frontmatter.updatedAt || frontmatter.publishedAt || new Date().toISOString().split('T')[0],
      tags: frontmatter.tags || [],
      category: frontmatter.category || 'insights',
      slug: slug,
      readTime: frontmatter.readTime || `${estimateReadingTime(content)} min read`,
      featured: frontmatter.featured || false,
      excerpt,
      coverImage: frontmatter.coverImage ||
                  DEFAULT_COVER_IMAGES[frontmatter.category || 'insights'] ||
                  FALLBACK_IMAGE,
      seoKeywords: frontmatter.seoKeywords || [],
    };
    
    return post;
  } catch (error) {
    console.error(`Error reading blog post: ${slug}`, error);
    return null;
  }
}

// 獲取精選文章
export function getFeaturedPosts(limit: number = 3): BlogPostMetadata[] {
  const allPosts = getAllBlogPosts();
  const featured = allPosts.filter(post => post.featured);
  
  // 如果精選文章不足，補充最新的文章
  if (featured.length < limit) {
    const latest = allPosts.filter(post => !post.featured).slice(0, limit - featured.length);
    return [...featured, ...latest];
  }
  
  return featured.slice(0, limit);
}

// 獲取相關文章
export function getRelatedPosts(currentPost: BlogPostMetadata, limit: number = 3): BlogPostMetadata[] {
  const allPosts = getAllBlogPosts();
  
  // 排除當前文章
  const otherPosts = allPosts.filter(post => post.id !== currentPost.id);
  
  // 按相關性排序（相同分類 > 相同標籤）
  const related = otherPosts
    .map(post => ({
      post,
      score: calculateRelatedness(currentPost, post)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);
  
  return related;
}

// 計算文章相關性
function calculateRelatedness(post1: BlogPostMetadata, post2: BlogPostMetadata): number {
  let score = 0;
  
  // 相同分類 +3 分
  if (post1.category === post2.category) {
    score += 3;
  }
  
  // 相同標籤每個 +1 分
  const commonTags = post1.tags.filter(tag => post2.tags.includes(tag));
  score += commonTags.length;
  
  return score;
}

// 按分類獲取文章
export function getPostsByCategory(categoryId: string): BlogPostMetadata[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter(post => post.category === categoryId);
}

// 按標籤獲取文章
export function getPostsByTag(tag: string): BlogPostMetadata[] {
  const allPosts = getAllBlogPosts();
  return allPosts.filter(post => post.tags.includes(tag));
}

// 獲取所有標籤
export function getAllTags(): string[] {
  const allPosts = getAllBlogPosts();
  const tags = new Set<string>();
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}

// 生成靜態路由參數
export function generateStaticParams() {
  try {
    const allPosts = getAllBlogPosts();
    return allPosts.map(post => ({
      slug: post.slug
    }));
  } catch (error) {
    // 如果沒有文章內容，返回空陣列
    console.warn('No blog posts found, returning empty static params');
    return [];
  }
}