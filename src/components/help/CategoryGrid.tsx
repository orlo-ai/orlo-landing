import React from 'react';
import Link from 'next/link';
import { CategoryGridProps } from '@/types/help';

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => (
        <div
          key={category.id}
          className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 overflow-hidden"
        >
          <Link href={`/help/category/${category.id}`} className="block p-8">
            {/* Category Icon & Title */}
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <i className={`${category.icon} text-blue-600 text-xl`}></i>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-relaxed">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {category.articleCount} 篇文章
                </p>
              </div>
            </div>

            {/* Category Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {category.description}
            </p>

            {/* Top Articles Preview */}
            {category.articles.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  熱門文章
                </div>
                {category.articles.slice(0, 3).map((article) => (
                  <div
                    key={article.id}
                    className="flex items-center text-sm text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <i className="fas fa-file-alt text-gray-400 text-xs mr-2 flex-shrink-0"></i>
                    <span className="truncate">{article.title}</span>
                    <span className="ml-auto text-xs text-gray-400 flex-shrink-0">
                      {article.readTime}
                    </span>
                  </div>
                ))}
                {category.articles.length > 3 && (
                  <div className="text-sm text-blue-600 font-medium">
                    +{category.articles.length - 3} 更多文章
                  </div>
                )}
              </div>
            )}

            {/* Arrow Icon */}
            <div className="flex items-center justify-end mt-4">
              <i className="fas fa-arrow-right text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200"></i>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}