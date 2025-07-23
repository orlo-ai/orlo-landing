#!/usr/bin/env node
/**
 * 簡單的 Node.js 靜態文件服務器
 * 運行: node test-server.js
 * 訪問: http://localhost:3001
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3001;

// MIME 類型映射
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  // 解析 URL
  const parsedUrl = url.parse(req.url);
  let pathname = parsedUrl.pathname;
  
  // 如果是根路徑，默認返回 index.html
  if (pathname === '/') {
    pathname = '/index.html';
  }
  
  // 構建文件路徑
  const filePath = path.join(__dirname, pathname);
  
  // 檢查文件是否存在
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // 文件不存在，返回 404
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`
        <html>
          <body style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
            <h1>404 - 文件未找到</h1>
            <p>請求的文件 <code>${pathname}</code> 不存在</p>
            <a href="/">返回首頁</a>
          </body>
        </html>
      `);
      return;
    }
    
    // 讀取文件
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('服務器內部錯誤');
        return;
      }
      
      // 獲取文件擴展名
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';
      
      // 設置響應頭（禁用緩存以便測試）
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log('🚀 測試服務器啟動成功!');
  console.log(`📍 訪問地址: http://localhost:${PORT}`);
  console.log(`📁 服務目錄: ${__dirname}`);
  console.log('🔄 按 Ctrl+C 停止服務器');
  console.log('-'.repeat(50));
});

// 優雅關閉
process.on('SIGINT', () => {
  console.log('\n✅ 服務器已停止');
  process.exit(0);
});