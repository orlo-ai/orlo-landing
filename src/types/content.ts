// 內容相關類型定義
export interface PageContent {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
  hero: HeroContent;
  socialProof: SocialProofContent;
  problems: ProblemItem[];
  features: FeatureItem[];
  aiDemo: AIConversationContent;
  scenarios: ScenarioContent[];
  testimonials: TestimonialItem[];
  pricing: PricingContent;
  sections: Section[];
  cta: CTAContent;
}

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  description: string;
  buttons: CTAButton[];
  metrics: Metric[];
}

export interface SocialProofContent {
  metrics: Metric[];
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
  testimonial: string;
  icon: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AIConversationContent {
  messages: AIMessage[];
}

export interface AIMessage {
  id: string;
  sender: 'user' | 'ai';
  content: string;
  timestamp: Date;
  insight?: {
    type: string;
    title: string;
    points: string[];
    summary: string;
  };
  analysis?: Array<{
    type: 'success' | 'warning' | 'info';
    count: number;
    description: string;
  }>;
  followUp?: string;
}

export interface ScenarioContent {
  id: string;
  persona: {
    id: string;
    name: string;
    role: string;
    description: string;
    avatar: string;
    gradient: string;
  };
  schedule: Array<{
    id: string;
    title: string;
    startTime: string;
    endTime: string;
    type: 'deep-work' | 'meeting' | 'admin' | 'personal';
    energyLevel: 'high' | 'medium' | 'low';
    color: string;
  }>;
  aiInsight: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  metrics: {
    timeSaved: string;
    stressReduction: string;
  };
}

export interface PricingContent {
  title: string;
  description: string;
  plans: PricingPlan[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: CTAButton;
  highlight?: boolean;
}

export interface Section {
  id: string;
  type: 'demo' | 'scenarios' | 'testimonials' | 'pricing';
  title: string;
  content: any; // 根據類型而定
  animation?: AnimationConfig;
}

export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline';
  icon?: string;
  external?: boolean;
}

export interface CTAContent {
  title: string;
  description: string;
  buttons: CTAButton[];
}

export interface Metric {
  value: string;
  label: string;
  icon?: string;
}

export interface AnimationConfig {
  type: 'fade' | 'slide' | 'scale';
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}