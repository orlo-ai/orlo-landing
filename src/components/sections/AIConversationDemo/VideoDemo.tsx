import React from 'react';

interface VideoDemoProps {
  src: string;
  aspectRatio: string;
  maxHeight: string;
  fallback: {
    title: string;
    subtitle: string;
  };
}

/**
 * 影片演示組件
 * 包含載入狀態和無障礙支援
 */
export default function VideoDemo({ src, aspectRatio, maxHeight, fallback }: VideoDemoProps) {
  return (
    <div className="relative">
      {/* 手機容器效果 */}
      <div className="relative lg:perspective-1000 lg:-rotate-y-2 hover:rotate-y-0 transition-transform duration-300">
        <video
          className="w-full object-contain"
          style={{ 
            aspectRatio,
            maxHeight,
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Orlo AI 智能規劃功能演示影片"
        >
          <source src={src} type="video/mp4" />
          {/* 回退內容 */}
          <div 
            className="flex items-center justify-center bg-gray-100" 
            style={{ aspectRatio, maxHeight }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-8 h-8 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">{fallback.title}</p>
              <p className="text-sm text-gray-500 mt-1">{fallback.subtitle}</p>
            </div>
          </div>
        </video>
      </div>
    </div>
  );
}