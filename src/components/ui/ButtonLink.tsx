'use client';

import Link from 'next/link';
import { AnchorHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { ButtonProps } from './Button';

interface ButtonLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  radius?: ButtonProps['radius'];
  fullWidth?: boolean;
  external?: boolean;
  trackingEvent?: {
    event: string;
    category?: string;
    label?: string;
  };
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({
    className,
    href,
    variant = 'primary',
    size = 'md',
    radius = 'md',
    fullWidth = false,
    external = false,
    trackingEvent,
    children,
    onClick,
    ...props
  }, ref) => {
    // 處理點擊事件和追蹤
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (trackingEvent && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', trackingEvent.event, {
          event_category: trackingEvent.category || 'engagement',
          event_label: trackingEvent.label || href,
          page_location: window.location.href,
        });
      }

      if (onClick) {
        onClick(e);
      }
    };

    const linkClassName = cn(
      // 基礎樣式
      'inline-flex items-center justify-center font-medium transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
      'transform hover:scale-[1.02] active:scale-[0.98]',
      
      // 變體樣式
      {
        // Primary - 灰藍色純色背景
        'bg-slate-700 text-white hover:bg-slate-800 shadow-sm': 
          variant === 'primary',
        
        // Secondary - 淺灰藍背景
        'bg-slate-100 text-slate-700 hover:bg-slate-200': 
          variant === 'secondary',
        
        // Outline - 邊框樣式
        'border-2 border-slate-400 bg-transparent text-slate-400 hover:bg-slate-50 hover:border-slate-500': 
          variant === 'outline',
        
        // Ghost - 透明背景
        'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900': 
          variant === 'ghost',
        
        // Link - 連結樣式
        'bg-transparent text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline p-0': 
          variant === 'link',
        
        // Gradient - 參考 mockup 的按鈕顏色
        'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]':
          variant === 'gradient',
      },
      
      // 尺寸樣式
      {
        'px-3 py-1.5 text-xs': size === 'xs',
        'px-4 py-2 text-sm': size === 'sm',
        'px-5 py-2.5 text-base': size === 'md',
        'px-6 py-3 text-base': size === 'lg',
        'px-8 py-4 text-lg': size === 'xl',
      },
      
      // 圓角樣式
      {
        'rounded-none': radius === 'none',
        'rounded': radius === 'sm',
        'rounded-lg': radius === 'md',
        'rounded-xl': radius === 'lg',
        'rounded-full': radius === 'full',
      },
      
      // 全寬樣式
      fullWidth && 'w-full',
      
      // Link 變體特殊處理
      variant === 'link' && '!p-0',
      
      className
    );

    // 外部連結使用 <a> 標籤
    if (external || href.startsWith('http')) {
      return (
        <a
          ref={ref}
          href={href}
          className={linkClassName}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          {...props}
        >
          {children}
        </a>
      );
    }

    // 內部連結使用 Next.js Link
    return (
      <Link
        ref={ref}
        href={href}
        className={linkClassName}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

ButtonLink.displayName = 'ButtonLink';

export { ButtonLink };
export type { ButtonLinkProps };