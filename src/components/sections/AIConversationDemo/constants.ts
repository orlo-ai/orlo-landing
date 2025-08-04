/**
 * AI 對話演示組件的常數配置
 */

export interface FeatureData {
  id: string;
  title: string;
  description: string;
  iconType: 'check' | 'lightbulb' | 'refresh';
  color: {
    bg: string;
    hover: string;
    shadow: string;
  };
  animation: {
    svg: string;
    duration: string;
  };
}

export interface BackgroundCircle {
  id: string;
  size: string;
  background: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animationDelay: string;
  responsive: {
    hiddenOnMobile: boolean;
  };
}

// 功能特色資料
export const FEATURES: FeatureData[] = [
  {
    id: 'habit-recognition',
    title: 'Smart Habit Recognition',
    description: 'Learns your routines and remembers what matters',
    iconType: 'check',
    color: {
      bg: 'bg-blue-500',
      hover: 'group-hover/item:text-blue-600',
      shadow: 'group-hover/item:shadow-blue-200'
    },
    animation: {
      svg: 'group-hover/item:rotate-12',
      duration: 'duration-300'
    }
  },
  {
    id: 'energy-planning',
    title: 'Energy-Based Planning',
    description: 'Schedules tasks around your natural energy cycles',
    iconType: 'lightbulb',
    color: {
      bg: 'bg-purple-500',
      hover: 'group-hover/item:text-purple-600',
      shadow: 'group-hover/item:shadow-purple-200'
    },
    animation: {
      svg: 'group-hover/item:scale-110',
      duration: 'duration-300'
    }
  },
  {
    id: 'instant-adaptation',
    title: 'Instant Adaptation',
    description: 'Plans change? AI reschedules everything instantly',
    iconType: 'refresh',
    color: {
      bg: 'bg-indigo-500',
      hover: 'group-hover/item:text-indigo-600',
      shadow: 'group-hover/item:shadow-indigo-200'
    },
    animation: {
      svg: 'group-hover/item:rotate-180',
      duration: 'duration-500'
    }
  }
];

// 背景圓圈配置
export const BACKGROUND_CIRCLES: BackgroundCircle[] = [
  {
    id: 'circle-1',
    size: 'w-96 h-96',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    position: {
      top: '-200px',
      right: '-100px'
    },
    animationDelay: '0s',
    responsive: {
      hiddenOnMobile: false
    }
  },
  {
    id: 'circle-2',
    size: 'w-72 h-72',
    background: '#8b5cf6',
    position: {
      bottom: '-150px',
      left: '-50px'
    },
    animationDelay: '5s',
    responsive: {
      hiddenOnMobile: true
    }
  },
  {
    id: 'circle-3',
    size: 'w-48 h-48',
    background: '#3b82f6',
    position: {
      top: '50%',
      left: '10%'
    },
    animationDelay: '10s',
    responsive: {
      hiddenOnMobile: true
    }
  }
];

// 影片配置
export const VIDEO_CONFIG = {
  src: '/img/mobile_demo_AI_plan.mp4',
  aspectRatio: '9/16',
  maxHeight: '600px',
  fallback: {
    title: 'Loading AI Demo...',
    subtitle: 'Please wait a moment'
  }
};