import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://orlo.cc'),
  title: 'Orlo - AI-Powered Time Management Assistant',
  description:
    '重建你的生活，而不只是你的行程表。Orlo 透過智能時間邊界和決策疲勞減少，幫助你管理時間。',
  keywords:
    'time management, AI assistant, productivity, scheduling, decision fatigue, 時間管理, AI助手, 生產力, 行程管理, 決策疲勞',
  authors: [{ name: 'Orlo Team' }],
  openGraph: {
    title: 'Orlo - AI-Powered Time Management Assistant',
    description: '重建你的生活，而不只是你的行程表',
    url: 'https://orlo.cc',
    siteName: 'Orlo',
    images: [
      {
        url: '/img/orlo-social-share.png',
        width: 1200,
        height: 630,
        alt: 'Orlo - AI-Powered Time Management Assistant',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orlo - AI-Powered Time Management Assistant',
    description: '重建你的生活，而不只是你的行程表',
    images: ['/img/orlo-social-share.png'],
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
    ],
    apple: [
      {
        url: '/img/favicon_io/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="manifest" href="/img/favicon_io/site.webmanifest" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-J6HLEC8EJZ`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J6HLEC8EJZ');
              
              // Custom analytics object for tracking
              window.orloAnalytics = {
                track: function(eventName, properties) {
                  gtag('event', eventName, properties || {});
                }
              };
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
