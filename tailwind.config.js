/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { colors: { primary: "#153a64" } },
    screens: {
      "2xl": { max: "1435px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "880px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "600px" },
      // => @media (max-width: 639px) { ... }

      mb: { max: "440px" },
      // => @media (max-width: 440px) { ... }
    },
  },
  plugins: [],
};
