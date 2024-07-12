/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#BEE2FD",
        Denim: "hsl(213, 96%, 18%)",
        Puplish: "hsl(243, 100%, 62%)",
        "Light-blue": "hsl(206, 94%, 87%)",
        "Red-errors": "hsl(354, 84%, 57%)",
        "Cool-gray": "hsl(231, 11%, 63%)",
        "Light-gray": "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
        "border-color": "#D6D9E6",
      },
    },
  },
  plugins: [],
};
