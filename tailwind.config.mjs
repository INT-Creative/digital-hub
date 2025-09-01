/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // INT Creative Brand Colors (RGB Values as specified)
        forest: {
          50: '#f0f9f4',
          100: '#dcf4e4',
          200: '#bbe8cc',
          300: '#8dd5a7',
          400: '#57ba7b',
          500: '#32a057',
          600: '#228043',
          700: '#1d6537',
          800: '#1a512e',
          900: '#0F2F20', // Corrected Primary Forest Green RGB(15,47,32)
          950: '#06231a',
        },
        gold: {
          DEFAULT: '#C29D49', // Gold Ochre RGB(194,157,73)
          50: '#fdf6e8',
          100: '#faedc2',
          200: '#f6da88',
          300: '#f0c44e',
          400: '#eab028',
          500: '#C29D49', // Primary Gold Ochre
          600: '#a68439',
          700: '#8b6a2e',
          800: '#72562a',
          900: '#5e4626',
        },
        sage: {
          50: '#f4f8f5',
          100: '#e6f0e8',
          200: '#cde1d2',
          300: '#a7cab0',
          400: '#7aab87',
          500: '#4A7C59', // Primary Sage Green
          600: '#3d6949',
          700: '#33543c',
          800: '#2b4431',
          900: '#243928',
          950: '#111f16',
        },
        beige: {
          DEFAULT: '#E5CCAC', // Primary Warm Beige RGB(229,204,172)
          50: '#F9F9F7', // Light Cream RGB(249,249,247)
          100: '#EDEAE0', // Soft Cream RGB(237,234,224)
          200: '#E5CCAC', // Primary Warm Beige
          300: '#dcc084',
          400: '#d1ab51',
          500: '#c49a30',
          600: '#a67e26',
          700: '#856421',
          800: '#6e5122',
          900: '#5e4622',
          950: '#342410',
        },
        // Brand text colors
        text: {
          dark: '#1C1C1C', // Professional Dark Text RGB(28,28,28)
        },
        // Keep some standard colors for variety
        primary: {
          DEFAULT: '#0F2F20', // Corrected to brand forest green
          50: '#f0f9f4',
          100: '#dcf4e4',
          200: '#bbe8cc',
          300: '#8dd5a7',
          400: '#57ba7b',
          500: '#32a057',
          600: '#228043',
          700: '#1d6537',
          800: '#1a512e',
          900: '#0F2F20', // Corrected to brand forest green
          950: '#06231a',
        },
        secondary: {
          DEFAULT: '#4A7C59',
          50: '#f4f8f5',
          100: '#e6f0e8',
          200: '#cde1d2',
          300: '#a7cab0',
          400: '#7aab87',
          500: '#4A7C59',
          600: '#3d6949',
          700: '#33543c',
          800: '#2b4431',
          900: '#243928',
          950: '#111f16',
        },
      },
      fontFamily: {
        // Brand typography hierarchy
        sans: ['Inter', 'system-ui', 'sans-serif'], // Body text
        heading: ['Playfair Display', 'serif'], // Headings - serif as per brand
        section: ['Montserrat Alternates', 'sans-serif'], // Section labels
        // CSS variables for consistent usage
        'brand-heading': 'var(--font-heading)',
        'brand-section': 'var(--font-section)',
        'brand-body': 'var(--font-body)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
  // Note: @tailwindcss/typography and @tailwindcss/forms plugins removed to avoid dependency issues
  // Add them back to package.json if needed: npm install @tailwindcss/typography @tailwindcss/forms
}