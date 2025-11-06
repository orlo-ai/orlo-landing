import { Layout } from '@/components/layout';
import HeroSection from '@/components/sections/HeroSection';
import ProductivitySection from '@/components/sections/ProductivitySection';
import AIConversationDemo from '@/components/sections/AIConversationDemo';
import MultiScenarioShowcase from '@/components/sections/MultiScenarioShowcase';
import CrossPlatformSupport from '@/components/sections/CrossPlatformSupport';
import FinalCTA from '@/components/sections/FinalCTA';
import { pageContent } from '@/lib/content-data';

export default function Home() {
  return (
    <Layout>
      <HeroSection {...pageContent.hero} />
      <ProductivitySection />
      <AIConversationDemo />
      <MultiScenarioShowcase scenarios={pageContent.scenarios} />
      <CrossPlatformSupport />
      <FinalCTA cta={pageContent.cta} />
    </Layout>
  );
}
