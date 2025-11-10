# Claude Code 協作規則

## 語言規範
- 溝通語言:與用戶的所有對話必須使用中文(繁體中文)
- 前端介面:網站介面和內容使用英文(面向國際用戶)
- 代碼註解:程式碼註解和技術文件保持中文
- 技術討論:技術概念解釋和方案說明使用中文表達

## 思考方法論
**第一性原理**: 從問題本質出發,而非沿用既有方案
- 架構設計:從用戶需求出發
- Bug修復:追溯根源而非修補表面
- 效能優化:找出真正瓶頸
- 功能開發:理解核心需求而非複製競品

## 設計原則
- KISS (Keep It Simple, Stupid)
- YAGNI (You Aren't Gonna Need It)
- APO (Avoid Premature Optimization)
- Boy Scout: 每次改動,讓程式碼比之前好一點。完成任務需求時,順手修復小問題、重構小段程式,持續改進,減少大型重構。

## 工作流程
- 在完成一系列程式碼變更後,請務必執行型別檢查
- 為了效能,請優先執行單一測試,而非整個測試套件
- **JSX 字元轉義檢查**:撰寫或修改 JSX 內容時,確保特殊字元已正確轉義
  - 撇號/單引號: 使用 `&apos;` 或 `&#39;` (例如: `don't` → `don&apos;t`)
  - 雙引號: 使用 `&quot;`
  - 其他符號: 依照 ESLint `react/no-unescaped-entities` 規則處理
  - 在執行 `npm run build` 前,先檢查是否有未轉義的特殊字元

## 技術決策

### MDX 內容處理
- **統一使用 `marked` 函式庫**:所有 MDX 內容處理優先採用 `marked` + `dangerouslySetInnerHTML` 方式
- **避免 `next-mdx-remote`**:因與 Next.js 15 + React 18 版本衝突,不再使用此套件
- 保持一致性:Help Center 和 Release Notes 使用相同的實作方式
- 新功能指引:未來任何需要處理 Markdown/MDX 內容的頁面,都應採用 marked 方案

### 後端架構
- 純靜態系統:Help Center 已移除所有後端功能(Firebase 追蹤、評分、搜尋)
- 內容管理:使用 MDX 檔案進行內容管理,透過檔案系統讀取
- 靜態生成:所有內容在建置時生成,無需運行時資料庫連接
