#!/usr/bin/env python3
"""
簡單的 HTTP 服務器用於測試靜態 HTML 文件
運行: python test-server.py
訪問: http://localhost:3001
"""

import http.server
import socketserver
import os
import sys

PORT = 3001

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def guess_type(self, path):
        mimetype = super().guess_type(path)
        if path.endswith('.html'):
            return 'text/html'
        elif path.endswith('.css'):
            return 'text/css'
        elif path.endswith('.js'):
            return 'application/javascript'
        return mimetype

if __name__ == "__main__":
    # 確保在項目根目錄運行
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🚀 測試服務器啟動成功!")
        print(f"📍 訪問地址: http://localhost:{PORT}")
        print(f"📁 服務目錄: {os.getcwd()}")
        print(f"🔄 按 Ctrl+C 停止服務器")
        print("-" * 50)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print(f"\n✅ 服務器已停止")
            sys.exit(0)