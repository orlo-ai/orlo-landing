'use client';

import { HeroContent } from '@/types/content';
import { ButtonLink } from '@/components/ui/ButtonLink';

interface HeroSectionProps extends HeroContent {}

export default function HeroSection({
  badge,
  headline,
  subheadline,
  description,
  buttons,
  metrics
}: HeroSectionProps) {
  return (
    <section className="pt-20 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-50"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Left: Hero Content */}
          <div className="hero-content lg:col-span-2">
            {/* Social Proof Badge */}
            <div className="mb-8 sm:mb-12">
              <div className="inline-flex items-center text-sm font-medium text-gray-600 bg-white/60 backdrop-blur-sm px-4 py-2.5 rounded-full border border-gray-200/50 shadow-sm">
                <div className="flex items-center mr-3">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                    <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>
                <span className="text-gray-700 font-medium">{badge}</span>
              </div>
            </div>

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
          <div className="product-demo lg:col-span-3 mt-8 lg:mt-0">
            <div className="gradient-border">
              <div className="gradient-border-content p-3 sm:p-6">
                {/* Orlo Dashboard Mock */}
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800">Today&apos;s Agenda</h3>
                    <div className="flex items-center text-xs sm:text-sm text-gray-600">
                      <i className="fas fa-robot mr-1"></i>
                      <span className="hidden sm:inline">AI Optimized</span>
                      <span className="sm:hidden">AI</span>
                    </div>
                  </div>

                  {/* AI Suggestion Banner */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                    <div className="flex items-start">
                      <div className="w-5 sm:w-6 h-5 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5">
                        <i className="fas fa-brain text-white text-xs"></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs sm:text-sm font-medium text-blue-800 mb-1">
                          AI Insight
                        </div>
                        <div className="text-xs text-blue-700 leading-tight">
                          I moved your creative work to 9 AM when you&apos;re most focused, and scheduled calls for 2 PM when you prefer interaction.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Time Blocks */}
                  <div className="space-y-2 sm:space-y-3">
                    {/* Deep Work Block */}
                    <div className="time-block bg-green-100 border border-green-200 rounded-lg p-2 sm:p-3">
                      <div className="flex items-center">
                        <div className="drag-indicator w-1.5 sm:w-2 h-6 sm:h-8 bg-green-500 rounded-full mr-2 sm:mr-3">
                          <i className="fas fa-grip-vertical text-green-600 text-xs opacity-50"></i>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-green-900 text-xs sm:text-sm">
                            Deep Work: Product Strategy
                          </div>
                          <div className="text-xs text-green-600 leading-tight">
                            9:00 - 11:00 AM • Peak Focus Time
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="text-xs bg-green-200 text-green-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                            <span className="hidden sm:inline">High Energy</span>
                            <span className="sm:hidden">High</span>
                          </div>
                          <i className="fas fa-check-circle text-green-500 text-sm"></i>
                        </div>
                      </div>
                    </div>

                    {/* Meeting Block */}
                    <div className="time-block bg-blue-100 border border-blue-200 rounded-lg p-2 sm:p-3">
                      <div className="flex items-center">
                        <div className="drag-indicator w-2 h-6 bg-blue-500 rounded-full mr-3">
                          <i className="fas fa-grip-vertical text-blue-600 text-xs opacity-50"></i>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-blue-900 text-sm">
                            Client Calls (3)
                          </div>
                          <div className="text-xs text-blue-600">
                            2:00 - 3:30 PM • Social Energy
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-xs bg-blue-200 text-blue-700 px-2 py-1 rounded">
                            Auto-grouped
                          </div>
                          <i className="fas fa-calendar text-blue-500"></i>
                        </div>
                      </div>
                    </div>

                    {/* Admin Block */}
                    <div className="time-block bg-gray-100 border border-gray-200 rounded-lg p-2 sm:p-3">
                      <div className="flex items-center">
                        <div className="drag-indicator w-2 h-4 bg-gray-400 rounded-full mr-3">
                          <i className="fas fa-grip-vertical text-gray-600 text-xs opacity-50"></i>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-700 text-sm">
                            Admin Tasks
                          </div>
                          <div className="text-xs text-gray-500">
                            4:00 - 4:30 PM • Low Energy OK
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                            Batched
                          </div>
                          <i className="fas fa-tasks text-gray-500"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-gray-800">6.5h</div>
                        <div className="text-xs text-gray-600 leading-tight">Focused work</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-gray-800">15min</div>
                        <div className="text-xs text-gray-600 leading-tight">Buffer time</div>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-gray-800">3</div>
                        <div className="text-xs text-gray-600 leading-tight">Context switches</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Benefits - Moved to bottom */}
        <div className="mt-12 lg:mt-16">
          {/* Mobile: Horizontal card layout */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-3 border border-gray-100/50 shadow-sm sm:hidden">
            <div className="grid grid-cols-3 gap-3">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-base font-medium text-gray-700 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500 font-normal leading-tight">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Original 3-column vertical layout */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-12 pt-8 border-t border-gray-100 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}