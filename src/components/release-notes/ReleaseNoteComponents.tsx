import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Release Header 組件 - 版本頁面頂部展示
interface ReleaseHeaderProps {
  version: string;
  date: string;
  type: 'major-release' | 'minor-release' | 'patch-release' | 'feature-update' | 'hotfix' | 'beta-release';
  highlight?: string;
}

export function ReleaseHeader({ version, date, type, highlight }: ReleaseHeaderProps) {
  const typeLabels = {
    'major-release': '重大版本',
    'minor-release': '功能版本', 
    'patch-release': '修復版本',
    'feature-update': '功能更新',
    'hotfix': '緊急修復',
    'beta-release': 'Beta 版本'
  };
  
  const typeColors = {
    'major-release': 'bg-red-100 text-red-800 border-red-200',
    'minor-release': 'bg-blue-100 text-blue-800 border-blue-200',
    'patch-release': 'bg-green-100 text-green-800 border-green-200', 
    'feature-update': 'bg-purple-100 text-purple-800 border-purple-200',
    'hotfix': 'bg-orange-100 text-orange-800 border-orange-200',
    'beta-release': 'bg-yellow-100 text-yellow-800 border-yellow-200'
  };

  return (
    <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${typeColors[type]}`}>
              {typeLabels[type]}
            </span>
            <span className="text-2xl font-bold text-blue-600">{version}</span>
          </div>
          {highlight && (
            <p className="text-lg font-semibold text-gray-900">{highlight}</p>
          )}
        </div>
        <div className="text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>發布日期：{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature Showcase 組件 - 主要功能展示
interface FeatureShowcaseProps {
  title: string;
  description: string;
  benefits?: string[];
  demo?: string;
  image?: string;
}

export function FeatureShowcase({ title, description, benefits, demo, image }: FeatureShowcaseProps) {
  return (
    <div className="my-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-bold text-blue-900 mb-3">{title}</h3>
          <p className="text-blue-800 mb-4 leading-relaxed">{description}</p>
          
          {benefits && benefits.length > 0 && (
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">主要優勢：</h4>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-blue-700">
                    <svg className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {(image || demo) && (
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            {image && (
              <Image src={image} alt={title} width={400} height={300} className="w-full h-auto rounded" />
            )}
            {demo && (
              <video
                src={demo}
                controls
                className="w-full h-auto rounded"
                poster="/img/video-placeholder.jpg"
              >
                您的瀏覽器不支援影片播放。
              </video>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Improvement List 組件 - 改進項目容器
export function ImprovementList({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">功能改進</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

// Improvement 組件 - 單個改進項目
interface ImprovementProps {
  icon: string;
  title: string;
  description: string;
  impact?: 'high' | 'medium' | 'low';
}

export function Improvement({ icon, title, description, impact }: ImprovementProps) {
  const impactColors = {
    high: 'border-l-red-500 bg-red-50',
    medium: 'border-l-yellow-500 bg-yellow-50',
    low: 'border-l-green-500 bg-green-50'
  };
  
  const impactLabels = {
    high: '高影響',
    medium: '中等影響', 
    low: '低影響'
  };

  return (
    <div className={`flex items-start gap-4 p-4 border-l-4 rounded-r-lg ${impact ? impactColors[impact] : 'border-l-blue-500 bg-blue-50'}`}>
      <span className="text-2xl flex-shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <h4 className="font-semibold text-gray-900">{title}</h4>
          {impact && (
            <span className="text-xs px-2 py-1 rounded-full bg-white border font-medium text-gray-700">
              {impactLabels[impact]}
            </span>
          )}
        </div>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// User Benefit 組件 - 用戶價值說明
export function UserBenefit({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-r-lg">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-green-100 rounded-full">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-green-900 mb-2">對您的意義</h3>
          <div className="prose prose-green max-w-none text-green-800">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Try It Now 組件 - 行動呼籲
interface TryItNowProps {
  cta: string;
  url: string;
  note?: string;
  variant?: 'primary' | 'secondary';
}

export function TryItNow({ cta, url, note, variant = 'primary' }: TryItNowProps) {
  const buttonClasses = variant === 'primary' 
    ? 'bg-blue-600 text-white hover:bg-blue-700 border-blue-600'
    : 'bg-white text-blue-600 hover:bg-blue-50 border-blue-600';

  return (
    <div className="my-8 text-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-3 px-8 py-4 border-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${buttonClasses}`}
      >
        {cta}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
      {note && (
        <p className="text-sm text-gray-600 mt-3 max-w-md mx-auto">{note}</p>
      )}
    </div>
  );
}

