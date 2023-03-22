/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#DE5D83",
        black: "#101116",
        abutua: "#BEBEBE",
        abu: "#D9D9D9",
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        md: ["16px", "22px"],
        lg: ["18px", "24px"],
        xl: ["24px", "30px"],
        xxl: ["32px", "38px"],
      },
      fontFamily: {
        Helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
