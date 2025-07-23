import { Layout } from '@/components/layout';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import ProblemSection from '@/components/sections/ProblemSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AIConversationDemo from '@/components/sections/AIConversationDemo';
import MultiScenarioShowcase from '@/components/sections/MultiScenarioShowcase';
import SocialProof from '@/components/sections/SocialProof';
import PricingSection from '@/components/sections/PricingSection';
import { pageContent } from '@/lib/content-data';

export default function Home() {
  return (
    <Layout>
      <HeroSection {...pageContent.hero} />
      <SocialProofSection metrics={pageContent.socialProof.metrics} />
      <ProblemSection problems={pageContent.problems} />
      <FeaturesSection features={pageContent.features} />
      <AIConversationDemo conversation={pageContent.aiDemo} />
      <MultiScenarioShowcase scenarios={pageContent.scenarios} />
      <SocialProof testimonials={pageContent.testimonials} />
      <PricingSection pricing={pageContent.pricing} />
    </Layout>
  );
}
