import { Metadata } from 'next';
import { Layout, generateSEOMetadata, StructuredData } from '@/components/layout';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateSEOMetadata({
  title: '示例頁面',
  description: '這是一個展示 SEO 元數據和結構化數據的示例頁面',
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
            示例頁面
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            這個頁面展示了如何使用我們建立的 Layout 組件、SEO 元數據生成器和結構化數據。
          </p>
        </div>
      </div>
    </Layout>
  );
}