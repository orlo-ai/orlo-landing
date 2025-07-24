import { Layout } from '@/components/layout';
import HeroSection from '@/components/sections/HeroSection';
import AIConversationDemo from '@/components/sections/AIConversationDemo';
import MultiScenarioShowcase from '@/components/sections/MultiScenarioShowcase';
import SocialProof from '@/components/sections/SocialProof';
import PricingSection from '@/components/sections/PricingSection';
import FinalCTA from '@/components/sections/FinalCTA';
import { pageContent } from '@/lib/content-data';

export default function Home() {
  return (
    <Layout>
      <HeroSection {...pageContent.hero} />
      <AIConversationDemo conversation={pageContent.aiDemo} />
      <MultiScenarioShowcase scenarios={pageContent.scenarios} />
      <SocialProof testimonials={pageContent.testimonials} />
      <PricingSection pricing={pageContent.pricing} />
      <FinalCTA cta={pageContent.cta} />
    </Layout>
  );
}
