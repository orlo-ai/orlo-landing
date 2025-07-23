// 導出所有類型定義
export * from './components';
export * from './config';
export * from './content';
export * from './user';
export * from './utils';

// 基本類型定義
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

// 全域常數類型
export const APP_NAME = 'Orlo' as const;
export const APP_VERSION = '1.0.0' as const;

export type AppName = typeof APP_NAME;
export type AppVersion = typeof APP_VERSION;
