'use client';

import React, { useCallback } from 'react';
import BackgroundCircles from './BackgroundCircles';
import FeatureItem from './FeatureItem';
import VideoDemo from './VideoDemo';
import { FEATURES, BACKGROUND_CIRCLES, VIDEO_CONFIG } from './constants';

/**
 * AI 對話演示組件
 * 展示 Orlo AI 的智能功能，包含影片演示和功能特色列表
 * 採用 Apple iOS 風格設計，支援響應式佈局和愉悅互動動畫
 */
export default function AIConversationDemo() {
  const handleFeatureActivate = useCallback((featureId: string) => {
    // 這裡可以添加功能點擊的追蹤或其他邏輯
    console.log('Feature activated:', featureId);
  }, []);

  return (
    <section 
      id="demo" 
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden"
      aria-labelledby="demo-title"
    >
      {/* 背景裝飾元素 - 漂浮效果 */}
      <BackgroundCircles circles={BACKGROUND_CIRCLES} />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* 影片 - 桌面版在左，手機版在下 */}
          <div className="order-2 lg:order-1">
            <VideoDemo {...VIDEO_CONFIG} />
          </div>

          {/* 文字內容 - 桌面版在右，手機版在上 */}
          <div className="order-1 lg:order-2">
            <div className="opacity-0 animate-fadeInUp">
              <h2 
                id="demo-title"
                className="text-3xl font-bold mb-4 text-gray-900 leading-tight text-center lg:text-left"
              >
                Orlo <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Knows You</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
                Learns your habits. Plans your perfect day.
              </p>
              
              {/* 功能列表 - Apple iOS 風格 */}
              <div 
                className="space-y-1 bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-100 whimsy-container group/container"
                role="list"
                aria-label="AI 功能特色"
              >
                {FEATURES.map((feature, index) => (
                  <div key={feature.id} role="listitem">
                    <FeatureItem
                      feature={feature}
                      isLast={index === FEATURES.length - 1}
                      onActivate={handleFeatureActivate}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}