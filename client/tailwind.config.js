/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#FFFFFF",
          // dark: "#18181A",
          dark: "#08020c",
        },
        primaryText: {
          light: "#007BFF",
          // dark: "#fffeff",
          dark: "#E4E4E7",
        },
        secondaryText: {
          light: "#6C757D",
          dark: "#A1A1AA",
        },
        componentBackground: {
          // this is for buttons and not real component
          light: "#F0F0F0",
          dark: "#272729",
        },
        componentText: {
          light: "#F0F0F0",
          dark: "#ecedef",
        },
        "dark-gray": "#18181A",
        "darker-gray": "#272729", // Darker gray
        "light-gray": "#ecedef", // Light gray
        "primary-text": "#fffeff", // Primary text for dark
        "secondary-text": "#95939D", // Secondary text

        // Light theme colors (random values)
        "light-bg": "#FFFFFF", // Light background
        "light-text": "#000000", // Light text
        "light-accent": "#F0F0F0", // Light accent
        "light-primary": "#007BFF", // Random primary color
        "light-secondary": "#6C757D", // Random secondary color
      },
    },
  },
  plugins: [],
};
