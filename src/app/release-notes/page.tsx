import { Metadata } from 'next';
import Link from 'next/link';
import { getAllReleaseNotes, formatVersion, formatReleaseDate } from '@/lib/release-notes';
import { ReleaseNote } from '@/types/content';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

// Generate page metadata
export const metadata: Metadata = {
  title: 'Releases | ORLO - AI Rhythm Ally Updates',
  description: 'Stay updated with the latest ORLO features, improvements, and AI-powered productivity enhancements. Discover what\'s new in your AI Rhythm Ally.',
  keywords: ['ORLO', 'releases', 'updates', 'AI features', 'productivity app', 'changelog'],
  openGraph: {
    title: 'ORLO Releases - Latest AI Rhythm Ally Updates',
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
    description: 'Latest updates and features for your AI Rhythm Ally',
    images: ['/img/release-notes/og-release-notes.jpg']
  }
};

// Version category badge component
function CategoryBadge({ category }: { category: string }) {
  const colors = {
    major: 'bg-gradient-to-r from-red-50 to-red-100 text-red-800 border-red-200/60 shadow-sm',
    minor: 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border-blue-200/60 shadow-sm', 
    patch: 'bg-gradient-to-r from-green-50 to-green-100 text-green-800 border-green-200/60 shadow-sm'
  };
  
  const labels = {
    major: 'Major',
    minor: 'Minor',
    patch: 'Patch'
  };
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${colors[category as keyof typeof colors] || colors.minor}`}>
      {labels[category as keyof typeof labels] || category}
    </span>
  );
}

// Release note card component
function ReleaseNoteCard({ note }: { note: ReleaseNote }) {
  return (
    <article className="group bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 hover:border-white/80 hover:bg-white/90 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg transform hover:-translate-y-1">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              <Link href={`/release-notes/${note.slug}`} className="hover:underline">
                {formatVersion(note.version)}
              </Link>
            </h2>
            <CategoryBadge category={note.category} />
          </div>
          <time className="text-sm text-gray-500 font-medium self-start">
            {formatReleaseDate(note.publishedAt)}
          </time>
        </div>
        
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
          <Link href={`/release-notes/${note.slug}`} className="hover:text-blue-600 transition-colors">
            {note.title}
          </Link>
        </h3>
        
        {note.excerpt && (
          <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 leading-relaxed">
            {note.excerpt}
          </p>
        )}
        
        {note.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
            {note.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 border border-blue-200/50"
              >
                {tag}
              </span>
            ))}
            {note.tags.length > 3 && (
              <span className="inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium bg-gray-100/80 text-gray-600 border border-gray-200/50">
                +{note.tags.length - 3} more
              </span>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100/80">
          <Link
            href={`/release-notes/${note.slug}`}
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group/link"
          >
            Read more
            <svg className="ml-1.5 w-4 h-4 transition-transform group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-20 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-50/80"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              ORLO Releases
            </h1>
            <p className="text-xl text-gray-700 mb-6 font-medium">
              Stay updated with the latest ORLO features and improvements
            </p>
            {releaseNotes.length > 0 && (
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-800 px-6 py-3 rounded-full text-sm font-medium border border-blue-200/50 shadow-sm">
                <span className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
                Latest version: {formatVersion(releaseNotes[0].version)}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {releaseNotes.length === 0 ? (
          <div className="text-center py-16 sm:py-20">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/50 shadow-sm max-w-md mx-auto">
              <div className="text-gray-400 mb-6">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No releases yet</h3>
              <p className="text-gray-600 font-medium">
                Release notes are coming soon, stay tuned!
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Latest Releases */}
            {featuredNotes.length > 0 && (
              <section className="mb-16 sm:mb-20">
                <div className="text-center mb-8 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Latest Releases</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
                </div>
                <div className="space-y-6 sm:space-y-8">
                  {featuredNotes.map((note) => (
                    <ReleaseNoteCard key={note.slug} note={note} />
                  ))}
                </div>
              </section>
            )}

            {/* Previous Versions */}
            {otherNotes.length > 0 && (
              <section>
                <div className="text-center mb-8 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Previous Versions</h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mx-auto"></div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 overflow-hidden shadow-sm">
                  {otherNotes.slice(0, 5).map((note, index) => (
                    <div key={note.slug} className={`p-3 sm:p-4 ${index !== 0 ? 'border-t border-white/30' : ''} hover:bg-white/60 transition-all duration-200 group`}>
                      {/* Desktop Layout */}
                      <div className="hidden sm:flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="flex items-center gap-2.5">
                            <span className="text-sm font-bold text-gray-900">
                              {formatVersion(note.version)}
                            </span>
                            <CategoryBadge category={note.category} />
                          </div>
                          <Link 
                            href={`/release-notes/${note.slug}`}
                            className="text-gray-700 hover:text-blue-600 transition-colors truncate flex-1 min-w-0 font-medium"
                          >
                            {note.title}
                          </Link>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <time className="text-sm text-gray-500 whitespace-nowrap font-medium">
                            {formatReleaseDate(note.publishedAt)}
                          </time>
                          <Link
                            href={`/release-notes/${note.slug}`}
                            className="text-blue-600 hover:text-blue-500 transition-all duration-200 opacity-60 group-hover:opacity-100 transform group-hover:translate-x-0.5"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                      
                      {/* Mobile Layout */}
                      <div className="sm:hidden">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-gray-900">
                              {formatVersion(note.version)}
                            </span>
                            <CategoryBadge category={note.category} />
                          </div>
                          <Link
                            href={`/release-notes/${note.slug}`}
                            className="text-blue-600 hover:text-blue-500 transition-all duration-200 transform active:scale-95"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                        <Link 
                          href={`/release-notes/${note.slug}`}
                          className="block text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm leading-tight mb-2"
                        >
                          {note.title}
                        </Link>
                        <time className="text-xs text-gray-500 font-medium">
                          {formatReleaseDate(note.publishedAt)}
                        </time>
                      </div>
                    </div>
                  ))}
                  {otherNotes.length > 5 && (
                    <div className="p-4 border-t border-white/30 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 text-center">
                      <button className="text-blue-600 hover:text-blue-500 font-semibold text-sm transition-colors hover:underline">
                        View {otherNotes.length - 5} more releases →
                      </button>
                    </div>
                  )}
                </div>
              </section>
            )}
          </>
        )}

        {/* RSS Subscription */}
        <div className="mt-12 text-center py-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Subscribe to Updates</h3>
            <p className="text-gray-700 mb-6 font-medium">
              Stay up-to-date with the latest ORLO features and improvements via RSS
            </p>
            <Link
              href="/release-notes/rss.xml"
              className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-6 py-3 rounded-lg hover:bg-orange-200 transition-colors text-sm font-semibold border border-orange-200/50"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.429 2.414A.571.571 0 004 2h12a.571.571 0 01.571.571V17.43A.571.571 0 0116 18H4a.571.571 0 01-.571-.571V2.57c0-.158.063-.31.174-.42zm.857 1.143V16.29h11.428V3.557H4.286zm2.285 9.714a1.429 1.429 0 11-2.857 0 1.429 1.429 0 012.857 0zm0-2.857a4.286 4.286 0 00-4.286 4.286h1.429a2.857 2.857 0 012.857-2.857v-1.429zm0-2.857a7.143 7.143 0 00-7.143 7.143h1.429a5.714 5.714 0 015.714-5.714V7.557z"/>
              </svg>
              RSS Feed
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}