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
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        black: "#0a0a0a",
        white: "#f5f3ef",
        gray: "#888888",
        light: "#e8e4de",
      },
    },
  },
  plugins: [],
};
export default config;