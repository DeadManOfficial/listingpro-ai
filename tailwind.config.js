/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff4500',
        dark: '#0a0a0a',
        darker: '#050505',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 69, 0, 0.3)',
        'glow-strong': '0 0 40px rgba(255, 69, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
