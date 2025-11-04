import React from 'react';
import Image from 'next/image';
import { DemoContent } from '@/types/features';
import { cn } from '@/lib/utils';

interface DemoSectionProps {
  content: DemoContent;
  className?: string;
}

/**
 * Demo 展示區塊
 * 支援影片、圖片輪播或互動式 Demo
 */
export function DemoSection({ content, className }: DemoSectionProps) {
  const { title, description, type, video, images, interactive } = content;

  return (
    <section className={cn('py-16 sm:py-20 px-4 sm:px-6 lg:px-8', className)}>
      <div className="max-w-5xl lg:max-w-6xl mx-auto">
        {/* 標題 */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">{description}</p>
          )}
        </div>

        {/* Demo 內容 */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* 影片 Demo */}
          {type === 'video' && video && (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
              {video.platform === 'youtube' && (
                <div className="relative aspect-video">
                  <iframe
                    src={video.src}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              )}

              {video.platform === 'vimeo' && (
                <div className="relative aspect-video">
                  <iframe
                    src={video.src}
                    title={title}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              )}

              {(!video.platform || video.platform === 'self-hosted') && (
                <video
                  src={video.src}
                  controls
                  poster={video.thumbnail}
                  className="w-full h-auto"
                >
                  <track kind="captions" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}

          {/* 圖片輪播 Demo */}
          {type === 'images' && images && images.length > 0 && (
            <div className="space-y-12">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                  {image.caption && (
                    <p className="text-center text-slate-600 mt-4 text-lg">
                      {image.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* 互動式 Demo */}
          {type === 'interactive' && interactive && (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8">
              {interactive.component}
            </div>
          )}

          {/* Placeholder */}
          {!video && !images && !interactive && (
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 aspect-video flex items-center justify-center">
              <div className="text-center">
                <p className="text-slate-400 text-2xl mb-2">🎬</p>
                <p className="text-slate-400 text-lg">Demo 影片/圖片 Placeholder</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
