#!/bin/bash

#
# Portfolio Image Placeholder Generator
# 
# Generates production-ready placeholder images for all portfolio items
# in the INT Creative Hub demonstration portfolio.
#
# Features:
# - Creates 400x300 and 800x600 (@2x) variants
# - Generates both JPEG and WebP formats
# - Service-specific color schemes and branding
# - Legal compliance "FICTIONAL DEMO" watermarks
# - Optimized file sizes for web delivery
#

set -e  # Exit on error

# Color scheme definitions based on service types
declare -A SERVICE_COLORS
SERVICE_COLORS[website-development]="#1a2e1e,#4a7c59"  # forest-900 to sage-600
SERVICE_COLORS[digital-marketing]="#4a7c59,#1a2e1e"   # sage-600 to forest-900  
SERVICE_COLORS[graphic-design]="#1a2e1e,#4a7c59"     # forest-900 to sage-600
SERVICE_COLORS[marketing-automation]="#4a7c59,#1a2e1e" # sage-600 to forest-900

# Portfolio items data (matches portfolio.ts structure)
declare -A PORTFOLIO_ITEMS
PORTFOLIO_ITEMS[wellness-studio-transformation]="website-development,Serenity Wellness Studio,Health & Wellness"
PORTFOLIO_ITEMS[hvac-lead-generation]="digital-marketing,Northeast HVAC Solutions,Home Services"
PORTFOLIO_ITEMS[law-firm-rebrand]="graphic-design,Thompson Legal Group,Legal Services"
PORTFOLIO_ITEMS[dental-practice-automation]="marketing-automation,Bright Smile Dental,Healthcare"
PORTFOLIO_ITEMS[restaurant-delivery-site]="website-development,Mama Rosa's Kitchen,Restaurant & Food Service"
PORTFOLIO_ITEMS[landscaping-seasonal-automation]="marketing-automation,Green Valley Landscaping,Landscaping & Lawn Care"
PORTFOLIO_ITEMS[accounting-firm-rebrand]="graphic-design,Precision Tax & Accounting,Professional Services"
PORTFOLIO_ITEMS[auto-repair-digital-presence]="website-development,Summit Auto Repair,Automotive Services"
PORTFOLIO_ITEMS[plumbing-emergency-ads]="digital-marketing,Rapid Response Plumbing,Home Services"
PORTFOLIO_ITEMS[consulting-lead-funnel]="digital-marketing,Strategic Business Advisors,Business Consulting"
PORTFOLIO_ITEMS[veterinary-clinic-automation]="marketing-automation,Caring Paws Veterinary Clinic,Veterinary Services"
PORTFOLIO_ITEMS[fitness-studio-complete-transformation]="digital-marketing,Iron Will Fitness Studio,Fitness & Wellness"

# Check dependencies
check_dependencies() {
    echo "🔍 Checking dependencies..."
    
    if ! command -v convert &> /dev/null; then
        echo "❌ ImageMagick 'convert' not found. Installing..."
        if command -v apt-get &> /dev/null; then
            sudo apt-get update && sudo apt-get install -y imagemagick
        elif command -v brew &> /dev/null; then
            brew install imagemagick
        else
            echo "❌ Please install ImageMagick manually"
            exit 1
        fi
    fi
    
    if ! command -v cwebp &> /dev/null; then
        echo "❌ WebP 'cwebp' not found. Installing..."
        if command -v apt-get &> /dev/null; then
            sudo apt-get install -y webp
        elif command -v brew &> /dev/null; then
            brew install webp
        else
            echo "❌ Please install WebP tools manually"
            exit 1
        fi
    fi
    
    echo "✅ All dependencies satisfied"
}

