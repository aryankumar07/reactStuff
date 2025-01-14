/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background_color)",
        foreground: "var(--foreground_color)"
      }
    },
  },
  plugins: [],
}
