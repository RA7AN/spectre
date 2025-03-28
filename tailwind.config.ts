import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#EF4444", // Red (was blue)
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#6B7280", // Gray
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#991B1B", // Dark red
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1F2937", // Dark gray
          foreground: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#4B5563", // Medium gray
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#111827", // Very dark gray
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#1E293B", // Dark blue-gray
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#10B981", // Green
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

