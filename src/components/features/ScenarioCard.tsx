import React from 'react';
import Image from 'next/image';
import { ScenarioContent } from '@/types/features';
import { cn } from '@/lib/utils';

interface ScenarioCardProps {
  scenario: ScenarioContent;
  className?: string;
}

/**
 * 使用場景卡片
 * 展示真實用戶的使用情境和結果
 */
export function ScenarioCard({ scenario, className }: ScenarioCardProps) {
  const { title, persona, steps, visual } = scenario;

  return (
    <div
      className={cn(
        'p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-blue-200 transition-all duration-300',
        className
      )}
    >
      {/* 場景標題 */}
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>

      {/* 人物資訊 */}
      <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-slate-100">
        {persona.avatar ? (
          <Image
            src={persona.avatar}
            alt={persona.name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full shadow-md"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {persona.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-bold text-slate-900">{persona.name}</p>
          <p className="text-sm text-slate-700 font-medium">{persona.role}</p>
        </div>
      </div>

      {/* 使用流程 */}
      <div className="space-y-6 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="relative pl-8">
            {/* 時間線 */}
            <div className="absolute left-0 top-0 flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-full bg-gradient-to-b from-purple-300 to-blue-300 mt-2" />
              )}
            </div>

            {/* 步驟內容 */}
            <div>
              {step.time && (
                <p className="text-sm font-medium text-purple-600 mb-1">{step.time}</p>
              )}
              <p className="text-slate-700 font-medium mb-1">{step.action}</p>
              <p className="text-sm text-slate-600 italic">→ {step.result}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 視覺元素（可選） */}
      {visual && (
        <div className="mt-6 rounded-xl overflow-hidden">
          {visual.type === 'image' && (
            <Image
              src={visual.src}
              alt={visual.alt}
              width={600}
              height={400}
              className="w-full h-auto"
            />
          )}
          {visual.type === 'video' && (
            <video
              src={visual.src}
              controls
              className="w-full h-auto"
            >
              <track kind="captions" />
            </video>
          )}
        </div>
      )}
    </div>
  );
}

interface ScenarioSectionProps {
  title: string;
  description?: string;
  scenarios: ScenarioContent[];
  className?: string;
}

/**
 * 場景展示區塊
 * 包含標題和多個場景卡片
 */
export function ScenarioSection({
  title,
  description,
  scenarios,
  className,
}: ScenarioSectionProps) {
  return (
    <section className={cn('py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50', className)}>
      <div className="max-w-5xl lg:max-w-6xl mx-auto">
        {/* 標題 */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{description}</p>
          )}
        </div>

        {/* 場景卡片 */}
        <div className="grid lg:grid-cols-2 gap-8">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ScenarioCard scenario={scenario} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
