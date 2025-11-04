import React from 'react';
import type { Metadata } from 'next';
import { FeatureLayout } from '@/components/features/FeatureLayout';
import { FeatureHero } from '@/components/features/FeatureHero';
import { ProblemSolution } from '@/components/features/ProblemSolution';
import { FeatureShowcase } from '@/components/features/FeatureShowcase';
import { ScenarioSection } from '@/components/features/ScenarioCard';
import { DemoSection } from '@/components/features/DemoSection';
import { FeatureCTA } from '@/components/features/FeatureCTA';
import { dailyRhythmContent } from '@/lib/features-data';

export const metadata: Metadata = {
  title: dailyRhythmContent.meta.title,
  description: dailyRhythmContent.meta.description,
  keywords: dailyRhythmContent.meta.keywords,
  openGraph: {
    title: dailyRhythmContent.meta.title,
    description: dailyRhythmContent.meta.description,
    images: [{ url: dailyRhythmContent.meta.ogImage || '/img/orlo-home-1200x630-v1.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: dailyRhythmContent.meta.title,
    description: dailyRhythmContent.meta.description,
    images: [dailyRhythmContent.meta.ogImage || '/img/orlo-home-1200x630-v1.png'],
  },
};

export default function DailyRhythmPage() {
  const {
    hero,
    problemSolution,
    showcase,
    scenarios,
    demo,
    cta,
  } = dailyRhythmContent;

  return (
    <FeatureLayout>
      {/* Hero Section */}
      <FeatureHero content={hero} />

      {/* Problem & Solution */}
      <ProblemSolution content={problemSolution} />

      {/* Feature Showcase */}
      <FeatureShowcase
        title={showcase.title}
        description={showcase.description}
        highlights={showcase.highlights}
      />

      {/* Real-World Scenarios */}
      <ScenarioSection
        title={scenarios.title}
        description={scenarios.description}
        scenarios={scenarios.items}
      />

      {/* Demo Section */}
      {demo && <DemoSection content={demo} />}

      {/* CTA */}
      <FeatureCTA content={cta} />
    </FeatureLayout>
  );
}
