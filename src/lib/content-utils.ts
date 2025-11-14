import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';

// 共用的內容解析結果介面
export interface ParsedContent {
  frontmatter: Record<string, any>;
  content: string;
}

// 生成標題錨點 ID 的輔助函式
export function generateHeadingId(text: string, usedIds?: Set<string>): string {
  // 先解碼 HTML 實體，確保與原始 Markdown 文字一致
  const decoded = text
    // 解碼數字型 HTML 實體（如 &#39; → '）
    .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(parseInt(dec)))
    // 解碼十六進制 HTML 實體（如 &#x27; → '）
    .replace(/&#x([0-9a-f]+);/gi, (match, hex) => String.fromCharCode(parseInt(hex, 16)))
    // 解碼常見的命名 HTML 實體
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');

  // 然後正常處理：轉小寫、移除特殊字元、空格轉連字號
  let id = decoded
    .toLowerCase()
    .replace(/[^\w\s\u4e00-\u9fff]/g, '')
    .replace(/\s+/g, '-');

  // 如果提供了 usedIds Set，進行去重處理
  if (usedIds) {
    let counter = 1;
    let uniqueId = id;

    while (usedIds.has(uniqueId)) {
      counter++;
      uniqueId = `${id}-${counter}`;
    }

    usedIds.add(uniqueId);
    return uniqueId;
  }

  return id;
}

// 配置 marked renderer，為標題添加 ID
const renderer = new marked.Renderer();

// 用於追蹤已使用的 ID，每次渲染時重置
let currentUsedIds = new Set<string>();

renderer.heading = function({ tokens, depth }) {
  const text = this.parser.parseInline(tokens);
  const id = generateHeadingId(text, currentUsedIds);

  return `<h${depth} id="${id}">${text}</h${depth}>\n`;
};

marked.setOptions({
  renderer: renderer,
  gfm: true,
  breaks: false,
});

// 檢查是否應該顯示草稿
export function shouldShowDraft(isDraft?: boolean): boolean {
  if (!isDraft) return true; // 非草稿總是顯示
  
  const isDevelopment = process.env.NODE_ENV === 'development';
  const showDrafts = isDevelopment || process.env.SHOW_DRAFTS === 'true';
  
  return showDrafts;
}

// 基礎的 MDX 檔案解析函式
export function parseMarkdownFile(
  filePath: string,
  options?: {
    validateFields?: string[];
    allowDrafts?: boolean;
  }
): ParsedContent | null {
  try {
    const fileContent = readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    
    // 檢查草稿狀態
    if (!shouldShowDraft(frontmatter.draft)) {
      return null;
    }
    
    // 可選的欄位驗證
    if (options?.validateFields) {
      const missingFields = options.validateFields.filter(
        field => !frontmatter[field]
      );
      if (missingFields.length > 0) {
        console.warn(`Missing required fields in ${filePath}: ${missingFields.join(', ')}`);
        return null;
      }
    }
    
    return { frontmatter, content };
  } catch (error) {
    console.error(`Error parsing markdown file: ${filePath}`, error);
    return null;
  }
}

// 統一的 Markdown 轉 HTML
export function parseMarkdownToHTML(content: string): string {
  // 每次渲染前重置已使用的 ID Set，確保去重邏輯正常工作
  currentUsedIds = new Set<string>();
  return marked(content) as string;
}

// 估算閱讀時間（基於平均每分鐘 200 字）
export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return readingTime > 0 ? readingTime : 1;
}

// 格式化閱讀時間文字
export function formatReadingTime(content: string, language: 'en' | 'zh' = 'en'): string {
  const minutes = estimateReadingTime(content);
  
  if (language === 'zh') {
    return `${minutes} 分鐘`;
  } else {
    return `${minutes} min read`;
  }
}

// 統一的日期格式化
export function formatDate(dateString: string, locale: 'en-US' | 'zh-TW' = 'en-US'): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error(`Error formatting date: ${dateString}`, error);
    return dateString;
  }
}

// 清理和正規化 slug
export function normalizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// 生成文章摘要
export function generateExcerpt(content: string, maxLength: number = 160): string {
  // 移除 Markdown 語法
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // 移除標題符號
    .replace(/\*\*(.*?)\*\*/g, '$1') // 移除粗體
    .replace(/\*(.*?)\*/g, '$1') // 移除斜體
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // 移除連結，保留文字
    .replace(/`(.*?)`/g, '$1') // 移除行內程式碼
    .replace(/\n+/g, ' ') // 換行轉空格
    .trim();
  
  if (plainText.length <= maxLength) {
    return plainText;
  }
  
  // 在最接近 maxLength 的詞邊界處截斷
  const truncated = plainText.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  if (lastSpaceIndex > maxLength * 0.8) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  }
  
  return truncated + '...';
}