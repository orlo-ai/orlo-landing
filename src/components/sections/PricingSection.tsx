import Link from 'next/link';
import { PricingContent } from '@/types/content';

interface PricingSectionProps {
  pricing: PricingContent;
}

export default function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{pricing.title}</h2>
          <p className="text-xl text-gray-600">{pricing.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {pricing.plans.map((plan) => (
            plan.highlight ? (
              /* Pro Plan with Gradient Border */
              <div key={plan.id} className="gradient-border">
                <div className="gradient-border-content p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Most Popular
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold gradient-text mb-2">{plan.price}</div>
                    <div className="text-gray-600">{plan.period}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.cta.href}
                    className="w-full btn-primary text-white px-6 py-3 rounded-lg font-semibold block text-center"
                  >
                    {plan.cta.text}
                  </Link>
                </div>
              </div>
            ) : (
              /* Free Trial */
              <div key={plan.id} className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-800 mb-2">{plan.price}</div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.cta.href}
                  className="w-full bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold block text-center hover:bg-gray-800 transition"
                >
                  {plan.cta.text}
                </Link>
              </div>
            )
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            <i className="fas fa-handshake mr-2" />
            30-day partnership guarantee • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}