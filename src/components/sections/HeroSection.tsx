'use client';

import { HeroContent } from '@/types/content';
import { ButtonLink } from '@/components/ui/ButtonLink';

interface HeroSectionProps extends HeroContent {}

export default function HeroSection({
  badge,
  headline,
  subheadline,
  description,
  buttons
}: HeroSectionProps) {
  return (
    <section className="pt-20 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Hero Content */}
          <div className="hero-content">
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-8 sm:mb-12">
              <div className="mb-4">{headline}</div>
              <div className="gradient-text">{subheadline}</div>
            </h1>

            {/* Primary Message */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-10 sm:mb-14 font-medium leading-[1.6]">
              {description}
            </p>

            {/* Primary CTA Button */}
            <div className="mb-6 sm:mb-8">
              <ButtonLink
                href={buttons[0].href}
                variant="primary"
                size="lg"
                radius="lg"
                className="shadow-lg"
                trackingEvent={{
                  event: 'get_started_click',
                  category: 'cta',
                  label: 'hero_primary'
                }}
              >
                {buttons[0].icon && <i className={`${buttons[0].icon} mr-2`} />}
                {buttons[0].text}
              </ButtonLink>
              <p className="text-sm text-slate-500 mt-2">
                Start your 14-day free trial
              </p>
            </div>

            {/* Secondary CTA Link */}
            <div className="mb-8 sm:mb-12">
              <ButtonLink
                href={buttons[1].href}
                variant="link"
                size="md"
                className="text-gray-600 hover:text-purple-600"
              >
                {buttons[1].icon && <i className={`${buttons[1].icon} mr-2`} />}
                {buttons[1].text}
              </ButtonLink>
            </div>
          </div>

          {/* Right: Product Demo */}
          <div className="product-demo mt-8 lg:mt-0 flex items-center justify-center">
            {/* Orlo AI Demo Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/img/desktop_demo_AI_plan_thumbnail.png"
              className="w-full h-auto lg:w-auto lg:max-h-[600px] rounded-lg shadow-lg"
              aria-label="Orlo AI 智能規劃功能演示"
            >
              <source src="/video/desktop_demo_AI_plan.mp4" type="video/mp4" />
              {/* Fallback: 影片載入失敗時顯示 PNG 縮圖 */}
              <img
                src="/img/desktop_demo_AI_plan_thumbnail.png"
                alt="Orlo AI 規劃演示介面"
                className="w-full rounded-lg shadow-lg"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}