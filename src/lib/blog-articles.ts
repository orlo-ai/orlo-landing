import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostMetadata, BlogCategory } from '@/types/blog';
import { parseMarkdownToHTML, estimateReadingTime, formatDate } from '@/lib/content-utils';

const blogContentPath = join(process.cwd(), 'content/blog');

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
    // 遍歷年份目錄
    const years = readdirSync(blogContentPath).filter(year => 
      statSync(join(blogContentPath, year)).isDirectory()
    );
    
    years.forEach(year => {
      const yearPath = join(blogContentPath, year);
      const months = readdirSync(yearPath).filter(month =>
        statSync(join(yearPath, month)).isDirectory()
      );
      
      months.forEach(month => {
        const monthPath = join(yearPath, month);
        const files = readdirSync(monthPath).filter(file => 
          file.endsWith('.mdx')
        );
        
        files.forEach(file => {
          const filePath = join(monthPath, file);
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
              id: `${year}-${month}-${slug}`,
              title: frontmatter.title,
              description: frontmatter.description,
              author: frontmatter.author || {
                name: 'Orlo Team',
                avatar: '/img/orlo-team-avatar.png'
              },
              publishedAt: frontmatter.publishedAt || `${year}-${month}-01`,
              updatedAt: frontmatter.updatedAt || frontmatter.publishedAt || `${year}-${month}-01`,
              tags: frontmatter.tags || [],
              category: frontmatter.category || 'insights',
              slug: `${year}/${month}/${slug}`,
              readTime: frontmatter.readTime || `${estimateReadingTime(content)} 分鐘`,
              featured: frontmatter.featured || false,
              excerpt,
              coverImage: frontmatter.coverImage,
            };
            
            posts.push(post);
          } catch (error) {
            console.error(`Error reading blog post: ${filePath}`, error);
          }
        });
      });
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
export function getBlogPost(year: string, month: string, slug: string): BlogPost | null {
  try {
    const filePath = join(blogContentPath, year, month, `${slug}.mdx`);
    const fileContent = readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    
    if (!frontmatter.title || !frontmatter.description) {
      return null;
    }
    
    const htmlContent = parseMarkdownToHTML(content);
    const excerpt = frontmatter.excerpt || content.substring(0, 200) + '...';
    
    const post: BlogPost = {
      id: `${year}-${month}-${slug}`,
      title: frontmatter.title,
      description: frontmatter.description,
      content: htmlContent,
      author: frontmatter.author || {
        name: 'Orlo Team',
        avatar: '/img/orlo-team-avatar.png',
        bio: 'Orlo 團隊致力於透過 AI 技術協助您達成更好的時間管理。'
      },
      publishedAt: frontmatter.publishedAt || `${year}-${month}-01`,
      updatedAt: frontmatter.updatedAt || frontmatter.publishedAt || `${year}-${month}-01`,
      tags: frontmatter.tags || [],
      category: frontmatter.category || 'insights',
      slug: `${year}/${month}/${slug}`,
      readTime: frontmatter.readTime || `${estimateReadingTime(content)} 分鐘`,
      featured: frontmatter.featured || false,
      excerpt,
      coverImage: frontmatter.coverImage,
      seoKeywords: frontmatter.seoKeywords || [],
    };
    
    return post;
  } catch (error) {
    console.error(`Error reading blog post: ${year}/${month}/${slug}`, error);
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
    return allPosts.map(post => {
      const [year, month, slug] = post.slug.split('/');
      return { year, month, slug };
    });
  } catch (error) {
    // 如果沒有文章內容，返回空陣列
    console.warn('No blog posts found, returning empty static params');
    return [];
  }
}