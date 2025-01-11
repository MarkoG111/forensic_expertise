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
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      screens: {
        sm: "480px", // Mobile
        md: "768px", // Tablets
        lg: "1024px", // Laptops/Small Desktops
        xl: "1440px", // Larger Desktops
        "2xl": "1920px", // Very Large Screens
      },
    },
  },
  plugins: [],
} satisfies Config;
