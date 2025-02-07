import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
        mono: ["var(--font-roboto-mono)", ...fontFamily.mono],
      },
      colors: {
        gray: {
          50: "oklch(var(--color-gray-50) / <alpha-value>)",
          100: "oklch(var(--color-gray-100) / <alpha-value>)",
          200: "oklch(var(--color-gray-200) / <alpha-value>)",
          300: "oklch(var(--color-gray-300) / <alpha-value>)",
          400: "oklch(var(--color-gray-400) / <alpha-value>)",
          500: "oklch(var(--color-gray-500) / <alpha-value>)",
          600: "oklch(var(--color-gray-600) / <alpha-value>)",
          700: "oklch(var(--color-gray-700) / <alpha-value>)",
          800: "oklch(var(--color-gray-800) / <alpha-value>)",
          900: "oklch(var(--color-gray-900) / <alpha-value>)",
          950: "oklch(var(--color-gray-950) / <alpha-value>)",
        },
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
          50: "oklch(var(--color-primary-50) / <alpha-value>)",
          100: "oklch(var(--color-primary-100) / <alpha-value>)",
          200: "oklch(var(--color-primary-200) / <alpha-value>)",
          300: "oklch(var(--color-primary-300) / <alpha-value>)",
          400: "oklch(var(--color-primary-400) / <alpha-value>)",
          500: "oklch(var(--color-primary-500) / <alpha-value>)",
          600: "oklch(var(--color-primary-600) / <alpha-value>)",
          700: "oklch(var(--color-primary-700) / <alpha-value>)",
          800: "oklch(var(--color-primary-800) / <alpha-value>)",
          900: "oklch(var(--color-primary-900) / <alpha-value>)",
          950: "oklch(var(--color-primary-950) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        chart: {
          "1": "oklch(var(--chart-1) / <alpha-value>)",
          "2": "oklch(var(--chart-2) / <alpha-value>)",
          "3": "oklch(var(--chart-3) / <alpha-value>)",
          "4": "oklch(var(--chart-4) / <alpha-value>)",
          "5": "oklch(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar-background) / <alpha-value>)",
          foreground: "oklch(var(--sidebar-foreground) / <alpha-value>)",
          primary: "oklch(var(--sidebar-primary) / <alpha-value>)",
          "primary-foreground":
            "oklch(var(--sidebar-primary-foreground) / <alpha-value>)",
          accent: "oklch(var(--sidebar-accent) / <alpha-value>)",
          "accent-foreground":
            "oklch(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "oklch(var(--sidebar-border) / <alpha-value>)",
          ring: "oklch(var(--sidebar-ring) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
