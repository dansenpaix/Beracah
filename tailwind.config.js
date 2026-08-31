/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beracah: {
          green: '#5B9D3C',
          'green-dark': '#48802e',
          'green-light': '#74b553',
          maroon: '#6C1A32',
          'maroon-dark': '#4e1123',
          'maroon-light': '#8a2342',
          charcoal: '#333333',
          bg: '#FFFFFF',
          'bg-alt': '#F8F9FA',
          border: '#E5E7EB',
          muted: '#6B7280',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'stone': '0 10px 30px -10px rgba(108, 26, 50, 0.12)',
        'stone-hover': '0 20px 40px -15px rgba(91, 157, 60, 0.25)',
      }
    },
  },
  plugins: [],
}
