import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        h1: "48px",
        h2: "36px",
        h3: "30px",
        h4: "24px",
        h5: "20px",
        h6: "16px",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#ffffff",
            foreground: "#000",
            primary: {
              50: "#e6f1e7",
              100: "#c0ddc4",
              200: "#97c7a0",
              300: "#6dbf7c",
              400: "#47a858",
              500: "#1c542b",
              600: "#184a25",
              700: "#133d1e",
              800: "#0f2e18",
              900: "#0a1f10",
              DEFAULT: "#1c542b",
              foreground: "#ffffff",
            },
            divider: "#0000001a",
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#000",
            foreground: "#ffffff",
            primary: {
              50: "#E8F5E9",
              100: "#C8E6C9",
              200: "#A5D6A7",
              300: "#81C784",
              400: "#66BB6A",
              500: "#4CAF50",
              600: "#43A047",
              700: "#388E3C",
              800: "#2E7D32",
              900: "#1B5E20",
              DEFAULT: "#4CAF50",
              foreground: "#ffffff",
            },
            divider: "#ffffff26",
          },
        },
      },
    }),
  ],
};
export default config;
