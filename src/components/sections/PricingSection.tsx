'use client';

import { useState } from 'react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PricingContent } from '@/types/content';

interface PricingSectionProps {
  pricing: PricingContent;
}

export default function PricingSection({ pricing }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const lifetimePlan = pricing.plans.find(p => p.id === 'lifetime');
  const proPlan = pricing.plans.find(p => p.id === 'pro');

  // 從資料中取得 Pro 方案的計費選項
  const getProPricing = () => {
    if (!proPlan?.billingOptions?.[billingCycle]) {
      return { price: proPlan?.price || '$8', priceNote: proPlan?.priceNote };
    }
    return proPlan.billingOptions[billingCycle];
  };

  const proPricing = getProPricing();

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Choose Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Partnership</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Start with full access today, then choose the level that fits your ambitions.
          </p>
          {lifetimePlan?.badge && (
            <a
              href="#lifetime"
              className="mt-4 inline-block lg:hidden bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95 animate-pulse hover:animate-none"
            >
              Black Friday: Get 40% off Lifetime ↓
            </a>
          )}
        </div>

        {/* Desktop: Billing Cycle Segmented Control */}
        <div className="hidden lg:flex flex-col items-center mb-12">
          {/* 內聯容器 - 寬度由 Segmented Control 決定 */}
          <div className="inline-flex flex-col">
            <div className="relative inline-flex items-center bg-slate-100 rounded-lg p-1">
              {/* Sliding Background Indicator */}
              <div
                className={`absolute top-1 bottom-1 left-1 right-1 w-[calc(50%-0.25rem)] bg-white rounded-md shadow-sm transition-all duration-200 ${
                  billingCycle === 'yearly' ? 'left-auto right-1' : ''
                }`}
              />

              {/* Month Button */}
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors ${
                  billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-600'
                }`}
              >
                Month
              </button>

              {/* Year Button */}
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors ${
                  billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-600'
                }`}
              >
                Year
              </button>
            </div>

            {/* Save Badge - Below and aligned to right with fixed height to prevent layout shift */}
            <div className="flex justify-end mt-2 h-5">
              {billingCycle === 'yearly' && (
                <span className="text-xs text-gray-600 font-medium">Save 33%</span>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {pricing.plans.map((plan) => {
            // Override Pro plan pricing based on billing cycle
            const displayPlan = plan.id === 'pro' ? { ...plan, price: proPricing.price, priceNote: proPricing.priceNote } : plan;

            return (
            <div
              key={plan.id}
              id={plan.id}
              className={`
                pricing-card relative bg-white rounded-3xl p-8 shadow-sm border scroll-mt-20
                ${plan.highlight
                  ? 'pricing-card-featured border-2 border-indigo-200 shadow-lg ring-1 ring-indigo-100'
                  : 'border border-slate-200'
                }
              `}
            >
              {/* Plan Header */}
              <div className="text-left mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">{displayPlan.name}</h3>

                  {/* Mobile: Billing Cycle Segmented Control (Pro plan only) */}
                  {plan.id === 'pro' && (
                    <div className="lg:hidden">
                      <div className="relative inline-flex items-center bg-slate-100 rounded-lg p-0.5">
                        {/* Sliding Background Indicator */}
                        <div
                          className={`absolute top-0.5 bottom-0.5 left-0.5 right-0.5 w-[calc(50%-0.25rem)] bg-white rounded-md shadow-sm transition-all duration-200 ${
                            billingCycle === 'yearly' ? 'left-auto right-0.5' : ''
                          }`}
                        />

                        {/* Month Button */}
                        <button
                          onClick={() => setBillingCycle('monthly')}
                          className={`relative z-10 px-4 py-1 text-xs font-medium transition-colors ${
                            billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-600'
                          }`}
                        >
                          Month
                        </button>

                        {/* Year Button - Mobile without Save badge */}
                        <button
                          onClick={() => setBillingCycle('yearly')}
                          className={`relative z-10 px-4 py-1 text-xs font-medium transition-colors ${
                            billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-600'
                          }`}
                        >
                          Year
                        </button>
                      </div>
                    </div>
                  )}

                  {displayPlan.badge && (
                    <div className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">
                      {displayPlan.badge}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="mb-2">
                  {displayPlan.price === 'Free' ? (
                    <div className="pricing-amount text-5xl font-bold">Free</div>
                  ) : displayPlan.originalPrice ? (
                    <div className="flex items-baseline justify-start gap-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-medium text-slate-400 line-through decoration-2 decoration-red-500">${displayPlan.originalPrice.replace('$', '')}</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-medium text-slate-600">$</span>
                        <span className="pricing-amount text-5xl font-bold">{displayPlan.price.replace('$', '')}</span>
                      </div>
                      <span className="text-xl text-slate-600">{displayPlan.period}</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline justify-start gap-1">
                      <span className="text-2xl font-medium text-slate-600">$</span>
                      <span className="pricing-amount text-5xl font-bold">{displayPlan.price.replace('$', '')}</span>
                      <span className="text-xl text-slate-600">{displayPlan.period}</span>
                    </div>
                  )}
                </div>

                {/* Price Note */}
                <div className="mb-6">
                  {displayPlan.priceNote ? (
                    <p className="text-sm text-slate-500 mb-4">{displayPlan.priceNote}</p>
                  ) : displayPlan.price === 'Free' ? (
                    <p className="text-sm text-slate-500 mb-4">{displayPlan.period}</p>
                  ) : null}

                  {/* CTA Button */}
                  <ButtonLink
                    href={displayPlan.cta.href}
                    variant={displayPlan.highlight ? 'gradient' : 'secondary'}
                    size="lg"
                    fullWidth
                    className={`
                      justify-center font-semibold transition-all duration-200
                      ${displayPlan.highlight
                        ? 'pricing-cta-primary'
                        : 'border-2 border-slate-300 hover:border-indigo-400 hover:bg-slate-50'
                      }
                    `}
                    trackingEvent={{
                      event: 'pricing_plan_select',
                      category: 'conversion',
                      label: `pricing_${displayPlan.id}`
                    }}
                  >
                    {displayPlan.cta.text}
                  </ButtonLink>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-slate-100 pt-8 mb-8">
                <ul className="space-y-4">
                  {displayPlan.features.map((feature, index) => {
                    const isFirstItem = index === 0;
                    return (
                      <li key={index} className="flex items-start">
                        {!isFirstItem && (
                          <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                        <span
                          className={`text-slate-700 leading-relaxed ${
                            isFirstItem ? 'font-semibold' : ''
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="pricing-trust bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Start with confidence</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            <div className="pricing-trust-item flex items-center gap-3 text-slate-600">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium">14-day free trial</span>
            </div>

            <div className="pricing-trust-item flex items-center gap-3 text-slate-600">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium">No credit card required</span>
            </div>

            <div className="pricing-trust-item flex items-center gap-3 text-slate-600">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}