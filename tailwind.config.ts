import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Enable the dark mode based on the 'class' attribute
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {

        // Define your light mode color palette
        light: {
          bgPrimary: '#4A90E2',
          bgSecondary: '#171717',
          textPrimary: 'black',
          textSecondary: '#cdcdcf'
        },

        // Define your dark mode color palette
        dark: {
          bgPrimary: '#101010',
          bgSecondary: '#171717',
          textPrimary: '#737278', //dimmed gray
          textSecondary: '#cdcdcf' //lighter gray, used for hover on main page
        },

      }
    }
  },
  plugins: []
};
export default config;
