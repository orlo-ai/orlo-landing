import React from 'react';
import type { BackgroundCircle } from './constants';

interface BackgroundCirclesProps {
  circles: BackgroundCircle[];
}

/**
 * 背景漂浮圓圈組件
 * 提供視覺裝飾效果，支援響應式隱藏
 */
export default function BackgroundCircles({ circles }: BackgroundCirclesProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {circles.map((circle) => {
        // 構建位置樣式
        const positionStyle: React.CSSProperties = {
          background: circle.background,
          opacity: 0.05,
          animationDelay: circle.animationDelay,
          ...circle.position
        };

        // 構建響應式類別
        const responsiveClasses = circle.responsive.hiddenOnMobile 
          ? 'hidden lg:block' 
          : '';

        // 構建完整的類別名稱
        const className = [
          'absolute',
          circle.size,
          'rounded-full',
          'animate-float',
          'whimsy-bg-circle',
          'group-hover/container:whimsy-bg-glow',
          'transition-all',
          'duration-500',
          responsiveClasses
        ].filter(Boolean).join(' ');

        return (
          <div
            key={circle.id}
            className={className}
            style={positionStyle}
          />
        );
      })}
    </div>
  );
}