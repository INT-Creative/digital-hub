#!/bin/bash

#
# Simple Portfolio Placeholder Generator
# Creates basic placeholder images using available system tools
#

set -e

# Portfolio items (matching the data structure)
declare -A PORTFOLIO_ITEMS
PORTFOLIO_ITEMS[wellness-studio-transformation]="website-development"
PORTFOLIO_ITEMS[hvac-lead-generation]="digital-marketing"
PORTFOLIO_ITEMS[law-firm-rebrand]="graphic-design"
PORTFOLIO_ITEMS[dental-practice-automation]="marketing-automation"
PORTFOLIO_ITEMS[restaurant-delivery-site]="website-development"
PORTFOLIO_ITEMS[landscaping-seasonal-automation]="marketing-automation"
PORTFOLIO_ITEMS[accounting-firm-rebrand]="graphic-design"
PORTFOLIO_ITEMS[auto-repair-digital-presence]="website-development"
PORTFOLIO_ITEMS[plumbing-emergency-ads]="digital-marketing"
PORTFOLIO_ITEMS[consulting-lead-funnel]="digital-marketing"
PORTFOLIO_ITEMS[veterinary-clinic-automation]="marketing-automation"
PORTFOLIO_ITEMS[fitness-studio-complete-transformation]="digital-marketing"

# Create placeholder JPEG images using ImageMagick (if available)
create_placeholder() {
    local slug="$1"
    local service_type="$2"
    local width="$3"
    local height="$4"
    local suffix="$5"
    
    local output_dir="public/images/portfolio/${service_type}"
    mkdir -p "$output_dir"
    
    local filename="${slug}${suffix}.jpg"
    local filepath="${output_dir}/${filename}"
    
    echo "Creating ${filename} (${width}x${height})"
    
    # Try ImageMagick first
    if command -v convert >/dev/null 2>&1; then
        convert -size "${width}x${height}" \
            -background "#f3f4f6" \
            -fill "#6b7280" \
            -gravity center \
            -font Arial \
            -pointsize $((width/25)) \
            label:"${slug}\nFICTIONAL DEMO\n${width}x${height}" \
            "$filepath"
        echo "Created with ImageMagick: $filepath"
    else
        # Create a simple text placeholder file
        echo "PLACEHOLDER: ${slug} ${width}x${height} FICTIONAL DEMO" > "${filepath}.txt"
        # Create minimal file for fallback
        touch "$filepath"
        echo "Created basic placeholder: $filepath"
    fi
}

main() {
    echo "🎨 Creating simple portfolio placeholders..."
    
    # Change to project root
    if [[ ! -f "package.json" ]]; then
        echo "❌ Please run this script from the project root directory"
        exit 1
    fi
    
    # Check if ImageMagick is available
    if command -v convert >/dev/null 2>&1; then
        echo "✅ ImageMagick found - will create proper placeholder images"
    else
        echo "⚠️  ImageMagick not found - will create basic file placeholders"
        echo "   The responsive image system will fall back to SVG category placeholders"
    fi
    
    echo ""
    
    # Create placeholders for each portfolio item
    for slug in "${!PORTFOLIO_ITEMS[@]}"; do
        service_type="${PORTFOLIO_ITEMS[$slug]}"
        echo "Processing: $slug ($service_type)"
        
        # Create 400x300 version
        create_placeholder "$slug" "$service_type" 400 300 ""
        
        # Create @2x version  
        create_placeholder "$slug" "$service_type" 800 600 "@2x"
        
        echo ""
    done
    
    echo "✅ Basic placeholders created!"
    echo ""
    echo "📁 Directory structure:"
    find public/images/portfolio -type f | head -20
    
    echo ""
    echo "📋 Summary:"
    echo "- Created placeholder files for all $(( ${#PORTFOLIO_ITEMS[@]} * 2 )) image variants"
    echo "- Images will gracefully fallback to SVG category placeholders"
    echo "- Legal compliance 'FICTIONAL DEMO' labels included"
    echo "- Ready for responsive loading system testing"
}

main "$@"