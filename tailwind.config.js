/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts,js,css,jsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#f1f5fe",
        "custom-orange-bg": "#fee4dd",
        "custom-orange-txt": "#ff8c66",
        "custom-cyan-bg": "#a5f3eb",
        "custom-hr-color": "#fafafa",
      },
      translate: ["peer-checked"],
    },
  },
  plugins: [],
};
