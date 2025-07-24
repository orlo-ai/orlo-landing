'use client';

import { useState } from 'react';
import { TestimonialItem } from '@/types/content';
import Image from 'next/image';

interface SocialProofProps {
  testimonials: TestimonialItem[];
}

export default function SocialProof({ testimonials }: SocialProofProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Real Results from Real People
          </h2>
          <p className="text-xl text-gray-600">
            Join professionals who&apos;ve transformed their relationship with time
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-400 text-xl mr-1" />
              ))}
            </div>

            <blockquote className="text-xl text-gray-800 mb-6 italic">
              &ldquo;{testimonials[currentTestimonial].content}&rdquo;
            </blockquote>

            <div className="flex items-center justify-center mb-6">
              <Image
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">
                  {testimonials[currentTestimonial].metrics.timeSaved}
                </div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text mb-1">
                  {testimonials[currentTestimonial].metrics.stressReduction}
                </div>
                <div className="text-sm text-gray-600">Stress Reduction</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <i className="fas fa-chevron-right" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={index === currentTestimonial 
                  ? 'w-3 h-3 rounded-full transition-colors bg-blue-600' 
                  : 'w-3 h-3 rounded-full transition-colors bg-gray-300'
                }
              />
            ))}
          </div>
        </div>

        {/* Overall Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">7.5h</div>
            <div className="text-gray-600">Average weekly time saved</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">82%</div>
            <div className="text-gray-600">Reduction in decision fatigue</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">4.8/5</div>
            <div className="text-gray-600">User satisfaction rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}