import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        exo: ['Exo', 'sans-serif'],
      },
      colors: {
        'black_1': '#111010',
        purple: '#404F84',
        gray: '#D9D9D9',
        'gray_1': '#827D7D',
        'gray_2': '#443B3B',
        'gray_3': '#5F5959',
        'creamy': '#E5E5DF'
      },
      padding: {
        'content': '291.5px'
      }
    },
  },
  plugins: [],
};
export default config;



