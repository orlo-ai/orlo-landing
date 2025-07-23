import Link from 'next/link';
import { PricingContent } from '@/types/content';

interface PricingSectionProps {
  pricing: PricingContent;
}

export default function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{pricing.title}</h2>
          <p className="text-xl text-gray-600">{pricing.description}</p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-md mx-auto">
          {pricing.plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-lg p-8 text-center relative ${
                plan.highlight ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.cta.href}
                className={`block w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  plan.cta.variant === 'primary'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
                    : 'border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {plan.cta.icon && <i className={`${plan.cta.icon} mr-2`} />}
                {plan.cta.text}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Why Join During Beta?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div className="flex items-center">
                <i className="fas fa-infinity text-blue-600 mr-2" />
                Lifetime access to premium features
              </div>
              <div className="flex items-center">
                <i className="fas fa-users text-blue-600 mr-2" />
                Direct access to founders
              </div>
              <div className="flex items-center">
                <i className="fas fa-rocket text-blue-600 mr-2" />
                Shape the product roadmap
              </div>
              <div className="flex items-center">
                <i className="fas fa-star text-blue-600 mr-2" />
                Exclusive beta community
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}