/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    // 👇 This line is critical: React Cosmos reads fixtures from src/cosmos
    // but those fixtures RENDER components from src/components, so we must
    // make sure Tailwind also scans the cosmos folder to keep generated classes.
    './src/cosmos/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      // Design tokens — the single source of truth for our Adoption Pet brand
      colors: {
        brand: {
          // Warm orange — friendly, energetic, fits a pet adoption vibe
          primary: '#FF7A59',
          'primary-hover': '#E5674A',
          // Sage green — adoption, growth, wellbeing
          secondary: '#6FAE8E',
          'secondary-hover': '#578F71'
        },
        accent: {
          // Soft cream background
          cream: '#FFF8F1',
          // Cozy brown text
          bark: '#4A3B30'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F5F1EC'
        },
        state: {
          success: '#22C55E',
          warning: '#F59E0B',
          danger: '#EF4444',
          info: '#3B82F6'
        }
      },
      fontFamily: {
        // Friendly rounded sans for headings, neutral for body
        display: ['"Fredoka"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        // A bit more rounded, to feel pet-friendly and soft
        xl: '0.875rem',
        '2xl': '1.25rem'
      },
      boxShadow: {
        // Soft, warm shadow
        soft: '0 4px 14px rgba(74, 59, 48, 0.08)'
      }
    }
  },
  plugins: []
};
