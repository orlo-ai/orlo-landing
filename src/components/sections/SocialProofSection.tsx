import { Metric } from '@/types/content';

interface SocialProofSectionProps {
  metrics: Metric[];
}

export default function SocialProofSection({ metrics }: SocialProofSectionProps) {
  return (
    <div className="bg-gray-100 py-8 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-6 text-center">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-3xl font-bold gradient-text mb-1">
                {metric.value}
              </div>
              <div className="text-gray-600 text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}