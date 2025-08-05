import React from 'react';
import { 
  CheckIcon, 
  LightBulbIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/solid';

interface IconProps {
  type: 'check' | 'lightbulb' | 'refresh';
  className?: string;
}

/**
 * 功能圖示組件
 * 使用 Heroicons 渲染標準化的 SVG 圖示
 * @see https://heroicons.com/
 */
export default function Icon({ type, className = "w-4 h-4 text-white whimsy-svg" }: IconProps) {
  const iconComponents = {
    check: CheckIcon,
    lightbulb: LightBulbIcon,
    refresh: ArrowPathIcon
  };

  const IconComponent = iconComponents[type] || CheckIcon;
  
  return <IconComponent className={className} />;
}