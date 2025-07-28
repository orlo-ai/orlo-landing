import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { marked } from 'marked';
import { 
  getAllReleaseNotes, 
  getReleaseNoteBySlug, 
  getRelatedReleaseNotes,
  formatVersion, 
  formatReleaseDate,
  estimateReadingTime,
  generateBreadcrumbs
} from '@/lib/release-notes';
import { ReleaseNote } from '@/types/content';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

// Generate static route parameters
export async function generateStaticParams() {
  const releaseNotes = getAllReleaseNotes();
  return releaseNotes.map((note) => ({
    slug: note.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getReleaseNoteBySlug(slug);
  
  if (!note) {
    return {
      title: 'Release Not Found | ORLO',
      description: 'The requested release could not be found.'
    };
  }

  const title = `${note.title} - ${formatVersion(note.version)} | ORLO Releases`;
  const description = note.excerpt || `Discover what's new in ORLO ${note.version} - ${note.title}`;
  
  return {
    title,
    description,
    keywords: [...note.keywords, 'ORLO', 'releases', note.version],
    authors: [{ name: note.author }],
    openGraph: {
      title: `${note.title} - ORLO ${note.version}`,
      description,
      type: 'article',
      publishedTime: note.publishedAt,
      modifiedTime: note.updatedAt,
      authors: [note.author],
      section: 'Releases',
      tags: note.tags,
      url: `https://orlo.cc/release-notes/${note.slug}`,
      images: note.socialImage ? [
        {
          url: note.socialImage,
          width: 1200,
          height: 630,
          alt: `${note.title} - ORLO ${note.version}`
        }
      ] : []
    },
    twitter: {
      card: note.twitterCard as any || 'summary_large_image',
      title: `${note.title} - ORLO ${note.version}`,
      description,
      images: note.socialImage ? [note.socialImage] : []
    }
  };
}

// Breadcrumb navigation component
function Breadcrumbs({ note }: { note: ReleaseNote }) {
  const breadcrumbs = generateBreadcrumbs(note);
  
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center">
            {index > 0 && (
              <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-900 font-medium">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-blue-600 transition-colors">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Release note header component
function ReleaseNoteHeader({ note }: { note: ReleaseNote }) {
  const readingTime = estimateReadingTime(note.content);

  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
        {note.title}
      </h1>
      
      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <time dateTime={note.publishedAt}>
            {formatReleaseDate(note.publishedAt)}
          </time>
        </div>
        
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{readingTime} min read</span>
        </div>
        
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>{note.author}</span>
        </div>
      </div>
      
      {note.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {note.tags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}


// Related releases component
function RelatedReleases({ note }: { note: ReleaseNote }) {
  const relatedNotes = getRelatedReleaseNotes(note, 3);
  
  if (relatedNotes.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Releases</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {relatedNotes.map((relatedNote) => (
          <Link
            key={relatedNote.slug}
            href={`/release-notes/${relatedNote.slug}`}
            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-blue-600">
                {formatVersion(relatedNote.version)}
              </span>
              <span className="text-xs text-gray-500">
                {formatReleaseDate(relatedNote.publishedAt)}
              </span>
            </div>
            <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
              {relatedNote.title}
            </h3>
            {relatedNote.excerpt && (
              <p className="text-sm text-gray-600 line-clamp-2">
                {relatedNote.excerpt}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}



export default async function ReleaseNoteDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const note = getReleaseNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  // Convert Markdown to HTML
  const htmlContent = marked(note.content);

  return (
    <div id="top" className="min-h-screen bg-white">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <Breadcrumbs note={note} />
        <ReleaseNoteHeader note={note} />
        
        <div 
          className="prose prose-lg prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
        
        <RelatedReleases note={note} />
        
        {/* Back to top and navigation buttons */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
          <Link
            href="/release-notes"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Releases
          </Link>
          
          <Link
            href="#top"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors"
          >
            Back to Top
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
          </Link>
        </div>
      </article>
      
      <Footer />
    </div>
  );
}