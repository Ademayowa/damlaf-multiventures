import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        deepColor: '#040813',
        grayColor: '#99989F',
        blueColor: '#16A8EA',
        deepGray: '#151421',
      },
    },
  },
  plugins: [],
};
export default config;
