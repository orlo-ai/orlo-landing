'use client';

import React, { useState, useCallback, useMemo } from 'react';
import VideoDemo from './VideoDemo';
import FeatureItem from './FeatureItem';
import TabButtons from './TabButtons';
import { FunctionTab } from './constants';

interface FunctionShowcaseProps {
  tabs: FunctionTab[];
}

export default function FunctionShowcase({ tabs }: FunctionShowcaseProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id || '');
  
  // 使用 useMemo 優化 activeTab 計算
  const activeTab = useMemo(
    () => tabs.find(tab => tab.id === activeTabId) || tabs[0],
    [tabs, activeTabId]
  );

  const handleTabChange = useCallback((tabId: string) => {
    setActiveTabId(tabId);
  }, []);

  const handleFeatureActivate = useCallback((featureId: string) => {
    // 功能激活處理邏輯可在此添加追蹤或分析代碼
  }, []);

  return (
    <div className="grid lg:grid-cols-[2fr_3fr] gap-8 lg:gap-16 items-center">
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
            {/* 大螢幕：單行顯示 */}
            <TabButtons
              tabs={tabs}
              activeTabId={activeTabId}
              onTabChange={handleTabChange}
              className="hidden xl:flex"
              layout="flex"
            />

            {/* 中等螢幕：2x2 網格 */}
            <div className="hidden md:block xl:hidden">
              <TabButtons
                tabs={tabs}
                activeTabId={activeTabId}
                onTabChange={handleTabChange}
                layout="grid"
              />
            </div>

            {/* 手機版：2x2 網格 */}
            <div className="md:hidden">
              <TabButtons
                tabs={tabs}
                activeTabId={activeTabId}
                onTabChange={handleTabChange}
                layout="grid"
                size="sm"
              />
            </div>
          </div>

          {/* 動態內容 */}
          <div 
            key={activeTab.id} 
            className="animate-fadeIn transition-all duration-500 ease-in-out"
            role="tabpanel"
            id={`tabpanel-${activeTab.id}`}
            aria-labelledby={`tab-${activeTab.id}`}
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