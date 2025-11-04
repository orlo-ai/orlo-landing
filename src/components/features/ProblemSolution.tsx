import React from 'react';
import Image from 'next/image';
import { ProblemSolutionContent } from '@/types/features';
import { cn } from '@/lib/utils';
import { FeatureIcon } from '@/components/ui/FeatureIcon';

interface ProblemSolutionProps {
  content: ProblemSolutionContent;
  className?: string;
}

/**
 * 問題與解決方案對比區塊
 * 左側展示用戶痛點，右側展示 Orlo 的解法
 */
export function ProblemSolution({ content, className }: ProblemSolutionProps) {
  const { problems, solutions, visual } = content;

  return (
    <section className={cn('py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50', className)}>
      <div className="max-w-5xl lg:max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* 左側：問題 */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500 text-sm font-semibold text-white mb-2">
              Without Orlo
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              The Struggle
            </h2>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border-2 border-red-200 shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-red-500 text-white">
                    {problem.icon ? (
                      <FeatureIcon name={problem.icon} className="w-4 h-4" />
                    ) : (
                      <span className="font-bold text-sm">✕</span>
                    )}
                  </div>
                  <p className="text-slate-800 font-medium leading-relaxed">{problem.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 右側：解決方案 */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-semibold text-white mb-2">
              With Orlo
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              The Solution
            </h2>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-white via-blue-50 to-purple-50 border-2 border-blue-200 shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
                  style={{ animationDelay: `${(index + problems.length) * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                    {solution.icon ? (
                      <FeatureIcon name={solution.icon} className="w-4 h-4" />
                    ) : (
                      <span className="font-bold text-sm">✓</span>
                    )}
                  </div>
                  <p className="text-slate-800 font-medium leading-relaxed">{solution.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 視覺對比（可選） */}
        {visual && (
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {visual.type === 'image' && (
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              )}
              {visual.type === 'video' && (
                <video
                  src={visual.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <track kind="captions" />
                </video>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
