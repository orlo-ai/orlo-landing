import { PageContent, Section } from '@/types/content';

// 內容處理工具函數
export class ContentProcessor {
  // 驗證頁面內容結構
  static validatePageContent(content: any): content is PageContent {
    return (
      content &&
      typeof content === 'object' &&
      content.meta &&
      content.hero &&
      Array.isArray(content.sections) &&
      content.cta
    );
  }

  // 處理 MDX 內容
  static processMDXContent(content: string): string {
    // 處理自定義語法和組件
    return content
      .replace(/\{\{([^}]+)\}\}/g, (match, variable) => {
        // 處理變數替換
        return `{${variable}}`;
      })
      .replace(/\[\[component:([^\]]+)\]\]/g, (match, componentName) => {
        // 處理組件引用
        return `<${componentName} />`;
      });
  }

  // 生成內容摘要
  static generateSummary(content: string, maxLength: number = 160): string {
    const plainText = content
      .replace(/<[^>]*>/g, '') // 移除 HTML 標籤
      .replace(/\*\*([^*]+)\*\*/g, '$1') // 移除 Markdown 粗體
      .replace(/\*([^*]+)\*/g, '$1') // 移除 Markdown 斜體
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 移除 Markdown 連結
      .trim();

    if (plainText.length <= maxLength) {
      return plainText;
    }

    return plainText.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
  }

  // 提取內容中的關鍵字
  static extractKeywords(content: string): string[] {
    const commonWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
      'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have',
      'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should',
      '的', '是', '在', '有', '和', '或', '但', '也', '就', '都', '可以', '能夠'
    ]);

    const words = content
      .toLowerCase()
      .replace(/[^\w\s\u4e00-\u9fff]/g, '') // 保留中英文字符
      .split(/\s+/)
      .filter(word => word.length > 2 && !commonWords.has(word));

    // 計算詞頻
    const wordCount = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // 返回前10個高頻詞
    return Object.entries(wordCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word);
  }

  // 生成內容目錄
  static generateTableOfContents(content: string): Array<{
    id: string;
    title: string;
    level: number;
  }> {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const toc: Array<{ id: string; title: string; level: number }> = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const id = title
        .toLowerCase()
        .replace(/[^\w\s\u4e00-\u9fff]/g, '')
        .replace(/\s+/g, '-');

      toc.push({ id, title, level });
    }

    return toc;
  }

  // 處理內容中的圖片
  static processImages(content: string, basePath: string = '/img'): string {
    return content.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      (match, alt, src) => {
        // 如果是相對路徑，添加基礎路徑
        const imageSrc = src.startsWith('http') ? src : `${basePath}/${src}`;
        return `![${alt}](${imageSrc})`;
      }
    );
  }

  // 驗證和清理內容
  static sanitizeContent(content: string): string {
    return content
      .replace(/<script[^>]*>.*?<\/script>/gi, '') // 移除 script 標籤
      .replace(/javascript:/gi, '') // 移除 javascript: 協議
      .replace(/on\w+\s*=/gi, '') // 移除事件處理器
      .trim();
  }
}

// 內容快取管理
export class ContentCache {
  private static cache = new Map<string, any>();
  private static maxSize = 100;

  static set(key: string, value: any): void {
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }
    this.cache.set(key, value);
  }

  static get(key: string): any {
    return this.cache.get(key);
  }

  static has(key: string): boolean {
    return this.cache.has(key);
  }

  static clear(): void {
    this.cache.clear();
  }
}

// 內容載入器
export class ContentLoader {
  static async loadContent(path: string): Promise<any> {
    const cacheKey = `content:${path}`;
    
    if (ContentCache.has(cacheKey)) {
      return ContentCache.get(cacheKey);
    }

    try {
      // 在實際應用中，這裡會從檔案系統或 API 載入內容
      const response = await fetch(`/api/content${path}`);
      const content = await response.json();
      
      ContentCache.set(cacheKey, content);
      return content;
    } catch (error) {
      console.error(`Failed to load content from ${path}:`, error);
      return null;
    }
  }

  static async preloadContent(paths: string[]): Promise<void> {
    const promises = paths.map(path => this.loadContent(path));
    await Promise.allSettled(promises);
  }
}