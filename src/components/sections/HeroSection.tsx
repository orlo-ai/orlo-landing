'use client';

import { HeroContent } from '@/types/content';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps extends HeroContent {}

export default function HeroSection({
  badge,
  headline,
  subheadline,
  description,
  buttons,
  metrics
}: HeroSectionProps) {
  return (
    <>
      {/* Limited-Time Incentive Banner */}
      <div className="bg-gradient-to-r from-indigo-800 to-blue-700 text-white py-2 px-4 text-center text-sm">
        <div className="max-w-5xl mx-auto">
          <span className="font-medium">{badge}</span>
          <Link
            href="https://my.orlo.cc"
            className="ml-3 underline text-blue-200 hover:text-white"
          >
            Join now
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">{headline}</span>
            <br />
            {subheadline}
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`
                  px-10 py-4 rounded-lg font-medium shadow-lg transition-all duration-200
                  ${button.variant === 'primary' 
                    ? 'btn-primary text-white' 
                    : 'border border-gray-300 text-gray-700 hover:border-gray-400'
                  }
                `}
              >
                {button.icon && <i className={`${button.icon} mr-2`} />}
                {button.text}
              </Link>
            ))}
          </div>

          <div className="text-center mt-4 mb-8">
            <span className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
              <i className="fas fa-bolt mr-1" />
              Users report saving 5+ hours weekly on decision-making
            </span>
          </div>

          {/* Time Management Visualization */}
          <div className="mt-16">
            <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-4xl mx-auto">
              {/* 定義漸層 */}
              <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fafbff" />
                  <stop offset="100%" stopColor="#f5f7fa" />
                </linearGradient>
                <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1" />
                </filter>
              </defs>

              {/* 背景圓形 */}
              <circle cx="400" cy="250" r="230" fill="url(#bgGradient)" />

              {/* 時間區塊容器 */}
              <g transform="translate(200, 100)" filter="url(#shadow)">
                {/* 深度工作區塊 */}
                <rect x="0" y="0" width="400" height="70" rx="12" fill="#EBF5FF" stroke="#3B82F6" strokeWidth="2" />
                <rect x="0" y="0" width="10" height="70" rx="5" fill="#3B82F6" />
                <text x="25" y="30" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="#1E40AF">
                  Deep Work Session
                </text>
                <text x="25" y="50" fontFamily="Inter, sans-serif" fontSize="14" fill="#3B82F6">
                  09:00 - 11:00
                </text>

                {/* 會議區塊 */}
                <rect x="0" y="90" width="400" height="50" rx="12" fill="#F3E8FF" stroke="#8B5CF6" strokeWidth="2" />
                <rect x="0" y="90" width="10" height="50" rx="5" fill="#8B5CF6" />
                <text x="25" y="120" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="#6D28D9">
                  Team Meeting
                </text>
                <text x="25" y="135" fontFamily="Inter, sans-serif" fontSize="14" fill="#8B5CF6">
                  11:15 - 12:00
                </text>

                {/* 休息區塊 */}
                <rect x="0" y="160" width="400" height="40" rx="12" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
                <rect x="0" y="160" width="10" height="40" rx="5" fill="#F59E0B" />
                <text x="25" y="185" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="#B45309">
                  Lunch Break
                </text>

                {/* 專案區塊 */}
                <rect x="0" y="220" width="400" height="60" rx="12" fill="#DCFCE7" stroke="#10B981" strokeWidth="2" />
                <rect x="0" y="220" width="10" height="60" rx="5" fill="#10B981" />
                <text x="25" y="250" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600" fill="#047857">
                  Project Planning
                </text>
                <text x="25" y="270" fontFamily="Inter, sans-serif" fontSize="14" fill="#10B981">
                  13:30 - 15:00
                </text>
              </g>

              {/* 標題 */}
              <g transform="translate(400, 45)">
                <text x="0" y="0" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="700" textAnchor="middle" fill="#3B82F6">
                  Your Day, Optimized
                </text>
                <text x="0" y="30" fontFamily="Inter, sans-serif" fontSize="16" textAnchor="middle" fill="#64748B">
                  Focus on what matters at the right time
                </text>
              </g>

              {/* Orlo 品牌元素 */}
              <g transform="translate(400, 440)">
                <rect x="-100" y="-25" width="200" height="50" rx="25" fill="#3B82F6" filter="url(#shadow)" />
                <text x="0" y="5" fontFamily="Inter, sans-serif" fontSize="18" textAnchor="middle" fill="white" fontWeight="600">
                  Orlo Time Boxes
                </text>
              </g>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}