import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'gradient';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    radius = 'md',
    fullWidth = false,
    ...props 
  }, ref) => {
    return (
      <button
        className={cn(
          // 基礎樣式
          'inline-flex items-center justify-center font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none',
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
            
            // Gradient - 保留漸變選項（需要時使用）
            'bg-gradient-to-r from-slate-600 to-slate-800 text-white hover:from-slate-700 hover:to-slate-900 shadow-lg': 
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
          
          // Link 變體特殊處理（移除 padding）
          variant === 'link' && '!p-0',
          
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };