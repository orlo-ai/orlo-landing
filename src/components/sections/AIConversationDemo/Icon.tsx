import React from 'react';
import { 
  CheckIcon, 
  LightBulbIcon, 
  ArrowPathIcon 
} from '@heroicons/react/24/outline';

interface IconProps {
  type: 'check' | 'lightbulb' | 'refresh';
  className?: string;
}

/**
 * 功能圖示組件
 * 使用 Heroicons Outline 渲染清晰的 SVG 圖示
 * @see https://heroicons.com/
 */
export default function Icon({ type, className = "w-5 h-5 whimsy-svg" }: IconProps) {
  const iconComponents = {
    check: CheckIcon,
    lightbulb: LightBulbIcon,
    refresh: ArrowPathIcon
  };

  const IconComponent = iconComponents[type] || CheckIcon;
  
  return <IconComponent className={className} />;
}