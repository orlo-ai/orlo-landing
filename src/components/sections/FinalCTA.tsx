import Link from 'next/link';
import { CTAContent } from '@/types/content';

interface FinalCTAProps {
  cta: CTAContent;
}

export default function FinalCTA({ cta }: FinalCTAProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          {cta.title}
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          {cta.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          {cta.buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={button.variant === 'primary' 
                ? 'px-8 py-4 rounded-xl font-bold text-lg transition bg-white text-gray-900 hover:bg-gray-100' 
                : 'px-8 py-4 rounded-xl font-bold text-lg transition border border-white text-white hover:bg-white hover:bg-opacity-10'
              }
            >
              {button.icon && <i className={`${button.icon} mr-2`} />}
              {button.text}
            </Link>
          ))}
        </div>

        <p className="text-sm opacity-75">
          ✨ <strong>Beta Partnership Offer:</strong> Lock in Pro features for life when you join now
        </p>
      </div>
    </section>
  );
}