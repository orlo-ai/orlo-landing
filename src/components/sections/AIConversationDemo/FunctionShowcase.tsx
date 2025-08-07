'use client';

import React, { useState, useCallback } from 'react';
import VideoDemo from './VideoDemo';
import FeatureItem from './FeatureItem';
import { FunctionTab } from './constants';
import { Button } from '@/components/ui/Button';

interface FunctionShowcaseProps {
  tabs: FunctionTab[];
}

export default function FunctionShowcase({ tabs }: FunctionShowcaseProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || '');
  
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTabId(tabId);
  }, []);

  const handleFeatureActivate = useCallback((featureId: string) => {
    // 功能激活處理邏輯可在此添加追蹤或分析代碼
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* 影片區域 - 桌面版在左，手機版在下 */}
      <div className="order-2 lg:order-1">
        <div 
          key={`video-${activeTab.id}`}
          className="animate-fadeIn transition-all duration-500 ease-in-out"
        >
          <VideoDemo 
            src={activeTab.video.src}
            aspectRatio={activeTab.video.aspectRatio}
            maxHeight={activeTab.video.maxHeight}
            fallback={activeTab.video.fallback}
          />
        </div>
      </div>

      {/* 內容區域 - 桌面版在右，手機版在上 */}
      <div className="order-1 lg:order-2">
        <div className="opacity-0 animate-fadeInUp">
          {/* 功能標籤切換 */}
          <div className="mb-8">
            {/* 手機版：水平滾動 */}
            <div className="lg:hidden">
              <div 
                className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 px-4 -mx-4"
                style={{
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    variant={activeTabId === tab.id ? 'primary' : 'outline'}
                    size="md"
                    className="whitespace-nowrap flex-shrink-0"
                    style={{ scrollSnapAlign: 'start' }}
                    aria-pressed={activeTabId === tab.id}
                  >
                    {tab.title}
                  </Button>
                ))}
              </div>
            </div>

            {/* 桌面版：普通 flex 佈局 */}
            <div className="hidden lg:flex gap-3 justify-start">
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  variant={activeTabId === tab.id ? 'primary' : 'outline'}
                  size="md"
                  aria-pressed={activeTabId === tab.id}
                >
                  {tab.title}
                </Button>
              ))}
            </div>
          </div>

          {/* 動態內容 */}
          <div 
            key={activeTab.id} 
            className="animate-fadeIn transition-all duration-500 ease-in-out"
          >
            <h3 className="text-2xl font-bold mb-3 text-gray-900 transition-colors duration-300 text-center lg:text-left">
              {activeTab.title}
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed transition-colors duration-300 text-center lg:text-left">
              {activeTab.description}
            </p>
            
            {/* 功能列表 */}
            <div 
              className="space-y-1 bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-100 whimsy-container group/container transition-all duration-300"
              role="list"
              aria-label={`${activeTab.title} 功能特色`}
            >
              {activeTab.features.map((feature, index) => (
                <div key={feature.id} role="listitem">
                  <FeatureItem
                    feature={feature}
                    isLast={index === activeTab.features.length - 1}
                    onActivate={handleFeatureActivate}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}