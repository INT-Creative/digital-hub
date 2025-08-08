/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // INT Creative Brand Colors
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
          900: '#0B3D2E', // Primary Forest Green
          950: '#06231a',
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
          50: '#F5F0E6', // Primary Warm Beige
          100: '#f2eadb',
          200: '#e8d5b7',
          300: '#dcc084',
          400: '#d1ab51',
          500: '#c49a30',
          600: '#a67e26',
          700: '#856421',
          800: '#6e5122',
          900: '#5e4622',
          950: '#342410',
        },
        // Keep some standard colors for variety
        primary: {
          DEFAULT: '#0B3D2E',
          50: '#f0f9f4',
          100: '#dcf4e4',
          200: '#bbe8cc',
          300: '#8dd5a7',
          400: '#57ba7b',
          500: '#32a057',
          600: '#228043',
          700: '#1d6537',
          800: '#1a512e',
          900: '#0B3D2E',
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
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
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