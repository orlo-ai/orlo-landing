import { ButtonLink } from '@/components/ui/ButtonLink';
import { PricingContent } from '@/types/content';

interface PricingSectionProps {
  pricing: PricingContent;
}

export default function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Choose Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Partnership</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start with full access today, then choose the level that fits your ambitions.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {pricing.plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                pricing-card relative bg-white rounded-3xl p-8 shadow-sm border
                ${plan.highlight
                  ? 'pricing-card-featured border-2 border-indigo-200 shadow-lg ring-1 ring-indigo-100'
                  : 'border border-slate-200'
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-4 right-6 z-10">
                  <div className="bg-slate-100 text-slate-600 px-3 py-1 rounded text-xs font-medium">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{plan.name}</h3>

                {/* Price */}
                <div className="mb-2">
                  {plan.price === 'Free' ? (
                    <div className="pricing-amount text-5xl font-bold">Free</div>
                  ) : (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-medium text-slate-600">$</span>
                      <span className="pricing-amount text-5xl font-bold">{plan.price.replace('$', '')}</span>
                      <span className="text-xl text-slate-600">{plan.period}</span>
                    </div>
                  )}
                </div>

                {/* Price Note */}
                <div className="mb-6">
                  {plan.priceNote ? (
                    <p className="text-sm text-slate-500 mb-4">{plan.priceNote}</p>
                  ) : plan.price === 'Free' ? (
                    <p className="text-sm text-slate-500 mb-4">{plan.period}</p>
                  ) : null}

                  {/* CTA Button */}
                  <ButtonLink
                    href={plan.cta.href}
                    variant={plan.highlight ? 'gradient' : 'secondary'}
                    size="lg"
                    fullWidth
                    className={`
                      justify-center font-semibold transition-all duration-200
                      ${plan.highlight
                        ? 'pricing-cta-primary'
                        : 'border-2 border-slate-300 hover:border-indigo-400 hover:bg-slate-50'
                      }
                    `}
                  >
                    {plan.cta.text}
                  </ButtonLink>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-slate-100 pt-8 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span
                        className={`text-slate-700 leading-relaxed ${
                          feature.includes('Everything in') ? 'font-semibold' : ''
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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