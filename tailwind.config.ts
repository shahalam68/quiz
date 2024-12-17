import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // White background
        foreground: "#000000", // Black text
      },
      fontFamily: {
        poppins: ["Poppins", "Arial", "Helvetica", "sans-serif"], // Extend font family
      },
    },
  },
  plugins: [],
} satisfies Config;
