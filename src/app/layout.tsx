import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://orlo.cc'),
  title: 'Orlo - Your AI Rhythm Ally | Less Worry, More Flow',
  description:
    'Skip calendar chaos. Find your rhythm with an AI guide for effortless, joyful days.',
  keywords:
    'AI, Rhythm Ally, time management, AI assistant, productivity, personal assistant, AI partnership, executive assistant',
  authors: [{ name: 'Orlo Team' }],
  openGraph: {
    title: 'Orlo - Your AI Rhythm Ally | Less Worry, More Flow',
    description: 'Skip calendar chaos. Find your rhythm with an AI guide for effortless, joyful days.',
    url: 'https://orlo.cc',
    siteName: 'Orlo',
    images: [
      {
        url: '/img/orlo-home-1200x630-v1.png',
        width: 1200,
        height: 630,
        alt: 'Orlo - Your AI Rhythm Ally | Less Worry, More Flow',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orlo - Your AI Rhythm Ally | Less Worry, More Flow',
    description: 'Skip calendar chaos. Find your rhythm with an AI guide for effortless, joyful days.',
    images: ['/img/orlo-home-1200x630-v1.png'],
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
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
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
