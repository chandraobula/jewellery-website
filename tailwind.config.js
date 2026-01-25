/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["Inter", "sans-serif"],
        accent: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#6366F1",        /* Indigo */
          secondary: "#8B5CF6",      /* Purple */
          accent: "#EC4899",         /* Pink */
          dark: "#1F2937",           /* Dark Gray */
          light: "#F9FAFB",          /* Light Gray */
        },
        neutral: {
          50: "#FCFAF8",
          100: "#F6F2ED",
          200: "#E7E2DC",
          300: "#CFC7BE",
          400: "#AFA69D",
          500: "#7E756D",
          700: "#4A433D",
          900: "#1F1A17",
        },
        fashion: {
          indigo: "#6366F1",
          purple: "#8B5CF6",
          pink: "#EC4899",
          teal: "#14B8A6",
        },
        status: {
          success: "#3B8C76",
          warning: "#E8AA4E",
          error: "#C94F4F",
        }
      },
      backgroundImage: {
        'gradient-fashion': 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
        'gradient-fashion-pink': 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
        'gradient-fashion-dark': 'linear-gradient(135deg, #1F2937 0%, #374151 100%)',
        'gradient-light-blur': 'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(249,250,251,1) 100%)',
      },
      spacing: {
        'xxs': '2px',
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '20px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '14px',
        'xl': '22px',
        'pill': '50px',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 20px rgba(0, 0, 0, 0.08)',
        'strong': '0 10px 30px rgba(0, 0, 0, 0.12)',
        'glow-fashion': '0 0 15px rgba(99,102,241,0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