# Generate single portfolio image
generate_portfolio_image() {
    local slug="$1"
    local service_type="$2"
    local title="$3"
    local industry="$4"
    local width="$5"
    local height="$6"
    local suffix="$7"
    
    local colors="${SERVICE_COLORS[$service_type]}"
    local color1="${colors%,*}"
    local color2="${colors#*,}"
    
    local output_dir="public/images/portfolio/${service_type}"
    local filename="${slug}${suffix}"
    
    # Create directory if it doesn't exist
    mkdir -p "$output_dir"
    
    echo "   📸 Generating ${filename}.jpg (${width}x${height})"
    
    # Generate JPEG with gradient background and professional styling
    convert -size "${width}x${height}" \
        -define gradient:vector="0,0 ${width},${height}" \
        gradient:"${color1}-${color2}" \
        -blur 0x2 \
        \( -size "${width}x${height}" xc:none \
           -fill "rgba(255,255,255,0.1)" \
           -draw "rectangle 0,0 ${width},$(($height/3))" \
           -fill "rgba(0,0,0,0.1)" \
           -draw "rectangle 0,$((2*$height/3)) ${width},${height}" \) \
        -composite \
        \( -background none \
           -fill white \
           -font Arial-Bold \
           -pointsize $(($width/20)) \
           -size $(($width-40))x \
           caption:"${title}" \) \
        -gravity North \
        -geometry +0+$(($height/4)) \
        -composite \
        \( -background none \
           -fill "rgba(255,255,255,0.8)" \
           -font Arial \
           -pointsize $(($width/30)) \
           -size $(($width-40))x \
           caption:"${industry}" \) \
        -gravity Center \
        -geometry +0-$(($height/8)) \
        -composite \
        \( -background none \
           -fill "rgba(255,215,0,1)" \
           -font Arial-Bold \
           -pointsize $(($width/35)) \
           -size $(($width-20))x \
           caption:"FICTIONAL DEMONSTRATION" \) \
        -gravity South \
        -geometry +0+20 \
        -composite \
        -quality 85 \
        "${output_dir}/${filename}.jpg"
    
    # Generate WebP version
    echo "   🌐 Converting to ${filename}.webp"
    cwebp -q 80 -m 6 "${output_dir}/${filename}.jpg" -o "${output_dir}/${filename}.webp" 2>/dev/null
    
    # Verify files were created
    if [[ -f "${output_dir}/${filename}.jpg" && -f "${output_dir}/${filename}.webp" ]]; then
        local jpg_size=$(du -h "${output_dir}/${filename}.jpg" | cut -f1)
        local webp_size=$(du -h "${output_dir}/${filename}.webp" | cut -f1)
        echo "   ✅ Generated ${filename} - JPEG: ${jpg_size}, WebP: ${webp_size}"
    else
        echo "   ❌ Failed to generate ${filename}"
        return 1
    fi
}

# Generate images for all portfolio items
generate_all_images() {
    echo "🎨 Generating portfolio placeholder images..."
    
    local total_items=${#PORTFOLIO_ITEMS[@]}
    local current_item=0
    
    for slug in "${!PORTFOLIO_ITEMS[@]}"; do
        current_item=$((current_item + 1))
        echo ""
        echo "[$current_item/$total_items] Processing: $slug"
        
        IFS=',' read -r service_type title industry <<< "${PORTFOLIO_ITEMS[$slug]}"
        
        # Generate standard size (400x300)
        generate_portfolio_image "$slug" "$service_type" "$title" "$industry" 400 300 ""
        
        # Generate @2x size (800x600) 
        generate_portfolio_image "$slug" "$service_type" "$title" "$industry" 800 600 "@2x"
    done
}

# Generate summary report
generate_report() {
    echo ""
    echo "📊 Portfolio Image Generation Report"
    echo "======================================"
    
    local total_files=0
    local total_size=0
    
    for service_type in website-development digital-marketing graphic-design marketing-automation; do
        local dir="public/images/portfolio/${service_type}"
        if [[ -d "$dir" ]]; then
            local count=$(find "$dir" -name "*.jpg" -o -name "*.webp" | wc -l)
            local size=$(du -sh "$dir" 2>/dev/null | cut -f1 || echo "0B")
            echo "📁 ${service_type}: ${count} files (${size})"
            total_files=$((total_files + count))
        fi
    done
    
    echo "📁 Total: ${total_files} files"
    echo ""
    
    # Validate structure
    echo "🔍 Validating image structure..."
    local missing_files=()
    
    for slug in "${!PORTFOLIO_ITEMS[@]}"; do
        IFS=',' read -r service_type _ _ <<< "${PORTFOLIO_ITEMS[$slug]}"
        
        for format in jpg webp; do
            for size in "" "@2x"; do
                local file="public/images/portfolio/${service_type}/${slug}${size}.${format}"
                if [[ ! -f "$file" ]]; then
                    missing_files+=("$file")
                fi
            done
        done
    done
    
    if [[ ${#missing_files[@]} -eq 0 ]]; then
        echo "✅ All portfolio images generated successfully"
        echo ""
        echo "🚀 Ready for production deployment!"
        echo "   - Responsive images with WebP support"
        echo "   - High-DPI (@2x) variants included"
        echo "   - Legal compliance watermarks applied" 
        echo "   - Optimized file sizes for web delivery"
    else
        echo "❌ Missing files:"
        for file in "${missing_files[@]}"; do
            echo "   - $file"
        done
        echo ""
        echo "Run the script again to regenerate missing files."
        exit 1
    fi
}

# Cleanup function
cleanup() {
    echo ""
    echo "🧹 Cleaning up temporary files..."
    find public/images/portfolio -name "*.tmp" -delete 2>/dev/null || true
}

# Main execution
main() {
    echo "🎯 INT Creative Hub - Portfolio Image Generator"
    echo "=============================================="
    echo ""
    
    # Change to project root
    if [[ ! -f "package.json" ]]; then
        echo "❌ Please run this script from the project root directory"
        exit 1
    fi
    
    # Setup trap for cleanup
    trap cleanup EXIT
    
    # Execute generation pipeline
    check_dependencies
    echo ""
    generate_all_images
    echo ""
    generate_report
    
    echo ""
    echo "🎉 Portfolio image generation complete!"
}

# Execute if run directly (not sourced)
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi