import { Metadata } from 'next';
import Link from 'next/link';
import { getAllReleaseNotes, formatVersion, formatReleaseDate } from '@/lib/release-notes';
import { ReleaseNote } from '@/types/content';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

// Generate page metadata
export const metadata: Metadata = {
  title: 'Releases | ORLO - AI Chief of Staff Updates',
  description: 'Stay updated with the latest ORLO features, improvements, and AI-powered productivity enhancements. Discover what\'s new in your AI Chief of Staff.',
  keywords: ['ORLO', 'releases', 'updates', 'AI features', 'productivity app', 'changelog'],
  openGraph: {
    title: 'ORLO Releases - Latest AI Chief of Staff Updates',
    description: 'Discover the latest features and improvements in ORLO, your AI-powered productivity companion.',
    type: 'website',
    url: 'https://orlo.cc/release-notes',
    images: [
      {
        url: '/img/release-notes/og-release-notes.jpg',
        width: 1200,
        height: 630,
        alt: 'ORLO Releases'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORLO Releases',
    description: 'Latest updates and features for your AI Chief of Staff',
    images: ['/img/release-notes/og-release-notes.jpg']
  }
};

// Version category badge component
function CategoryBadge({ category }: { category: string }) {
  const colors = {
    major: 'bg-red-100 text-red-800 border-red-200',
    minor: 'bg-blue-100 text-blue-800 border-blue-200', 
    patch: 'bg-green-100 text-green-800 border-green-200'
  };
  
  const labels = {
    major: 'Major Update',
    minor: 'Minor Update',
    patch: 'Patch Update'
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${colors[category as keyof typeof colors] || colors.minor}`}>
      {labels[category as keyof typeof labels] || category}
    </span>
  );
}

// Release note card component
function ReleaseNoteCard({ note }: { note: ReleaseNote }) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              <Link href={`/release-notes/${note.slug}`} className="hover:underline">
                {formatVersion(note.version)}
              </Link>
            </h2>
            <CategoryBadge category={note.category} />
          </div>
          <time className="text-sm text-gray-500 whitespace-nowrap">
            {formatReleaseDate(note.publishedAt)}
          </time>
        </div>
        
        <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
          <Link href={`/release-notes/${note.slug}`} className="hover:text-blue-600 transition-colors">
            {note.title}
          </Link>
        </h3>
        
        {note.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {note.excerpt}
          </p>
        )}
        
        {note.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {note.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
            {note.tags.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-500">
                +{note.tags.length - 3} more
              </span>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <Link
            href={`/release-notes/${note.slug}`}
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            Read more
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
        </div>
      </div>
    </article>
  );
}


export default function ReleaseNotesPage() {
  const releaseNotes = getAllReleaseNotes();
  const featuredNotes = releaseNotes.slice(0, 3); // Latest 3 releases
  const otherNotes = releaseNotes.slice(3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ORLO Releases
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Discover the latest features, improvements, and updates for your ORLO AI Chief of Staff
            </p>
            {releaseNotes.length > 0 && (
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Latest version: {formatVersion(releaseNotes[0].version)}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {releaseNotes.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No releases yet</h3>
            <p className="text-gray-600">
              Release notes are coming soon, stay tuned!
            </p>
          </div>
        ) : (
          <>
            {/* Latest Releases */}
            {featuredNotes.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Releases</h2>
                <div className="space-y-6">
                  {featuredNotes.map((note) => (
                    <ReleaseNoteCard key={note.slug} note={note} />
                  ))}
                </div>
              </section>
            )}

            {/* Previous Versions */}
            {otherNotes.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Previous Versions</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {otherNotes.map((note) => (
                    <ReleaseNoteCard key={note.slug} note={note} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* RSS Subscription */}
        <div className="mt-12 text-center py-8 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Subscribe to Updates</h3>
          <p className="text-gray-600 mb-4">
            Stay up-to-date with the latest ORLO features and improvements via RSS
          </p>
          <Link
            href="/release-notes/rss.xml"
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg hover:bg-orange-200 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.429 2.414A.571.571 0 004 2h12a.571.571 0 01.571.571V17.43A.571.571 0 0116 18H4a.571.571 0 01-.571-.571V2.57c0-.158.063-.31.174-.42zm.857 1.143V16.29h11.428V3.557H4.286zm2.285 9.714a1.429 1.429 0 11-2.857 0 1.429 1.429 0 012.857 0zm0-2.857a4.286 4.286 0 00-4.286 4.286h1.429a2.857 2.857 0 012.857-2.857v-1.429zm0-2.857a7.143 7.143 0 00-7.143 7.143h1.429a5.714 5.714 0 015.714-5.714V7.557z"/>
            </svg>
            RSS Feed
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}