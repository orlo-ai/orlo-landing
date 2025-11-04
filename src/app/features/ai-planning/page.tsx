import React from 'react';
import type { Metadata } from 'next';
import { FeatureLayout } from '@/components/features/FeatureLayout';
import { FeatureHero } from '@/components/features/FeatureHero';
import { ProblemSolution } from '@/components/features/ProblemSolution';
import { FeatureShowcase } from '@/components/features/FeatureShowcase';
import { ScenarioSection } from '@/components/features/ScenarioCard';
import { DemoSection } from '@/components/features/DemoSection';
import { FeatureCTA } from '@/components/features/FeatureCTA';
import { aiPlanningContent } from '@/lib/features-data';

export const metadata: Metadata = {
  title: aiPlanningContent.meta.title,
  description: aiPlanningContent.meta.description,
  keywords: aiPlanningContent.meta.keywords,
  openGraph: {
    title: aiPlanningContent.meta.title,
    description: aiPlanningContent.meta.description,
    images: [{ url: aiPlanningContent.meta.ogImage || '/img/orlo-home-1200x630-v1.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: aiPlanningContent.meta.title,
    description: aiPlanningContent.meta.description,
    images: [aiPlanningContent.meta.ogImage || '/img/orlo-home-1200x630-v1.png'],
  },
};

export default function AIPlanningPage() {
  const {
    hero,
    problemSolution,
    showcase,
    scenarios,
    demo,
    cta,
  } = aiPlanningContent;

  return (
    <FeatureLayout>
      {/* Hero Section */}
      <FeatureHero content={hero} />

      {/* Problem & Solution */}
      <ProblemSolution content={problemSolution} />

      {/* Feature Showcase */}
      <FeatureShowcase
        title={showcase.title}
        highlights={showcase.highlights}
      />

      {/* Real-World Scenarios */}
      <ScenarioSection
        title={scenarios.title}
        scenarios={scenarios.items}
      />

      {/* Demo Section */}
      {demo && <DemoSection content={demo} />}

      {/* CTA */}
      <FeatureCTA content={cta} />
    </FeatureLayout>
  );
}
