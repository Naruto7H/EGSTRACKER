import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Add this line
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ... keep existing theme configuration
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#16a34a",
          foreground: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
export default config;
