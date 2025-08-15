// Help Center 型別定義

export interface HelpArticle {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  order: number;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  draft?: boolean;
  content: string;
}

export interface HelpArticleMetadata {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  order: number;
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  draft?: boolean;
}

export interface HelpCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
  articleCount: number;
  articles: HelpArticleMetadata[];
}

export interface CategoryMeta {
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface HelpStats {
  totalArticles: number;
  totalCategories: number;
  recentlyUpdated: HelpArticleMetadata[];
}

// 組件 Props 型別
export interface HelpHeroProps {
  stats: HelpStats;
}

export interface CategoryGridProps {
  categories: HelpCategory[];
}


export interface RelatedArticlesProps {
  currentArticle: HelpArticleMetadata;
  relatedArticles: HelpArticleMetadata[];
}

export interface ViewTrackerProps {
  articleId: string;
}

