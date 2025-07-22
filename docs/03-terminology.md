# Orlo 核心術語

## 時間管理概念

### Time Boxing 時間箱
Orlo的核心運作模式之一，指為特定任務分配固定的時間限制，在該時間結束時評估進度並決定下一步，無論任務是否完成。時間箱專注於用戶可自主控制的時間安排，有助於控制任務蔓延，增強時間意識，並提供對進度的客觀衡量。

### Event 事件
固定的外部時間安排，通常涉及與他人的約定或不可變更的活動。Event 包括會議、約診、課程、紀念日等，特點是時間相對固定，用戶無法任意調整。Orlo 將 Event 與 TimeBox 分開管理，確保 AI 規劃時能正確處理兩種不同性質的時間安排。

### Schedule Item 行程項目
TimeBox 和 Event 的統稱，代表用戶日程中的任何時間安排。在日曆視圖和時間衝突檢查中，系統會同時考慮兩種類型的行程項目。

### Cognitive Load 認知負擔
完成任務、做決策或處理信息時大腦需要消耗的心理能量。Orlo的核心目標是減少時間管理相關的認知負擔。

### Decision Fatigue 決策疲勞
一個人在一天內做出太多決策後，決策質量下降的現象。Orlo通過減少「下一步做什麼」的決策需求來緩解這一問題。

### Energy Management 能量管理
基於個人能量高低峰規律安排任務，而非純粹的時間管理。Orlo幫助用戶識別個人能量模式並優化任務分配。

### Dynamic Resilience 動態韌性
系統能夠優雅地應對計畫變更，並維持整體目標進展的能力。Orlo的核心特性之一。

## AI 相關術語 (AI-Related Terminology)

### AI Plan (AI 計畫)
Orlo 的核心 AI 功能，根據用戶輸入和偏好自動生成一日時間安排。

### Task Analysis (任務分析)
AI 輔助功能，自動分析任務描述並提取結構化信息（如類別、優先級、預估時間）。

### Task Split (任務分割)
AI 輔助功能，將大型或複雜任務拆解為多個可執行的子任務。

### Fine-tune (微調)
在 AI 生成計畫後，用戶可以提供額外指示，讓 AI 在現有基礎上進行調整和優化。

## Orlo 功能術語

### AI Coach AI教練
Orlo中提供指導、反饋和建議的AI角色，使用教練式對話模式而非命令式指示。

### Ideal Week 理想週
用戶設定的理想時間分配模板，作為排程參考但非硬性規定。

### Buffer Time 緩衝時間
任務之間的過渡時間，幫助用戶轉換心理狀態。

### Margin Time 留白時間
讓自己有空間放空、思考、探索的時間。與緩衝時間不同，留白時間不是為了過渡，而是為了創造思考空間。

### Capture 速記
Orlo 中用於快速記錄想法、觀察和潛在任務的功能，是減少認知負擔的關鍵工具。Capture 的內容可以稍後轉換為結構化的任務、事件或參考資料。

### Periodic Review 週期覆盤
定期回顧時間使用情況，分析模式並調整策略的活動。覆盤過程會綜合分析 TimeBox 的完成情況和 Event 的參與效果。

### Candidate Task Pool 候選待辦池
系統根據多項因素（如優先級、預估時間、截止日期）從任務池中篩選出的短時間任務集合，供用戶在零碎時間選擇執行。

## 任務管理術語 (Task Management Terminology)

### Quick Task (快速任務)
預估完成時間短（通常 ≤15 分鐘）的任務，適合在零碎時間完成，並在 Today 頁面的「Quick Actions」區塊顯示。

### Migration Count (遷移計數)
任務被重新安排或移動到不同時間箱的次數，用於識別可能被拖延或難以完成的任務。

### Task Close Reason (任務關閉原因)
任務狀態從「OPEN」變為「CLOSED」的具體原因，包括 `completed` (完成), `split` (分割), `scheduled` (已排程)。

