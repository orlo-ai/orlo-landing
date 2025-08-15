import { Metadata } from 'next';
import { Layout, generateSEOMetadata, StructuredData } from '@/components/layout';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Example Page',
  description: 'This is an example page showcasing SEO metadata and structured data implementation',
  ogUrl: '/example',
});

export default function ExamplePage() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <Layout>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl font-bold gradient-text mb-6">
            Example Page
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This page demonstrates how to use our Layout component, SEO metadata generator, and structured data.
          </p>
        </div>
      </div>
    </Layout>
  );
}