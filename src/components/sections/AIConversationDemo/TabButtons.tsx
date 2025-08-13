'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { FunctionTab } from './constants';

interface TabButtonsProps {
  tabs: FunctionTab[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
  className?: string;
  layout?: 'flex' | 'grid';
  size?: 'sm' | 'md';
}

/**
 * 可重用的標籤按鈕組件
 * 支援不同的佈局模式（flex 或 grid）和尺寸
 */
const TabButtons: React.FC<TabButtonsProps> = ({
  tabs,
  activeTabId,
  onTabChange,
  className = '',
  layout = 'grid',
  size = 'md'
}) => {
  const containerClass = layout === 'flex' 
    ? 'flex gap-3' 
    : 'grid grid-cols-2 gap-2';

  const buttonClass = layout === 'flex' ? 'flex-1' : 'w-full';

  return (
    <div 
      className={`${containerClass} ${className}`}
      role="tablist"
      aria-label="功能選擇"
    >
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          variant={activeTabId === tab.id ? 'primary' : 'outline'}
          size={size}
          className={buttonClass}
          role="tab"
          aria-selected={activeTabId === tab.id}
          aria-controls={`tabpanel-${tab.id}`}
        >
          {tab.title}
        </Button>
      ))}
    </div>
  );
};

export default React.memo(TabButtons);