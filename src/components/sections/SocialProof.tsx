'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TestimonialItem } from '@/types/content';
import AvatarPlaceholder from '@/components/ui/AvatarPlaceholder';

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
          <p className="text-xl text-gray-600 mb-8">
            Join professionals who've transformed their relationship with time
          </p>
          
          {/* Overall Stats - Moved up as social proof */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-3xl font-bold gradient-text mb-2">7.5h</div>
              <div className="text-gray-600 text-sm">Average weekly time saved</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-3xl font-bold gradient-text mb-2">82%</div>
              <div className="text-gray-600 text-sm">Reduction in decision fatigue</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-3xl font-bold gradient-text mb-2">4.8/5</div>
              <div className="text-gray-600 text-sm">User satisfaction rating</div>
            </div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-10 text-center">
            <div className="flex justify-center mb-8">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl text-gray-800 mb-10 italic leading-relaxed max-w-3xl mx-auto">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4 shadow-md">
                <Image
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
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
      </div>
    </section>
  );
}