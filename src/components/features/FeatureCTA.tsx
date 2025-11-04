import React from 'react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { FeatureCTAContent } from '@/types/features';
import { cn } from '@/lib/utils';

interface FeatureCTAProps {
  content: FeatureCTAContent;
  className?: string;
}

/**
 * 功能頁面的 CTA 區塊
 * 強力行動召喚，引導用戶註冊
 */
export function FeatureCTA({ content, className }: FeatureCTAProps) {
  const { title, description, cta, features, note } = content;

  return (
    <section className={cn('py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white', className)}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {title}
        </h2>

        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* 功能列表（可選） */}
        {features && features.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/20"
              >
                <span className="text-green-400">✓</span>
                {feature}
              </div>
            ))}
          </div>
        )}

        {/* CTA 按鈕 */}
        <div className="flex justify-center">
          <ButtonLink
            href={cta.href}
            variant="secondary"
            size="xl"
            radius="lg"
            className="bg-white text-gray-900 hover:bg-gray-100"
            trackingEvent={{
              event: 'feature_cta_click',
              category: 'conversion',
              label: cta.text,
            }}
          >
            {cta.text}
          </ButtonLink>
        </div>

        {/* 註記（可選） */}
        {note && (
          <p className="text-white/75 text-sm mt-6">{note}</p>
        )}
      </div>
    </section>
  );
}
