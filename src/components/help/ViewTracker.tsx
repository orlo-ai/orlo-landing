'use client';

import React, { useEffect } from 'react';
import { ViewTrackerProps } from '@/types/help';

export default function ViewTracker({ articleId }: ViewTrackerProps) {
  useEffect(() => {
    // 只保留 Google Analytics 追蹤（如果有設定）
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        article_id: articleId
      });
    }
  }, [articleId]);

  return null; // 這個組件不渲染任何內容
}