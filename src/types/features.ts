/**
 * 功能頁面的型別定義
 */

import { IconName } from '@/components/ui/FeatureIcon';

export interface FeatureHeroContent {
  badge?: string;
  title: string;
  subtitle: string;
  description?: string;
  visual: {
    type: 'image' | 'video' | 'component';
    src?: string;
    alt?: string;
    component?: React.ReactNode;
  };
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
}

export interface ProblemSolutionContent {
  problems: {
    icon?: IconName;
    text: string;
  }[];
  solutions: {
    icon?: IconName;
    text: string;
  }[];
  visual?: {
    type: 'image' | 'video';
    src: string;
    alt: string;
  };
}

export interface FeatureHighlight {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  visual?: {
    type: 'image' | 'video' | 'gif';
    src: string;
    alt: string;
  };
}

export interface ScenarioContent {
  id: string;
  title: string;
  persona: {
    name: string;
    role: string;
    avatar?: string;
  };
  steps: {
    time?: string;
    action: string;
    result: string;
  }[];
  visual?: {
    type: 'image' | 'video';
    src: string;
    alt: string;
  };
}

export interface DemoContent {
  title: string;
  description?: string;
  type: 'video' | 'images' | 'interactive';
  video?: {
    src: string;
    thumbnail?: string;
    platform?: 'youtube' | 'vimeo' | 'self-hosted';
  };
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  interactive?: {
    component: React.ReactNode;
  };
}

export interface FeatureCTAContent {
  title: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
  features?: string[];
  note?: string;
}

export interface FeaturePageContent {
  slug: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
  hero: FeatureHeroContent;
  problemSolution: ProblemSolutionContent;
  showcase: {
    title: string;
    description?: string;
    highlights: FeatureHighlight[];
  };
  scenarios: {
    title: string;
    description?: string;
    items: ScenarioContent[];
  };
  demo?: DemoContent;
  cta: FeatureCTAContent;
}

export interface FeaturesOverviewContent {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  features: {
    id: string;
    slug: string;
    icon: IconName;
    title: string;
    description: string;
    preview?: string;
  }[];
  integration: {
    title: string;
    description: string;
    visual?: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}
