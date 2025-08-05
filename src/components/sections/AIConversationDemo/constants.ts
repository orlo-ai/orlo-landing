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

// Smart Planning 功能特色資料 - 藍紫漸變系
export const SMART_PLANNING_FEATURES: FeatureData[] = [
  {
    id: 'learns-rhythms',
    title: 'Learns Your Rhythms',
    description: '',
    iconType: 'check',
    color: {
      bg: 'text-blue-600',
      hover: 'group-hover/item:text-blue-700',
      shadow: 'group-hover/item:shadow-blue-200'
    },
    animation: {
      svg: 'group-hover/item:rotate-12',
      duration: 'duration-300'
    }
  },
  {
    id: 'adapts-changes',
    title: 'Adapts to Changes',
    description: '',
    iconType: 'refresh',
    color: {
      bg: 'text-indigo-600',
      hover: 'group-hover/item:text-indigo-700',
      shadow: 'group-hover/item:shadow-indigo-200'
    },
    animation: {
      svg: 'group-hover/item:rotate-180',
      duration: 'duration-500'
    }
  },
  {
    id: 'optimizes-energy',
    title: 'Optimizes Energy Flow',
    description: '',
    iconType: 'lightbulb',
    color: {
      bg: 'text-purple-600',
      hover: 'group-hover/item:text-purple-700',
      shadow: 'group-hover/item:shadow-purple-200'
    },
    animation: {
      svg: 'group-hover/item:scale-110',
      duration: 'duration-300'
    }
  }
];

// Day Close 功能特色資料 - 紫粉漸變系
export const DAY_CLOSE_FEATURES: FeatureData[] = [
  {
    id: 'reflect-capture',
    title: 'Reflect & Capture',
    description: '',
    iconType: 'check',
    color: {
      bg: 'text-purple-600',
      hover: 'group-hover/item:text-purple-700',
      shadow: 'group-hover/item:shadow-purple-200'
    },
    animation: {
      svg: 'group-hover/item:rotate-12',
      duration: 'duration-300'
    }
  },
  {
    id: 'learn-grow',
    title: 'Learn & Grow',
    description: '',
    iconType: 'lightbulb',
    color: {
      bg: 'text-violet-600',
      hover: 'group-hover/item:text-violet-700',
      shadow: 'group-hover/item:shadow-violet-200'
    },
    animation: {
      svg: 'group-hover/item:scale-110',
      duration: 'duration-300'
    }
  },
  {
    id: 'preview-tomorrow',
    title: 'Preview Tomorrow',
    description: '',
    iconType: 'refresh',
    color: {
      bg: 'text-fuchsia-600',
      hover: 'group-hover/item:text-fuchsia-700',
      shadow: 'group-hover/item:shadow-fuchsia-200'
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

// 功能標籤配置
export interface FunctionTab {
  id: string;
  title: string;
  description: string;
  video: {
    src: string;
    aspectRatio: string;
    maxHeight: string;
    fallback: {
      title: string;
      subtitle: string;
    };
  };
  features: FeatureData[];
}

// 多功能標籤配置
export const FUNCTION_TABS: FunctionTab[] = [
  {
    id: 'smart-planning',
    title: 'Smart Planning',
    description: 'Learns your patterns, crafts your perfect day',
    video: {
      src: '/img/mobile_demo_AI_plan.mp4',
      aspectRatio: '9/16',
      maxHeight: '600px',
      fallback: {
        title: 'Loading Smart Planning Demo...',
        subtitle: 'Please wait a moment'
      }
    },
    features: SMART_PLANNING_FEATURES
  },
  {
    id: 'day-close',
    title: 'Day Close',
    description: 'Process today, prepare tomorrow, rest peacefully',
    video: {
      src: '/img/mobile_demo_day_close.mp4',
      aspectRatio: '9/16',
      maxHeight: '600px',
      fallback: {
        title: 'Loading Day Close Demo...',
        subtitle: 'Please wait a moment'
      }
    },
    features: DAY_CLOSE_FEATURES
  }
];