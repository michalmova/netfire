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
        grotesk: ["Space Grotesk", 'sans-serif']
      },
      colors: {
        'white_1': '#ECECEC',
        'black_1': '#111010',
        'black_2': '#1C1B1B',
        purple: '#404F84',
        gray: '#D9D9D9',
        'gray_1': '#827D7D',
        'gray_2': '#443B3B',
        'gray_3': '#5F5959',
        'gray_4': 'rgba(217, 217, 217, 0.19)',
        'gray_5': '#41423E',
        'gray_6': '#C9C4C1',
        'creamy': '#E5E5DF',
        lime: '#CAE871'
      },
      padding: {
        'content': '291.5px'
      }
    },
  },
  plugins: [],
};
export default config;


