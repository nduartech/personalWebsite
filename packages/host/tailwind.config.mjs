import plugin from "tailwindcss/plugin.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
        typography: {
            DEFAULT: {
                css: {
                    color: '#ddf2ff',
                    a: {
                        color: '#b3e5ff',
                        '&:hover': {
                            color: '#b3e5ff',
                        },
                    },
                    h1: {
                        color: '#eef8ff',
                    },
                    h2: {
                        color: '#eef8ff',
                    },
                    h3: {
                        color: '#eef8ff',
                    },
                    h4: {
                        color: '#eef8ff',
                    },
                    h5: {
                        color: '#eef8ff',
                    },
                    h6: {
                        color: '#eef8ff',
                    },
                    p: {
                        color: '#eef8ff',
                    },
                },
            },
        },
      colors: {
        "regal-blue": {
          50: "#eef8ff",
          100: "#ddf2ff",
          200: "#b3e5ff",
          300: "#6fd2ff",
          400: "#23bcff",
          500: "#00a3ff",
          600: "#0082dd",
          700: "#0066b3",
          800: "#005793",
          900: "#013f6a",
          950: "#012d50",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};
