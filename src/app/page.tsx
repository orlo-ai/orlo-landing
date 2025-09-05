import { Layout } from '@/components/layout';
import HeroSection from '@/components/sections/HeroSection';
import AIConversationDemo from '@/components/sections/AIConversationDemo';
import MultiScenarioShowcase from '@/components/sections/MultiScenarioShowcase';
import SocialProof from '@/components/sections/SocialProof';
import CrossPlatformSupport from '@/components/sections/CrossPlatformSupport';
import SecurityTrust from '@/components/sections/SecurityTrust';
import FinalCTA from '@/components/sections/FinalCTA';
import { pageContent } from '@/lib/content-data';

export default function Home() {
  return (
    <Layout>
      <HeroSection {...pageContent.hero} />
      <AIConversationDemo />
      <MultiScenarioShowcase scenarios={pageContent.scenarios} />
      <SocialProof testimonials={pageContent.testimonials} />
      <CrossPlatformSupport />
      <SecurityTrust />
      <FinalCTA cta={pageContent.cta} />
    </Layout>
  );
}
