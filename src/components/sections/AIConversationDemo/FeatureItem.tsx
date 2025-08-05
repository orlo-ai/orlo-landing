import React, { KeyboardEvent } from 'react';
import Icon from './Icon';
import type { FeatureData } from './constants';

interface FeatureItemProps {
  feature: FeatureData;
  isLast?: boolean;
  onActivate?: (featureId: string) => void;
}

/**
 * 功能特色項目組件
 * 支援鍵盤導航和 ARIA 無障礙功能
 */
export default function FeatureItem({ feature, isLast = false, onActivate }: FeatureItemProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate?.(feature.id);
    }
  };

  const handleClick = () => {
    onActivate?.(feature.id);
  };

  // 動態生成 icon 類別名稱
  const iconClassName = `w-5 h-5 ${feature.color.bg} whimsy-svg transition-all ${feature.animation.duration} ${feature.animation.svg} ${feature.color.hover}`;

  return (
    <>
      <div 
        className="px-5 py-4 whimsy-item group/item cursor-pointer relative overflow-hidden"
        role="button"
        tabIndex={0}
        aria-label={`${feature.title}: ${feature.description}`}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
      >
        <div className="flex items-center gap-4 relative z-10">
          <div className="flex items-center justify-center flex-shrink-0 whimsy-icon group-hover/item:whimsy-bounce transition-all duration-300">
            <Icon type={feature.iconType} className={iconClassName} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-17 font-medium text-gray-900 leading-tight transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-15 text-gray-500 mt-0.5 leading-tight group-hover/item:text-gray-600 transition-colors duration-300">
              {feature.description}
            </p>
          </div>
        </div>
        <div className="whimsy-ripple absolute inset-0 opacity-0 group-active/item:opacity-100 pointer-events-none"></div>
      </div>
      
      {/* 分隔線 - 最後一個項目不顯示 */}
      {!isLast && (
        <div className="h-px bg-gray-200 ml-16" role="separator" aria-hidden="true"></div>
      )}
    </>
  );
}