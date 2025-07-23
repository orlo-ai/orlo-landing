// 用戶相關類型定義
export interface UserPersona {
  id: string;
  name: string;
  role: string;
  description: string;
  avatar: string;
  gradient: string;
  challenges: string[];
  goals: string[];
  timePreferences: TimePreferences;
}

export type TimeBlockType = 'deep-work' | 'meeting' | 'admin' | 'personal' | 'break' | 'commute';
export type EnergyLevel = 'high' | 'medium' | 'low';
export type TaskCategory = 'work' | 'personal' | 'health' | 'learning' | 'social';
export type Priority = 'urgent' | 'high' | 'medium' | 'low';

export interface TimeBlock {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  type: TimeBlockType;
  energyLevel: EnergyLevel;
  color: string;
  description?: string;
  category: TaskCategory;
  priority: Priority;
  estimatedDuration: number; // 分鐘
  actualDuration?: number;
  tags: string[];
}

export interface AIInsight {
  id: string;
  type: 'optimization' | 'protection' | 'batching' | 'energy-alignment';
  message: string;
  icon: string;
  impact: 'high' | 'medium' | 'low';
  timesSaved?: number; // 分鐘
  stressReduction?: number; // 百分比
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  type: 'text' | 'suggestion' | 'insight' | 'question';
  metadata?: {
    suggestedActions?: string[];
    relatedTimeBlocks?: string[];
    confidence?: number;
  };
}

export interface TimePreferences {
  workingHours: {
    start: string;
    end: string;
  };
  peakEnergyTimes: string[];
  preferredBreakDuration: number;
  deepWorkPreferences: {
    minimumDuration: number;
    preferredTimes: string[];
  };
}

// 用戶狀態和設定
export interface UserProfile {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  timezone: string;
  preferences: UserPreferences;
  subscription: SubscriptionInfo;
  onboardingCompleted: boolean;
  createdAt: Date;
  lastActiveAt: Date;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: 'zh-TW' | 'zh-CN' | 'en';
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  integrations: IntegrationSettings;
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  inApp: boolean;
  reminders: boolean;
  weeklyReports: boolean;
}

export interface PrivacySettings {
  dataSharing: boolean;
  analytics: boolean;
  personalizedAds: boolean;
}

export interface IntegrationSettings {
  calendar: CalendarIntegration[];
  taskManagement: TaskIntegration[];
  communication: CommunicationIntegration[];
}

export interface CalendarIntegration {
  provider: 'google' | 'outlook' | 'apple';
  connected: boolean;
  syncEnabled: boolean;
  lastSync?: Date;
}

export interface TaskIntegration {
  provider: 'todoist' | 'asana' | 'trello' | 'notion';
  connected: boolean;
  syncEnabled: boolean;
  lastSync?: Date;
}

export interface CommunicationIntegration {
  provider: 'slack' | 'teams' | 'discord';
  connected: boolean;
  statusSync: boolean;
}

export interface SubscriptionInfo {
  plan: 'free' | 'beta' | 'pro' | 'enterprise';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate?: Date;
  features: string[];
}