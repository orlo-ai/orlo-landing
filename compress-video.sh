#!/bin/bash

# 影片壓縮腳本
# 將 400MB 的 .mov 文件壓縮到 5-10MB

INPUT_FILE="img/Orlo - Demo - 1.mov"
OUTPUT_FILE="img/demo-compressed.mp4"

echo "🎬 開始壓縮影片..."
echo "原始文件: $INPUT_FILE"
echo "輸出文件: $OUTPUT_FILE"

# 方案 1: 高品質壓縮 (推薦用於 Hero Section)
ffmpeg -i "$INPUT_FILE" \
  -vf "scale=1280:720" \
  -c:v libx264 \
  -preset medium \
  -crf 28 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  "$OUTPUT_FILE"

echo "✅ 壓縮完成！"
echo "檢查文件大小:"
ls -lh "$OUTPUT_FILE"

# 方案 2: 超小文件 (如果還是太大)
OUTPUT_FILE_SMALL="img/demo-small.mp4"
echo "🔧 創建超小版本..."

ffmpeg -i "$INPUT_FILE" \
  -vf "scale=960:540" \
  -c:v libx264 \
  -preset fast \
  -crf 32 \
  -c:a aac \
  -b:a 96k \
  -movflags +faststart \
  "$OUTPUT_FILE_SMALL"

echo "✅ 超小版本完成！"
ls -lh "$OUTPUT_FILE_SMALL"