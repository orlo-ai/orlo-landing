# AIConversationDemo 組件

一個展示 Orlo AI 智能功能的現代化 React 組件，採用 Apple iOS 風格設計，具備豐富的愉悅互動動畫和完整的無障礙支援。

## 🏗️ 架構

這個組件採用模組化設計，包含以下子組件：

```
AIConversationDemo/
├── AIConversationDemo.tsx     # 主組件
├── FeatureItem.tsx           # 功能特色項目
├── BackgroundCircles.tsx     # 背景漂浮圓圈
├── VideoDemo.tsx            # 影片演示
├── Icon.tsx                 # SVG 圖示
├── constants.ts             # 常數和類型定義
├── index.ts                 # 匯出檔案
└── README.md               # 文件
```

## 🎨 功能特色

### 設計系統
- **Apple iOS 風格**：圓角、毛玻璃效果、一致的視覺語言
- **響應式設計**：完美支援桌面和行動裝置
- **色彩系統**：統一的藍色、紫色、靛色主題

### 互動動畫
- **Whimsy 動畫系統**：包含彈跳、漣漪、呼吸效果
- **背景漂浮動畫**：參考原始設計的四階段動畫
- **滑鼠懸停效果**：漸進式的視覺反饋

### 無障礙功能
- **ARIA 標籤**：完整的螢幕閱讀器支援
- **鍵盤導航**：Tab、Enter、Space 鍵支援
- **動畫偏好**：尊重 `prefers-reduced-motion` 設定
- **高對比度**：支援高對比度模式

## 📋 API 文件

### AIConversationDemo

主要組件，不接受任何 props。

```tsx
import AIConversationDemo from '@/components/sections/AIConversationDemo';

<AIConversationDemo />
```

### FeatureItem

功能項目組件。

```tsx
interface FeatureItemProps {
  feature: FeatureData;
  isLast?: boolean;
  onActivate?: (featureId: string) => void;
}
```

### BackgroundCircles

背景圓圈組件。

```tsx
interface BackgroundCirclesProps {
  circles: BackgroundCircle[];
}
```

### VideoDemo

影片演示組件。

```tsx
interface VideoDemoProps {
  src: string;
  aspectRatio: string;
  maxHeight: string;
  fallback: {
    title: string;
    subtitle: string;
  };
}
```

### Icon

SVG 圖示組件，使用 [Heroicons](https://heroicons.com/) 提供標準化圖示。

```tsx
interface IconProps {
  type: 'check' | 'lightbulb' | 'refresh';
  className?: string;
}
```

**優點：**
- 使用 Heroicons 官方組件，品質保證
- 支援 tree-shaking，只打包使用的圖示
- 與 Tailwind CSS 完美整合
- 提供一致的視覺風格

## 🔧 自訂配置

### 功能列表

修改 `constants.ts` 中的 `FEATURES` 陣列來自訂功能項目：

```typescript
export const FEATURES: FeatureData[] = [
  {
    id: 'your-feature',
    title: 'Your Feature',
    description: 'Feature description',
    iconType: 'check', // 'check' | 'lightbulb' | 'refresh'
    color: {
      bg: 'bg-blue-500',
      hover: 'group-hover/item:text-blue-600',
      shadow: 'group-hover/item:shadow-blue-200'
    },
    animation: {
      svg: 'group-hover/item:rotate-12',
      duration: 'duration-300'
    }
  }
];
```

### 背景圓圈

修改 `BACKGROUND_CIRCLES` 陣列來調整背景裝飾：

```typescript
export const BACKGROUND_CIRCLES: BackgroundCircle[] = [
  {
    id: 'circle-1',
    size: 'w-96 h-96',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    position: { top: '-200px', right: '-100px' },
    animationDelay: '0s',
    responsive: { hiddenOnMobile: false }
  }
];
```

### 影片設定

修改 `VIDEO_CONFIG` 來更改影片配置：

```typescript
export const VIDEO_CONFIG = {
  src: '/path/to/your/video.mp4',
  aspectRatio: '9/16',
  maxHeight: '600px',
  fallback: {
    title: 'Loading...',
    subtitle: 'Please wait'
  }
};
```

## 🎯 性能優化

- **will-change 屬性**：為動畫元素啟用硬體加速
- **pointer-events-none**：背景元素不影響滑鼠事件
- **圖片/影片預載入**：使用 `preload="metadata"`
- **條件渲染**：行動版隱藏不必要的裝飾元素

## 🧪 測試

確保在以下情況下測試組件：

1. **桌面瀏覽器**：Chrome、Firefox、Safari
2. **行動裝置**：iOS Safari、Android Chrome
3. **無障礙工具**：螢幕閱讀器、鍵盤導航
4. **動畫偏好**：減少動畫模式
5. **高對比度模式**

## 🔄 版本歷史

- **v2.0.0** - 完全重構為模組化組件
- **v1.0.0** - 初始版本（單一檔案）

## 🤝 貢獻

如需修改或新增功能，請：

1. 更新相關的 TypeScript 介面
2. 確保無障礙功能完整
3. 執行類型檢查 `npm run type-check`
4. 測試響應式佈局