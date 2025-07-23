# Firebase Hosting 遷移指南

## 準備工作

### 1. 安裝 Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. 登入 Firebase

```bash
firebase login
```

### 3. 創建 Firebase 專案

1. 前往 [Firebase Console](https://console.firebase.google.com/)
2. 點擊「新增專案」
3. 輸入專案名稱（建議：orlo-website）
4. 記下專案 ID

### 4. 更新專案配置

編輯 `.firebaserc` 文件，將 `your-firebase-project-id` 替換為你的實際專案 ID：

```json
{
  "projects": {
    "default": "你的專案ID"
  }
}
```

## 部署步驟

### 1. 初始化 Firebase（如果需要）

```bash
firebase init hosting
```

選擇：

- 使用現有專案
- 選擇你剛創建的專案
- 公開目錄：`.`（當前目錄）
- 單頁應用：`N`
- 覆蓋 index.html：`N`

### 2. 部署網站

```bash
firebase deploy --only hosting
```

或使用提供的腳本：

```bash
./deploy.sh
```

## 域名設置

### 1. 在 Firebase Console 中添加自定義域名

1. 前往 Firebase Console > Hosting
2. 點擊「新增自訂網域」
3. 輸入 `orlo.cc`
4. 按照指示設置 DNS 記錄

### 2. DNS 配置

將你的域名 DNS 設置從 GitHub Pages 改為 Firebase：

- 刪除現有的 CNAME 記錄（指向 GitHub）
- 添加 Firebase 提供的 A 記錄或 CNAME 記錄

## 配置說明

### firebase.json 配置

- `public: "."` - 使用當前目錄作為網站根目錄
- `ignore` - 忽略不需要部署的文件
- `rewrites` - 單頁應用路由配置
- `headers` - 設置緩存策略
- `cleanUrls: true` - 移除 .html 後綴
- `trailingSlash: false` - 不使用尾隨斜線

### 緩存策略

- 圖片和靜態資源：1年緩存
- CSS/JS 文件：1年緩存
- HTML 文件：1小時緩存

## 驗證部署

部署完成後，檢查以下項目：

1. 網站是否正常訪問
2. 所有圖片和資源是否正確加載
3. Google Analytics 是否正常工作
4. 表單提交是否正常
5. 所有連結是否正確

## 回滾計劃

如果需要回滾到 GitHub Pages：

1. 在 GitHub 倉庫設置中重新啟用 GitHub Pages
2. 將 DNS 記錄改回指向 GitHub Pages
3. 確保 CNAME 文件仍然存在

## 優勢

遷移到 Firebase Hosting 的好處：

- 更快的全球 CDN
- 更好的緩存控制
- SSL 證書自動管理
- 更詳細的分析數據
- 更靈活的部署選項
- 更好的性能優化

## 注意事項

1. 確保所有相對路徑正確
2. 檢查 Google Analytics 配置
3. 測試所有表單和互動功能
4. 確認 SEO 設置沒有問題
5. 更新任何硬編碼的 URL 引用
