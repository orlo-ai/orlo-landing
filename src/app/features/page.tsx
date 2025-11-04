import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FeatureLayout, FeatureSection } from '@/components/features/FeatureLayout';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { FeatureIcon } from '@/components/ui/FeatureIcon';
import { featuresOverviewContent } from '@/lib/features-data';

export const metadata: Metadata = {
  title: featuresOverviewContent.meta.title,
  description: featuresOverviewContent.meta.description,
  keywords: featuresOverviewContent.meta.keywords,
  openGraph: {
    title: featuresOverviewContent.meta.title,
    description: featuresOverviewContent.meta.description,
    type: 'website',
  },
};

export default function FeaturesPage() {
  const { hero, features, integration, cta } = featuresOverviewContent;

  return (
    <FeatureLayout>
      {/* Hero Section */}
      <FeatureSection className="pt-24 sm:pt-32">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-6">
            {hero.subtitle}
          </p>
          <p className="text-lg text-slate-500">
            {hero.description}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <Link
              key={feature.id}
              href={`/features/${feature.slug}`}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 mb-6 group-hover:scale-110 transition-transform duration-300 text-purple-600">
                  <FeatureIcon name={feature.icon} className="w-8 h-8" />
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="inline-flex items-center gap-2 text-purple-600 font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </FeatureSection>

      {/* Integration Section */}
      <FeatureSection className="bg-slate-50">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {integration.title}
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            {integration.description}
          </p>

          {/* Integration Visual */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-blue-100 aspect-video flex items-center justify-center">
            {integration.visual ? (
              <img
                src={integration.visual}
                alt="Features Integration"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-8">
                <div className="flex items-center justify-center mb-4">
                  <FeatureIcon name="refresh" className="w-12 h-12 text-slate-400" />
                </div>
                <p className="text-slate-500 text-lg">
                  功能整合流程圖 Placeholder
                </p>
                <p className="text-slate-400 text-sm mt-2">
                  展示各功能如何協同工作
                </p>
              </div>
            )}
          </div>
        </div>
      </FeatureSection>

      {/* CTA Section */}
      <FeatureSection>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-12 sm:p-16 text-center animate-fade-in-up">
          {/* Background Decorations */}
          <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {cta.title}
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              {cta.description}
            </p>

            <ButtonLink
              href={cta.buttonHref}
              variant="secondary"
              size="xl"
              radius="lg"
              className="bg-white text-purple-600 hover:bg-purple-50"
              trackingEvent={{
                event: 'features_overview_cta',
                category: 'conversion',
                label: cta.buttonText,
              }}
            >
              {cta.buttonText}
            </ButtonLink>

            <p className="text-purple-200 text-sm mt-6">
              No credit card required. Start in 60 seconds.
            </p>
          </div>
        </div>
      </FeatureSection>
    </FeatureLayout>
  );
}
