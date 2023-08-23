/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        light: "#fff",
        primary: "#1C74BB", // 240,86,199
        secondary:"#30BDF2", // 80,230,21
        tertiary:"#2288CB"
      },
      dropShadow: {
        dark1: '2px 2px 0px black',
        branco1: '1px 1px 0px white',
        dark2: '1px 2px 2px #1A1A1A',
        drop1: '0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
