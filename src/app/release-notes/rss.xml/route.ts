import { NextResponse } from 'next/server';
import { getAllReleaseNotes } from '@/lib/release-notes';
import { generateRSSFeed } from '@/lib/release-notes-seo';

export async function GET() {
  try {
    const releaseNotes = getAllReleaseNotes();
    const rssXml = generateRSSFeed(releaseNotes);
    
    return new NextResponse(rssXml, {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new NextResponse('Error generating RSS feed', { status: 500 });
  }
}

// Static export configuration
export const dynamic = 'force-static';