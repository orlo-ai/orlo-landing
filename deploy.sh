#!/bin/bash

# Orlo Firebase 部署腳本
echo "🚀 開始部署 Orlo 到 Firebase Hosting..."

# 檢查是否安裝了 Firebase CLI
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI 未安裝"
    echo "請執行: npm install -g firebase-tools"
    exit 1
fi

# 檢查是否已登入 Firebase
if ! firebase projects:list &> /dev/null; then
    echo "🔐 請先登入 Firebase..."
    firebase login
fi

# 部署到 Firebase
echo "📦 部署中..."
if ! firebase deploy --only hosting; then
    echo "❌ 部署失敗!"
    exit 1
fi

echo "✅ 部署完成！"
echo "🌐 你的網站現在可以在 Firebase Hosting 上訪問了"

# 通知搜尋引擎更新索引
echo ""
echo "📡 通知搜尋引擎更新索引..."

# IndexNow (Bing, Yandex 等)
if [ -f "scripts/indexnow.js" ]; then
    echo "  → 通知 Bing/Yandex (IndexNow)..."
    node scripts/indexnow.js
else
    echo "  ℹ️  IndexNow 腳本尚未設定 (可選)"
fi

echo ""
echo "🎉 部署和索引通知完成！"