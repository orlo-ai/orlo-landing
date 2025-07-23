#!/bin/bash

# 創建 Hero Section 專用的高品質 GIF
INPUT_FILE="img/Orlo - Demo - 1.mov"
OUTPUT_GIF="img/hero-demo.gif"

echo "🎨 創建 Hero Section GIF..."

# 提取最精華的 15 秒片段，創建高品質 GIF
ffmpeg -i "$INPUT_FILE" \
  -ss 00:00:10 \
  -t 15 \
  -vf "fps=20,scale=1200:-1:flags=lanczos,palettegen=stats_mode=diff" \
  -y palette.png

ffmpeg -i "$INPUT_FILE" \
  -i palette.png \
  -ss 00:00:10 \
  -t 15 \
  -filter_complex "fps=20,scale=1200:-1:flags=lanczos,split[s0][s1];[s0]palettegen=stats_mode=diff[p];[s1][p]paletteuse=dither=bayer" \
  -loop 0 \
  -y "$OUTPUT_GIF"

rm palette.png

echo "✅ Hero GIF 創建完成！"
ls -lh "$OUTPUT_GIF"

# 創建較小的備用版本
OUTPUT_GIF_SMALL="img/hero-demo-small.gif"
echo "🔧 創建小尺寸版本..."

ffmpeg -i "$INPUT_FILE" \
  -ss 00:00:10 \
  -t 10 \
  -vf "fps=15,scale=800:-1:flags=lanczos,palettegen" \
  -y palette_small.png

ffmpeg -i "$INPUT_FILE" \
  -i palette_small.png \
  -ss 00:00:10 \
  -t 10 \
  -filter_complex "fps=15,scale=800:-1:flags=lanczos[x];[x][1:v]paletteuse" \
  -loop 0 \
  -y "$OUTPUT_GIF_SMALL"

rm palette_small.png

echo "✅ 小尺寸 GIF 完成！"
ls -lh "$OUTPUT_GIF_SMALL"