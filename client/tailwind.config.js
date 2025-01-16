/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        light: {
          primary: "#4A90E2", // Primary color
          secondary: "#50E3C2", // Secondary color
          background: "#F4F4F4", // Light background color
          text: "#333333", // Dark text color for light mode
          muted: "#8A8A8A", // Muted text color
        },
        dark: {
          fullBackground: "#08020d",
          mainComponentBackground: "#161616",
          textPrimary: "#ffffff",
          textSecondary: "#6b6872",
          inputBackground: "#272729",
          inputTextColor: "#cccbd0",
          inputPlaceHolderColor: "#333436",
        },
      },
    },
  },
  plugins: [],
};
