import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/dialogs/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-1":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%);",
        "empty-workspace": "url(/img/en-jerneering-ui/empty-workspace-bg.png)",
      },
      opacity: {
        "15": "15%",
      },
      colors: {
        primary: {
          900: "#E09D37",
          600: "#F7C343",
          400: "#FBE09D",
          100: "#FEF9EB",
        },
        nav: {
          100: "#F0F0F0",
        },
        border: {
          100: "#EDEDED",
          200: "#E8E8E8",
          300: "#DBDBDB",
          400: "#8F8F8F",
          500: "#707070",
        },
        background: {
          50: "#F7F7F7",
          100: "#F2F2F2",
          200: "#EDEDED",
        },
        success: {
          50: "#F3FAF7",
          600: "#046C4E",
        },
        error: {
          50: "#FDF2F2",
          600: "#C81E1E",
        },
        sub: {
          400: "#8F8F8F",
          500: "#707070",
        },
        surface: {
          "separator-low": "#E5E5E5",
        },
      },
      fontSize: {
        xl: ["1.25rem", "1.875rem"],
        "3xl": ["2rem", "2.375rem"],
        "4xl": ["2.25rem", "3.375rem"],
        "7xl": ["4rem", "4.75rem"],
        h3: ["2.5rem", "3.5rem"],
        h4: ["2rem", "3rem"],
      },
      lineHeight: {
        h3: "3.5rem",
        h4: "3rem",
      },
      animation: {
        "slide-up": "slideUp 0.5s ease-out forwards",
        "accordion-up": "accordionUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "accordion-down": "accordionDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "slide-up-and-fade":
          "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-and-fade":
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-and-fade":
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-and-fade":
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        accordionUp: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionDown: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      spacing: {
        "4.5": "1.125rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "12.5": "3.125rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "24.5": "6.125rem",
        "30": "7.5rem",
        "42": "10.5rem",
        "50": "12.5rem",
        "76": "19rem",
        "88": "22rem",
        "92": "23rem",
      },
      borderRadius: {
        1: "0.063rem",
      },
      boxShadow: {
        menu: "0px 4px 6px 0px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
        tooltip: "0px 2px 12px 0px rgba(0, 0, 0, 0.1)",
        thumbnail:
          "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
        "comp-toolbar":
          "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)",
        checkbox: "0px 0px 0px 2px rgba(23, 23, 23, 0.10)",
      },
      flexBasis: {
        "3/10": "30%",
      },
      gridTemplateColumns: {
        projects: "repeat(auto-fill, minmax(27.5rem, 1fr));",
        "elm-list": "repeat(auto-fill, minmax(9rem, 1fr));",
        "img-list": "repeat(auto-fill, 120px);",
      },
      aspectRatio: {
        "1.85/1": "1.85 / 1",
        "16/10": "16 / 10",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
