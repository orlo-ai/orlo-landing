import React from 'react';
import Image from 'next/image';
import { FeatureHighlight } from '@/types/features';
import { cn } from '@/lib/utils';
import { FeatureIcon } from '@/components/ui/FeatureIcon';

interface FeatureShowcaseProps {
  title: string;
  description?: string;
  highlights: FeatureHighlight[];
  className?: string;
}

/**
 * 功能亮點展示區塊
 * 展示 3-4 個核心功能特色
 */
export function FeatureShowcase({
  title,
  description,
  highlights,
  className,
}: FeatureShowcaseProps) {
  return (
    <section className={cn('py-16 sm:py-20 px-4 sm:px-6 lg:px-8', className)}>
      <div className="max-w-5xl lg:max-w-6xl mx-auto">
        {/* 標題 */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{description}</p>
          )}
        </div>

        {/* 功能列表 */}
        <div className="space-y-20">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.id}
              className={cn(
                'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-fade-in-up',
                index % 2 === 1 && 'lg:grid-flow-dense'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* 文字內容 */}
              <div className={cn(index % 2 === 1 && 'lg:col-start-2')}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 mb-6 shadow-lg text-white">
                  <FeatureIcon name={highlight.icon} className="w-8 h-8" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  {highlight.title}
                </h3>

                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                  {highlight.description}
                </p>
              </div>

              {/* 視覺元素 */}
              <div className={cn(index % 2 === 1 && 'lg:col-start-1 lg:row-start-1')}>
                {highlight.visual ? (
                  <div className="relative rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                    {highlight.visual.type === 'image' && (
                      <Image
                        src={highlight.visual.src}
                        alt={highlight.visual.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    )}
                    {highlight.visual.type === 'video' && (
                      <video
                        src={highlight.visual.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                      >
                        <track kind="captions" />
                      </video>
                    )}
                    {highlight.visual.type === 'gif' && (
                      <Image
                        src={highlight.visual.src}
                        alt={highlight.visual.alt}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                        unoptimized
                      />
                    )}
                  </div>
                ) : (
                  // Placeholder
                  <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-100 to-slate-200 aspect-video flex items-center justify-center">
                    <p className="text-slate-400 text-lg">
                      {highlight.title} - 截圖 Placeholder
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
