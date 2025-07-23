import { FeatureItem } from '@/types/content';

interface FeaturesSectionProps {
  features: FeatureItem[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          What Makes Orlo Different
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Orlo is not just another productivity tool. It&apos;s a reimagining of how we manage time.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature) => (
            <div key={feature.id}>
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>

              {feature.id === 'time-boxing' && (
                <div className="relative mt-6">
                  {/* Time Block SVG Illustration */}
                  <svg
                    className="w-full"
                    viewBox="0 0 400 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background */}
                    <rect width="400" height="240" rx="8" fill="#F9FAFB" />

                    {/* Time column */}
                    <rect
                      x="10"
                      y="10"
                      width="60"
                      height="220"
                      fill="white"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />
                    <text x="20" y="30" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B7280">
                      9:00 AM
                    </text>
                    <text x="20" y="90" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B7280">
                      10:00 AM
                    </text>
                    <text x="20" y="150" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B7280">
                      11:00 AM
                    </text>
                    <text x="20" y="210" fontFamily="Inter, sans-serif" fontSize="12" fill="#6B7280">
                      12:00 PM
                    </text>

                    {/* Time blocks */}
                    <rect x="80" y="10" width="300" height="60" rx="6" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1" />
                    <rect x="80" y="10" width="8" height="60" rx="2" fill="#3B82F6" />
                    <text x="100" y="35" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500" fill="#1E40AF">
                      Deep Work: Project X
                    </text>
                    <text x="100" y="55" fontFamily="Inter, sans-serif" fontSize="12" fill="#3B82F6">
                      High Energy Time Block
                    </text>

                    <rect x="80" y="80" width="300" height="30" rx="6" fill="#E0E7FF" stroke="#A5B4FC" strokeWidth="1" />
                    <rect x="80" y="80" width="8" height="30" rx="2" fill="#6366F1" />
                    <text x="100" y="100" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500" fill="#3730A3">
                      Email Processing
                    </text>

                    <rect x="80" y="120" width="300" height="30" rx="6" fill="#F5F3FF" stroke="#C4B5FD" strokeWidth="1" />
                    <rect x="80" y="120" width="8" height="30" rx="2" fill="#8B5CF6" />
                    <text x="100" y="140" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500" fill="#5B21B6">
                      Team Check-in
                    </text>

                    <rect x="80" y="160" width="300" height="50" rx="6" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1" />
                    <rect x="80" y="160" width="8" height="50" rx="2" fill="#F59E0B" />
                    <text x="100" y="190" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500" fill="#92400E">
                      Lunch Break
                    </text>
                    <text x="100" y="205" fontFamily="Inter, sans-serif" fontSize="12" fill="#F59E0B">
                      Recovery Time
                    </text>
                  </svg>
                </div>
              )}

              {feature.id === 'ai-coaching' && (
                <div className="relative mt-6">
                  {/* AI Coach Chat Illustration */}
                  <svg
                    className="w-full"
                    viewBox="0 0 400 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background */}
                    <rect
                      width="400"
                      height="240"
                      rx="8"
                      fill="white"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />

                    {/* Chat header */}
                    <rect width="400" height="40" rx="8" fill="#F3F4F6" />
                    <circle cx="24" cy="20" r="8" fill="#3B82F6" />
                    <text x="40" y="25" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="500" fill="#1F2937">
                      Orlo AI Coach
                    </text>

                    {/* Chat messages */}
                    <rect x="20" y="60" width="280" height="40" rx="8" fill="#EBF5FF" />
                    <text x="30" y="75" fontFamily="Inter, sans-serif" fontSize="12" fill="#1E40AF">
                      I notice you&apos;re most productive in the morning.
                    </text>
                    <text x="30" y="90" fontFamily="Inter, sans-serif" fontSize="12" fill="#1E40AF">
                      Let&apos;s schedule your deep work then.
                    </text>

                    <rect x="100" y="120" width="280" height="40" rx="8" fill="#F3F4F6" />
                    <text x="110" y="135" fontFamily="Inter, sans-serif" fontSize="12" fill="#374151">
                      That sounds perfect! How do you know
                    </text>
                    <text x="110" y="150" fontFamily="Inter, sans-serif" fontSize="12" fill="#374151">
                      when I&apos;m most focused?
                    </text>

                    <rect x="20" y="180" width="320" height="40" rx="8" fill="#EBF5FF" />
                    <text x="30" y="195" fontFamily="Inter, sans-serif" fontSize="12" fill="#1E40AF">
                      I&apos;ve been tracking your completion patterns and
                    </text>
                    <text x="30" y="210" fontFamily="Inter, sans-serif" fontSize="12" fill="#1E40AF">
                      energy levels. You&apos;re 73% more efficient before 10 AM.
                    </text>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}