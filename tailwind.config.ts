import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff80ab", // Light pink for primary elements
        secondary: "#ff4081", // Pink for secondary elements
        bg: "#fff5f8", // Very light pink background, near to white
        text: "#333", // Darker color for text to ensure readability
        accent: "#f06292", // Accent pink color
        muted: "#ffc1e3", // Muted pink for less prominent elements
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'], // Example font family
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
