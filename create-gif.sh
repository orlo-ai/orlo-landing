#!/bin/bash

# 創建高品質 GIF 用於 Hero Section
INPUT_FILE="img/Orlo - Demo - 1.mov"
OUTPUT_GIF="img/demo-preview.gif"

echo "🎨 創建 GIF 預覽..."

# 提取前 10 秒，創建高品質 GIF
ffmpeg -i "$INPUT_FILE" \
  -t 10 \
  -vf "fps=15,scale=800:-1:flags=lanczos,palettegen" \
  -y palette.png

ffmpeg -i "$INPUT_FILE" \
  -i palette.png \
  -t 10 \
  -filter_complex "fps=15,scale=800:-1:flags=lanczos[x];[x][1:v]paletteuse" \
  -y "$OUTPUT_GIF"

rm palette.png

echo "✅ GIF 創建完成！"
ls -lh "$OUTPUT_GIF"