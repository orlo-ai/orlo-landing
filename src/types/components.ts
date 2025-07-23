// 組件相關類型定義
import { ReactNode } from 'react';
import { CTAButton, Metric } from './content';
import { UserPersona, TimeBlock, ChatMessage } from './user';

// Hero Section 組件屬性
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaButtons: CTAButton[];
  metrics: Metric[];
  demoContent: DemoContent;
}

// AI 對話組件屬性
export interface AIConversationProps {
  messages: ChatMessage[];
  isTyping: boolean;
  onMessageSend?: (message: string) => void;
}

// 場景卡片組件屬性
export interface ScenarioCardProps {
  persona: UserPersona;
  schedule: TimeBlock[];
  aiInsight: string;
  gradient: string;
}

// 時間塊組件屬性
export interface TimeBlockProps {
  id: string;
  title: string;
  time: string;
  type: 'deep-work' | 'meeting' | 'admin' | 'personal';
  energyLevel: 'high' | 'medium' | 'low';
  isDraggable: boolean;
  onDrag?: (id: string, newPosition: number) => void;
}

// 動畫區塊包裝器屬性
export interface AnimatedSectionProps {
  children: ReactNode;
  animation?: {
    type: 'fade' | 'slide' | 'scale';
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    duration?: number;
  };
  className?: string;
}

// 演示內容
export interface DemoContent {
  title: string;
  description: string;
  interactiveElements: InteractiveElement[];
}

export interface InteractiveElement {
  id: string;
  type: 'timeblock' | 'chat' | 'insight';
  content: any;
  position: { x: number; y: number };
}