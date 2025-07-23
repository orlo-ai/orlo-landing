import { ImageProps } from 'next/image';

// 圖片優化工具
export class ImageOptimizer {
  // 預設圖片尺寸
  static readonly SIZES = {
    thumbnail: { width: 150, height: 150 },
    small: { width: 300, height: 200 },
    medium: { width: 600, height: 400 },
    large: { width: 1200, height: 800 },
    hero: { width: 1920, height: 1080 },
  };

  // 生成響應式圖片尺寸字串
  static generateSizes(breakpoints: Record<string, number>): string {
    return Object.entries(breakpoints)
      .map(([breakpoint, width]) => {
        if (breakpoint === 'default') {
          return `${width}px`;
        }
        return `(max-width: ${breakpoint}) ${width}px`;
      })
      .join(', ');
  }

  // 預設響應式尺寸
  static readonly RESPONSIVE_SIZES = {
    full: '100vw',
    half: '(max-width: 768px) 100vw, 50vw',
    third: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    quarter: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw',
  };

  // 生成圖片 props
  static generateImageProps(
    src: string,
    alt: string,
    options: {
      size?: keyof typeof ImageOptimizer.SIZES;
      responsive?: keyof typeof ImageOptimizer.RESPONSIVE_SIZES;
      priority?: boolean;
      quality?: number;
      placeholder?: 'blur' | 'empty';
      blurDataURL?: string;
    } = {}
  ): Partial<ImageProps> {
    const {
      size = 'medium',
      responsive = 'full',
      priority = false,
      quality = 85,
      placeholder = 'empty',
      blurDataURL,
    } = options;

    const dimensions = this.SIZES[size];
    const sizes = this.RESPONSIVE_SIZES[responsive];

    return {
      src,
      alt,
      width: dimensions.width,
      height: dimensions.height,
      sizes,
      priority,
      quality,
      placeholder,
      blurDataURL,
    };
  }

  // 生成模糊佔位符
  static generateBlurDataURL(width: number = 10, height: number = 10): string {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';

    // 創建漸層背景
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f3f4f6');
    gradient.addColorStop(1, '#e5e7eb');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    return canvas.toDataURL();
  }

  // 檢查圖片是否存在
  static async checkImageExists(src: string): Promise<boolean> {
    try {
      const response = await fetch(src, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }

  // 預載入關鍵圖片
  static preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  }

  // 批量預載入圖片
  static async preloadImages(sources: string[]): Promise<void> {
    const promises = sources.map(src => this.preloadImage(src));
    await Promise.allSettled(promises);
  }

  // 遷移現有圖片路徑到 Next.js 格式
  static migrateImagePath(originalPath: string): string {
    // 處理相對路徑
    if (originalPath.startsWith('./img/')) {
      return originalPath.replace('./img/', '/img/');
    }
    
    // 處理絕對路徑
    if (originalPath.startsWith('/img/')) {
      return originalPath;
    }
    
    // 處理其他情況
    if (!originalPath.startsWith('http') && !originalPath.startsWith('/')) {
      return `/img/${originalPath}`;
    }
    
    return originalPath;
  }

  // 為 Next.js Image 組件準備圖片屬性
  static prepareImageProps(
    src: string,
    alt: string,
    width?: number,
    height?: number
  ) {
    return {
      src: this.migrateImagePath(src),
      alt,
      width: width || 400,
      height: height || 300,
      placeholder: 'blur' as const,
      blurDataURL: this.generateBlurDataURL(width || 400, height || 300),
    };
  }
}

// 圖片格式檢測
export class ImageFormatDetector {
  // 檢查瀏覽器支援的圖片格式
  static async checkWebPSupport(): Promise<boolean> {
    if (typeof window === 'undefined') return false;
    
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }

  // 檢查 AVIF 支援
  static async checkAVIFSupport(): Promise<boolean> {
    if (typeof window === 'undefined') return false;
    
    return new Promise((resolve) => {
      const avif = new Image();
      avif.onload = avif.onerror = () => {
        resolve(avif.height === 2);
      };
      avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    });
  }

  // 根據支援情況選擇最佳格式
  static async getBestFormat(originalSrc: string): Promise<string> {
    const isWebPSupported = await this.checkWebPSupport();
    const isAVIFSupported = await this.checkAVIFSupport();

    if (isAVIFSupported && originalSrc.includes('.jpg') || originalSrc.includes('.png')) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.avif');
    }
    
    if (isWebPSupported && originalSrc.includes('.jpg') || originalSrc.includes('.png')) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }

    return originalSrc;
  }
}

// 圖片載入狀態管理
export class ImageLoadingManager {
  private static loadingStates = new Map<string, 'loading' | 'loaded' | 'error'>();
  private static observers = new Map<string, Set<(state: string) => void>>();

  static setLoadingState(src: string, state: 'loading' | 'loaded' | 'error'): void {
    this.loadingStates.set(src, state);
    const observers = this.observers.get(src);
    if (observers) {
      observers.forEach(callback => callback(state));
    }
  }

  static getLoadingState(src: string): 'loading' | 'loaded' | 'error' | 'idle' {
    return this.loadingStates.get(src) || 'idle';
  }

  static subscribe(src: string, callback: (state: string) => void): () => void {
    if (!this.observers.has(src)) {
      this.observers.set(src, new Set());
    }
    this.observers.get(src)!.add(callback);

    return () => {
      const observers = this.observers.get(src);
      if (observers) {
        observers.delete(callback);
        if (observers.size === 0) {
          this.observers.delete(src);
        }
      }
    };
  }
}