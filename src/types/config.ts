// 配置相關類型定義

// 網站配置
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    app: string;
    login: string;
    support: string;
    docs: string;
    blog: string;
  };
  analytics: {
    googleAnalyticsId: string;
    customEvents: EventConfig[];
  };
  features: {
    abTesting: boolean;
    animations: boolean;
    interactiveDemo: boolean;
    darkMode: boolean;
    i18n: boolean;
  };
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}

// 事件配置
export interface EventConfig {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// 動畫配置
export interface AnimationSettings {
  reducedMotion: boolean;
  duration: {
    fast: number;
    normal: number;
    slow: number;
  };
  easing: {
    ease: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
  };
}

// 主題配置
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    hero: string;
    accent: string;
  };
  fonts: {
    sans: string[];
    mono: string[];
  };
  spacing: Record<string, string>;
  breakpoints: Record<string, string>;
}

// 應用程式配置
export interface AppConfig {
  api: {
    baseUrl: string;
    timeout: number;
    retryAttempts: number;
  };
  cache: {
    ttl: number;
    maxSize: number;
  };
  performance: {
    enableServiceWorker: boolean;
    enableCodeSplitting: boolean;
    enableImageOptimization: boolean;
  };
  security: {
    enableCSP: boolean;
    enableHSTS: boolean;
    enableXSSProtection: boolean;
  };
}

// 功能開關配置
export interface FeatureFlags {
  newLandingPage: boolean;
  betaFeatures: boolean;
  advancedAnalytics: boolean;
  aiInsights: boolean;
  collaborativeFeatures: boolean;
  mobileApp: boolean;
}

// 環境配置
export interface EnvironmentConfig {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_APP_URL: string;
  NEXT_PUBLIC_API_URL: string;
  NEXT_PUBLIC_GA_ID: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
  DATABASE_URL?: string;
  REDIS_URL?: string;
}

// A/B 測試配置
export interface ABTestConfig {
  id: string;
  name: string;
  description: string;
  variants: ABTestVariant[];
  trafficAllocation: number; // 0-100
  startDate: Date;
  endDate?: Date;
  status: 'draft' | 'running' | 'paused' | 'completed';
  metrics: string[];
}

export interface ABTestVariant {
  id: string;
  name: string;
  weight: number; // 0-100
  config: Record<string, any>;
}