## Capture 術語 (Capture Terminology)

### Capture View Modes (速記檢視模式)
瀏覽和組織速記內容的不同方式，包括 `Week View` (週視圖), `Month View` (月視圖), `All View` (所有視圖)。

### Processed Capture (已處理速記)
已被歸檔或轉換為任務/事件/筆記的速記。

### Unprocessed Capture (未處理速記)
尚未被處理的速記，通常需要用戶進一步操作。

## Day Close 術語 (Day Close Terminology)

### Daily Review Step (每日回顧步驟)
Day Close 流程的第一步，回顧當天已完成和未完成的時間箱，以及相關的事件參與情況。

### Reflection Step (反思步驟)
Day Close 流程的第二步，提供空間讓用戶記錄想法、反思和情緒，包含對 TimeBox 執行和 Event 參與的整體感受。

### Tomorrow Preview Step (明日預覽步驟)
Day Close 流程的第三步，預覽明天的完整日程安排，包括 TimeBox 和 Event。

### Incomplete Actions (未完成處理動作)
在 Day Close 期間，針對未完成時間箱所做的決定，例如 `add_todo` (添加到待辦) 或 `discard` (捨棄)。Event 通常不需要未完成處理，因為其性質為固定的外部安排。

## 目標管理術語 (Goal Management Terminology)

### 12-Week Goal (12 週目標)
Orlo 中設定的標準目標週期，通常為 3 個月。

### Extend Goal (延長目標)
將已結束的目標延長其持續時間，通常是為了繼續追蹤或重新開始。

## Event 管理術語 (Event Management Terminology)

### Timed Event (定時事件)
有明確開始和結束時間的事件，如會議、約診等，會佔用具體的時間槽並參與衝突檢查。

### All-day Event (全天事件)
不佔用具體時間槽的事件，如生日、假期、紀念日等，通常顯示為全天標記。

### Event Preparation (事件準備)
針對重要事件設定的提前提醒和準備任務功能，幫助用戶為事件做好準備。

### External Event Source (外部事件來源)
事件的創建來源，如 `manual` (手動創建)、`google_calendar` (Google 日曆同步) 等。

### Event Category (事件分類)
事件的類型分類，如 meeting (會議)、appointment (約診)、anniversary (紀念日) 等，用於 AI 處理和統計分析。

## 技術相關術語

### Context Awareness 情境感知
系統理解用戶當前狀況、優先級和偏好的能力，包括對 TimeBox 和 Event 的綜合分析。

### Dual-Entity Query 雙實體查詢
同時查詢 TimeBox 和 Event 數據並統一處理的系統能力，確保日曆視圖的完整性。

### Two-way Sync 雙向同步
與第三方行事曆系統(如Google Calendar)的實時雙向數據更新，外部事件自動轉換為 Event 實體。

### Privacy-First Design 隱私優先設計
將用戶數據控制權和隱私保護作為核心設計原則。

### Day Close 關機儀式
一天結束時的結構化回顧流程，包含回顧、反思、預覽三個步驟。幫助用戶清理心理負擔，從工作模式切換到休息模式，並為明日做準備。

### Timeline Layout 時間軸佈局
以垂直時間軸展現時間流動的視覺設計方式，常用於 Day Close 的回顧步驟，同時顯示 TimeBox 和 Event，強調時間的連續性和儀式感。

### Completion Status Toggle 完成狀態切換
用戶點擊卡片在「已完成」和「需要處理」之間切換狀態的互動機制。採用正向預設（已完成），減少心理負擔。

### Transition Ritual 轉換儀式
幫助用戶從一種心理狀態切換到另一種狀態的結構化活動。Day Close 作為工作到休息的轉換儀式。

## 版本信息
- 文檔版本: 1.4
- 最後更新: 2025-07-14
- 主要變更: 新增 Event 相關術語定義，釐清 TimeBox 與 Event 的概念差異