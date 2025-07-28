import { ReleaseNote, ReleaseNoteSEO } from '@/types/content';
import { formatVersion } from './release-notes';

// 生成 Release Note 的完整 SEO 數據
export function generateReleaseNoteSEO(note: ReleaseNote): ReleaseNoteSEO {
  const baseUrl = 'https://orlo.cc';
  const releaseUrl = `${baseUrl}/release-notes/${note.slug}`;
  const title = `${note.title} - ${formatVersion(note.version)} | ORLO Release Notes`;
  const description = note.excerpt || `Discover what's new in ORLO ${note.version} - ${note.title}. Latest features, improvements, and AI-powered productivity enhancements.`;
  
  return {
    title,
    description,
    keywords: [
      ...note.keywords,
      'ORLO',
      'release notes',
      'updates',
      note.version,
      'AI productivity',
      'time management',
      'chief of staff'
    ],
    openGraph: {
      title: `${note.title} - ORLO ${note.version}`,
      description,
      image: note.socialImage || `${baseUrl}/img/release-notes/og-default.jpg`,
      type: 'article',
      publishedTime: note.publishedAt,
      modifiedTime: note.updatedAt,
      authors: [note.author],
      section: 'Release Notes',
      tags: note.tags
    },
    jsonLd: {
      '@type': 'SoftwareApplication',
      name: 'ORLO',
      version: note.version,
      releaseNotes: releaseUrl,
      datePublished: note.publishedAt,
      dateModified: note.updatedAt,
      author: {
        '@type': 'Organization',
        name: note.author
      }
    }
  };
}

// 生成 Release Notes 列表頁面的 SEO 數據
export function generateReleaseNotesListSEO() {
  const baseUrl = 'https://orlo.cc';
  
  return {
    title: 'Release Notes | ORLO - AI Chief of Staff Updates',
    description: 'Stay updated with the latest ORLO features, improvements, and AI-powered productivity enhancements. Discover what\'s new in your AI Chief of Staff.',
    keywords: [
      'ORLO',
      'release notes',
      'updates',
      'AI features',
      'productivity app',
      'software updates',
      'AI chief of staff',
      'time management',
      'productivity tools'
    ],
    openGraph: {
      title: 'ORLO Release Notes - Latest AI Chief of Staff Updates',
      description: 'Discover the latest features and improvements in ORLO, your AI-powered productivity companion.',
      type: 'website',
      url: `${baseUrl}/release-notes`,
      images: [
        {
          url: `${baseUrl}/img/release-notes/og-release-notes.jpg`,
          width: 1200,
          height: 630,
          alt: 'ORLO Release Notes'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ORLO Release Notes',
      description: 'Latest updates and features for your AI Chief of Staff',
      images: [`${baseUrl}/img/release-notes/og-release-notes.jpg`]
    }
  };
}

// 生成結構化資料 (JSON-LD)
export function generateReleaseNoteJsonLd(note: ReleaseNote) {
  const baseUrl = 'https://orlo.cc';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ORLO',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    description: 'AI-powered productivity and time management assistant',
    url: 'https://orlo.cc',
    author: {
      '@type': 'Organization',
      name: 'ORLO Team',
      url: 'https://orlo.cc'
    },
    softwareVersion: note.version,
    releaseNotes: {
      '@type': 'WebPage',
      name: note.title,
      description: note.excerpt,
      url: `${baseUrl}/release-notes/${note.slug}`,
      datePublished: note.publishedAt,
      dateModified: note.updatedAt || note.publishedAt,
      author: {
        '@type': 'Organization',
        name: note.author
      },
      publisher: {
        '@type': 'Organization',
        name: 'ORLO',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/img/logo.png`
        }
      },
      mainEntity: {
        '@type': 'SoftwareSourceCode',
        name: `ORLO ${note.version}`,
        description: note.excerpt,
        dateCreated: note.publishedAt,
        dateModified: note.updatedAt || note.publishedAt,
        programmingLanguage: 'TypeScript',
        runtimePlatform: 'Web Browser'
      }
    }
  };
}

// 生成麵包屑結構化資料
export function generateBreadcrumbJsonLd(note: ReleaseNote) {
  const baseUrl = 'https://orlo.cc';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Release Notes',
        item: `${baseUrl}/release-notes`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${formatVersion(note.version)}`,
        item: `${baseUrl}/release-notes/${note.slug}`
      }
    ]
  };
}

// 生成 FAQPage 結構化資料（常見問題）
export function generateReleaseNotesFAQJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How to get the latest ORLO updates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can enable automatic updates in the ORLO app, or subscribe to our Release Notes RSS feed to get notifications about the latest versions.'
        }
      },
      {
        '@type': 'Question',
        name: 'How often does ORLO release updates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We typically release feature updates every 2-4 weeks, with important bug fixes released more frequently.'
        }
      },
      {
        '@type': 'Question',
        name: 'How to learn about new features?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Each Release Note contains detailed feature descriptions and usage guides. You can also find related tutorials in the ORLO app.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does ORLO support version rollbacks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ORLO is a cloud service, and we ensure the stability and backward compatibility of each update. If you encounter issues, please contact our support team.'
        }
      }
    ]
  };
}

