/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"], // ou "./src/**/*.{js,ts,jsx,tsx}"
  theme: {
    extend: {
      screens: {
        xs: { max: "400px" }, // breakpoint custom
      },
    },
  },
};
