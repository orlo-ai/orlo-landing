#!/usr/bin/env node

/**
 * IndexNow 索引通知腳本
 * 用於通知 Bing、Yandex 等搜尋引擎網站內容已更新
 */

const https = require('https');

// 配置
const CONFIG = {
  host: 'orlo.cc',
  key: 'c5fd79cff3776ebafadff74f104a671f',
  keyLocation: 'https://orlo.cc/c5fd79cff3776ebafadff74f104a671f.txt',
};

/**
 * 獲取所有需要通知的 URL
 * 只包含有價值的核心頁面
 */
function getUrlsToSubmit() {
  const baseUrl = `https://${CONFIG.host}`;

  // 核心頁面 - 只通知有實際流量價值的頁面
  const urls = [
    `${baseUrl}/`,
    `${baseUrl}/blog`,
    `${baseUrl}/features`,
    `${baseUrl}/install-guide`,
    `${baseUrl}/support`,
    `${baseUrl}/release-notes`,
  ];

  // 注意:
  // - privacy-policy 和 terms 會在 sitemap 中,但不主動通知
  // - Blog 文章會透過 sitemap 定期爬取
  // - 這裡只提交核心主要頁面

  return urls;
}

/**
 * 發送 IndexNow 通知
 */
function submitToIndexNow(urls) {
  const data = JSON.stringify({
    host: CONFIG.host,
    key: CONFIG.key,
    keyLocation: CONFIG.keyLocation,
    urlList: urls,
  });

  const options = {
    hostname: 'api.indexnow.org',
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(data),
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve({
            success: true,
            statusCode: res.statusCode,
            message: 'IndexNow 通知成功',
          });
        } else if (res.statusCode === 202) {
          resolve({
            success: true,
            statusCode: res.statusCode,
            message: 'IndexNow 通知已接受',
          });
        } else {
          resolve({
            success: false,
            statusCode: res.statusCode,
            message: `IndexNow 回應: ${res.statusCode}`,
            data: responseData,
          });
        }
      });
    });

    req.on('error', (error) => {
      reject({
        success: false,
        message: 'IndexNow 請求失敗',
        error: error.message,
      });
    });

    req.write(data);
    req.end();
  });
}

/**
 * 主函數
 */
async function main() {
  console.log('🚀 開始發送 IndexNow 通知...');
  console.log(`📍 網站: ${CONFIG.host}`);

  const urls = getUrlsToSubmit();
  console.log(`📄 提交 ${urls.length} 個核心頁面`);

  try {
    const result = await submitToIndexNow(urls);

    if (result.success) {
      console.log(`  ✅ ${result.message} (HTTP ${result.statusCode})`);
      console.log('  ℹ️  Bing、Yandex 等搜尋引擎將優先爬取這些頁面');
    } else {
      console.log(`  ⚠️  ${result.message}`);
      if (result.data) {
        console.log(`  詳細資訊: ${result.data}`);
      }
    }
  } catch (error) {
    console.error('  ❌ IndexNow 通知失敗:', error.message || error);
    process.exit(1);
  }
}

// 執行
main();
