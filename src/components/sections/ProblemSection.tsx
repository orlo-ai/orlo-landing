import { ProblemItem } from '@/types/content';

interface ProblemSectionProps {
  problems: ProblemItem[];
}

export default function ProblemSection({ problems }: ProblemSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Why Most Time Management Fails
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Traditional tools focus on what you do, not how your brain works. Orlo is different.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div key={problem.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                <i className={`${problem.icon} text-blue-600`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-gray-600 mb-3">
                {problem.description}{' '}
                <span className="font-medium text-blue-700">
                  {problem.highlight}
                </span>
              </p>
              <p className="text-sm text-gray-500 italic">
                {problem.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}