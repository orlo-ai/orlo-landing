// 測試配置和工具函數
import { SiteConfig, ThemeConfig, AppConfig } from '@/types/config';
import { UserPersona, TimeBlock, AIInsight } from '@/types/user';

// 測試用的網站配置
export const testSiteConfig: SiteConfig = {
  name: 'Orlo',
  description: 'AI Chief of Staff - 重建你的生活，而不只是你的時程表',
  url: 'https://orlo.cc',
  ogImage: '/img/orlo-social-share.png',
  links: {
    app: 'https://app.orlo.cc',
    login: 'https://app.orlo.cc/login',
    support: 'mailto:support@orlo.cc',
    docs: 'https://docs.orlo.cc',
    blog: 'https://blog.orlo.cc',
  },
  analytics: {
    googleAnalyticsId: 'G-J6HLEC8EJZ',
    customEvents: [
      {
        name: 'demo_interaction',
        category: 'engagement',
        action: 'interact',
        label: 'product_demo',
      },
      {
        name: 'cta_click',
        category: 'conversion',
        action: 'click',
        label: 'get_started',
      },
    ],
  },
  features: {
    abTesting: true,
    animations: true,
    interactiveDemo: true,
    darkMode: false,
    i18n: true,
  },
  social: {
    twitter: 'https://twitter.com/orlo_ai',
    linkedin: 'https://linkedin.com/company/orlo-ai',
    github: 'https://github.com/orlo-ai',
  },
};

// 測試用的主題配置
export const testThemeConfig: ThemeConfig = {
  colors: {
    primary: '#3B82F6',
    secondary: '#8B5CF6',
    accent: '#06B6D4',
    background: '#FAFAFA',
    foreground: '#1F2937',
    muted: '#6B7280',
    border: '#E5E7EB',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
    secondary: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    accent: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
  },
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Monaco', 'monospace'],
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// 測試用的應用配置
export const testAppConfig: AppConfig = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.orlo.cc',
    timeout: 10000,
    retryAttempts: 3,
  },
  cache: {
    ttl: 300000, // 5 分鐘
    maxSize: 100,
  },
  performance: {
    enableServiceWorker: true,
    enableCodeSplitting: true,
    enableImageOptimization: true,
  },
  security: {
    enableCSP: true,
    enableHSTS: true,
    enableXSSProtection: true,
  },
};

// 測試用的用戶角色
export const testUserPersonas: UserPersona[] = [
  {
    id: 'entrepreneur',
    name: '創業者 Alex',
    role: '科技新創 CEO',
    description: '管理多個專案，需要在策略思考和日常營運間平衡',
    avatar: '/img/personas/entrepreneur.jpg',
    gradient: 'from-blue-500 to-purple-600',
    challenges: [
      '決策疲勞',
      '時間碎片化',
      '優先級混亂',
      '工作生活失衡',
    ],
    goals: [
      '提高決策效率',
      '專注核心業務',
      '建立可持續的工作節奏',
    ],
    timePreferences: {
      workingHours: {
        start: '08:00',
        end: '19:00',
      },
      peakEnergyTimes: ['09:00-11:00', '14:00-16:00'],
      preferredBreakDuration: 15,
      deepWorkPreferences: {
        minimumDuration: 90,
        preferredTimes: ['09:00-11:00', '14:00-16:00'],
      },
    },
  },
  {
    id: 'working-parent',
    name: '職業父母 Sarah',
    role: '產品經理 + 兩個孩子的媽媽',
    description: '在職業發展和家庭責任間尋找平衡',
    avatar: '/img/personas/working-parent.jpg',
    gradient: 'from-pink-500 to-rose-600',
    challenges: [
      '時間嚴重不足',
      '角色切換困難',
      '內疚感',
      '能量管理',
    ],
    goals: [
      '最大化有限時間',
      '減少角色衝突',
      '保持工作品質',
    ],
    timePreferences: {
      workingHours: {
        start: '09:30',
        end: '15:30',
      },
      peakEnergyTimes: ['10:00-12:00'],
      preferredBreakDuration: 10,
      deepWorkPreferences: {
        minimumDuration: 60,
        preferredTimes: ['10:00-12:00'],
      },
    },
  },
];

// 測試用的時間塊
export const testTimeBlocks: TimeBlock[] = [
  {
    id: 'deep-work-1',
    title: '產品策略規劃',
    startTime: '09:00',
    endTime: '11:00',
    type: 'deep-work',
    energyLevel: 'high',
    color: '#3B82F6',
    category: 'work',
    priority: 'high',
    estimatedDuration: 120,
    tags: ['策略', '規劃', '重要'],
  },
  {
    id: 'meeting-1',
    title: '團隊週會',
    startTime: '11:00',
    endTime: '12:00',
    type: 'meeting',
    energyLevel: 'medium',
    color: '#8B5CF6',
    category: 'work',
    priority: 'medium',
    estimatedDuration: 60,
    tags: ['會議', '團隊'],
  },
  {
    id: 'admin-1',
    title: '郵件處理',
    startTime: '13:00',
    endTime: '13:30',
    type: 'admin',
    energyLevel: 'low',
    color: '#06B6D4',
    category: 'work',
    priority: 'low',
    estimatedDuration: 30,
    tags: ['郵件', '行政'],
  },
];

// 測試用的 AI 洞察
export const testAIInsights: AIInsight[] = [
  {
    id: 'insight-1',
    type: 'optimization',
    message: '建議將郵件處理時間集中在下午低能量時段，可節省 45 分鐘的高效時間',
    icon: '⚡',
    impact: 'high',
    timesSaved: 45,
    stressReduction: 25,
  },
  {
    id: 'insight-2',
    type: 'energy-alignment',
    message: '您的創意工作最適合在上午 9-11 點進行，此時段效率提升 40%',
    icon: '🧠',
    impact: 'high',
    timesSaved: 30,
    stressReduction: 15,
  },
  {
    id: 'insight-3',
    type: 'batching',
    message: '將類似的行政工作批次處理，可減少 60% 的任務切換成本',
    icon: '📋',
    impact: 'medium',
    timesSaved: 25,
    stressReduction: 20,
  },
];

// 配置驗證函數
export function validateConfig<T>(config: T, schema: any): boolean {
  // 簡單的配置驗證邏輯
  try {
    // 在實際應用中，這裡會使用 Zod 或其他驗證庫
    return typeof config === 'object' && config !== null;
  } catch (error) {
    console.error('Configuration validation failed:', error);
    return false;
  }
}

// 測試工具函數
export const testUtils = {
  // 生成測試 ID
  generateTestId: (component: string, element?: string) => {
    return element ? `${component}-${element}` : component;
  },

  // 模擬延遲
  delay: (ms: number) => new Promise(resolve => setTimeout(resolve, ms)),

  // 生成隨機數據
  generateRandomData: <T>(factory: () => T, count: number): T[] => {
    return Array.from({ length: count }, factory);
  },

  // 深度比較對象
  deepEqual: (obj1: any, obj2: any): boolean => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  },
};