// Metrics Comparison 組件 - 效能對比
interface MetricsComparisonProps {
  title: string;
  before: string;
  after: string;
  improvement: string;
  metric: string;
}

export function MetricsComparison({ title, before, after, improvement, metric }: MetricsComparisonProps) {
  return (
    <div className="my-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-red-50 rounded-lg">
          <div className="text-2xl font-bold text-red-600">{before}</div>
          <div className="text-sm text-red-700">之前</div>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{after}</div>
          <div className="text-sm text-green-700">之後</div>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{improvement}</div>
          <div className="text-sm text-blue-700">提升</div>
        </div>
      </div>
      <p className="text-center text-gray-600 mt-3">{metric}</p>
    </div>
  );
}

// Version Badge 組件 - 版本標籤
interface VersionBadgeProps {
  version: string;
  type: 'major' | 'minor' | 'patch';
  size?: 'sm' | 'md' | 'lg';
}

export function VersionBadge({ version, type, size = 'md' }: VersionBadgeProps) {
  const colors = {
    major: 'bg-red-100 text-red-800 border-red-200',
    minor: 'bg-blue-100 text-blue-800 border-blue-200',
    patch: 'bg-green-100 text-green-800 border-green-200'
  };
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm', 
    lg: 'px-4 py-2 text-base'
  };

  return (
    <span className={`inline-flex items-center rounded-full font-medium border ${colors[type]} ${sizes[size]}`}>
      {version.startsWith('v') ? version : `v${version}`}
    </span>
  );
}

// Quote Highlight 組件 - 引用高亮
interface QuoteHighlightProps {
  children: React.ReactNode;
  author?: string;
  role?: string;
  avatar?: string;
}

export function QuoteHighlight({ children, author, role, avatar }: QuoteHighlightProps) {
  return (
    <blockquote className="my-6 p-6 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg">
      <div className="prose prose-gray max-w-none">
        {children}
      </div>
      {author && (
        <footer className="mt-4 flex items-center gap-3">
          {avatar && (
            <Image src={avatar} alt={author} width={40} height={40} className="w-10 h-10 rounded-full" />
          )}
          <div>
            <cite className="font-semibold text-gray-900 not-italic">{author}</cite>
            {role && <p className="text-sm text-gray-600">{role}</p>}
          </div>
        </footer>
      )}
    </blockquote>
  );
}

// Tip Box 組件 - 提示框
interface TipBoxProps {
  type: 'info' | 'warning' | 'success' | 'error' | 'pro-tip';
  title?: string;
  children: React.ReactNode;
}

export function TipBox({ type, title, children }: TipBoxProps) {
  const configs = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-500',
      title: 'text-blue-900',
      content: 'text-blue-800'
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200', 
      icon: 'text-yellow-500',
      title: 'text-yellow-900',
      content: 'text-yellow-800'
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-500', 
      title: 'text-green-900',
      content: 'text-green-800'
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'text-red-500',
      title: 'text-red-900', 
      content: 'text-red-800'
    },
    'pro-tip': {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-500',
      title: 'text-purple-900',
      content: 'text-purple-800'
    }
  };
  
  const icons = {
    info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z',
    success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    error: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
    'pro-tip': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  };
  
  const config = configs[type];
  
  const defaultTitles = {
    info: '資訊',
    warning: '注意',
    success: '成功',
    error: '錯誤',
    'pro-tip': '專業提示'
  };

  return (
    <div className={`my-6 p-4 rounded-lg border ${config.bg} ${config.border}`}>
      <div className="flex items-start gap-3">
        <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${config.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icons[type]} />
        </svg>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`font-semibold mb-2 ${config.title}`}>
              {title}
            </h4>
          )}
          <div className={`prose prose-sm max-w-none ${config.content}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}