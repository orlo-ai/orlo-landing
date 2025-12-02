'use client';

import { useState } from 'react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PricingContent } from '@/types/content';

interface PricingSectionProps {
  pricing: PricingContent;
}

export default function PricingSection({ pricing }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [expandedPlans, setExpandedPlans] = useState<Record<string, boolean>>({
    free: false,
    pro: false,
    lifetime: false,
  });
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

  // 切換功能列表展開/收合
  const togglePlanFeatures = (planId: string) => {
    setExpandedPlans(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

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

                  {/* Billing Cycle Toggle (Pro plan only) */}
                  {plan.id === 'pro' && (
                    <div className="inline-flex items-center gap-2 bg-slate-50 rounded-xl p-1.5  border-slate-200">
                      <button
                        onClick={() => setBillingCycle('monthly')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                          billingCycle === 'monthly'
                            ? 'bg-white text-slate-900 shadow-sm  border-slate-200'
                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        Month
                      </button>
                      <button
                        onClick={() => setBillingCycle('yearly')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                          billingCycle === 'yearly'
                            ? 'bg-white text-slate-900 shadow-sm  border-slate-200'
                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        Year
                      </button>
                    </div>
                  )}

                  {/* Badge - For non-Pro plans */}
                  {displayPlan.badge && plan.id !== 'pro' && (
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
              <div className="border-t border-slate-100 pt-4">
                {/* Mobile: Key Features Button (collapsed state - top) */}
                {!expandedPlans[plan.id] && (
                  <button
                    onClick={() => togglePlanFeatures(plan.id)}
                    className="lg:hidden w-full flex items-center justify-between py-3 px-4 mb-0 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                    aria-expanded={expandedPlans[plan.id]}
                    aria-label={`Expand features for ${plan.name} plan`}
                  >
                    <span className="font-semibold text-sm">Key features</span>
                    <svg
                      className="w-5 h-5 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}

                {/* Features List - Collapsible on mobile, always expanded on desktop */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedPlans[plan.id]
                      ? 'max-h-[2000px] opacity-100'
                      : 'max-h-0 opacity-0 lg:max-h-[2000px] lg:opacity-100'
                  }`}
                >
                  <ul className="space-y-4 mb-4 lg:mb-0">
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

                  {/* Mobile: Key Features Button (expanded state - bottom) */}
                  <button
                    onClick={() => togglePlanFeatures(plan.id)}
                    className="lg:hidden w-full flex items-center justify-between py-3 px-4  text-slate-700 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                    aria-expanded={expandedPlans[plan.id]}
                    aria-label={`Collapse features for ${plan.name} plan`}
                  >
                    <span className="font-semibold text-sm">Key features</span>
                    <svg
                      className="w-5 h-5 text-slate-600 rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
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