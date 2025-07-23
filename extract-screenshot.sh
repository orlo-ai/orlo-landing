#!/bin/bash

# 從影片中提取高品質截圖
INPUT_FILE="img/Orlo - Demo - 1.mov"
OUTPUT_IMAGE="img/orlo-hero-screenshot.png"

echo "📸 提取影片截圖..."

# 提取影片中間的一幀作為截圖
ffmpeg -i "$INPUT_FILE" \
  -ss 00:00:15 \
  -vframes 1 \
  -vf "scale=1200:-1" \
  -q:v 2 \
  "$OUTPUT_IMAGE"

echo "✅ 截圖提取完成！"
ls -lh "$OUTPUT_IMAGE"

# 創建較小的版本
OUTPUT_IMAGE_SMALL="img/orlo-hero-screenshot-small.png"
ffmpeg -i "$INPUT_FILE" \
  -ss 00:00:15 \
  -vframes 1 \
  -vf "scale=800:-1" \
  -q:v 3 \
  "$OUTPUT_IMAGE_SMALL"

echo "✅ 小尺寸截圖完成！"
ls -lh "$OUTPUT_IMAGE_SMALL"