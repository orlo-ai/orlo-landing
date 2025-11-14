export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  slug: string;
  readTime: string;
  featured: boolean;
  excerpt: string;
  coverImage?: string;
  seoKeywords?: string[];
  tableOfContents?: TableOfContentsItem[];
}

export interface BlogPostMetadata {
  id: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  slug: string;
  readTime: string;
  featured: boolean;
  excerpt: string;
  coverImage?: string;
}

export interface BlogCategory {
  id: string;
  title: string;
  description: string;
  color: string;
}

export interface BlogListProps {
  posts: BlogPostMetadata[];
  categories: BlogCategory[];
  featuredPosts: BlogPostMetadata[];
}

export interface BlogPostProps {
  post: BlogPost;
  relatedPosts: BlogPostMetadata[];
}