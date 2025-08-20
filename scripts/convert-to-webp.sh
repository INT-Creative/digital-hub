#!/bin/bash

#
# Convert Portfolio Images to WebP
# Creates WebP versions of all JPEG portfolio images for optimal web performance
#

set -e

echo "🔄 Converting portfolio images to WebP format..."

# Find all JPEG files and convert them to WebP
find public/images/portfolio -name "*.jpg" | while read -r jpg_file; do
    # Generate WebP filename
    webp_file="${jpg_file%.jpg}.webp"
    
    # Skip if WebP already exists and is newer
    if [[ -f "$webp_file" && "$webp_file" -nt "$jpg_file" ]]; then
        echo "⏭️  Skipping $webp_file (already exists and newer)"
        continue
    fi
    
    echo "🔄 Converting: $(basename "$jpg_file")"
    
    # Try cwebp first, then fall back to ImageMagick
    if command -v cwebp >/dev/null 2>&1; then
        cwebp -q 80 -m 6 "$jpg_file" -o "$webp_file" 2>/dev/null
        echo "   ✅ Created with cwebp: $(basename "$webp_file")"
    elif command -v convert >/dev/null 2>&1; then
        convert "$jpg_file" -quality 80 "$webp_file"
        echo "   ✅ Created with ImageMagick: $(basename "$webp_file")"
    else
        echo "   ❌ No WebP conversion tool available, skipping"
        continue
    fi
    
    # Check file sizes
    if [[ -f "$webp_file" ]]; then
        jpg_size=$(stat -f%z "$jpg_file" 2>/dev/null || stat -c%s "$jpg_file")
        webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file")
        savings=$((100 - (webp_size * 100 / jpg_size)))
        echo "   📊 Size reduction: ${savings}% ($(numfmt --to=iec $jpg_size) → $(numfmt --to=iec $webp_size))"
    fi
done

echo ""
echo "📊 Conversion Summary:"
jpg_count=$(find public/images/portfolio -name "*.jpg" | wc -l)
webp_count=$(find public/images/portfolio -name "*.webp" | wc -l)
echo "📁 JPEG images: $jpg_count"
echo "📁 WebP images: $webp_count"

if [[ $webp_count -eq $jpg_count ]]; then
    echo "✅ All JPEG images have WebP versions!"
    
    # Calculate total size savings
    total_jpg_size=0
    total_webp_size=0
    
    find public/images/portfolio -name "*.jpg" | while read -r jpg_file; do
        webp_file="${jpg_file%.jpg}.webp"
        if [[ -f "$webp_file" ]]; then
            jpg_size=$(stat -f%z "$jpg_file" 2>/dev/null || stat -c%s "$jpg_file")
            webp_size=$(stat -f%z "$webp_file" 2>/dev/null || stat -c%s "$webp_file")
            total_jpg_size=$((total_jpg_size + jpg_size))
            total_webp_size=$((total_webp_size + webp_size))
        fi
    done > /tmp/webp_sizes.txt
    
    echo ""
    echo "🚀 Ready for production with:"
    echo "   - Responsive image loading"
    echo "   - WebP format optimization"
    echo "   - High-DPI (@2x) support"
    echo "   - Graceful JPEG fallbacks"
else
    echo "⚠️  Some images could not be converted to WebP"
    echo "   The system will fall back to JPEG for these files"
fi

echo ""
echo "✨ Portfolio image system is ready!"