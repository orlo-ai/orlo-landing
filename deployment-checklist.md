# Firebase 部署檢查清單

## 部署前檢查 ✅

- [ ] 已安裝 Firebase CLI (`npm install -g firebase-tools`)
- [ ] 已登入 Firebase (`firebase login`)
- [ ] 已創建 Firebase 專案
- [ ] 已更新 `.firebaserc` 中的專案 ID
- [ ] 已測試本地網站功能

## 部署步驟 🚀

1. **初始化 Firebase（首次）**

   ```bash
   firebase init hosting
   ```

2. **部署網站**

   ```bash
   firebase deploy --only hosting
   ```

3. **設置自定義域名**
   - 在 Firebase Console 中添加 `orlo.cc`
   - 更新 DNS 記錄

## 部署後驗證 🔍

- [ ] 網站可以正常訪問
- [ ] 所有圖片正確顯示
- [ ] Google Analytics 正常工作
- [ ] 表單功能正常
- [ ] 所有連結可以點擊
- [ ] 手機版顯示正常
- [ ] SSL 證書已啟用

## 性能檢查 ⚡

- [ ] Google PageSpeed Insights 分數 > 90
- [ ] 圖片加載速度正常
- [ ] CSS/JS 文件正確緩存
- [ ] CDN 資源正常加載

## SEO 檢查 📈

- [ ] Meta 標籤正確
- [ ] Open Graph 標籤正常
- [ ] Sitemap 可訪問（如果有）
- [ ] robots.txt 正確（如果有）

## 回滾準備 🔄

- [ ] GitHub Pages 設置已備份
- [ ] DNS 記錄變更已記錄
- [ ] 原始部署流程已文檔化
