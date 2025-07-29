import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        forest: "#064526",
        forestDark: "#053a20",
        sage: "#a0e4b0",
        springGreen: "#00FF7F",
        forestGreen: "#007449",
        kellyGreen: "#40A332",
        ebony: "#2A2338",
        seafoamGreen: "#c9dabc",
      },
    },
  },
  plugins: [],
} satisfies Config;
