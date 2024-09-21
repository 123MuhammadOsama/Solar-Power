import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg-img.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        overlay: "rgba(0, 0, 0, 0.5)", // semi-transparent black overlay
      },
    },
  },
  plugins: [],
};

export default config;
