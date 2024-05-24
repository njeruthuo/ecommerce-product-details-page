/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        Black: "hsl(0, 0%, 0%)",
        White: "hsl(0, 0%, 100%)",
        Orange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",
        GrayishBlue: "hsl(220, 14%, 75%)",
        VeryDarkBlue: "hsl(220, 13%, 13%)",
        DarkGrayishBlue: "hsl(219, 9%, 45%)",
        LightGrayishBlue: "hsl(223, 64%, 98%)",
      },
      
    },
  },
  plugins: [],
};
