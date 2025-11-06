'use client';

import React from 'react';
import BackgroundCircles from './BackgroundCircles';
import FunctionShowcase from './FunctionShowcase';
import { BACKGROUND_CIRCLES, FUNCTION_TABS } from './constants';

/**
 * AI 對話演示組件
 * 展示 Orlo AI 的智能功能，包含雙影片演示和功能特色列表
 * 採用 Apple iOS 風格設計，支援響應式佈局和愉悅互動動畫
 */
export default function AIConversationDemo() {
  return (
    <section 
      id="demo" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden"
      aria-labelledby="demo-title"
    >
      {/* 背景裝飾元素 - 漂浮效果 */}
      <BackgroundCircles circles={BACKGROUND_CIRCLES} />

      <div className="max-w-6xl mx-auto relative">
        {/* 主標題區域 */}
        <div className="text-center mb-12">
          <h2 
            id="demo-title"
            className="text-4xl font-bold mb-4 text-gray-900 leading-tight"
          >
            Orlo: <span className="gradient-text text-transparent">Your Day&apos;s Rhythm Ally</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From dawn to dusk, AI guides your flow with gentle insights.
          </p>
        </div>

        {/* 功能展示區域 */}
        <FunctionShowcase tabs={FUNCTION_TABS} />
      </div>
    </section>
  );
}