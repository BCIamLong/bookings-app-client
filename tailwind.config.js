/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('public/imgs/cabins/cabin-001.jpg')",
      },
    },
  },
  plugins: [],
};
