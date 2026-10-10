/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: 'hsl(var(--accent))',
        dark: 'hsl(var(--foreground))',
        light: 'hsl(var(--background))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
