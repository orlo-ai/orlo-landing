import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

interface FeatureLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * 功能頁面的統一佈局容器
 * 包含 Navigation 和 Footer，提供一致的頁面結構
 */
export function FeatureLayout({ children, className }: FeatureLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className={cn('flex-1 pt-16 bg-gradient-to-b from-slate-50 to-white', className)}>
        {children}
      </main>

      <Footer />
    </div>
  );
}

interface FeatureSectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

/**
 * 功能頁面的區塊容器
 * 統一的 padding 和 max-width
 */
export function FeatureSection({
  children,
  className,
  containerClassName,
  fullWidth = false,
}: FeatureSectionProps) {
  return (
    <section className={cn('py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8', className)}>
      <div
        className={cn(
          !fullWidth && 'max-w-5xl lg:max-w-6xl mx-auto',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
