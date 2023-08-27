/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
      '3xl': '1920px',
      '4xl':'2400px'
      
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'task-main': '#23aaeb',
      'gradient-color-1': '#39a4dc',
      'gradient-color-2': '#2763ab',
      '#474747': "#474747",
      '#27b40c': '#27b40c',
      '#e8e4e4':'#e8e4e4'
    },
    extend: {
      rotate: {
        '135': '135deg',
      }
    },
  },
  plugins: [],
}