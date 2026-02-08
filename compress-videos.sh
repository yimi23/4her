#!/bin/bash

# Compress videos with audio

echo "Compressing videos..."

# Main directory videos
for video in IMG_3749.mov MVI_0117.MP4 IMG_5158.MOV IMG_4830.MOV IMG_4438.MOV 9AEA4CA4-48CD-4136-B2B0-C57E3B182ACE.mp4; do
  if [ -f "$video" ]; then
    echo "Compressing $video..."
    ffmpeg -i "$video" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k -movflags +faststart "compressed_$video" -y
    if [ $? -eq 0 ]; then
      mv "compressed_$video" "$video"
      echo "✓ $video compressed"
    fi
  fi
done

# Videos directory
cd videos
for video in 2nd.MOV last.MOV IMG_7575.MOV IMG_7585.MOV IMG_7584.MOV IMG_7581.MOV IMG_7582.MOV intro.MOV; do
  if [ -f "$video" ]; then
    echo "Compressing videos/$video..."
    ffmpeg -i "$video" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k -movflags +faststart "compressed_$video" -y
    if [ $? -eq 0 ]; then
      mv "compressed_$video" "$video"
      echo "✓ videos/$video compressed"
    fi
  fi
done

echo "All videos compressed!"
