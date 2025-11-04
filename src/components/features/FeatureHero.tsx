import React from 'react';
import Image from 'next/image';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { FeatureHeroContent } from '@/types/features';
import { cn } from '@/lib/utils';

interface FeatureHeroProps {
  content: FeatureHeroContent;
  className?: string;
}

/**
 * 功能頁面的 Hero 區塊
 * 包含標題、副標題、視覺元素和 CTA 按鈕
 */
export function FeatureHero({ content, className }: FeatureHeroProps) {
  const { badge, title, subtitle, description, visual, cta } = content;

  return (
    <section
      className={cn(
        'relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden',
        className
      )}
    >
      {/* 背景裝飾 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl lg:max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左側：文字內容 */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {badge && (
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-sm font-medium text-purple-700 mb-6">
                {badge}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 mb-6 leading-relaxed">
              {subtitle}
            </p>

            {description && (
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                {description}
              </p>
            )}

            {/* CTA 按鈕 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ButtonLink
                href={cta.primary.href}
                variant="gradient"
                size="lg"
                radius="lg"
                trackingEvent={{
                  event: 'feature_hero_cta_click',
                  category: 'features',
                  label: cta.primary.text,
                }}
              >
                {cta.primary.text}
              </ButtonLink>

              {cta.secondary && (
                <ButtonLink
                  href={cta.secondary.href}
                  variant="outline"
                  size="lg"
                  radius="lg"
                  trackingEvent={{
                    event: 'feature_hero_secondary_cta_click',
                    category: 'features',
                    label: cta.secondary.text,
                  }}
                >
                  {cta.secondary.text}
                </ButtonLink>
              )}
            </div>
          </div>

          {/* 右側：視覺元素 */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {visual.type === 'image' && visual.src && (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={visual.src}
                  alt={visual.alt || title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}

            {visual.type === 'video' && visual.src && (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  src={visual.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <track kind="captions" />
                </video>
              </div>
            )}

            {visual.type === 'component' && visual.component}

            {/* Placeholder 如果沒有視覺元素 */}
            {!visual.src && !visual.component && (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 aspect-video flex items-center justify-center">
                <p className="text-slate-400 text-lg">視覺元素 Placeholder</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