// 生成 RSS Feed 的 XML 內容
export function generateRSSFeed(releaseNotes: ReleaseNote[]): string {
  const baseUrl = 'https://orlo.cc';
  const buildDate = new Date().toUTCString();
  
  const items = releaseNotes.map(note => `
    <item>
      <title><![CDATA[${note.title} - ${formatVersion(note.version)}]]></title>
      <link>${baseUrl}/release-notes/${note.slug}</link>
      <guid isPermaLink="true">${baseUrl}/release-notes/${note.slug}</guid>
      <description><![CDATA[${note.excerpt || note.title}]]></description>
      <pubDate>${new Date(note.publishedAt).toUTCString()}</pubDate>
      <author>noreply@orlo.cc (${note.author})</author>
      <category><![CDATA[${note.category}]]></category>
      ${note.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ')}
    </item>
  `).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>ORLO Release Notes</title>
    <link>${baseUrl}/release-notes</link>
    <atom:link href="${baseUrl}/release-notes/rss.xml" rel="self" type="application/rss+xml" />
    <description>Latest updates and features for ORLO AI Chief of Staff</description>
    <language>zh-TW</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <generator>ORLO Release Notes System</generator>
    <webMaster>noreply@orlo.cc (ORLO Team)</webMaster>
    <managingEditor>noreply@orlo.cc (ORLO Team)</managingEditor>
    <copyright>© 2025 ORLO. All rights reserved.</copyright>
    <category>Technology</category>
    <category>Software</category>
    <ttl>60</ttl>
    ${items}
  </channel>
</rss>`.trim();
}

// 生成 Sitemap 的 XML 內容
export function generateSitemapXML(releaseNotes: ReleaseNote[]): string {
  const baseUrl = 'https://orlo.cc';
  const lastmod = new Date().toISOString().split('T')[0];
  
  const urls = [
    // Release Notes 首頁
    `
    <url>
      <loc>${baseUrl}/release-notes</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`,
    
    // 個別 Release Notes 頁面
    ...releaseNotes.map(note => `
    <url>
      <loc>${baseUrl}/release-notes/${note.slug}</loc>
      <lastmod>${note.updatedAt || note.publishedAt}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`)
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('\n')}
</urlset>`.trim();
}

// 生成社交分享的 meta tags
export function generateSocialMetaTags(note: ReleaseNote) {
  const baseUrl = 'https://orlo.cc';
  const imageUrl = note.socialImage || `${baseUrl}/img/release-notes/og-default.jpg`;
  const pageUrl = `${baseUrl}/release-notes/${note.slug}`;
  
  return {
    // Open Graph
    'og:title': `${note.title} - ORLO ${note.version}`,
    'og:description': note.excerpt || note.title,
    'og:image': imageUrl,
    'og:url': pageUrl,
    'og:type': 'article',
    'og:site_name': 'ORLO',
    'og:locale': 'zh_TW',
    'article:published_time': note.publishedAt,
    'article:modified_time': note.updatedAt || note.publishedAt,
    'article:author': note.author,
    'article:section': 'Release Notes',
    'article:tag': note.tags.join(','),
    
    // Twitter Cards
    'twitter:card': note.twitterCard || 'summary_large_image',
    'twitter:title': `${note.title} - ORLO ${note.version}`,
    'twitter:description': note.excerpt || note.title,
    'twitter:image': imageUrl,
    'twitter:url': pageUrl,
    
    // 額外的 meta tags
    'description': note.excerpt || note.title,
    'keywords': [...note.keywords, 'ORLO', note.version].join(', '),
    'author': note.author,
    'robots': 'index, follow',
    'canonical': pageUrl
  };
}