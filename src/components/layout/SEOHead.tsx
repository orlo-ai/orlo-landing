import { Metadata } from 'next';

interface SEOMetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export function generateSEOMetadata({
  title = 'Orlo - AI-Powered Time Management Assistant',
  description = 'Rebuild your life, not just your schedule. Orlo helps you manage time through intelligent boundaries and decision fatigue reduction.',
  keywords = 'time management, AI assistant, productivity, scheduling, decision fatigue, 時間管理, AI助手, 生產力',
  ogImage = '/img/orlo-social-share.png',
  ogUrl = 'https://orlo.cc',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noIndex = false,
}: SEOMetadataProps): Metadata {
  const fullTitle = title.includes('Orlo') ? title : `${title} | Orlo`;
  const fullOgUrl = ogUrl.startsWith('http') ? ogUrl : `https://orlo.cc${ogUrl}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://orlo.cc${ogImage}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: 'Orlo Team' }],
    ...(canonicalUrl && { alternates: { canonical: canonicalUrl } }),
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      title: fullTitle,
      description,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      url: fullOgUrl,
      type: ogType as any,
      siteName: 'Orlo',
      locale: 'zh_TW',
    },
    twitter: {
      card: twitterCard as any,
      title: fullTitle,
      description,
      images: [fullOgImage],
      site: '@orlo',
      creator: '@orlo',
    },
    icons: {
      icon: [
        {
          url: '/img/favicon_io/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/img/favicon_io/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          url: '/img/favicon_io/favicon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
      ],
      apple: [
        {
          url: '/img/favicon_io/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
      ],
    },
    other: {
      'theme-color': '#3B82F6',
      'msapplication-TileColor': '#3B82F6',
    },
  };
}

// For structured data injection in components
interface StructuredDataProps {
  data: object;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}