import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://orlo.cc'),
  title: 'Orlo - Your AI Chief of Staff | Stop Managing Time, Start Partnering with AI',
  description:
    'Stop managing time. Start partnering with AI that manages it for you. Like having a senior executive\'s personal assistant - but for your entire life.',
  keywords:
    'AI, Chief of Staff, time management, AI assistant, productivity, personal assistant, AI partnership, executive assistant',
  authors: [{ name: 'Orlo Team' }],
  openGraph: {
    title: 'Orlo - Your AI Chief of Staff | Stop Managing Time, Start Partnering with AI',
    description: 'Stop managing time. Start partnering with AI that manages it for you.',
    url: 'https://orlo.cc',
    siteName: 'Orlo',
    images: [
      {
        url: '/img/orlo-social-share.png',
        width: 1200,
        height: 630,
        alt: 'Orlo - Your AI Chief of Staff',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orlo - Your AI Chief of Staff',
    description: 'Stop managing time. Start partnering with AI that manages it for you.',
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
