# Orlo Landing Page

Orlo 官方網站，基於 Next.js 15 建構，包含產品介紹頁面、部落格系統、版本發佈說明和支援頁面。

## 技術棧

- **Next.js 15**: React 框架，使用 App Router
- **TypeScript**: 類型安全的 JavaScript
- **Tailwind CSS 3.x**: 實用優先的 CSS 框架
- **MDX**: Markdown 內容處理
- **ESLint**: 程式碼品質檢查

## 專案結構

```
├── src/                   # 原始碼目錄
│   ├── app/              # Next.js App Router 頁面
│   │   ├── blog/         # 部落格頁面
│   │   ├── support/      # 支援頁面
│   │   └── release-notes/# 版本發佈說明
│   ├── components/       # React 元件
│   │   ├── blog/         # 部落格專用元件
│   │   ├── release-notes/# 版本說明專用元件
│   │   ├── sections/     # 頁面區塊元件
│   │   └── ui/          # 基礎 UI 元件
│   ├── lib/             # 工具函數和配置
│   └── types/           # TypeScript 類型定義
├── content/             # 內容管理
│   ├── blog/           # 部落格文章（未來使用）
│   ├── release-notes/  # 版本發佈說明 MDX 檔案
│   └── help-archive/   # 舊版 Help Center 內容備份
├── docs/               # 專案文檔
│   ├── product/        # 產品相關文檔
│   ├── strategy/       # 策略文檔
│   ├── deployment/     # 部署相關文檔
│   └── marketing/      # 行銷資料
└── public/             # 靜態資源
    ├── img/           # 圖片資源
    └── video/         # 影片資源
```

## 文檔索引

### 產品文檔
- [核心概念](docs/product/core-concept.md) - Orlo 產品定位與核心理念
- [常見問題](docs/product/faq.md) - 產品相關問答
- [術語說明](docs/product/terminology.md) - 產品術語定義

### 策略文檔
- [部落格策略](docs/strategy/blog-strategy.md) - 內容行銷與 SEO 策略
- [未來 Help Center 計畫](docs/strategy/future-help-center.md) - Help Center 重啟計畫

### 部署文檔
- [Firebase 遷移](docs/deployment/firebase-migration.md) - Firebase 部署遷移說明
- [部署檢查清單](docs/deployment/deployment-checklist.md) - 部署前檢查項目

### 行銷資料
- [YouTube 影片說明](docs/marketing/youtube-description.md) - 產品展示影片資訊

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

## 主要功能

- **產品展示頁面**: 首頁包含產品介紹、功能演示和定價資訊
- **部落格系統**: 支援 MDX 格式的部落格文章（計畫中）
- **版本發佈說明**: 自動生成的產品更新說明頁面
- **支援頁面**: 用戶支援和常見問題
- **靜態匯出**: 支援靜態網站部署

## 配置檔案

- `next.config.js`: Next.js 配置，設定為靜態匯出
- `tailwind.config.js`: Tailwind CSS 配置
- `tsconfig.json`: TypeScript 配置
- `CLAUDE.md`: Claude AI 協作規則

## 部署

專案配置為靜態匯出，部署到 Firebase Hosting。詳細部署說明請參考 [部署檢查清單](docs/deployment/deployment-checklist.md)。

```bash
# 建置靜態網站
npm run build

# 部署到 Firebase（需要先配置 Firebase CLI）
firebase deploy --only hosting
```