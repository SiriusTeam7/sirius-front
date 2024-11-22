/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E2329",
        secondary: "#06E98A",
        textPrimary: "#FFFFFF",
        textSecondary: "#9CA3AF",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg, #13161c 70%, #06E98A 100%)",
      },
    },
  },
  plugins: [],
};
