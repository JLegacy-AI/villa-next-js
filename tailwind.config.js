/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-whitesmoke": "#FFFEFE",
        "secondary-orange": "#F35424",
        "tertiary-light-gray": "#CCCDCC",
        "tertiary-dark": "#1E1F1F",
        "border-color": "#EFEFEE",
        "accent-blue": "#437CFD",
        "secondary-text-color": "#7a7a7a",
      },
      fontSize: {
        "section-heading": "40px",
        "hero-section-heading": "62px",
        "normal-text": "16px",
        h6: "15px",
      },
    },
  },
  plugins: [],
};
