# Orlo Landing Page - Next.js Migration

這是 Orlo 登陸頁面從靜態網站遷移到 Next.js 14 的專案。

## 技術棧

- **Next.js 14**: React 框架，使用 App Router
- **TypeScript**: 類型安全的 JavaScript
- **Tailwind CSS 3.x**: 實用優先的 CSS 框架
- **ESLint**: 程式碼品質檢查
- **Prettier**: 程式碼格式化

## 專案結構

```
src/
├── app/                    # Next.js App Router 頁面
│   ├── globals.css        # 全域樣式
│   ├── layout.tsx         # 根佈局
│   └── page.tsx           # 首頁
├── components/            # React 元件
│   ├── ui/               # 基礎 UI 元件
│   ├── layout/           # 佈局元件
│   └── forms/            # 表單元件
├── lib/                  # 工具函數和配置
│   ├── analytics.ts      # Google Analytics 配置
│   └── utils.ts          # 通用工具函數
├── types/                # TypeScript 類型定義
│   └── index.ts          # 基本類型
└── styles/               # 額外樣式檔案
```

## 開發指令

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建置專案
npm run build

# 啟動生產伺服器
npm run start

# 程式碼檢查
npm run lint

# 程式碼格式化
npm run format

# TypeScript 類型檢查
npm run type-check
```

## 配置檔案

- `next.config.js`: Next.js 配置，設定為靜態匯出
- `tailwind.config.js`: Tailwind CSS 配置
- `tsconfig.json`: TypeScript 配置
- `.eslintrc.json`: ESLint 配置
- `.prettierrc`: Prettier 配置

## 部署

專案配置為靜態匯出，可以部署到 GitHub Pages 或任何靜態網站託管服務。

```bash
npm run build
```

建置後的檔案會在 `out/` 目錄中。