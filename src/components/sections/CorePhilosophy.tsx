'use client';

import React from 'react';

/**
 * 核心理念展示組件
 * 展示 Orlo 的核心價值主張和設計哲學
 * 採用 Apple 風格的簡潔設計和優雅動畫
 */

interface PhilosophyCard {
  id: string;
  title: string;
  description: string;
  gradient: string;
  icon: string;
}

const philosophyCards: PhilosophyCard[] = [
  {
    id: 'move-with-joy',
    title: 'Move with Joy',
    description: 'Push goals forward with focus and delight',
    gradient: 'from-blue-500/10 via-purple-500/10 to-pink-500/10',
    icon: '🎯'
  },
  {
    id: 'mental-peace',
    title: 'Mental Peace',
    description: 'Release all thoughts safely to your second brain',
    gradient: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',
    icon: '🧘'
  },
  {
    id: 'more-your-way',
    title: 'More Your Way',
    description: 'Let your habits do the heavy lifting',
    gradient: 'from-orange-500/10 via-amber-500/10 to-yellow-500/10',
    icon: '⚡'
  },
  {
    id: 'never-alone',
    title: 'Never Alone',
    description: 'Reflect and plan with guidance, not empty pages',
    gradient: 'from-violet-500/10 via-purple-500/10 to-fuchsia-500/10',
    icon: '🤝'
  }
];

export default function CorePhilosophy() {
  return (
    <section
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
      aria-labelledby="philosophy-title"
    >
      {/* 背景裝飾 - 微妙的漸變光暈 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50/50 pointer-events-none" />

      {/* 背景光暈效果 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* 標題區域 */}
        <div className="text-center mb-16 sm:mb-20 animate-fadeInUp">
          <h2
            id="philosophy-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight tracking-tight"
          >
            How hard are you working on your{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              productivity tools
            </span>
            ?
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
            Focus on your goals, not on which of a thousand todos comes first.
          </p>
        </div>

        {/* 特色卡片網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {philosophyCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative animate-fadeInUp"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'both'
              }}
            >
              {/* 卡片容器 */}
              <div className={`
                relative h-full p-8 sm:p-10 lg:p-12
                bg-gradient-to-br ${card.gradient}
                backdrop-blur-sm
                rounded-3xl
                border border-gray-200/50
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:shadow-gray-200/50
                hover:-translate-y-2
                hover:border-gray-300/50
              `}>
                {/* 內容光暈效果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* 卡片內容 */}
                <div className="relative">
                  {/* 圖標 */}
                  <div className="mb-6 text-5xl sm:text-6xl transform transition-transform duration-500 group-hover:scale-110">
                    {card.icon}
                  </div>

                  {/* 標題 */}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                    {card.title}
                  </h3>

                  {/* 描述 */}
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                {/* 裝飾性漸變邊框 */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-[-1px] bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-sm" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部裝飾性文字 */}
        <div className="text-center mt-16 sm:mt-20 animate-fadeInUp" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
          <p className="text-lg sm:text-xl text-gray-500 font-light italic">
            A productivity system that works <span className="text-gray-900 font-normal">with</span> you, not <span className="text-gray-900 font-normal">against</span> you.
          </p>
        </div>
      </div>
    </section>
  );
}
