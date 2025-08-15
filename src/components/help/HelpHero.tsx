'use client';

import React from 'react';
import Link from 'next/link';
import { HelpHeroProps } from '@/types/help';

export default function HelpHero({ stats }: HelpHeroProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-indigo-500 rounded-full blur-xl"></div>
        </div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            <span className="block mb-6">我們隨時準備</span>
            <span className="block text-blue-600">協助你</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            探索教學指南、找到答案，或聯繫我們的支援團隊
          </p>
        </div>


        {/* Stats */}
        <div className="my-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              {stats.totalArticles}
            </div>
            <div className="text-sm text-gray-600">
              篇幫助文章
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              24h
            </div>
            <div className="text-sm text-gray-600">
              支援回覆時間
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              95%
            </div>
            <div className="text-sm text-gray-600">
              問題解決率
            </div>
          </div>
        </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/help/getting-started/quick-start"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <i className="fas fa-rocket mr-2"></i>
            快速上手指南
          </Link>
          <Link
            href="/help/troubleshooting/common-issues"
            className="inline-flex items-center px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors border border-gray-300 shadow-sm"
          >
            <i className="fas fa-tools mr-2"></i>
            常見問題
          </Link>
          <a
            href="mailto:support@orlo.cc"
            className="inline-flex items-center px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors border border-gray-300 shadow-sm"
          >
            <i className="fas fa-comments mr-2"></i>
            聯繫支援
          </a>
        </div>
      </div>
    </section>
  );
}