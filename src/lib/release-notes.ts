import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ReleaseNote, ReleaseNoteFilters, ReleaseNotesMetadata } from '@/types/content';

const RELEASE_NOTES_PATH = path.join(process.cwd(), 'content/release-notes');

// 確保目錄存在
function ensureReleaseNotesDir() {
  if (!fs.existsSync(RELEASE_NOTES_PATH)) {
    fs.mkdirSync(RELEASE_NOTES_PATH, { recursive: true });
  }
}

// 獲取所有 Release Notes 檔案
export function getReleaseNoteFiles(): string[] {
  ensureReleaseNotesDir();
  
  try {
    return fs.readdirSync(RELEASE_NOTES_PATH)
      .filter(file => file.endsWith('.mdx'))
      .sort((a, b) => b.localeCompare(a)); // 按檔名倒序，最新的在前
  } catch (error) {
    console.warn('Error reading release notes directory:', error);
    return [];
  }
}

// 解析單個 Release Note 檔案
export function parseReleaseNote(filename: string): ReleaseNote | null {
  try {
    const filePath = path.join(RELEASE_NOTES_PATH, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    
    // 驗證必要欄位
    if (!frontmatter.title || !frontmatter.slug || !frontmatter.version || !frontmatter.publishedAt) {
      console.warn(`Missing required frontmatter fields in ${filename}`);
      return null;
    }
    
    return {
      title: frontmatter.title,
      slug: frontmatter.slug,
      version: frontmatter.version,
      publishedAt: frontmatter.publishedAt,
      updatedAt: frontmatter.updatedAt,
      content,
      excerpt: frontmatter.excerpt || '',
      keywords: frontmatter.keywords || [],
      socialImage: frontmatter.socialImage,
      twitterCard: frontmatter.twitterCard,
      category: frontmatter.category || 'minor',
      tags: frontmatter.tags || [],
      author: frontmatter.author || 'ORLO Team',
      authorImage: frontmatter.authorImage,
      frontmatter
    };
  } catch (error) {
    console.error(`Error parsing release note ${filename}:`, error);
    return null;
  }
}

// 獲取所有 Release Notes
export function getAllReleaseNotes(): ReleaseNote[] {
  const files = getReleaseNoteFiles();
  return files
    .map(parseReleaseNote)
    .filter((note): note is ReleaseNote => note !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

// 根據 slug 獲取特定 Release Note
export function getReleaseNoteBySlug(slug: string): ReleaseNote | null {
  const files = getReleaseNoteFiles();
  
  for (const filename of files) {
    const note = parseReleaseNote(filename);
    if (note && note.slug === slug) {
      return note;
    }
  }
  
  return null;
}

// 獲取篩選後的 Release Notes
export function getFilteredReleaseNotes(filters: ReleaseNoteFilters): ReleaseNote[] {
  let notes = getAllReleaseNotes();
  
  if (filters.category) {
    notes = notes.filter(note => note.category === filters.category);
  }
  
  if (filters.year) {
    notes = notes.filter(note => 
      new Date(note.publishedAt).getFullYear() === filters.year
    );
  }
  
  
  if (filters.tags && filters.tags.length > 0) {
    notes = notes.filter(note => 
      filters.tags!.some(tag => note.tags.includes(tag))
    );
  }
  
  return notes;
}

// 獲取 Release Notes 元資料統計
export function getReleaseNotesMetadata(): ReleaseNotesMetadata {
  const notes = getAllReleaseNotes();
  
  if (notes.length === 0) {
    return {
      totalCount: 0,
      latestVersion: '',
      categories: { major: 0, minor: 0, patch: 0 },
      years: [],
      popularTags: []
    };
  }
  
  // 統計分類
  const categories = notes.reduce((acc, note) => {
    acc[note.category] = (acc[note.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // 統計年份
  const years = [...new Set(notes.map(note => 
    new Date(note.publishedAt).getFullYear()
  ))].sort((a, b) => b - a);
  
  // 統計熱門標籤
  const tagCounts = notes.reduce((acc, note) => {
    note.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);
  
  const popularTags = Object.entries(tagCounts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
  
  return {
    totalCount: notes.length,
    latestVersion: notes[0]?.version || '',
    categories: {
      major: categories.major || 0,
      minor: categories.minor || 0,
      patch: categories.patch || 0
    },
    years,
    popularTags
  };
}

// 獲取相關 Release Notes
export function getRelatedReleaseNotes(currentNote: ReleaseNote, limit: number = 3): ReleaseNote[] {
  const allNotes = getAllReleaseNotes().filter(note => note.slug !== currentNote.slug);
  
  // 按相關性排序：相同標籤 > 相同類型 > 時間接近
  const scoredNotes = allNotes.map(note => {
    let score = 0;
    
    // 共同標籤權重
    const commonTags = note.tags.filter(tag => currentNote.tags.includes(tag));
    score += commonTags.length * 3;
    
    // 相同分類權重
    if (note.category === currentNote.category) score += 2;
    
    // 時間接近度權重（越接近分數越高）
    const timeDiff = Math.abs(
      new Date(note.publishedAt).getTime() - new Date(currentNote.publishedAt).getTime()
    );
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    if (daysDiff <= 30) score += 2;
    else if (daysDiff <= 90) score += 1;
    
    return { note, score };
  });
  
  return scoredNotes
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.note);
}

// 生成 Release Note 的 URL slug
export function generateSlug(title: string, version: string): string {
  const titleSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
  
  const versionSlug = version.toLowerCase().replace(/\./g, '-');
  
  return `${versionSlug}-${titleSlug}`.substring(0, 100);
}

// 格式化版本號顯示
export function formatVersion(version: string): string {
  if (version.startsWith('v')) return version;
  return `v${version}`;
}

// Format release date
export function formatReleaseDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// 估算閱讀時間（基於字數）
export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200; // 平均閱讀速度
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Generate Release Note breadcrumbs
export function generateBreadcrumbs(note: ReleaseNote) {
  return [
    { label: 'Home', href: '/' },
    { label: 'Releases', href: '/release-notes' },
    { label: `${formatVersion(note.version)}`, href: `/release-notes/${note.slug}` }
  ];
}