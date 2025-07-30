import { Layout } from '@/components/layout';
import PricingSection from '@/components/sections/PricingSection';
import { pageContent } from '@/lib/content-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Orlo | Your AI Chief of Staff',
  description: 'Choose the perfect AI partnership level for your needs. Start with full access today, then select the plan that fits your productivity goals.',
  keywords: ['AI pricing', 'Chief of Staff pricing', 'productivity app cost', 'AI assistant plans'],
  openGraph: {
    title: 'Pricing - Orlo | Your AI Chief of Staff',
    description: 'Choose the perfect AI partnership level for your needs. Start with full access today, then select the plan that fits your productivity goals.',
    images: ['https://orlo.cc/img/orlo-social-share.png'],
  },
};

export default function PricingPage() {
  return (
    <Layout>
      <div className="pt-16">
        <PricingSection pricing={pageContent.pricing} />
      </div>
    </Layout>
  );
}