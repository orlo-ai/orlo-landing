import { AnalyticsEvent } from '@/types';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    orloAnalytics: {
      trackEvent: (event: AnalyticsEvent) => void;
    };
  }
}

export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.event, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }
};

// 初始化 orloAnalytics 全域物件
if (typeof window !== 'undefined') {
  window.orloAnalytics = {
    trackEvent,
  };
}
